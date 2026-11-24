import { esMobile } from '../lib/dispositivo'
import { PROYECTOS } from '../data/portafolio'
import { VIEW_IDS } from '../lib/views'

// cuantos proyectos van en el recorrido principal; el resto, en "Ver todos"
const DESTACADOS = 5

const c = (x, y, d, o = 1, dx = 0, dy = 0) => ({ x, y, d, o, dx, dy })

const AX = 36.64
const AY = 58.19

export const CIRCULOS = {
  fantasma: {},
  inicio: {
    0: c(AX, AY, 493),
    1: c(AX, AY, 62, 1, -398.5, -119.5),
    2: c(AX, AY, 35, 1, -381, -198),
    3: c(AX, AY, 71, 1, -328, -258),
    4: c(AX, AY, 35, 1, -275, -311),
    5: c(AX, AY, 71, 1, -203, -348),
    6: c(AX, AY, 93, 1, -88, -375),
    7: c(AX, AY, 88, 1, 307.5, -104.5),
    8: c(AX, AY, 49, 1, 319, -29),
    9: c(AX, AY, 100, 1, 301.5, 50.5),
  },
  'sobre-mi': {
    0: c(74.74, 66.76, 660),
    1: c(90.1, 47.22, 272, 0.8),
    2: c(2.27, 96.62, 223, 0.8),
    3: c(81.25, 27.04, 140, 0.6),
    4: c(66.15, 22.04, 100, 0.6),
    5: c(9.53, 42.59, 236, 0.3),
    6: c(61.17, 13.66, 49, 0.6),
    7: c(21.56, 20.56, 68, 0.2),
  },
  proyectos: {
    2: c(2.27, 96.62, 223, 0.8),
    5: c(6.9, 77.55, 177, 0.3),
    7: c(16.25, 89.44, 68, 0.2),
  },
  'proyectos-2': {
    2: c(97.73, 96.62, 223, 0.8),
    5: c(93.1, 77.55, 177, 0.3),
    7: c(83.75, 89.44, 68, 0.2),
  },
  'proyectos-3': {
    2: c(2.27, 96.62, 223, 0.8),
    5: c(6.9, 77.55, 177, 0.3),
    7: c(16.25, 89.44, 68, 0.2),
  },
  'proyectos-mas': {
    0: c(50, 92, 440),
    1: c(34, 80, 150, 0.6),
    2: c(66, 82, 130, 0.4),
  },
  experiencia: {
    0: c(76.3, 66.76, 660),
    1: c(91.67, 47.22, 272, 0.8),
    2: c(2.27, 96.62, 223, 0.8),
    3: c(82.81, 27.04, 140, 0.6),
    4: c(67.71, 22.04, 100, 0.6),
    5: c(3.75, 46.02, 166, 0.3),
    6: c(62.73, 13.66, 49, 0.6),
    7: c(21.56, 20.56, 68, 0.2),
    8: c(41.82, 41.11, 272, 0.8),
    9: c(36.2, 78.24, 140, 0.6),
    10: c(22.55, 47.22, 100, 0.6),
    11: c(53.46, 72.27, 49, 0.6),
  },
  tecnologias: {
    0: c(7, 48, 480),
    1: c(18, 30, 150, 0.6),
    5: c(11, 78, 150, 0.3),
  },
  // La lista de Tecnologias es larguisima y solo son DOS paradas, asi que la
  // masa tiene que cruzar de lado a lado en ese tramo. Antes terminaba en el
  // centro (x 50) y se quedaba ahi clavada todo el scroll.
  'tecnologias-2': {
    0: c(93, 52, 480),
    1: c(82, 30, 150, 0.6),
    5: c(89, 78, 150, 0.3),
  },
  habilidades: {
    1: c(99.97, 47.5, 223, 0.8),
    2: c(2.27, 96.62, 223, 0.8),
    3: c(91.38, 22.27, 177, 0.3),
    4: c(86.77, 40.46, 68, 0.2),
    5: c(6.9, 77.55, 177, 0.3),
    7: c(16.25, 89.44, 68, 0.2),
  },
  formacion: {
    0: c(77, 55, 620),
    1: c(94, 38, 220, 0.6),
    2: c(88, 76, 170, 0.45),
    3: c(64, 86, 120, 0.4),
    4: c(98, 61, 90, 0.5),
    5: c(48, 95, 130, 0.3),
    6: c(6, 90, 120, 0.35),
    7: c(82, 18, 76, 0.45),
  },
  'formacion-2': {
    0: c(74, 58, 560),
    1: c(92, 32, 180, 0.5),
    2: c(3, 88, 200, 0.3),
    3: c(90, 82, 150, 0.4),
    4: c(6, 40, 220, 0.25),
    5: c(14, 92, 110, 0.3),
    6: c(4, 12, 160, 0.3),
    7: c(96, 58, 90, 0.35),
  },
  'formacion-3': {
    0: c(74, 58, 560),
    1: c(92, 32, 180, 0.5),
    2: c(3, 88, 200, 0.3),
    3: c(90, 82, 150, 0.4),
    4: c(6, 40, 220, 0.25),
    5: c(14, 92, 110, 0.3),
    6: c(4, 12, 160, 0.3),
    7: c(96, 58, 90, 0.35),
  },
  contacto: {
    0: c(24.17, 46.2, 754),
    1: c(7.32, 61.34, 311, 0.8),
    3: c(14.32, 83.7, 160, 0.6),
    4: c(28.78, 92.82, 95, 0.6),
    5: c(5.47, 86.11, 168, 0.3),
    6: c(17.68, 99.4, 49, 0.6),
    7: c(11.54, 69.31, 65, 0.2),
  },
}

