// Escribir un estilo cuesta aunque el valor sea el mismo: el navegador vuelve
// a leer el texto y, si algo cambio, recalcula ese elemento. En el recorrido
// se escriben cientos de estilos por cuadro y muchos no cambian (el z-index,
// el color cuando no hay cambio de color, las piezas ya quietas, las fotos
// lejanas). Esto recuerda lo ultimo que se escribio en cada elemento y solo
// toca el DOM cuando el valor es otro. Lo que se ve es exactamente lo mismo.
//
// Solo vale si TODO lo que escribe esa propiedad en ese elemento pasa por aqui.

export function poner(el, prop, valor) {
  const c = el.__est || (el.__est = {})
  if (c[prop] === valor) return
  c[prop] = valor
  el.style[prop] = valor
}

export function ponerAttr(el, nombre, valor) {
  const c = el.__attr || (el.__attr = {})
  if (c[nombre] === valor) return
  c[nombre] = valor
  el.setAttribute(nombre, valor)
}
