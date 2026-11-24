// Ritmo de scroll: el mismo gesto mueve siempre lo mismo en pantalla, este
// donde este.
//
// En una vista normal, una unidad de progreso desliza la vista una pantalla
// entera (su alto). Dentro de Tecnologias y Cursos lo que se mueve es la
// lista, y una unidad de progreso la recorre de punta a punta, mida lo que
// mida. Si el progreso avanzara igual ahi, la lista iria a otra velocidad que
// el resto de la pagina: Tecnologias (lista larga) iba casi al doble, Cursos
// (lista corta) a menos de la mitad.
//
// Cada lista se registra como una "zona" con su recorrido real. Dentro de la
// zona el progreso avanza en la proporcion justa para que la lista se mueva
// lo mismo que se desliza una vista: la vista sube, llega, y la lista sigue
// subiendo a la misma velocidad, sin frenazos ni acelerones en el borde.

const zonas = new Map()

export function registrarZona(id, z) {
  zonas.set(id, z)
}

// Progreso por cada unidad de gesto dentro de la zona.
function gananciaZona(z) {
  const recorrido = z.px()
  const alto = z.alto()
  if (!(alto > 0)) return 1
  // Si la lista cabe entera no hay nada que recorrer: se cruza rapido.
  if (!(recorrido > 1)) return 10
  return Math.min(10, Math.max(0.02, ((z.b - z.a) * alto) / recorrido))
}

// Zona en la que esta p yendo en el sentido s. En el borde cuenta el lado
// hacia el que se va: desde el principio de la lista hacia adelante ya se
// esta dentro; hacia atras, fuera.
function zonaEn(p, s) {
  for (const z of zonas.values()) {
    if (s > 0 ? p >= z.a && p < z.b : p > z.a && p <= z.b) return z
  }
  return null
}

// Proximo borde de zona estrictamente delante de p en el sentido s.
function bordeDelante(p, s) {
  let mejor = null
  for (const z of zonas.values()) {
    for (const x of [z.a, z.b]) {
      if ((x - p) * s > 1e-9 && (mejor === null || (x - mejor) * s < 0)) mejor = x
    }
  }
  return mejor
}

// Avanza el progreso p con un gesto d (en unidades de vista normal). Un
// gesto que cruza el borde de una lista se reparte: la parte de fuera mueve
// la vista y la de dentro mueve la lista, cada una a su ritmo.
export function avanzar(p, d) {
  if (!d) return p
  const s = d > 0 ? 1 : -1
  let q = p
  let resto = Math.abs(d)
  for (let k = 0; k < 8 && resto > 1e-12; k++) {
    const z = zonaEn(q, s)
    const g = z ? gananciaZona(z) : 1
    const borde = bordeDelante(q, s)
    const paso = resto * g
    if (borde === null || paso <= Math.abs(borde - q)) {
      q += paso * s
      resto = 0
    } else {
      resto -= Math.abs(borde - q) / g
      q = borde
    }
  }
  return q
}
