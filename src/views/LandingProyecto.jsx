import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { MaquetaApp } from '../components/MaquetaApp'
import { cargarFuentes, variables } from '../lib/estetica'
import { animarDetalle } from '../anim/detalle'
import { useTema } from '../lib/tema'
import { useEsMobile } from '../lib/dispositivo'

/*
 * Landing de un proyecto: la que abre el boton "Conocer mas".
 *
 * Va FUERA del lienzo escalado del portafolio: el resto del sitio vive en un
 * marco de 1920x1080 con `scale` porque cada vista cabe justo en una pantalla,
 * y aqui hay una pagina con scroll propio. Mientras esta abierta, el motor de
 * scroll del portafolio se queda quieto (App.jsx mira `detalleRef`).
 *
 * SINTETIZADA, y esa es la regla que manda. Lo que se enseña:
 *   - que es y con que esta hecho (el stack, en grande),
 *   - la app funcionando,
 *   - que areas cubre, con su peso en numero de funciones,
 *   - las piezas que la mueven,
 *   - las decisiones que la hacen interesante.
 * Nada de volcar las 99 funciones ni una ficha tecnica: eso es una biblia que
 * nadie lee. El detalle fino esta en la app y en el repositorio.
 *
 * Del portafolio hereda los gestos —rotulo en versalitas espaciadas, titulo
 * que manda por tamano, esquina cortada en los botones, boton de tema abajo a
 * la izquierda— y el claro/oscuro. El color y la tipografia son los de LA APP.
 *
 * Las maquetas son LAS DEL SITIO (components/MaquetaApp).
 */

const T = {
  display: 'clamp(29px, 3.4vw, 58px)',
  titulo: 'clamp(22px, 2.2vw, 40px)',
  sub: 'clamp(17px, 1.45vw, 26px)',
  rotulo: 'clamp(15px, 1.1vw, 20px)',
  cuerpo: 'clamp(14px, 0.9vw, 16px)',
  chico: 'clamp(12px, 0.8vw, 14px)',
}

const MARGEN = 'clamp(26px, 6vw, 110px)'
// La misma transicion del interruptor de tema del portafolio.
const TRANS_TEMA = 'transform 0.6s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.5s ease'

function Bloque({ children, primera = false, mobile = false }) {
  return (
    <section
      style={{
        padding: `${primera ? 'clamp(26px, 2.5vw, 44px)' : 'clamp(58px, 8vw, 130px)'} ${MARGEN} ${primera ? 'clamp(40px, 4vw, 60px)' : 'clamp(58px, 8vw, 130px)'}`,
        overflow: 'hidden',
        // La portada ocupa la pantalla completa —descontando la barra— y su
        // contenido va centrado; si no, se cortaba y asomaba la seccion de
        // abajo antes de tiempo.
        ...(primera && !mobile ? { minHeight: 'calc(100svh - 62px)', display: 'grid', alignContent: 'center' } : null),
      }}
    >
      {children}
    </section>
  )
}

// Titulo a la izquierda y contenido a la derecha: asi no queda medio ancho
// vacio, que es lo que pasa con una columna de texto sola.
//
// El titulo va solo. Antes llevaba encima un rotulo diminuto en monoespaciada
// —ese "eyebrow" que sale en cualquier plantilla— y no aportaba nada; el dato
// que si importa (cuantas funciones, cuantas decisiones) va ahora al lado del
// titulo, en el color de la app y a un tamano que se lee.
function Seccion({ titulo, dato, children, mobile }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: mobile ? 'minmax(0, 1fr)' : 'minmax(230px, 0.6fr) minmax(0, 1.4fr)',
        gap: mobile ? '26px' : 'clamp(30px, 5vw, 90px)',
        alignItems: mobile ? 'start' : 'center',
      }}
    >
      <div>
        {/* La marca de color que se repite en toda la pagina. En telefono va
            corta: a lo ancho partia el bloque del titulo en dos. */}
        <span
          data-anim="sube"
          style={{
            display: 'block',
            width: mobile ? '34px' : 'clamp(38px, 4vw, 62px)',
            height: mobile ? '4px' : '5px',
            borderRadius: '3px',
            background: 'var(--app-acento)',
            marginBottom: mobile ? '13px' : '18px',
          }}
        />
        <h2
          data-anim="clip"
          style={{ fontFamily: 'var(--app-titulo)', fontSize: T.titulo, fontWeight: 700, lineHeight: 1, letterSpacing: '-0.03em' }}
        >
          {titulo}
        </h2>
        {dato && (
          <span
            data-anim="sube"
            data-delay="80"
            style={{ display: 'block', marginTop: '12px', fontSize: T.rotulo, fontWeight: 700, color: 'var(--app-acento-texto)' }}
          >
            {dato}
          </span>
        )}
      </div>
      <div>{children}</div>
    </div>
  )
}

