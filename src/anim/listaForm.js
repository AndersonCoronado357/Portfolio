import { VIEW_IDS } from '../lib/views'
import { registrarZona } from '../scroll/ritmo'

const clamp = (v, a, b) => Math.min(Math.max(v, a), b)

const SCROLLS = VIEW_IDS.map((id, i) => (id.startsWith('formacion-') ? i : -1)).filter((i) => i >= 0)
const I0 = SCROLLS[0]
const SPAN = Math.max(1, SCROLLS[SCROLLS.length - 1] - I0)

let col = null
let sec = null
let colH = 0
let vh = 1080
let top0 = 96

const visible = () => Math.max(0, vh - top0)
const recorrido = () => Math.max(0, colH - visible() + 44)

// La medida se toma de la caja, no del contenido: las tarjetas estan
// desplazadas fuera del cuadro cuando la vista no esta en escena, y
// scrollHeight cuenta ese desborde (la lista se pasaba 150 px de largo).
// Si la vista todavia no tiene caja, la medida queda pendiente y se toma en
// cuanto la tenga.
let pendiente = true

function medir() {
  if (!col) return
  if (!col.offsetParent) {
    pendiente = true
    return
  }
  colH = col.offsetHeight
  // La vista ya no es una ventana: la lista empieza donde la deja el relleno
  // de arriba de la vista, y el alto que cuenta es el de la escena.
  top0 = col.offsetTop
  const escena = sec && sec.parentElement
  vh = (escena && escena.clientHeight) || 1080
  pendiente = false
}

export function registrarForm() {
  col = document.getElementById('cursos-col')
  sec = document.getElementById('formacion-2')
  medir()
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(medir)
  window.addEventListener('resize', medir)
  registrarZona('cursos', { a: I0, b: I0 + SPAN, px: recorrido, alto: () => vh })
}

export function aplicarForm(pr) {
  if (!col) return
  if (pendiente) medir()
}

// Cuanto ha subido la lista en el punto pr del recorrido: App.jsx sube la
// vista entera esa cantidad (en px del cuadro).
export function scrollForm(pr) {
  if (!col) return 0
  if (pendiente) medir()
  return clamp((pr - I0) / SPAN, 0, 1) * recorrido()
}
