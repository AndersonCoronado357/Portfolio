import { useEffect, useLayoutEffect, useState, useCallback, useRef } from 'react'
import gsap from 'gsap'
import Header from './components/Header'
import MasaAmarilla from './components/MasaAmarilla'
import Fotos from './components/Fotos'
import BotonTema from './components/BotonTema'
import { calcMobile } from './lib/dispositivo'
import Inicio from './views/Inicio'
import SobreMi from './views/SobreMi'
import Proyectos, { GaleriaProyectos } from './views/Proyectos'
import LandingProyecto from './views/LandingProyecto'
import { variables } from './lib/estetica'
import { useTema } from './lib/tema'
import Experiencia from './views/Experiencia'
import Tecnologias from './views/Tecnologias'
import Habilidades from './views/Habilidades'
import Formacion from './views/Formacion'
import Contacto from './views/Contacto'
import { VIEW_IDS, navPos, SLOT, GROUP_PREV, GROUP_NEXT, NORMAL_MAX, GAL_INI, GAL_FIN } from './lib/views'
import { scrollState, emitScroll, remapHold } from './scroll/progreso'
import { avanzar } from './scroll/ritmo'
import { registrar, aplicar as aplicarContenido, aplicarVista, REPOSO } from './anim/contenido'
import { registrarTec, aplicarTec, scrollTec } from './anim/listaTec'
import { registrarForm, aplicarForm, scrollForm } from './anim/listaForm'
import { PROY_COLORS } from './anim/circulos'
import { lienzo } from './lib/tema'
import { mezclarColor } from './lib/color'

const FRAME = { w: 1920, h: 1080 }
const FRAME_M = { w: 1080, h: 1920 }

// Rangos de scroll interno (Tecnologias, Cursos): adentro NO hay iman, la
// lista scrollea libre y descansas donde quieras.
const SCROLL_INTERNO = [
  ['tecnologias', 'tecnologias-2'],
  ['formacion-2', 'formacion-3'],
]
  .map(([a, b]) => [VIEW_IDS.indexOf(a), VIEW_IDS.indexOf(b)])
  .filter(([a, b]) => a >= 0 && b >= 0)

// Stops de las listas con scroll interno: el iman nunca tira hacia ellos.
const FANTASMAS = ['tecnologias', 'tecnologias-2', 'formacion-2', 'formacion-3']
  .map((id) => VIEW_IDS.indexOf(id))
  .filter((i) => i >= 0)

// Las paradas de una lista interna (tecnologias-2, formacion-3) no son vistas
// propias: pertenecen a la vista donde empieza su tramo.
const dueno = (i) => {
  const r = SCROLL_INTERNO.find(([a, b]) => i > a && i <= b)
  return r ? r[0] : i
}
const TEC = VIEW_IDS.indexOf('tecnologias')
const FORM = VIEW_IDS.indexOf('formacion-2')

// Tecnologias y Cursos miden lo que mide su lista (mas que la pantalla) y
// suben enteras lo que ha subido la lista, como una pagina mas alta. Devuelve
// cuanto (px del cuadro), o null si la vista es de una sola pantalla.
const subidaLista = (i, p) => (i === TEC ? scrollTec(p) : i === FORM ? scrollForm(p) : null)

const clamp = (v, a, b) => Math.min(Math.max(v, a), b)
const suave = (v) => v * v * (3 - 2 * v)

// Alto de la escena en px del cuadro (el mismo calculo que useEscala).
function altoEscena(vw = window.innerWidth, vh = window.innerHeight) {
  const F = vh > vw && vw < 900 ? FRAME_M : FRAME
  return vh / Math.min(vw / F.w, vh / F.h)
}

// Descodifica las imagenes de una vista que se acerca (una vez por cada
// acercamiento). En el telefono, una captura que se pinta sin estar
// descodificada sale primero vacia y aparece un cuadro despues: un parpadeo.
function prepararImagenes(sec) {
  if (!sec || sec.__imgsListas) return
  sec.__imgsListas = true
  for (const img of sec.querySelectorAll('img')) {
    if (img.decode) img.decode().catch(() => {})
  }
}

