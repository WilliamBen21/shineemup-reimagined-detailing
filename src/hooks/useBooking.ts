
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
      console.log('=== BOOKING CREATION START ===');
      console.log('Input data:', JSON.stringify(bookingData, null, 2));
      
      // First, create or get customer
      let customerId: string;
      
      // Check if customer exists
      console.log('Checking for existing customer with email:', bookingData.customerInfo.email);
      const { data: existingCustomer, error: customerCheckError } = await supabase
        .from('customers')
        .select('id')
        .eq('email', bookingData.customerInfo.email)
        .maybeSingle();

      if (customerCheckError) {
        console.error('ERROR checking existing customer:', customerCheckError);
        throw new Error(`Customer check failed: ${customerCheckError.message}`);
      }

      if (existingCustomer) {
        customerId = existingCustomer.id;
        console.log('Found existing customer with ID:', customerId);
      } else {
        // Create new customer
        console.log('Creating new customer...');
        const customerInsertData = {
          first_name: bookingData.customerInfo.firstName,
          last_name: bookingData.customerInfo.lastName,
          email: bookingData.customerInfo.email,
          phone: bookingData.customerInfo.phone || null
        };
        console.log('Customer insert data:', customerInsertData);

        const { data: newCustomer, error: customerError } = await supabase
          .from('customers')
          .insert(customerInsertData)
          .select('id')
          .single();

        if (customerError) {
          console.error('ERROR creating customer:', customerError);
          throw new Error(`Customer creation failed: ${customerError.message}`);
        }
        
        if (!newCustomer) {
          throw new Error('Customer creation returned no data');
        }
        
        customerId = newCustomer.id;
        console.log('Created new customer with ID:', customerId);
      }

      // Get service details for price
      console.log('Fetching service details for ID:', bookingData.serviceId);
      const { data: service, error: serviceError } = await supabase
        .from('services')
        .select('price_cents, duration_minutes, name')
        .eq('id', bookingData.serviceId)
        .single();

      if (serviceError) {
        console.error('ERROR fetching service:', serviceError);
        throw new Error(`Service fetch failed: ${serviceError.message}`);
      }

      if (!service) {
        throw new Error('Service not found');
      }

      console.log('Service found:', service);

      // Prepare booking data
      const bookingInsertData = {
        customer_id: customerId,
        service_id: bookingData.serviceId,
        booking_date: bookingData.date,
        booking_time: bookingData.time,
        vehicle_make: bookingData.vehicleInfo.make || null,
        vehicle_model: bookingData.vehicleInfo.model || null,
        vehicle_year: bookingData.vehicleInfo.year || null,
        notes: bookingData.vehicleInfo.notes || null,
        total_price_cents: service.price_cents,
        status: 'pending'
      };

      console.log('=== BOOKING INSERT ATTEMPT ===');
      console.log('Booking insert data:', JSON.stringify(bookingInsertData, null, 2));

      // Create booking with explicit status
      const { data: booking, error: bookingError } = await supabase
        .from('bookings')
        .insert(bookingInsertData)
        .select('confirmation_number, id')
        .single();

      if (bookingError) {
        console.error('=== BOOKING INSERT ERROR ===');
        console.error('Error object:', JSON.stringify(bookingError, null, 2));
        console.error('Error message:', bookingError.message);
        console.error('Error details:', bookingError.details);
        console.error('Error hint:', bookingError.hint);
        console.error('Error code:', bookingError.code);
        throw new Error(`Booking creation failed: ${bookingError.message}`);
      }

      if (!booking) {
        console.error('Booking creation returned no data');
        throw new Error('Booking creation returned no data');
      }

      console.log('=== BOOKING CREATED SUCCESSFULLY ===');
      console.log('Booking result:', JSON.stringify(booking, null, 2));

      toast({
        title: "Booking Confirmed!",
        description: `Your booking has been confirmed. Confirmation number: ${booking.confirmation_number}`,
      });

      return { success: true, confirmationNumber: booking.confirmation_number };
    } catch (error: any) {
      console.error('=== BOOKING CREATION FAILED ===');
      console.error('Error:', error);
      console.error('Error message:', error.message);
      console.error('Full error object:', JSON.stringify(error, null, 2));
      
      toast({
        title: "Booking Failed",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
      console.log('=== BOOKING CREATION END ===');
    }
  };

  return { createBooking, isLoading };
};
