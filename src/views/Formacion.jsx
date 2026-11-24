import { CubeIcon } from '../components/shared'
import { useEsMobile } from '../lib/dispositivo'
import { useContenido } from '../data/store'

function ShieldIcon({ className = '', style, ...resto }) {
  return (
    <span className={`grid shrink-0 place-items-center ${className}`} style={{ ...style, borderRadius: '13px', background: 'var(--color-amber)' }} {...resto}>
      <svg viewBox="0 0 24 24" style={{ width: '55%', height: '55%' }}>
        <path
          d="M12 2.5 20 5.5v6.2c0 5-3.4 8.2-8 9.8-4.6-1.6-8-4.8-8-9.8V5.5L12 2.5Z"
          fill="none"
          stroke="var(--color-ink)"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path d="M8.4 12.2 11 14.8 15.8 9.7" fill="none" stroke="var(--color-ink)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

export default function Formacion() {
  const mobile = useEsMobile()
  const { CARRERA, CURSOS, TEXTOS } = useContenido()
  const T = TEXTOS.formacion

  return (
    <>
      <section id="formacion" className="view">
        <p data-anim="pinta" className="absolute font-extrabold uppercase text-amber" style={{ left: mobile ? '8%' : '5.78%', top: mobile ? '10%' : '27.69%', fontSize: mobile ? '28px' : '16px', letterSpacing: '0.3em' }}>
          {T.eyebrow}
        </p>
        <h2 data-anim="clip" data-delay="80" className="absolute font-display" style={{ left: mobile ? '8%' : '5.57%', top: mobile ? '13.5%' : '31.02%', fontSize: mobile ? '96px' : '64px', lineHeight: 1 }}>
          {T.carreraTitulo}
        </h2>
        <p data-anim="pinta" data-delay="160" className="absolute font-extrabold" style={{ left: mobile ? '8%' : '5.78%', top: mobile ? '22.5%' : '38.8%', width: mobile ? '84%' : '32.92%', fontSize: mobile ? '31px' : '21px', lineHeight: 1.3, color: 'var(--color-ink-soft)' }}>
          {T.carreraSubtitulo}
        </p>

        <div className="absolute flex flex-col" style={{ left: mobile ? '8%' : '5.78%', right: mobile ? '8%' : undefined, top: mobile ? '42%' : '50%', gap: mobile ? '86px' : '38px' }}>
          {CARRERA.map((c) => (
            <div key={c.titulo} className="flex items-start" style={{ gap: mobile ? '26px' : '18px' }}>
              <CubeIcon data-anim="brota" className="shrink-0" style={{ width: mobile ? '82px' : '52px', height: mobile ? '82px' : '52px' }} />
              <div className="min-w-0">
                <p data-anim="pinta" className="font-extrabold text-amber" style={{ fontSize: mobile ? '27px' : '18px' }}>
                  {c.periodo}
                </p>
                <p data-anim="pinta" className="font-display" style={{ fontSize: mobile ? '46px' : '25px', lineHeight: 1.1, marginTop: mobile ? '6px' : '2px' }}>
                  {c.titulo}
                </p>
                <p data-anim="pinta" className="font-extrabold" style={{ fontSize: mobile ? '30px' : '17px', color: 'var(--color-ink-mute)', marginTop: mobile ? '8px' : '4px' }}>
                  {c.institucion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cursos mide lo que mide su lista y sube entera, como una pagina mas
          alta (ver listaForm.js), igual que Tecnologias. */}
      <section id="formacion-2" className="view" style={{ bottom: 'auto', paddingTop: mobile ? '150px' : '96px' }}>
          <div id="cursos-col" className="relative">
            <div style={{ paddingLeft: mobile ? '10%' : '12%', paddingRight: mobile ? '8%' : '34%', paddingTop: mobile ? '18px' : '24px', paddingBottom: mobile ? '150px' : '90px' }}>
              <p className="font-extrabold uppercase text-amber" style={{ fontSize: mobile ? '28px' : '16px', letterSpacing: '0.3em' }}>
                {T.eyebrow}
              </p>
              <h2 className="font-display" style={{ fontSize: mobile ? '96px' : '64px', lineHeight: 1, marginTop: mobile ? '10px' : '8px' }}>
                {T.cursosTitulo}
              </h2>

              <div className="flex flex-col items-start" style={{ marginTop: mobile ? '46px' : '44px', gap: mobile ? '48px' : '44px' }}>
                {CURSOS.map((c) => (
                  <div key={c.nombre} className="flex items-start" style={{ gap: mobile ? '24px' : '16px' }}>
                    <ShieldIcon style={{ width: mobile ? '66px' : '46px', height: mobile ? '66px' : '46px' }} />
                    <div className="min-w-0" style={{ maxWidth: mobile ? '720px' : '460px' }}>
                      <a
                        href={c.certificado}
                        target="_blank"
                        rel="noreferrer"
                        className="font-display inline cursor-pointer no-underline transition-colors hover:text-amber"
                        style={{ fontSize: mobile ? '36px' : '21px', lineHeight: 1.12 }}
                      >
                        {c.nombre}
                      </a>
                      <p className="font-extrabold" style={{ fontSize: mobile ? '27px' : '15px', color: 'var(--color-ink-mute)', marginTop: mobile ? '8px' : '4px' }}>
                        {c.institucion} <span className="text-amber">· {c.fecha}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
      </section>
    </>
  )
}