export const MASA = {
  fantasma: { x: -18, y: 55, d: 420, o: 1 },
  inicio: { x: AX, y: AY, d: 493, o: 1 },
  'sobre-mi': { x: 74.74, y: 66.76, d: 660, o: 1 },
  proyectos: { x: 74.36, y: 69.37, d: 660, o: 1 },
  'proyectos-2': { x: 25.64, y: 69.37, d: 660, o: 1 },
  'proyectos-3': { x: 74.36, y: 69.37, d: 660, o: 1 },
  'proyectos-mas': { x: 50, y: 92, d: 440, o: 1 },
  experiencia: { x: 76.3, y: 66.76, d: 660, o: 1 },
  tecnologias: { x: 7, y: 48, d: 480, o: 1 },
  'tecnologias-2': { x: 93, y: 52, d: 480, o: 1 },
  habilidades: { x: 99.97, y: 47.5, d: 223, o: 0.8 },
  formacion: { x: 77, y: 55, d: 620, o: 1 },
  'formacion-2': { x: 74, y: 58, d: 560, o: 1 },
  'formacion-3': { x: 74, y: 58, d: 560, o: 1 },
  contacto: { x: 24.17, y: 46.2, d: 754, o: 1 },
}

export const N_ACTORES = 12

// El color de cada proyecto vive JUNTO al proyecto, en portafolio.js
// (campo `color`). Antes era una lista aparte ordenada por posicion: si
// movias un proyecto de lugar, los colores se corrian todos y habia que
// reacomodarlos a mano. Ahora reordenar la lista no rompe nada.
const hexARgb = (h) => {
  const v = String(h).replace('#', '')
  return [0, 2, 4].map((i) => parseInt(v.slice(i, i + 2), 16))
}

export const PROY_COLORS = {}
PROYECTOS.forEach((p, i) => {
  const rgb = p.color ? hexARgb(p.color) : [229, 184, 11]
  // los 5 primeros son el recorrido principal; del 6 en adelante, la galeria
  if (i < DESTACADOS) PROY_COLORS[i === 0 ? 'proyectos' : `proyectos-${i + 1}`] = rgb
  else PROY_COLORS[`proyectos-t${i - DESTACADOS}`] = rgb
})

export const PROY_FLIP = new Set(['proyectos-2'])

const PALETA = [
  [229, 184, 11], [122, 90, 248], [236, 110, 76], [46, 164, 120], [60, 140, 232],
  [220, 90, 150], [180, 150, 40], [120, 120, 210], [90, 180, 180], [200, 120, 60],
]
const CIRC_A = { 2: c(2.27, 96.62, 223, 0.8), 5: c(6.9, 77.55, 177, 0.3), 7: c(16.25, 89.44, 68, 0.2) }
const CIRC_B = { 2: c(97.73, 96.62, 223, 0.8), 5: c(93.1, 77.55, 177, 0.3), 7: c(83.75, 89.44, 68, 0.2) }
const MASA_A = { x: 74.36, y: 69.37, d: 660, o: 1 }
const MASA_B = { x: 25.64, y: 69.37, d: 660, o: 1 }

// Las paradas de "Ver todos" son tantas como proyectos haya despues de los
// destacados: se cuentan, NO se pone un numero fijo. Con un 10 escrito a mano,
// cada proyecto que se agregaba a partir del undecimo se quedaba sin ancla y el
// scroll se congelaba justo ahi (geoCirc leia una tabla inexistente y el
// rAF moria).
const GALERIA_N = Math.max(0, PROYECTOS.length - DESTACADOS)

