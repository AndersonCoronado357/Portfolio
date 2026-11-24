import { PROYECTOS } from '../data/portafolio'

export const VIEWS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-mi', label: 'Sobre mi' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'tecnologias', label: 'Tecnologias' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'formacion', label: 'Formacion' },
  { id: 'contacto', label: 'Contacto' },
]

const GRUPOS = {
  proyectos: ['proyectos', 'proyectos-2', 'proyectos-3', 'proyectos-4', 'proyectos-5', 'proyectos-mas'],
  tecnologias: ['tecnologias', 'tecnologias-2'],
  formacion: ['formacion', 'formacion-2', 'formacion-3'],
}

const STOPS = []
VIEWS.forEach((v, navIdx) => {
  const ids = GRUPOS[v.id] || [v.id]
  ids.forEach((id) => STOPS.push({ id, slot: navIdx }))
})

const PROY_SLOT = VIEWS.findIndex((v) => v.id === 'proyectos')
// "Ver todos" arranca en el proyecto 6: los cinco primeros ya se ven en el
// recorrido principal, asi que la galeria muestra solo los que siguen.
export const DESTACADOS_N = 5
export const GALERIA_IDS = Array.from({ length: Math.max(0, PROYECTOS.length - DESTACADOS_N) }, (_, i) => `proyectos-t${i}`)
GALERIA_IDS.forEach((id) => STOPS.push({ id, slot: PROY_SLOT }))

export const VIEW_IDS = STOPS.map((s) => s.id)
export const SLOT = STOPS.map((s) => s.slot)
export const GROUP_PREV = STOPS.map((s, i) => i > 0 && STOPS[i - 1].slot === s.slot)
export const GROUP_NEXT = STOPS.map((s, i) => i < STOPS.length - 1 && STOPS[i + 1].slot === s.slot)

export const NORMAL_MAX = VIEW_IDS.indexOf('contacto')
export const GAL_INI = VIEW_IDS.indexOf(GALERIA_IDS[0])
export const GAL_FIN = VIEW_IDS.indexOf(GALERIA_IDS[GALERIA_IDS.length - 1])

export function navPos(pr) {
  const n = VIEW_IDS.length
  const i0 = Math.max(0, Math.min(Math.floor(pr), n - 1))
  const i1 = Math.min(i0 + 1, n - 1)
  return SLOT[i0] + (SLOT[i1] - SLOT[i0]) * (pr - i0)
}
