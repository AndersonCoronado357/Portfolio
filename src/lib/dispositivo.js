import { useSyncExternalStore } from 'react'

export function calcMobile() {
  if (typeof window === 'undefined') return false
  return window.innerHeight > window.innerWidth && window.innerWidth < 900
}

let actual = calcMobile()
const escuchas = new Set()

function onResize() {
  const v = calcMobile()
  if (v !== actual) {
    actual = v
    escuchas.forEach((f) => f())
  }
}

if (typeof window !== 'undefined') window.addEventListener('resize', onResize)

function suscribir(cb) {
  escuchas.add(cb)
  return () => escuchas.delete(cb)
}

export function esMobile() {
  return actual
}

export function useEsMobile() {
  return useSyncExternalStore(suscribir, () => actual, () => false)
}
