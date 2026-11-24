import { useEsMobile } from '../lib/dispositivo'
import { useContenido } from '../data/store'

function Card({ it, mobile, flip }) {
  if (mobile) {
    return (
      <div
        className="flex items-center rounded-3xl"
        style={{ flexDirection: flip ? 'row-reverse' : 'row', padding: '20px 26px', gap: '26px' }}
      >
        <span
          className="grid shrink-0 place-items-center rounded-2xl bg-amber font-display uppercase text-ink"
          style={{ width: '92px', height: '92px', fontSize: '34px' }}
        >
          {it.sigla}
        </span>
        <div className="min-w-0 flex-1" style={{ textAlign: flip ? 'right' : 'left' }}>
          <p className="font-display" style={{ fontSize: '42px', lineHeight: 1.05 }}>
            {it.nombre}
          </p>
          <p className="font-extrabold" style={{ fontSize: '28px', lineHeight: 1.3, marginTop: '8px', color: 'var(--color-ink-mute)' }}>
            {it.desc}
          </p>
        </div>
      </div>
    )
  }
  return (
    <div className="superficie flex items-start gap-4 rounded-2xl" style={{ padding: '20px 22px' }}>
      <span className="grid shrink-0 place-items-center rounded-xl bg-amber font-display uppercase text-ink" style={{ width: '56px', height: '56px', fontSize: '19px' }}>
        {it.sigla}
      </span>
      <div className="min-w-0">
        <p className="font-display" style={{ fontSize: '24px', lineHeight: 1.05 }}>{it.nombre}</p>
        <p className="font-extrabold" style={{ fontSize: '16px', lineHeight: 1.3, marginTop: '6px', color: 'var(--color-ink-mute)' }}>{it.desc}</p>
      </div>
    </div>
  )
}

export default function Tecnologias() {
  const mobile = useEsMobile()
  const { TECNOLOGIAS, TEXTOS } = useContenido()
  const T = TEXTOS.tecnologias
  return (
    // La vista mide lo que mide su lista y sube entera, como una pagina mas
    // alta (ver listaTec.js). Antes era una ventana recortada con su propia
    // mascara dentro de la de la pagina y una columna enorme moviendose
    // dentro: la unica vista construida asi.
    <section id="tecnologias" className="view" style={{ bottom: 'auto', paddingTop: mobile ? '150px' : '96px' }}>
        <div id="tec-col" className="relative">
          <div className="mx-auto" style={{ maxWidth: mobile ? '960px' : '1320px', padding: mobile ? '20px 40px 120px' : '44px 40px 90px' }}>
            <p className="text-center font-extrabold uppercase text-amber" style={{ fontSize: mobile ? '26px' : '18px', letterSpacing: '0.32em' }}>
              {T.eyebrow}
            </p>
            <h2 className="text-center font-display" style={{ fontSize: mobile ? '90px' : '74px', lineHeight: 1, marginTop: '12px' }}>
              {T.titulo}
            </h2>

            {TECNOLOGIAS.map((cat) => (
              <div key={cat.categoria} style={{ marginTop: mobile ? '60px' : '50px' }}>
                <div className="flex items-center" style={{ gap: mobile ? '18px' : '12px' }}>
                  <span className="rounded-full bg-amber" style={{ width: mobile ? '22px' : '15px', height: mobile ? '22px' : '15px' }} />
                  <span className="font-display" style={{ fontSize: mobile ? '46px' : '28px' }}>
                    {cat.categoria}
                  </span>
                </div>
                <div className="grid" style={{ gridTemplateColumns: mobile ? 'repeat(1, 1fr)' : 'repeat(4, 1fr)', gap: mobile ? '26px' : '30px', marginTop: mobile ? '32px' : '22px' }}>
                  {cat.items.map((it, i) => (
                    <Card key={it.nombre} it={it} mobile={mobile} flip={i % 2 === 1} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}
