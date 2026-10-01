# Fotografía

Desde el 2026-09-08 la mayor parte es **fotografía propia de la clínica**
(carpeta `~/Downloads/Fotos/` del cliente). Lo que sigue siendo stock está
marcado como tal y se reemplaza en cuanto llegue la foto real.

## Aportadas por el cliente (2026-09-08)

| Archivo | Original | Uso |
| --- | --- | --- |
| `hero-cirujano.webp`, `-1100` | `Male_ophthalmologist_close_up_po….png` | Fondo del banner de la portada |
| `hero-sobre.webp`, `-800` | `un legado que recorre tres generaciones.png` | Portada de Sobre Nosotros |
| `hero-consultas.webp`, `-800` | `el primer paso a una mejor visión.png` | Portada de Consultas y Exámenes |
| `equipo-microscopio-hd.webp` | `equipos de última generación.png` | Escaparate de equipos en la portada |
| `cirugias.webp` / `examenes.webp` / `consultas.webp` | `cirugías.png` / `exámenes.png` / `consultas.png` | Tarjetas de servicio 01·02·03 (foto al pasar el puntero) |
| `dr-marcelo-larco-4.webp` | `marcelo larco.png` | Retrato Dr. Marcelo Larco. Recorte a busto 3:4 (caja 1150,560–3000,3027 del original 3606×4608) |
| `dra-gabriela-larco.webp` | `gabriela larco.png` | Retrato Dra. Gabriela Larco. Recorte a busto 3:4 (caja 800,520–2650,2987 del original 3072×4608) |
| `equipo-optica.webp` | `óptica zeiss.png` | Ficha Óptica ZEISS |
| `equipo-iol-master.webp` | `IOL MASTER 700.png` | Ficha IOL Master 700 |
| `equipo-oct-triton.webp` | `OCT Triton Plus_.png` | Ficha OCT Triton Plus |
| `equipo-camara-retina.webp` | `cámara retinal.png` | Ficha Cámara de retina |
| `area-quirofano.webp` | `quirófano.png` | Instalaciones · Quirófano |
| `area-sala-examenes.webp` | `sala de exámenes.png` | Instalaciones · Sala de exámenes |
| `area-recepcion.webp` | `recepcion.png` (2026-09-10) | Historia, en Sobre Nosotros |
| `area-laser.webp` | `cuarto laser.png` (2026-09-10) | Instalaciones · Cuarto láser (sustituye al stock) |

Todas se exportaron con `cwebp -q 82/84` y reducidas a 1200–2000 px de ancho.

## Stock que sigue en uso

Licencia Unsplash: uso comercial permitido, sin atribución obligatoria. Aun así
se deja el registro para poder dar crédito y para reponer el original.

| Archivo | Unsplash ID | Uso en la página |
| --- | --- | --- |
| `hero-ojo.webp`, `hero-ojo-800.webp` | — (aportada por el cliente, antes) | Portadas de Especialidades, Casos Clínicos y Contáctanos |
| `dr-roberto-larco-4.webp` | entregado por el cliente el 2026-09-10 (`ChatGPT Image 10 sept 2026, 11_54_40 a.m..png`, imagen generada) | Retrato Dr. Roberto Larco. OJO: el bordado de la bata dice "Dr. Marcelo". |
| `dra-ana-larco.webp` | Pexels `8459997` | Retrato Dra. Ana Larco. Recorte 9:16 (x≈70%, 86% del alto). |
| `equipo-pentacam.webp` | `-OpWKFHA_yQ` | Ficha de equipos (Pentacam OCT) en sobre-nosotros |
| `equipo-humphrey.webp` | `aWiUrTr16S4` | Ficha de equipos (Humphrey FA3) en sobre-nosotros |
| `equipo-laser-pascal.webp` | `IzvQ1R5I_Gw` | Ficha de equipos (Láser Pascal 577) en sobre-nosotros |
| `intro-tecnologia.webp` | `aMmDIsdnUro` | Sin uso desde el rediseño editorial (la intro salió de la portada); se conserva por si vuelve |
| `intro-doctor-paciente.webp` | `ibZ2QiKkEsg` | Sin uso desde el rediseño editorial; se conserva por si vuelve |

Página de origen: `https://unsplash.com/photos/<ID>`

El retrato de Roberto y el de Ana son de **Pexels**, de la misma serie de *Los Muertos
Crew*: tres personas distintas con el mismo tratamiento de luz, que es lo que
hace que la fila se lea pareja. Antes eran dos fotos de Unsplash del **mismo
modelo de stock**, que era justo lo que se notaba.

Licencia Pexels: uso comercial permitido, sin atribución obligatoria.

La búsqueda de Unsplash dejó de responder sin credencial, así que para reponer
una foto de ahí hay que usar el ID exacto de la tabla. Las de Pexels se reponen
con la API y el ID de la tabla.

**Los retratos no son los doctores reales.** Son marcadores de composición y
deben sustituirse antes de cualquier publicación.

## Reponer una imagen

    curl -sSL -o /tmp/src.jpg "https://unsplash.com/photos/<ID>/download?w=1080"
    cwebp -quiet -q 78 /tmp/src.jpg -o <nombre>.webp

## Sin uso ahora mismo

Las portadas de página `hero-sobre`, `hero-casos` y `hero-consultas` quedaron
sin usar cuando las interiores pasaron a llevar el mismo banner que la home;
`hero-especialidades` y `hero-contacto` se reciclaron para las filas de
artículos, que van en color. Las tres fotos de caso (`caso-queratocono`,
`caso-catarata`, `caso-retina`) salieron de ahí por lo mismo: son blanco y
negro de origen, con saturación cero, así que no había forma de darles color. Se conservan por si se quiere
volver a una foto distinta por página. Igual `dra-ana-larco.webp`, de la ficha
que se retiró, y `cirugias.webp` y `consultas.webp`: la sección de servicios
sigue la referencia del cliente, donde sólo una de las tarjetas lleva foto.

## Marca

`assets/img/logo.svg` (color, para fondo claro) y `assets/img/logo-white.svg`
(blanco, para fondo oscuro) son los artboards finales que entregó el cliente,
en vector. Sustituyen a los dos WebP anteriores, que se retiraron.

## Mapa

`assets/img/mapa-cumbaya.webp`: teselas de OpenStreetMap (© colaboradores de OpenStreetMap, ODbL) a zoom 17, centradas en
-0.2058, -78.4338 —Av. Oswaldo Guayasamín y Calle 1, Cumbayá, 170157 Quito, la dirección oficial que dio el cliente—.
Se genera una vez y se sirve desde el repo. Sustituye al de La Pradera (v=196–203), que salió de un marcador de
Google Maps que no era la sede.
