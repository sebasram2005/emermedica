import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import leadsRouter from './routes/leads';

dotenv.config();

const app = express();
const PORT = process.env.PORT ?? 3001;
const FRONTEND_URL = process.env.FRONTEND_URL ?? 'http://localhost:5173';
const SITE_URL = process.env.SITE_URL ?? 'https://TU_DOMINIO.com.co';

// Con experimentalServices de Vercel, frontend y backend corren en el mismo
// dominio, por lo que CORS solo es necesario en desarrollo local.
const allowedOrigins = [FRONTEND_URL, SITE_URL, /\.vercel\.app$/];

// ── Seguridad ──────────────────────────────────────────────────────────────
app.use(helmet());
app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));
app.use(express.json({ limit: '10kb' }));

// Rate limiting global
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Demasiadas solicitudes. Intente de nuevo en 15 minutos.' },
});
app.use(limiter);

// Rate limiting estricto para leads
const leadsLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hora
  max: 10,
  message: { error: 'Límite de envíos alcanzado. Intente de nuevo en 1 hora.' },
});

// ── Rutas ──────────────────────────────────────────────────────────────────
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString(), service: 'emermedica-api' });
});

app.use('/api/leads', leadsLimiter, leadsRouter);

// Sitemap.xml para SEO programático
app.get('/sitemap.xml', (_req, res) => {
  const cities = [
    { slug: 'bogota',        name: 'Bogotá' },
    { slug: 'medellin',      name: 'Medellín' },
    { slug: 'cali',          name: 'Cali' },
    { slug: 'bucaramanga',   name: 'Bucaramanga' },
    { slug: 'barranquilla',  name: 'Barranquilla' },
    { slug: 'cartagena',     name: 'Cartagena' },
    { slug: 'neiva',         name: 'Neiva' },
    { slug: 'villavicencio', name: 'Villavicencio' },
  ];

  const today = new Date().toISOString().split('T')[0];

  const urls = [
    `  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`,
    ...cities.map(c => `  <url>
    <loc>${SITE_URL}/${c.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`),
    `  <url>
    <loc>${SITE_URL}/plan-integral</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`,
  ].join('\n');

  res.header('Content-Type', 'application/xml');
  res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`);
});

// robots.txt
app.get('/robots.txt', (_req, res) => {
  res.type('text/plain');
  res.send(`User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml`);
});

// ── 404 handler ────────────────────────────────────────────────────────────
app.use((_req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// ── Error handler ──────────────────────────────────────────────────────────
app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
});

app.listen(PORT, () => {
  console.log(`✅ Servidor Emermédica corriendo en http://localhost:${PORT}`);
});

export default app;
