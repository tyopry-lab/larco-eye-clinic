# Registro de cambios — sitio Larco Eye Clinic

**Fecha:** 1 de octubre de 2026  
**Base:** repositorio `crpozo/larco-eye-clinic`, commit `79670a7` (14-sep-2026)  
**Alcance:** textos de las 6 páginas, observaciones del cliente (documento «Observaciones página web»), integración de contenido de larcovision.com y retinal.com.ec (sin contenido del Dr. Pablo Larco) y corrección del botón «Volver».

> Todos los cambios se hicieron en las **fuentes** (`pages/*.content.html`, `_partials/`, `tools/build.py`) y las páginas se regeneraron con `python3 tools/build.py`. `--check` pasa sin diferencias. La versión de caché de CSS/JS sube de 228 a 229.


## 1. Estado de las observaciones del cliente

| # | Observación | Estado | Qué se hizo |
|---|---|---|---|
| 1 | «1er Laser Center del país» debe decir ZEISS Vision Center | ✅ Hecho | Inicio · cifras: «1er ZEISS Vision Center del país». |
| 2 | Cambiar foto del edificio por la del dron | ⏳ Falta material | Necesitamos el archivo de la foto con dron (idealmente ≥ 2000 px de ancho). Se reemplaza `assets/img/photos/hero-edificio.webp` y su versión `-1100`. |
| 3 | «Presidente» → «Expresidente» en la trayectoria | ✅ Hecho · confirmar | La Sociedad Ecuatoriana de Oftalmología ya decía «Expresidente» en el repositorio; el único «Presidente» restante era el de **SECSA** y se cambió a «Expresidente». Confirmar que era ese. |
| 4 | Eliminar «30 años de experiencia» | ✅ Hecho | Ficha del Dr. Roberto Larco en Sobre Nosotros. En Inicio también se quitó la cifra de años. |
| 5 | Texto del Dr. Roberto Larco (Brasil, retina y mácula, inyecciones, degeneración macular) | ✅ Hecho | Incorporado en Inicio y en Sobre Nosotros (nota, áreas y párrafo de historia). Especialidad mostrada: «Retina, mácula y vítreo». |
| 6 | «Cuarto láser» → «Sala de Láser» | ✅ Hecho | Frente y reverso de la ficha en Instalaciones. |
| 7 | «Óptica ZEISS» → «Óptica ZEISS Vision Center» | ✅ Hecho · confirmar texto | Además la etiqueta decía «Diagnóstico» (pasa a «Óptica») y se propuso un texto nuevo. Confirmar servicios reales de la óptica. |
| 8 | Faltan fotos de los equipos | ⏳ Falta material | En espera de las fotos que enviará la clínica. |
| 9 | Foto de recepción: TV encendida y sin botella | ⏳ Falta material | Es `assets/img/photos/area-recepcion.webp` (Sobre Nosotros · Historia). Reemplazar cuando se tome la nueva foto. |
| 10 | Al pulsar «Volver» la ficha no regresa a la foto | ✅ Corregido | Causa: el hover y el foco del propio botón mantenían la ficha girada. Se ajustó `site.js` y `site.css`; probado en Chromium. |
| 11 | Al entrar a «Doctores» aparecen Instalaciones, Tecnología y Equipos | ❓ Por aclarar | Hoy los doctores, las instalaciones y los equipos están en la misma página (Sobre Nosotros). Opciones: (a) página propia «Nuestros especialistas», o (b) mantener la página y separar visualmente. Ver informe. |
| 13 | Faltan fotos (íconos de ojo repetidos en Especialidades) | ⏳ Falta material | Cada enfermedad usa la misma foto de ojo. Se necesita una imagen o ilustración por tema. |
| 14 | Agendamiento más rápido con código QR | 📋 Propuesta en el informe | Larco Visión ya tiene agenda en línea (`larcovision.ddns.net:8085/turnoAgenda`); ver recomendación de QR + WhatsApp + enlace directo. |
| 15a | Completar dirección: Urb. Santa Lucía Baja, junto al Paseo San Francisco | ✅ Hecho | Pie de página de las 6 páginas, datos de Contáctanos y cierre de Sobre Nosotros. |
| 15b | Faltan los médicos externos | ⏳ Falta información | Necesitamos nombre, especialidad, foto y breve reseña de cada médico externo. |

## 2. Mejoras de redacción

