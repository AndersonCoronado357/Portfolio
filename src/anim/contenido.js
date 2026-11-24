import { esMobile } from '../lib/dispositivo'
import { poner } from '../lib/estilo'

const clamp = (v, a, b) => Math.min(Math.max(v, a), b)
const ss = (v) => v * v * v * (v * (v * 6 - 15) + 10)

const WIN = 0.98
// Tramo final antes de cada vista en el que ya no cambia ninguna opacidad,
// solo el movimiento. Es un poco mas que el alcance del iman (0.12): cuando el
// recorrido se asienta en una vista, todo ya esta en opacidad 1. Si el fundido
// llegaba a 1 justo en el ultimo cuadro, ese paso de 0.99999 a 1 obligaba al
// navegador a redibujar la pieza (y la vista entera, con sus capturas) en el
// momento en que todo estaba quieto, y se veia como un parpadeo.
export const REPOSO = 0.13

let cache = []
// Piezas agrupadas por vista, y que vistas tienen ya todas sus piezas
// ocultas: esas no se vuelven a recorrer hasta que se acerquen.
let porVista = []
let ocultas = []

function dividir(el, col) {
  for (const n of [...el.childNodes]) {
    if (n.nodeType === 3) {
      const txt = n.textContent
      if (!txt) continue
      const frag = document.createDocumentFragment()
      for (const parte of txt.split(/(\s+)/)) {
        if (parte === '') continue
        if (/^\s+$/.test(parte)) {
          frag.appendChild(document.createTextNode(parte))
        } else {
          const s = document.createElement('span')
          s.textContent = parte
          s.style.display = 'inline-block'
          s.setAttribute('data-w', '')
          frag.appendChild(s)
          col.push(s)
        }
      }
      n.replaceWith(frag)
    } else if (n.nodeType === 1 && n.tagName !== 'BR') {
      dividir(n, col)
    }
  }
}

export function prepararTexto(el) {
  if (el.dataset.split) return [...el.querySelectorAll('span[data-w]')]
  const col = []
  dividir(el, col)
  el.dataset.split = '1'
  return col
}

function firma(el, secR) {
  const tipo = el.dataset.anim || 'pinta'
  const hito = el.dataset.hito !== undefined ? parseFloat(el.dataset.hito) || 0 : null
  const r = el.getBoundingClientRect()
  const cx = clamp((r.left + r.width / 2 - secR.left) / (secR.width || 1), 0, 1)
  const cy = clamp((r.top + r.height / 2 - secR.top) / (secR.height || 1), 0, 1)
  const ph = (cx * 0.45 + cy * 0.55) * 0.6

  // Vector de vuelo: cada elemento entra y sale por SU lado de la
  // composicion, no todos hacia arriba. Los del borde vuelan mas lejos que
  // los del centro, asi la vista se arma desde fuera y se desarma hacia
  // fuera en vez de deslizarse en bloque.
  const dx = cx - 0.5
  const dy = cy - 0.5
  const len = Math.hypot(dx, dy) || 0.0001
  const amp = 70 + len * 240
  const vx = (dx / len) * amp
  const vy = (dy / len) * amp * 0.5
  const lado = dx >= 0 ? 1 : -1
  // En celular el vuelo lateral se queda corto a proposito: si la maqueta
  // se va volando, no da tiempo a ver como se cierra la pantalla del PC,
  // que ahi es lo que se quiere mirar.
  const naveAmp = esMobile() ? 110 : 430

  let palabras = null
  const especial = hito !== null || ['brota', 'wipe', 'track', 'fill', 'linea', 'abre', 'nave'].includes(tipo)
  if (!especial) {
    const fondo = getComputedStyle(el).backgroundColor
    const tieneFondo = fondo && fondo !== 'rgba(0, 0, 0, 0)' && fondo !== 'transparent'
    if (!esMobile() && !(el.tagName === 'BUTTON' || el.tagName === 'A' || el.tagName === 'IMG' || tieneFondo)) {
      palabras = prepararTexto(el)
    }
  }
  return { tipo, ph, hito, palabras, cx, cy, vx, vy, lado, naveAmp }
}

