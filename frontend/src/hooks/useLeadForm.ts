import { useState } from 'react';
import type { LeadFormData, LeadResponse } from '@/types';

interface UseLeadFormReturn {
  step: 1 | 2;
  formData: LeadFormData;
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
  whatsappUrl: string | null;
  updateField: <K extends keyof LeadFormData>(field: K, value: LeadFormData[K]) => void;
  submitStep1: () => boolean;
  submitStep2: () => Promise<void>;
  reset: () => void;
}

const initialData: LeadFormData = {
  name: '',
  phone: '',
  city: 'Bogotá',
  people: 4,
  plan: 'familiar',
};

const API_URL = import.meta.env.VITE_API_URL ?? '/api';

export function useLeadForm(): UseLeadFormReturn {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState<LeadFormData>(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);

  const updateField = <K extends keyof LeadFormData>(field: K, value: LeadFormData[K]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError(null);
  };

  const submitStep1 = (): boolean => {
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setError('Ingresa tu nombre completo');
      return false;
    }
    if (!/^[0-9]{10}$/.test(formData.phone.trim())) {
      setError('Ingresa un número de celular válido (10 dígitos)');
      return false;
    }
    setStep(2);
    return true;
  };

  const submitStep2 = async (): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(`${API_URL}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: window.location.pathname,
        }),
      });

      const data = (await res.json()) as LeadResponse;

      if (!res.ok) throw new Error('Error al procesar tu solicitud');

      setWhatsappUrl(data.whatsappUrl);
      setIsSuccess(true);

      // Push evento a GTM/GA4
      if (typeof window !== 'undefined' && (window as { dataLayer?: unknown[] }).dataLayer) {
        (window as { dataLayer: unknown[] }).dataLayer.push({
          event: 'lead_submitted',
          lead_city: formData.city,
          lead_plan: formData.plan,
          lead_people: formData.people,
        });
      }
    } catch {
      setError('Hubo un problema. Por favor intenta de nuevo o escríbenos por WhatsApp.');
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setStep(1);
    setFormData(initialData);
    setIsLoading(false);
    setIsSuccess(false);
    setError(null);
    setWhatsappUrl(null);
  };

  return { step, formData, isLoading, isSuccess, error, whatsappUrl, updateField, submitStep1, submitStep2, reset };
}
