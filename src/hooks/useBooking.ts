
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

// Generate confirmation number in the app as fallback
const generateConfirmationNumber = () => {
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  return `SH${date}-${random}`;
};

export const useBooking = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const createBooking = async (bookingData: BookingData) => {
    setIsLoading(true);
    try {
      console.log('=== BOOKING CREATION START ===');
      console.log('Input data:', JSON.stringify(bookingData, null, 2));
      
      // Validate required fields
      if (!bookingData.serviceId || !bookingData.date || !bookingData.time || 
          !bookingData.customerInfo.firstName || !bookingData.customerInfo.lastName || 
          !bookingData.customerInfo.email) {
        throw new Error('Missing required booking information');
      }

      // First, verify the service exists and get its details
      console.log('Verifying service exists for ID:', bookingData.serviceId);
      const { data: service, error: serviceError } = await supabase
        .from('services')
        .select('id, name, price_cents, duration_minutes')
        .eq('id', bookingData.serviceId)
        .single();

      if (serviceError) {
        console.error('Service verification error:', serviceError);
        throw new Error(`Service not found: ${serviceError.message}`);
      }

      if (!service) {
        throw new Error('Selected service does not exist');
      }

      console.log('Service verified:', service);

      // Create or get customer
      let customerId: string;
      
      console.log('Checking for existing customer with email:', bookingData.customerInfo.email);
      const { data: existingCustomer, error: customerCheckError } = await supabase
        .from('customers')
        .select('id')
        .eq('email', bookingData.customerInfo.email)
        .maybeSingle();

      if (customerCheckError) {
        console.error('Customer check error:', customerCheckError);
        throw new Error(`Customer lookup failed: ${customerCheckError.message}`);
      }

      if (existingCustomer) {
        customerId = existingCustomer.id;
        console.log('Found existing customer with ID:', customerId);
      } else {
        console.log('Creating new customer...');
        const customerData = {
          first_name: bookingData.customerInfo.firstName.trim(),
          last_name: bookingData.customerInfo.lastName.trim(),
          email: bookingData.customerInfo.email.trim().toLowerCase(),
          phone: bookingData.customerInfo.phone?.trim() || null
        };
        console.log('Customer data to insert:', customerData);

        const { data: newCustomer, error: customerError } = await supabase
          .from('customers')
          .insert(customerData)
          .select('id')
          .single();

        if (customerError) {
          console.error('Customer creation error:', customerError);
          throw new Error(`Failed to create customer: ${customerError.message}`);
        }
        
        if (!newCustomer) {
          throw new Error('Customer creation returned no data');
        }
        
        customerId = newCustomer.id;
        console.log('Created new customer with ID:', customerId);
      }

      // Generate confirmation number as fallback
      const confirmationNumber = generateConfirmationNumber();

      // Prepare booking data with confirmation number
      const bookingInsertData = {
        customer_id: customerId,
        service_id: bookingData.serviceId,
        booking_date: bookingData.date,
        booking_time: bookingData.time,
        vehicle_make: bookingData.vehicleInfo.make?.trim() || null,
        vehicle_model: bookingData.vehicleInfo.model?.trim() || null,
        vehicle_year: bookingData.vehicleInfo.year?.trim() || null,
        notes: bookingData.vehicleInfo.notes?.trim() || null,
        total_price_cents: service.price_cents,
        status: 'pending' as const,
        confirmation_number: confirmationNumber
      };

      console.log('=== BOOKING INSERT ATTEMPT ===');
      console.log('Booking data to insert:', JSON.stringify(bookingInsertData, null, 2));

      // Create booking with explicit confirmation number
      const { data: booking, error: bookingError } = await supabase
        .from('bookings')
        .insert(bookingInsertData)
        .select('id, confirmation_number')
        .single();

      if (bookingError) {
        console.error('=== BOOKING INSERT ERROR ===');
        console.error('Error code:', bookingError.code);
        console.error('Error message:', bookingError.message);
        console.error('Error details:', bookingError.details);
        console.error('Error hint:', bookingError.hint);
        throw new Error(`Booking creation failed: ${bookingError.message}`);
      }

      if (!booking) {
        console.error('Booking creation returned no data');
        throw new Error('Booking creation returned no data');
      }

      console.log('=== BOOKING CREATED SUCCESSFULLY ===');
      console.log('Booking result:', booking);

      // Send email notifications
      try {
        console.log('Sending booking confirmation emails...');
        const emailResponse = await supabase.functions.invoke('send-booking-emails', {
          body: {
            bookingId: booking.id,
            customerName: `${bookingData.customerInfo.firstName} ${bookingData.customerInfo.lastName}`,
            customerEmail: bookingData.customerInfo.email,
            serviceName: service.name,
            bookingDate: bookingData.date,
            bookingTime: bookingData.time,
            confirmationNumber: booking.confirmation_number,
            totalPrice: service.price_cents,
            vehicleInfo: {
              make: bookingData.vehicleInfo.make,
              model: bookingData.vehicleInfo.model,
              year: bookingData.vehicleInfo.year
            }
          }
        });

        if (emailResponse.error) {
          console.error('Email sending failed:', emailResponse.error);
          // Don't throw error here - booking was successful, email is secondary
        } else {
          console.log('Confirmation emails sent successfully');
        }
      } catch (emailError) {
        console.error('Error sending emails:', emailError);
        // Don't throw error here - booking was successful, email is secondary
      }

      // Create Google Calendar event
      try {
        console.log('Creating Google Calendar event...');
        const calendarResponse = await supabase.functions.invoke('google-calendar-integration', {
          body: {
            bookingId: booking.id,
            customerName: `${bookingData.customerInfo.firstName} ${bookingData.customerInfo.lastName}`,
            customerEmail: bookingData.customerInfo.email,
            serviceName: service.name,
            bookingDate: bookingData.date,
            bookingTime: bookingData.time,
            duration: service.duration_minutes,
            confirmationNumber: booking.confirmation_number,
            vehicleInfo: {
              make: bookingData.vehicleInfo.make,
              model: bookingData.vehicleInfo.model,
              year: bookingData.vehicleInfo.year
            },
            notes: bookingData.vehicleInfo.notes
          }
        });

        if (calendarResponse.error) {
          console.error('Calendar event creation failed:', calendarResponse.error);
          // Don't throw error here - booking was successful, calendar is secondary
        } else {
          console.log('Calendar event created successfully');
        }
      } catch (calendarError) {
        console.error('Error creating calendar event:', calendarError);
        // Don't throw error here - booking was successful, calendar is secondary
      }

      toast({
        title: "Booking Confirmed!",
        description: `Your booking has been confirmed. Confirmation number: ${booking.confirmation_number}`,
      });

      return { success: true, confirmationNumber: booking.confirmation_number };
    } catch (error: any) {
      console.error('=== BOOKING CREATION FAILED ===');
      console.error('Error:', error);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
      
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
