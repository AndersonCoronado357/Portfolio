import { useState, useEffect } from 'react'
import { cargarFuentes } from '../lib/estetica'
import { PROY_COLORS } from '../anim/circulos'
import { GALERIA_IDS, DESTACADOS_N } from '../lib/views'
import { useEsMobile } from '../lib/dispositivo'
import { useContenido } from '../data/store'
import { useTema } from '../lib/tema'
import { Btn } from '../components/shared'

// De cada app hay dos capturas, una por tema, para que la maqueta no chirrie
// contra el fondo del portafolio cuando se cambia de claro a oscuro.
//
// Las dos van SIEMPRE montadas y lo unico que cambia es la opacidad. Cambiar
// el `src` obligaba al navegador a bajar y descodificar las 22 imagenes justo
// durante la animacion del tema, y se trababa entera.
function captura(dato, vista, tema) {
  if (!dato.captura) return null
  // `version` obliga a bajar la imagen nueva cuando se rehace una captura:
  // Cloudflare guarda la anterior unas horas con la misma direccion.
  const v = dato.version ? `?v=${dato.version}` : ''
  return `/capturas/${dato.captura}-${vista}-${tema}.jpg${v}`
}

// Aqui hubo una precarga que descodificaba las 44 capturas seguidas al poco
// de cargar. Se quito: en un video del arranque se veia que congelaba la
// pagina 0,5 s y 1 s justo cuando ya estaba pintada y quieta. Ahora cada
// vista descodifica sus capturas cuando se acerca (prepararImagenes en
// App.jsx), y las capturas se pintan con `decoding="sync"`: con "async" el
// telefono podia pintar la maqueta vacia y poner la captura un cuadro
// despues, y eso se veia como un parpadeo al pasar de un proyecto a otro.

// Un icono puede venir de dos formas: completo, con su propio cuadro de
// fondo y esquinas (Hibi, Vexcel, Grabber), o solo el glifo transparente.
// Los completos ocupan TODO el recuadro; ponerles una placa detras deja un
// cuadro dentro de otro. Se marca con `logoLleno` en portafolio.js.

// Dentro de las maquetas va la captura real de la app publicada.
//
// `isla` reserva arriba el alto de la muesca de la camara, y esa franja se
// pinta con el color que tiene la propia captura en su borde superior: asi
// se funde con el encabezado de la app en vez de quedar una barra negra.
const cacheTono = new Map()

// Devuelve SIEMPRE el color que corresponde al `src` de ahora. Antes guardaba
// el color en un estado y, si el nuevo src ya estaba en la cache, el efecto
// salia sin tocarlo: la franja de la camara se quedaba con el color del tema
// anterior al cambiar de claro a oscuro y al reves. Ahora el valor se lee de
// la cache en cada render y el estado solo sirve para repintar cuando termina
// de medirse una imagen nueva.
function useTonoSuperior(src) {
  const [, repintar] = useState(0)
  useEffect(() => {
    if (!src || cacheTono.has(src)) return
    const img = new Image()
    img.onload = () => {
      try {
        const c = document.createElement('canvas')
        c.width = 24
        c.height = 1
        const ctx = c.getContext('2d')
        // Solo la primerisima franja de la captura REAL (unos 6 px), no la
        // imagen entera encogida: si se escala todo a 24x24, la fila de arriba
        // ya trae mezclado contenido de mucho mas abajo y sale un color que no
        // existe en la app (a Dbridge le salia rosa sobre un fondo negro).
        const franja = Math.max(1, Math.round(img.naturalHeight * 0.007))
        ctx.drawImage(img, 0, 0, img.naturalWidth, franja, 0, 0, 24, 1)
        const d = ctx.getImageData(0, 0, 24, 1).data
        let r = 0, g = 0, b = 0
        for (let x = 0; x < 24; x++) {
          r += d[x * 4]; g += d[x * 4 + 1]; b += d[x * 4 + 2]
        }
        const v = `rgb(${Math.round(r / 24)},${Math.round(g / 24)},${Math.round(b / 24)})`
        cacheTono.set(src, v)
        repintar((n) => n + 1)
      } catch {
        /* sin color: se queda con el fondo del lienzo */
      }
    }
    img.src = src
  }, [src])
  return (src && cacheTono.get(src)) || null
}

