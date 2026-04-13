import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(_req: VercelRequest, res: VercelResponse) {
  const siteUrl = process.env.SITE_URL ?? 'https://TU_DOMINIO.com.co'
  res.setHeader('Content-Type', 'text/plain')
  res.setHeader('Cache-Control', 's-maxage=86400')
  res.send(`User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml`)
}
