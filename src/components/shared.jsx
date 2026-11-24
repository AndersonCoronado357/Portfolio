export function CubeIcon({ className = '', style, ...resto }) {
  return (
    <span
      className={`grid shrink-0 place-items-center rounded-full bg-amber ${className}`}
      style={style}
      {...resto}
    >
      <svg viewBox="0 0 24 24" className="h-[74%] w-[74%]">
        <path
          d="M12 3.5 19 7.5v9L12 20.5 5 16.5v-9L12 3.5z M5 7.5 12 11.5 19 7.5 M12 11.5V20.5"
          fill="none"
          stroke="var(--color-ink)"
          strokeWidth="1.9"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}

// Con `href` sale como enlace (para irse a otra pagina); sin el, como boton.
// Iconos de redes. Viven aca porque los usan Sobre mi y Contacto, y tienen
// que ser LOS MISMOS en los dos sitios. Todos son solidos y llenan el
// viewBox por igual, para que ninguno se vea mas liviano que el resto.
const ICONOS_RED = {
  telefono: <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02z" />,
  // Burbuja MACIZA con el auricular recortado en hueco (evenodd), para que
  // pese lo mismo que GitHub o LinkedIn. Dibujada a contorno se veia hueca
  // al lado de los demas.
  whatsapp: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.04 2.2a9.78 9.78 0 0 0-8.44 14.83L2.2 21.8l4.9-1.37A9.78 9.78 0 1 0 12.04 2.2zM16.96 15.47c-.2.57-1.19 1.1-1.66 1.17-.42.06-.95.08-1.54-.1-.35-.12-.81-.27-1.39-.52-2.45-1.06-4.04-3.53-4.17-3.69-.12-.17-.99-1.33-.99-2.53s.63-1.79.85-2.04c.22-.24.49-.3.65-.3h.47c.15.01.35-.6.55.42.21.49.7 1.7.76 1.82.06.13.1.27.02.44-.8.16-.12.26-.24.41-.13.14-.26.32-.37.43-.13.12-.25.26-.11.5.14.25.63 1.05 1.36 1.7.94.83 1.73 1.09 1.97 1.21.25.13.39.11.53-.6.14-.16.61-.71.77-.96.16-.25.33-.21.55-.12.23.08 1.44.67 1.68.8.24.13.4.19.46.29.06.1.06.59-.14 1.17z"
    />
  ),
  email: (
    <>
      <path d="M2.4 6.6A2.4 2.4 0 0 1 4.8 4.4h14.4a2.4 2.4 0 0 1 2.4 2.2L12 13.1z" />
      <path d="M21.6 9.1v8.3a2.4 2.4 0 0 1-2.4 2.4H4.8a2.4 2.4 0 0 1-2.4-2.4V9.1l9.6 6.4z" />
    </>
  ),
  github: <path d="M12 .8C5.6.8.4 6 .4 12.4c0 5.13 3.32 9.47 7.93 11.01.58.1.79-.25.79-.56v-2c-3.23.7-3.91-1.55-3.91-1.55-.53-1.34-1.29-1.7-1.29-1.7-1.06-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.75.4-1.27.74-1.56-2.58-.29-5.29-1.29-5.29-5.74 0-1.27.45-2.3 1.2-3.11-.12-.3-.52-1.48.11-3.08 0 0 .98-.31 3.2 1.19a11.1 11.1 0 0 1 5.83 0c2.22-1.5 3.2-1.19 3.2-1.19.63 1.6.23 2.78.11 3.08.75.81 1.2 1.84 1.2 3.11 0 4.46-2.72 5.44-5.31 5.73.42.36.79 1.07.79 2.15v3.19c0 .31.21.67.8.56A11.61 11.61 0 0 0 23.6 12.4C23.6 6 18.4.8 12 .8z" />,
  // El "in" ocupa el alto completo (1.6 a 22.4), como GitHub y el telefono.
  // Encerrarlo en un cuadro lo hacia pesar el doble que los demas.
  linkedin: (
    <>
      <circle cx="4.3" cy="4.2" r="2.6" />
      <path d="M1.9 9h4.8v13.4H1.9z" />
      <path d="M9.4 9h4.6v1.85h.06c.64-1.15 2.2-2.36 4.53-2.36 4.84 0 5.74 3 5.74 6.9v7.01h-4.8v-6.22c0-1.48-.03-3.39-2.13-3.39-2.13 0-2.46 1.6-2.46 3.28v6.33H9.4z" />
    </>
  ),
  // "i" de Indeed con el mismo alto que el resto
  indeed: (
    <>
      <circle cx="12" cy="4" r="3.1" />
      <path d="M8.9 9.4h6.2v9.4c0 2.1.9 3.3 2.7 3.6v2.1c-5.7-.3-8.9-3.3-8.9-8.4z" />
    </>
  ),
}

