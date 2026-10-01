# Larco Visión — sitio web

Clínica y cirugía de ojos, Quito. Sitio estático: HTML, CSS y un archivo JS sin
dependencias ni build. Se abre `index.html` y funciona.

Partió del artboard **Inicio** del proyecto de Claude Design
[“Website mockup creation”](https://claude.ai/design/p/f77e51cf-320f-4e19-8f78-36ab6697be1a);
hoy sigue la referencia editorial que aprobó el cliente: monocromo cálido,
display serif y retícula de filetes. La fuente importada del canvas queda en
`_design/` como registro.

## Correr en local

```bash
python3 -m http.server 8731
```

Luego `http://localhost:8731`. Hace falta un servidor (no `file://`) porque las
fuentes se cargan con rutas relativas y `file://` las bloquea por CORS.

## Estructura

```
index.html                  \
sobre-nosotros.html          |
consultas-examenes.html      |  las seis páginas, generadas
especialidades.html          |  por tools/build.py
casos-clinicos.html          |
contactanos.html            /
_partials/                  Cabecera y pie, compartidos por las seis
pages/                      El <main> de cada página, uno por archivo
tools/build.py              Arma las páginas a partir de lo anterior
assets/
  css/
    fonts.css               @font-face de Montserrat e Instrument Serif (self-hosted)
    tokens.css              Paleta, tipografía, espaciado, tema claro/oscuro, base
    components.css          Botón (variantes y estados) y ficha de doctor
    site.css                Layout de la página, responsive, motion, print
    pages.css               Páginas interiores: portada compacta, tarjetas,
                            fichas de equipo, acordeón, formulario, mapa
  js/site.js                Header, menús, modo oscuro, zoom de texto,
                            reveals, contadores, slider y acordeones
  fonts/                    Montserrat (variable) e Instrument Serif woff2
  img/                      Logos + fotografía (ver photos/CREDITS.md)
_design/                    Fuente importada de Claude Design (no se sirve)
```

### Editar una página

El sitio publicado es HTML plano y **no hace falta ningún build para servirlo**.
El script existe sólo para que la cabecera y el pie —idénticos en las seis
páginas— vivan en un archivo y no se desincronicen.

```bash
python3 tools/build.py           # regenera las seis páginas
python3 tools/build.py --check   # falla si alguna quedó vieja
```

Tocás `pages/<slug>.content.html` (o `_partials/`) y corrés el script. El título,
la descripción y qué ítem del menú va activo se declaran en `PAGES`, dentro de
`tools/build.py`. Ahí también está `ASSET_VERSION`: subirlo invalida la caché de
todos los CSS y del JS a la vez.

Los `<link>` y `<script>` llevan `?v=N`. **Al cambiar un CSS o el JS, súbele el
número** o los navegadores servirán la versión vieja en caché.

Las imágenes y las fuentes **no** llevan `?v=N` a propósito: son demasiadas para
mantenerlas a mano. La regla para ellas es al revés — **una foto que se
reemplaza estrena nombre de archivo** (`dr-marcelo-larco-2.webp`), así la URL
cambia con el contenido. Cuando haya hosting, lo definitivo es cache inmutable
para `/assets/img/` y `/assets/fonts/`.

## Diseño

Enfoque editorial monocromo, según la referencia que aprobó el cliente: negro
cálido, papel roto y una retícula de filetes. **No hay color de acento.** Lo que
distingue una cosa de otra es el contraste, el filete y el tamaño de la letra; el
único color de la página es el logo de la clínica.

Paleta en `assets/css/tokens.css`:

| Token | Valor | Uso |
| --- | --- | --- |
| `--ink` | `#12110E` | Tinta y bandas oscuras. Negro cálido, no neutro |
| `--ink-2` / `--ink-3` | `#1A1815` / `#232019` | Paneles sobre tinta |
| `--paper` | `#F4F2ED` | Fondo general |
| `--paper-2` | `#EBE8E1` | Secciones alternas y tarjetas |
| `--text-muted` | tinta al 66% | Cuerpo secundario |
| `--text-faint` | tinta al 60% | Número de sección, notas al pie |
| `--border-hairline` | tinta al 16% | El filete que arma toda la retícula |

Los tokens de acento (`--accent`, `--accent-display`, `--mark`…) siguen
existiendo porque medio sitio los nombra, pero **todos resuelven a tinta**: así
ninguna pieza vieja reintroduce color por la puerta de atrás.

`--text-faint` está en 60% y no más abajo porque es el suelo al que texto de
11-13px llega a 4,5:1 sobre `--surface-card`, que es el peor de los dos fondos.

**La retícula.** Cada sección abre con un filete a todo lo ancho y su número al
margen. El número sale de un contador CSS y no del markup, así la numeración se
mantiene sola cuando una sección se añade, se quita o se mueve, en las seis
páginas a la vez.

**Tipografía.** Display en **Instrument Serif** (SIL OFL, self-hosted, un solo
peso) sobre cuerpo en Montserrat. El contraste entre las dos es lo que sostiene
el enfoque: el display va grande y muy justo de interlínea, el cuerpo pequeño y
suelto. **Nada de cursiva** — regla del cliente, en todo el sitio. La frase
secundaria de cada titular se distingue por atenuación (tinta al 66%), no por
corte ni color.

### Escalera de titulares

Los tamaños salen de los tokens, no de valores sueltos en cada componente. A 1440px: **104 / 76 / 60 / 30 / 21**, en Instrument Serif.
| --- | --- |
| Token | Uso |
| --- | --- |
| `--text-display-xl` | Hero de la portada |
| `--text-display` | Portada de las páginas interiores |
| `--text-h2` | Títulos de sección |
| `--text-h3` | Títulos de tarjeta grande (servicio, CTA) |
| `--text-h4` | Títulos de tarjeta y ficha (doctor, caso, testimonio, equipo) |

Un título nuevo se cuelga de uno de esos cinco. No se declaran píxeles sueltos:
así fue como se llegó a tener seis títulos de tarjeta entre 20 y 34px sin
criterio, un h2 que competía con el hero y portadas interiores más grandes que
la de la home.

El sitio no hace ninguna petición a terceros en runtime: las dos familias van
self-hosted en `assets/fonts/`.

Modo oscuro y zoom de lectura (100 / 112 / 125 %) se guardan en `localStorage`
(`lv-dark`, `lv-zoom`).

**Fondo de portada.** `assets/img/photos/hero-ojo.webp` — primer plano cálido
que aportó el cliente, en color a diferencia del resto de la fotografía: la
referencia abre con su hero cálido y esta imagen trae exactamente esa gama. El
velo de tinta y el degradado la oscurecen lo justo para el titular. Va con
`srcset` (800/1500) y reemplazó al video de iris, que se retiró junto con su
poster y su JS.

**Estructura de la portada.** Sigue la referencia editorial del cliente:
portada → bloque de datos → doctores socios → servicios (banda oscura) →
artículos → testimonios (banda oscura). Las bandas oscuras alternan tinta y
papel como la referencia; `.section--dark` redefine los tokens de texto y filete
puertas adentro, así cualquier pieza que caiga en ella se resuelve sola. La
galería de equipos y la intro salieron de la portada; los equipos siguen en
`sobre-nosotros.html`.

**Las divisiones del panel de cifras** salen del `gap: 1px` del grid sobre un
fondo de color de filete, no de bordes por celda: así la retícula se divide sola
en cuatro, dos o una columna sin apagar bordes en cada breakpoint.

**Menú móvil** (≤1024px): hoja a pantalla completa bajo el header. Las dos
secciones con hijos —Sobre Nosotros y Servicios— son acordeones cerrados por
defecto, cada uno con su propio botón de despliegue, así que el menú abre en
cinco filas en vez de cuarenta enlaces. Tocar el texto navega; tocar el chevron
despliega.

## Configuración

`assets/js/site.js`, arriba del todo:

```js
var CONFIG = {
  whatsapp: '',      // ← número real de la clínica; vacío = sin configurar
  animations: true   // false apaga reveals y contadores
};
```

`whatsapp` alimenta los enlaces con `data-whatsapp` (el botón flotante y el
enlace del pie). Se limpia a dígitos y arma `https://wa.me/<número>`.

**Mientras esté vacío** esos enlaces conservan su destino del HTML —
`contactanos.html`— en vez de apuntar a un número que no es de la clínica. En
cuanto pongas el número real (mínimo 8 dígitos), pasan a abrir WhatsApp.

## Pendiente

Marcado en la página con `[ … ]` o con la palabra “pendiente”:

- [ ] **Casos clínicos** — los tres dicen “ejemplo”: son redacción de muestra,
      no casos de la clínica
- [ ] **Doctores asociados** — la portada muestra sólo a los dos socios, Marcelo
      y Roberto. Los asociados van en `sobre-nosotros.html#equipo` y **falta su
      información**: nombre, especialidad y retrato de cada uno. La ficha
      inventada de «Dra. Ana Larco» se retiró de la portada; su foto sigue en
      `assets/img/photos/dra-ana-larco.webp` por si sirve de marcador

- [ ] **Perfiles de los doctores 4 y 5** — la ficha de equipo sólo tiene a
      Marcelo y Roberto
- [ ] **Dirección y teléfono** — “Cumbayá · Quito, Ecuador — dirección por confirmar”
- [ ] **Número de WhatsApp** — `CONFIG.whatsapp` está vacío; hasta que se llene,
      los enlaces de WhatsApp llevan a `contactanos.html`
- [ ] **Mapa** — hoy es un recorte de OpenStreetMap centrado en Cumbayá, sin la
      dirección exacta; se reemplaza por el embed cuando esté confirmada
- [ ] **Facebook e Instagram** — los enlaces apuntan a `#`
- [ ] **Testimonios en video** — la sección ya tiene su deslizador con seis
      fichas, pero **no hay videos**: cada ficha es un marcador con la relación
      de aspecto ya reservada, así que al llegar los videos se sustituye el
      marcador por un `<video>` con `poster` y no se mueve nada de sitio. Los
      seis nombres y procedimientos son de ejemplo y lo dicen en la firma
- [ ] **Fotografía propia** — todo es placeholder, incluidos los
      retratos, que **no son los doctores reales**
      (ver `assets/img/photos/CREDITS.md`). Unsplash ya rechaza las búsquedas sin
      credencial, así que reponer una foto exige o el ID exacto —los de las que
      hay están en CREDITS— o fotografía propia
- [ ] **La foto rotulada «Pentacam OCT»** es un foróptero de marca CHAROPS, no un
      Pentacam. Rotular un equipo con el nombre de otro en el sitio de una
      clínica es un error de hecho, no de diseño: hay que cambiar la foto o el
      rótulo

## Las seis páginas

Todas implementadas, con el contenido del sitemap del cliente
(`_design/contenido-sitemap.md`):

| Página | Qué tiene |
| --- | --- |
| `index.html` | Portada, cifras, doctores, servicios, artículos, testimonios |
| `sobre-nosotros.html` | Historia, misión y visión, equipo, instalaciones y equipos |
| `consultas-examenes.html` | La consulta y los doce exámenes, en acordeón |
| `especialidades.html` | Córnea, catarata, retina y vítreo, glaucoma, refractiva |
| `casos-clinicos.html` | Casos de ejemplo y testimonios |
| `contactanos.html` | Formulario, datos de la clínica, mapa y redes |

**El formulario de contacto todavía no envía a ningún lado.** Va con
`action="#"` y lo dice en la propia página. Cuando haya a dónde mandarlo hay que
conectarlo; hasta entonces el canal real es WhatsApp.
