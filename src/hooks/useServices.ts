
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { Database } from '@/integrations/supabase/types';

type ServiceCategory = 'car' | 'truck' | 'interior';

interface Service {
  id: string;
  name: string;
  description: string;
  price_cents: number;
  duration_minutes: number;
  category: ServiceCategory;
  features: string[];
}

export const useServices = () => {
  const [services, setServices] = useState<Record<ServiceCategory, Service[]>>({
    car: [],
    truck: [],
    interior: []
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        console.log('Fetching services from Supabase...');
        const { data, error } = await supabase
          .from('services')
          .select('*')
          .eq('is_active', true)
          .order('price_cents');

        if (error) {
          console.error('Supabase error:', error);
          throw error;
        }

        console.log('Raw services data:', data);

        // Type-safe mapping with category validation
        const validServices = data?.filter(service => 
          ['car', 'truck', 'interior'].includes(service.category)
        ) || [];

        const groupedServices = validServices.reduce((acc, service) => {
          const category = service.category as ServiceCategory;
          if (!acc[category]) acc[category] = [];
          
          acc[category].push({
            id: service.id,
            name: service.name,
            description: service.description || '',
            price_cents: service.price_cents,
            duration_minutes: service.duration_minutes,
            category: category,
            features: service.features || []
          });
          return acc;
        }, {} as Record<ServiceCategory, Service[]>);

        console.log('Grouped services:', groupedServices);
        setServices(groupedServices);
      } catch (err: any) {
        console.error('Error fetching services:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchServices();
  }, []);

  return { services, isLoading, error };
};
