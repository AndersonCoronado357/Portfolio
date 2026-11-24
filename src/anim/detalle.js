/*
 * Animacion de la landing de proyecto.
 *
 * El sistema de anim/contenido.js va atado al progreso del scroll entre vistas
 * del lienzo escalado; aqui el scroll es otro. Este modulo repite la misma
 * curva y el mismo criterio, disparado por la entrada de cada seccion.
 */

const clamp = (v, a, b) => Math.min(Math.max(v, a), b)
// smootherstep, la misma de anim/contenido.js
const ss = (v) => v * v * v * (v * (v * 6 - 15) + 10)

function pintar(el, e) {
  const a = ss(clamp(e, 0, 1))
  const off = 1 - a
  const tipo = el.dataset.anim || 'sube'

  if (tipo === 'clip') {
    // Titulos: se descubren de abajo arriba, sin moverse de sitio.
    el.style.opacity = '1'
    el.style.clipPath = `inset(0 0 ${off * 105}% 0)`
    el.style.transform = `translate(0, ${off * 12}px)`
    return
  }
  el.style.opacity = String(a)
  el.style.transform = `translate(0, ${off * 22}px)`
}

function limpiar(el) {
  el.style.clipPath = ''
  el.style.transform = ''
  el.style.opacity = ''
}

export function animarDetalle(raiz) {
  if (!raiz) return { destruir() {}, salir: () => Promise.resolve() }

  const elementos = [...raiz.querySelectorAll('[data-anim]')]
  const estado = new Map()
  for (const el of elementos) {
    estado.set(el, { corriendo: false, hecho: false })
    pintar(el, 0)
  }

  const correr = (el) => {
    const s = estado.get(el)
    if (!s || s.corriendo || s.hecho) return
    s.corriendo = true
    const t0 = performance.now() + Number(el.dataset.delay || 0)
    const dur = 640
    const paso = (t) => {
      const e = (t - t0) / dur
      if (e < 0) return requestAnimationFrame(paso)
      if (e >= 1) {
        s.hecho = true
        s.corriendo = false
        // Se sueltan los estilos: si el elemento se queda con transform, sus
        // hijos posicionados quedan referidos a el y el sticky deja de pegar.
        limpiar(el)
        return
      }
      pintar(el, e)
      requestAnimationFrame(paso)
    }
    requestAnimationFrame(paso)
  }

  // OJO: se observa la SECCION, no cada elemento.
  //
  // Los titulos arrancan con `clip-path` a cero, o sea con area visible cero, y
  // IntersectionObserver tiene en cuenta el recorte: un elemento asi nunca
  // cuenta como visible, no se animaba jamas y se quedaba invisible para
  // siempre. La seccion no lleva recorte, asi que si avisa.
  const grupos = new Map()
  for (const el of elementos) {
    const sec = el.closest('section') || raiz
    if (!grupos.has(sec)) grupos.set(sec, [])
    grupos.get(sec).push(el)
  }

  const arrancar = (sec) => {
    const hijos = grupos.get(sec)
    if (!hijos) return
    hijos.forEach((el, i) => {
      if (!el.dataset.delay) el.dataset.delay = String(Math.min(i, 8) * 50)
      correr(el)
    })
  }

  // Entrada de la pagina entera: sube desde abajo, el gesto inverso al de
  // salir. Al terminar se sueltan los estilos, porque un transform vivo en la
  // raiz le rompe el marco de referencia a lo que lleve sticky o fixed dentro.
  {
    const t0 = performance.now()
    const dur = 520
    raiz.style.transformOrigin = '50% 100%'
    raiz.style.willChange = 'transform, opacity'
    raiz.style.opacity = '0'
    raiz.style.transform = 'translateY(7vh) scale(0.965)'
    const paso = (t) => {
      const e = clamp((t - t0) / dur, 0, 1)
      const a = ss(e)
      if (e >= 1) {
        raiz.style.transform = ''
        raiz.style.opacity = ''
        raiz.style.willChange = ''
        raiz.style.transformOrigin = ''
        return
      }
      raiz.style.opacity = String(a)
      raiz.style.transform = `translateY(${(1 - a) * 7}vh) scale(${0.965 + a * 0.035})`
      requestAnimationFrame(paso)
    }
    requestAnimationFrame(paso)
  }

  const alto = raiz.clientHeight || window.innerHeight
  const observador = new IntersectionObserver(
    (entradas) => {
      for (const en of entradas) {
        if (en.isIntersecting) {
          arrancar(en.target)
          observador.unobserve(en.target)
        }
      }
    },
    { root: raiz, rootMargin: '0px 0px -12% 0px', threshold: 0.02 },
  )

  for (const sec of grupos.keys()) {
    // Lo que ya se ve al abrir arranca de una: con el contenedor recien
    // montado, el primer aviso del observador no siempre llega.
    if (sec.getBoundingClientRect().top < alto * 0.95) arrancar(sec)
    else observador.observe(sec)
  }

  return {
    destruir() {
      observador.disconnect()
      for (const el of elementos) limpiar(el)
    },
    // Salida: la pagina entera se va hacia abajo encogiendose, para que se
    // vea que se cierra y que debajo estaba el portafolio.
    salir() {
      observador.disconnect()
      for (const el of elementos) limpiar(el)
      return new Promise((listo) => {
        const t0 = performance.now()
        const dur = 420
        raiz.style.transformOrigin = '50% 0%'
        raiz.style.willChange = 'transform, opacity'
        const paso = (t) => {
          const e = clamp((t - t0) / dur, 0, 1)
          const a = ss(e)
          raiz.style.opacity = String(1 - a)
          raiz.style.transform = `translateY(${a * 9}vh) scale(${1 - a * 0.05})`
          if (e >= 1) listo()
          else requestAnimationFrame(paso)
        }
        requestAnimationFrame(paso)
      })
    },
  }
}
