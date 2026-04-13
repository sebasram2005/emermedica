import type { VercelRequest, VercelResponse } from '@vercel/node'

const CITIES = ['bogota', 'medellin', 'cali', 'bucaramanga', 'barranquilla', 'cartagena', 'neiva', 'villavicencio']

export default function handler(_req: VercelRequest, res: VercelResponse) {
  const baseUrl = process.env.SITE_URL ?? 'https://TU_DOMINIO.com.co'
  const today = new Date().toISOString().split('T')[0]

  const urls = [
    { loc: `${baseUrl}/`,             priority: '1.0' },
    { loc: `${baseUrl}/plan-integral`, priority: '0.8' },
    ...CITIES.map(c => ({ loc: `${baseUrl}/${c}`, priority: '0.9' })),
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  res.setHeader('Content-Type', 'application/xml')
  res.setHeader('Cache-Control', 's-maxage=86400')
  res.send(xml)
}
