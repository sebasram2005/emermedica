import { Shield, Clock, Star, Users } from 'lucide-react'
import LeadForm from './LeadForm'

const WHATSAPP = 'TU_NUMERO_WHATSAPP' // ej: 573001234567

interface HeroProps {
  cityName?: string
}

export default function Hero({ cityName }: HeroProps) {
  const waUrl = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hola, quiero información sobre el Plan Integral de Emermédica.')}`

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-light to-brand min-h-[92vh] flex items-center">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-brand/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Columna texto */}
        <div className="text-white space-y-6">
          {/* Pre-headline */}
          <div className="flex items-center gap-2">
            <span className="badge bg-orange text-white">
              <Shield size={12} />
              Respaldado por AXA Colpatria · Vigilado Supersalud
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight">
            {cityName ? (
              <>Un médico a domicilio en{' '}
                <span className="text-cyan">{cityName}</span>{' '}
                disponible 24/7
              </>
            ) : (
              <>Un médico en la puerta de su casa.{' '}
                <span className="text-cyan">24 horas. Sin filas.</span>
              </>
            )}
          </h1>

          {/* Subtítulo */}
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-xl">
            Complemente su EPS con atención médica domiciliaria, telemedicina avanzada y traslados en ambulancia para toda la familia.{' '}
            <strong className="text-white">Sin preexistencias. Sin copagos. Sin límite de edad.</strong>
          </p>

          {/* Pills de beneficios rápidos */}
          <div className="flex flex-wrap gap-2">
            {[
              { icon: Clock,  label: 'Triage en &lt;5 min' },
              { icon: Shield, label: 'Sin exámenes de ingreso' },
              { icon: Users,  label: 'Toda la familia' },
              { icon: Star,   label: '34 años de experiencia' },
            ].map(({ icon: Icon, label }) => (
              <span key={label} className="flex items-center gap-1.5 bg-white/10 border border-white/20 text-white/90 text-sm px-3 py-1.5 rounded-full backdrop-blur-sm">
                <Icon size={13} />
                <span dangerouslySetInnerHTML={{ __html: label }} />
              </span>
            ))}
          </div>

          {/* Precio ancla */}
          <div className="bg-white/10 border border-white/20 rounded-2xl p-4 backdrop-blur-sm inline-block">
            <p className="text-white/70 text-sm mb-1">Plan Familiar — desde</p>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black text-white">$30.000</span>
              <span className="text-white/70">/persona al mes</span>
            </div>
            <p className="text-cyan text-sm mt-1 font-semibold">
              ≈ $1.000 diarios · Menos que un café
            </p>
          </div>

          {/* CTAs secundarios */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Cotizar por WhatsApp
            </a>
          </div>
        </div>

        {/* Columna formulario */}
        <div id="contacto" className="lg:pl-8">
          <LeadForm />
        </div>
      </div>

      {/* Ola inferior */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L1440 60L1440 20C1200 60 720 0 0 40L0 60Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
