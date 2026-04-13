import { ArrowRight, Users } from 'lucide-react'
import LeadForm from './LeadForm'

const WHATSAPP = 'TU_NUMERO_WHATSAPP'

export default function FinalCTA() {
  const waUrl = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hola, quiero afiliarme al Plan Integral de Emermédica.')}`

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-orange font-semibold text-sm">
              <Users size={16} />
              Más de 186.000 familias ya están protegidas
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-navy leading-tight">
              La tranquilidad de su familia
              <span className="text-cyan"> no admite postergaciones.</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              No permita que una emergencia médica en la madrugada le haga lamentar
              no haber tomado una decisión a tiempo.
            </p>

            {/* Urgencia legítima */}
            <div className="bg-orange/5 border border-orange/20 rounded-2xl p-4">
              <p className="text-sm font-semibold text-orange mb-1">Oferta con tiempo limitado</p>
              <p className="text-sm text-slate-600">
                Las tarifas promocionales aplican solo durante la campaña vigente.
                El precio sube al terminar el período de inscripción digital.
              </p>
            </div>

            {/* Mini beneficios */}
            <div className="space-y-2">
              {[
                'Afiliación 100% digital en menos de 2 minutos',
                'Sin exámenes médicos ni papelería',
                'Sin contratos de permanencia',
                'Primer mes con cobertura desde el día 31',
              ].map(item => (
                <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="w-5 h-5 rounded-full bg-emerald/15 flex items-center justify-center shrink-0">
                    <span className="text-emerald text-xs font-bold">✓</span>
                  </div>
                  {item}
                </div>
              ))}
            </div>

            {/* Botón WhatsApp */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex text-base px-8 py-4"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Hablar con un asesor ahora
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Formulario */}
          <div>
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  )
}
