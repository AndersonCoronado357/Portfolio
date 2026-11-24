// Mezcla de dos colores: en linea recta, canal por canal, igual que siempre.
//
// Se probaron otros caminos y los dos estaban mal: en OKLab la masa se ponia
// blancuzca a mitad del cambio (del ambar al morado de Acmsy), y en OKLCH
// pasaba por naranja y rojo, colores que no son de ninguna de las dos vistas.
export function mezclarColor(c1, c2, t) {
  if (t <= 0) return c1
  if (t >= 1) return c2
  return [
    Math.round(c1[0] + (c2[0] - c1[0]) * t),
    Math.round(c1[1] + (c2[1] - c1[1]) * t),
    Math.round(c1[2] + (c2[2] - c1[2]) * t),
  ]
}
