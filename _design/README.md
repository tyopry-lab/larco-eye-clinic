# Fuente de diseño (Claude Design)

Copia importada del proyecto **“Website mockup creation”** en Claude Design:

    https://claude.ai/design/p/f77e51cf-320f-4e19-8f78-36ab6697be1a

Archivos aquí:

| Archivo | Qué es |
| --- | --- |
| `inicio.dc.html` | Artboard de Inicio: estructura, textos y lógica (`DCLogic`) del mockup. Es la fuente de la que sale `../index.html`. |
| `support.js` | Runtime `dc-runtime` que interpreta `<x-dc>`, `<sc-if>` y `{{bindings}}`. Sólo referencia. |
| `_ds/_ds_bundle.js` | Componentes React del design system: `Button`, `PillTag`, `SectionLabel`, `StatCounter`, `ServiceCard`, `DoctorCard`, `TestimonialCard`, `Accordion`, `Input`. |
| `_ds/tokens/*.css`, `_ds/styles.css` | Tokens originales del design system (paleta petróleo/teal, escala tipográfica, espaciado). |

**Nada de esta carpeta se sirve al navegador.** Está aquí para poder comparar la
implementación contra el mockup y para volver a sincronizar cuando el artboard
cambie.

## Diferencias deliberadas respecto al mockup

1. **Paleta.** El mockup usa azul petróleo `#27285A` + teal `#4F8FCC`. El cliente
   aprobó después un board de referencia distinto: papel cálido, carbón neutro y
   un acento terracota. `../assets/css/tokens.css` implementa ese board; la
   estructura, los textos y la escala tipográfica se conservan.
2. **Fotografía.** Las fotos de Unsplash del mockup se reemplazaron por otras del
   mismo estilo (macro de iris, óptica, equipo oftalmológico). Ver
   `../assets/img/photos/CREDITS.md`.
3. **Modo oscuro.** Los componentes del design system leen `var(--ink)` para el
   texto, y `.lv-dark` no redefine `--ink`: en el mockup, el modo oscuro deja
   texto casi negro sobre fondo oscuro (cita del testimonial, nombre del doctor,
   cifra del contador). La implementación usa `var(--text-body)`, que sí cambia
   con el tema.
4. **Botones.** El mockup anida `<button>` dentro de `<a>`, que no es HTML válido
   y no es alcanzable por teclado como enlace. Aquí son `<a class="btn">`.
5. **Responsive, accesibilidad y motion.** El artboard es sólo escritorio. La
   implementación añade menú móvil, orden de lectura en una columna, `lang`,
   `aria-*`, foco visible, salto al contenido y `prefers-reduced-motion`.

## Volver a leer el proyecto de diseño

Con el MCP `claude_design` (autenticado vía `/design-login`):

    DesignSync  method=list_files  projectId=f77e51cf-320f-4e19-8f78-36ab6697be1a
    DesignSync  method=get_file    projectId=…  path=inicio.dc.html

Otros artboards del mismo proyecto, todavía sin implementar:
`sobre-nosotros.dc.html`, `consultas-examenes.dc.html`, `especialidades.dc.html`,
`casos-clinicos.dc.html`, `contactanos.dc.html`, y `contenido-sitemap.md`.
