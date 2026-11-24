import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { mezclarColor } from '../lib/color'
import { REPOSO } from '../anim/contenido'
import AnimatedLogo from './AnimatedLogo'
import { VIEWS } from '../lib/views'
import { onScroll, scrollState } from '../scroll/progreso'
import { lienzo } from '../lib/tema'
import { useEsMobile } from '../lib/dispositivo'
import { useContenido } from '../data/store'
import { poner } from '../lib/estilo'

const clamp = (v, a, b) => Math.min(Math.max(v, a), b)
const rgb = (c) => `rgb(${c[0]},${c[1]},${c[2]})`

function clipAmbar(d) {
  if (d <= 0) return `inset(-45% ${clamp(-d, 0, 1) * 100}% -45% -6%)`
  return `inset(-45% -6% -45% ${clamp(d, 0, 1) * 100}%)`
}

// El texto de abajo se recorta justo donde empieza el tinte: nunca quedan los
// dos encimados. Encimados, el borde suavizado de la letra tenida dejaba ver
// el de la letra de abajo y salia un filo claro alrededor del color.
function clipBase(d) {
  if (d <= -1 || d >= 1) return 'none'
  if (d <= 0) return `inset(-45% -6% -45% ${(1 + d) * 100}%)`
  return `inset(-45% ${(1 - d) * 100}% -45% -6%)`
}

