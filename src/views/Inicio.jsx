import { Btn } from '../components/shared'
import { useEsMobile } from '../lib/dispositivo'
import { useContenido } from '../data/store'

export default function Inicio({ goTo }) {
  const mobile = useEsMobile()
  const T = useContenido().TEXTOS.inicio
  const palabras = (T.nombre || '').trim().split(/\s+/)

  if (mobile) {
    return (
      <section id="inicio" className="view">
        <h1
          data-anim="clip"
          className="absolute text-center font-display uppercase text-amber"
          style={{ left: '7%', top: '11.5%', width: '86%', fontSize: '58px', lineHeight: 1.05, letterSpacing: '-0.02em' }}
        >
          {T.nombre}
        </h1>
        <p data-anim="pinta" data-delay="120" className="absolute text-center font-extrabold" style={{ left: '8%', top: '15.3%', width: '84%', fontSize: '32px', lineHeight: 1.3 }}>
          {T.tagline}
        </p>

        <div
          data-anim="wipe"
          data-delay="320"
          className="absolute"
          style={{
            left: '363.8px', top: 'calc(50% - 115.5px)', width: '393px', height: '233px',
            backgroundImage: 'radial-gradient(circle, var(--color-ink) 0 13%, transparent 14%)',
            backgroundSize: '5.88% 12.5%',
          }}
        />

        <Btn
          data-anim="pinta"
          data-delay="240"
          onClick={() => goTo('sobre-mi')}
          className="absolute grid place-items-center"
          style={{ left: '28%', top: '67%', width: '44%', height: '3.4%', padding: 0, fontSize: '30px' }}
        >
          {T.cta}
        </Btn>

        <p data-anim="pinta" data-delay="320" className="absolute w-full text-center font-black" style={{ left: 0, top: '73%', fontSize: '30px' }}>
          {T.loHago}
        </p>
        <p data-anim="pinta" data-delay="380" className="absolute w-full text-center font-black" style={{ left: 0, top: '76.5%', fontSize: '54px', lineHeight: 1 }}>
          {T.area1}
        </p>
        <span data-anim="wipe" data-delay="430" className="absolute bg-ink" style={{ left: '35%', top: '81%', width: '30%', height: '5px', borderRadius: '2px' }} />
        <p data-anim="pinta" data-delay="470" className="absolute w-full text-center font-black" style={{ left: 0, top: '82.5%', fontSize: '40px', lineHeight: 1 }}>
          {T.area2}
        </p>
        <p data-anim="pinta" data-delay="530" className="absolute w-full text-center font-black" style={{ left: 0, top: '87%', fontSize: '40px', lineHeight: 1 }}>
          {T.area3}
        </p>
        <p data-anim="pinta" data-delay="590" className="absolute w-full text-center font-extrabold text-amber" style={{ left: 0, top: '91.5%', fontSize: '40px', lineHeight: 1 }}>
          {T.area4}
        </p>
        <span data-anim="wipe" data-delay="640" className="absolute bg-amber" style={{ left: '26%', top: '95.5%', width: '48%', height: '5px', borderRadius: '2px' }} />
      </section>
    )
  }

  return (
    <section id="inicio" className="view">
      <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: '36.64%', top: '58.19%', width: '493px' }}>
        <div className="relative aspect-square w-full">
          <div
            data-anim="wipe"
            data-delay="320"
            className="absolute"
            style={{
              left: '5.27%', top: '26.57%', width: '79.72%', height: '47.26%',
              backgroundImage: 'radial-gradient(circle, var(--color-ink) 0 13%, transparent 14%)',
              backgroundSize: '5.88% 12.5%',
            }}
          />
        </div>
      </div>

      <div className="absolute" style={{ left: '2.76%', top: '65.1%' }}>
        <p data-anim="pinta" className="font-accent font-extrabold uppercase text-amber" style={{ fontSize: '12px', letterSpacing: '0.28em' }}>
          {T.loHago}
        </p>
        <p data-anim="pinta" data-delay="90" className="relative mt-[16px] inline-block pr-[38px] pb-[9px] font-black" style={{ fontSize: '38px', lineHeight: 1.1 }}>
          {T.area1}
          <span data-anim="wipe" className="absolute inset-x-0 bottom-0 bg-ink" style={{ height: '4px', borderRadius: '2px' }} />
        </p>
        <p data-anim="pinta" data-delay="180" className="mt-[17px] font-black" style={{ fontSize: '26px' }}>{T.area2}</p>
        <p data-anim="pinta" data-delay="260" className="mt-[12px] font-black" style={{ fontSize: '26px' }}>{T.area3}</p>
        <p data-anim="pinta" data-delay="340" className="relative mt-[17px] inline-block pr-[23px] pb-[6px] font-extrabold text-amber" style={{ fontSize: '17px' }}>
          {T.area4}
          <span data-anim="wipe" className="absolute inset-x-0 bottom-0 bg-amber" style={{ height: '4px', borderRadius: '2px' }} />
        </p>
      </div>

      <aside id="panel-texto" className="absolute top-0 right-0 h-full" style={{ width: '27.03%' }}>
        <h1
          data-anim="clip"
          className="absolute font-display uppercase"
          style={{ left: '8.5%', top: '34.6%', fontSize: '74px', lineHeight: 1.18, letterSpacing: '-0.02em', WebkitTextStroke: '1.2px currentColor' }}
        >
          {palabras[0]}
          {palabras.length > 1 && (
            <>
              {/* El espacio no se ve (queda al final de la linea), pero sin el
                  los buscadores leen "AndersonCoronado" todo junto. */}
              {' '}
              <br />
              {palabras.slice(1).join(' ')}
            </>
          )}
        </h1>
        <p data-anim="pinta" data-delay="140" className="absolute font-extrabold" style={{ left: '10%', width: '79%', top: '53.24%', fontSize: '20px', lineHeight: 1.2 }}>
          {T.tagline}
        </p>
        <Btn
          data-anim="pinta"
          data-delay="280"
          onClick={() => goTo('sobre-mi')}
          className="absolute grid place-items-center bg-lienzo"
          style={{ left: '10%', top: '63.43%', width: '39.5%', height: '44px', padding: 0 }}
          white
        >
          {T.cta}
        </Btn>
      </aside>
    </section>
  )
}
