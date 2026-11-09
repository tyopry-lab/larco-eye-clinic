#!/usr/bin/env python3
"""Arma las páginas del sitio a partir de los parciales compartidos.

El sitio publicado sigue siendo HTML plano: este script no corre en el
navegador ni hace falta para servirlo. Existe sólo para que la cabecera y el
pie —idénticos en las seis páginas— vivan en un único archivo y no se
desincronicen cuando se toca uno.

    python3 tools/build.py            # reescribe las páginas
    python3 tools/build.py --check    # falla si alguna quedó desactualizada

Cada página son dos cosas: una entrada en PAGES (title, description, cuál es
el ítem activo del menú) y un archivo pages/<slug>.content.html con el <main>.
"""

import argparse
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
PARTIALS = ROOT / "_partials"
CONTENT = ROOT / "pages"

# Subir esto invalida la caché de los navegadores en css y js a la vez.
ASSET_VERSION = 250

# Correo que recibe los formularios (consentimiento y contacto) vía FormSubmit.
# Cambiarlo aquí y volver a correr el build actualiza todos los formularios.
# Los mensajes de Contáctanos van al buzón de citas de la clínica.
FORM_EMAIL = "citas@larcoeyeclinic.com"
# El consentimiento de datos de pacientes va a su propio buzón.
FORM_EMAIL_DATOS = "protecciondatos@larcoeyeclinic.com"
SITE_URL = "https://larcoeyeclinic.com/"