| Sección | Antes | Después | Motivo |
|---|---|---|---|
| Meta / SEO | Clínica y cirugía de ojos en Quito. Tres generaciones de cirujanos oftalmólogos, tecnología ZEISS y atención personalizada en córnea, catarata, retina, glaucoma y cirugía refractiva. | Clínica oftalmológica en Cumbayá, Quito. Tres generaciones de cirujanos oftalmólogos, tecnología ZEISS y atención personalizada en córnea, catarata, retina, glaucoma y cirugía refractiva. | Se nombra la ubicación real (Cumbayá) y se usa el término «clínica oftalmológica», que es el que busca la gente en Google. |
| Meta / Redes |  |  | Se añade la ciudad para que la vista previa en WhatsApp/Facebook ubique la clínica. |
| Menú | Los doctores de la clínica | Conoce a nuestros especialistas | Texto más cercano y orientado al paciente. |
| Menú | Tecnología y espacios | Tecnología y espacios de la clínica | Más descriptivo. |
| Menú (accesibilidad) | title="Tamaño de texto para lectores">A | title="Cambiar tamaño del texto" aria-label="Cambiar tamaño del texto">A | Indica la acción del botón y lo hace legible para lectores de pantalla. |
| Menú | href="contactanos.html">Agendar Cita | href="contactanos.html">Agendar cita | Unificación de mayúsculas: en el resto del sitio se usa «Agendar cita». |
| Portada | 70 años cuidando tu visión con tecnología del mañana | 70 años cuidando tu visión con la tecnología del mañana | Se añade el artículo «la» para una lectura más natural. |
| Cifras | en Queratocono, Mácula, Retina y Córnea | en queratocono, mácula, retina y córnea | En español las especialidades van en minúscula dentro de una frase. |
| Doctores | Tres generaciones de cirujanos oftalmólogos. Tradición médica familiar con diagnóstico y quirófano de última generación. | Tres generaciones de cirujanos oftalmólogos. Una tradición médica familiar que hoy se apoya en diagnóstico y quirófanos de última generación. | La segunda oración no tenía verbo; ahora une la tradición con la tecnología. |
| Doctores (accesibilidad) | src="assets/img/photos/dr-marcelo-larco-4.webp" alt="" | src="assets/img/photos/dr-marcelo-larco-4.webp" alt="Dr. Marcelo Larco, cirujano oftalmólogo" | La foto no tenía texto alternativo (accesibilidad y SEO de imágenes). |
| Doctores (accesibilidad) | src="assets/img/photos/dr-roberto-larco-4.webp" alt="" | src="assets/img/photos/dr-roberto-larco-4.webp" alt="Dr. Roberto Larco, cirujano oftalmólogo" | La foto no tenía texto alternativo (accesibilidad y SEO de imágenes). |
| Doctores | href="sobre-nosotros.html#equipo">Conócenos | href="sobre-nosotros.html#equipo">Ver perfil | El botón está en la ficha de un doctor concreto; «Ver perfil» dice exactamente a dónde lleva. (Aplica a los 2 doctores.) |
| Servicios | Con el respaldo de marcas líderes en oftalmología como ZEISS, diagnosticamos con precisión y ofrecemos tratamientos seguros y exactos. | Con equipos de marcas líderes en oftalmología, como ZEISS, diagnosticamos con precisión y te ofrecemos tratamientos seguros y eficaces. | Se evita la repetición «precisión… exactos» y se habla directamente al paciente. |
| Servicios · Cirugías | Procedimientos quirúrgicos con tecnología láser para catarata, córnea, retina y corrección de defectos refractivos. Cirugía ambulatoria, precisa y con recuperación ágil. | Cirugía de catarata, córnea y retina, y corrección de la vista con láser. Procedimientos ambulatorios, precisos y de recuperación rápida. | No toda cirugía de retina es con láser; el texto anterior lo daba a entender. Se simplifica el lenguaje técnico («defectos refractivos»). |
| Servicios · Exámenes | Diagnóstico de alta precisión con equipos especializados. Estudios complementarios que confirman cada diagnóstico y planifican el tratamiento exacto para cada paciente. | Estudios de diagnóstico de alta precisión con equipos especializados. Confirman lo que vemos en consulta y nos permiten planificar el tratamiento adecuado para cada paciente. | Se elimina la repetición de «diagnóstico» y se explica para qué sirven los exámenes. |
| Servicios · Consultas | Evaluación oftalmológica integral. El punto de partida para detectar a tiempo, dar seguimiento y definir el mejor tratamiento para tu salud visual. | Evaluación oftalmológica completa: el primer paso para detectar a tiempo cualquier problema, darle seguimiento y definir el mejor tratamiento para tu salud visual. | «Detectar a tiempo» quedaba sin complemento; se completa la frase. |
| Artículos | Artículos de nuestros especialistas | Casos de nuestros especialistas | El contenido son casos clínicos (y enlazan a Casos Clínicos), no artículos. |
| Artículos | Ejemplos de redacción mientras la clínica entrega sus casos: el motivo de consulta, el procedimiento y el resultado. | Casos reales tratados en la clínica: el motivo de consulta, el procedimiento que realizamos y el resultado obtenido. | IMPORTANTE: el texto anterior era una nota interna visible al público («Ejemplos de redacción mientras la clínica entrega sus casos»). |
| Artículos · Caso 01 | Crosslinking para frenar la progresión y anillos intraestromales seis meses después. La agudeza corregida pasó de 20/80 a 20/25 y se mantiene estable. | Crosslinking corneal para detener la progresión y, seis meses después, implante de anillos intraestromales. La agudeza visual corregida mejoró de 20/80 a 20/25 y se mantiene estable. | Orden cronológico más claro y términos completos («crosslinking corneal», «agudeza visual»). |
| Artículos · Caso 02 | Facoemulsificación asistida por láser con lente trifocal calculado con el IOL Master 700. Alta el mismo día y visión a todas las distancias sin gafas al mes. | Facoemulsificación asistida por láser con lente intraocular trifocal, calculada con el IOLMaster 700 de ZEISS. Alta el mismo día y, al mes, buena visión a todas las distancias sin depender de gafas. | Nombre correcto del equipo (IOLMaster 700 de ZEISS), «lente intraocular» completo y concordancia de género. |
| Artículos · Caso 03 | Vitrectomía posterior con taponamiento de gas la misma noche de la consulta de urgencia. Retina aplicada en el primer procedimiento y visión central recuperada. | Vitrectomía posterior con taponamiento de gas la misma noche de la consulta de urgencia. La retina se reaplicó con una sola cirugía y el paciente recuperó la visión central. | «Retina aplicada» es jerga; se redacta como resultado comprensible para el paciente. |
| Equipos | Diagnóstico de alta precisión con equipos de última generación: cada estudio confirma el diagnóstico y planifica con exactitud el tratamiento o la cirugía. | Contamos con tecnología oftalmológica de marcas líderes como ZEISS para diagnosticar con precisión y operar con la máxima seguridad. | Repetía casi palabra por palabra la tarjeta «Exámenes» y usaba «última generación» dos veces (título y texto). |
| Equipos | href="sobre-nosotros.html#equipos-diagnostico">Ver más | href="sobre-nosotros.html#equipos-diagnostico">Conoce nuestros equipos | Botón más descriptivo que «Ver más». |
| Testimonios | Testimonios que reflejan el compromiso con el que cuidamos la visión de nuestros pacientes. | Historias de pacientes que recuperaron su calidad de vida. Su confianza es nuestro mayor compromiso. | Más humano y menos redundante («testimonios» ya está en el título de la sección). |
| Testimonios | href="contactanos.html">Agenda tu cita | href="contactanos.html">Agendar cita | Unificación: el mismo botón aparece como «Agendar cita» en el resto del sitio. |
| Testimonios | Paciente · Cataratas en ambos ojos | Paciente · Catarata en ambos ojos | Coherencia con el término usado en el resto del sitio («Catarata»). |
| Pie de página | 70 años cuidando tu visión con tecnología del mañana | 70 años cuidando tu visión con la tecnología del mañana | Igual al eslogan de la portada. |
| Pie de página (todas las páginas) | cuidando tu visión con tecnología del mañana | cuidando tu visión con la tecnología del mañana | Igual al eslogan de la portada. |
| Testimonios (Inicio y Casos Clínicos) | — | — | Los cambios del bloque de testimonios se aplicaron en ambas páginas porque comparten el mismo bloque. |
| Sobre Nosotros · fotos de doctores | alt vacío | «Dr. … Larco, cirujano oftalmólogo» | Accesibilidad y SEO de imágenes. |

