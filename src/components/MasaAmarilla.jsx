import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { N_ACTORES, centroMasaPx, PROY_COLORS, PROY_FLIP, tablaC, tablaM, MASA_M } from '../anim/circulos'
import { VIEW_IDS } from '../lib/views'
import { onScroll, scrollState } from '../scroll/progreso'
import { lienzo } from '../lib/tema'
import { esMobile } from '../lib/dispositivo'
import { mezclarColor } from '../lib/color'
import { poner, ponerAttr } from '../lib/estilo'

const lerp = (a, b, t) => a + (b - a) * t
const clamp = (v, a, b) => Math.min(Math.max(v, a), b)
const ss = (v) => v * v * (3 - 2 * v)

const AMBAR = [229, 184, 11]
const colorVista = (view) => PROY_COLORS[view] || AMBAR
// Cuanto se diluye una pieza de masa lo marca `o`. En claro se diluye hacia
// el lienzo blanco y queda bien, pero en oscuro diluir hacia negro puro le
// robaba el tono y la masa se veia transparentosa. En oscuro el destino de
// la dilucion es una version apagada de SU PROPIO color: pierde luz, no tono.
const tinteC = (col, o) => {
  const L = lienzo()
  const luz = (L[0] * 0.299 + L[1] * 0.587 + L[2] * 0.114) / 255
  const oscuridad = 1 - luz
  let r = 0
  let g = 0
  let b = 0
  for (let i = 0; i < 3; i++) {
    const c = col[i]
    // punto al que tiende cuando o = 0
    const base = L[i] + (c * 0.3 - L[i]) * oscuridad
    const v = Math.round(base + (c - base) * o)
    if (i === 0) r = v
    else if (i === 1) g = v
    else b = v
  }
  return `rgb(${r},${g},${b})`
}

const centroMasa = centroMasaPx

// Caja fija de las piezas redondas de la masa (ver el bucle).
const BASE = 100
const FUERA = 'translate(-4000px,-4000px)'
const CAJA = { left: 0, top: 0, width: `${BASE}px`, height: `${BASE}px`, transform: FUERA }

const LAGS = [0.02, 0.3, 0.5, 0.4, 0.6, 0.7, 0.45, 0.8, 0.35, 0.65, 0.75, 0.55]
const SPREAD = 0.34

const BOX_CX = 470.5
const BOX_CY = 552.5
const BLOB_CIRCS = [
  { cx: 381.77, cy: 510.16, rx: 381.77, ry: 353.35, lag: 0.04 },
  { cx: 727.96, cy: 355.96, rx: 210.65, ry: 194.97, lag: 0.12 },
  { cx: 546.68, cy: 193.4, rx: 120.86, ry: 111.86, lag: 0.16 },
  { cx: 667.53, cy: 922.05, rx: 120.86, ry: 111.86, lag: 0.14 },
  { cx: 773.14, cy: 655.99, rx: 162.08, ry: 150.02, lag: 0.1 },
  { cx: 688.99, cy: 58.54, rx: 63.25, ry: 58.54, lag: 0.2 },
  { cx: 877.62, cy: 863.51, rx: 63.25, ry: 58.54, lag: 0.22 },
  { cx: 814.37, cy: 119.18, rx: 40.66, ry: 37.63, lag: 0.24 },
  { cx: 420.17, cy: 993.14, rx: 120.86, ry: 111.86, lag: 0.18 },
]

function geoCirc(i, view, W, H) {
  // Si una vista no tiene fila en la tabla, se cae a la del inicio en vez de
  // reventar: la excepcion mataba el bucle de animacion y el scroll se quedaba
  // clavado a medio camino, sin forma de seguir bajando.
  const g = (tablaC()[view] || tablaC().inicio)[i]
  if (g) return { x: (g.x / 100) * W + g.dx, y: (g.y / 100) * H + g.dy, d: g.d, o: g.o, fused: false }
  const [cx, cy] = centroMasa(view, W, H)
  return { x: cx, y: cy, d: 44, o: tablaM()[view].o, fused: true }
}

