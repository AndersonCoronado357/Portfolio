import { IconoRed } from '../components/shared'
import { useEsMobile } from '../lib/dispositivo'
import { useContenido } from '../data/store'

export default function Contacto() {
  const mobile = useEsMobile()
  const datos = useContenido()
  const T = datos.TEXTOS.contacto
  const CONTACTO = datos.CONTACTO

  if (mobile) {
    return (
      <section id="contacto" className="view">
        <h2 data-anim="clip" className="absolute w-full text-center font-display text-amber" style={{ left: 0, top: '10%', fontSize: '72px', lineHeight: 1.02, paddingInline: '6%' }}>
          {T.titulo}
        </h2>
        <p data-anim="pinta" data-delay="130" className="absolute text-center font-extrabold" style={{ left: '8%', top: '20%', width: '84%', fontSize: '30px', lineHeight: 1.25 }}>
          {T.parrafo}
        </p>

        {Array.from({ length: 5 }, (_, i) => 28 + i * 4).map((yp, i) => {
          const c = CONTACTO[i] || {}
          return (
            <a key={i} href={c.url || '#'} target="_blank" rel="noreferrer" className="group absolute flex items-center" style={{ left: '8%', right: '8%', top: `${yp}%`, gap: '22px' }}>
              <span data-anim="brota" data-delay={260 + i * 70} className="grid shrink-0 place-items-center rounded-full bg-amber" style={{ width: '68px', height: '68px' }}>
                <IconoRed label={c.label} className="h-[54%] w-[54%]" style={{ color: 'var(--color-ink)' }} />
              </span>
              <span data-anim="pinta" data-delay={220 + i * 70} className="flex flex-1 flex-col text-left" style={{ lineHeight: 1.15 }}>
                <span className="font-accent font-extrabold uppercase text-amber" style={{ fontSize: '19px', letterSpacing: '0.16em' }}>
                  {c.etiqueta}
                </span>
                <span className="font-black transition-colors group-hover:text-amber" style={{ fontSize: '29px', marginTop: '4px' }}>
                  {c.texto}
                </span>
              </span>
            </a>
          )
        })}
      </section>
    )
  }

  // Un solo bloque alineado a la misma izquierda y centrado en vertical.
  // Antes el titulo, el parrafo, los textos y los iconos tenian cada uno su
  // left y su top: quedaban en cuatro margenes distintos y el texto de los
  // enlaces se montaba encima de los iconos.
  return (
    <section id="contacto" className="view">
      {/* Todo alineado al margen DERECHO: el bloque, los textos y la lista.
          Por eso las filas van en row-reverse, con el icono al final. */}
      <div className="absolute flex flex-col items-end text-right" style={{ left: '52%', right: '11%', top: '50%', transform: 'translateY(-50%)' }}>
        <h2 data-anim="clip" className="font-display text-amber" style={{ fontSize: '55px', lineHeight: 1.15 }}>
          {T.titulo}
        </h2>
        <p data-anim="pinta" data-delay="130" className="font-extrabold" style={{ fontSize: '25px', lineHeight: 1.32, marginTop: '18px', maxWidth: '92%' }}>
          {T.parrafo}
        </p>

        <div className="flex flex-col items-end" style={{ marginTop: '38px', gap: '14px' }}>
          {CONTACTO.slice(0, 5).map((c, i) => (
            <a key={i} href={c.url || '#'} target="_blank" rel="noreferrer" className="group flex flex-row-reverse items-center" style={{ gap: '18px' }}>
              <span data-anim="brota" data-delay={260 + i * 80} className="grid shrink-0 place-items-center rounded-full bg-amber" style={{ width: '46px', height: '46px' }}>
                <IconoRed label={c.label} className="h-[52%] w-[52%]" style={{ color: 'var(--color-ink)' }} />
              </span>
              <span data-anim="pinta" data-delay={220 + i * 80} className="flex flex-col items-end" style={{ lineHeight: 1.15 }}>
                <span className="font-accent font-extrabold uppercase text-amber" style={{ fontSize: '12px', letterSpacing: '0.16em' }}>
                  {c.etiqueta}
                </span>
                <span className="font-black transition-colors group-hover:text-amber" style={{ fontSize: '20px', marginTop: '3px' }}>
                  {c.texto}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
