
-- Fix security warnings by setting search_path for database functions

-- Update the set_confirmation_number function with secure search_path
CREATE OR REPLACE FUNCTION public.set_confirmation_number()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.confirmation_number IS NULL THEN
    NEW.confirmation_number := generate_confirmation_number();
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = '';

-- Update the is_time_slot_available function with secure search_path
CREATE OR REPLACE FUNCTION public.is_time_slot_available(
  check_date DATE,
  check_time TIME,
  service_duration INTEGER
)
RETURNS BOOLEAN AS $$
DECLARE
  booking_end_time TIME;
  conflict_count INTEGER;
BEGIN
  -- Calculate when this booking would end
  booking_end_time := check_time + (service_duration || ' minutes')::INTERVAL;
  
  -- Check for overlapping bookings
  SELECT COUNT(*) INTO conflict_count
  FROM public.bookings
  WHERE booking_date = check_date
    AND status NOT IN ('cancelled')
    AND (
      -- New booking starts during existing booking
      (check_time >= booking_time AND check_time < booking_time + (
        SELECT duration_minutes::TEXT || ' minutes' 
        FROM public.services s 
        WHERE s.id = bookings.service_id
      )::INTERVAL)
      OR
      -- New booking ends during existing booking
      (booking_end_time > booking_time AND booking_end_time <= booking_time + (
        SELECT duration_minutes::TEXT || ' minutes' 
        FROM public.services s 
        WHERE s.id = bookings.service_id
      )::INTERVAL)
      OR
      -- New booking completely encompasses existing booking
      (check_time <= booking_time AND booking_end_time >= booking_time + (
        SELECT duration_minutes::TEXT || ' minutes' 
        FROM public.services s 
        WHERE s.id = bookings.service_id
      )::INTERVAL)
    );
    
  RETURN conflict_count = 0;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = '';

-- Update the generate_confirmation_number function with secure search_path
CREATE OR REPLACE FUNCTION public.generate_confirmation_number()
RETURNS TEXT AS $$
BEGIN
  RETURN 'SH' || TO_CHAR(NOW(), 'YYYYMMDD') || '-' || LPAD(FLOOR(RANDOM() * 10000)::TEXT, 4, '0');
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = '';
