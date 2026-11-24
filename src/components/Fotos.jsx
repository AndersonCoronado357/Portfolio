import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { onScroll } from '../scroll/progreso'
import { VIEW_IDS } from '../lib/views'
import { REPOSO } from '../anim/contenido'
import { esMobile, useEsMobile } from '../lib/dispositivo'
import { poner } from '../lib/estilo'

const IDX = {
  inicio: VIEW_IDS.indexOf('inicio'),
  sobremi: VIEW_IDS.indexOf('sobre-mi'),
  contacto: VIEW_IDS.indexOf('contacto'),
}

// Cursos ocupa DOS paradas (la lista scrollea por dentro mientras la vista
// se queda quieta), asi que su foto tiene que aguantar visible todo el
// tramo, no solo un punto. Se mide la distancia al intervalo, no al indice.
const CURSOS_A = VIEW_IDS.indexOf('formacion-2')
const CURSOS_B = VIEW_IDS.indexOf('formacion-3')
const distRango = (pr, a, b) => (pr < a ? pr - a : pr > b ? pr - b : 0)

const clamp = (v, a, b) => Math.min(Math.max(v, a), b)
const ss = (v) => v * v * (3 - 2 * v)

export default function Fotos() {
  const mobile = useEsMobile()
  const iniRef = useRef(null)
  const sobRef = useRef(null)
  const conRef = useRef(null)
  const curRef = useRef(null)
  const curvaRef = useRef(null)
  const boot = useRef({ v: 0 })

  useEffect(() => {
    const tw = gsap.to(boot.current, { v: 1, duration: 0.9, delay: 1.25, ease: 'power2.out' })

    const trazar = () => {
      const p = curvaRef.current
      if (!p) return
      let W, H, Wb, cx, cy, r
      if (esMobile()) {
        Wb = 552
        cx = 218.2
        cy = 398.5
        r = 271.5
      } else {
        const esc = Math.min(window.innerWidth / 1920, window.innerHeight / 1080)
        W = window.innerWidth / esc
        H = window.innerHeight / esc
        Wb = 0.2875 * W
        cx = 0.1841 * W - 135.1
        cy = 0.368 * H + 1
        r = 271.5
      }
      let xR = cx + r
      let yR = cy
      if (xR > Wb) { xR = Wb; yR = cy + Math.sqrt(Math.max(0, r * r - (Wb - cx) ** 2)) }
      const xL = cx < r ? 0 : cx - r
      const yL = cx < r ? cy + Math.sqrt(Math.max(0, r * r - cx * cx)) : cy
      let d = `M0 0 H${Wb.toFixed(1)} V${yR.toFixed(1)}`
      if (xR < Wb) d += ` L${xR.toFixed(1)} ${yR.toFixed(1)}`
      d += ` A${r} ${r} 0 0 1 ${xL.toFixed(1)} ${yL.toFixed(1)}`
      if (xL > 0) d += ` L0 ${yL.toFixed(1)}`
      p.setAttribute('d', d + ' Z')
    }
    trazar()
    window.addEventListener('resize', trazar)

    const pintar = (el, d, gate) => {
      if (!el) return
      // Se descodifica cuando la vista se acerca, no en el cuadro en que
      // aparece (en el telefono saldria vacia un instante).
      const ad = Math.abs(d)
      if (ad < 1.6 && !el.__lista) {
        el.__lista = true
        if (el.decode) el.decode().catch(() => {})
      } else if (ad > 2.5) el.__lista = false
      const off = clamp(Math.abs(d) / 0.6, 0, 1)
      // La opacidad llega a 1 antes del tramo de REPOSO (ver contenido.js):
      // al asentarse en la vista la foto ya no cambia y no parpadea.
      const offOp = clamp((Math.abs(d) - REPOSO) / (0.6 - REPOSO), 0, 1)
      const vis = (1 - ss(offOp)) * gate
      poner(el, 'opacity', String(vis))
      poner(el, 'transform', `scale(${1 - 0.045 * ss(off)})`)
      poner(el, 'visibility', vis < 0.003 ? 'hidden' : 'visible')
    }

    // En un salto del menu la foto sigue al salto: la de la vista que se deja
    // se va mientras llega la de la nueva, en vez de cambiar de golpe al final.
    const distSalto = (s, a, b) => {
      const iva = VIEW_IDS.indexOf(s.va)
      const ivb = VIEW_IDS.indexOf(s.vb)
      if (iva >= a && iva <= b) return s.adelante ? s.t : -s.t
      if (ivb >= a && ivb <= b) return s.adelante ? s.t - 1 : 1 - s.t
      return 1
    }

    const off = onScroll(({ pr, salto }) => {
      const b = ss(clamp(boot.current.v, 0, 1))
      const dist = (a, z) => (salto ? distSalto(salto, a, z) : distRango(pr, a, z))
      pintar(iniRef.current, dist(IDX.inicio, IDX.inicio), b)
      pintar(sobRef.current, dist(IDX.sobremi, IDX.sobremi), 1)
      pintar(conRef.current, dist(IDX.contacto, IDX.contacto), 1)
      pintar(curRef.current, dist(CURSOS_A, CURSOS_B), 1)
    })

    return () => {
      tw.kill()
      window.removeEventListener('resize', trazar)
      off()
    }
  }, [])

  // Todas nacen invisibles. `pintar` les da su opacidad en el primer tick del
  // scroll, pero eso pasa DESPUES del primer pintado: hasta ahora las tres
  // fotos (menos la de cursos, que ya lo hacia) aparecian juntas y encimadas
  // durante un instante cada vez que se recargaba.
  const oculta = { opacity: 0 }

  return (
    <div className="pointer-events-none absolute inset-0 z-40" aria-hidden="true">
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="foto-curva" clipPathUnits="userSpaceOnUse">
            <path ref={curvaRef} d="M0 0" />
          </clipPath>
        </defs>
      </svg>
      <img
        ref={iniRef}
        src="/foto-inicio.webp"
        alt=""
        fetchPriority="high"
        draggable="false"
        className="absolute select-none"
        style={
          mobile
            ? { ...oculta, left: '231px', top: 'calc(50% - 397.5px)', width: '552px', height: '675px', objectFit: 'contain', objectPosition: 'bottom', clipPath: 'url(#foto-curva)', WebkitClipPath: 'url(#foto-curva)', transformOrigin: 'center bottom' }
            : { ...oculta, left: '18.23%', top: '21.39%', width: '28.75%', height: '62.5%', objectFit: 'contain', objectPosition: 'bottom', clipPath: 'url(#foto-curva)', WebkitClipPath: 'url(#foto-curva)', transformOrigin: 'center bottom' }
        }
      />
      <img
        ref={sobRef}
        src="/foto-sobremi.webp"
        alt=""
        draggable="false"
        className="absolute select-none"
        style={
          mobile
            ? { ...oculta, left: '12.5%', top: 'calc(100% - 949px)', width: '776px', height: '949px', objectFit: 'contain', objectPosition: 'bottom', transformOrigin: 'center bottom' }
            : { ...oculta, left: '54.95%', top: '15.46%', width: '40.42%', height: '87.87%', objectFit: 'contain', objectPosition: 'bottom', transformOrigin: 'center bottom' }
        }
      />
      {/* Cursos: ocupa la franja derecha que la lista deja libre (el
          padding-right del 34%). Si el archivo aun no existe, se oculta sola
          en vez de dejar el icono de imagen rota. */}
      {!mobile && (
        <img
          ref={curRef}
          src="/foto-cursos.webp"
          alt=""
          draggable="false"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
          className="absolute select-none"
          style={{ left: '63%', top: '14%', width: '35%', height: '88%', objectFit: 'contain', objectPosition: 'bottom', transformOrigin: 'center bottom', opacity: 0 }}
        />
      )}
      <img
        ref={conRef}
        src="/foto-contacto.webp"
        alt=""
        draggable="false"
        className="absolute select-none"
        style={
          mobile
            ? { ...oculta, left: '13.5%', top: '45.3%', width: '79.5%', height: '54.7%', objectFit: 'contain', objectPosition: 'bottom', transformOrigin: 'center bottom' }
            : { ...oculta, left: '1.09%', top: '7.96%', width: '44.74%', height: '97.31%', objectFit: 'contain', objectPosition: 'bottom', transformOrigin: 'center bottom' }
        }
      />
    </div>
  )
}