// `chico` es el de la barra de arriba: ahi el boton grande pesaba mas que el
// propio contenido de la pagina.
function Boton({ children, href, onClick, suave = false, atras = false }) {
  const clases = 'inline-flex cursor-pointer items-center no-underline transition-[translate] duration-200 hover:-translate-y-px'
  const estilo = {
    gap: '9px',
    padding: '10px 22px',
    borderRadius: '0 18px 0 18px',
    fontFamily: 'var(--app-cuerpo)',
    fontSize: T.chico,
    fontWeight: 800,
    textTransform: 'uppercase',
    letterSpacing: '0.01em',
    background: suave ? 'var(--app-sup)' : 'var(--app-acento)',
    color: suave ? 'var(--app-texto)' : 'var(--app-acento-ink)',
  }
  const flecha = (
    <svg viewBox="0 0 24 24" width={13} height={13} fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      {atras ? <path d="M15 5 8 12l7 7" /> : <path d="M7 17 17 7M9 7h8v8" />}
    </svg>
  )
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className={clases} style={estilo}>
      {children}
      {flecha}
    </a>
  ) : (
    <button onClick={onClick} className={clases} style={estilo}>
      {atras && flecha}
      {children}
      {!atras && flecha}
    </button>
  )
}

// Arbol de carpetas dibujado. Nada de caracteres de terminal: la jerarquia se
// ve por los tramos de color, un bajante por carpeta y un brazo por hijo. En
// vertical, que a lo ancho no se lee.
function Arbol({ carpetas, mobile = false }) {
  const sangria = mobile ? 20 : 31
  return (
    <div style={{ display: 'grid', gap: 'clamp(26px, 3vw, 44px)' }}>
      {carpetas.map((c, i) => (
        <div key={c.carpeta} data-anim="sube" data-delay={Math.min(i, 5) * 60}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '14px' }}>
            <span style={{ width: '16px', height: '16px', borderRadius: '4px', background: 'var(--app-acento)', flex: 'none', alignSelf: 'center' }} />
            <span style={{ fontFamily: 'var(--app-mono)', fontSize: T.sub, fontWeight: 600, letterSpacing: '-0.01em' }}>
              {c.carpeta}
            </span>
          </div>
          {c.que_es && (
            <p style={{ margin: mobile ? '8px 0 0 27px' : '8px 0 0 30px', maxWidth: '62ch', fontSize: T.cuerpo, lineHeight: 1.5, color: 'var(--app-suave)' }}>{c.que_es}</p>
          )}
          {c.hijos?.length > 0 && (
            <div style={{ marginLeft: '7px', paddingLeft: `${sangria}px`, marginTop: '16px' }}>
              {c.hijos.map((h, j) => {
                // El bajante se dibuja por filas y no de una pieza: asi no hay
                // que adivinar cuanto mide la ultima, y en la ultima se corta
                // justo en su brazo en vez de seguir de largo.
                const ultimo = j === c.hijos.length - 1
                return (
                  <div key={h.carpeta} style={{ position: 'relative', paddingBottom: ultimo ? 0 : 'clamp(11px, 1.2vw, 17px)' }}>
                    <span
                      style={{
                        position: 'absolute',
                        left: `-${sangria}px`,
                        top: 0,
                        width: '3px',
                        height: ultimo ? '12px' : '100%',
                        background: 'var(--app-acento)',
                        opacity: 0.45,
                      }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        left: `-${sangria}px`,
                        top: '10px',
                        width: `${sangria - 9}px`,
                        height: '3px',
                        background: 'var(--app-acento)',
                        opacity: 0.45,
                      }}
                    />
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '4px 12px' }}>
                      <span style={{ fontFamily: 'var(--app-mono)', fontSize: T.cuerpo, fontWeight: 600, color: 'var(--app-acento-texto)' }}>{h.carpeta}</span>
                      <span style={{ fontSize: T.cuerpo, lineHeight: 1.5, color: 'var(--app-suave)' }}>{h.que_es}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default function LandingProyecto({ dato, onCerrar }) {
  const caja = useRef(null)
  const anim = useRef(null)
  const tema = useTema()
  const oscuro = tema === 'dark'
  const mobile = useEsMobile()
  const [cerrando, setCerrando] = useState(false)

  const d = dato?.detalle || {}
  const areas = d.funcionalidades || []
  // Solo las que aportan: el resto es relleno para el que lee.
  const decisiones = (d.decisiones || []).slice(0, 6)
  const carpetas = d.carpetas || []
  const piezas = (d.arquitectura?.capas || []).flatMap((c) => c.piezas.map((p) => ({ ...p, capa: c.nombre })))
  const roles = d.stackRoles?.length ? d.stackRoles : dato.stack.map((n) => ({ nombre: n }))
  const maxArea = Math.max(1, ...areas.map((g) => g.items.length))

  // useLayoutEffect y sin rAF a proposito: el estado inicial de la animacion
  // (pagina a opacidad cero, titulos recortados) tiene que quedar escrito
  // ANTES de que el navegador pinte. Con useEffect + requestAnimationFrame la
  // pagina se pintaba entera un par de fotogramas, se iba a cero y volvia a
  // entrar: eso era el parpadeo.
  useLayoutEffect(() => {
    if (!dato) return
    cargarFuentes(dato.estetica?.google)
    if (caja.current) caja.current.scrollTop = 0
    anim.current = animarDetalle(caja.current)
    return () => {
      anim.current?.destruir()
      anim.current = null
    }
  }, [dato])

  useEffect(() => {
    const onKey = async (e) => {
      if (e.key !== 'Escape' || cerrando) return
      setCerrando(true)
      await anim.current?.salir()
      onCerrar()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [cerrando, onCerrar])

  if (!dato) return null

  const cerrar = async () => {
    if (cerrando) return
    setCerrando(true)
    await anim.current?.salir()
    onCerrar()
  }

  const tieneApp = dato.url && dato.url !== '#'
  const vars = variables(dato, tema)

  return (
    <div
      ref={caja}
      data-detalle=""
      className="sin-barra"
      style={{
        ...vars,
        position: 'fixed',
        inset: 0,
        zIndex: 90,
        overflowY: 'auto',
        overflowX: 'hidden',
        touchAction: 'pan-y',
        overscrollBehavior: 'contain',
        WebkitOverflowScrolling: 'touch',
        background: 'var(--app-fondo)',
        color: 'var(--app-texto)',
        fontFamily: 'var(--app-cuerpo)',
        fontSize: T.cuerpo,
        fontWeight: 400,
        lineHeight: 1.6,
      }}
    >
      {/* ---------- Barra ---------- */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 30,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '14px',
          padding: `${mobile ? 9 : 15}px ${MARGEN}`,
          background: 'var(--app-banda)',
        }}
      >
        <Boton onClick={cerrar} atras>
          Volver
        </Boton>
        {tieneApp && (
          <Boton href={dato.url}>
            Abrir app
          </Boton>
        )}
      </div>

      {/* ---------- Portada ---------- */}
      <Bloque primera mobile={mobile}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: mobile ? 'minmax(0, 1fr)' : 'minmax(300px, 0.85fr) minmax(0, 1.15fr)',
            gap: 'clamp(28px, 4vw, 80px)',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'grid', gap: 'clamp(16px, 1.8vw, 24px)', justifyItems: 'start' }}>
            {/* El logo, grande y solo: es la marca de la app, no un icono
                perdido encima del titulo. */}
            {/* Igual que en la vista de proyectos: el logo va dentro de un
                recuadro que recorta. Los que ya traen su propio fondo —Vexcel,
                Hibi, Grabber— lo llenan y son las esquinas del recuadro las
                que los redondean; sueltos salian como un cuadrado entero. Los
                transparentes van al 66% sobre una placa. Radio 22 sobre 112,
                la proporcion de la galeria. */}
            {dato.logo && (
              <span
                data-anim="sube"
                style={{
                  display: 'grid',
                  placeItems: 'center',
                  overflow: 'hidden',
                  flex: 'none',
                  width: 'clamp(64px, 6.4vw, 96px)',
                  aspectRatio: '1',
                  borderRadius: '19.6%',
                  background: dato.logoLleno ? 'transparent' : 'var(--app-sup)',
                }}
              >
                <img
                  src={dato.logo}
                  alt=""
                  style={
                    dato.logoLleno
                      ? { width: '100%', height: '100%', objectFit: 'cover' }
                      : { width: '66%', height: '66%', objectFit: 'contain' }
                  }
                />
              </span>
            )}
            <h1
              data-anim="clip"
              data-delay="60"
              style={{
                fontFamily: 'var(--app-titulo)',
                fontSize: T.display,
                fontWeight: 700,
                lineHeight: 0.94,
                letterSpacing: '-0.035em',
              }}
            >
              {dato.nombre}
            </h1>
            <p data-anim="sube" data-delay="130" style={{ maxWidth: '38ch', fontSize: T.rotulo, lineHeight: 1.45, color: 'var(--app-suave)' }}>
              {d.unaFrase || dato.descripcion}
            </p>
            {tieneApp && (
              <div data-anim="sube" data-delay="190" style={{ marginTop: '6px' }}>
                <Boton href={dato.url}>Abrir app</Boton>
              </div>
            )}
          </div>

          <div data-anim="sube" data-delay="160" style={mobile ? { marginInline: `calc(-1 * ${MARGEN})`, width: `calc(100% + 2 * ${MARGEN})` } : { minWidth: 0 }}>
            <MaquetaApp dato={dato} mobile={mobile} />
          </div>
        </div>
      </Bloque>

      {/* ---------- Stack: cada pieza con el papel que cumple ---------- */}
      <Bloque>
        <Seccion titulo="Construido con" mobile={mobile}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: mobile ? 'minmax(0, 1fr)' : 'repeat(2, minmax(0, 1fr))',
              columnGap: 'clamp(24px, 3vw, 56px)',
              rowGap: 'clamp(26px, 3vw, 44px)',
            }}
          >
            {roles.map((r, i) => (
              <div key={r.nombre} data-anim="sube" data-delay={i * 70}>
                <div
                  style={{
                    fontFamily: 'var(--app-titulo)',
                    fontSize: T.sub,
                    fontWeight: 700,
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                  }}
                >
                  {r.nombre}
                </div>
                {/* La barra bajo cada tecnologia. A lo ancho solo cuando hay
                    dos columnas; en telefono, un trazo corto. */}
                <span
                  style={{
                    display: 'block',
                    width: mobile ? '46px' : '100%',
                    height: '4px',
                    borderRadius: '2px',
                    background: 'var(--app-acento)',
                    margin: mobile ? '11px 0 10px' : '16px 0 14px',
                  }}
                />
                {r.papel && <p style={{ fontSize: T.cuerpo, lineHeight: 1.5, color: 'var(--app-suave)' }}>{r.papel}</p>}
              </div>
            ))}
          </div>
        </Seccion>
      </Bloque>

      {/* ---------- Qué resuelve ---------- */}
      <Bloque>
        <Seccion titulo="El problema" mobile={mobile}>
          <p data-anim="sube" data-delay="100" style={{ maxWidth: '78ch', fontSize: T.rotulo, lineHeight: 1.55 }}>
            {d.porQueExiste || dato.descripcion}
          </p>
        </Seccion>
      </Bloque>

      {/* ---------- Qué cubre ---------- */}
      {areas.length > 0 && (
        <Bloque>
          <Seccion titulo="Qué cubre" dato={`${areas.reduce((t, g) => t + g.items.length, 0)} funciones`} mobile={mobile}>
            <div style={{ display: 'grid' }}>
              {areas.map((g, i) => (
                <div
                  key={i}
                  data-anim="sube"
                  data-delay={Math.min(i, 6) * 40}
                  style={{ padding: 'clamp(9px, 1vw, 15px) 0' }}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '20px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--app-titulo)',
                        fontSize: T.sub,
                        fontWeight: 700,
                        lineHeight: 1.15,
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {g.area}
                    </span>
                    <span style={{ fontFamily: 'var(--app-mono)', fontSize: T.chico, color: 'var(--app-acento-texto)', flex: 'none' }}>
                      {g.items.length}
                    </span>
                  </div>
                  {/* La barra dice de un vistazo el peso de cada area: mas util
                      que el numero suelto y, de paso, mete color. */}
                  <span
                    style={{
                      display: 'block',
                      marginTop: '10px',
                      height: '5px',
                      borderRadius: '3px',
                      width: `${Math.max(9, (g.items.length / maxArea) * 100)}%`,
                      background: 'var(--app-acento)',
                      opacity: 0.5 + 0.5 * (g.items.length / maxArea),
                    }}
                  />
                </div>
              ))}
            </div>
          </Seccion>
        </Bloque>
      )}

      {/* ---------- Las piezas ---------- */}
      {piezas.length > 0 && (
        <Bloque>
          <Seccion titulo="Las piezas" mobile={mobile}>
            <div style={{ display: 'grid', gap: 'clamp(20px, 2.4vw, 34px)' }}>
              {piezas.map((p, i) => (
                <div
                  key={i}
                  data-anim="sube"
                  data-delay={Math.min(i, 6) * 40}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: mobile ? 'minmax(0, 1fr)' : 'minmax(0, 1fr) minmax(0, 1.1fr)',
                    gap: mobile ? '6px' : 'clamp(20px, 3vw, 50px)',
                    alignItems: 'baseline',
                  }}
                >
                  <div style={mobile ? null : { display: 'grid', gridTemplateColumns: '18px minmax(0, 1fr)', gap: '12px', alignItems: 'start' }}>
                    <span
                      style={{
                        display: mobile ? 'inline-block' : 'block',
                        width: '11px',
                        height: '11px',
                        borderRadius: '50%',
                        background: 'var(--app-acento)',
                        marginTop: mobile ? 0 : '10px',
                        marginBottom: mobile ? '9px' : 0,
                      }}
                    />
                    <div>
                      <div style={{ fontFamily: 'var(--app-titulo)', fontSize: T.sub, fontWeight: 700, lineHeight: 1.15 }}>{p.nombre}</div>
                      <div style={{ fontFamily: 'var(--app-mono)', fontSize: T.chico, color: 'var(--app-acento-texto)', marginTop: '5px' }}>{p.tecnologia}</div>
                    </div>
                  </div>
                  <p style={{ fontSize: T.cuerpo, lineHeight: 1.55, color: 'var(--app-suave)' }}>{p.que_hace}</p>
                </div>
              ))}
            </div>
          </Seccion>
        </Bloque>
      )}

      {/* ---------- Estructura ---------- */}
      {carpetas.length > 0 && (
        <Bloque>
          <Seccion titulo="Cómo está armado" dato={`${carpetas.length} carpetas`} mobile={mobile}>
            <Arbol carpetas={carpetas} mobile={mobile} />
          </Seccion>
        </Bloque>
      )}

      {/* ---------- Decisiones ---------- */}
      {decisiones.length > 0 && (
        <Bloque>
          <Seccion titulo="Por qué así" mobile={mobile}>
            <div style={{ display: 'grid', gap: 'clamp(22px, 2.6vw, 38px)' }}>
              {decisiones.map((x, i) => (
                <div
                  key={i}
                  data-anim="sube"
                  data-delay={Math.min(i, 5) * 40}
                  style={
                    mobile
                      ? null
                      : { display: 'grid', gridTemplateColumns: '46px minmax(0, 1fr)', gap: 'clamp(12px, 1.6vw, 22px)', alignItems: 'start' }
                  }
                >
                  <span
                    style={{
                      display: 'block',
                      marginBottom: mobile ? '6px' : 0,
                      fontFamily: 'var(--app-mono)',
                      fontSize: T.rotulo,
                      color: 'var(--app-acento-texto)',
                      lineHeight: 1.1,
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 style={{ fontFamily: 'var(--app-titulo)', fontSize: T.rotulo, fontWeight: 700, lineHeight: 1.25 }}>{x.titulo}</h3>
                    <p style={{ marginTop: '8px', fontSize: T.cuerpo, lineHeight: 1.55, color: 'var(--app-suave)' }}>{x.texto}</p>
                  </div>
                </div>
              ))}
            </div>
          </Seccion>
        </Bloque>
      )}

      {/* ---------- Cierre ---------- */}
      <Bloque>
        <div style={{ display: 'grid', gap: '26px', justifyItems: 'start' }}>
          <h2
            data-anim="clip"
            style={{
              fontFamily: 'var(--app-titulo)',
              fontSize: T.titulo,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: '-0.03em',
            }}
          >
            {tieneApp ? 'Pruébalo' : `${dato.nombre} aún no está publicado`}
          </h2>
          <div data-anim="sube" data-delay="100" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {tieneApp && <Boton href={dato.url}>Abrir app</Boton>}
            <Boton onClick={cerrar} suave>
              Volver a proyectos
            </Boton>
          </div>
        </div>
      </Bloque>

    </div>
  )
}
