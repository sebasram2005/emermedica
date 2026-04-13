# Emermédica — Landing Page Plan Integral

Proyecto full-stack para la landing page de Emermédica con SEO programático y optimización de conversión (CRO).

## Estructura

```
emermedica/
├── backend/    # Node.js + Express + TypeScript
└── frontend/   # React + TypeScript + Vite + Tailwind CSS
```

## Setup rápido

### 1. Backend

```bash
cd backend
npm install
cp .env.example .env
# Editar .env con tus datos reales
npm run dev
# Servidor en http://localhost:3001
```

### 2. Frontend

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
# Sitio en http://localhost:5173
```

## Variables a reemplazar antes de producción

Busca y reemplaza estos placeholders en todo el proyecto:

| Placeholder             | Descripción                              |
|-------------------------|------------------------------------------|
| `TU_DOMINIO.com.co`     | Dominio real del sitio                   |
| `TU_NUMERO_WHATSAPP`    | Número WhatsApp con código país (ej: 573001234567) |
| `TU_TELEFONO`           | Teléfono de contacto (ej: 3077089)       |
| `TU-LINEA`              | Línea nacional gratuita                  |
| `TU-NIT`                | NIT de la empresa                        |
| `GTM-XXXXXXX`           | ID de Google Tag Manager                 |
| `ventas@TU_DOMINIO`     | Email de ventas                          |

## Rutas (SEO programático)

| Ruta                      | Propósito                              |
|---------------------------|----------------------------------------|
| `/`                       | Landing principal (toda Colombia)      |
| `/plan-integral`          | Alias de home                          |
| `/bogota`                 | Página ciudad Bogotá                   |
| `/medellin`               | Página ciudad Medellín                 |
| `/cali`                   | Página ciudad Cali                     |
| `/bucaramanga`            | Página ciudad Bucaramanga              |
| `/barranquilla`           | Página ciudad Barranquilla             |
| `/cartagena`              | Página ciudad Cartagena                |
| `/neiva`                  | Página ciudad Neiva                    |
| `/villavicencio`          | Página ciudad Villavicencio            |

## API endpoints (backend)

| Método | Ruta              | Descripción                     |
|--------|-------------------|---------------------------------|
| GET    | `/api/health`     | Health check                    |
| POST   | `/api/leads`      | Captura lead del formulario     |
| GET    | `/api/leads`      | Lista leads (proteger con auth) |
| GET    | `/sitemap.xml`    | Sitemap para SEO                |
| GET    | `/robots.txt`     | Robots para SEO                 |

## Build para producción

```bash
# Backend
cd backend && npm run build && npm start

# Frontend
cd frontend && npm run build
# Archivos en frontend/dist/ — servir con nginx, Vercel, Netlify, etc.
```
