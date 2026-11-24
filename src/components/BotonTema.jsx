import { useEffect, useRef } from 'react'
import { alternarTema, useTema } from '../lib/tema'
import { onScroll, scrollState } from '../scroll/progreso'
import { useEsMobile } from '../lib/dispositivo'
import { PROY_COLORS } from '../anim/circulos'

const TRANS = 'transform 0.6s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.5s ease'

export default function BotonTema({ acento = null, escala = 1 }) {
  const oscuro = useTema() === 'dark'
  const mobile = useEsMobile()
  const btnRef = useRef(null)

  // Con una landing de proyecto abierta manda el color de ESA app. Si no: en
  // la vista de un proyecto, el color de ese proyecto; en el resto, el acento
  // que va marcando el scroll del portafolio.
  useEffect(() => {
    const btn = btnRef.current
    if (!btn) return
    if (acento) {
      btn.style.backgroundColor = acento
      return
    }
    let ultimo = ''
    const pinta = () => {
      const a = PROY_COLORS[scrollState.vista] || scrollState.acento
      const c = `rgb(${a[0]},${a[1]},${a[2]})`
      if (c === ultimo) return
      ultimo = c
      btn.style.backgroundColor = c
    }
    pinta()
    return onScroll(pinta)
  }, [acento])

  return (
    <button
      ref={btnRef}
      onClick={alternarTema}
      aria-label={oscuro ? 'Modo claro' : 'Modo oscuro'}
      className="fixed z-[200] grid cursor-pointer place-items-center overflow-hidden rounded-full transition-[transform,background-color] duration-[420ms] hover:scale-110 active:scale-90"
      style={{
        left: `${(mobile ? 32 : 24) * escala}px`,
        bottom: `${(mobile ? 32 : 24) * escala}px`,
        width: `${(mobile ? 78 : 48) * escala}px`,
        height: `${(mobile ? 78 : 48) * escala}px`,
        backgroundColor: acento || 'var(--color-amber)',
      }}
    >
      <svg
        viewBox="0 0 24 24"
        width={(mobile ? 42 : 26) * escala}
        height={(mobile ? 42 : 26) * escala}
        className="col-start-1 row-start-1"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        style={{ opacity: oscuro ? 0 : 1, transform: `rotate(${oscuro ? -120 : 0}deg) scale(${oscuro ? 0.55 : 1})`, transition: TRANS, willChange: 'transform, opacity' }}
      >
        <circle cx="12" cy="12" r="4.1" fill="#fff" stroke="none" />
        <path d="M12 2.4v2.5M12 19.1v2.5M4.3 4.3l1.8 1.8M17.9 17.9l1.8 1.8M2.4 12h2.5M19.1 12h2.5M4.3 19.7l1.8-1.8M17.9 6.1l1.8-1.8" />
      </svg>
      <svg
        viewBox="0 0 24 24"
        width={(mobile ? 45 : 28) * escala}
        height={(mobile ? 45 : 28) * escala}
        className="col-start-1 row-start-1"
        fill="#fff"
        stroke="none"
        style={{ opacity: oscuro ? 1 : 0, transform: `rotate(${oscuro ? 0 : 120}deg) scale(${oscuro ? 1 : 0.55})`, transition: TRANS, willChange: 'transform, opacity' }}
      >
        <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" />
      </svg>
    </button>
  )
}
