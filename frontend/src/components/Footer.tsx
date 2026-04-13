import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CITIES } from '@/utils/cities'

const PHONE_BOGOTA   = '(601) TU-TELEFONO'
const PHONE_NATIONAL = '01 8000 TU-LINEA'
const EMAIL          = 'info@TU_DOMINIO.com.co'
const WEBSITE        = 'www.emermedica.com.co'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Marca */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-lg leading-none">E</span>
              </div>
              <div>
                <span className="text-white font-black text-xl">emer</span>
                <span className="text-cyan font-black text-xl">médica</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Porque tu salud nos mueve.<br />
              Más de 34 años cuidando familias colombianas.
            </p>
            <div className="flex items-center gap-2 text-white/40 text-xs">
              <div className="w-4 h-4 bg-white/10 rounded flex items-center justify-center">
                <span className="text-[9px] font-bold">S</span>
              </div>
              Vigilado Supersalud
            </div>
            <div className="flex items-center gap-2 text-white/40 text-xs mt-2">
              <div className="w-4 h-4 bg-red-500/20 rounded flex items-center justify-center">
                <span className="text-[9px] font-bold text-red-300">A</span>
              </div>
              Respaldado por AXA Colpatria
            </div>
          </div>

          {/* Ciudades */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Cobertura</h4>
            <ul className="space-y-2">
              {CITIES.map(c => (
                <li key={c.slug}>
                  <Link
                    to={`/${c.slug}`}
                    className="text-white/50 hover:text-white text-sm transition-colors flex items-center gap-1.5"
                  >
                    <MapPin size={11} />
                    Médico a domicilio {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Servicios</h4>
            <ul className="space-y-2 text-white/50 text-sm">
              {[
                'Consulta Médica Domiciliaria',
                'Telemedicina Avanzada',
                'Atención de Urgencias',
                'Atención de Emergencias',
                'Traslados en Ambulancia',
                'Laboratorio a Domicilio',
                'Farmacia a Domicilio',
                'Odontología',
                'Controles Pediátricos',
                'Asistencia al Viajero',
              ].map(s => (
                <li key={s}>
                  <span className="hover:text-white transition-colors cursor-default">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/60 text-sm">
                <Phone size={14} className="mt-0.5 shrink-0 text-cyan" />
                <div>
                  <p>Bogotá: <a href={`tel:${PHONE_BOGOTA.replace(/\D/g, '')}`} className="hover:text-white transition-colors">{PHONE_BOGOTA}</a></p>
                  <p>Nacional: <a href={`tel:${PHONE_NATIONAL.replace(/\s/g, '')}`} className="hover:text-white transition-colors">{PHONE_NATIONAL}</a></p>
                </div>
              </li>
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <Mail size={14} className="shrink-0 text-cyan" />
                <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">{EMAIL}</a>
              </li>
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <ExternalLink size={14} className="shrink-0 text-cyan" />
                <a
                  href={`https://${WEBSITE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {WEBSITE}
                </a>
              </li>
            </ul>

            {/* Redes sociales */}
            <div className="mt-5">
              <p className="text-white/40 text-xs mb-2">Síguenos</p>
              <div className="flex gap-3">
                {['Facebook', 'Instagram', 'YouTube'].map(red => (
                  <a
                    key={red}
                    href="#"
                    aria-label={red}
                    className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:bg-white/20 hover:text-white transition-all text-xs font-bold"
                  >
                    {red[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider + legal */}
        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs text-center sm:text-left">
            © {year} Emermédica — Todos los derechos reservados. NIT: TU-NIT.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-white/30 text-xs">
            <a href="#" className="hover:text-white/70 transition-colors">Términos y condiciones</a>
            <a href="#" className="hover:text-white/70 transition-colors">Política de privacidad</a>
            <a href="#" className="hover:text-white/70 transition-colors">Habeas data</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
