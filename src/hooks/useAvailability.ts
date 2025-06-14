
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useAvailability = () => {
  const [isChecking, setIsChecking] = useState(false);

  const checkAvailability = async (date: string, time: string, serviceDuration: number) => {
    setIsChecking(true);
    try {
      const { data, error } = await supabase.rpc('is_time_slot_available', {
        check_date: date,
        check_time: time,
        service_duration: serviceDuration
      });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error checking availability:', error);
      return false;
    } finally {
      setIsChecking(false);
    }
  };

  const getAvailableSlots = async (date: string) => {
    try {
      // Get business hours for the day of week
      const dayOfWeek = new Date(date).getDay();
      const { data: businessHours } = await supabase
        .from('business_hours')
        .select('start_time, end_time')
        .eq('day_of_week', dayOfWeek)
        .eq('is_active', true)
        .single();

      if (!businessHours) return [];

      // Get existing bookings for the date
      const { data: bookings } = await supabase
        .from('bookings')
        .select('booking_time, services(duration_minutes)')
        .eq('booking_date', date)
        .neq('status', 'cancelled');

      // Generate time slots (every hour from start to end time)
      const slots = [];
      const startHour = parseInt(businessHours.start_time.split(':')[0]);
      const endHour = parseInt(businessHours.end_time.split(':')[0]);

      for (let hour = startHour; hour < endHour; hour++) {
        const timeSlot = `${hour.toString().padStart(2, '0')}:00`;
        
        // Check if slot is available (not conflicting with existing bookings)
        const isAvailable = !bookings?.some(booking => {
          const bookingTime = booking.booking_time;
          const bookingDuration = booking.services?.duration_minutes || 60;
          const bookingEndTime = new Date(`2000-01-01T${bookingTime}`);
          bookingEndTime.setMinutes(bookingEndTime.getMinutes() + bookingDuration);
          
          const slotTime = new Date(`2000-01-01T${timeSlot}:00`);
          const slotEndTime = new Date(slotTime);
          slotEndTime.setHours(slotEndTime.getHours() + 1);
          
          return (slotTime < bookingEndTime && slotEndTime > new Date(`2000-01-01T${bookingTime}`));
        });

        if (isAvailable) {
          slots.push(timeSlot);
        }
      }

      return slots;
    } catch (error) {
      console.error('Error getting available slots:', error);
      return [];
    }
  };

  return { checkAvailability, getAvailableSlots, isChecking };
};