function geoPanel(view, W, H) {
  if (view === 'fantasma') {
    const [cx, cy] = centroMasa(view, W, H)
    return { x: cx, y: cy, w: 170, h: 170, r: 1, o: 1 }
  }
  if (esMobile()) {
    const [cx, cy] = centroMasa(view, W, H)
    const m = tablaM()[view]
    const w = Math.min(560, m.d * 0.7)
    return { x: cx, y: cy, w, h: w, r: 1, o: m.o }
  }
  if (view === 'inicio') return { x: W - 0.13515 * W, y: H / 2, w: 0.2703 * W, h: H, r: 0, o: 1 }
  if (view === 'sobre-mi') return { x: 0.7474 * W, y: 0.6676 * H, w: 660, h: 660, r: 1, o: 1 }
  const [cx, cy] = centroMasa(view, W, H)
  const m = tablaM()[view]
  const w = Math.min(660, m.d * 0.7)
  return { x: cx, y: cy, w, h: w, r: 1, o: m.o }
}

const SEMIS = [
  { w: 168, h: 84, radio: '999px 999px 0 0', recto: 'abajo', ox: 223.33, oy: -288.51, lag: 0.55 },
  { w: 107, h: 49, radio: '0 0 999px 999px', recto: 'arriba', ox: 303.2, oy: -211, lag: 0.62 },
]

function geoSemi(j, view, W, H) {
  if (view === 'inicio') {
    const [cx, cy] = centroMasa(view, W, H)
    const s = SEMIS[j]
    return { x: cx + s.ox, y: cy + s.oy, s: 1, o: 1 }
  }
  const [cx, cy] = centroMasa(view, W, H)
  const m = tablaM()[view]
  return { x: cx, y: cy, s: Math.min(1, (m.d * 0.5) / SEMIS[j].w), o: m.o }
}

function geoBlob(view, W, H) {
  const esProy = view.startsWith('proyectos') && view !== 'proyectos-mas'
  if (esMobile()) {
    if (esProy) {
      const m = MASA_M[view]
      return { x: (m.x / 100) * W, y: (m.y / 100) * H, s: 1, o: 1 }
    }
    const [cx, cy] = centroMasa(view, W, H)
    const m = tablaM()[view]
    return { x: cx, y: cy, s: (m.d / 1105) * 0.75, o: m.o }
  }
  if (esProy) {
    const flip = PROY_FLIP.has(view)
    const x = 0.5448 * W + 470.5
    return { x: flip ? W - x : x, y: 0.2213 * H + 552.5, s: 1, o: 1 }
  }
  const [cx, cy] = centroMasa(view, W, H)
  const m = tablaM()[view]
  return { x: cx, y: cy, s: (m.d / 1105) * 0.75, o: m.o }
}

