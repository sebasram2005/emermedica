import type { City } from '@/types';

export const CITIES: City[] = [
  {
    slug: 'bogota',
    name: 'Bogotá',
    department: 'Cundinamarca',
    population: '8 millones',
    isLeader: true,
    keywords: ['médico a domicilio bogotá', 'urgencias domiciliarias bogotá', 'telemedicina bogotá', 'atención médica en casa bogotá'],
    description: 'También cubrimos Chía, Cajicá y Soacha.',
  },
  {
    slug: 'medellin',
    name: 'Medellín',
    department: 'Antioquia',
    population: '2.7 millones',
    isLeader: false,
    keywords: ['médico a domicilio medellín', 'urgencias domiciliarias medellín', 'telemedicina medellín', 'atención médica en casa medellín'],
    description: 'Cobertura en toda el área metropolitana.',
  },
  {
    slug: 'cali',
    name: 'Cali',
    department: 'Valle del Cauca',
    population: '2.2 millones',
    isLeader: false,
    keywords: ['médico a domicilio cali', 'urgencias domiciliarias cali', 'telemedicina cali', 'atención médica en casa cali'],
    description: 'Servicio disponible en toda la ciudad.',
  },
  {
    slug: 'bucaramanga',
    name: 'Bucaramanga',
    department: 'Santander',
    population: '1.1 millones',
    isLeader: false,
    keywords: ['médico a domicilio bucaramanga', 'urgencias domiciliarias bucaramanga', 'telemedicina bucaramanga', 'atención médica en casa bucaramanga'],
    description: 'Incluye área metropolitana de Bucaramanga.',
  },
  {
    slug: 'barranquilla',
    name: 'Barranquilla',
    department: 'Atlántico',
    population: '1.3 millones',
    isLeader: false,
    keywords: ['médico a domicilio barranquilla', 'urgencias domiciliarias barranquilla', 'telemedicina barranquilla', 'atención médica en casa barranquilla'],
    description: 'Cobertura en el Distrito Especial.',
  },
  {
    slug: 'cartagena',
    name: 'Cartagena',
    department: 'Bolívar',
    population: '1 millón',
    isLeader: false,
    keywords: ['médico a domicilio cartagena', 'urgencias domiciliarias cartagena', 'telemedicina cartagena', 'atención médica en casa cartagena'],
    description: 'Disponible en toda la ciudad amurallada y sus barrios.',
  },
  {
    slug: 'neiva',
    name: 'Neiva',
    department: 'Huila',
    population: '380.000',
    isLeader: true,
    keywords: ['médico a domicilio neiva', 'urgencias domiciliarias neiva', 'telemedicina neiva', 'atención médica en casa neiva'],
    description: 'Líderes en atención domiciliaria en el Huila.',
  },
  {
    slug: 'villavicencio',
    name: 'Villavicencio',
    department: 'Meta',
    population: '530.000',
    isLeader: true,
    keywords: ['médico a domicilio villavicencio', 'urgencias domiciliarias villavicencio', 'telemedicina villavicencio', 'atención médica en casa villavicencio'],
    description: 'Líderes en atención médica domiciliaria en el Meta.',
  },
];

export const getCityBySlug = (slug: string): City | undefined =>
  CITIES.find(c => c.slug === slug);

export const getCityNames = (): string =>
  CITIES.map(c => c.name).join(', ');
