
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface BookingData {
  serviceId: string;
  date: string;
  time: string;
  customerInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
  };
  vehicleInfo: {
    make?: string;
    model?: string;
    year?: string;
    notes?: string;
  };
}

export const useBooking = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const createBooking = async (bookingData: BookingData) => {
    setIsLoading(true);
    try {
      // First, create or get customer
      let customerId: string;
      
      // Check if customer exists
      const { data: existingCustomer } = await supabase
        .from('customers')
        .select('id')
        .eq('email', bookingData.customerInfo.email)
        .single();

      if (existingCustomer) {
        customerId = existingCustomer.id;
      } else {
        // Create new customer
        const { data: newCustomer, error: customerError } = await supabase
          .from('customers')
          .insert({
            first_name: bookingData.customerInfo.firstName,
            last_name: bookingData.customerInfo.lastName,
            email: bookingData.customerInfo.email,
            phone: bookingData.customerInfo.phone
          })
          .select('id')
          .single();

        if (customerError) throw customerError;
        customerId = newCustomer.id;
      }

      // Get service details for price
      const { data: service, error: serviceError } = await supabase
        .from('services')
        .select('price_cents')
        .eq('id', bookingData.serviceId)
        .single();

      if (serviceError) throw serviceError;

      // Create booking
      const { data: booking, error: bookingError } = await supabase
        .from('bookings')
        .insert({
          customer_id: customerId,
          service_id: bookingData.serviceId,
          booking_date: bookingData.date,
          booking_time: bookingData.time,
          vehicle_make: bookingData.vehicleInfo.make,
          vehicle_model: bookingData.vehicleInfo.model,
          vehicle_year: bookingData.vehicleInfo.year,
          notes: bookingData.vehicleInfo.notes,
          total_price_cents: service.price_cents
        })
        .select('confirmation_number')
        .single();

      if (bookingError) throw bookingError;

      toast({
        title: "Booking Confirmed!",
        description: `Your booking has been confirmed. Confirmation number: ${booking.confirmation_number}`,
      });

      return { success: true, confirmationNumber: booking.confirmation_number };
    } catch (error: any) {
      console.error('Booking error:', error);
      toast({
        title: "Booking Failed",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  return { createBooking, isLoading };
};
