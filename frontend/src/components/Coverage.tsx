import { MapPin, Trophy } from 'lucide-react'
import { CITIES } from '@/utils/cities'
import { Link } from 'react-router-dom'

export default function Coverage() {
  return (
    <section id="cobertura" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Cobertura en las principales ciudades de Colombia</h2>
          <p className="section-subtitle">
            Atención presencial domiciliaria en 8 ciudades.
            Telemedicina y orientación médica disponible a nivel nacional.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CITIES.map(city => (
            <Link
              key={city.slug}
              to={`/${city.slug}`}
              className="group card-hover flex items-start gap-3 hover:border-brand/30"
            >
              <div className={`shrink-0 w-9 h-9 rounded-lg flex items-center justify-center ${
                city.isLeader ? 'bg-orange/10' : 'bg-brand/10'
              }`}>
                {city.isLeader
                  ? <Trophy size={18} className="text-orange" />
                  : <MapPin size={18} className="text-brand" />
                }
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-navy text-sm group-hover:text-brand transition-colors">
                    {city.name}
                  </h3>
                  {city.isLeader && (
                    <span className="badge bg-orange/10 text-orange text-[10px]">Líder</span>
                  )}
                </div>
                <p className="text-xs text-slate-400 mt-0.5">{city.department}</p>
                {city.description && (
                  <p className="text-xs text-slate-500 mt-1">{city.description}</p>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Telemedicina nacional */}
        <div className="mt-8 p-6 bg-cyan/10 border border-cyan/20 rounded-2xl flex items-start gap-4">
          <div className="shrink-0 w-12 h-12 bg-cyan/20 rounded-xl flex items-center justify-center text-2xl">
            📡
          </div>
          <div>
            <h3 className="font-bold text-navy">Telemedicina disponible en toda Colombia</h3>
            <p className="text-sm text-slate-600 mt-1">
              Aunque no esté en nuestras ciudades de atención presencial, nuestra orientación médica
              telefónica y telemedicina están disponibles en cualquier rincón del país.
              Viaje tranquilo con su Plan Integral activo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
