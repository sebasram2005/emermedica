import { Shield, FileX, Clock, UserCheck } from 'lucide-react'

const guarantees = [
  {
    icon: Shield,
    title: 'Sin costos ocultos. Nunca.',
    desc: 'La tarifa que ves es exactamente lo que pagas. Sin cobros de inscripción, sin cuotas de activación ni tarifas sorpresa.',
    color: 'text-brand bg-brand/10',
  },
  {
    icon: FileX,
    title: 'Sin exámenes médicos de ingreso',
    desc: 'No le pedimos que se someta a peritajes, exámenes físicos ni evaluaciones médicas previas. Si usted respira, usted califica.',
    color: 'text-emerald bg-emerald/10',
  },
  {
    icon: Clock,
    title: 'Sin contratos de permanencia',
    desc: 'No hay cláusulas de permanencia mínima ni penalizaciones por cancelación. Usted tiene el control total en todo momento.',
    color: 'text-cyan-dark bg-cyan/15',
  },
  {
    icon: UserCheck,
    title: 'Sin límite de edad ni preexistencias',
    desc: 'Afiliamos a personas de cualquier edad y con cualquier condición de salud previa. La inclusión total es nuestra política.',
    color: 'text-orange bg-orange/10',
  },
]

export default function Guarantees() {
  return (
    <section className="py-20 bg-navy-gradient text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 badge bg-white/10 text-white/80 mb-4">
            <Shield size={14} />
            Nuestra Promesa de Inclusión Total
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Afiliación completamente transparente.<br className="hidden sm:block" /> Sin letra pequeña.
          </h2>
          <p className="text-white/70 mt-3 max-w-xl mx-auto">
            Eliminamos cada barrera que le impide acceder a la atención médica que su familia merece.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {guarantees.map((g, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${g.color}`}>
                <g.icon size={22} />
              </div>
              <h3 className="font-bold text-white text-sm mb-2">{g.title}</h3>
              <p className="text-white/60 text-xs leading-relaxed">{g.desc}</p>
            </div>
          ))}
        </div>

        {/* Cifra de impacto */}
        <div className="mt-12 text-center">
          <p className="text-5xl font-black text-white">153</p>
          <p className="text-white/60 mt-1">médicos disponibles · 149 unidades móviles · 68 ambulancias propias</p>
        </div>
      </div>
    </section>
  )
}