PAGES = [
    {
        "slug": "index",
        "content": "inicio",
        "nav": "inicio",
        "title": "Clínica oftalmológica en Cumbayá, Quito | Larco Eye Clinic",
        "description": "Clínica oftalmológica en Cumbayá, Quito. Tres generaciones de cirujanos "
                       "oftalmólogos, tecnología ZEISS y atención personalizada en córnea, "
                       "catarata, retina, glaucoma y cirugía refractiva.",
        "og_title": "Larco Eye Clinic — 70 años cuidando tu visión",
        "og_description": "Tres generaciones de cirujanos oftalmólogos en Quito. Tradición médica familiar "
                          "con diagnóstico y quirófano de última generación.",
    },
    {
        "slug": "sobre-nosotros",
        "content": "sobre-nosotros",
        "nav": "sobre",
        "title": "Oftalmólogos en Quito: historia y equipo | Larco Eye Clinic",
        "description": "Un legado que recorre tres generaciones de cirujanos oftalmólogos, desde "
                       "el primer consultorio en Ibarra en 1950 hasta la clínica de hoy en Quito.",
        "og_title": "Sobre Nosotros — Larco Eye Clinic",
        "og_description": "Un legado que recorre tres generaciones: nuestra historia, nuestro "
                          "equipo y las instalaciones de la clínica.",
    },
    {
        "slug": "consultas-examenes",
        "content": "consultas-examenes",
        "nav": "servicios",
        "title": "Consulta y exámenes oftalmológicos en Quito | Larco Eye Clinic",
        "description": "La consulta oftalmológica y los quince exámenes de diagnóstico con que "
                       "confirmamos cada diagnóstico: Pentacam, OCT, Angio-OCT, campimetría y más.",
        "og_title": "Consultas y Exámenes — Larco Eye Clinic",
        "og_description": "El primer paso hacia una mejor visión: consulta integral y diagnóstico "
                          "de alta precisión.",
    },
    {
        "slug": "especialidades",
        "content": "especialidades",
        "nav": "servicios",
        "title": "Cirugía de catarata, retina y glaucoma en Quito | Larco Eye Clinic",
        "description": "Córnea, catarata, retina y vítreo, glaucoma y cirugía refractiva: en qué "
                       "consiste cada condición y cómo la tratamos.",
        "og_title": "Especialidades — Larco Eye Clinic",
        "og_description": "Atención oftalmológica especializada en córnea, catarata, retina, "
                          "glaucoma y cirugía refractiva.",
    },
    {
        "slug": "casos-clinicos",
        "content": "casos-clinicos",
        "nav": "casos",
        "title": "Casos clínicos y testimonios de pacientes | Larco Eye Clinic",
        "description": "Casos reales analizados por nuestros especialistas, del diagnóstico al "
                       "resultado, y los testimonios de quienes ya pasaron por la clínica.",
        "og_title": "Casos Clínicos — Larco Eye Clinic",
        "og_description": "Casos reales analizados por nuestros especialistas. Del diagnóstico al "
                          "resultado.",
    },
    {
        "slug": "contactanos",
        "content": "contactanos",
        "nav": "contacto",
        "title": "Citas y contacto: oftalmólogo en Cumbayá, Quito | Larco Eye Clinic",
        "description": "Agenda tu cita con nuestro equipo. Dirección, teléfono, WhatsApp, correo "
                       "y horarios de atención de la clínica en Cumbayá, Quito.",
        "og_title": "Contáctanos — Larco Eye Clinic",
        "og_description": "Estamos para atenderte. Agenda tu cita con nuestro equipo.",
    },
    {
        "slug": "dr-marcelo-larco",
        "physician": ("Cirujano oftalmólogo, especialista en córnea, catarata y cirugía refractiva", "dr-marcelo-larco-4.webp", ['Córnea', 'Catarata', 'Cirugía refractiva', 'Queratocono']),
        "content": "dr-marcelo-larco",
        "nav": "sobre",
        "title": "Dr. Marcelo Larco, oftalmólogo en Quito | Larco Eye Clinic",
        "description": "Dr. Marcelo Larco, cirujano oftalmólogo especialista en córnea, catarata "
                       "y cirugía refractiva. Formación, trayectoria y publicaciones.",
        "og_title": "Dr. Marcelo Larco — Larco Eye Clinic",
        "og_description": "Cirujano oftalmólogo · córnea, catarata y cirugía refractiva.",
    },
    {
        "slug": "dr-roberto-larco",
        "physician": ("Cirujano oftalmólogo, especialista en retina, mácula y vítreo", "dr-roberto-larco-4.webp", ['Retina', 'Mácula', 'Vítreo', 'Degeneración macular']),
        "content": "dr-roberto-larco",
        "nav": "sobre",
        "title": "Dr. Roberto Larco, especialista en retina en Quito | Larco Eye Clinic",
        "description": "Dr. Roberto Larco, cirujano oftalmólogo especialista en retina, mácula y "
                       "vítreo, con formación en Brasil.",
        "og_title": "Dr. Roberto Larco — Larco Eye Clinic",
        "og_description": "Cirujano oftalmólogo · retina, mácula y vítreo.",
    },
    {
        "slug": "consentimiento",
        "robots": "noindex, follow",
        "content": "consentimiento",
        "nav": "contacto",
        "title": "Consentimiento de datos — Larco Eye Clinic",
        "description": "Acepta la política de tratamiento de datos personales de pacientes de "
                       "Larco Eye Clinic.",
        "og_title": "Consentimiento de datos — Larco Eye Clinic",
        "og_description": "Aceptar políticas de tratamiento de datos de pacientes.",
    },
    {
        "slug": "politica-privacidad",
        "content": "politica-privacidad",
        "nav": "contacto",
        "title": "Política de tratamiento de datos — Larco Eye Clinic",
        "description": "Cómo Larco Eye Clinic recoge, usa y protege los datos personales de "
                       "sus pacientes.",
        "og_title": "Política de tratamiento de datos — Larco Eye Clinic",
        "og_description": "Cómo protegemos los datos personales de nuestros pacientes.",
    },
    {
        "slug": "gracias",
        "robots": "noindex, follow",
        "content": "gracias",
        "nav": "contacto",
        "title": "Recibimos tu información — Larco Eye Clinic",
        "description": "Confirmación de envío.",
        "og_title": "Recibimos tu información — Larco Eye Clinic",
        "og_description": "Confirmación de envío.",
    },
    {
        "slug": "dra-maria-gabriela-larco",
        "physician": ("Cirujana oftalmóloga", "dra-gabriela-larco.webp", ['Oftalmología', 'Segmento posterior']),
        "content": "dra-maria-gabriela-larco",
        "nav": "sobre",
        "title": "Dra. María Gabriela Larco, oftalmóloga en Quito | Larco Eye Clinic",
        "description": "Dra. María Gabriela Larco, cirujana oftalmóloga formada en Buenos Aires, con máster "
                       "en patología y cirugía del segmento posterior (Barraquer). Atiende en Cumbayá, Quito.",
        "og_title": "Dra. María Gabriela Larco — Larco Eye Clinic",
        "og_description": "Cirujana oftalmóloga.",
    },
    {
        "slug": "dr-jose-alvarez",
        "physician": ("Oftalmólogo, subespecialista en cirugía plástica ocular", "dr-jose-alvarez.webp", ['Cirugía plástica ocular', 'Párpados', 'Órbita', 'Vías lagrimales']),
        "content": "dr-jose-alvarez",
        "nav": "sobre",
        "title": "Dr. José Álvarez Hermosa, oculoplástica en Quito | Larco Eye Clinic",
        "description": "Dr. José Álvarez Hermosa, oftalmólogo subespecialista en cirugía plástica ocular: "
                       "párpados, órbita y vías lagrimales. Formación en la UNAM. Atiende en Cumbayá, Quito.",
        "og_title": "Dr. José Álvarez Hermosa — Larco Eye Clinic",
        "og_description": "Oftalmólogo, cirugía plástica ocular.",
    },
]

