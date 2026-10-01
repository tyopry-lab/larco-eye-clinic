/* @ds-bundle: {"format":4,"namespace":"LarcoVisiNDesignSystem_490633","components":[{"name":"DoctorCard","sourcePath":"components/cards/DoctorCard.jsx"},{"name":"ServiceCard","sourcePath":"components/cards/ServiceCard.jsx"},{"name":"TestimonialCard","sourcePath":"components/cards/TestimonialCard.jsx"},{"name":"Accordion","sourcePath":"components/core/Accordion.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"PillTag","sourcePath":"components/core/PillTag.jsx"},{"name":"SectionLabel","sourcePath":"components/core/SectionLabel.jsx"},{"name":"StatCounter","sourcePath":"components/core/StatCounter.jsx"}],"sourceHashes":{"components/cards/DoctorCard.jsx":"5c57f2f14fff","components/cards/ServiceCard.jsx":"c9cb126a31b3","components/cards/TestimonialCard.jsx":"d20c42701219","components/core/Accordion.jsx":"22cb1f8090a3","components/core/Button.jsx":"68fda78bf788","components/core/Input.jsx":"ce4d5cd2387f","components/core/PillTag.jsx":"ca542d7f40fb","components/core/SectionLabel.jsx":"2f1d7933f8bb","components/core/StatCounter.jsx":"044a6d59a8c6","ui_kits/website/Casos.jsx":"654691130ca0","ui_kits/website/Contacto.jsx":"92d7716bdc0a","ui_kits/website/Home.jsx":"07a0ca02ca4f","ui_kits/website/Servicios.jsx":"d87706963521","ui_kits/website/Sobre.jsx":"88ce7345c389","ui_kits/website/shared.jsx":"15b857d14aad"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LarcoVisiNDesignSystem_490633 = window.LarcoVisiNDesignSystem_490633 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/DoctorCard.jsx
try { (() => {
const {
  useState
} = React;
function DoctorCard({
  name,
  specialty,
  generation,
  imageSrc,
  imageLabel = 'retrato monocromático',
  style
}) {
  const [h, setH] = useState(false);
  return React.createElement('div', {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, React.createElement('div', {
    style: {
      position: 'relative',
      aspectRatio: '3/4',
      overflow: 'hidden',
      background: 'linear-gradient(160deg,var(--gray-3),var(--gray-5))'
    }
  }, imageSrc ? React.createElement('img', {
    src: imageSrc,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'grayscale(1)',
      transform: h ? 'scale(1.04)' : 'scale(1)',
      transition: 'transform var(--dur-med) var(--ease-out)'
    }
  }) : React.createElement('span', {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 11,
      letterSpacing: '.12em',
      color: 'rgba(14,20,20,.4)'
    }
  }, '[ ' + imageLabel + ' ]'), React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--photo-tint)',
      opacity: h ? 0 : 1,
      transition: 'opacity var(--dur-med)'
    }
  }), generation && React.createElement('span', {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '.1em',
      padding: '6px 14px',
      borderRadius: 'var(--radius-pill)',
      background: 'rgba(247,246,243,.85)',
      backdropFilter: 'blur(8px)',
      color: 'var(--ink)'
    }
  }, generation)), React.createElement('div', {
    style: {
      padding: '16px 0 0',
      borderBottom: '1px solid var(--border-hairline)',
      paddingBottom: 16
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 22,
      color: h ? 'var(--accent)' : 'var(--ink)',
      transition: 'color var(--dur-fast)'
    }
  }, name), React.createElement('div', {
    style: {
      marginTop: 4,
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, specialty)));
}
Object.assign(__ds_scope, { DoctorCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/DoctorCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/ServiceCard.jsx
try { (() => {
const {
  useState
} = React;
function ServiceCard({
  price,
  name,
  description,
  imageLabel = 'macro de ojo',
  imageSrc,
  href = '#',
  style
}) {
  const [h, setH] = useState(false);
  return React.createElement('a', {
    href,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: 420,
      padding: 28,
      background: 'var(--petrol)',
      color: 'var(--dark-text)',
      textDecoration: 'none',
      overflow: 'hidden',
      transform: h ? 'translateY(-4px)' : 'none',
      boxShadow: h ? 'var(--shadow-float)' : 'none',
      transition: 'all var(--dur-med) var(--ease-out)',
      ...style
    }
  }, React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      background: imageSrc ? 'url(' + imageSrc + ') center/cover' : 'linear-gradient(160deg,var(--gray-6),var(--petrol-deep))',
      filter: 'grayscale(1)',
      transform: h ? 'scale(1.04)' : 'scale(1)',
      transition: 'transform var(--dur-med) var(--ease-out)'
    }
  }, !imageSrc && React.createElement('span', {
    style: {
      position: 'absolute',
      bottom: '42%',
      left: 0,
      right: 0,
      textAlign: 'center',
      fontSize: 11,
      letterSpacing: '.12em',
      color: 'rgba(247,246,243,.35)'
    }
  }, '[ ' + imageLabel + ' ]')), React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,rgba(18,58,64,.25),rgba(12,42,47,.88))'
    }
  }), React.createElement('div', {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: '.08em',
      color: h ? 'var(--accent)' : 'var(--dark-text-muted)',
      transition: 'color var(--dur-fast)'
    }
  }, price), React.createElement('span', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 18,
      color: 'var(--dark-text-muted)',
      transform: h ? 'translateX(4px)' : 'none',
      transition: 'transform var(--dur-fast) var(--ease-out)'
    }
  }, '\u2192')), React.createElement('div', {
    style: {
      position: 'relative'
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 34,
      lineHeight: 1.1,
      fontWeight: 500
    }
  }, name), description && React.createElement('p', {
    style: {
      margin: '12px 0 0',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--dark-text-muted)'
    }
  }, description)));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/TestimonialCard.jsx
try { (() => {
function TestimonialCard({
  quote,
  author,
  detail,
  video = false,
  style
}) {
  return React.createElement('figure', {
    style: {
      margin: 0,
      background: 'var(--surface-raised)',
      borderRadius: 'var(--radius-card)',
      boxShadow: 'var(--shadow-card)',
      padding: 32,
      maxWidth: 420,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, video && React.createElement('div', {
    style: {
      position: 'relative',
      height: 160,
      borderRadius: 12,
      overflow: 'hidden',
      marginBottom: 24,
      background: 'linear-gradient(160deg,var(--gray-6),var(--gray-4))'
    }
  }, React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--photo-tint)'
    }
  }), React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement('span', {
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: 'rgba(247,246,243,.9)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 18,
      color: 'var(--petrol)',
      paddingLeft: 4
    }
  }, '\u25B6'))), React.createElement('blockquote', {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif-display)',
      fontSize: 20,
      lineHeight: 1.4,
      color: 'var(--ink)'
    }
  }, '\u201C' + quote + '\u201D'), React.createElement('figcaption', {
    style: {
      marginTop: 20,
      paddingTop: 16,
      borderTop: '1px solid var(--border-hairline)'
    }
  }, React.createElement('div', {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, author), detail && React.createElement('div', {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, detail)));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Accordion.jsx
try { (() => {
const {
  useState
} = React;
function Accordion({
  items,
  onDark = false
}) {
  const [open, setOpen] = useState(0);
  const bc = onDark ? 'var(--dark-border)' : 'var(--border-hairline)';
  return React.createElement('div', {
    style: {
      fontFamily: 'var(--font-sans)',
      borderTop: '1px solid ' + bc
    }
  }, items.map((it, i) => React.createElement('div', {
    key: i,
    style: {
      borderBottom: '1px solid ' + bc
    }
  }, React.createElement('button', {
    onClick: () => setOpen(open === i ? -1 : i),
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 16,
      padding: '22px 4px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      textAlign: 'left'
    }
  }, React.createElement('span', {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'baseline'
    }
  }, React.createElement('span', {
    style: {
      fontSize: 12,
      letterSpacing: '.14em',
      color: onDark ? 'var(--dark-text-muted)' : 'var(--text-faint)'
    }
  }, String(i + 1).padStart(2, '0')), React.createElement('span', {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 22,
      color: onDark ? 'var(--dark-text)' : 'var(--ink)'
    }
  }, it.title)), React.createElement('span', {
    style: {
      fontSize: 20,
      fontWeight: 300,
      color: open === i ? 'var(--accent)' : onDark ? 'var(--dark-text-muted)' : 'var(--text-muted)',
      transform: open === i ? 'rotate(45deg)' : 'none',
      transition: 'all var(--dur-fast) var(--ease-out)'
    }
  }, '+')), React.createElement('div', {
    style: {
      overflow: 'hidden',
      maxHeight: open === i ? 200 : 0,
      transition: 'max-height var(--dur-med) var(--ease-out)'
    }
  }, React.createElement('p', {
    style: {
      margin: '0 0 22px 40px',
      maxWidth: 560,
      fontSize: 15,
      lineHeight: 1.6,
      color: onDark ? 'var(--dark-text-muted)' : 'var(--text-muted)'
    }
  }, it.body)))));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const {
  useState
} = React;
function Button({
  variant = 'primary',
  size = 'md',
  onDark = false,
  children,
  style,
  ...rest
}) {
  const [h, setH] = useState(false),
    [p, setP] = useState(false);
  const pad = size === 'lg' ? '18px 44px' : size === 'sm' ? '10px 24px' : '14px 36px';
  const fs = size === 'lg' ? 16 : 14;
  let bg,
    color,
    border = '1px solid transparent';
  if (variant === 'primary') {
    bg = onDark ? h ? 'var(--accent-hover)' : 'var(--bone)' : h ? 'var(--accent-hover)' : 'var(--petrol)';
    color = onDark ? 'var(--ink)' : h ? 'var(--accent-ink)' : 'var(--dark-text)';
  } else if (variant === 'accent') {
    bg = h ? 'var(--accent-hover)' : 'var(--accent)';
    color = 'var(--accent-ink)';
  } else if (variant === 'outline') {
    bg = h ? onDark ? 'rgba(247,246,243,.08)' : 'rgba(14,20,20,.05)' : 'transparent';
    color = onDark ? 'var(--dark-text)' : 'var(--ink)';
    border = '1px solid ' + (onDark ? 'var(--dark-border)' : 'var(--border-strong)');
  } else {
    bg = 'transparent';
    color = h ? 'var(--accent)' : onDark ? 'var(--dark-text)' : 'var(--ink)';
  }
  return React.createElement('button', {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: fs,
      letterSpacing: '.02em',
      padding: variant === 'link' ? 0 : pad,
      borderRadius: 'var(--radius-pill)',
      border: variant === 'link' ? 'none' : border,
      background: variant === 'link' ? 'transparent' : bg,
      color,
      cursor: 'pointer',
      transition: 'all var(--dur-fast) var(--ease-out)',
      transform: p ? 'scale(.98)' : 'none',
      ...style
    },
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
const {
  useState
} = React;
function Input({
  label,
  multiline = false,
  onDark = false,
  style,
  ...rest
}) {
  const [fo, setFo] = useState(false);
  const bc = fo ? 'var(--accent)' : onDark ? 'var(--dark-border)' : 'var(--border-strong)';
  const base = {
    fontFamily: 'var(--font-sans)',
    fontSize: 15,
    width: '100%',
    boxSizing: 'border-box',
    padding: '14px 0',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid ' + bc,
    outline: 'none',
    color: onDark ? 'var(--dark-text)' : 'var(--ink)',
    transition: 'border-color var(--dur-fast) var(--ease-out)',
    resize: 'vertical'
  };
  return React.createElement('label', {
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, React.createElement('span', {
    style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '.14em',
      textTransform: 'lowercase',
      color: fo ? 'var(--accent)' : onDark ? 'var(--dark-text-muted)' : 'var(--text-muted)'
    }
  }, label), React.createElement(multiline ? 'textarea' : 'input', {
    onFocus: () => setFo(true),
    onBlur: () => setFo(false),
    rows: multiline ? 4 : undefined,
    style: base,
    ...rest
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/PillTag.jsx
try { (() => {
function PillTag({
  plus = true,
  overPhoto = false,
  onDark = false,
  children,
  style
}) {
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 500,
      padding: '8px 18px',
      borderRadius: 'var(--radius-pill)',
      background: overPhoto ? 'rgba(247,246,243,.85)' : onDark ? 'rgba(247,246,243,.08)' : 'var(--surface-raised)',
      backdropFilter: overPhoto ? 'blur(8px)' : 'none',
      border: overPhoto ? 'none' : '1px solid ' + (onDark ? 'var(--dark-border)' : 'var(--border-hairline)'),
      color: overPhoto ? 'var(--ink)' : onDark ? 'var(--dark-text)' : 'var(--ink)',
      ...style
    }
  }, plus && React.createElement('span', {
    style: {
      color: 'var(--accent)',
      fontWeight: 600,
      fontSize: 15,
      lineHeight: 1
    }
  }, '+'), children);
}
Object.assign(__ds_scope, { PillTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PillTag.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionLabel.jsx
try { (() => {
function SectionLabel({
  number,
  children,
  onDark = false,
  style
}) {
  return React.createElement('div', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-label)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'lowercase',
      color: onDark ? 'var(--dark-text-muted)' : 'var(--text-muted)',
      ...style
    }
  }, number ? number + ' — ' : '', children);
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/StatCounter.jsx
try { (() => {
const {
  useEffect,
  useRef,
  useState
} = React;
function StatCounter({
  value,
  suffix = '',
  label,
  onDark = false,
  animate = true
}) {
  const [n, setN] = useState(animate ? 0 : value);
  const ref = useRef(null);
  const done = useRef(false);
  useEffect(() => {
    if (!animate) return;
    const el = ref.current;
    let started = false;
    const start = () => {
      if (started) return;
      started = true;
      done.current = true;
      const t0 = performance.now();
      const step = t => {
        const k = Math.min(1, (t - t0) / 1400);
        setN(Math.round(value * (1 - Math.pow(1 - k, 3))));
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const inView = () => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight && r.bottom > 0;
    };
    if (inView()) {
      start();
      return;
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) start();
    }, {
      threshold: .4
    });
    io.observe(el);
    const on = () => {
      if (inView()) start();
    };
    window.addEventListener('scroll', on, {
      passive: true
    });
    const fb = setTimeout(() => {
      if (inView()) start();
    }, 700);
    return () => {
      io.disconnect();
      window.removeEventListener('scroll', on);
      clearTimeout(fb);
    };
  }, [value, animate]);
  return React.createElement('div', {
    ref,
    style: {
      fontFamily: 'var(--font-sans)'
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 'clamp(48px,5vw,80px)',
      lineHeight: 1,
      fontWeight: 500,
      color: onDark ? 'var(--dark-text)' : 'var(--ink)'
    }
  }, n, React.createElement('span', {
    style: {
      color: 'var(--accent)'
    }
  }, suffix)), React.createElement('div', {
    style: {
      marginTop: 10,
      fontSize: 14,
      color: onDark ? 'var(--dark-text-muted)' : 'var(--text-muted)',
      maxWidth: 180
    }
  }, label));
}
Object.assign(__ds_scope, { StatCounter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatCounter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Casos.jsx
try { (() => {
function CasosPage() {
  const casos = [['Queratocono bilateral en paciente de 19 años', 'Crosslinking corneal', 'caso clínico'], ['Desprendimiento de retina traumático', 'Vitrectomía + láser', 'caso clínico'], ['Cataratas maduras a los 82 años', 'Facoemulsificación', 'caso clínico'], ['Miopía -8.00 en ambos ojos', 'Lente intraocular ICL', 'caso clínico']];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '180px var(--grid-margin) 96px',
      position: 'relative',
      borderBottom: 'var(--rule)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "u-label",
    style: {
      position: 'absolute',
      top: 96,
      left: 'var(--grid-margin)',
      color: 'var(--text-faint)'
    }
  }, "one \u2014 casos cl\xEDnicos"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--grid-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'var(--text-display)',
      maxWidth: '11em'
    }
  }, "Resultados que ", /*#__PURE__*/React.createElement("span", {
    className: "u-accent-phrase"
  }, "se pueden ver"))))), /*#__PURE__*/React.createElement(SectionShell, {
    num: "two",
    label: "casos",
    style: {
      borderTop: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--grid-gutter)'
    }
  }, casos.map(([t, tr, k], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i * 100
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: 'block',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    label: 'imagen del caso 0' + (i + 1),
    ratio: "16/9"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 0',
      borderBottom: 'var(--rule)'
    }
  }, /*#__PURE__*/React.createElement(DS.SectionLabel, null, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 28,
      marginTop: 10,
      color: 'var(--ink)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, "Tratamiento: ", tr))))))), /*#__PURE__*/React.createElement(SectionShell, {
    num: "three",
    label: "testimonios",
    style: {
      background: 'var(--bone-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      overflowX: 'auto',
      paddingBottom: 12
    }
  }, /*#__PURE__*/React.createElement(DS.TestimonialCard, {
    quote: "Volv\xED a ver los rostros de mis nietos con una claridad que hab\xEDa olvidado.",
    author: "Rosa Maldonado",
    detail: "Cirug\xEDa de cataratas, 2024",
    video: true
  }), /*#__PURE__*/React.createElement(DS.TestimonialCard, {
    quote: "La cirug\xEDa refractiva me cambi\xF3 la rutina entera. Cero lentes desde entonces.",
    author: "Camila R\xEDos",
    detail: "Cirug\xEDa LASIK, 2025"
  }))));
}
window.CasosPage = CasosPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Casos.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contacto.jsx
try { (() => {
function ContactoPage() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '180px var(--grid-margin) var(--space-section)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "u-label",
    style: {
      position: 'absolute',
      top: 96,
      left: 'var(--grid-margin)',
      color: 'var(--text-faint)'
    }
  }, "one \u2014 cont\xE1ctanos"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--grid-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 'calc(var(--grid-gutter)*2)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 40px',
      fontSize: 'var(--text-display)'
    }
  }, "Agenda ", /*#__PURE__*/React.createElement("span", {
    className: "u-accent-phrase"
  }, "tu cita")), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px',
      background: 'var(--surface-raised)',
      borderRadius: 'var(--radius-card)',
      boxShadow: 'var(--shadow-card)',
      maxWidth: 480
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 26,
      color: 'var(--accent)'
    }
  }, "Recibido."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      color: 'var(--text-muted)'
    }
  }, "Te contactaremos hoy mismo para confirmar tu cita.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'grid',
      gap: 28,
      maxWidth: 480
    }
  }, /*#__PURE__*/React.createElement(DS.Input, {
    label: "nombre completo",
    placeholder: "Mar\xEDa S\xE1nchez",
    required: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(DS.Input, {
    label: "tel\xE9fono",
    placeholder: "099 000 0000"
  }), /*#__PURE__*/React.createElement(DS.Input, {
    label: "correo",
    type: "email",
    placeholder: "maria@mail.com"
  })), /*#__PURE__*/React.createElement(DS.Input, {
    label: "motivo de consulta",
    multiline: true,
    placeholder: "Cu\xE9ntanos qu\xE9 necesitas"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DS.Button, {
    size: "lg",
    type: "submit"
  }, "Enviar solicitud"))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 150
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: 'var(--rule)',
      paddingLeft: 40,
      display: 'grid',
      gap: 32,
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DS.SectionLabel, {
    style: {
      marginBottom: 8
    }
  }, "cl\xEDnica"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Av. 9 de Octubre y Garc\xEDa Moreno", /*#__PURE__*/React.createElement("br", null), "Guayaquil, Ecuador")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DS.SectionLabel, {
    style: {
      marginBottom: 8
    }
  }, "horario"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Lunes a viernes 08h00\u201318h00", /*#__PURE__*/React.createElement("br", null), "S\xE1bados 09h00\u201313h00")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DS.SectionLabel, {
    style: {
      marginBottom: 8
    }
  }, "directo"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "+593 4 000 0000", /*#__PURE__*/React.createElement("br", null), "WhatsApp +593 99 000 0000", /*#__PURE__*/React.createElement("br", null), "citas@larcovision.ec")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DS.SectionLabel, {
    style: {
      marginBottom: 8
    }
  }, "redes"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "instagram \xB7 facebook \xB7 youtube")), /*#__PURE__*/React.createElement(Photo, {
    label: "mapa embebido \u2014 ubicaci\xF3n de la cl\xEDnica",
    ratio: "4/3",
    dark: false
  }))))));
}
window.ContactoPage = ContactoPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contacto.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function Hero({
  go
}) {
  const [y, setY] = React.useState(0);
  React.useEffect(() => {
    const on = () => setY(window.scrollY);
    window.addEventListener('scroll', on, {
      passive: true
    });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'flex-end',
      overflow: 'hidden',
      background: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '-10% 0',
      background: 'linear-gradient(160deg,var(--gray-6) 0%,#1a2424 50%,var(--gray-5) 100%)',
      transform: 'translateY(' + y * 0.15 + 'px)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 13,
      letterSpacing: '.14em',
      color: 'rgba(247,246,243,.35)'
    }
  }, "[ macrofotograf\xEDa B&N \u2014 iris a pantalla completa ]")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,rgba(14,20,20,.2) 30%,rgba(14,20,20,.75))'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "u-label",
    style: {
      position: 'absolute',
      top: 96,
      left: 'var(--grid-margin)',
      color: 'rgba(247,246,243,.5)'
    }
  }, "one \u2014 inicio"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--grid-max)',
      margin: '0 auto',
      width: '100%',
      padding: '160px var(--grid-margin) 96px'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      maxWidth: '12em',
      fontSize: 'var(--text-display-xl)',
      color: 'var(--bone)'
    }
  }, "70 a\xF1os cuidando tu visi\xF3n ", /*#__PURE__*/React.createElement("span", {
    className: "u-accent-phrase"
  }, "con tecnolog\xEDa de vanguardia"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '28px 0 36px',
      maxWidth: 520,
      fontSize: 'var(--text-body-lg)',
      color: 'rgba(247,246,243,.75)'
    }
  }, "Tres generaciones de cirujanos oftalm\xF3logos. ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(247,246,243,.55)'
    }
  }, "Tradici\xF3n m\xE9dica familiar con diagn\xF3stico y quir\xF3fano de \xFAltima generaci\xF3n."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 350
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(DS.Button, {
    size: "lg",
    onDark: true,
    onClick: () => go('contacto')
  }, "Agendar Cita"), /*#__PURE__*/React.createElement(DS.Button, {
    size: "lg",
    variant: "outline",
    onDark: true,
    onClick: () => go('contacto')
  }, "Contacto")))));
}
function Legacy() {
  return /*#__PURE__*/React.createElement(SectionShell, {
    num: "two",
    label: "legado"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--grid-gutter)',
      alignItems: 'end',
      marginBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--text-h2)'
    }
  }, "Una historia que se mide ", /*#__PURE__*/React.createElement("span", {
    className: "u-accent-phrase"
  }, "en generaciones"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 150
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 440,
      justifySelf: 'end',
      color: 'var(--text-body)'
    }
  }, "Desde 1955 acompa\xF1amos a las familias ecuatorianas. ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "Lo que empez\xF3 como un consultorio es hoy un centro oftalmol\xF3gico integral.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      borderTop: 'var(--rule)'
    }
  }, [[70, '', 'años de experiencia clínica'], [3, '', 'generaciones de cirujanos oftalmólogos'], [5, ' mil', 'cirugías realizadas con éxito']].map(([v, s, l], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i * 120
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 32px 8px',
      borderRight: i < 2 ? 'var(--rule)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(DS.StatCounter, {
    value: v,
    suffix: s,
    label: l
  }))))));
}
function Doctors({
  go
}) {
  const docs = [['Dr. Alfredo Larco', 'Fundador · Glaucoma', '1ª generación'], ['Dr. Eduardo Larco', 'Retina y vítreo', '2ª generación'], ['Dra. Isabel Larco', 'Córnea y cirugía refractiva', '3ª generación']];
  return /*#__PURE__*/React.createElement(SectionShell, {
    num: "three",
    label: "equipo"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'end',
      marginBottom: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--text-h2)'
    }
  }, "Los m\xE9dicos detr\xE1s ", /*#__PURE__*/React.createElement("span", {
    className: "u-accent-phrase"
  }, "de cada mirada"))), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "link",
    onClick: () => go('sobre')
  }, "Sobre Nosotros \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--grid-gutter)'
    }
  }, docs.map(([n, s, g], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: n,
    delay: i * 120
  }, /*#__PURE__*/React.createElement(DS.DoctorCard, {
    name: n,
    specialty: s,
    generation: g
  })))));
}
function Services({
  go
}) {
  const svcs = [['desde $40', 'Consultas', 'Consulta oftalmológica integral', 'macro de iris'], ['desde $25', 'Exámenes', 'Diagnóstico por imagen de precisión', 'equipo de diagnóstico'], ['a evaluar', 'Cirugía', 'Quirófano de última generación', 'manos de cirujano'], ['a evaluar', 'Especialidades', 'Córnea · retina · glaucoma · refractiva', 'detalle de córnea']];
  return /*#__PURE__*/React.createElement("section", {
    className: "section-dark",
    style: {
      position: 'relative',
      padding: 'var(--space-section) var(--grid-margin)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "u-label",
    style: {
      position: 'absolute',
      top: 24,
      left: 'var(--grid-margin)',
      color: 'var(--dark-text-muted)'
    }
  }, "four \u2014 servicios"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--grid-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 var(--space-7)',
      fontSize: 'var(--text-h2)',
      color: 'var(--dark-text)'
    }
  }, "Todo tu cuidado visual, ", /*#__PURE__*/React.createElement("span", {
    className: "u-accent-phrase"
  }, "en un solo lugar"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 1,
      background: 'var(--dark-border)'
    }
  }, svcs.map(([p, n, d, img], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: n,
    delay: i * 100
  }, /*#__PURE__*/React.createElement(DS.ServiceCard, {
    price: p,
    name: n,
    description: d,
    imageLabel: img,
    style: {
      background: 'var(--petrol-deep)'
    },
    href: "#",
    onClick: e => {
      e && e.preventDefault && e.preventDefault();
      go('servicios');
    }
  }))))));
}
function Facilities() {
  return /*#__PURE__*/React.createElement(SectionShell, {
    num: "five",
    label: "instalaciones"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--grid-gutter)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Photo, {
    label: "quir\xF3fano de \xFAltima generaci\xF3n",
    ratio: "4/3"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 16,
      left: 16,
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(DS.PillTag, {
    overPhoto: true
  }, "Microscopio quir\xFArgico 3D")))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 150
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingLeft: 24
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 20px',
      fontSize: 'var(--text-h2)'
    }
  }, "Tecnolog\xEDa que ", /*#__PURE__*/React.createElement("span", {
    className: "u-accent-phrase"
  }, "ves en los resultados")), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 440,
      color: 'var(--text-body)'
    }
  }, "Equipamiento de diagn\xF3stico y quir\xF3fano renovado permanentemente. ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "Topograf\xEDa corneal, OCT, campimetr\xEDa computarizada y l\xE1ser de \xFAltima generaci\xF3n.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(DS.PillTag, null, "Topograf\xEDa corneal"), /*#__PURE__*/React.createElement(DS.PillTag, null, "OCT"), /*#__PURE__*/React.createElement(DS.PillTag, null, "L\xE1ser excimer"))))));
}
function Testimonials() {
  const t = [['Volví a ver los rostros de mis nietos con una claridad que había olvidado.', 'Rosa Maldonado', 'Cirugía de cataratas, 2024'], ['Me operaron el abuelo, el padre y ahora la hija. Tres generaciones confiando en tres generaciones.', 'Jorge Andrade', 'Paciente desde 1978'], ['La cirugía refractiva me cambió la rutina entera. Cero lentes desde entonces.', 'Camila Ríos', 'Cirugía LASIK, 2025']];
  return /*#__PURE__*/React.createElement(SectionShell, {
    num: "six",
    label: "testimonios",
    style: {
      background: 'var(--bone-2)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 var(--space-7)',
      fontSize: 'var(--text-h2)'
    }
  }, "Historias contadas ", /*#__PURE__*/React.createElement("span", {
    className: "u-accent-phrase"
  }, "con los ojos"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      overflowX: 'auto',
      paddingBottom: 12
    }
  }, t.map(([q, a, d], i) => /*#__PURE__*/React.createElement(DS.TestimonialCard, {
    key: i,
    quote: q,
    author: a,
    detail: d,
    video: i === 0,
    style: {
      flex: '0 0 400px'
    }
  }))));
}
function Articles({
  go
}) {
  const arts = [['Queratocono: detectarlo a tiempo lo cambia todo', 'caso clínico'], ['¿Cuándo operar cataratas? Señales que no debes ignorar', 'artículo'], ['Glaucoma: el ladrón silencioso de la visión', 'artículo']];
  return /*#__PURE__*/React.createElement(SectionShell, {
    num: "seven",
    label: "art\xEDculos"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'end',
      marginBottom: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--text-h2)'
    }
  }, "Casos y ", /*#__PURE__*/React.createElement("span", {
    className: "u-accent-phrase"
  }, "conocimiento"))), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "link",
    onClick: () => go('casos')
  }, "Casos Cl\xEDnicos \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      borderTop: 'var(--rule)'
    }
  }, arts.map(([t2, k], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i * 100
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('casos');
    },
    style: {
      display: 'block',
      padding: '32px 28px 40px',
      borderRight: i < 2 ? 'var(--rule)' : 'none',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(DS.SectionLabel, null, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 26,
      lineHeight: 1.25,
      marginTop: 14,
      color: 'var(--ink)'
    }
  }, t2), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, "Leer \u2192"))))));
}
function HomePage({
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    go: go
  }), /*#__PURE__*/React.createElement(Legacy, null), /*#__PURE__*/React.createElement(Doctors, {
    go: go
  }), /*#__PURE__*/React.createElement(Services, {
    go: go
  }), /*#__PURE__*/React.createElement(Facilities, null), /*#__PURE__*/React.createElement(Testimonials, null), /*#__PURE__*/React.createElement(Articles, {
    go: go
  }));
}
window.HomePage = HomePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Servicios.jsx
try { (() => {
function ServiciosPage({
  go
}) {
  const exams = [{
    title: 'Topografía corneal',
    body: 'Mapa tridimensional de la superficie corneal para diagnóstico de queratocono y planificación de cirugía refractiva.'
  }, {
    title: 'Tomografía de coherencia óptica (OCT)',
    body: 'Imagen de alta resolución de retina, mácula y nervio óptico. Fundamental en glaucoma y retinopatías.'
  }, {
    title: 'Campimetría computarizada',
    body: 'Evaluación del campo visual para detección y seguimiento de glaucoma.'
  }, {
    title: 'Biometría ocular',
    body: 'Medición de precisión para el cálculo del lente intraocular en cirugía de cataratas.'
  }];
  const esp = [['Córnea', 'Queratocono, trasplantes y superficie ocular', 'detalle de córnea'], ['Retina y vítreo', 'Retinopatía diabética, desprendimiento, mácula', 'fondo de ojo'], ['Glaucoma', 'Diagnóstico temprano y manejo quirúrgico', 'tonometría'], ['Cirugía refractiva', 'LASIK y lentes intraoculares para vivir sin marcos', 'láser excimer']];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '180px var(--grid-margin) 96px',
      position: 'relative',
      borderBottom: 'var(--rule)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "u-label",
    style: {
      position: 'absolute',
      top: 96,
      left: 'var(--grid-margin)',
      color: 'var(--text-faint)'
    }
  }, "one \u2014 servicios"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--grid-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'var(--text-display)',
      maxWidth: '11em'
    }
  }, "Del diagn\xF3stico ", /*#__PURE__*/React.createElement("span", {
    className: "u-accent-phrase"
  }, "a la cirug\xEDa"))))), /*#__PURE__*/React.createElement(SectionShell, {
    num: "two",
    label: "consultas y ex\xE1menes",
    style: {
      borderTop: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.2fr',
      gap: 'calc(var(--grid-gutter)*2)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 20px',
      fontSize: 'var(--text-h2)'
    }
  }, "Consulta integral"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 420
    }
  }, "Una hora dedicada a tus ojos. ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "Agudeza visual, biomicroscop\xEDa, presi\xF3n intraocular y fondo de ojo \u2014 con el especialista, no con un t\xE9cnico.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(DS.Button, {
    onClick: () => go('contacto')
  }, "Agendar Cita")))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 150
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DS.SectionLabel, {
    style: {
      marginBottom: 12
    }
  }, "ex\xE1menes de diagn\xF3stico"), /*#__PURE__*/React.createElement(DS.Accordion, {
    items: exams
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "section-dark",
    style: {
      position: 'relative',
      padding: 'var(--space-section) var(--grid-margin)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "u-label",
    style: {
      position: 'absolute',
      top: 24,
      left: 'var(--grid-margin)',
      color: 'var(--dark-text-muted)'
    }
  }, "three \u2014 especialidades"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--grid-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 var(--space-7)',
      fontSize: 'var(--text-h2)'
    }
  }, "Cuatro subespecialidades, ", /*#__PURE__*/React.createElement("span", {
    className: "u-accent-phrase"
  }, "un mismo est\xE1ndar"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 1,
      background: 'var(--dark-border)'
    }
  }, esp.map(([n, d, img], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: n,
    delay: i * 100
  }, /*#__PURE__*/React.createElement(DS.ServiceCard, {
    price: '0' + (i + 1),
    name: n,
    description: d,
    imageLabel: img,
    style: {
      background: 'var(--petrol-deep)',
      minHeight: 380
    }
  })))))));
}
window.ServiciosPage = ServiciosPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Servicios.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sobre.jsx
try { (() => {
function SobrePage({
  go
}) {
  const timeline = [['1955', 'El Dr. Alfredo Larco abre su consultorio oftalmológico en Guayaquil.'], ['1982', 'Segunda generación: se incorpora la cirugía de retina y vítreo.'], ['2004', 'Nueva sede con quirófano propio y unidad de diagnóstico por imagen.'], ['2018', 'Tercera generación: cirugía refractiva láser y córnea.'], ['2025', 'Renovación integral del quirófano con microscopía 3D.']];
  const team = [['Dr. Alfredo Larco', 'Fundador · Glaucoma', '1ª generación', 'Formado en la U. de Guayaquil; pionero de la campimetría en el país.'], ['Dr. Eduardo Larco', 'Retina y vítreo', '2ª generación', 'Fellowship en retina quirúrgica (Barcelona). 26 publicaciones indexadas.'], ['Dra. Isabel Larco', 'Córnea y refractiva', '3ª generación', 'Fellowship en córnea (Bascom Palmer). Cirujana LASIK certificada.']];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "section-dark",
    style: {
      padding: '180px var(--grid-margin) 96px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "u-label",
    style: {
      position: 'absolute',
      top: 96,
      left: 'var(--grid-margin)',
      color: 'var(--dark-text-muted)'
    }
  }, "one \u2014 sobre nosotros"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--grid-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'var(--text-display)',
      maxWidth: '11em'
    }
  }, "Una familia dedicada ", /*#__PURE__*/React.createElement("span", {
    className: "u-accent-phrase"
  }, "a que otras familias vean"))))), /*#__PURE__*/React.createElement(SectionShell, {
    num: "two",
    label: "nuestra historia"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'calc(var(--grid-gutter)*2)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 24px',
      fontSize: 'var(--text-h2)'
    }
  }, "Desde 1955"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 460
    }
  }, "Setenta a\xF1os de medicina hecha en familia. ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "Cada generaci\xF3n hered\xF3 la consulta, los pacientes y la obsesi\xF3n por la precisi\xF3n \u2014 y sum\xF3 la tecnolog\xEDa de su tiempo.")), /*#__PURE__*/React.createElement(Photo, {
    label: "archivo \u2014 consultorio original, 1955",
    ratio: "4/3",
    style: {
      marginTop: 32
    }
  }))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 150
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: 'var(--rule)',
      paddingLeft: 40
    }
  }, timeline.map(([y, t], i) => /*#__PURE__*/React.createElement("div", {
    key: y,
    style: {
      display: 'flex',
      gap: 24,
      padding: '20px 0',
      borderBottom: i < timeline.length - 1 ? 'var(--rule)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 24,
      color: 'var(--accent)',
      minWidth: 64
    }
  }, y), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      color: 'var(--text-muted)'
    }
  }, t))))))), /*#__PURE__*/React.createElement(SectionShell, {
    num: "three",
    label: "nuestro equipo",
    style: {
      background: 'var(--bone-2)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 var(--space-7)',
      fontSize: 'var(--text-h2)'
    }
  }, "Tres generaciones, ", /*#__PURE__*/React.createElement("span", {
    className: "u-accent-phrase"
  }, "una misma vocaci\xF3n"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--grid-gutter)'
    }
  }, team.map(([n, s, g, bio], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: n,
    delay: i * 120
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DS.DoctorCard, {
    name: n,
    specialty: s,
    generation: g
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '14px 0 0',
      fontSize: 14,
      color: 'var(--text-muted)',
      lineHeight: 1.6
    }
  }, bio)))))), /*#__PURE__*/React.createElement(SectionShell, {
    num: "four",
    label: "instalaciones y tecnolog\xEDa"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 var(--space-7)',
      fontSize: 'var(--text-h2)'
    }
  }, "El quir\xF3fano ", /*#__PURE__*/React.createElement("span", {
    className: "u-accent-phrase"
  }, "como carta de presentaci\xF3n"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr',
      gap: 1,
      background: 'var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    label: "quir\xF3fano \u2014 vista general",
    style: {
      height: 340
    }
  }), /*#__PURE__*/React.createElement(Photo, {
    label: "OCT",
    style: {
      height: 340
    }
  }), /*#__PURE__*/React.createElement(Photo, {
    label: "top\xF3grafo corneal",
    style: {
      height: 340
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(DS.PillTag, null, "Microscop\xEDa 3D"), /*#__PURE__*/React.createElement(DS.PillTag, null, "Facoemulsificaci\xF3n"), /*#__PURE__*/React.createElement(DS.PillTag, null, "L\xE1ser excimer"), /*#__PURE__*/React.createElement(DS.PillTag, null, "Campimetr\xEDa computarizada"))));
}
window.SobrePage = SobrePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sobre.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/shared.jsx
try { (() => {
const DS = new Proxy({}, {
  get: (_, k) => (window.LarcoVisiNDesignSystem_490633 || {})[k]
});
function useReveal() {
  const ref = React.useRef(null);
  const [vis, setVis] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    const inView = () => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight && r.bottom > 0;
    };
    if (inView()) {
      setVis(true);
      return;
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVis(true);
        io.disconnect();
      }
    }, {
      threshold: .18
    });
    io.observe(el);
    const fb = setTimeout(() => {
      if (inView()) setVis(true);
    }, 700);
    const on = () => {
      if (inView()) {
        setVis(true);
        window.removeEventListener('scroll', on);
      }
    };
    window.addEventListener('scroll', on, {
      passive: true
    });
    return () => {
      io.disconnect();
      clearTimeout(fb);
      window.removeEventListener('scroll', on);
    };
  }, []);
  return [ref, vis];
}
function Reveal({
  children,
  delay = 0,
  style
}) {
  const [ref, vis] = useReveal();
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      opacity: vis ? 1 : 0,
      transform: vis ? 'none' : 'translateY(24px)',
      transition: 'opacity var(--dur-reveal) var(--ease-out) ' + delay + 'ms, transform var(--dur-reveal) var(--ease-out) ' + delay + 'ms',
      ...style
    }
  }, children);
}
function Photo({
  label,
  ratio,
  height,
  dark = true,
  style,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      aspectRatio: ratio,
      height,
      background: dark ? 'linear-gradient(160deg,var(--gray-6),var(--gray-4))' : 'linear-gradient(160deg,var(--gray-3),var(--gray-2))',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--photo-tint)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 12,
      letterSpacing: '.12em',
      color: dark ? 'rgba(247,246,243,.5)' : 'rgba(14,20,20,.35)'
    }
  }, "[ ", label, " ]"), children);
}
function Wordmark({
  onDark,
  size = 1
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: 'nowrap',
      color: onDark ? 'var(--dark-text)' : 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 26 * size,
      fontWeight: 500
    }
  }, "Larco"), ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12 * size,
      fontWeight: 600,
      letterSpacing: '.22em',
      verticalAlign: 6 * size
    }
  }, "VISI\xD3N"));
}
function Nav({
  page,
  go,
  heroDark = false
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', on);
    return () => window.removeEventListener('scroll', on);
  }, []);
  const dark = heroDark && !scrolled;
  const links = [['home', 'Inicio'], ['sobre', 'Sobre Nosotros'], ['servicios', 'Servicios'], ['casos', 'Casos Clínicos'], ['contacto', 'Contáctanos']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: scrolled ? '12px var(--grid-margin)' : '24px var(--grid-margin)',
      background: scrolled ? 'rgba(247,246,243,.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-hairline)' : '1px solid transparent',
      transition: 'all var(--dur-med) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('home');
    },
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    onDark: dark
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 32,
      alignItems: 'center'
    }
  }, links.map(([id, l]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(id);
    },
    style: {
      fontSize: 13,
      fontWeight: page === id ? 600 : 500,
      color: page === id ? 'var(--accent)' : dark ? 'var(--dark-text)' : 'var(--ink)',
      textDecoration: 'none'
    }
  }, l)), /*#__PURE__*/React.createElement(DS.Button, {
    size: "sm",
    onDark: dark,
    onClick: () => go('contacto')
  }, "Agendar Cita")));
}
function Footer({
  go
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "section-dark",
    style: {
      background: 'var(--petrol-deep)',
      padding: 'var(--space-9) var(--grid-margin) var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--grid-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: 'var(--grid-gutter)',
      paddingBottom: 'var(--space-8)',
      borderBottom: '1px solid var(--dark-border)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Wordmark, {
    onDark: true,
    size: 1.4
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      maxWidth: 300,
      fontSize: 14,
      color: 'var(--dark-text-muted)'
    }
  }, "70 a\xF1os cuidando la visi\xF3n de las familias ecuatorianas.")), [['Clínica', [['sobre', 'Sobre Nosotros'], ['servicios', 'Servicios'], ['casos', 'Casos Clínicos']]], ['Especialidades', [['servicios', 'Córnea'], ['servicios', 'Retina y vítreo'], ['servicios', 'Glaucoma'], ['servicios', 'Cirugía refractiva']]], ['Contacto', [['contacto', 'Agendar cita'], ['contacto', 'WhatsApp'], ['contacto', 'Ubicación']]]].map(([t, ls]) => /*#__PURE__*/React.createElement("div", {
    key: t
  }, /*#__PURE__*/React.createElement("div", {
    className: "u-label",
    style: {
      color: 'var(--dark-text-muted)',
      marginBottom: 16
    }
  }, t.toLowerCase()), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10
    }
  }, ls.map(([id, l], i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(id);
    },
    style: {
      fontSize: 14,
      color: 'var(--dark-text)',
      textDecoration: 'none'
    }
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: 24,
      fontSize: 12,
      color: 'var(--dark-text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 1955\u20132026 Larco Visi\xF3n \xB7 Guayaquil, Ecuador"), /*#__PURE__*/React.createElement("span", null, "instagram \xB7 facebook \xB7 youtube"))));
}
function WhatsAppFloat() {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    title: "WhatsApp",
    style: {
      position: 'fixed',
      bottom: 28,
      right: 28,
      zIndex: 60,
      width: 56,
      height: 56,
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      background: h ? 'var(--accent-hover)' : 'var(--accent)',
      color: 'var(--accent-ink)',
      boxShadow: 'var(--shadow-float)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--dur-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.5.1-.7l.4-.5c.1-.2.1-.3 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s1 2.5 1.1 2.7c.1.2 1.9 3 4.7 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2l-.2-.2Z"
  })));
}
function SectionShell({
  num,
  label,
  dark = false,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: dark ? 'section-dark' : '',
    style: {
      position: 'relative',
      padding: 'var(--space-section) var(--grid-margin)',
      borderTop: '1px solid var(--border-hairline)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "u-label",
    style: {
      position: 'absolute',
      top: 24,
      left: 'var(--grid-margin)',
      color: dark ? 'var(--dark-text-muted)' : 'var(--text-faint)'
    }
  }, num, " \u2014 ", label), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--grid-max)',
      margin: '0 auto'
    }
  }, children));
}
Object.assign(window, {
  DS,
  Reveal,
  Photo,
  Wordmark,
  Nav,
  Footer,
  WhatsAppFloat,
  SectionShell
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.DoctorCard = __ds_scope.DoctorCard;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.PillTag = __ds_scope.PillTag;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.StatCounter = __ds_scope.StatCounter;

})();
