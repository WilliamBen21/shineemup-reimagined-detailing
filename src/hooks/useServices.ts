
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface Service {
  id: string;
  name: string;
  description: string;
  price_cents: number;
  duration_minutes: number;
  category: 'car' | 'truck' | 'interior';
  features: string[];
}

export const useServices = () => {
  const [services, setServices] = useState<Record<string, Service[]>>({
    car: [],
    truck: [],
    interior: []
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data, error } = await supabase
          .from('services')
          .select('*')
          .eq('is_active', true)
          .order('price_cents');

        if (error) throw error;

        const groupedServices = data.reduce((acc, service) => {
          if (!acc[service.category]) acc[service.category] = [];
          acc[service.category].push(service);
          return acc;
        }, {} as Record<string, Service[]>);

        setServices(groupedServices);
      } catch (err: any) {
        setError(err.message);
        console.error('Error fetching services:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchServices();
  }, []);

  return { services, isLoading, error };
};