## 3. Contenido nuevo integrado desde larcovision.com y retinal.com.ec

Todo el contenido se reescribió (no se copió literal), se unificó el tono al «tú» del sitio y **se excluyó cualquier referencia al Dr. Pablo Larco**.

**Especialidades** (`especialidades.html`):

- **Crosslinking y anillos intraestromales** — Córnea · fuente: larcovision.com · Queratocono
- **Trasplante de córnea (texto ampliado: causas, láser de femtosegundo, acreditación INDOT)** — Córnea · fuente: larcovision.com · Trasplante de córnea / Sé Donante
- **Pterigión (texto ampliado: injerto de conjuntiva, ambulatorio)** — Córnea · fuente: larcovision.com + retinal.com.ec
- **Catarata asistida con láser de femtosegundo** — Catarata · fuente: larcovision.com · Catarata
- **Agujero macular** — Retina y Vítreo · fuente: retinal.com.ec · Blog
- **Membrana epirretiniana** — Retina y Vítreo · fuente: retinal.com.ec · Blog
- **Sección nueva «Tratamientos de retina y mácula»: inyecciones intraoculares, vitrectomía, fotocoagulación, láser micropulsátil** — Nueva · fuente: retinal.com.ec · Tratamientos
- **Láser para glaucoma (transescleral) y texto de glaucoma ampliado** — Glaucoma · fuente: retinal.com.ec + larcovision.com
- **Femto-LASIK** — Cirugía Refractiva · fuente: larcovision.com · Cirugía refractiva
- **Sección nueva «Óptica y baja visión»: Óptica ZEISS Vision Center y visión subnormal** — Nueva · fuente: retinal.com.ec · Óptica y visión subnormal

