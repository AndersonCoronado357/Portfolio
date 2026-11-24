import { useEsMobile } from '../lib/dispositivo'
import { useContenido } from '../data/store'

const lerp = (a, b, t) => a + (b - a) * t

function Entrada({ dato, top, delay, mobile }) {
  const y = (v) => `${((top + v) / (mobile ? 1920 : 1080)) * 100}%`
  const left = mobile ? '18%' : '18.13%'
  const ancho = mobile ? '72%' : '40.73%'
  return (
    <>
      <p data-anim="pinta" data-delay={delay} className="absolute font-extrabold text-amber" style={{ left, top: y(0), fontSize: mobile ? '26px' : '15px' }}>
        {dato.periodo}
      </p>
      <h3 data-anim="pinta" data-delay={delay + 70} className="absolute font-black" style={{ left, top: y(mobile ? 38 : 27), fontSize: mobile ? '40px' : '20px' }}>
        {dato.cargo}
      </h3>
      <p data-anim="pinta" data-delay={delay + 140} className="absolute font-extrabold" style={{ left, top: y(mobile ? 90 : 58), fontSize: mobile ? '30px' : '18px' }}>
        {dato.empresa}
      </p>
      <p data-anim="pinta" data-delay={delay + 220} className="absolute font-extrabold" style={{ left, top: y(mobile ? 138 : 89), width: ancho, fontSize: mobile ? '30px' : '18px', lineHeight: 1.3 }}>
        {dato.descripcion}
      </p>
    </>
  )
}

export default function Experiencia() {
  const mobile = useEsMobile()
  const { EXPERIENCIA } = useContenido()
  const N = EXPERIENCIA.length
  const F = mobile ? 1920 : 1080

  const paso = mobile ? 655 : 314
  const t0 = mobile ? 440 : 336
  const desfaseDot = mobile ? 57 : 38.5
  const dotPct = (i) => ((t0 + i * paso + desfaseDot) / F) * 100
  const primerDot = dotPct(0)
  const ultimoDot = dotPct(N - 1)

  const dotX = mobile ? '12%' : '15.73%'
  const anillo = mobile ? { w: 46, b: 6 } : { w: 34, b: 5 }
  const centro = mobile ? 20 : 15
  const trackTop = primerDot - (mobile ? 6 : 9)
  // la linea baja un poco mas alla del ultimo punto para acompanar el texto
  const trackH = ultimoDot - primerDot + (mobile ? 38 : 32)

  return (
    <section id="experiencia" className="view">
      <span data-anim="track" className={`absolute -translate-x-1/2 rounded-full ${mobile ? 'bg-amber/30' : 'bg-amber/20'}`} style={{ left: dotX, top: `${trackTop}%`, height: `${trackH}%`, width: mobile ? '11px' : '9px' }} />
      <span data-anim="fill" className="absolute -translate-x-1/2 rounded-full bg-amber" style={{ left: dotX, top: `${trackTop}%`, height: `${trackH}%`, width: mobile ? '11px' : '9px' }} />

      {EXPERIENCIA.map((dato, i) => {
        const dp = dotPct(i)
        const hito = N > 1 ? lerp(mobile ? 0.1 : 0.16, mobile ? 0.62 : 0.69, i / (N - 1)) : 0.3
        return (
          <div key={i}>
            <span data-anim="track" className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-amber bg-lienzo" style={{ left: dotX, top: `${dp}%`, width: `${anillo.w}px`, height: `${anillo.w}px`, borderWidth: `${anillo.b}px` }} />
            <span data-anim="brota" data-hito={hito.toFixed(2)} className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber" style={{ left: dotX, top: `${dp}%`, width: `${centro}px`, height: `${centro}px` }} />
            <Entrada dato={dato} top={t0 + i * paso} delay={260 + i * 260} mobile={mobile} />
          </div>
        )
      })}
    </section>
  )
}
