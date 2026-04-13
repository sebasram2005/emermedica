import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: '¿Es necesario renunciar a mi EPS para tomar este plan?',
    a: 'No. El Plan Integral de Emermédica es un complemento a su EPS actual. Usted conserva su EPS para cirugías mayores y hospitalizaciones complejas, y usa nuestro plan para resolver urgencias y consultas en casa sin filas ni esperas.',
  },
  {
    q: '¿El plan cubre adultos mayores y bebés recién nacidos?',
    a: '¡Por supuesto! A diferencia de las pólizas tradicionales, no tenemos límites de edad. Cubrimos a bebés desde su nacimiento, niños, adultos y adultos mayores sin importar su edad o historial médico previo.',
  },
  {
    q: '¿En qué ciudades tienen atención presencial a domicilio?',
    a: 'Bogotá (+ Chía, Cajicá y Soacha), Medellín, Cali, Bucaramanga, Barranquilla, Cartagena, Neiva y Villavicencio. La orientación médica y telemedicina están disponibles a nivel nacional.',
  },
  {
    q: '¿Qué pasa si el médico determina que necesito hospitalización?',
    a: 'Su vida es nuestra prioridad. Contamos con 68 ambulancias propias equipadas. Si el médico determina que requiere hospitalización, lo trasladamos de forma asistida y segura hacia el centro médico de su EPS sin costo adicional para usted.',
  },
  {
    q: '¿Cuánto tarda en llegar el médico a mi casa?',
    a: 'El triage telefónico ocurre en menos de 5 minutos. La llegada del médico a domicilio depende de la ciudad y la disponibilidad, con tiempos promedio de 30 a 60 minutos. Para casos de urgencia, priorizamos la atención.',
  },
  {
    q: '¿La telemedicina avanzada funciona sin desplazarse?',
    a: 'Sí. Con nuestra telemedicina avanzada (disponible en Bogotá, Medellín y Bucaramanga), el médico puede auscultar su corazón, pulmones y oídos usando dispositivos biométricos desde su hogar, logrando diagnósticos clínicos precisos sin que usted salga de casa.',
  },
  {
    q: '¿Puedo pagar sin tarjeta de crédito?',
    a: 'Sí, aceptamos PSE y otras formas de pago. Sin embargo, el débito automático a tarjeta de crédito activa los mayores descuentos promocionales y elimina la fricción del pago mensual. Pregunte a su asesor por las opciones disponibles.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Resolvemos sus dudas de forma clara y directa</h2>
          <p className="section-subtitle">
            Si tiene más preguntas, un asesor está disponible por WhatsApp en este momento.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-4 px-6 py-4 text-left hover:bg-slate-50/80 transition-colors"
                aria-expanded={open === i}
              >
                <span className="font-semibold text-navy text-sm leading-snug">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-slate-400 transition-transform duration-300 mt-0.5 ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