// Barra de estado falsa, como la que tapa el sistema operativo en un celular
// real: hora a la izquierda, senal, wifi y bateria a la derecha, y la camara
// como una perforacion en el centro. Va del color del encabezado de la app,
// con el contenido en claro u oscuro segun ese fondo.
function BarraEstado({ alto, tono }) {
  const rgb = tono ? tono.match(/\d+/g).map(Number) : [255, 255, 255]
  const luz = (rgb[0] * 0.299 + rgb[1] * 0.587 + rgb[2] * 0.114) / 255
  const tinta = luz < 0.5 ? '#ffffff' : '#0d0d0d'
  const f = alto / 34 // escala respecto al tamano de referencia

  return (
    <div className="absolute inset-x-0 top-0 z-3 flex items-center justify-between" style={{ height: alto, paddingInline: alto * 0.62 }}>
      <span style={{ color: tinta, fontSize: 11 * f, fontWeight: 700, letterSpacing: '-0.01em' }}>9:41</span>

      {/* camara: un punto, no una isla */}
      <span className="absolute left-1/2 -translate-x-1/2 rounded-full" style={{ width: 6.5 * f, height: 6.5 * f, background: '#07070a' }} />

      <span className="flex items-center" style={{ gap: 3.5 * f, color: tinta }}>
        <svg viewBox="0 0 18 12" style={{ width: 12 * f, height: 8 * f }} fill="currentColor">
          <rect x="0" y="8" width="3" height="4" rx="0.7" />
          <rect x="5" y="5.5" width="3" height="6.5" rx="0.7" />
          <rect x="10" y="3" width="3" height="9" rx="0.7" />
          <rect x="15" y="0" width="3" height="12" rx="0.7" opacity="0.4" />
        </svg>
        <svg viewBox="0 0 16 12" style={{ width: 11 * f, height: 8 * f }} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
          <path d="M1 4.2a10 10 0 0 1 14 0" />
          <path d="M3.8 7.1a6 6 0 0 1 8.4 0" />
          <circle cx="8" cy="10" r="0.9" fill="currentColor" stroke="none" />
        </svg>
        <svg viewBox="0 0 26 12" style={{ width: 15 * f, height: 7 * f }} fill="none">
          <rect x="0.7" y="0.7" width="21" height="10.6" rx="3" stroke="currentColor" strokeWidth="1.3" opacity="0.55" />
          <rect x="2.4" y="2.4" width="17.6" height="7.2" rx="1.8" fill="currentColor" />
          <path d="M23.6 4.2v3.6a2 2 0 0 0 0-3.6z" fill="currentColor" opacity="0.55" />
        </svg>
      </span>
    </div>
  )
}

// Una sola imagen por maqueta, la del tema puesto. Antes se montaban las dos
// y se cruzaban por CSS, pero eso hacia que el navegador se bajara y
// descodificara 52 capturas al arrancar cuando solo 26 se llegan a ver: la
// mitad del trabajo era para nada, y se notaba al cargar y al entrar a
// Proyectos. Cambiar de tema es algo puntual y ahi si vale pagar el cambio.
export function Pantalla({ radius, dato, vista, isla = 0 }) {
  const tema = useTema()
  const src = captura(dato, vista, tema === 'dark' ? 'oscuro' : 'claro')
  const tono = useTonoSuperior(src)

  // El fondo va del color de la propia captura, no del lienzo del portafolio:
  // si no, en las esquinas redondeadas asoma una linea blanca por debajo.
  return (
    <div className="relative h-full w-full overflow-hidden" style={{ borderRadius: radius, background: tono || 'var(--color-lienzo)' }}>
      {src && (
        <>
          {/* La franja de la camara va del color que tiene la captura en su
              borde de arriba. */}
          <span className="absolute inset-x-0 top-0 z-1" style={{ height: isla, background: tono || undefined }} />
          <img
            src={src}
            alt=""
            decoding="sync"
            fetchPriority="low"
            className="absolute inset-0 w-full select-none object-cover object-top"
            style={{ top: isla, height: `calc(100% - ${isla}px)` }}
          />
        </>
      )}
      {isla > 0 && <BarraEstado alto={isla} tono={tono} />}
    </div>
  )
}

