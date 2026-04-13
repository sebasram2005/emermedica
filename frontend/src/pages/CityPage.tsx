import { useParams, Navigate } from 'react-router-dom'
import { getCityBySlug } from '@/utils/cities'
import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import TrustBar from '@/components/TrustBar'
import ProblemSolution from '@/components/ProblemSolution'
import HowItWorks from '@/components/HowItWorks'
import Benefits from '@/components/Benefits'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import Guarantees from '@/components/Guarantees'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import StickyCTA from '@/components/StickyCTA'
import SEOHead from '@/components/SEOHead'
import Hero from '@/components/Hero'
import { MapPin, Trophy, ArrowRight } from 'lucide-react'

export default function CityPage() {
  const { citySlug } = useParams<{ citySlug: string }>()
  const city = citySlug ? getCityBySlug(citySlug) : undefined

  // Redirige si la ciudad no existe
  if (!city) return <Navigate to="/" replace />

  const WHATSAPP = 'TU_NUMERO_WHATSAPP'
  const waUrl = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    `Hola, quiero información sobre el Plan Integral de Emermédica en ${city.name}.`
  )}`

  return (
    <>
      <SEOHead city={city} />
      <AnnouncementBar />
      <Navbar />
      <main>
        {/* Hero con nombre de ciudad */}
        <Hero cityName={city.name} />

        <TrustBar />

        {/* Bloque de contexto local */}
        <section className="py-10 bg-white border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-start gap-4 p-6 bg-brand/5 rounded-2xl border border-brand/15">
              <div className="shrink-0 w-10 h-10 bg-brand/15 rounded-xl flex items-center justify-center">
                {city.isLeader
                  ? <Trophy size={20} className="text-brand" />
                  : <MapPin size={20} className="text-brand" />
                }
              </div>
              <div>
                <h2 className="font-bold text-navy text-lg">
                  Médico a domicilio en {city.name} — disponible ahora mismo
                </h2>
                <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                  {city.isLeader
                    ? `Emermédica es la empresa líder en atención médica domiciliaria en ${city.name}, ${city.department}. `
                    : `Emermédica lleva más de 34 años brindando atención médica domiciliaria en ${city.name}, ${city.department}. `
                  }
                  Con cobertura en toda la ciudad para {city.population} de habitantes, nuestros médicos y
                  ambulancias están listos para llegar a su puerta las 24 horas del día, los 365 días del año.
                  {city.description && ` ${city.description}`}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {city.keywords.slice(0, 3).map(kw => (
                    <span key={kw} className="badge bg-brand/10 text-brand text-xs">{kw}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProblemSolution />
        <HowItWorks />
        <Benefits />
        <Pricing />
        <Testimonials />
        <Guarantees />
        <FAQ />

        {/* CTA con mención de ciudad */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-black text-navy">
              Su familia en {city.name} merece{' '}
              <span className="text-cyan">atención médica inmediata.</span>
            </h2>
            <p className="text-slate-500 text-lg">
              Más de 186.000 familias colombianas ya están protegidas. Únase hoy.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary text-base px-8 py-4"
              >
                Afiliarme en {city.name} <ArrowRight size={18} />
              </button>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base px-8 py-4"
              >
                Cotizar por WhatsApp
              </a>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppWidget />
      <StickyCTA />
    </>
  )
}