// La rueda no reporta pixeles en todos lados: Firefox manda lineas
// (deltaMode 1, deltaY ~3) y algunos ratones mandan paginas.
const PX_LINEA = 16
const TOPE_DELTA = 420
function deltaPx(e) {
  let d = e.deltaY
  if (e.deltaMode === 1) d *= PX_LINEA
  else if (e.deltaMode === 2) d *= window.innerHeight || 800
  return clamp(d, -TOPE_DELTA, TOPE_DELTA)
}
const AMBAR = [229, 184, 11]
const colorDe = (v) => PROY_COLORS[v] || AMBAR

function useEscala() {
  const calcular = () => {
    const mobile = calcMobile()
    const F = mobile ? FRAME_M : FRAME
    let escala = Math.min(window.innerWidth / F.w, window.innerHeight / F.h)
    if (!Number.isFinite(escala) || escala <= 0) escala = 1
    const ancho = window.innerWidth / escala || F.w
    const alto = window.innerHeight / escala || F.h
    return { escala, ancho, alto, mobile }
  }
  const [m, setM] = useState(calcular)
  useEffect(() => {
    const f = () => setM(calcular())
    window.addEventListener('resize', f)
    return () => window.removeEventListener('resize', f)
  }, [])
  return m
}

export default function App() {
  const { escala, ancho, alto, mobile } = useEscala()
  const tema = useTema()
  const raizVista = useRef(null)
  const [logoListo, setLogoListo] = useState(false)
  const [galeria, setGaleria] = useState(false)
  const [detalle, setDetalle] = useState(null)

  const P = useRef(0)
  const targetP = useRef(0)
  const ultimaRueda = useRef(0)
  const idxRef = useRef(0)
  const arranque = useRef({ v: 0 })
  const bootTw = useRef(null)
  const galeriaRef = useRef(false)
  const detalleRef = useRef(false)
  const enTransicion = useRef(false)
  const preparando = useRef(false)
  const prevP = useRef(-1)
  const quietoFrames = useRef(0)
  const lastL = useRef([255, 255, 255])
  const lastVP = useRef(0)
  const secsRef = useRef(null)
  // Lo ultimo que se escribio en cada vista: solo se toca lo que cambia.
  const prevEst = useRef([])

  // Con una landing abierta, el boton de tema va del color de esa app. Si no,
  // lo pinta el propio boton desde el scroll (ver BotonTema): antes la vista
  // actual era un estado de React y, al cambiar de seccion, se volvia a
  // construir la app entera solo para cambiar ese color. Era un tiron a mitad
  // de cada paso de seccion.
  const acentoTema = detalle ? variables(detalle, tema)['--app-acento'] : null

  const abrirDetalle = useCallback((dato) => {
    detalleRef.current = true
    setDetalle(dato)
  }, [])

  const cerrarDetalle = useCallback(() => {
    detalleRef.current = false
    setDetalle(null)
  }, [])

  const secciones = useCallback(() => {
    let secs = secsRef.current
    if (!secs || !secs[0] || !secs[0].isConnected) {
      secs = secsRef.current = VIEW_IDS.map((id) => document.getElementById(id))
    }
    return secs
  }, [])

  // Salto entre vistas lejanas (nav, abrir o cerrar la galeria). En la v1 la
  // vista que se dejaba se desvanecia mientras la nueva aparecia encima. Aqui
  // es el mismo paso de pagina del recorrido normal, en el sentido del salto
  // (hacia adelante como si se bajara, hacia atras como si se subiera), sin
  // recorrer todo lo de en medio. La masa, la foto, la pildora y la barra del
  // menu siguen el mismo salto, asi nada cambia de golpe al terminar.
  const saltar = useCallback(
    (fromIdx, toIdx) => {
      const fo = dueno(fromIdx)
      const to = dueno(toIdx)
      const enGal = toIdx >= GAL_INI
      galeriaRef.current = enGal
      setGaleria(enGal)
      if (fo === to) {
        targetP.current = toIdx
        return
      }
      const va = VIEW_IDS[fromIdx]
      const vb = VIEW_IDS[toIdx]
      const adelante = toIdx > fromIdx
      const cA = colorDe(va)
      const cB = colorDe(vb)
      const navA = navPos(fromIdx)
      const navB = navPos(toIdx)
      enTransicion.current = true
      // La lista de la vista que llega entra desde su principio.
      if (to === TEC) aplicarTec(toIdx)
      if (to === FORM) aplicarForm(toIdx)
      const secs = secciones()
      const secA = secs[fo]
      const secB = secs[to]
      // Tecnologias y Cursos se mueven en px (ver subidaLista).
      const altoF = altoEscena()
      const subA = subidaLista(fo, fromIdx)
      const subB = subidaLista(to, toIdx)
      if (secA && subA !== null) secA.style.transformOrigin = `50% ${(altoF / 2 + subA).toFixed(1)}px`
      if (secB && subB !== null) secB.style.transformOrigin = `50% ${(altoF / 2 + subB).toFixed(1)}px`
      const mover = (sub, pct, esc) =>
        sub === null
          ? `translate3d(0,${pct}%,0) scale(${esc})`
          : `translate3d(0,${((pct * altoF) / 100 - sub).toFixed(2)}px,0) scale(${esc})`
      // El loop oculta (visibility) las vistas que no estan en pantalla; las
      // dos del salto tienen que verse mientras dura.
      if (secA) secA.style.visibility = 'visible'
      if (secB) secB.style.visibility = 'visible'
      prepararImagenes(secB)
      // Abrir o cerrar la galeria se ve exactamente como en la v1; en los saltos
      // del menu el movimiento va en el sentido del salto.
      const cambioModo = (fromIdx >= GAL_INI) !== enGal
      const s = cambioModo || adelante ? -1 : 1
      const prox = { t: 0 }
      const paso = () => {
        const t = prox.t
        scrollState.salto = { va, vb, t, adelante }
        scrollState.vel = 0
        scrollState.navPr = navA + (navB - navA) * t
        const c = mezclarColor(cA, cB, t)
        const ac = scrollState.acento
        ac[0] = c[0]
        ac[1] = c[1]
        ac[2] = c[2]
        emitScroll()
        // La vista que se deja termina de irse antes de la mitad y la nueva
        // empieza despues: nunca hay dos vistas encimadas.
        if (secA) {
          secA.style.opacity = String(1 - suave(clamp(t / 0.45, 0, 1)))
          secA.style.pointerEvents = 'none'
          secA.style.transform = mover(subA, s * 16 * suave(t), 1 - 0.05 * suave(t))
        }
        if (secB) {
          // Llega a 1 antes de terminar el salto: el ultimo cuadro no cambia
          // la opacidad.
          secB.style.opacity = String(suave(clamp((t - 0.5) / 0.4, 0, 1)))
          secB.style.pointerEvents = 'none'
          secB.style.transform = mover(subB, -s * 16 * (1 - suave(t)), 1 - 0.05 * (1 - suave(t)))
        }
        aplicarVista(fo, cambioModo || adelante ? t : -t)
        aplicarVista(to, cambioModo || adelante ? t - 1 : 1 - t)
        // El panel de texto de Inicio sigue el salto (si no, cambiaria de golpe
        // al terminar).
        const panelTxt = document.getElementById('panel-texto')
        if (panelTxt && (fo === 0 || to === 0)) {
          const li = fo === 0 ? t : 1 - t
          panelTxt.style.opacity = String(1 - clamp((li - REPOSO) / (0.5 - REPOSO), 0, 1))
        }
      }
      paso()
      gsap.to(prox, {
        t: 1,
        duration: 0.78,
        ease: 'power2.inOut',
        onUpdate: paso,
        onComplete: () => {
          scrollState.salto = null
          scrollState.vel = 0
          P.current = toIdx
          targetP.current = toIdx
          scrollState.prM = toIdx
          enTransicion.current = false
          quietoFrames.current = 0
          // El salto escribio estilos a mano: el loop tiene que volver a
          // pintarlos todos, no fiarse de lo que recuerda.
          prevEst.current = []
        },
      })
    },
    [secciones],
  )

  // Si el salto se pide estando entre dos vistas, primero se termina de
  // llegar a la mas cercana (un tramo corto del recorrido normal) y desde ahi
  // se salta. Asi la masa y las piezas a medio camino no cambian de golpe.
  const transicionar = useCallback(
    (toIdx) => {
      const desde = clamp(Math.round(P.current), 0, VIEW_IDS.length - 1)
      const falta = Math.abs(P.current - desde)
      if (falta < 0.004) {
        saltar(desde, toIdx)
        return
      }
      preparando.current = true
      const prox = { v: P.current }
      gsap.to(prox, {
        v: desde,
        duration: 0.25 + falta * 0.6,
        ease: 'power2.inOut',
        onUpdate: () => {
          P.current = prox.v
          targetP.current = prox.v
          quietoFrames.current = 0
        },
        onComplete: () => {
          P.current = desde
          targetP.current = desde
          preparando.current = false
          saltar(desde, toIdx)
        },
      })
    },
    [saltar],
  )

  const goTo = useCallback(
    (id) => {
      const idx = VIEW_IDS.indexOf(id)
      if (idx < 0 || enTransicion.current || preparando.current) return
      if (arranque.current.v < 1) {
        bootTw.current?.kill()
        arranque.current.v = 1
      }
      const enGal = idx >= GAL_INI
      const cambioModo = enGal !== galeriaRef.current
      if (cambioModo || Math.abs(idx - P.current) > 1.2) {
        transicionar(idx)
      } else {
        targetP.current = idx
      }
    },
    [transicionar],
  )

  const abrirGaleria = useCallback(() => goTo('proyectos-t0'), [goTo])
  const cerrarGaleria = useCallback(() => goTo('proyectos-mas'), [goTo])

  useEffect(() => {
    let intervalo = null
    const ajustar = () => {
      if (document.visibilityState === 'hidden') {
        if (!intervalo) {
          gsap.ticker.lagSmoothing(0)
          intervalo = setInterval(() => gsap.ticker.tick(), 33)
        }
      } else if (intervalo) {
        clearInterval(intervalo)
        intervalo = null
        gsap.ticker.lagSmoothing(500, 33)
      }
    }
    ajustar()
    document.addEventListener('visibilitychange', ajustar)
    return () => {
      document.removeEventListener('visibilitychange', ajustar)
      if (intervalo) clearInterval(intervalo)
      gsap.ticker.lagSmoothing(500, 33)
    }
  }, [])

  useLayoutEffect(() => {
    // Se mide con TODAS las vistas puestas: las piezas necesitan su caja real
    // para calcular por donde salen.
    registrar(VIEW_IDS)
    registrarTec()
    registrarForm()
    aplicarContenido(0, 0)
    for (let i = 0; i < VIEW_IDS.length; i++) {
      const sec = document.getElementById(VIEW_IDS[i])
      if (!sec) continue
      sec.style.opacity = i === 0 ? '1' : '0'
      if (i !== 0) sec.style.transform = 'translate3d(0,100%,0)'
    }
    // Ya esta cada vista en su sitio: se libera el tapon del CSS.
    document.documentElement.setAttribute('data-arrancado', '1')
  }, [])

  useEffect(() => {
    bootTw.current = gsap.to(arranque.current, { v: 1, duration: 1.05, delay: 1.2, ease: 'power2.out' })
    return () => bootTw.current?.kill()
  }, [])

  useEffect(() => {
    secsRef.current = null
    prevEst.current = []
  }, [mobile])

  const completarBoot = useCallback(() => {
    if (arranque.current.v < 1) {
      bootTw.current?.kill()
      arranque.current.v = 1
    }
  }, [])

  useEffect(() => {
    const N = VIEW_IDS.length
    const loop = (_t, deltaMs) => {
      if (enTransicion.current) return
      const dt = (deltaMs || 16) / 1000
      const lo = galeriaRef.current ? GAL_INI : 0
      const hi = galeriaRef.current ? GAL_FIN : NORMAL_MAX

      // Iman minimo: solo si se suelta casi encima de una vista. Te puedes
      // quedar en cualquier punto del recorrido.
      const tp = targetP.current
      const enLista = SCROLL_INTERNO.some(([a, b]) => tp > a + 0.001 && tp < b - 0.001)
      const cerca = clamp(Math.round(tp), lo, hi)
      // Una lista se asienta como cualquier vista cuando se suelta llegando a
      // ella desde fuera (la vista casi entera en pantalla). Desde dentro de la
      // lista nunca: tiraria de la lista hacia su principio o su final.
      const desdeFuera = SCROLL_INTERNO.some(([a, b]) => (cerca === a && tp <= a) || (cerca === b && tp >= b))
      if (
        !preparando.current &&
        !enLista &&
        (!FANTASMAS.includes(cerca) || desdeFuera) &&
        performance.now() - ultimaRueda.current > 160
      ) {
        const dif = cerca - targetP.current
        if (Math.abs(dif) > 0.0005 && Math.abs(dif) < 0.12) {
          targetP.current += dif * (1 - Math.exp(-dt * 2.2))
        } else if (Math.abs(dif) <= 0.0005) {
          targetP.current = cerca
        }
      }

      const dif = targetP.current - P.current
      if (Math.abs(dif) > 0.0004) P.current += dif * (1 - Math.exp(-dt * 7))
      else P.current = targetP.current
      P.current = clamp(P.current, lo, hi)
      targetP.current = clamp(targetP.current, lo, hi)

      const movidoP = Math.abs(P.current - prevP.current)
      prevP.current = P.current
      const L = lienzo()
      const cambioL = L[0] !== lastL.current[0] || L[1] !== lastL.current[1] || L[2] !== lastL.current[2]
      lastL.current[0] = L[0]
      lastL.current[1] = L[1]
      lastL.current[2] = L[2]
      // El tamano de la ventana se lee aqui, antes de escribir nada en este
      // cuadro: leerlo despues obliga al navegador a recalcular a mitad de cuadro.
      const vpW = window.innerWidth
      const vpH = window.innerHeight
      const vp = vpW * 100000 + vpH
      const cambioVP = vp !== lastVP.current
      lastVP.current = vp
      const activo =
        movidoP > 1e-5 ||
        Math.abs(targetP.current - P.current) > 1e-5 ||
        arranque.current.v < 1 ||
        scrollState.salto ||
        cambioL ||
        cambioVP ||
        Math.abs(scrollState.vel) > 0.0008
      if (activo) quietoFrames.current = 0
      else quietoFrames.current++
      if (quietoFrames.current > 10) return

      const pr = clamp(P.current, lo, hi)
      const i0 = Math.min(Math.floor(pr), N - 2)
      const prM = i0 + remapHold(pr - i0)
      const vel = (prM - scrollState.prM) / dt
      scrollState.vel += (vel - scrollState.vel) * (1 - Math.exp(-dt * 9))
      scrollState.p = pr
      scrollState.pr = pr
      scrollState.prM = prM
      scrollState.navPr = navPos(pr)

      // El color de la escena pasa de un proyecto al siguiente por un camino
      // en linea recta, canal por canal (ver lib/color.js).
      const ia = Math.min(Math.floor(pr), N - 1)
      const ib = Math.min(ia + 1, N - 1)
      const c = mezclarColor(colorDe(VIEW_IDS[ia]), colorDe(VIEW_IDS[ib]), pr - ia)
      const ac = scrollState.acento
      ac[0] = c[0]
      ac[1] = c[1]
      ac[2] = c[2]
      const idx = Math.round(pr)
      scrollState.vista = VIEW_IDS[idx]
      emitScroll()

      // Las vistas se mueven exactamente como en la v1 (por SLOT, con la misma
      // escala y, en PC, el fundido entre proyectos). Una vista que ya quedo
      // entera fuera del cuadro se oculta.
      const sp = navPos(pr)
      const movil = vpH > vpW && vpW < 900
      const altoF = altoEscena(vpW, vpH)
      const secs = secciones()
      for (let i = 0; i < N; i++) {
        const sec = secs[i]
        if (!sec) continue
        const si = SLOT[i]
        const dist = Math.min(1, Math.abs(si - sp))
        // Las capturas de una vista se descodifican cuando se acerca, antes
        // de que entre: asi aparecen ya pintadas y no de golpe un cuadro despues.
        const aVistas = Math.abs(pr - i)
        if (aVistas < 1.8) prepararImagenes(sec)
        else if (aVistas > 2.6) sec.__imgsListas = false
        let ty = (si - sp) * 100
        let op = dist < 1 ? 1 : 0
        const ls = pr - i
        const esTec = VIEW_IDS[i].startsWith('tecnologias')
        const esCursos = VIEW_IDS[i] === 'formacion-2'
        const esGrupo = GROUP_PREV[i] || GROUP_NEXT[i]
        let dsc = dist
        if (esCursos) {
          if (ls <= -1) {
            op = 0
            ty = 100
          } else if (ls < 0) {
            op = 1
            ty = -ls * 100
          } else if (ls <= 1) {
            op = 1
            ty = 0
          } else if (ls < 2) {
            op = 1
            ty = -(ls - 1) * 100
          } else {
            op = 0
            ty = -100
          }
          dsc = 0
        } else if (esTec) {
          // Se desliza con su SLOT; dentro de su tramo sube con la lista (abajo).
        } else if (esGrupo && movil) {
          if (Math.abs(ls) >= 1) {
            op = 0
            ty = ls > 0 ? -100 : 100
          } else {
            op = 1
            ty = -ls * 100
          }
          dsc = 0
        } else if (GROUP_NEXT[i] && ls > 0 && ls < 1) {
          // El fundido termina antes del tramo de REPOSO: al asentarse en la
          // vista ya no cambia la opacidad (ver contenido.js).
          ty = -15 * suave(ls)
          op = 1 - suave(clamp((ls - REPOSO) / (0.55 - REPOSO), 0, 1))
        } else if (GROUP_PREV[i] && ls < 0 && ls > -1) {
          const q = ls + 1
          ty = 15 * (1 - suave(q))
          op = suave(clamp((q - 0.45) / (0.55 - REPOSO), 0, 1))
        } else if (esGrupo && Math.abs(ls) >= 1) {
          op = 0
        }
        const vis = op >= 0.005
        const est = prevEst.current[i] || (prevEst.current[i] = {})
        const opS = vis ? String(op) : '0'
        if (est.op !== opS) {
          sec.style.opacity = opS
          est.op = opS
        }
        if (!vis) {
          if (est.pe !== 'none') {
            sec.style.pointerEvents = 'none'
            est.pe = 'none'
          }
          if (est.vi !== 'hidden') {
            sec.style.visibility = 'hidden'
            est.vi = 'hidden'
          }
          continue
        }
        if (est.vi !== 'visible') {
          sec.style.visibility = 'visible'
          est.vi = 'visible'
        }
        // Tecnologias y Cursos: el deslizamiento va en px (su alto no es el de
        // la pantalla) mas lo que ha subido la lista, y la escala se hace
        // alrededor del centro de lo que se ve, no del centro de la vista.
        const sub = subidaLista(i, pr)
        let tr
        if (sub === null) tr = `translate3d(0,${ty}%,0) scale(${1 - 0.06 * dsc})`
        else {
          tr = `translate3d(0,${((ty * altoF) / 100 - sub).toFixed(2)}px,0) scale(${1 - 0.06 * dsc})`
          const org = `50% ${(altoF / 2 + sub).toFixed(1)}px`
          if (est.org !== org) {
            sec.style.transformOrigin = org
            est.org = org
          }
        }
        if (est.tr !== tr) {
          sec.style.transform = tr
          est.tr = tr
        }
        if (est.pe !== 'auto') {
          sec.style.pointerEvents = 'auto'
          est.pe = 'auto'
        }
      }

      // Panel de texto de Inicio: como en la v1. Se escribe solo si cambia
      // (lejos del Inicio es siempre 0). El salto lo escribe a mano: por eso
      // se compara con lo que tiene el elemento y no con lo ultimo escrito aqui.
      const panelTxt = document.getElementById('panel-texto')
      if (panelTxt) {
        const o = String(1 - clamp((pr - REPOSO) / (0.5 - REPOSO), 0, 1))
        if (panelTxt.style.opacity !== o) panelTxt.style.opacity = o
      }

      aplicarContenido(pr, arranque.current.v)
      aplicarTec(pr)
      aplicarForm(pr)

      if (idx !== idxRef.current) {
        idxRef.current = idx
        if (raizVista.current) raizVista.current.setAttribute('data-view', VIEW_IDS[idx])
      }
    }
    gsap.ticker.add(loop)
    return () => gsap.ticker.remove(loop)
  }, [secciones])

  // Gancho para las pruebas: lleva el recorrido a un punto exacto.
  useEffect(() => {
    window.__v2 = {
      ir: (p) => {
        completarBoot()
        targetP.current = p
        P.current = p
        quietoFrames.current = 0
      },
      goTo,
      p: () => P.current,
      ocupado: () => enTransicion.current || preparando.current,
    }
  }, [goTo, completarBoot])

  useEffect(() => {
    if (!logoListo) return
    const onWheel = (e) => {
      if (detalleRef.current) return
      completarBoot()
      ultimaRueda.current = performance.now()
      const lo = galeriaRef.current ? GAL_INI : 0
      const hi = galeriaRef.current ? GAL_FIN : NORMAL_MAX
      targetP.current = clamp(avanzar(targetP.current, deltaPx(e) * 0.00045), lo, hi)
    }
    const onKey = (e) => {
      if (detalleRef.current) return
      const lo = galeriaRef.current ? GAL_INI : 0
      const hi = galeriaRef.current ? GAL_FIN : NORMAL_MAX
      if (['ArrowDown', 'PageDown', ' ', 'ArrowUp', 'PageUp'].includes(e.key)) completarBoot()
      if (['ArrowDown', 'PageDown', ' '].includes(e.key)) targetP.current = clamp(Math.round(targetP.current + 1), lo, hi)
      if (['ArrowUp', 'PageUp'].includes(e.key)) targetP.current = clamp(Math.round(targetP.current - 1), lo, hi)
    }
    let tocandoY = 0
    let arrastrando = false
    const onTouchStart = (e) => {
      if (detalleRef.current) return
      completarBoot()
      arrastrando = !(e.target.closest && e.target.closest('[data-scroll-x]'))
      tocandoY = e.touches[0].clientY
    }
    const onTouchMove = (e) => {
      if (detalleRef.current || !arrastrando) return
      if (e.cancelable) e.preventDefault()
      ultimaRueda.current = performance.now()
      const y = e.touches[0].clientY
      const dy = tocandoY - y
      tocandoY = y
      const lo = galeriaRef.current ? GAL_INI : 0
      const hi = galeriaRef.current ? GAL_FIN : NORMAL_MAX
      targetP.current = clamp(avanzar(targetP.current, dy * 0.002), lo, hi)
    }
    window.addEventListener('wheel', onWheel, { passive: true })
    window.addEventListener('keydown', onKey)
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: false })
    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
    }
  }, [logoListo, completarBoot])

  return (
    <div ref={raizVista} className="h-full" data-view="inicio">
      <div
        className="fixed top-0 left-0 overflow-hidden bg-lienzo"
        style={{ width: ancho, height: alto, transform: `scale(${escala})`, transformOrigin: 'top left' }}
      >
        <div className="absolute inset-0">
          <MasaAmarilla />
          <main
            className="absolute inset-0"
            style={{
              maskImage: 'linear-gradient(to bottom, transparent 0, transparent 72px, #000 110px)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0, transparent 72px, #000 110px)',
            }}
          >
            <Inicio goTo={goTo} />
            <SobreMi goTo={goTo} />
            <Proyectos onVerMas={abrirGaleria} onDetalle={abrirDetalle} />
            <Experiencia />
            <Tecnologias />
            <Habilidades />
            <Formacion />
            <Contacto />
            <GaleriaProyectos onDetalle={abrirDetalle} />
          </main>
          <Fotos />
        </div>
        <Header goTo={goTo} onLogoDone={() => setLogoListo(true)} galeria={galeria} onVolver={cerrarGaleria} />
        <div className="grano" aria-hidden="true" />
      </div>

      {detalle && <LandingProyecto dato={detalle} onCerrar={cerrarDetalle} />}

      <BotonTema escala={escala} acento={acentoTema} />
    </div>
  )
}