function CuerpoMobile({ dato, T, onDetalle }) {
  const conFondo = !!dato.logoLleno
  return (
    <>
      <span
        data-anim="brota"
        className="absolute grid -translate-x-1/2 place-items-center overflow-hidden"
        style={{
          left: '50%',
          top: '9%',
          width: '140px',
          height: '140px',
          borderRadius: 28,
          background: !dato.logo ? 'var(--proy)' : conFondo ? 'transparent' : 'var(--color-superficie)',
        }}
      >
        {dato.logo && (
          <img
            src={dato.logo}
            alt=""
            className="select-none"
            style={
              conFondo
                ? { width: '100%', height: '100%', objectFit: 'cover' }
                : { width: '66%', height: '66%', objectFit: 'contain' }
            }
          />
        )}
      </span>
      <h2 data-anim="clip" className="absolute w-full text-center font-display" style={{ left: 0, top: '18%', fontSize: '60px', lineHeight: 1.05 }}>
        {dato.nombre}
      </h2>
      {dato.enDesarrollo && (
        <div data-anim="pinta" data-delay="120" className="absolute flex w-full justify-center" style={{ left: 0, top: '23.2%' }}>
          <Etiqueta grande />
        </div>
      )}

      <div className="absolute flex flex-col items-center" style={{ left: '7%', top: '25%', width: '86%' }}>
        <div className="flex w-full flex-wrap justify-center" style={{ gap: '14px' }}>
          {dato.stack.map((s, i) => (
            <span
              key={i}
              data-anim="pinta"
              data-delay={60 + i * 40}
              className="font-accent grid place-items-center rounded-full font-extrabold uppercase whitespace-nowrap"
              style={{ width: '42%', height: '62px', fontSize: '28px', background: 'var(--proy)', color: 'var(--proy-ink)' }}
            >
              {s}
            </span>
          ))}
        </div>

        <p data-anim="pinta" data-delay="220" className="text-center" style={{ fontSize: '24px', fontWeight: 600, lineHeight: 1.4, marginTop: '34px' }}>
          {dato.descripcion}
        </p>

        <p data-anim="pinta" data-delay="300" className="text-center" style={{ fontSize: '21px', fontWeight: 500, lineHeight: 1.5, marginTop: '20px' }}>
          {dato.arquitectura}
        </p>

        <Btn data-anim="pinta" data-delay="380" onClick={() => onDetalle(dato)} onPointerEnter={() => cargarFuentes(dato.estetica?.google)} className="grid place-items-center" style={{ marginTop: '30px', height: '62px', paddingInline: '46px', fontSize: '24px', background: 'var(--proy)', color: 'var(--proy-ink)' }}>
          {T.conocerMas}
        </Btn>
      </div>

      <a data-anim="nave" href={dato.url} target="_blank" rel="noreferrer" className="absolute block" style={{ left: '6%', top: '61%', width: '60%' }}>
        <div
          data-anim="abre"
          data-delay="120"
          className="relative"
          style={{ borderRadius: '15px 15px 0 0', background: '#0c0c0f', padding: '11px 11px 13px', boxShadow: '0 34px 90px rgba(0,0,0,0.28)' }}
        >
          <span className="absolute top-[5px] left-1/2 z-2 h-[5px] w-[5px] -translate-x-1/2 rounded-full" style={{ background: '#2e2e33' }} />
          {/* La proporcion va en la pantalla, no en el marco: si se la pones
              al marco, el borde le roba unos pixeles al hueco de dentro y la
              captura (que es 16/10 exacto) se recorta por abajo. */}
          <div style={{ aspectRatio: '16 / 10' }}>
            <Pantalla radius="9px" dato={dato} vista="pc" />
          </div>
        </div>
        <div className="relative" style={{ marginLeft: '-8%', marginRight: '-8%', height: '16px', borderRadius: '3px 3px 14px 14px', background: 'linear-gradient(#2a2a30,#131316)' }}>
          <span className="absolute top-0 left-1/2 h-[6px] w-[26%] -translate-x-1/2 rounded-b-[8px]" style={{ background: '#0c0c0f' }} />
        </div>
      </a>

      <div data-anim="nave" className="absolute" style={{ left: '58%', top: '56%', width: '30%' }}>
        <div
          data-anim="abre"
          data-delay="220"
          className="relative"
          style={{ aspectRatio: '9 / 19', borderRadius: '32px', background: '#0c0c0f', padding: '7px', boxShadow: '0 30px 70px rgba(0,0,0,0.3)' }}
        >
          <Pantalla radius="26px" isla={30} dato={dato} vista="movil" />
        </div>
      </div>
    </>
  )
}

