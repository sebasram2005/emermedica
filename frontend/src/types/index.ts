export interface City {
  slug: string;
  name: string;
  department: string;
  population: string;
  isLeader: boolean;
  keywords: string[];
  description: string;
}

export interface LeadFormData {
  name: string;
  phone: string;
  city: string;
  people: number;
  plan: 'individual' | 'pareja' | 'familiar';
}

export interface LeadResponse {
  success: boolean;
  leadId: string;
  whatsappUrl: string;
  message: string;
}

export interface Plan {
  id: 'individual' | 'pareja' | 'familiar';
  name: string;
  badge?: string;
  people: string;
  pricePerPerson: number;
  totalPrice: number;
  dailyPrice: number;
  listPrice: number;
  savings: string;
  features: string[];
  highlight: boolean;
  cta: string;
}

export interface Benefit {
  icon: string;
  title: string;
  description: string;
  badge?: string;
}

export interface Testimonial {
  name: string;
  city: string;
  rating: number;
  text: string;
  plan: string;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
