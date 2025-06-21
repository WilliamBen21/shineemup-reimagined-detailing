
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.50.0';

export const formatPrice = (totalPrice: number): string => {
  return `$${(totalPrice / 100).toFixed(2)}`;
};

export const formatDate = (bookingDate: string): string => {
  return new Date(bookingDate).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const formatVehicleInfo = (vehicleInfo?: { make?: string; model?: string; year?: string }): string => {
  return vehicleInfo?.make || vehicleInfo?.model || vehicleInfo?.year 
    ? `${vehicleInfo.year || ''} ${vehicleInfo.make || ''} ${vehicleInfo.model || ''}`.trim()
    : 'Not specified';
};

export const generateConfirmationToken = async (bookingId: string): Promise<string> => {
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
  );

  const { data: booking } = await supabase
    .from('bookings')
    .select('created_at')
    .eq('id', bookingId)
    .single();

  return btoa(`${bookingId}-${booking?.created_at || new Date().toISOString()}`).slice(0, 16);
};

export const generateConfirmationUrl = (bookingId: string, token: string): string => {
  return `${Deno.env.get('SUPABASE_URL')}/functions/v1/confirm-booking?booking_id=${bookingId}&token=${token}`;
};
