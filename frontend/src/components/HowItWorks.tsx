import { Smartphone, Stethoscope, Home, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon:    Smartphone,
    number:  '01',
    title:   'Contáctenos con un clic',
    desc:    'Use nuestra app móvil o llame a nuestra línea exclusiva disponible las 24 horas, los 365 días del año. Triage en menos de 5 minutos.',
    color:   'bg-brand/10 text-brand',
  },
  {
    icon:    Stethoscope,
    number:  '02',
    title:   'Evaluación médica inmediata',
    desc:    'Un profesional de la salud evalúa clínicamente sus síntomas y determina el tipo de atención más adecuada: telemedicina o visita presencial.',
    color:   'bg-cyan/15 text-cyan-dark',
  },
  {
    icon:    Home,
    number:  '03',
    title:   'Atención exacta en su hogar',
    desc:    'Recibe telemedicina avanzada con dispositivos biométricos o uno de nuestros 149 vehículos médicos llega a su puerta. Sin colas. Sin exposición.',
    color:   'bg-emerald/10 text-emerald',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="section-title">Acceder a la mejor atención nunca fue tan simple</h2>
          <p className="section-subtitle">
            Tres pasos. Sin papeles. Sin desplazamientos. Sin riesgo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 relative">
          {/* Conectores desktop */}
          <div className="hidden md:flex absolute top-[72px] left-[calc(33.33%+1rem)] right-[calc(33.33%+1rem)] items-center justify-between pointer-events-none">
            <ArrowRight size={24} className="text-slate-200" />
            <ArrowRight size={24} className="text-slate-200" />
          </div>

          {steps.map((s, i) => (
            <div key={i} className="card-hover text-center group">
              <div className="relative mb-5 inline-flex">
                <div className={`w-20 h-20 rounded-2xl ${s.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}>
                  <s.icon size={32} />
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-navy text-white text-xs font-black flex items-center justify-center">
                  {s.number}
                </span>
              </div>
              <h3 className="text-lg font-bold text-navy mb-3">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Urgencia */}
        <div className="mt-14 bg-navy-gradient rounded-3xl p-8 text-white text-center">
          <p className="text-2xl font-bold mb-2">
            En este momento hay una emergencia que no puede esperar.
          </p>
          <p className="text-white/75 mb-6">
            Más de 186.000 familias ya tienen la tranquilidad de un médico a disposición inmediata.
          </p>
          <button
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary bg-white text-navy hover:bg-slate-100 hover:shadow-white/20"
          >
            Proteger a mi familia ahora
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
