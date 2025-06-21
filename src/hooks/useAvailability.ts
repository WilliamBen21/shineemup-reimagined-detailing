
import { useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useAvailability = () => {
  const getAvailableSlots = useCallback(async (date: string) => {
    console.log('Getting available slots for date:', date);
    
    try {
      // Get business hours for the day of week
      const dayOfWeek = new Date(date).getDay();
      
      const { data: businessHours, error: hoursError } = await supabase
        .from('business_hours')
        .select('start_time, end_time')
        .eq('day_of_week', dayOfWeek)
        .eq('is_active', true)
        .maybeSingle();

      if (hoursError) {
        console.error('Error fetching business hours:', hoursError);
        return [];
      }

      if (!businessHours) {
        console.log('No business hours found for day:', dayOfWeek);
        return [];
      }

      // Get existing bookings for the date
      const { data: bookings, error: bookingsError } = await supabase
        .from('bookings')
        .select('booking_time, service_id, services(duration_minutes)')
        .eq('booking_date', date)
        .neq('status', 'cancelled');

      if (bookingsError) {
        console.error('Error fetching bookings:', bookingsError);
        return [];
      }

      // Generate time slots based on business hours
      const startTime = businessHours.start_time;
      const endTime = businessHours.end_time;
      
      const timeSlots = [];
      const start = new Date(`2000-01-01 ${startTime}`);
      const end = new Date(`2000-01-01 ${endTime}`);
      
      while (start < end) {
        const timeString = start.toTimeString().slice(0, 5);
        timeSlots.push(timeString);
        start.setHours(start.getHours() + 1);
      }

      // Filter out booked slots
      const bookedTimes = new Set();
      bookings?.forEach(booking => {
        if (booking.booking_time) {
          bookedTimes.add(booking.booking_time);
        }
      });

      const availableSlots = timeSlots.filter(slot => !bookedTimes.has(slot));
      
      console.log('Available slots:', availableSlots);
      return availableSlots;
    } catch (error) {
      console.error('Error in getAvailableSlots:', error);
      return [];
    }
  }, []);

  return { getAvailableSlots };
};
