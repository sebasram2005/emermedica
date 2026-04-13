import { CheckCircle, ArrowRight, Loader2, Lock } from 'lucide-react'
import { useLeadForm } from '@/hooks/useLeadForm'
import { CITIES } from '@/utils/cities'

export default function LeadForm() {
  const {
    step, formData, isLoading, isSuccess, error,
    whatsappUrl, updateField, submitStep1, submitStep2, reset,
  } = useLeadForm()

  if (isSuccess) {
    return (
      <div className="bg-white rounded-3xl shadow-2xl p-8 text-center space-y-5">
        <div className="w-16 h-16 bg-emerald/10 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle size={36} className="text-emerald" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-navy">¡Listo, {formData.name.split(' ')[0]}!</h3>
          <p className="text-slate-500 mt-2">
            Un asesor se comunicará con usted al <strong>{formData.phone}</strong> en los próximos minutos.
          </p>
        </div>
        {whatsappUrl && (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp w-full justify-center text-base"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Hablar con un asesor ahora
          </a>
        )}
        <button onClick={reset} className="text-sm text-slate-400 hover:text-slate-600 underline transition-colors">
          Enviar otro mensaje
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-navy-gradient px-6 py-5">
        <h2 className="text-white font-bold text-xl">Ver planes con descuento</h2>
        <p className="text-white/70 text-sm mt-1">
          Paso {step} de 2 · El proceso toma menos de 2 minutos
        </p>
        {/* Progress bar */}
        <div className="mt-3 h-1.5 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-cyan rounded-full transition-all duration-500"
            style={{ width: step === 1 ? '50%' : '100%' }}
          />
        </div>
      </div>

      <div className="p-6 space-y-4">
        {step === 1 ? (
          <>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                Nombre completo
              </label>
              <input
                type="text"
                placeholder="Ej: Carlos Rodríguez"
                className="form-input"
                value={formData.name}
                onChange={e => updateField('name', e.target.value)}
                onKeyDown={e => e.key === 'Enter' && submitStep1()}
                autoComplete="name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                Celular
              </label>
              <input
                type="tel"
                placeholder="Ej: 3001234567"
                className="form-input"
                value={formData.phone}
                onChange={e => updateField('phone', e.target.value.replace(/\D/g, '').slice(0, 10))}
                onKeyDown={e => e.key === 'Enter' && submitStep1()}
                autoComplete="tel"
                inputMode="numeric"
              />
            </div>
            {error && (
              <p className="text-red-500 text-sm font-medium">{error}</p>
            )}
            <button
              onClick={submitStep1}
              className="btn-primary w-full text-base py-4"
            >
              Ver planes disponibles
              <ArrowRight size={18} />
            </button>
          </>
        ) : (
          <>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                Ciudad
              </label>
              <select
                className="form-input"
                value={formData.city}
                onChange={e => updateField('city', e.target.value)}
              >
                {CITIES.map(c => (
                  <option key={c.slug} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                ¿Cuántas personas desea proteger?
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                  <button
                    key={n}
                    onClick={() => updateField('people', n)}
                    className={`py-2.5 rounded-xl border-2 font-semibold text-sm transition-all ${
                      formData.people === n
                        ? 'border-brand bg-brand text-white shadow-md'
                        : 'border-slate-200 text-slate-600 hover:border-brand/50'
                    }`}
                  >
                    {n}{n === 8 ? '+' : ''}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                Plan de interés
              </label>
              <div className="space-y-2">
                {[
                  { id: 'individual', label: 'Individual · $50.000/mes' },
                  { id: 'pareja',     label: 'Pareja · $82.000/mes total' },
                  { id: 'familiar',   label: 'Familiar (4+) · Desde $120.000/mes ⭐ Mejor valor' },
                ] .map(p => (
                  <button
                    key={p.id}
                    onClick={() => updateField('plan', p.id as 'individual' | 'pareja' | 'familiar')}
                    className={`w-full text-left px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all ${
                      formData.plan === p.id
                        ? 'border-brand bg-brand/5 text-navy'
                        : 'border-slate-200 text-slate-600 hover:border-brand/40'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
            {error && (
              <p className="text-red-500 text-sm font-medium">{error}</p>
            )}
            <button
              onClick={submitStep2}
              disabled={isLoading}
              className="btn-primary w-full text-base py-4 disabled:opacity-70"
            >
              {isLoading ? (
                <><Loader2 size={18} className="animate-spin" /> Procesando...</>
              ) : (
                <>Proteger a mi familia ahora <ArrowRight size={18} /></>
              )}
            </button>
          </>
        )}

        {/* Trust footer */}
        <div className="flex items-center justify-center gap-2 text-slate-400 text-xs pt-1">
          <Lock size={12} />
          <span>Sus datos están 100% protegidos — Ley 1581 de 2012</span>
        </div>
      </div>
    </div>
  )
}
