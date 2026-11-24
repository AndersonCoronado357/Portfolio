/*
 * Estetica de cada app dentro de su vista de detalle.
 *
 * La idea: al abrir "Conocer mas" de un proyecto, esa pagina se pinta con la
 * tipografia y los colores de ESA app, no con los del portafolio. Vexcel usa
 * Space Grotesk e IBM Plex Mono sobre violeta; Qraft, Plus Jakarta Sans sobre
 * un casi negro. Cada ficha de portafolio.js trae su bloque `estetica` copiado
 * de los tokens reales del repo de la app.
 *
 * Del portafolio solo se hereda si el visitante esta en claro o en oscuro: la
 * app se pinta en su propia version de ese modo.
 */

// Las familias se piden a Google Fonts la primera vez que se abre esa app, no
// al cargar el portafolio: son fuentes que la mayoria de visitantes no va a
// ver nunca.
const pedidas = new Set()

export function cargarFuentes(google) {
  if (!google || pedidas.has(google) || typeof document === 'undefined') return
  pedidas.add(google)

  // preconnect una sola vez: sin esto, la primera fuente paga el saludo TLS
  // entero antes de empezar a bajar.
  if (!document.querySelector('link[data-fuentes-preconnect]')) {
    for (const [href, cors] of [
      ['https://fonts.googleapis.com', false],
      ['https://fonts.gstatic.com', true],
    ]) {
      const l = document.createElement('link')
      l.rel = 'preconnect'
      l.href = href
      if (cors) l.crossOrigin = 'anonymous'
      l.setAttribute('data-fuentes-preconnect', '')
      document.head.appendChild(l)
    }
  }

  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = `https://fonts.googleapis.com/css2?family=${google}&display=swap`
  document.head.appendChild(link)
}

const RESPALDO = {
  fuente: {
    titulo: 'Nunito, system-ui, sans-serif',
    cuerpo: 'Nunito, system-ui, sans-serif',
    mono: 'ui-monospace, SFMono-Regular, Menlo, monospace',
  },
  radio: '14px',
  curva: 'cubic-bezier(0.22, 1, 0.36, 1)',
  claro: { fondo: '#ffffff', sup: '#f4f4f6', texto: '#0d0d0d', suave: '#5c5c66' },
  oscuro: { fondo: '#0a0a0c', sup: '#17171c', texto: '#ffffff', suave: '#9a9aa6' },
}

const rgb = (hex) => {
  const v = String(hex || '').replace('#', '')
  if (v.length !== 6) return null
  return [0, 2, 4].map((i) => parseInt(v.slice(i, i + 2), 16))
}
const hex = ([r, g, b]) => '#' + [r, g, b].map((x) => Math.round(Math.min(255, Math.max(0, x))).toString(16).padStart(2, '0')).join('')

// Sobre el color de marca, el texto va claro u oscuro segun cuanta luz tenga.
export function tintaSobre(c) {
  const v = rgb(c)
  if (!v) return '#ffffff'
  return (v[0] * 0.299 + v[1] * 0.587 + v[2] * 0.114) / 255 < 0.55 ? '#ffffff' : '#0d0d0d'
}

// Luminancia relativa y contraste de la WCAG.
const lum = ([r, g, b]) =>
  [r, g, b]
    .map((x) => x / 255)
    .map((x) => (x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4))
    .reduce((a, x, i) => a + x * [0.2126, 0.7152, 0.0722][i], 0)
const contraste = (a, b) => {
  const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p)
  return (x + 0.05) / (y + 0.05)
}

/*
 * El acento de cada app vale para una barra o un boton, pero no siempre para
 * texto: el cian de MedTrail sobre blanco o el azul de Gestion sobre negro se
 * quedan en dos a uno y no hay quien los lea. Esta funcion conserva el tono y
 * solo lo acerca al texto lo justo para llegar a 4.5:1, y devuelve el mismo
 * color cuando ya cumple, que es lo normal.
 */