const EXTRA = [
  ['proyectos-4', true, 3],
  ['proyectos-5', false, 4],
  ...Array.from({ length: GALERIA_N }, (_, i) => [`proyectos-t${i}`, i % 2 === 1, i]),
]
EXTRA.forEach(([id, flip, ci]) => {
  CIRCULOS[id] = flip ? CIRC_B : CIRC_A
  MASA[id] = flip ? MASA_B : MASA_A
  // no pisar el color de marca real si ya esta definido arriba
  if (!PROY_COLORS[id]) PROY_COLORS[id] = PALETA[ci % PALETA.length]
  if (flip) PROY_FLIP.add(id)
})

export const CIRCULOS_M = {
  fantasma: {},
  inicio: {
    0: c(54.1, 50, 493),
    1: c(54.1, 50, 62, 1, -398.5, -119.5),
    2: c(54.1, 50, 35, 1, -381, -198),
    3: c(54.1, 50, 71, 1, -328, -258),
    4: c(54.1, 50, 35, 1, -275, -311),
    5: c(54.1, 50, 71, 1, -203, -348),
    6: c(54.1, 50, 93, 1, -88, -375),
    7: c(54.1, 50, 88, 1, 307.5, -104.5),
    8: c(54.1, 50, 49, 1, 319, -29),
    9: c(54.1, 50, 100, 1, 301.5, 50.5),
  },
  'sobre-mi': {
    0: c(47.65, 79.4, 660),
    1: c(75, 68.5, 272, 0.8),
    2: c(2.9, 54.9, 223, 0.8),
    3: c(59.3, 57.05, 140, 0.6),
    4: c(32.45, 54.3, 100, 0.6),
    5: c(15.8, 24.55, 236, 0.3),
    6: c(23.6, 49.6, 49, 0.6),
    7: c(37.25, 12.2, 68, 0.2),
  },
  experiencia: {
    0: c(55.25, 87, 660),
    1: c(82.6, 76, 272, 0.8),
    2: c(4, 65, 223, 0.8),
    3: c(66.9, 64.65, 140, 0.6),
    4: c(40.05, 61.8, 100, 0.6),
    5: c(-6.4, 26.7, 166, 0.3),
    6: c(31.2, 57.1, 49, 0.6),
    7: c(25.25, 12.4, 68, 0.2),
    8: c(-2.4, 24.8, 272, 0.8),
    9: c(92.7, 13.15, 140, 0.6),
    10: c(77.25, 32.1, 100, 0.6),
    11: c(60, 45, 49, 0.6),
  },
  proyectos: {
    2: c(97.4, 46.9, 223, 0.8),
    5: c(0.85, 26.7, 245, 0.3),
    7: c(92.65, 33.1, 68, 0.2),
  },
  'proyectos-2': {
    2: c(2.6, 46.9, 223, 0.8),
    5: c(99.15, 26.7, 245, 0.3),
    7: c(7.35, 33.1, 68, 0.2),
  },
  'proyectos-mas': {
    0: c(50, 88, 440),
    1: c(30, 78, 150, 0.6),
    2: c(70, 80, 130, 0.4),
  },
  tecnologias: {
    0: c(14, 40, 480),
    1: c(30, 22, 150, 0.6),
    5: c(20, 68, 150, 0.3),
  },
  'tecnologias-2': {
    0: c(50, 42, 480),
    1: c(50, 22, 150, 0.6),
    5: c(50, 68, 150, 0.3),
  },
  'tecnologias-3': {
    0: c(86, 44, 480),
    1: c(70, 22, 150, 0.6),
    5: c(80, 68, 150, 0.3),
  },
  habilidades: {
    1: c(100, 36.1, 223, 0.8),
    2: c(97.5, 94.7, 203, 0.8),
    3: c(8.75, 25.3, 177, 0.3),
    4: c(16.25, 33.2, 68, 0.2),
    5: c(3.5, 96.1, 177, 0.3),
    6: c(91.55, 83.1, 161, 0.3),
    7: c(14.55, 89.65, 68, 0.2),
    8: c(0, 48, 166, 0.3),
    9: c(78.05, 90.1, 62, 0.2),
  },
  formacion: {
    0: c(70, 87, 540),
    1: c(90, 73, 160, 0.5),
    2: c(92, 30, 120, 0.4),
    3: c(20, 97, 130, 0.35),
    4: c(50, 95, 110, 0.3),
    5: c(96, 52, 90, 0.4),
    6: c(10, 40, 96, 0.3),
    7: c(40, 26, 70, 0.35),
  },
  'formacion-2': {
    0: c(82, 42, 500),
    1: c(94, 22, 150, 0.5),
    2: c(90, 64, 130, 0.4),
    3: c(6, 84, 130, 0.4),
    4: c(4, 34, 96, 0.35),
    5: c(60, 94, 100, 0.3),
    6: c(10, 10, 80, 0.3),
    7: c(96, 46, 66, 0.35),
  },
  'formacion-3': {
    0: c(82, 42, 500),
    1: c(94, 22, 150, 0.5),
    2: c(90, 64, 130, 0.4),
    3: c(6, 84, 130, 0.4),
    4: c(4, 34, 96, 0.35),
    5: c(60, 94, 100, 0.3),
    6: c(10, 10, 80, 0.3),
    7: c(96, 46, 66, 0.35),
  },
  contacto: {
    0: c(54.6, 66.75, 754),
    1: c(24.6, 75.3, 311, 0.8),
    3: c(37, 87.85, 160, 0.6),
    4: c(62.8, 93, 95, 0.6),
    5: c(21.25, 89.15, 168, 0.3),
    6: c(43, 96.7, 49, 0.6),
    7: c(32.1, 79.8, 65, 0.2),
  },
}

