import * as base from './portafolio'

// Contenido del sitio. Fuente de verdad UNICA: portafolio.js.
//
// Todo va quemado en codigo a proposito. No hay fetch, ni cache, ni backend:
// el sitio se pinta al instante, se ve igual en todos los navegadores y no
// hay nada que se pueda caer justo cuando alguien abre el link. Para cambiar
// cualquier texto se edita portafolio.js y se vuelve a desplegar.

const CONTENIDO = {
  TEXTOS: base.TEXTOS,
  PROYECTOS: base.PROYECTOS,
  EXPERIENCIA: base.EXPERIENCIA,
  TECNOLOGIAS: base.TECNOLOGIAS,
  CARRERA: base.CARRERA,
  CURSOS: base.CURSOS,
  HABILIDADES: base.HABILIDADES,
  REDES: base.REDES,
  CONTACTO: base.CONTACTO,
}

// Se mantiene como hook para no tocar las vistas, pero ya no hay estado que
// suscribir: el contenido es constante durante toda la vida de la pagina.
export function useContenido() {
  return CONTENIDO
}
