import { X, Check } from 'lucide-react'

const problems = [
  'Semanas de espera para una cita con su médico de cabecera',
  'Salas de urgencias colapsadas con riesgo de contagio',
  'Copagos inesperados en cada visita médica',
  'Rechazo en pólizas privadas por edad o preexistencias',
  'Trámites interminables para autorizaciones',
  'Sin cobertura domiciliaria en la madrugada',
]

const solutions = [
  'Triage telefónico en menos de 5 minutos · 24/7',
  'Médico en su hogar u oficina: cero riesgo de contagio',
  '$0 copagos y medicamentos incluidos durante la atención',
  'Sin límite de edad ni exclusiones por preexistencias',
  'Afiliación 100% digital en menos de 2 minutos',
  '149 unidades móviles disponibles toda la noche',
]

export default function ProblemSolution() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">
            ¿Por qué depender solo de su EPS cuando su familia merece prioridad?
          </h2>
          <p className="section-subtitle">
            El sistema de salud tradicional está al límite. Más de 2 millones de quejas en 2025.
            Hay una alternativa mejor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Columna EPS */}
          <div className="rounded-3xl border-2 border-red-100 bg-red-50/50 p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <X size={20} className="text-red-500" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg">Lo que sufre hoy con su EPS</h3>
                <p className="text-sm text-slate-500">Sistema tradicional</p>
              </div>
            </div>
            <ul className="space-y-3.5">
              {problems.map(p => (
                <li key={p} className="flex items-start gap-3">
                  <X size={16} className="text-red-400 mt-0.5 shrink-0" />
                  <span className="text-slate-600 text-sm leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna Emermédica */}
          <div className="rounded-3xl border-2 border-emerald/20 bg-emerald/5 p-6 lg:p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 badge bg-emerald text-white text-xs">
              Plan Integral
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-emerald/15 flex items-center justify-center">
                <Check size={20} className="text-emerald" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg">Lo que obtiene con Emermédica</h3>
                <p className="text-sm text-slate-500">Plan Integral domiciliario</p>
              </div>
            </div>
            <ul className="space-y-3.5">
              {solutions.map(s => (
                <li key={s} className="flex items-start gap-3">
                  <Check size={16} className="text-emerald mt-0.5 shrink-0" />
                  <span className="text-slate-700 text-sm font-medium leading-relaxed">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Nota aclaratoria */}
        <p className="text-center text-slate-400 text-sm mt-8">
          * El Plan Integral <strong>no reemplaza</strong> su EPS: la complementa. Conserva su cobertura
          actual y añade atención domiciliaria inmediata.
        </p>
      </div>
    </section>
  )
}