// Mismo ajuste que `legible`, pero solo para que la mancha de color se vea
// sobre el fondo; a 2.2:1 ya se distingue sin desvirtuar el tono.
function visible(acento, fondo, texto) {
  const a = rgb(acento)
  const f = rgb(fondo)
  const t = rgb(texto)
  if (!a || !f || !t) return acento
  if (contraste(a, f) >= 2.2) return acento
  for (let m = 0.05; m <= 1.0001; m += 0.05) {
    const v = a.map((x, i) => x * (1 - m) + t[i] * m)
    if (contraste(v, f) >= 2.2) return hex(v)
  }
  return texto
}

function legible(acento, fondo, texto) {
  const a = rgb(acento)
  const f = rgb(fondo)
  const t = rgb(texto)
  if (!a || !f || !t) return acento
  if (contraste(a, f) >= 4.5) return acento
  for (let m = 0.05; m <= 1.0001; m += 0.05) {
    const v = a.map((x, i) => x * (1 - m) + t[i] * m)
    if (contraste(v, f) >= 4.5) return hex(v)
  }
  return texto
}

/**
 * Devuelve las variables CSS con las que se pinta la vista de un proyecto.
 * `tema` es 'dark' o 'light', heredado del portafolio.
 */
export function variables(dato, tema) {
  const e = { ...RESPALDO, ...(dato.estetica || {}) }
  const fuente = { ...RESPALDO.fuente, ...(e.fuente || {}) }
  const paleta = { ...(tema === 'dark' ? RESPALDO.oscuro : RESPALDO.claro), ...(tema === 'dark' ? e.oscuro : e.claro) }
  // Varias apps suben o bajan su acento en modo oscuro (Vexcel pasa de #6D4AFF
  // a #7C5CFF), asi que la paleta de cada tema puede traer el suyo.
  // El color de marca manda: es el que el visitante acaba de ver en la
  // galeria. Solo si la app no trae ninguno se cae a la paleta del repo.
  const marca = dato.color || paleta.acento || e.acento || '#e5b80b'
  // Unico retoque: que no desaparezca contra su propio fondo. Le pasa al negro
  // de Qraft en modo oscuro, que si no seria un boton negro sobre negro.
  const acento = visible(marca, paleta.fondo, paleta.texto)

  return {
    '--app-titulo': fuente.titulo,
    '--app-cuerpo': fuente.cuerpo,
    '--app-mono': fuente.mono,
    '--app-fondo': paleta.fondo,
    '--app-sup': paleta.sup,
    '--app-texto': paleta.texto,
    // A 4.5:1 no llegan varios grises de marca; se acercan al texto lo justo.
    '--app-suave': legible(paleta.suave, paleta.fondo, paleta.texto),
    '--app-acento': acento,
    '--app-acento-ink': tintaSobre(acento),
    // El mismo acento, pero garantizado legible como texto sobre el fondo.
    '--app-acento-texto': legible(acento, paleta.fondo, paleta.texto),
    // Tono de apoyo para franjas y realces: el acento acercado al fondo lo
    // justo para que el texto encima siga leyendose.
    '--app-tenue': e.tenue || `color-mix(in srgb, ${acento} 12%, ${paleta.fondo})`,
    // Franja alterna. En claro casi todas las apps tienen fondo gris palido y
    // superficie blanca: entre ellas no se ve nada, y menos con una captura
    // clara encima. La banda lleva un velo del acento y ya se separa sola.
    '--app-banda': `color-mix(in srgb, ${acento} ${tema === 'dark' ? 9 : 8}%, ${paleta.fondo})`,
    // Banda oscura (ficha tecnica): en claro es el negro de la app; en oscuro
    // no puede ser mas negro que el fondo, asi que sube a la superficie.
    '--app-tinta': tema === 'dark' ? paleta.sup : e.tinta || '#141418',
    '--app-tinta-ink': tema === 'dark' ? paleta.texto : '#ffffff',
    '--app-radio': e.radio || RESPALDO.radio,
    '--app-curva': e.curva || RESPALDO.curva,
  }
}
