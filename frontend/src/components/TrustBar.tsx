import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'

const stats = [
  { value: 34,      suffix: '+',  label: 'Años de experiencia',        decimals: 0 },
  { value: 186160,  suffix: '+',  label: 'Familias afiliadas',          decimals: 0 },
  { value: 506000,  suffix: '+',  label: 'Atenciones médicas al año',   decimals: 0 },
  { value: 38936,   suffix: '+',  label: 'Vidas salvadas por año',      decimals: 0 },
]

export default function TrustBar() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section className="bg-white border-b border-slate-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Logos de autoridad */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
          <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
            <div className="w-6 h-6 bg-navy/10 rounded flex items-center justify-center">
              <span className="text-navy font-black text-xs">S</span>
            </div>
            Vigilado <strong className="text-navy">Supersalud</strong>
          </div>
          <div className="hidden sm:block w-px h-6 bg-slate-200" />
          <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
            <div className="w-6 h-6 bg-red-100 rounded flex items-center justify-center">
              <span className="text-red-600 font-black text-xs">A</span>
            </div>
            Respaldado por <strong className="text-navy">AXA Colpatria</strong>
          </div>
          <div className="hidden sm:block w-px h-6 bg-slate-200" />
          <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
            <span className="text-yellow-500">★★★★★</span>
            <strong className="text-navy">4.9/5</strong> calificación
          </div>
          <div className="hidden sm:block w-px h-6 bg-slate-200" />
          <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
            🏆 Líderes en Bogotá, Villavicencio y Neiva
          </div>
        </div>

        {/* Estadísticas con CountUp */}
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(s => (
            <div key={s.label} className="text-center p-4 rounded-2xl bg-slate-50">
              <div className="text-3xl sm:text-4xl font-black text-navy">
                {inView ? (
                  <CountUp
                    end={s.value}
                    suffix={s.suffix}
                    duration={2}
                    separator="."
                    decimals={s.decimals}
                  />
                ) : (
                  <span>0{s.suffix}</span>
                )}
              </div>
              <p className="text-sm text-slate-500 mt-1 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