// Marca los proyectos que todavia no estan terminados. Sale del campo
// `enDesarrollo` de la ficha; sin el no se pinta nada.
function Etiqueta({ grande = false }) {
  return (
    <span
      className="font-accent shrink-0 uppercase"
      style={{
        padding: grande ? '7px 20px' : '5px 13px',
        borderRadius: '0 12px 0 12px',
        background: 'var(--proy)',
        color: 'var(--proy-ink)',
        fontSize: grande ? '22px' : '14px',
        fontWeight: 800,
        letterSpacing: '0.02em',
        whiteSpace: 'nowrap',
      }}
    >
      En desarrollo
    </span>
  )
}

function Cuerpo({ flip, dato, T, onDetalle }) {
  const conFondo = !!dato.logoLleno
  const tema = useTema()
  const TX = flip ? 48 : 0
  const lapL = flip ? '9%' : '50%'
  const phoneL = flip ? '3%' : '82.5%'

  return (
    <>
      {/* Logo y nombre en la misma fila con items-center: antes cada uno
          tenia su propio top y no quedaban a la misma altura. Todos los
          logos son transparentes, asi que van sobre una placa clara. */}
      <div className="absolute flex items-center" style={{ left: `${6.61 + TX}%`, top: '35.4%', gap: '16px' }}>
        <span
          data-anim="brota"
          className="grid shrink-0 place-items-center overflow-hidden"
          style={{
            width: '112px',
            height: '112px',
            borderRadius: 22,
            background: !dato.logo ? 'var(--proy)' : conFondo ? 'transparent' : 'var(--color-superficie)',
          }}
        >
          {dato.logo && (
            <img
              src={dato.logo}
              alt=""
              className="select-none"
              style={
                conFondo
                  ? { width: '100%', height: '100%', objectFit: 'cover' }
                  : { width: '66%', height: '66%', objectFit: 'contain' }
              }
            />
          )}
        </span>
        <h2 data-anim="clip" className="font-display" style={{ fontSize: '40px', lineHeight: 1.2 }}>
          {dato.nombre}
        </h2>
        {dato.enDesarrollo && <Etiqueta />}
      </div>

      {/* Stack, textos y boton en UN bloque que fluye: antes cada uno tenia su
          top fijo y quedaba un hueco muerto enorme entre la descripcion y la
          arquitectura, ademas de riesgo de encimarse si el texto crecia. */}
      <div className="absolute flex flex-col items-start" style={{ left: `${6.61 + TX}%`, top: '47.69%', width: '38.96%' }}>
        <div className="flex" style={{ gap: '14px' }}>
          {dato.stack.map((s, i) => (
            <span
              key={i}
              data-anim="pinta"
              className="font-accent grid place-items-center rounded-full font-extrabold uppercase whitespace-nowrap"
              style={{ width: '180px', height: '39px', fontSize: '15px', background: 'var(--proy)', color: 'var(--proy-ink)' }}
            >
              {s}
            </span>
          ))}
        </div>

        <p data-anim="pinta" style={{ fontSize: '19px', fontWeight: 600, lineHeight: 1.45, marginTop: '24px' }}>
          {dato.descripcion}
        </p>

        <p data-anim="pinta" style={{ fontSize: '16px', fontWeight: 500, lineHeight: 1.55, marginTop: '16px' }}>
          {dato.arquitectura}
        </p>

        <Btn data-anim="pinta" onClick={() => onDetalle(dato)} onPointerEnter={() => cargarFuentes(dato.estetica?.google)} className="grid place-items-center" style={{ marginTop: '26px', height: '43px', paddingInline: '32px', fontSize: '16px', background: 'var(--proy)', color: 'var(--proy-ink)' }}>
          {T.conocerMas}
        </Btn>
      </div>

      <a data-anim="nave" href={dato.url} target="_blank" rel="noreferrer" className="group absolute block cursor-pointer" style={{ left: lapL, top: '27%', width: '790px' }}>
        <div
          data-anim="abre"
          className="relative"
          style={{ borderRadius: '20px 20px 0 0', background: '#0c0c0f', padding: '12px 12px 14px', boxShadow: '0 34px 90px rgba(0,0,0,0.28)' }}
        >
          <span className="absolute top-[5px] left-1/2 z-2 h-[5px] w-[5px] -translate-x-1/2 rounded-full" style={{ background: '#2e2e33' }} />
          {/* 16/10 en el hueco, igual que la captura, para que no se recorte. */}
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16 / 10', borderRadius: '9px' }}>
            {dato.captura && (
              <>
                <img src={captura(dato, 'pc', tema === 'dark' ? 'oscuro' : 'claro')} alt="" decoding="sync" fetchPriority="low" className="absolute inset-0 h-full w-full select-none object-cover object-top" />
              </>
            )}
            <span className="pointer-events-none absolute bottom-0 left-1/2 aspect-square w-[175%] -translate-x-1/2 translate-y-[80%] scale-[0.55] rounded-full opacity-0 transition-all duration-[650ms] ease-out group-hover:translate-y-[16%] group-hover:scale-100 group-hover:opacity-100" style={{ background: 'var(--proy)' }} />
            <span className="absolute inset-0 z-2 grid place-items-center opacity-0 transition-opacity duration-[450ms] group-hover:opacity-100">
              <span className="font-display uppercase" style={{ fontSize: '34px', color: 'var(--proy-ink)' }}>Ver app ↗</span>
            </span>
          </div>
        </div>
        <div className="relative mx-[-42px]" style={{ height: '17px', borderRadius: '3px 3px 16px 16px', background: 'linear-gradient(#2a2a30,#131316)' }}>
          <span className="absolute top-0 left-1/2 h-[7px] w-[130px] -translate-x-1/2 rounded-b-[8px]" style={{ background: '#0c0c0f' }} />
        </div>
      </a>

      <div
        data-anim="nave"
        className="absolute"
        style={{ left: phoneL, top: '37%', width: '252px', height: '524px', borderRadius: '36px', background: '#0c0c0f', padding: '9px', boxShadow: '0 30px 70px rgba(0,0,0,0.3)' }}
      >
        <div className="relative h-full w-full">
          <Pantalla radius="28px" isla={34} dato={dato} vista="movil" />
        </div>
      </div>
    </>
  )
}