export const MASA_M = {
  fantasma: { x: 50, y: -12, d: 420, o: 1 },
  inicio: { x: 54.1, y: 50, d: 493, o: 1 },
  'sobre-mi': { x: 47.65, y: 79.4, d: 660, o: 1 },
  experiencia: { x: 55.25, y: 87, d: 660, o: 1 },
  proyectos: { x: 52, y: 86, d: 660, o: 1 },
  'proyectos-2': { x: 48, y: 86, d: 660, o: 1 },
  'proyectos-mas': { x: 50, y: 88, d: 440, o: 1 },
  tecnologias: { x: 14, y: 40, d: 480, o: 1 },
  'tecnologias-2': { x: 50, y: 42, d: 480, o: 1 },
  'tecnologias-3': { x: 86, y: 44, d: 480, o: 1 },
  habilidades: { x: 100, y: 36.1, d: 223, o: 0.8 },
  formacion: { x: 70, y: 87, d: 540, o: 1 },
  'formacion-2': { x: 82, y: 42, d: 500, o: 1 },
  'formacion-3': { x: 82, y: 42, d: 500, o: 1 },
  contacto: { x: 54.6, y: 66.75, d: 754, o: 1 },
}

const CIRC_AM = { 2: c(97.4, 46.9, 223, 0.8), 5: c(0.85, 26.7, 245, 0.3), 7: c(92.65, 33.1, 68, 0.2) }
const CIRC_BM = { 2: c(2.6, 46.9, 223, 0.8), 5: c(99.15, 26.7, 245, 0.3), 7: c(7.35, 33.1, 68, 0.2) }
const MASA_AM = { x: 52, y: 86, d: 660, o: 1 }
const MASA_BM = { x: 48, y: 86, d: 660, o: 1 }

EXTRA.forEach(([id, flip]) => {
  CIRCULOS_M[id] = flip ? CIRC_BM : CIRC_AM
  MASA_M[id] = flip ? MASA_BM : MASA_AM
})

CIRCULOS_M['proyectos-3'] = CIRC_AM
MASA_M['proyectos-3'] = MASA_AM

// Red de seguridad: toda parada del recorrido tiene que existir en las cuatro
// tablas. Si falta una, la masa lee `undefined`, la excepcion mata el bucle de
// animacion y el scroll se queda clavado ahi mismo sin poder seguir. Ha pasado
// ya con "proyectos-3" y con los proyectos nuevos de "Ver todos", asi que en
// vez de acordarse de anadirlas a mano, las que falten heredan las del inicio.
for (const id of VIEW_IDS) {
  if (!CIRCULOS[id]) CIRCULOS[id] = CIRCULOS.inicio
  if (!MASA[id]) MASA[id] = MASA.inicio
  if (!CIRCULOS_M[id]) CIRCULOS_M[id] = CIRCULOS_M.inicio
  if (!MASA_M[id]) MASA_M[id] = MASA_M.inicio
}

export const tablaC = () => (esMobile() ? CIRCULOS_M : CIRCULOS)
export const tablaM = () => (esMobile() ? MASA_M : MASA)

export function centroMasaPx(view, W, H) {
  if (esMobile()) {
    const m = MASA_M[view] || MASA_M.inicio
    return [(m.x / 100) * W, (m.y / 100) * H]
  }
  if (view.startsWith('proyectos') && view !== 'proyectos-mas') {
    const x = 0.5448 * W + 381.8
    return [PROY_FLIP.has(view) ? W - x : x, 0.2213 * H + 510.2]
  }
  const m = MASA[view] || MASA.inicio
  return [(m.x / 100) * W, (m.y / 100) * H]
}
