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
ASSET_VERSION = 233

# Correo que recibe los formularios (consentimiento y contacto) vía FormSubmit.
# Cambiarlo aquí y volver a correr el build actualiza todos los formularios.
FORM_EMAIL = "tyopry@gmail.com"
SITE_URL = "https://tyopry-lab.github.io/larco-eye-clinic/"

PAGES = [
    {
        "slug": "index",
        "content": "inicio",
        "nav": "inicio",
        "title": "Larco Visión — 70 años cuidando tu visión",
        "description": "Clínica oftalmológica en Cumbayá, Quito. Tres generaciones de cirujanos "
                       "oftalmólogos, tecnología ZEIZZ y atención personalizada en córnea, "
                       "catarata, retina, glaucoma y cirugía refractiva.",
        "og_title": "Larco Visión — 70 años cuidando tu visión",
        "og_description": "Tres generaciones de cirujanos oftalmólogos en Quito. Tradición médica familiar "
                          "con diagnóstico y quirófano de última generación.",
    },
    {
        "slug": "sobre-nosotros",
        "content": "sobre-nosotros",
        "nav": "sobre",
        "title": "Sobre Nosotros — Larco Visión",
        "description": "Un legado que recorre tres generaciones de cirujanos oftalmólogos, desde "
                       "el primer consultorio en Ibarra en 1950 hasta la clínica de hoy en Quito.",
        "og_title": "Sobre Nosotros — Larco Visión",
        "og_description": "Un legado que recorre tres generaciones: nuestra historia, nuestro "
                          "equipo y las instalaciones de la clínica.",
    },
    {
        "slug": "consultas-examenes",
        "content": "consultas-examenes",
        "nav": "servicios",
        "title": "Consultas y Exámenes — Larco Visión",
        "description": "La consulta oftalmológica y los quince exámenes de diagnóstico con que "
                       "confirmamos cada diagnóstico: Pentacam, OCT, Angio-OCT, campimetría y más.",
        "og_title": "Consultas y Exámenes — Larco Visión",
        "og_description": "El primer paso hacia una mejor visión: consulta integral y diagnóstico "
                          "de alta precisión.",
    },
    {
        "slug": "especialidades",
        "content": "especialidades",
        "nav": "servicios",
        "title": "Especialidades — Larco Visión",
        "description": "Córnea, catarata, retina y vítreo, glaucoma y cirugía refractiva: en qué "
                       "consiste cada condición y cómo la tratamos.",
        "og_title": "Especialidades — Larco Visión",
        "og_description": "Atención oftalmológica especializada en córnea, catarata, retina, "
                          "glaucoma y cirugía refractiva.",
    },
    {
        "slug": "casos-clinicos",
        "content": "casos-clinicos",
        "nav": "casos",
        "title": "Casos Clínicos — Larco Visión",
        "description": "Casos reales analizados por nuestros especialistas, del diagnóstico al "
                       "resultado, y los testimonios de quienes ya pasaron por la clínica.",
        "og_title": "Casos Clínicos — Larco Visión",
        "og_description": "Casos reales analizados por nuestros especialistas. Del diagnóstico al "
                          "resultado.",
    },
    {
        "slug": "contactanos",
        "content": "contactanos",
        "nav": "contacto",
        "title": "Contáctanos — Larco Visión",
        "description": "Agenda tu cita con nuestro equipo. Dirección, teléfono, WhatsApp, correo "
                       "y horarios de atención de la clínica en Cumbayá, Quito.",
        "og_title": "Contáctanos — Larco Visión",
        "og_description": "Estamos para atenderte. Agenda tu cita con nuestro equipo.",
    },
    {
        "slug": "dr-marcelo-larco",
        "content": "dr-marcelo-larco",
        "nav": "sobre",
        "title": "Dr. Marcelo Larco — Larco Visión",
        "description": "Dr. Marcelo Larco, cirujano oftalmólogo especialista en córnea, catarata "
                       "y cirugía refractiva. Formación, trayectoria y publicaciones.",
        "og_title": "Dr. Marcelo Larco — Larco Visión",
        "og_description": "Cirujano oftalmólogo · córnea, catarata y cirugía refractiva.",
    },
    {
        "slug": "dr-roberto-larco",
        "content": "dr-roberto-larco",
        "nav": "sobre",
        "title": "Dr. Roberto Larco — Larco Visión",
        "description": "Dr. Roberto Larco, cirujano oftalmólogo especialista en retina, mácula y "
                       "vítreo, con formación en Brasil.",
        "og_title": "Dr. Roberto Larco — Larco Visión",
        "og_description": "Cirujano oftalmólogo · retina, mácula y vítreo.",
    },
    {
        "slug": "consentimiento",
        "content": "consentimiento",
        "nav": "contacto",
        "title": "Consentimiento de datos — Larco Visión",
        "description": "Acepta la política de tratamiento de datos personales de pacientes de "
                       "Larco Eye Clinic.",
        "og_title": "Consentimiento de datos — Larco Visión",
        "og_description": "Aceptar políticas de tratamiento de datos de pacientes.",
    },
    {
        "slug": "politica-privacidad",
        "content": "politica-privacidad",
        "nav": "contacto",
        "title": "Política de tratamiento de datos — Larco Visión",
        "description": "Cómo Larco Eye Clinic recoge, usa y protege los datos personales de "
                       "sus pacientes.",
        "og_title": "Política de tratamiento de datos — Larco Visión",
        "og_description": "Cómo protegemos los datos personales de nuestros pacientes.",
    },
    {
        "slug": "gracias",
        "content": "gracias",
        "nav": "contacto",
        "title": "Recibimos tu información — Larco Visión",
        "description": "Confirmación de envío.",
        "og_title": "Recibimos tu información — Larco Visión",
        "og_description": "Confirmación de envío.",
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
<!-- Preview para el cliente: contenido y fotografía son placeholders. Quitar esta
     línea al publicar el sitio definitivo con el contenido real de la clínica. -->
<meta name="robots" content="noindex, nofollow">

<meta property="og:type" content="website">
<meta property="og:locale" content="es_EC">
<meta property="og:title" content="{og_title}">
<meta property="og:description" content="{og_description}">
<!-- TODO(dominio): og:image y og:url deben ser absolutos, y el card quiere un JPEG 1200x630 propio. -->
<meta property="og:image" content="assets/img/photos/hero-ojo.webp">

<link rel="icon" type="image/svg+xml" href="assets/img/logo.svg">
<link rel="preload" href="assets/fonts/montserrat-latin-normal.woff2" as="font" type="font/woff2" crossorigin>
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

    out = HEAD.format(v=ASSET_VERSION, **{k: page[k] for k in
                                          ("title", "description", "og_title", "og_description")})
    # El pie es el mismo en las seis páginas, pero alguna necesita apagarle una
    # fila (contactanos ya tiene su propio mapa). Sellar el slug en <body> deja
    # que eso se resuelva en CSS, sin partir el parcial en variantes.
    head_html = mark_active(header, page["nav"]).rstrip("\n")
    head_html = head_html.replace("<body>", f'<body data-page="{page["slug"]}">', 1)
    out += head_html + "\n\n"
    body = (body.replace("{{FORM_ACTION}}", f"https://formsubmit.co/{FORM_EMAIL}")
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