function Proyecto({ id, flip, dato, onDetalle }) {
  const mobile = useEsMobile()
  const T = useContenido().TEXTOS.proyectos
  const c = PROY_COLORS[id] || [229, 184, 11]
  // Cada app trae su propio color de marca y algunos son oscuros (Acmsy es
  // violeta, Gestion azul petroleo). Se mide la luminancia y se decide si lo
  // que va encima se escribe en claro o en oscuro, en vez de fijarlo a mano.
  const luz = (c[0] * 0.299 + c[1] * 0.587 + c[2] * 0.114) / 255
  const claro = luz < 0.5
  const sobreProy = claro ? '#ffffff' : '#0d0d0d'
  const filtroLogo = claro ? 'brightness(0) invert(1)' : 'brightness(0)'
  return (
    <section
      id={id}
      className="view"
      style={{ '--proy': `rgb(${c[0]},${c[1]},${c[2]})`, '--proy-ink': sobreProy, '--proy-filtro': filtroLogo }}
    >
      {mobile ? <CuerpoMobile dato={dato} T={T} onDetalle={onDetalle} /> : <Cuerpo flip={flip} dato={dato} T={T} onDetalle={onDetalle} />}
    </section>
  )
}

function VerMas({ onVerMas }) {
  const mobile = useEsMobile()
  const T = useContenido().TEXTOS.proyectos
  return (
    <section id="proyectos-mas" className="view">
      <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center" style={{ width: mobile ? '86%' : '760px' }}>
        <p data-anim="pinta" className="font-extrabold uppercase text-amber" style={{ fontSize: mobile ? '26px' : '16px', letterSpacing: '0.3em' }}>
          {T.eyebrow}
        </p>
        <h2 data-anim="clip" data-delay="70" className="text-center font-display" style={{ fontSize: mobile ? '78px' : '52px', lineHeight: 1.05, marginTop: mobile ? '16px' : '10px' }}>
          {T.verMasTitulo}
        </h2>

        <button onClick={onVerMas} className="group relative block cursor-pointer" style={{ marginTop: mobile ? '70px' : '42px', width: mobile ? '92%' : '560px' }}>
          <div
            data-anim="abre"
            className="relative"
            style={{ aspectRatio: mobile ? '16 / 10' : undefined, height: mobile ? undefined : '340px', borderRadius: '18px 18px 0 0', background: '#0c0c0f', padding: '14px 14px 16px', boxShadow: '0 34px 90px rgba(0,0,0,0.3)' }}
          >
            <span className="absolute top-[5px] left-1/2 z-2 h-[5px] w-[5px] -translate-x-1/2 rounded-full" style={{ background: '#2e2e33' }} />
            <div className="relative h-full w-full overflow-hidden bg-lienzo" style={{ borderRadius: '9px' }}>
              <span className="pointer-events-none absolute bottom-0 left-1/2 aspect-square w-[175%] -translate-x-1/2 translate-y-[80%] scale-[0.55] rounded-full bg-amber opacity-0 transition-all duration-[650ms] ease-out group-hover:translate-y-[16%] group-hover:scale-100 group-hover:opacity-100" />
              <span className="absolute inset-0 grid place-items-center">
                <span className="font-display uppercase text-ink" style={{ fontSize: mobile ? '48px' : '30px' }}>
                  {T.verMasBoton}
                </span>
              </span>
            </div>
          </div>
          <div className="relative" style={{ marginInline: mobile ? '-8%' : '-32px', height: mobile ? '20px' : '16px', borderRadius: '3px 3px 16px 16px', background: 'linear-gradient(#2a2a30,#131316)' }}>
            <span className="absolute top-0 left-1/2 h-[7px] -translate-x-1/2 rounded-b-[8px]" style={{ width: mobile ? '24%' : '110px', background: '#0c0c0f' }} />
          </div>
        </button>

        <span className="font-accent font-extrabold uppercase text-ink" style={{ marginTop: mobile ? '40px' : '26px', fontSize: mobile ? '26px' : '16px', letterSpacing: '0.06em' }}>
          {T.verMasPie}
        </span>
      </div>
    </section>
  )
}

// "Ver todos" empieza en el proyecto 6: los cinco primeros ya salieron en el
// recorrido principal y repetirlos no aporta nada.
export function GaleriaProyectos({ onDetalle }) {
  const { PROYECTOS } = useContenido()
  return (
    <>
      {GALERIA_IDS.map((id, i) => (
        <Proyecto key={id} id={id} flip={i % 2 === 1} dato={PROYECTOS[i + DESTACADOS_N]} onDetalle={onDetalle} />
      ))}
    </>
  )
}

const DESTACADOS = ['proyectos', 'proyectos-2', 'proyectos-3', 'proyectos-4', 'proyectos-5']

export default function Proyectos({ onVerMas, onDetalle }) {
  const { PROYECTOS } = useContenido()
  return (
    <>
      {DESTACADOS.map((id, i) => (
        <Proyecto key={id} id={id} flip={i % 2 === 1} dato={PROYECTOS[i]} onDetalle={onDetalle} />
      ))}
      <VerMas onVerMas={onVerMas} />
    </>
  )
}
