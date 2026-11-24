import { Btn, IconoRed } from '../components/shared'
import { useEsMobile } from '../lib/dispositivo'
import { useContenido } from '../data/store'

export default function SobreMi({ goTo }) {
  const mobile = useEsMobile()
  const datos = useContenido()
  const T = datos.TEXTOS.sobreMi
  const redes = datos.REDES

  if (mobile) {
    return (
      <section id="sobre-mi" className="view">
        <h2 data-anim="clip" className="absolute w-full text-center font-display" style={{ left: 0, top: '15%', fontSize: '58px', lineHeight: 1.1 }}>
          {T.saludo}
        </h2>
        <h3 data-anim="clip" data-delay="110" className="absolute w-full text-center font-display whitespace-nowrap text-amber" style={{ left: 0, top: '21%', fontSize: '66px', lineHeight: 1.1 }}>
          {T.rol}
        </h3>
        {/* mismo bloque que fluye, para que la bio no monte sobre las redes */}
        <div className="absolute flex flex-col items-center" style={{ left: '7%', top: '28%', width: '86%' }}>
          <p data-anim="pinta" data-delay="180" className="text-center font-extrabold" style={{ fontSize: '30px', lineHeight: 1.35 }}>
            {T.bio}
          </p>
          <p data-anim="pinta" data-delay="280" className="text-center font-extrabold uppercase" style={{ fontSize: '26px', letterSpacing: '0.14em', marginTop: '36px' }}>
            {T.encuentrame}
          </p>

          <div className="flex justify-center" style={{ gap: '42px', marginTop: '22px' }}>
            {redes.map((ic, i) => (
              <a
                key={ic.label}
                data-anim="brota"
                data-delay={340 + i * 55}
                href={ic.url}
                target="_blank"
                rel="noreferrer"
                aria-label={ic.label}
                className="transition-colors hover:text-amber"
                style={{ width: '44px', height: '44px' }}
              >
                <IconoRed label={ic.label} className="h-full w-full" />
              </a>
            ))}
          </div>

          <div className="flex w-full" style={{ gap: '18px', marginTop: '44px' }}>
            <Btn data-anim="pinta" data-delay="480" onClick={() => goTo('proyectos')} className="grid flex-1 place-items-center" style={{ height: '68px', padding: 0, fontSize: '28px' }}>
              {T.btnProyectos}
            </Btn>
            <Btn data-anim="pinta" data-delay="560" onClick={() => goTo('experiencia')} className="grid flex-1 place-items-center" style={{ height: '68px', padding: 0, fontSize: '28px' }}>
              {T.btnExperiencia}
            </Btn>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="sobre-mi" className="view">
      <h2 data-anim="clip" className="absolute font-display" style={{ left: '9.53%', top: '38.15%', fontSize: '40px', lineHeight: 1.2 }}>
        {T.saludo}
      </h2>
      <h3 data-anim="clip" data-delay="110" className="absolute font-display whitespace-nowrap text-amber" style={{ left: '9.53%', top: '42.96%', fontSize: '48px', lineHeight: 1.21 }}>
        {T.rol}
      </h3>
      {/* Bio, redes y botones van en UN solo bloque que fluye: antes cada uno
          tenia su top fijo y, si la bio crecia, se montaba encima del resto. */}
      <div className="absolute flex flex-col items-start" style={{ left: '9.53%', top: '49.44%', width: '38.54%' }}>
        <p data-anim="pinta" data-delay="180" className="font-extrabold" style={{ fontSize: '20px', lineHeight: 1.35 }}>
          {T.bio}
        </p>
        <p data-anim="pinta" data-delay="280" className="font-extrabold uppercase" style={{ fontSize: '15px', letterSpacing: '0.14em', marginTop: '22px' }}>
          {T.encuentrame}
        </p>

        <div className="flex" style={{ gap: '24px', marginTop: '14px' }}>
          {redes.map((ic, i) => (
            <a
              key={ic.label}
              data-anim="brota"
              data-delay={340 + i * 55}
              href={ic.url}
              target="_blank"
              rel="noreferrer"
              aria-label={ic.label}
              className="transition-colors hover:text-amber"
              style={{ width: '25px', height: '25px' }}
            >
              <IconoRed label={ic.label} className="h-full w-full" />
            </a>
          ))}
        </div>

        <div className="flex" style={{ gap: '42px', marginTop: '26px' }}>
          <Btn data-anim="pinta" data-delay="480" onClick={() => goTo('proyectos')} className="grid place-items-center" style={{ width: '255px', height: '44px', padding: 0 }}>
            {T.btnProyectos}
          </Btn>
          <Btn data-anim="pinta" data-delay="560" onClick={() => goTo('experiencia')} className="grid place-items-center" style={{ width: '255px', height: '44px', padding: 0 }}>
            {T.btnExperiencia}
          </Btn>
        </div>
      </div>
    </section>
  )
}
