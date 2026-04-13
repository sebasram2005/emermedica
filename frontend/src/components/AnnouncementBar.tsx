import { useState } from 'react'
import { X, Zap } from 'lucide-react'

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="relative z-50 bg-gradient-to-r from-orange to-orange-dark text-white text-sm py-2.5 px-4">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 text-center pr-8">
        <Zap size={14} className="shrink-0 animate-pulse-slow" />
        <p className="font-medium">
          <span className="font-bold">PROMOCIÓN MES DE LA FAMILIA:</span>{' '}
          Hasta 60% de descuento afiliando a todo su núcleo familiar.{' '}
          <span className="underline underline-offset-2 font-bold">Válido por tiempo limitado.</span>
        </p>
      </div>
      <button
        onClick={() => setVisible(false)}
        aria-label="Cerrar anuncio"
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/20 transition-colors"
      >
        <X size={14} />
      </button>
    </div>
  )
}
