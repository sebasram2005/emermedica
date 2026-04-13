import { Check, Star, ArrowRight, CreditCard } from 'lucide-react'

const WHATSAPP = 'TU_NUMERO_WHATSAPP'

const plans = [
  {
    id: 'individual',
    name: 'Plan Individual',
    badge: null,
    people: '1 persona',
    pricePerPerson: 50000,
    totalPrice: 50000,
    listPrice: 70000,
    daily: 1667,
    savings: null,
    highlight: false,
    features: [
      'Consulta médica domiciliaria 24/7',
      'Telemedicina avanzada',
      'Atención de urgencias y emergencias',
      'Traslado en ambulancia propia',
      'Farmacia a domicilio',
      'Orientación psicológica telefónica',
    ],
  },
  {
    id: 'familiar',
    name: 'Plan Familiar',
    badge: '⭐ El favorito',
    people: '4 o más personas',
    pricePerPerson: 30000,
    totalPrice: 120000,
    listPrice: 200000,
    daily: 1000,
    savings: 'Ahorro superior al 60%',
    highlight: true,
    features: [
      'Todo lo del Plan Individual',
      'Cobertura sin límite de personas',
      'Sin exclusiones por edad o parentesco',
      'Controles pediátricos gratuitos (3/año)',
      'Orientación veterinaria ilimitada',
      'Club de descuentos 230+ aliados',
      'Asistencia al viajero nacional/internacional',
    ],
  },
  {
    id: 'pareja',
    name: 'Plan Pareja',
    badge: null,
    people: '2 personas',
    pricePerPerson: 41000,
    totalPrice: 82000,
    listPrice: 100000,
    daily: 1367,
    savings: 'Ahorro del 18% vs individual',
    highlight: false,
    features: [
      'Consulta médica domiciliaria 24/7',
      'Telemedicina avanzada',
      'Atención de urgencias y emergencias',
      'Traslado en ambulancia propia',
      'Farmacia a domicilio',
      'Odontología con tarifas preferenciales',
    ],
  },
]

const formatCOP = (n: number) =>
  `$${n.toLocaleString('es-CO')}`

export default function Pricing() {
  const wa = (plan: string) => {
    const msg = encodeURIComponent(`Hola, quiero cotizar el ${plan} de Emermédica.`)
    return `https://wa.me/${WHATSAPP}?text=${msg}`
  }

  return (
    <section id="planes" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-4">
          <h2 className="section-title">Atención premium ajustada a su economía</h2>
          <p className="section-subtitle">
            Proteja a toda su familia por menos de lo que gasta en transporte al mes.
          </p>
        </div>

        {/* Anclaje cognitivo */}
        <div className="max-w-xl mx-auto mb-10 p-4 bg-orange/10 border border-orange/20 rounded-2xl text-center">
          <p className="text-sm text-slate-600">
            <span className="font-bold text-orange">Referencia de valor:</span>{' '}
            Una sola consulta médica a domicilio particular cuesta entre{' '}
            <strong>$150.000 y $250.000 por evento.</strong>{' '}
            Con Emermédica, accede a atención ilimitada para toda su familia.
          </p>
        </div>

        {/* Descuento TC */}
        <div className="flex items-center justify-center gap-2 mb-8 text-sm text-slate-500">
          <CreditCard size={16} className="text-brand" />
          <span>Precios con <strong className="text-navy">débito automático a Tarjeta de Crédito</strong> — activa el máximo descuento</span>
        </div>

        {/* Tarjetas de planes — orden: individual, familiar (destacado), pareja */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {[plans[0], plans[1], plans[2]].map(plan => (
            <div
              key={plan.id}
              className={`relative rounded-3xl flex flex-col overflow-hidden transition-all duration-300 ${
                plan.highlight
                  ? 'shadow-2xl shadow-brand/20 ring-2 ring-brand scale-[1.03] z-10'
                  : 'border border-slate-200 shadow-sm hover:shadow-lg'
              }`}
            >
              {/* Header */}
              <div className={`px-6 pt-6 pb-5 ${plan.highlight ? 'bg-navy-gradient text-white' : 'bg-slate-50'}`}>
                {plan.badge && (
                  <span className="inline-flex items-center gap-1 bg-orange text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                    <Star size={10} fill="currentColor" /> {plan.badge}
                  </span>
                )}
                <h3 className={`text-xl font-bold ${plan.highlight ? 'text-white' : 'text-navy'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mt-1 ${plan.highlight ? 'text-white/70' : 'text-slate-400'}`}>
                  {plan.people}
                </p>

                {/* Precio */}
                <div className="mt-4">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-sm line-through ${plan.highlight ? 'text-white/40' : 'text-slate-300'}`}>
                      {formatCOP(plan.listPrice)}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl font-black ${plan.highlight ? 'text-white' : 'text-navy'}`}>
                      {formatCOP(plan.pricePerPerson)}
                    </span>
                    <span className={`text-sm ${plan.highlight ? 'text-white/70' : 'text-slate-400'}`}>
                      /persona/mes
                    </span>
                  </div>
                  {plan.id !== 'individual' && (
                    <p className={`text-xs mt-1 ${plan.highlight ? 'text-cyan' : 'text-slate-400'}`}>
                      Total: {formatCOP(plan.totalPrice)}/mes
                    </p>
                  )}
                  <p className={`text-xs font-semibold mt-1 ${plan.highlight ? 'text-cyan' : 'text-emerald'}`}>
                    ≈ {formatCOP(plan.daily)} por día · ¡Menos que un café!
                  </p>
                  {plan.savings && (
                    <span className={`inline-block mt-2 text-xs font-bold px-2.5 py-1 rounded-full ${plan.highlight ? 'bg-white/15 text-white' : 'bg-emerald/10 text-emerald'}`}>
                      {plan.savings}
                    </span>
                  )}
                </div>
              </div>

              {/* Features */}
              <div className="px-6 py-5 flex-1 bg-white">
                <ul className="space-y-2.5">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <Check size={15} className="text-emerald mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="px-6 pb-6 bg-white">
                <a
                  href={wa(plan.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm transition-all active:scale-95 ${
                    plan.highlight
                      ? 'btn-primary'
                      : 'border-2 border-navy text-navy hover:bg-navy hover:text-white'
                  }`}
                >
                  Cotizar {plan.name} <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Micro-copy legal */}
        <p className="text-center text-xs text-slate-400 mt-8 max-w-2xl mx-auto">
          Las tarifas presentadas incluyen IVA y aplican al valor mensual liquidado mediante débito automático
          a Tarjeta de Crédito. Esta promoción no aplica para billeteras digitales como Nequi o Daviplata.
          Aplican términos y condiciones. Precios sujetos a cambio sin previo aviso.
        </p>
      </div>
    </section>
  )
}
