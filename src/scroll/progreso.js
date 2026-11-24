export const scrollState = { p: 0, pr: 0, prM: 0, vel: 0, navPr: 0, entrar: 1, acento: [229, 184, 11], salto: null, vista: 'inicio' }

export const HOLD = 0.1

export function remapHold(local) {
  if (local <= HOLD) return 0
  if (local >= 1 - HOLD) return 1
  const t = (local - HOLD) / (1 - 2 * HOLD)
  return t * t * (3 - 2 * t)
}

const subs = new Set()

export function onScroll(fn) {
  subs.add(fn)
  return () => subs.delete(fn)
}

export function emitScroll() {
  for (const fn of subs) fn(scrollState)
}