export default function MasaAmarilla() {
  const raizRef = useRef(null)
  const gooRef = useRef(null)
  const blurRef = useRef(null)
  const circRefs = useRef([])
  const panelRef = useRef(null)
  const semiRefs = useRef([])
  const blobCircRefs = useRef([])
  const aroRef = useRef(null)
  const trazoRef = useRef(null)
  const aroFis = useRef(null)
  const tPrev = useRef(0)
  const boot = useRef({ v: 0 })

  useEffect(() => {
    const tw = gsap.to(boot.current, { v: 1, duration: 1.7, delay: 0.15, ease: 'power2.out' })

    let W = raizRef.current?.offsetWidth || 1920
    let H = raizRef.current?.offsetHeight || 1080
    const ro = new ResizeObserver(() => {
      if (!raizRef.current) return
      W = raizRef.current.offsetWidth || W
      H = raizRef.current.offsetHeight || H
    })
    if (raizRef.current) ro.observe(raizRef.current)

    const off = onScroll(({ prM, vel, salto }) => {
      // Sin opacidad de capa: la masa es solida al 100 %, tambien en celular.
      if (raizRef.current) poner(raizRef.current, 'opacity', '')
      const B = boot.current.v
      const enBoot = !salto && B < 1
      let i0 = 0
      let va
      let vb
      let t
      if (salto) {
        va = salto.va
        vb = salto.vb
        t = salto.t
      } else {
        i0 = Math.max(0, Math.min(Math.floor(prM), VIEW_IDS.length - 2))
        t = enBoot ? B : clamp(prM - i0, 0, 1)
        va = enBoot ? 'fantasma' : VIEW_IDS[i0]
        vb = enBoot ? 'inicio' : VIEW_IDS[i0 + 1]
      }
      const congelado = va === 'formacion-2' && vb === 'formacion-3'
      const env = congelado ? 0 : 4 * t * (1 - t)
      const sway = congelado ? 0 : clamp(vel * 20, -24, 24)
      const envV = env
      const ca = colorVista(va)
      const cbv = colorVista(vb)
      // De un color a otro en linea recta (ver lib/color.js).
      const col = mezclarColor(ca, cbv, t)
      // Todas las piezas llevan el mismo tono: se calcula una vez por cuadro.
      const colS = tinteC(col, 1)
      const goo = 8 + envV * 10
      if (blurRef.current) ponerAttr(blurRef.current, 'stdDeviation', String(goo))
      // Solo la primera vez: reescribir la misma cadena en cada frame obliga a
      // rehacer la cadena de filtros aunque no haya cambiado nada.
      if (gooRef.current && !gooRef.current.dataset.goo) {
        gooRef.current.style.filter = 'url(#goo-masa)'
        gooRef.current.dataset.goo = '1'
      }

      const cA = centroMasa(va, W, H)
      const cB = centroMasa(vb, W, H)
      const dxC = cB[0] - cA[0]
      const dyC = cB[1] - cA[1]
      const LC = Math.hypot(dxC, dyC) || 1
      const lado = enBoot ? -1 : i0 % 2 ? 1 : -1
      const arco = Math.max(LC * 0.34, 280)
      const fuerza = Math.min(1, (LC + arco * 2) / 900)
      const encog = congelado ? 0 : ss(clamp(t / 0.35, 0, 1)) * ss(clamp((1 - t) / 0.35, 0, 1))
      const mx = (cA[0] + cB[0]) / 2 + (-dyC / LC) * arco * lado
      const my = (cA[1] + cB[1]) / 2 + (dxC / LC) * arco * lado
      const punto = (s) => {
        const u = 1 - s
        return [u * u * cA[0] + 2 * u * s * mx + s * s * cB[0], u * u * cA[1] + 2 * u * s * my + s * s * cB[1]]
      }
      const tangente = (s) => {
        const u = 1 - s
        return [2 * u * (mx - cA[0]) + 2 * s * (cB[0] - mx), 2 * u * (my - cA[1]) + 2 * s * (cB[1] - my)]
      }

      let n0 = null
      for (let i = 0; i < N_ACTORES; i++) {
        const el = circRefs.current[i]
        if (!el) continue
        const a = geoCirc(i, va, W, H)
        const b = geoCirc(i, vb, W, H)
        let dA = a.d
        let dB = b.d
        if (a.fused && !b.fused) dA = Math.min(b.d, tablaM()[va].d * 0.8)
        if (b.fused && !a.fused) dB = Math.min(a.d, tablaM()[vb].d * 0.8)
        const an = i * 2.4
        const fr = 0.22 + ((i * 7) % 5) * 0.07
        if (a.fused) {
          const rm = Math.max(0, (tablaM()[va].d - dA) / 2 - 6) * fr
          a.x += Math.cos(an) * rm
          a.y += Math.sin(an) * rm
        }
        if (b.fused) {
          const rm = Math.max(0, (tablaM()[vb].d - dB) / 2 - 6) * fr
          b.x += Math.cos(an) * rm
          b.y += Math.sin(an) * rm
        }
        const si = ss(
          clamp(t * (1 + SPREAD) - LAGS[i] * SPREAD + Math.sin(t * 6.8 + i * 1.7) * 0.05 * fuerza, 0, 1),
        )
        const [pxC, pyC] = punto(si)
        const [tx, ty] = tangente(si)
        const tl = Math.hypot(tx, ty) || 1
        const jw =
          (((i * 37) % 11) / 11 - 0.5) * 84 * fuerza +
          Math.sin(si * Math.PI * 3 + i * 1.3) * 40 * fuerza +
          Math.sin(si * Math.PI * 6 + i) * 16 * fuerza
        let x = lerp(lerp(a.x, b.x, t), pxC + (-ty / tl) * jw, env)
        let y = lerp(lerp(a.y, b.y, t), pyC + (tx / tl) * jw, env)
        let d = lerp(dA, dB, t)
        d *= 1 - (d > 400 ? 0.38 : 0.2) * encog
        d *= 1 + 0.06 * Math.sin(t * 9.4 + i * 2.1) * env
        const o = lerp(a.o, b.o, t)
        y += sway * (0.5 + ((i * 5) % 7) * 0.08)
        const e = 0.34 * envV * fuerza

        // Una sola escritura por pieza: la caja mide BASE y la posicion y el
        // tamano van en el transform. Es la misma elipse en el mismo sitio que
        // con left/top/width/height + translate(-50%,-50%) + scale, pero el
        // navegador no tiene que leer cinco valores ni recolocar la caja en
        // cada cuadro.
        const sd = d / BASE
        poner(el, 'transform', `translate(${x - BASE / 2}px,${y - BASE / 2}px) scale(${sd * (1 + e)},${sd / (1 + e)})`)
        poner(el, 'backgroundColor', colS)
        // Un solo tono para toda la masa: las esferas ya no se diluyen cada una
        // a su manera, asi no se ven bordes entre ellas y todo es un mismo
        // cuerpo de color solido.
        poner(el, 'zIndex', String(1 + Math.round((t < 0.5 ? a.o : b.o) * 40)))
        if (i === 0) n0 = { x, y, d, o }
      }

      const A = geoBlob(va, W, H)
      const Bb = geoBlob(vb, W, H)
      const bsc = lerp(A.s, Bb.s, t)
      const bax = lerp(A.x, Bb.x, t)
      const bay = lerp(A.y, Bb.y, t)
      const bo = lerp(A.o, Bb.o, t)
      const entreProy = va.startsWith('proyectos') && vb.startsWith('proyectos')
      const flowBlob = entreProy ? env : 0
      BLOB_CIRCS.forEach((bc, k) => {
        const el = blobCircRefs.current[k]
        if (!el) return
        const kx = (bc.cx - BOX_CX) * bsc
        const ky = (bc.cy - BOX_CY) * bsc
        const rx = bax + kx
        const ry = bay + ky
        const si = ss(clamp(t * (1 + SPREAD) - bc.lag * SPREAD + Math.sin(t * 6.8 + k * 1.5) * 0.05 * fuerza, 0, 1))
        const [pxC, pyC] = punto(si)
        const esparce = 1 - 0.55 * env
        const undX = Math.sin(si * Math.PI * 3 + k * 1.3) * 34 * fuerza + Math.sin(si * Math.PI * 6 + k) * 14 * fuerza
        const undY = Math.sin(si * Math.PI * 4 + k * 1.1) * 30 * fuerza
        const corrX = pxC + kx * esparce + undX
        const corrY = pyC + ky * esparce + undY
        let x = lerp(rx, corrX, flowBlob)
        let y = lerp(ry, corrY, flowBlob)
        y += sway * 0.55
        const comp = 1 - 0.3 * encog
        const shr = 1 - 0.22 * env
        const w = bc.rx * 2 * bsc * comp * shr
        const h = bc.ry * 2 * bsc * comp * shr
        poner(el, 'transform', `translate(${x - BASE / 2}px,${y - BASE / 2}px) scale(${w / BASE},${h / BASE})`)
        poner(el, 'backgroundColor', colS)
        poner(el, 'zIndex', String(1 + Math.round((t < 0.5 ? A.o : Bb.o) * 40)))
      })

      const pel = panelRef.current
      if (pel && esMobile()) {
        poner(pel, 'opacity', '0')
      } else if (pel) {
        poner(pel, 'opacity', '1')
        if (enBoot) {
          const bp = ss(clamp((B - 0.08) / 0.9, 0, 1))
          const wFull = 0.2703 * W
          const w = Math.max(3, wFull * bp)
          const cx = W - w / 2
          const rad = (1 - bp) * 44
          poner(pel, 'left', `${cx}px`)
          poner(pel, 'top', `${H / 2}px`)
          poner(pel, 'width', `${w}px`)
          poner(pel, 'height', `${H}px`)
          poner(pel, 'borderRadius', `${rad}px`)
          poner(pel, 'backgroundColor', colS)
          poner(pel, 'zIndex', String(41))
          poner(pel, 'transform', 'translate(-50%,-50%)')
        } else {
          const a = geoPanel(va, W, H)
          const b = geoPanel(vb, W, H)
          const siP = ss(clamp(t * (1 + SPREAD) - 0.08 * SPREAD, 0, 1))
          const [txO, tyO] = tangente(siP)
          const tlP = Math.hypot(txO, tyO) || 1
          const ondP = Math.sin(siP * Math.PI * 2 + 2.1) * 16 * fuerza
          const [pxP, pyP] = punto(siP)
          let x = lerp(lerp(a.x, b.x, t), pxP + (-tyO / tlP) * ondP, env * 0.85)
          let y = lerp(lerp(a.y, b.y, t), pyP + (txO / tlP) * ondP, env * 0.85)
          let w = lerp(a.w, b.w, t)
          let h = lerp(a.h, b.h, t)
          w = lerp(w, 320, encog * 0.85)
          h = lerp(h, 320, encog * 0.85)
          const r = Math.max(lerp(a.r, b.r, t), encog)
          const o = lerp(a.o, b.o, t)
          y += sway * 0.4
          const eP = 0.35 * envV * fuerza * encog
          poner(pel, 'left', `${x}px`)
          poner(pel, 'top', `${y}px`)
          poner(pel, 'width', `${w}px`)
          poner(pel, 'height', `${h}px`)
          poner(pel, 'borderRadius', `${r * 50}%`)
          poner(pel, 'backgroundColor', colS)
          poner(pel, 'zIndex', String(1 + Math.round((t < 0.5 ? a.o : b.o) * 40)))
          poner(pel, 'transform', `translate(-50%,-50%) scale(${1 + eP},${1 / (1 + eP)})`)
        }
      }

      SEMIS.forEach((s, j) => {
        const el = semiRefs.current[j]
        if (!el) return
        const a = geoSemi(j, va, W, H)
        const b = geoSemi(j, vb, W, H)
        const ti = ss(clamp(t * (1 + SPREAD) - s.lag * SPREAD, 0, 1))
        const [pxC, pyC] = punto(ti)
        let x = lerp(lerp(a.x, b.x, t), pxC + (j ? 34 : -30), env)
        let y = lerp(lerp(a.y, b.y, t), pyC + (j ? 22 : -18), env)
        const o = lerp(a.o, b.o, t)
        const esc = lerp(a.s, b.s, t)
        y += sway * 0.5
        const rd = Math.round(ss(clamp(envV * 1.5, 0, 1)) * 999)
        poner(el, 'borderRadius', s.recto === 'abajo' ? `999px 999px ${rd}px ${rd}px` : `${rd}px ${rd}px 999px 999px`)
        poner(el, 'transform', `translate(${x - s.w / 2}px,${y - s.h / 2}px) scale(${esc})`)
        poner(el, 'backgroundColor', colS)
        poner(el, 'zIndex', String(1 + Math.round((t < 0.5 ? a.o : b.o) * 40)))
      })

      const ael = aroRef.current
      if (ael && trazoRef.current && n0) {
        const ahora = performance.now()
        const dt = Math.min((ahora - tPrev.current) / 1000 || 0.016, 0.05)
        tPrev.current = ahora
        const k = n0.d / 493
        const pertenencia = lerp(va === 'inicio' ? 1 : 0, vb === 'inicio' ? 1 : 0, t)
        const ox = n0.x + -135.1 * k * pertenencia
        const oy = n0.y + 1 * k * pertenencia
        const os = (n0.d * 1.1177) / 551
        const orot = envV * 1.4 * lado
        const nace = B >= 1 ? 1 : ss(clamp((B - 0.72) / 0.24, 0, 1))
        const olen = 50 * ss(clamp(pertenencia * 2 - 1, 0, 1)) * nace
        const odesf = envV * 16 * lado
        let f = aroFis.current
        if (!f) f = aroFis.current = { x: ox, y: oy, vx: 0, vy: 0, s: os, rot: orot, len: olen, desf: odesf }
        f.vx += ((ox - f.x) * 90 - f.vx * 13) * dt
        f.vy += ((oy - f.y) * 90 - f.vy * 13) * dt
        f.x += f.vx * dt
        f.y += f.vy * dt
        const sig = 1 - Math.exp(-dt * 7)
        f.s += (os - f.s) * sig
        f.rot += (orot - f.rot) * sig
        f.len += (olen - f.len) * (1 - Math.exp(-dt * 11))
        f.desf += (odesf - f.desf) * sig
        const drx = ox - f.x
        const dry = oy - f.y
        const arrastre = Math.min(0.35, Math.hypot(drx, dry) / 500)
        const tz = trazoRef.current
        // Fuera del Inicio el aro esta oculto: se sigue su fisica, pero no se
        // le escribe nada hasta que vuelve a verse.
        const oculto = f.len < 0.6
        poner(ael, 'visibility', oculto ? 'hidden' : 'visible')
        if (oculto) return
        ponerAttr(tz, 'stroke', colS)
        ponerAttr(tz, 'stroke-dasharray', `${Math.max(0.01, f.len)} ${Math.max(0.01, 100 - f.len)}`)
        ponerAttr(tz, 'stroke-dashoffset', String(f.desf))
        poner(ael, 'left', `${f.x}px`)
        poner(ael, 'top', `${f.y}px`)
        poner(ael, 'zIndex', String(1 + Math.round(n0.o * 40)))
        poner(ael, 'transform', `translate(-50%,-50%) rotate(${f.rot + arrastre * lado}rad) scale(${f.s * (1 + arrastre * 0.12)})`)
      }
    })

    return () => {
      tw.kill()
      ro.disconnect()
      off()
    }
  }, [])

  return (
    <div
      ref={raizRef}
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      style={{ isolation: 'isolate' }}
      aria-hidden="true"
    >
      <svg width="0" height="0" className="absolute">
        <defs>
          {/* Con x/y al -50% y 200%, el navegador calculaba el desenfoque
              sobre CUATRO veces la pantalla en cada frame. Un 15% de margen
              deja ~290 px por lado: de sobra para un goo que llega a 18 (se
              extiende unos 54 px) y para los circulos que entran volando desde
              fuera, pero menos de la mitad de pixeles que antes. */}
          <filter id="goo-masa" x="-15%" y="-15%" width="130%" height="130%" colorInterpolationFilters="sRGB">
            <feGaussianBlur ref={blurRef} in="SourceGraphic" stdDeviation="0" />
            <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 24 -11" />
          </filter>
        </defs>
      </svg>
      <div ref={gooRef} className="absolute inset-0">
        {BLOB_CIRCS.map((_, k) => (
          <span
            key={`b${k}`}
            ref={(el) => (blobCircRefs.current[k] = el)}
            className="absolute"
            style={{ ...CAJA, borderRadius: '50%' }}
          />
        ))}
        <span ref={panelRef} className="absolute" style={{ left: '-2000px', transform: 'translate(-50%,-50%)' }} />
      </div>
      <div className="absolute inset-0">
        {SEMIS.map((s, j) => (
          <span
            key={`s${j}`}
            ref={(el) => (semiRefs.current[j] = el)}
            className="absolute"
            style={{ width: s.w, height: s.h, borderRadius: s.radio, left: 0, top: 0, transform: FUERA }}
          />
        ))}
        {Array.from({ length: N_ACTORES }, (_, i) => (
          <span
            key={i}
            ref={(el) => (circRefs.current[i] = el)}
            className="absolute rounded-full"
            style={CAJA}
          />
        ))}
      </div>
      <svg
        ref={aroRef}
        viewBox="0 0 551 551"
        className="absolute"
        style={{ width: '551px', height: '551px', left: '-2000px', overflow: 'visible' }}
      >
        <circle
          ref={trazoRef}
          cx="275.5"
          cy="275.5"
          r="271.5"
          fill="none"
          stroke="transparent"
          strokeWidth="8"
          strokeLinecap="round"
          pathLength="100"
          strokeDasharray="0.01 99.99"
        />
      </svg>
    </div>
  )
}
