import { Router, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

const router = Router();

// Almacenamiento en memoria (reemplazar con BD en producción)
interface Lead {
  id: string;
  name: string;
  phone: string;
  city: string;
  people: number;
  plan: string;
  source: string;
  createdAt: string;
}

const leads: Lead[] = [];

// Validaciones
const leadValidations = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 80 })
    .withMessage('Nombre inválido (2-80 caracteres)'),
  body('phone')
    .trim()
    .matches(/^[0-9]{10}$/)
    .withMessage('Teléfono inválido (10 dígitos sin espacios)'),
  body('city')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Ciudad inválida'),
  body('people')
    .isInt({ min: 1, max: 20 })
    .withMessage('Número de personas inválido'),
  body('plan')
    .optional()
    .isIn(['individual', 'pareja', 'familiar'])
    .withMessage('Plan inválido'),
  body('source')
    .optional()
    .isLength({ max: 100 }),
];

// POST /api/leads — Captura un lead
router.post('/', leadValidations, (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, phone, city, people, plan = 'familiar', source = 'landing' } = req.body as {
    name: string; phone: string; city: string;
    people: number; plan?: string; source?: string;
  };

  const lead: Lead = {
    id: `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    name,
    phone,
    city,
    people,
    plan,
    source,
    createdAt: new Date().toISOString(),
  };

  leads.push(lead);

  console.log(`📋 Nuevo lead: ${name} | ${phone} | ${city} | ${people} persona(s)`);

  // URL de WhatsApp pre-cargada para el asesor
  const whatsappNumber = process.env.WHATSAPP_NUMBER ?? '573001234567';
  const message = encodeURIComponent(
    `Hola, me interesa el Plan Integral de Emermédica para ${people} persona(s) en ${city}. Mi nombre es ${name}.`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return res.status(201).json({
    success: true,
    leadId: lead.id,
    whatsappUrl,
    message: 'Lead registrado exitosamente',
  });
});

// GET /api/leads — Lista leads (proteger con auth en producción)
router.get('/', (_req: Request, res: Response) => {
  res.json({
    total: leads.length,
    leads: leads.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()),
  });
});

export default router;
