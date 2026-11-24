import { useSyncExternalStore } from 'react'
import gsap from 'gsap'

const LIENZO = { light: [255, 255, 255], dark: [0, 0, 0] }
const INK = { light: [13, 13, 13], dark: [255, 255, 255] }

const escuchas = new Set()
const rgb = (c) => `rgb(${c[0]},${c[1]},${c[2]})`

function sistemaOscuro() {
  return typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}

function guardado() {
  try {
    return localStorage.getItem('tema')
  } catch {
    return null
  }
}

let modo = (() => {
  const g = guardado()
  if (g === 'light' || g === 'dark') return g
  return sistemaOscuro() ? 'dark' : 'light'
})()

const actualLienzo = [...LIENZO[modo]]
const actualInk = [...INK[modo]]
let tw = null

function raiz() {
  return typeof document !== 'undefined' ? document.documentElement : null
}

function aplicar() {
  const r = raiz()
  if (r) r.setAttribute('data-theme', modo)
}
aplicar()

function cambiar(destino, guardar) {
  if (destino === modo) return
  modo = destino
  if (guardar) {
    try {
      localStorage.setItem('tema', modo)
    } catch {
      /* sin persistencia */
    }
  }

  // El degradado entre claro y oscuro lo hace el navegador con una
  // View Transition: toma una foto del antes, aplica el cambio de una sola vez
  // y funde las dos imagenes en la GPU. Animarlo a mano reescribiendo las
  // variables en cada frame costaba 53 ms por vuelta (2800 elementos con
  // color-mix) y dejaba la pagina tiesa medio segundo.
  const pintar = () => {
    aplicar()
    escuchas.forEach((f) => f())
  }
  if (typeof document !== 'undefined' && document.startViewTransition) {
    document.startViewTransition(pintar)
  } else {
    pintar()
  }

  // El tween mueve SOLO los colores que la masa lee por JS en su propio
  // render. Antes tambien reescribia `--color-ink` y `--color-lienzo` en cada
  // frame, y eso obligaba al navegador a recalcular los 2800 elementos de la
  // pagina (muchos con color-mix sobre esas variables) unas 36 veces seguidas:
  // 53 ms por vuelta, o sea la pagina entera trabada medio segundo. Ahora el
  // DOM cambia de golpe con `data-theme` y lo suaviza una transicion CSS, que
  // el navegador resuelve sin volver a calcular estilos en cada frame.
  const desdeInk = [...actualInk]
  const desdeLi = [...actualLienzo]
  const haciaInk = INK[modo]
  const haciaLi = LIENZO[modo]
  tw?.kill()
  const o = { t: 0 }
  tw = gsap.to(o, {
    t: 1,
    duration: 0.6,
    ease: 'power2.inOut',
    onUpdate: () => {
      for (let i = 0; i < 3; i++) {
        actualInk[i] = Math.round(desdeInk[i] + (haciaInk[i] - desdeInk[i]) * o.t)
        actualLienzo[i] = Math.round(desdeLi[i] + (haciaLi[i] - desdeLi[i]) * o.t)
      }
    },
  })
}

if (typeof window !== 'undefined' && window.matchMedia) {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (guardado()) return
    cambiar(e.matches ? 'dark' : 'light', false)
  })
}

function suscribir(cb) {
  escuchas.add(cb)
  return () => escuchas.delete(cb)
}

export function tema() {
  return modo
}

export function lienzo() {
  return actualLienzo
}

export function alternarTema() {
  cambiar(modo === 'dark' ? 'light' : 'dark', true)
}

export function onTema(cb) {
  return suscribir(cb)
}

export function useTema() {
  return useSyncExternalStore(suscribir, () => modo, () => 'light')
}
