import { IconoSkill } from '../components/shared'
import { useEsMobile } from '../lib/dispositivo'
import { useContenido } from '../data/store'

export default function Habilidades() {
  const mobile = useEsMobile()
  const datos = useContenido()
  const T = datos.TEXTOS.habilidades
  const HABILIDADES = datos.HABILIDADES

  if (mobile) {
    return (
      <section id="habilidades" className="view">
        <p data-anim="pinta" className="absolute w-full text-center font-extrabold uppercase text-amber" style={{ left: 0, top: '6.5%', fontSize: '28px' }}>
          {T.eyebrow}
        </p>
        <h2 data-anim="clip" data-delay="90" className="absolute w-full text-center font-display" style={{ left: 0, top: '9.5%', fontSize: '82px', lineHeight: 1.05 }}>
          {T.titulo}
        </h2>
        <p data-anim="pinta" data-delay="170" className="absolute text-center font-extrabold" style={{ left: '7%', top: '16.5%', width: '86%', fontSize: '26px', lineHeight: 1.25 }}>
          {T.subtitulo}
        </p>

        {/* misma correccion que en escritorio: lista que fluye y se centra */}
        <div className="absolute flex flex-col" style={{ left: '6%', right: '6%', top: '24%', bottom: '5%', gap: '40px', justifyContent: 'center' }}>
          {HABILIDADES.slice(0, 6).map((h, f) => {
            const base = 260 + f * 80
            return (
              <div key={f} className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center" style={{ gap: '18px' }}>
                  <IconoSkill i={f} data-anim="brota" data-delay={base} style={{ width: '66px', height: '66px' }} />
                  <h4 data-anim="pinta" data-delay={base + 70} className="font-display" style={{ fontSize: '48px', lineHeight: 1 }}>
                    {h?.titulo}
                  </h4>
                </div>
                <p data-anim="pinta" data-delay={base + 140} className="font-extrabold" style={{ fontSize: '28px', lineHeight: 1.3, marginTop: '12px' }}>
                  {h?.desc}
                </p>
              </div>
            )
          })}
        </div>
      </section>
    )
  }

  return (
    <section id="habilidades" className="view">
      {/* el bloque entero (titulo + rejilla) queda centrado en la pantalla:
          el contenido mide 60.75% de alto, asi que sobran 19.63% arriba y
          19.63% abajo. Si se cambia el texto, hay que volver a medirlo. */}
      <p data-anim="pinta" className="absolute font-extrabold uppercase text-amber" style={{ left: '5.78%', top: '17.23%', fontSize: '24px' }}>
        {T.eyebrow}
      </p>
      <h2 data-anim="clip" data-delay="90" className="absolute font-display" style={{ left: '5.57%', top: '20.56%', fontSize: '64px', lineHeight: 1.2 }}>
        {T.titulo}
      </h2>
      <p data-anim="pinta" data-delay="170" className="absolute font-extrabold" style={{ left: '5.78%', top: '28.34%', width: '32.92%', fontSize: '24px', lineHeight: 1.21 }}>
        {T.subtitulo}
      </p>

      {/* Rejilla real en vez de tops fijos: antes la descripcion de la fila 1
          se montaba sobre el icono de la fila 2 en cuanto el texto crecia.
          alignContent centra las dos filas en el alto disponible. */}
      <div
        className="absolute grid"
        style={{
          // arranca POR DEBAJO del bloque de titulo: la columna izquierda de
          // la rejilla se cruza en horizontal con el subtitulo, asi que si
          // sube, el primer icono se le monta encima
          left: '24.48%',
          right: '4.5%',
          top: '34.23%',
          bottom: '14.77%',
          gridTemplateColumns: 'repeat(3, 1fr)',
          columnGap: '3.2%',
          rowGap: '26px',
          alignContent: 'center',
        }}
      >
        {HABILIDADES.slice(0, 6).map((h, i) => {
          const base = 240 + Math.floor(i / 3) * 160 + (i % 3) * 90
          return (
            <div key={i} className="flex flex-col items-start">
              <IconoSkill i={i} data-anim="brota" data-delay={base} style={{ width: '50px', height: '50px' }} />
              <h4 data-anim="pinta" data-delay={base + 70} className="font-display" style={{ fontSize: '32px', lineHeight: 1.2, marginTop: '16px' }}>
                {h?.titulo}
              </h4>
              <p data-anim="pinta" data-delay={base + 140} className="font-extrabold" style={{ fontSize: '20px', lineHeight: 1.35, marginTop: '10px' }}>
                {h?.desc}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
