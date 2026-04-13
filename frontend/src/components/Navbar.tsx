import { useState, useEffect } from 'react'
import { Phone, Menu, X } from 'lucide-react'

// Reemplazar con el número real
const PHONE = 'TU_TELEFONO'
const PHONE_DISPLAY = '(601) TU-TELEFONO'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2" aria-label="Emermédica inicio">
          <div className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center">
            <span className="text-white font-black text-lg leading-none">E</span>
          </div>
          <div>
            <span className="text-navy font-black text-xl tracking-tight">emer</span>
            <span className="text-cyan font-black text-xl tracking-tight">médica</span>
            <p className="text-slate-400 text-[9px] leading-none tracking-wide hidden sm:block">
              Porque tu salud nos mueve.
            </p>
          </div>
        </a>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <button onClick={() => scrollTo('beneficios')} className="hover:text-navy transition-colors">
            Beneficios
          </button>
          <button onClick={() => scrollTo('planes')} className="hover:text-navy transition-colors">
            Planes
          </button>
          <button onClick={() => scrollTo('cobertura')} className="hover:text-navy transition-colors">
            Cobertura
          </button>
          <button onClick={() => scrollTo('faq')} className="hover:text-navy transition-colors">
            Preguntas
          </button>
        </nav>

        {/* CTA derecha */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${PHONE}`}
            className="hidden sm:flex items-center gap-2 text-sm font-semibold text-navy hover:text-brand transition-colors"
          >
            <Phone size={16} />
            {PHONE_DISPLAY}
          </a>
          <button
            onClick={() => scrollTo('contacto')}
            className="btn-primary text-sm py-2.5 px-4 hidden sm:inline-flex"
          >
            Afiliarme ahora
          </button>
          {/* Menú móvil */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-3 shadow-lg">
          {['beneficios', 'planes', 'cobertura', 'faq', 'contacto'].map(id => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="block w-full text-left py-2.5 px-3 rounded-lg text-slate-700 font-medium hover:bg-slate-50 capitalize transition-colors"
            >
              {id === 'faq' ? 'Preguntas frecuentes' : id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
          <a
            href={`tel:${PHONE}`}
            className="flex items-center gap-2 py-2.5 px-3 text-navy font-semibold"
          >
            <Phone size={16} />
            Llamar: {PHONE_DISPLAY}
          </a>
        </div>
      )}
    </header>
  )
}