HEAD = """<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<meta name="description" content="{description}">
<meta name="theme-color" content="#F4F2ED">
<meta name="robots" content="{robots}">
<link rel="canonical" href="{canonical}">

<meta property="og:type" content="website">
<meta property="og:locale" content="es_EC">
<meta property="og:title" content="{og_title}">
<meta property="og:description" content="{og_description}">
<meta property="og:site_name" content="Larco Eye Clinic">
<meta property="og:url" content="{canonical}">
<meta property="og:image" content="{site}assets/img/og-larco-eye-clinic.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Edificio de Larco Eye Clinic en Cumbayá, Quito">
<meta name="twitter:card" content="summary_large_image">

<link rel="icon" type="image/svg+xml" href="assets/img/logo.svg">
{jsonld}<link rel="preload" href="assets/fonts/montserrat-latin-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="assets/css/fonts.css?v={v}">
<link rel="stylesheet" href="assets/css/tokens.css?v={v}">
<link rel="stylesheet" href="assets/css/components.css?v={v}">
<link rel="stylesheet" href="assets/css/site.css?v={v}">
<link rel="stylesheet" href="assets/css/pages.css?v={v}">
<noscript><style>
  /* Sin JS la hamburguesa no puede abrir nada, así que el menú va en línea. */
  @media (max-width: 1024px) {{
    .nav-toggle {{ display: none; }}
    .site-header {{ position: static; flex-wrap: wrap; padding-top: 12px; padding-bottom: 12px; }}
    .nav {{ position: static; display: flex; max-height: none; padding: 12px 0; box-shadow: none; }}
    .hero__inner {{ padding-top: 48px; }}
    .page-hero {{ padding-top: 48px; }}
  }}
</style></noscript>
</head>
"""

# Datos estructurados para Google (ficha de la clínica). Se insertan en Inicio
# y Contáctanos como valor de str.format, así que las llaves van simples.
JSONLD = """<script type="application/ld+json">
{"@context":"https://schema.org","@type":"MedicalClinic","@id":"https://larcoeyeclinic.com/#clinica",
"name":"Larco Eye Clinic","alternateName":"Nueva Clínica Doctores Larco",
"description":"Clínica oftalmológica en Cumbayá, Quito: córnea, catarata, retina y vítreo, glaucoma, cirugía refractiva, óptica y exámenes de diagnóstico.",
"url":"https://larcoeyeclinic.com/","logo":"https://larcoeyeclinic.com/assets/img/logo.svg",
"image":"https://larcoeyeclinic.com/assets/img/og-larco-eye-clinic.jpg",
"telephone":"+593999522699","email":"larcoeyeclinic@gmail.com",
"address":{"@type":"PostalAddress","streetAddress":"Av. Oswaldo Guayasamín y Calle 1, Urbanización Santa Lucía Baja, junto al Paseo San Francisco","addressLocality":"Cumbayá, Quito","addressRegion":"Pichincha","postalCode":"170157","addressCountry":"EC"},
"geo":{"@type":"GeoCoordinates","latitude":-0.1997235,"longitude":-78.4377163},
"hasMap":"https://www.google.com/maps/search/?api=1&query=LARCO%20Eye%20Clinic&query_place_id=ChIJx-hFJQCR1ZERc1__6dP2OqU",
"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"08:00","closes":"17:00"}],
"areaServed":["Quito","Cumbayá","Tumbaco","Ecuador"],
"availableService":[{"@type":"MedicalProcedure","name":"Cirugía de catarata"},{"@type":"MedicalProcedure","name":"Cirugía refractiva"},{"@type":"MedicalProcedure","name":"Tratamiento de retina y vítreo"},{"@type":"MedicalProcedure","name":"Tratamiento de glaucoma"},{"@type":"MedicalProcedure","name":"Cirugía de córnea"}],
"sameAs":["https://www.facebook.com/larcoeyeclinic/","https://www.instagram.com/larco.eyeclinic/","https://www.tiktok.com/@larcoeyeclinic"]}
</script>
"""

def physician_jsonld(page: dict) -> str:
    """Ficha `Physician` para Google en la página de cada doctor."""
    import json
    spec, img, about = page["physician"]
    name = page["title"].split(",")[0]
    data = {
        "@context": "https://schema.org", "@type": "Physician",
        "@id": f"{SITE_URL}{page['slug']}.html#medico",
        "name": name, "description": spec,
        "url": f"{SITE_URL}{page['slug']}.html",
        "image": f"{SITE_URL}assets/img/photos/{img}",
        "knowsAbout": about,
        "telephone": "+593999522699",
        "address": {"@type": "PostalAddress",
                    "streetAddress": "Av. Oswaldo Guayasamín y Calle 1, Urbanización Santa Lucía Baja, junto al Paseo San Francisco",
                    "addressLocality": "Cumbayá, Quito", "addressRegion": "Pichincha",
                    "postalCode": "170157", "addressCountry": "EC"},
        "hospitalAffiliation": {"@type": "MedicalClinic", "@id": f"{SITE_URL}#clinica",
                                "name": "Larco Eye Clinic", "url": SITE_URL},
    }
    return ('<script type="application/ld+json">\n'
            + json.dumps(data, ensure_ascii=False, separators=(",", ":")) + "\n</script>\n")


