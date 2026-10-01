/* ==========================================================================
   Larco Visión — Inicio
   Behaviour ported from the DCLogic class in _design/inicio.dc.html:
   header scroll state, dropdown menus, dark mode, reader text zoom,
   scroll reveals, the animated stat counters and the sliders.
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------------
     Site configuration
     `whatsapp` is the placeholder from the mockup — replace it with the
     clinic's real number and every WhatsApp link on the page follows.
     ------------------------------------------------------------------ */
  var CONFIG = {
    // Leave empty until the clinic's real number is known. While it is empty
    // every WhatsApp link keeps its HTML fallback (the contact page) rather
    // than dialling a number that belongs to somebody else.
    whatsapp: '',
    animations: true
  };

  var STORAGE_DARK = 'lv-dark';
  var STORAGE_ZOOM = 'lv-zoom';
  var ZOOM_STEPS = [1, 1.12, 1.25];
  var ZOOM_LABELS = ['A', 'A+', 'A++'];
  var SCROLL_THRESHOLD = 40;
  var MOBILE_NAV_QUERY = '(max-width: 1024px)';

  var body = document.body;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function store(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* private mode */ }
  }

  function read(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }

  /* `hidden` is an HTMLElement IDL attribute: assigning el.hidden on an <svg>
     sets a plain JS property that never reaches the content attribute, so
     `svg[hidden]` in CSS keeps missing it. Drive the attribute directly. */
  function setHidden(el, hidden) {
    if (!el) return;
    if (hidden) el.setAttribute('hidden', '');
    else el.removeAttribute('hidden');
  }

  /* ------------------------------------------------------------------
     WhatsApp links
     ------------------------------------------------------------------ */

  function applyWhatsApp() {
    var digits = String(CONFIG.whatsapp || '').replace(/[^0-9]/g, '');
    if (digits.length < 8) return; // not configured — keep the HTML fallback

    var href = 'https://wa.me/' + digits;
    var links = document.querySelectorAll('[data-whatsapp]');
    for (var i = 0; i < links.length; i++) {
      links[i].setAttribute('href', href);
      links[i].setAttribute('target', '_blank');
    }
  }

  /* ------------------------------------------------------------------
     Header: solid once the page leaves the hero, and while the mobile
     menu is open.
     ------------------------------------------------------------------ */

  var header = document.querySelector('.site-header');
  var navOpen = false;

  function syncHeader() {
    var solid = window.scrollY > SCROLL_THRESHOLD || navOpen;
    body.classList.toggle('is-solid', solid);
  }

  function measureHeader() {
    if (!header) return;
    document.documentElement.style.setProperty('--header-h', header.offsetHeight + 'px');
  }

  /* ------------------------------------------------------------------
     Mobile navigation
     ------------------------------------------------------------------ */

  var navToggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');

  var outsideNav = [document.querySelector('main'), document.querySelector('.site-footer')];

  /* The two sections with children collapse behind their own disclosure
     button, so the sheet opens as five rows instead of forty links. */
  function setSection(menu, open) {
    menu.classList.toggle('is-expanded', open);
    var toggle = menu.querySelector('.menu__toggle');
    if (toggle) toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  function collapseSections() {
    var menus = document.querySelectorAll('.menu.is-expanded');
    for (var i = 0; i < menus.length; i++) setSection(menus[i], false);
  }

  function wireSections() {
    var toggles = document.querySelectorAll('.menu__toggle');
    for (var i = 0; i < toggles.length; i++) {
      toggles[i].addEventListener('click', function (event) {
        var menu = event.currentTarget.closest('.menu');
        if (!menu) return;
        setSection(menu, !menu.classList.contains('is-expanded'));
      });
    }
  }

  function setNav(open) {
    navOpen = open;
    body.classList.toggle('nav-open', open);

    if (navToggle) {
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      navToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
      setHidden(navToggle.querySelector('[data-icon="open"]'), open);
      setHidden(navToggle.querySelector('[data-icon="close"]'), !open);
    }

    // Reopening should start from the collapsed overview, not wherever the
    // visitor left it last time.
    if (!open) collapseSections();

    // Keep Tab inside the panel: it covers the viewport, so anything behind it
    // is focusable but invisible.
    for (var i = 0; i < outsideNav.length; i++) {
      if (outsideNav[i]) outsideNav[i].inert = open;
    }

    // Opening also makes the header solid, which shrinks it. Flip the class
    // first, then measure, or --header-h freezes at the taller value.
    syncHeader();
    measureHeader();
  }

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      setNav(!navOpen);
    });

    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) setNav(false);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && navOpen) {
        setNav(false);
        navToggle.focus();
      }
    });

    window.addEventListener('resize', function () {
      measureHeader();
      if (navOpen && !window.matchMedia(MOBILE_NAV_QUERY).matches) setNav(false);
    });
  }

  /* ------------------------------------------------------------------
     Dropdown menus
     Hover and keyboard focus are handled in CSS. Touch devices get an
     explicit tap-to-open on the parent link.
     ------------------------------------------------------------------ */

  function closeMenus(except) {
    var open = document.querySelectorAll('.menu.is-open');
    for (var i = 0; i < open.length; i++) {
      if (open[i] !== except) open[i].classList.remove('is-open');
    }
  }

  function wireMenus() {
    if (!window.matchMedia('(hover: none)').matches) return;

    var menus = document.querySelectorAll('.menu');
    for (var i = 0; i < menus.length; i++) {
      (function (menu) {
        var trigger = menu.querySelector('.nav__link');
        if (!trigger) return;
        trigger.addEventListener('click', function (event) {
          if (window.matchMedia(MOBILE_NAV_QUERY).matches) return; // panel is inline
          if (!menu.classList.contains('is-open')) {
            event.preventDefault();
            closeMenus(menu);
            menu.classList.add('is-open');
          }
        });
      })(menus[i]);
    }

    // Without this a tapped panel stays open for the rest of the session.
    document.addEventListener('click', function (event) {
      if (!event.target.closest('.menu')) closeMenus();
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') closeMenus();
    });
  }

  /* ------------------------------------------------------------------
     Acordeones de las páginas interiores
     Una lista de doce exámenes no cabe abierta; cada ítem se despliega solo.
     ------------------------------------------------------------------ */

  function wireAccordions() {
    var triggers = document.querySelectorAll('.accordion__trigger');
    for (var i = 0; i < triggers.length; i++) {
      triggers[i].addEventListener('click', function (event) {
        var trigger = event.currentTarget;
        var item = trigger.closest('.accordion__item');
        if (!item) return;
        var open = !item.classList.contains('is-open');
        item.classList.toggle('is-open', open);
        trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }
  }

  /* ------------------------------------------------------------------
     Dark mode
     ------------------------------------------------------------------ */

  var darkToggle = document.querySelector('[data-toggle-dark]');
  var themeColor = document.querySelector('meta[name="theme-color"]');
  var isDark = false;

  function applyDark(next, persist) {
    isDark = next;
    body.classList.toggle('lv-dark', next);

    if (darkToggle) {
      darkToggle.setAttribute('aria-pressed', next ? 'true' : 'false');
      setHidden(darkToggle.querySelector('[data-icon="sun"]'), !next);
      setHidden(darkToggle.querySelector('[data-icon="moon"]'), next);
    }

    // Otherwise the mobile address bar stays paper-white around a dark page.
    if (themeColor) themeColor.setAttribute('content', next ? '#1E2535' : '#FDFDFD');

    if (persist) store(STORAGE_DARK, next ? '1' : '0');
  }

  /* ------------------------------------------------------------------
     Reader text zoom — 100% / 112% / 125%
     ------------------------------------------------------------------ */

  var zoomToggle = document.querySelector('[data-cycle-zoom]');
  var zoomIndex = 0;

  function applyZoom(next, persist) {
    zoomIndex = ((next % ZOOM_STEPS.length) + ZOOM_STEPS.length) % ZOOM_STEPS.length;

    // Writing `zoom` reflows the document and drops the scroll position, which
    // would undo an incoming #anchor. Only write it when the value changes,
    // and restore the offset if the browser moved us.
    var zoom = ZOOM_STEPS[zoomIndex] === 1 ? '' : String(ZOOM_STEPS[zoomIndex]);
    if (body.style.zoom !== zoom) {
      var y = window.scrollY;
      body.style.zoom = zoom;
      if (window.scrollY !== y) window.scrollTo(0, y);
    }
    /* Clase por nivel: el CSS compacta el menú cuando el texto crece, porque
       `zoom` no cambia el ancho que ven las media queries y el menú se partía
       en dos líneas con A++. */
    body.classList.remove('lv-zoom-1', 'lv-zoom-2');
    if (zoomIndex > 0) body.classList.add('lv-zoom-' + zoomIndex);

    if (zoomToggle) {
      zoomToggle.textContent = ZOOM_LABELS[zoomIndex];
      zoomToggle.setAttribute(
        'aria-label',
        'Tamaño de texto: ' + Math.round(ZOOM_STEPS[zoomIndex] * 100) + '%. Cambiar.'
      );
    }
    if (persist) store(STORAGE_ZOOM, String(zoomIndex));
    measureHeader();
  }

  /* ------------------------------------------------------------------
     Video de portada
     Arranca sólo si el visitante no pidió menos movimiento ni ahorro de
     datos. En cualquier otro caso se queda el póster, que es un fotograma
     del propio video.
     ------------------------------------------------------------------ */

  /* ------------------------------------------------------------------
     Galería de equipos
     Las miniaturas cambian la foto grande y su etiqueta.
     ------------------------------------------------------------------ */

  /* ------------------------------------------------------------------
     Scroll reveals
     ------------------------------------------------------------------ */

  /* An IntersectionObserver alone misses anything the viewport jumps past —
     an incoming #anchor, a restored scroll position — because the ratio never
     changes. Sweep the remaining elements geometrically on every scroll. */
  function sweepReveals() {
    var pending = document.querySelectorAll('[data-rev].is-pending');
    for (var i = 0; i < pending.length; i++) {
      if (pending[i].getBoundingClientRect().top < window.innerHeight * .92) {
        pending[i].classList.remove('is-pending');
      }
    }
  }

  function wireReveals() {
    var items = document.querySelectorAll('[data-rev]');
    if (!CONFIG.animations || reduceMotion || !('IntersectionObserver' in window)) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
          entry.target.classList.remove('is-pending');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .12 });

    for (var i = 0; i < items.length; i++) {
      if (items[i].getBoundingClientRect().top > window.innerHeight * .92) {
        items[i].classList.add('is-pending');
        observer.observe(items[i]);
      }
    }
  }

  /* ------------------------------------------------------------------
     Stat counters — 1400ms cubic ease-out, starting when scrolled into view
     ------------------------------------------------------------------ */

  function wireCounters() {
    var counters = document.querySelectorAll('[data-count-to]');

    for (var i = 0; i < counters.length; i++) {
      (function (el) {
        var target = parseInt(el.getAttribute('data-count-to'), 10) || 0;
        var started = false;

        function run() {
          if (started) return;
          started = true;

          if (!CONFIG.animations || reduceMotion) {
            el.textContent = String(target);
            return;
          }

          var t0 = performance.now();
          (function step(now) {
            var k = Math.min(1, (now - t0) / 1400);
            el.textContent = String(Math.round(target * (1 - Math.pow(1 - k, 3))));
            if (k < 1) requestAnimationFrame(step);
          })(t0);
        }

        function inView() {
          var r = el.getBoundingClientRect();
          return r.top < window.innerHeight && r.bottom > 0;
        }

        if (!CONFIG.animations || reduceMotion || !('IntersectionObserver' in window)) {
          el.textContent = String(target);
          return;
        }

        if (inView()) { el.textContent = '0'; run(); return; }

        // Only blank it once we know an observer will fill it back in.
        el.textContent = '0';

        {
          var observer = new IntersectionObserver(function (entries) {
            if (entries[0].isIntersecting) {
              run();
              observer.disconnect();
            }
          }, { threshold: .4 });
          observer.observe(el);
        }
      })(counters[i]);
    }
  }

  /* ------------------------------------------------------------------
     Slider

     El carril ya desliza solo —es scroll con snap— así que esto sólo añade
     flechas, puntos y estado. Se pagina por ancho de carril y no por ficha:
     así el salto coincide con lo que se ve, sean tres, dos o una.
     ------------------------------------------------------------------ */

  /* wireSliders() vivía aquí: gobernaba el carril horizontal con flechas y
     puntos. Se retiró junto con el carril; no queda ningún [data-slider]. */

  /* ------------------------------------------------------------------
     Impresión

     Los contadores se vacían a '0' hasta que el observador los llena, y eso no
     lo puede arreglar el CSS. En papel no hay scroll que dispare nada: quien
     abra la página y mande a imprimir sin bajar hasta las cifras se las lleva
     todas en cero. Los reveals los resuelve la hoja de impresión; esto es sólo
     el texto de los numerales.
     ------------------------------------------------------------------ */

  function settleForPrint() {
    var counters = document.querySelectorAll('[data-count-to]');
    for (var i = 0; i < counters.length; i++) {
      counters[i].textContent = counters[i].getAttribute('data-count-to');
    }
  }


  /* ------------------------------------------------------------------
     Pop-ups de ficha: <dialog> nativo. Botón [data-dialog="id"] abre,
     [data-dialog-close] cierra, y un clic en el fondo también cierra.
     Escape lo cierra el navegador.
     ------------------------------------------------------------------ */
  function wireDialogs() {
    if (!('HTMLDialogElement' in window)) return;
    document.addEventListener('click', function (e) {
      var opener = e.target.closest('[data-dialog]');
      if (opener) {
        var dlg = document.getElementById(opener.getAttribute('data-dialog'));
        if (dlg && typeof dlg.showModal === 'function') { dlg.showModal(); e.preventDefault(); }
        return;
      }
      var closer = e.target.closest('[data-dialog-close]');
      if (closer) { closer.closest('dialog').close(); return; }
      if (e.target.tagName === 'DIALOG' && e.target.open) e.target.close();
    });
    /* Escape lo cierra el navegador por su cuenta; esto lo hace explícito para
       los entornos donde el evento no dispara la acción por defecto. */
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      var open = document.querySelector('dialog[open]');
      if (open) open.close();
    });
  }

  /* ------------------------------------------------------------------
     Carrusel por transform. Sin scroll nativo: un carril con scroll-snap
     horizontal secuestra la rueda y el trackpad cuando el puntero pasa por
     encima, y eso es lo que hacía que la página se sintiera rara.
     ------------------------------------------------------------------ */
  function wireCarousels() {
    var roots = document.querySelectorAll('[data-carousel]');
    for (var i = 0; i < roots.length; i++) {
      (function (root) {
        var track = root.querySelector('[data-carousel-track]');
        var prev = root.querySelector('[data-carousel-prev]');
        var next = root.querySelector('[data-carousel-next]');
        var dotBox = root.querySelector('[data-carousel-dots]');
        if (!track || track.children.length < 2) return;
        var page = 0, dots = [];

        function step() { var it = track.children; return it[1].offsetLeft - it[0].offsetLeft; }
        function perView() { return Math.max(1, Math.round(track.parentNode.clientWidth / step())); }
        function pages() { return Math.max(1, Math.ceil(track.children.length / perView())); }

        function render() {
          var n = pages();
          if (page > n - 1) page = n - 1;
          var idx = Math.min(page * perView(), track.children.length - perView());
          track.style.transform = 'translateX(' + (-idx * step()) + 'px)';
          if (prev) prev.disabled = page === 0;
          if (next) next.disabled = page >= n - 1;
          if (dotBox) {
            if (dots.length !== n) {
              dotBox.textContent = ''; dots = [];
              for (var d = 0; d < n; d++) {
                (function (k) {
                  var b = document.createElement('button');
                  b.type = 'button'; b.className = 'carousel__dot';
                  b.setAttribute('aria-label', 'Ir al grupo ' + (k + 1) + ' de ' + n);
                  b.addEventListener('click', function () { page = k; render(); });
                  dotBox.appendChild(b); dots.push(b);
                })(d);
              }
            }
            for (var m = 0; m < dots.length; m++) {
              dots[m].classList.toggle('is-active', m === page);
              if (m === page) dots[m].setAttribute('aria-current', 'true'); else dots[m].removeAttribute('aria-current');
            }
          }
        }
        if (prev) prev.addEventListener('click', function () { if (page > 0) { page--; render(); } });
        if (next) next.addEventListener('click', function () { if (page < pages() - 1) { page++; render(); } });
        root.addEventListener('keydown', function (e) {
          if (e.key === 'ArrowLeft' && page > 0) { page--; render(); }
          if (e.key === 'ArrowRight' && page < pages() - 1) { page++; render(); }
        });
        if (reduceMotion) track.style.transition = 'none';
        window.addEventListener('resize', render);
        render();
      })(roots[i]);
    }
  }

  /* Fichas que se giran: "Ver más" y "Volver" alternan la vuelta. En escritorio
     el hover ya la gira; el botón existe para el tacto y el teclado. */
  function wireFlips() {
    document.addEventListener('click', function (e) {
      var card = e.target.closest('.card--flip');
      if (!card) return;
      /* Un enlace del reverso navega; todo lo demás dentro de la ficha la gira. */
      if (e.target.closest('a')) return;
      /* "Volver": el hover y el foco del propio botón mantenían la ficha
         girada. Se fuerza la cara de la foto hasta que el puntero salga. */
      var back = e.target.closest('.flip__close');
      if (back) {
        card.classList.remove('is-flipped');
        card.classList.add('is-held');
        back.blur();
        card.addEventListener('mouseleave', function release() {
          card.classList.remove('is-held');
          card.removeEventListener('mouseleave', release);
        });
        return;
      }
      card.classList.remove('is-held');
      card.classList.toggle('is-flipped');
    });
  }

  /* Bandas alternas: dos secciones seguidas con el mismo fondo calculado se
     leen como un bloque. La segunda recibe .section--alt y el CSS le da el
     tono alterno de su familia. Se decide por el color CALCULADO, así que
     vale para cualquier página sin conocer sus clases. */
  function wireAltBands() {
    var secs = document.querySelectorAll('main > section');
    var prev = null;
    for (var i = 0; i < secs.length; i++) {
      var bg = getComputedStyle(secs[i]).backgroundColor;
      if (prev !== null && bg === prev) {
        secs[i].classList.add('section--alt');
        bg = getComputedStyle(secs[i]).backgroundColor;
      }
      prev = bg;
    }
  }

  function wirePrint() {
    window.addEventListener('beforeprint', settleForPrint);

    /* Safari no dispara beforeprint, pero sí cambia el media match. */
    if (!window.matchMedia) return;
    var mq = window.matchMedia('print');
    function onChange(e) { if (e.matches) settleForPrint(); }
    if (mq.addEventListener) mq.addEventListener('change', onChange);
    else if (mq.addListener) mq.addListener(onChange);
  }

  /* ------------------------------------------------------------------
     Boot
     ------------------------------------------------------------------ */

  body.classList.add('js');

  applyWhatsApp();
  /* Oscuro por defecto: es el aspecto aprobado por el cliente. El claro es la
     elección explícita del visitante y se recuerda. */
  applyDark(read(STORAGE_DARK) !== '0', false);
  applyZoom(parseInt(read(STORAGE_ZOOM) || '0', 10) || 0, false);

  if (darkToggle) {
    darkToggle.addEventListener('click', function () { applyDark(!isDark, true); });
  }

  if (zoomToggle) {
    zoomToggle.addEventListener('click', function () { applyZoom(zoomIndex + 1, true); });
  }

  window.addEventListener('scroll', function () {
    syncHeader();
    sweepReveals();
  }, { passive: true });

  window.addEventListener('load', sweepReveals);

  /* Sin portada fotográfica, el header tiene que seguir al tema (CSS). */
  if (document.querySelector('main > section:first-child.section--first')) body.classList.add('no-hero');
  syncHeader();
  measureHeader();
  wireMenus();
  wireSections();
  wireAccordions();
  wireReveals();
  wireCounters();
  wirePrint();
  wireFlips();
  wireAltBands();
  wireCarousels();
  sweepReveals();
})();