// Cada logo viene dibujado a su propia escala: medidos en pantalla, los
// glifos iban de 15.4 a 23.6 de alto, asi que unos se veian enormes al lado
// de otros. Estos factores los dejan a todos en ~19, centrados en (12,12).
const ESCALA_RED = { telefono: 1.06, whatsapp: 0.97, email: 1.1, github: 0.85, linkedin: 0.92, indeed: 0.82 }

export function IconoRed({ label, className = '', style, ...resto }) {
  const k = String(label).toLowerCase().replace('é', 'e')
  const svg = ICONOS_RED[k] || ICONOS_RED.email
  const s = ESCALA_RED[k] || 1
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style} {...resto}>
      <g transform={`translate(12 12) scale(${s}) translate(-12 -12)`}>{svg}</g>
    </svg>
  )
}

// Un icono propio por habilidad, en el mismo orden que HABILIDADES:
// equipo, iniciativa, responsabilidad, aprendizaje, adaptacion, creatividad.
const SKILL_PATHS = [
  // dos personas
  <>
    <circle cx="9" cy="8" r="3.1" />
    <path d="M3.4 19.5c0-3.1 2.5-5.2 5.6-5.2s5.6 2.1 5.6 5.2" />
    <path d="M16.2 6.2a3 3 0 0 1 0 5.6M17.6 14.9c2 .6 3.4 2.3 3.4 4.6" />
  </>,
  // rayo
  <path d="M13.4 2.5 5.2 13.6h5.6l-.9 7.9 8.2-11.2h-5.6z" strokeLinejoin="round" />,
  // escudo con check
  <>
    <path d="M12 2.6 4.8 5.4v6c0 4.4 3 8.4 7.2 9.8 4.2-1.4 7.2-5.4 7.2-9.8v-6z" strokeLinejoin="round" />
    <path d="m8.9 11.8 2.3 2.3 4-4.4" strokeLinecap="round" />
  </>,
  // libro abierto
  <>
    <path d="M12 6.8C10.7 5.5 8.9 4.8 6.6 4.8H3.4v12.6h3.2c2.3 0 4.1.7 5.4 2z" strokeLinejoin="round" />
    <path d="M12 6.8c1.3-1.3 3.1-2 5.4-2h3.2v12.6h-3.2c-2.3 0-4.1.7-5.4 2z" strokeLinejoin="round" />
  </>,
  // flechas de ciclo
  <>
    <path d="M4.2 12a7.8 7.8 0 0 1 13-5.8" strokeLinecap="round" />
    <path d="M19.8 12a7.8 7.8 0 0 1-13 5.8" strokeLinecap="round" />
    <path d="M17.6 2.9v3.6h-3.6M6.4 21.1v-3.6h3.6" strokeLinecap="round" strokeLinejoin="round" />
  </>,
  // bombilla
  <>
    <path d="M12 2.8a6.2 6.2 0 0 0-3.5 11.3c.5.4.8 1 .8 1.6v.5h5.4v-.5c0-.6.3-1.2.8-1.6A6.2 6.2 0 0 0 12 2.8z" strokeLinejoin="round" />
    <path d="M9.7 19.2h4.6M10.6 21.4h2.8" strokeLinecap="round" />
  </>,
]

export function IconoSkill({ i = 0, className = '', style, ...resto }) {
  return (
    <span className={`grid shrink-0 place-items-center rounded-full bg-amber ${className}`} style={style} {...resto}>
      <svg viewBox="0 0 24 24" className="h-[62%] w-[62%]" fill="none" stroke="var(--color-ink)" strokeWidth="1.9">
        {SKILL_PATHS[i % SKILL_PATHS.length]}
      </svg>
    </span>
  )
}

export function Btn({ children, onClick, href, white = false, className = '', style, ...resto }) {
  const clases = `font-accent cursor-pointer px-8 py-[11px] font-extrabold uppercase text-ink no-underline transition-[translate] duration-200 hover:-translate-y-px ${
    white ? 'bg-lienzo' : 'bg-amber'
  } ${className}`
  const estilo = { borderRadius: '0 25px 0 25px', fontSize: '20px', ...style }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={clases} style={estilo} {...resto}>
        {children}
      </a>
    )
  }
  return (
    <button onClick={onClick} className={clases} style={estilo} {...resto}>
      {children}
    </button>
  )
}
