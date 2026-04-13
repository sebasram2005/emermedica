import { Wifi, Smile, FlaskConical, Baby, PawPrint, Brain, Plane, ShoppingBag } from 'lucide-react'

const benefits = [
  {
    icon: Wifi,
    title: 'Telemedicina Avanzada',
    desc: 'Dispositivos biométricos inteligentes permiten al médico auscultar su corazón, pulmones y oídos a distancia con precisión clínica total.',
    badge: 'NUEVO',
    badgeColor: 'bg-orange text-white',
    highlight: true,
  },
  {
    icon: Smile,
    title: 'Odontología',
    desc: 'Urgencias odontológicas sin costo, limpieza básica anual gratuita y tarifas preferenciales exclusivas en todos los tratamientos.',
    badge: null,
    highlight: false,
  },
  {
    icon: FlaskConical,
    title: 'Lab y Farmacia a domicilio',
    desc: 'Toma de muestras de laboratorio en casa y entrega de medicamentos recetados directamente en su puerta.',
    badge: null,
    highlight: false,
  },
  {
    icon: Baby,
    title: 'Controles Pediátricos Gratuitos',
    desc: 'Tres controles médicos gratuitos al año para niños entre 0 y 12 años. Cuidamos a los reyes del hogar.',
    badge: null,
    highlight: false,
  },
  {
    icon: PawPrint,
    title: 'Orientación Veterinaria',
    desc: 'Teleorientación ilimitada para el bienestar de su mascota. Entendemos que ellos también son familia.',
    badge: null,
    highlight: false,
  },
  {
    icon: Brain,
    title: 'Salud Mental y Nutrición',
    desc: 'Orientación telefónica profesional en psicología y nutrición disponible sin costo adicional para todos los afiliados.',
    badge: null,
    highlight: false,
  },
  {
    icon: Plane,
    title: 'Asistencia al Viajero',
    desc: 'Cobertura nacional e internacional a través de AXA Asistencia. Viaje tranquilo sabiendo que está protegido.',
    badge: null,
    highlight: false,
  },
  {
    icon: ShoppingBag,
    title: 'Club de Descuentos',
    desc: 'Descuentos entre el 5% y el 50% en más de 230 establecimientos aliados en restaurantes, comercio, educación y más.',
    badge: null,
    highlight: false,
  },
]

export default function Benefits() {
  return (
    <section id="beneficios" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="section-title">
            Mucho más que emergencias. Un ecosistema completo de salud
          </h2>
          <p className="section-subtitle">
            Cada beneficio está diseñado para que recupere su inversión incluso sin enfermarse.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b, i) => (
            <div
              key={i}
              className={`card-hover ${b.highlight
                ? 'ring-2 ring-brand bg-gradient-to-br from-brand/5 to-cyan/5 lg:col-span-2'
                : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`shrink-0 w-11 h-11 rounded-xl flex items-center justify-center ${b.highlight ? 'bg-brand/15' : 'bg-slate-100'}`}>
                  <b.icon size={22} className={b.highlight ? 'text-brand' : 'text-slate-500'} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <h3 className="font-bold text-navy text-sm">{b.title}</h3>
                    {b.badge && (
                      <span className={`badge text-[10px] ${b.badgeColor}`}>{b.badge}</span>
                    )}
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed">{b.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Beneficios seleccionables */}
        <div className="mt-8 p-5 rounded-2xl bg-cyan/10 border border-cyan/20">
          <p className="text-sm font-semibold text-navy mb-3">
            + Elija 2 beneficios adicionales al año:
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              'Enfermería a domicilio',
              'Niñera / ayudante de hogar',
              'Acompañamiento a citas médicas',
              'Soporte tecnológico',
              'Orientación emocional telefónica',
              'Orientación nutricional telefónica',
            ].map(item => (
              <span key={item} className="badge bg-white text-navy border border-cyan/30 text-xs">
                ✓ {item}
              </span>
            ))}
          </div>
        </div>

        {/* Acceso a especialistas */}
        <div className="mt-4 p-5 rounded-2xl bg-navy/5 border border-navy/10 flex items-center gap-4">
          <div className="text-4xl font-black text-navy">600+</div>
          <div>
            <p className="font-bold text-navy text-sm">Especialistas a nivel nacional</p>
            <p className="text-slate-500 text-xs">Acceso preferencial con tarifas exclusivas para afiliados</p>
          </div>
        </div>
      </div>
    </section>
  )
}
