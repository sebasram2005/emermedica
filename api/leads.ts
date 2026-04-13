import type { VercelRequest, VercelResponse } from '@vercel/node'

interface Lead {
  id: string
  name: string
  phone: string
  city: string
  people: number
  plan: string
  source: string
  createdAt: string
}

// En producción reemplazar con una BD real (Supabase, PlanetScale, etc.)
const leads: Lead[] = []

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

function validate(body: Record<string, unknown>): string | null {
  const { name, phone, people } = body
  if (!name || typeof name !== 'string' || name.trim().length < 2)
    return 'Nombre inválido (mínimo 2 caracteres)'
  if (!phone || typeof phone !== 'string' || !/^[0-9]{10}$/.test(phone.trim()))
    return 'Teléfono inválido (10 dígitos sin espacios)'
  if (!people || typeof people !== 'number' || people < 1 || people > 20)
    return 'Número de personas inválido'
  return null
}

export default function handler(req: VercelRequest, res: VercelResponse) {
  // CORS preflight
  Object.entries(CORS_HEADERS).forEach(([k, v]) => res.setHeader(k, v))
  if (req.method === 'OPTIONS') return res.status(200).end()

  // POST — capturar lead
  if (req.method === 'POST') {
    const body = req.body as Record<string, unknown>
    const error = validate(body)
    if (error) return res.status(400).json({ error })

    const { name, phone, city = 'No especificada', people, plan = 'familiar', source = 'landing' } = body as {
      name: string; phone: string; city?: string
      people: number; plan?: string; source?: string
    }

    const lead: Lead = {
      id: `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      name: name.trim(),
      phone: phone.trim(),
      city: String(city),
      people: Number(people),
      plan: String(plan),
      source: String(source),
      createdAt: new Date().toISOString(),
    }
    leads.push(lead)
    console.log(`📋 Lead: ${lead.name} | ${lead.phone} | ${lead.city}`)

    // URL WhatsApp pre-cargada para el asesor
    // Reemplazar TU_NUMERO_WHATSAPP con el número real (ej: 573001234567)
    const whatsappNumber = process.env.WHATSAPP_NUMBER ?? 'TU_NUMERO_WHATSAPP'
    const message = encodeURIComponent(
      `Hola, me interesa el Plan Integral de Emermédica para ${lead.people} persona(s) en ${lead.city}. Mi nombre es ${lead.name}.`
    )

    return res.status(201).json({
      success: true,
      leadId: lead.id,
      whatsappUrl: `https://wa.me/${whatsappNumber}?text=${message}`,
      message: 'Lead registrado exitosamente',
    })
  }

  // GET — listar leads (proteger con auth antes de usar en producción)
  if (req.method === 'GET') {
    return res.json({
      total: leads.length,
      leads: [...leads].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()),
    })
  }

  return res.status(405).json({ error: 'Método no permitido' })
}
