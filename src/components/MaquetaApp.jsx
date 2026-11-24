import { useLayoutEffect, useRef, useState } from 'react'
import { Pantalla } from '../views/Proyectos'

/*
 * Las maquetas de la landing de proyecto.
 *
 * IDENTICAS a las de la galeria, no parecidas: los estilos de aqui abajo estan
 * copiados tal cual de Proyectos.jsx, con sus medidas en pixeles. Alli viven
 * dentro del lienzo de 1920x1080 (o 1080x1920 en vertical), que el sitio
 * escala entero con un transform; la landing no esta escalada, asi que el
 * bloque se dibuja a tamano nativo y se le aplica el mismo truco: un scale
 * calculado con el ancho real que le toca.
 *
 * Escritorio, sacado de Cuerpo():   portatil left 50% top 27% ancho 790
 *                                   celular  left 82.5% top 37% 252x524
 * Vertical, sacado de CuerpoMobile(): portatil left 6% top 61% ancho 60%
 *                                     celular  left 58% top 56% ancho 30%
 * Trasladado a coordenadas del bloque:
 */
const PC = { w: 918, h: 632, lap: { x: 42, y: 0, w: 790 }, cel: { x: 666, y: 108, w: 252, h: 524 } }
const MOV = { w: 1080, h: 684, lap: { x: 65, y: 96, w: 648 }, cel: { x: 626, y: 0, w: 324, h: 684 } }

// Portatil: marco, punto de camara, pantalla y bisagra con su muesca.
function Portatil({ dato, ancho, mobile }) {
  const m = mobile ? { pad: '11px 11px 13px', radio: '15px 15px 0 0', pant: '9px', bis: 16, bisR: '3px 3px 14px 14px', mx: '-8%', muescaW: '26%', muescaH: 6 } : { pad: '12px 12px 14px', radio: '20px 20px 0 0', pant: '9px', bis: 17, bisR: '3px 3px 16px 16px', mx: '-42px', muescaW: '130px', muescaH: 7 }
  return (
    <div style={{ width: ancho }}>
      <div style={{ position: 'relative', borderRadius: m.radio, background: '#0c0c0f', padding: m.pad, boxShadow: '0 34px 90px rgba(0,0,0,0.28)' }}>
        <span style={{ position: 'absolute', top: '5px', left: '50%', transform: 'translateX(-50%)', zIndex: 2, width: '5px', height: '5px', borderRadius: '50%', background: '#2e2e33' }} />
        <div style={{ aspectRatio: '16 / 10' }}>
          <Pantalla radius={m.pant} dato={dato} vista="pc" />
        </div>
      </div>
      <div style={{ position: 'relative', marginLeft: m.mx, marginRight: m.mx, height: `${m.bis}px`, borderRadius: m.bisR, background: 'linear-gradient(#2a2a30,#131316)' }}>
        <span style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', height: `${m.muescaH}px`, width: m.muescaW, borderRadius: '0 0 8px 8px', background: '#0c0c0f' }} />
      </div>
    </div>
  )
}

function Celular({ dato, ancho, alto, mobile }) {
  return (
    <div style={{ width: ancho, height: alto, borderRadius: mobile ? '32px' : '36px', background: '#0c0c0f', padding: mobile ? '7px' : '9px', boxShadow: '0 30px 70px rgba(0,0,0,0.3)' }}>
      <div style={{ position: 'relative', height: '100%', width: '100%' }}>
        <Pantalla radius={mobile ? '26px' : '28px'} isla={mobile ? 30 : 34} dato={dato} vista="movil" />
      </div>
    </div>
  )
}

export function MaquetaApp({ dato, mobile = false }) {
  const caja = useRef(null)
  const [k, setK] = useState(0)
  const M = mobile ? MOV : PC

  // El factor sale del ancho real del hueco, que es justo lo que hace el
  // portafolio con su lienzo. Sin esto habria que reescribir cada medida en
  // porcentajes y las maquetas dejarian de ser las mismas.
  useLayoutEffect(() => {
    const el = caja.current
    if (!el) return
    const medir = () => setK(el.clientWidth / M.w)
    medir()
    const ro = new ResizeObserver(medir)
    ro.observe(el)
    return () => ro.disconnect()
  }, [M.w])

  if (!dato?.captura) return null

  return (
    <div ref={caja} style={{ width: '100%', height: k ? `${M.h * k}px` : 0, overflow: 'visible' }}>
      <div style={{ width: `${M.w}px`, height: `${M.h}px`, position: 'relative', transformOrigin: 'top left', transform: `scale(${k || 0})` }}>
        <div style={{ position: 'absolute', left: `${M.lap.x}px`, top: `${M.lap.y}px` }}>
          <Portatil dato={dato} ancho={`${M.lap.w}px`} mobile={mobile} />
        </div>
        <div style={{ position: 'absolute', left: `${M.cel.x}px`, top: `${M.cel.y}px` }}>
          <Celular dato={dato} ancho={`${M.cel.w}px`} alto={`${M.cel.h}px`} mobile={mobile} />
        </div>
      </div>
    </div>
  )
}
