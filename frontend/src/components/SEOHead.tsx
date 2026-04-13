import { Helmet } from 'react-helmet-async'
import type { City } from '@/types'

interface SEOHeadProps {
  city?: City
}

const SITE_URL = 'https://TU_DOMINIO.com.co'
const BRAND = 'Emermédica'

// Schema base de organización
const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalOrganization',
  name: BRAND,
  alternateName: 'Emermédica Plan Integral',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  description: 'Compañía líder en atención médica domiciliaria y telemedicina con más de 34 años de experiencia en Colombia, respaldada por AXA Colpatria.',
  telephone: '+57-TU-TELEFONO',
  email: 'ventas@TU_DOMINIO.com.co',
  foundingDate: '1990',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 153 },
  areaServed: ['Bogotá', 'Medellín', 'Cali', 'Bucaramanga', 'Barranquilla', 'Cartagena', 'Neiva', 'Villavicencio'],
  sameAs: [
    'https://www.facebook.com/emermedica',
    'https://www.instagram.com/emermedica',
    'https://www.emermedica.com.co',
  ],
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    name: 'Vigilado Supersalud',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Tengo que renunciar a mi EPS para contratar el Plan Integral?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. El Plan Integral de Emermédica es un complemento a su EPS actual. Usted conserva su EPS y nuestro plan le garantiza atención domiciliaria inmediata sin filas ni esperas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Hay límite de edad para afiliarse?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No existe ningún límite de edad. Afiliamos a personas de cualquier edad, incluyendo adultos mayores y recién nacidos, sin cobros adicionales por edad ni preexistencias.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta el Plan Integral de Emermédica?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El Plan Familiar (4 o más personas) tiene un costo desde $30.000 por persona al mes, equivalente a menos de $1.000 diarios. El Plan Individual cuesta $50.000/mes. Aplican descuentos con débito automático a tarjeta de crédito.',
      },
    },
    {
      '@type': 'Question',
      name: '¿En qué ciudades opera Emermédica?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Operamos en Bogotá (+ Chía, Cajicá y Soacha), Medellín, Cali, Bucaramanga, Barranquilla, Cartagena, Neiva y Villavicencio. La orientación médica telefónica y la telemedicina están disponibles a nivel nacional.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué pasa si necesito hospitalización?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Contamos con 68 ambulancias propias equipadas. Si el médico determina que necesita hospitalización, le trasladamos de forma asistida y segura al centro médico de su EPS o póliza de salud sin costo adicional.',
      },
    },
  ],
}

export default function SEOHead({ city }: SEOHeadProps) {
  const isHome = !city

  const title = isHome
    ? `${BRAND} – Médico a Domicilio y Telemedicina 24/7 en Colombia | Plan Integral`
    : `Médico a Domicilio en ${city.name} 24/7 | ${BRAND} Plan Integral`

  const description = isHome
    ? `${BRAND}: atención médica domiciliaria y telemedicina avanzada sin preexistencias, sin copagos, sin límite de edad. Más de 34 años cuidando familias colombianas. Respaldados por AXA Colpatria. Desde $1.000/día por persona.`
    : `Médico a domicilio en ${city.name} disponible 24 horas los 365 días del año. Sin preexistencias, sin copagos. ${city.population} de habitantes protegidos por ${BRAND}. Plan Integral desde $30.000/mes por persona.`

  const canonical = isHome ? SITE_URL : `${SITE_URL}/${city.slug}`

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: isHome
      ? 'Plan Integral Emermédica – Atención Médica Domiciliaria'
      : `Médico a Domicilio en ${city?.name} – Emermédica`,
    provider: { '@type': 'MedicalOrganization', name: BRAND },
    areaServed: city ? { '@type': 'City', name: city.name } : { '@type': 'Country', name: 'Colombia' },
    description: description,
    offers: {
      '@type': 'Offer',
      price: '30000',
      priceCurrency: 'COP',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '30000',
        priceCurrency: 'COP',
        billingDuration: 'P1M',
        unitText: 'por persona / mes',
      },
    },
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={
        city
          ? city.keywords.join(', ')
          : 'médico a domicilio Colombia, atención médica domiciliaria, telemedicina Colombia, plan de salud domiciliario, urgencias domiciliarias, medicina complementaria, plan integral emermédica, atención médica sin preexistencias'
      } />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="index, follow, max-image-preview:large" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="es_CO" />
      <meta property="og:image" content={`${SITE_URL}/og-image.jpg`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={BRAND} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL}/og-image.jpg`} />

      {/* Schema JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
  )
}