SCRIPTS = '<script src="assets/js/site.js?v={v}" defer></script>\n</body>\n</html>\n'


def mark_active(header: str, nav: str) -> str:
    """Deja `aria-current` y la clase de página actual en el ítem que toca."""
    # El parcial llega con Inicio marcado; se limpia y se vuelve a marcar.
    header = header.replace('<a class="nav__link nav__link--current" href="index.html" aria-current="page">',
                            '<a class="nav__link" href="index.html">')

    hrefs = {
        "inicio": "index.html",
        "sobre": "sobre-nosotros.html",
        "servicios": "consultas-examenes.html",
        "casos": "casos-clinicos.html",
        "contacto": "contactanos.html",
    }
    href = hrefs[nav]

    # Sólo dentro del <nav>: el logo también apunta a index.html.
    n0 = header.index('<nav class="nav"')
    n1 = header.index("</nav>", n0)
    region = header[n0:n1]

    pattern = re.compile(r'<a class="nav__link"((?:(?!>).)*?)href="' + re.escape(href) + r'"')
    m = pattern.search(region)
    if not m:
        raise SystemExit(f"build: no encontré el enlace de menú para {href!r}")
    marked = ('<a class="nav__link nav__link--current" aria-current="page"'
              + m.group(1) + f'href="{href}"')
    region = region[:m.start()] + marked + region[m.end():]
    return header[:n0] + region + header[n1:]


def render(page: str) -> str:
    header = (PARTIALS / "header.html").read_text(encoding="utf-8")
    footer = (PARTIALS / "footer.html").read_text(encoding="utf-8")
    body = (CONTENT / f"{page['content']}.content.html").read_text(encoding="utf-8")

    url = SITE_URL if page["slug"] == "index" else f"{SITE_URL}{page['slug']}.html"
    out = HEAD.format(v=ASSET_VERSION, site=SITE_URL, canonical=url,
                      robots=page.get("robots", "index, follow, max-image-preview:large"),
                      jsonld=(JSONLD if page["slug"] in ("index", "contactanos")
                              else physician_jsonld(page) if "physician" in page else ""),
                      **{k: page[k] for k in ("title", "description", "og_title", "og_description")})
    # El pie es el mismo en las seis páginas, pero alguna necesita apagarle una
    # fila (contactanos ya tiene su propio mapa). Sellar el slug en <body> deja
    # que eso se resuelva en CSS, sin partir el parcial en variantes.
    head_html = mark_active(header, page["nav"]).rstrip("\n")
    head_html = head_html.replace("<body>", f'<body data-page="{page["slug"]}">', 1)
    out += head_html + "\n\n"
    # Los formularios se envían desde el propio hosting (enviar.php), que
    # elige el buzón según el campo _form: contacto → FORM_EMAIL,
    # consentimiento → FORM_EMAIL_DATOS.
    body = (body.replace("{{FORM_ACTION}}", "enviar.php")
                .replace("{{SITE_URL}}", SITE_URL))
    out += body.rstrip("\n") + "\n\n"
    out += footer.rstrip("\n") + "\n"
    out += SCRIPTS.format(v=ASSET_VERSION)
    return re.sub(r"\?v=\d+", f"?v={ASSET_VERSION}", out)


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--check", action="store_true",
                    help="no escribe; sale con 1 si alguna página quedó desactualizada")
    args = ap.parse_args()

    stale = []
    for page in PAGES:
        src = CONTENT / f"{page['content']}.content.html"
        if not src.exists():
            print(f"  · {page['slug']}.html — falta {src.relative_to(ROOT)}, se omite")
            continue
        target = ROOT / f"{page['slug']}.html"
        built = render(page)
        current = target.read_text(encoding="utf-8") if target.exists() else None
        if current == built:
            print(f"  = {target.name}")
            continue
        if args.check:
            stale.append(target.name)
            print(f"  ! {target.name} desactualizada")
        else:
            target.write_text(built, encoding="utf-8")
            print(f"  → {target.name} ({len(built):,} b)")

    if stale:
        print(f"\n{len(stale)} página(s) desactualizada(s): {', '.join(stale)}")
        print("Corré `python3 tools/build.py` para regenerarlas.")
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
