import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'María Fernanda R.',
    city: 'Bogotá, Chapinero',
    rating: 5,
    text: 'Mi hijo de 4 años amaneció con fiebre altísima un sábado a la 1 am. Llamé a Emermédica y en 28 minutos había un médico en mi apartamento. Me evitó horas en urgencias con un niño llorando. Vale cada peso.',
    plan: 'Plan Familiar',
    date: 'Hace 2 meses',
    avatar: 'MF',
  },
  {
    name: 'Gustavo Pacheco',
    city: 'Medellín, El Poblado',
    rating: 5,
    text: 'Mi mamá de 78 años tuvo una crisis de presión arterial. El médico llegó en 35 minutos, la estabilizó en casa y evitamos una traumática visita a urgencias. La telemedicina avanzada es increíble, el doctor escuchó su corazón a distancia.',
    plan: 'Plan Familiar',
    date: 'Hace 1 mes',
    avatar: 'GP',
  },
  {
    name: 'Adriana Moreno',
    city: 'Bucaramanga',
    rating: 5,
    text: 'Llevaba 3 meses esperando cita con un especialista en mi EPS. Con Emermédica accedí a consulta domiciliaria esa misma tarde. El servicio de laboratorio a domicilio también es fantástico. 100% recomendado.',
    plan: 'Plan Individual',
    date: 'Hace 3 semanas',
    avatar: 'AM',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Familias que ya duermen tranquilas</h2>
          <p className="section-subtitle">
            Más de 186.000 afiliados nos respaldan. Estas son sus historias reales.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="card-hover flex flex-col">
              <Quote size={28} className="text-cyan/40 mb-3" />
              <p className="text-slate-600 text-sm leading-relaxed flex-1 italic">
                "{t.text}"
              </p>
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy-gradient flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {t.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-navy text-sm">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.city} · {t.plan}</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={12} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-slate-300 mt-2">{t.date}</p>
            </div>
          ))}
        </div>

        {/* Rating global */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 bg-white rounded-2xl shadow-sm border border-slate-100 px-6 py-3">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <div className="w-px h-6 bg-slate-200" />
            <div>
              <span className="text-2xl font-black text-navy">4.9</span>
              <span className="text-slate-400 text-sm"> / 5</span>
            </div>
            <div className="w-px h-6 bg-slate-200" />
            <span className="text-slate-500 text-sm">+12.400 reseñas verificadas</span>
          </div>
        </div>
      </div>
    </section>
  )
}