**Consultas y Exámenes** (`consultas-examenes.html`): de 12 a 15 exámenes.

- Nuevo: **Conteo de células endoteliales (microscopía especular)** — fuente larcovision.com
- Nuevo: **Ecografía ocular** — fuente larcovision.com
- Nuevo: **Planificación de astigmatismo en catarata (Verion)** — fuente larcovision.com · *confirmar que el equipo está en la clínica nueva*
- Pentacam: duración del examen y tiempos de suspensión de lentes de contacto.
- Retinografía: control periódico en pacientes con diabetes.

**Menú y pie de página:** nuevo enlace «Óptica y baja visión» en Servicios.

## 4. Cambios técnicos

- `assets/js/site.js` → `wireFlips()`: el botón «Volver» quita el giro, suelta el foco y bloquea el hover hasta que el puntero sale de la ficha.
- `assets/css/site.css` → nueva regla `.card--flip.is-held .flip__inner { transform: none; }`.
- `tools/build.py` → descripción SEO de Inicio («Clínica oftalmológica en Cumbayá, Quito»), og:description con la ciudad, descripción de Consultas («quince exámenes») y `ASSET_VERSION = 229`.
- Comentario HTML de la sección de equipos en Inicio corregido («6 · Equipos»).

## 5. Datos a confirmar con la clínica

- [ ] Que «Expresidente» aplica a SECSA (punto 3).
- [ ] Año del *Manual de Facoemulsificación* del Dr. Marcelo Larco: el bosquejo dice **2010** y larcovision.com dice **septiembre de 2000**.
- [ ] Que los equipos citados en textos nuevos (láser de femtosegundo, excímer, Verion, ecógrafo) están en la sede de Cumbayá.
- [ ] Vigencia de la acreditación del INDOT para trasplante de córnea a nombre de la clínica actual.
- [ ] Afirmaciones absolutas de la portada: «1er ZEISS Vision Center del país» y «N.º 1 en queratocono, mácula, retina y córnea». Conviene tener respaldo (publicidad de servicios de salud).
- [ ] Nombre de marca: el sitio mezcla «Larco Visión» (título, ©) y «Larco Eye Clinic» (logo). Definir uno.
- [ ] Teléfono, correo y horario (aún «por confirmar»).

## 6. Segunda ronda (1 de octubre de 2026, 12:05)

- **ZEISS → ZEIZZ** en todo el texto visible y metadatos (11 apariciones: Inicio, Sobre Nosotros, Especialidades, descripción SEO). El identificador interno `#optica-zeiss` no cambia. *Nota: la marca registrada del fabricante se escribe ZEISS; confirmar que «ZEIZZ» es intencional.*
- **Perfil individual por doctor:** «Ver perfil» en Inicio ahora abre `dr-marcelo-larco.html` o `dr-roberto-larco.html`, cada una solo con la ficha de ese doctor, enlace «← Nuestro equipo», enlace al otro doctor y cierre «Agenda tu cita con el Dr. …». Páginas nuevas en `tools/build.py` (menú activo: Sobre Nosotros) y fuentes en `pages/dr-*.content.html`.
- `assets/css/pages.css`: estilos de la página de perfil; en móvil la foto va arriba y la ficha a una columna.
- Versión de caché CSS/JS: 230.