function pintar(el, sig, local) {
  if (local <= -WIN || local >= WIN) {
    poner(el, 'opacity', '0')
    return
  }
  const entra = local < 0
  const crudo = entra ? (local + WIN) / WIN : (WIN - local) / WIN
  // Movimiento: los tiempos de siempre, hasta el ultimo cuadro.
  const e = clamp((crudo - sig.ph) / (1 - sig.ph), 0, 1)
  const a = ss(e)
  const off = 1 - a
  // Opacidad: la misma curva, pero completa antes del tramo de REPOSO.
  const crudoOp = clamp(crudo / (1 - REPOSO / WIN), 0, 1)
  const eOp = clamp((crudoOp - sig.ph) / (1 - sig.ph), 0, 1)
  const aOp = ss(eOp)
  const dir = entra ? 1 : -1
  const t = sig.tipo
  const fill = clamp((local + 0.42) / 0.42, 0, 1)
  const fillOp = clamp((local + 0.42) / (0.42 - REPOSO), 0, 1)

  if (sig.hito !== null) {
    const p = ss(clamp((fill - sig.hito) / 0.09, 0, 1))
    const pOp = ss(clamp((fillOp - sig.hito) / 0.09, 0, 1))
    poner(el, 'opacity', String(pOp))
    poner(el, 'transform', `scale(${0.3 + 0.7 * p})`)
    return
  }

  if (t === 'track') {
    poner(el, 'opacity', String(aOp * 0.9))
  } else if (t === 'fill' || t === 'linea') {
    poner(el, 'opacity', '1')
    poner(el, 'clipPath', `inset(0 0 ${(1 - fill) * 100}% 0)`)
  } else if (t === 'wipe') {
    poner(el, 'opacity', String(aOp))
    poner(el, 'clipPath', `inset(0 ${off * 100}% 0 0)`)
  } else if (t === 'nave') {
    // Maquetas (portatil, celular): llegan volando desde su lado con
    // perspectiva y se van por donde vinieron. Es el movimiento que hace
    // que se NOTE que entran y salen, en vez de estar siempre ahi.
    poner(el, 'opacity', String(Math.min(1, aOp * 1.3)))
    poner(
      el,
      'transform',
      `translate(${off * sig.lado * sig.naveAmp}px, ${off * 70 * dir}px) scale(${1 - 0.18 * off})`,
    )
  } else if (t === 'brota') {
    poner(el, 'opacity', String(aOp))
    poner(el, 'transform', `translate(${off * sig.vx * 0.5}px, ${off * (18 * dir + sig.vy * 0.4)}px) scale(${1 - 0.4 * off})`)
  } else if (t === 'abre') {
    poner(el, 'transformOrigin', 'bottom')
    poner(el, 'opacity', String(Math.min(1, aOp * 1.4)))
    poner(el, 'transform', `perspective(1600px) rotateX(${off * -90}deg)`)
  } else if (sig.palabras) {
    poner(el, 'opacity', '1')
    poner(el, 'transform', `translate(${off * sig.vx * 0.8}px, ${off * (sig.vy * 0.8 + 26 * dir)}px)`)
    const N = sig.palabras.length
    const head = clamp(eOp / 0.9, 0, 1) * (N + 1)
    for (let j = 0; j < N; j++) {
      poner(sig.palabras[j], 'opacity', String(clamp((head - j) * 5, 0, 1)))
    }
  } else {
    poner(el, 'opacity', String(aOp))
    poner(el, 'transform', `translate(${off * sig.vx}px, ${off * (sig.vy + 30 * dir)}px) scale(${1 - 0.12 * off})`)
  }
}

export function registrar(viewIds) {
  cache = []
  porVista = []
  ocultas = []
  viewIds.forEach((id, i) => {
    const sec = document.getElementById(id)
    if (!sec) return
    const secR = sec.getBoundingClientRect()
    const lista = (porVista[i] = [])
    sec.querySelectorAll('[data-anim]').forEach((el) => {
      const c = { el, i, sig: firma(el, secR) }
      cache.push(c)
      lista.push(c)
    })
  })
}

const fuera = (local) => local <= -WIN || local >= WIN

export function aplicar(pr, boot = 1) {
  for (let i = 0; i < porVista.length; i++) {
    const lista = porVista[i]
    if (!lista) continue
    let local = pr - i
    if (i === 0 && boot < 1) local = -0.95 * (1 - boot) + local * boot
    const lejos = fuera(local)
    // Una vista lejana cuyas piezas ya quedaron en 0 no se vuelve a tocar.
    if (lejos && ocultas[i]) continue
    for (const c of lista) pintar(c.el, c.sig, local)
    ocultas[i] = lejos
  }
}

export function aplicarVista(i, local) {
  const lista = porVista[i]
  if (!lista) return
  for (const c of lista) pintar(c.el, c.sig, local)
  ocultas[i] = fuera(local)
}