export default function Header({ goTo, onLogoDone, galeria, onVolver }) {
  const mobile = useEsMobile()
  const H = useContenido().TEXTOS.header
  const navLabel = {
    inicio: H.navInicio,
    'sobre-mi': H.navSobreMi,
    proyectos: H.navProyectos,
    experiencia: H.navExperiencia,
    tecnologias: H.navTecnologias,
    habilidades: H.navHabilidades,
    formacion: H.navFormacion,
    contacto: H.navContacto,
  }
  const etiqueta = (v) => navLabel[v.id] || v.label
  const navKey = VIEWS.map(etiqueta).join('|')
  const headerRef = useRef(null)
  const acRef = useRef('')
  const navRefs = useRef([])
  const ambarRefs = useRef([])
  const baseRefs = useRef([])
  const rects = useRef([])
  const navBarRef = useRef(null)
  const anchoNav = useRef(0)
  const underRef = useRef(null)
  const pildoraRef = useRef(null)
  const txtInicioRef = useRef(null)
  const txtRestoRef = useRef(null)

  const mobileRef = useRef(mobile)
  mobileRef.current = mobile
  const maxNav = useRef(0)
  // Desplazamiento de la barra en el celular: se calcula aqui y se aplica al
  // principio del cuadro siguiente (ver el efecto de abajo). Leer o escribir
  // scrollLeft despues de que la masa y las piezas ya escribieron sus estilos
  // obligaba al navegador a recalcular toda la pagina a mitad de cuadro, dos
  // veces por cuadro: era lo que mas pesaba del recorrido en el telefono.
  const navDestino = useRef(null)
  const navPuesto = useRef(null)

  const pintarSub = (navPr) => {
    const rs = rects.current
    const u = underRef.current
    if (!u || !rs.length) return
    const n = rs.length
    const i0 = clamp(Math.floor(navPr), 0, n - 1)
    const i1 = clamp(Math.ceil(navPr), 0, n - 1)
    const A = rs[i0]
    const B = rs[i1] || A
    if (!A) return
    const f = navPr - i0
    if (mobileRef.current) {
      const cx = (A.left + A.width / 2) + (B.left + B.width / 2 - (A.left + A.width / 2)) * f
      navDestino.current = clamp(cx - anchoNav.current / 2, 0, maxNav.current)
      return
    }
    u.style.left = `${A.left + (B.left - A.left) * f}px`
    u.style.width = `${A.width + (B.width - A.width) * f}px`
    u.style.top = `${A.bottom + 3}px`
  }

  useEffect(() => {
    const nb = navBarRef.current
    if (!nb) return
    // Al principio del cuadro todavia no se ha escrito nada: mover la barra
    // ahi no obliga a recalcular nada.
    const aplicar = () => {
      const d = navDestino.current
      if (d === null || !mobileRef.current) return
      if (navPuesto.current !== null && Math.abs(navPuesto.current - d) <= 0.5) return
      nb.scrollLeft = d
      navPuesto.current = d
    }
    // Si se arrastra la barra con el dedo, se anota donde quedo.
    const alMover = () => {
      navPuesto.current = nb.scrollLeft
    }
    gsap.ticker.add(aplicar, false, true)
    nb.addEventListener('scroll', alMover, { passive: true })
    return () => {
      gsap.ticker.remove(aplicar)
      nb.removeEventListener('scroll', alMover)
    }
  }, [])

  // medición de posiciones (para deslizar la barra) — al montar, al
  // redimensionar y cuando la fuente ya cargó (cambia los anchos)
  useEffect(() => {
    const medir = () => {
      rects.current = navRefs.current.map((el) =>
        el ? { left: el.offsetLeft, width: el.offsetWidth, bottom: el.offsetTop + el.offsetHeight } : null,
      )
      if (navBarRef.current) {
        anchoNav.current = navBarRef.current.clientWidth
        maxNav.current = Math.max(0, navBarRef.current.scrollWidth - navBarRef.current.clientWidth)
      }
      navPuesto.current = null
      pintarSub(scrollState.navPr)
    }
    medir()
    window.addEventListener('resize', medir)
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(medir)
    return () => window.removeEventListener('resize', medir)
    // re-mide cuando cambian las etiquetas
  }, [navKey])

  // arranque: el nav cae en cascada desde arriba, la píldora entra desde la
  // derecha, la barra aparece — nada de golpe, aterrizan con la masa
  useEffect(() => {
    const nav = navRefs.current.filter(Boolean)
    const tls = [
      gsap.fromTo(nav, { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.05, delay: 0.35, overwrite: 'auto' }),
      gsap.fromTo(pildoraRef.current, { x: 90, opacity: 0 }, { x: 0, opacity: 1, duration: 0.75, ease: 'power3.out', delay: 0.5, overwrite: 'auto' }),
      gsap.fromTo(underRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: 'power2.out', delay: 0.75, overwrite: 'auto' }),
    ]
    return () => tls.forEach((t) => t.kill())
  }, [])

  // El color del recorrido se pone solo en lo que lo usa (las etiquetas en
  // ambar, la barrita, el encabezado de la galeria y "Volver"). Ponerlo en
  // todo el encabezado obligaba a recalcular cada elemento de el en cada
  // cuadro, porque la variable se hereda.
  const galRef = useRef(null)
  const volverRef = useRef(null)
  // Solo se escribe si ese elemento no tiene ya ese color.
  const ponerAmbar = (el) => {
    if (!el || !acRef.current || el.__ac === acRef.current) return
    el.__ac = acRef.current
    el.style.setProperty('--color-amber', acRef.current)
  }
  // Las etiquetas del menu que estan recortadas del todo (todas menos la de
  // la vista actual y la siguiente) no se ven: reciben el color cuando
  // vuelven a asomar. Antes, entre proyectos, las ocho cambiaban de color en
  // cada cuadro y el menu entero se volvia a pintar. La barrita no existe en
  // el celular.
  const pintarAmbar = (navPr) => {
    ambarRefs.current.forEach((el, i) => {
      if (Math.abs(navPr - i) < 1) ponerAmbar(el)
    })
    if (!mobileRef.current) ponerAmbar(underRef.current)
    ponerAmbar(galRef.current)
    ponerAmbar(volverRef.current)
  }

  useEffect(() => {
    const off = onScroll(({ pr, navPr, salto }) => {
      // Rol en Inicio, nombre en el resto; en un salto del menu sigue al salto
      // en vez de cambiar de golpe al terminar.
      let t = clamp(pr, 0, 1)
      if (salto) t = salto.va === 'inicio' ? salto.t : salto.vb === 'inicio' ? 1 - salto.t : 1
      acRef.current = rgb(scrollState.acento)
      pintarAmbar(navPr)
      // La pildora no existe en el celular (display: none).
      if (!mobileRef.current) {
        if (pildoraRef.current) poner(pildoraRef.current, 'backgroundColor', rgb(mezclarColor(lienzo(), scrollState.acento, t)))
        // El cambio de texto termina antes de asentarse en la vista (ver REPOSO).
        const tt = clamp((t - REPOSO) / (1 - 2 * REPOSO), 0, 1)
        if (txtInicioRef.current) poner(txtInicioRef.current, 'opacity', String(1 - tt))
        if (txtRestoRef.current) poner(txtRestoRef.current, 'opacity', String(tt))
      }
      ambarRefs.current.forEach((el, i) => {
        if (el) poner(el, 'clipPath', clipAmbar(navPr - i))
      })
      baseRefs.current.forEach((el, i) => {
        if (el) poner(el, 'clipPath', clipBase(navPr - i))
      })
      pintarSub(navPr)
    })
    return off
  }, [])

  return (
    <header ref={headerRef} className="absolute inset-x-0 top-0 z-100">
      <button onClick={() => goTo('inicio')} aria-label="Inicio" className="absolute top-0 left-0 cursor-pointer" style={{ width: mobile ? '118px' : '110px' }}>
        <AnimatedLogo className="w-full" onDone={onLogoDone} />
      </button>

      <nav
        ref={navBarRef}
        data-scroll-x={mobile ? '' : undefined}
        className={`absolute flex items-center ${mobile ? 'sin-scroll' : ''}`}
        style={
          mobile
            ? { left: '210px', right: '0px', top: '32px', height: '62px', gap: '58px', paddingRight: '52px', overflowX: 'auto', overflowY: 'hidden', touchAction: 'pan-x', WebkitOverflowScrolling: 'touch', opacity: galeria ? 0 : 1, pointerEvents: galeria ? 'none' : 'auto', transition: 'opacity 0.35s' }
            : { left: '251px', top: '26px', height: '44px', gap: '45px', opacity: galeria ? 0 : 1, pointerEvents: galeria ? 'none' : 'auto', transition: 'opacity 0.35s' }
        }
      >
        {VIEWS.map((v, i) => (
          <a
            key={v.id}
            href={`#${v.id}`}
            ref={(el) => (navRefs.current[i] = el)}
            onClick={(e) => { e.preventDefault(); goTo(v.id) }}
            style={mobile ? { flexShrink: 0, fontSize: '34px' } : { fontSize: '16px' }}
            className="font-accent relative font-extrabold uppercase whitespace-nowrap text-ink"
          >
            <span ref={(el) => (baseRefs.current[i] = el)} className="block">
              {etiqueta(v)}
            </span>
            <span
              ref={(el) => {
                ambarRefs.current[i] = el
                ponerAmbar(el)
              }}
              aria-hidden="true"
              className="absolute inset-x-0 top-0 whitespace-nowrap text-amber"
              style={{ clipPath: 'inset(-45% 100% -45% -6%)' }}
            >
              {etiqueta(v)}
            </span>
          </a>
        ))}
        <span ref={underRef} className="pointer-events-none absolute h-[2px] bg-amber" style={{ left: 0, width: 0, top: 0, opacity: 0, display: mobile ? 'none' : 'block' }} />
      </nav>

      <div
        ref={pildoraRef}
        className="font-accent absolute grid place-items-center px-[23px] font-extrabold uppercase text-ink"
        style={{ display: mobile ? 'none' : 'grid', right: '23px', top: '26px', height: '44px', borderRadius: '0 25px 0 25px', fontSize: '20px', backgroundColor: 'var(--color-lienzo)', opacity: galeria ? 0 : 1, pointerEvents: galeria ? 'none' : 'auto', transition: 'opacity 0.35s' }}
      >
        <span ref={txtInicioRef} className="col-start-1 row-start-1 whitespace-nowrap">{H.pildoraRol}</span>
        <span ref={txtRestoRef} className="col-start-1 row-start-1 whitespace-nowrap" style={{ opacity: 0 }}>{H.pildoraNombre}</span>
      </div>

      <div
        ref={(el) => {
          galRef.current = el
          ponerAmbar(el)
        }}
        className="absolute flex items-center"
        style={{ left: '30%', top: '26px', height: '44px', gap: '14px', opacity: galeria ? 1 : 0, pointerEvents: 'none', transition: 'opacity 0.35s' }}
      >
        <span className="font-accent font-black uppercase text-ink" style={{ fontSize: '19px', letterSpacing: '0.02em' }}>
          {H.galeriaNombre}
        </span>
        <span className="rounded-full bg-amber" style={{ width: '8px', height: '8px' }} />
        <span className="font-accent font-black uppercase text-amber" style={{ fontSize: '19px', letterSpacing: '0.02em' }}>
          {H.galeriaRol}
        </span>
      </div>

      {galeria && (
        <button
          ref={(el) => {
            volverRef.current = el
            ponerAmbar(el)
          }}
          onClick={onVolver}
          className="font-accent absolute top-[26px] right-[23px] grid cursor-pointer place-items-center bg-amber font-extrabold uppercase text-white"
          style={{ height: '44px', padding: '0 26px', fontSize: '20px', borderRadius: '0 25px 0 25px' }}
        >
          {H.volver}
        </button>
      )}
    </header>
  )
}
