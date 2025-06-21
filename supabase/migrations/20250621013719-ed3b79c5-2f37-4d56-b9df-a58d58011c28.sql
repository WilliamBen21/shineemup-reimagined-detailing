
-- Create the missing generate_confirmation_number function
CREATE OR REPLACE FUNCTION public.generate_confirmation_number()
RETURNS text
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO ''
AS $$
BEGIN
  RETURN 'SH' || TO_CHAR(NOW(), 'YYYYMMDD') || '-' || LPAD(FLOOR(RANDOM() * 10000)::TEXT, 4, '0');
END;
$$;

-- Recreate the set_confirmation_number function to ensure it works
CREATE OR REPLACE FUNCTION public.set_confirmation_number()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO ''
AS $$
BEGIN
  IF NEW.confirmation_number IS NULL THEN
    NEW.confirmation_number := generate_confirmation_number();
  END IF;
  RETURN NEW;
END;
$$;

-- Ensure the trigger is properly set up
DROP TRIGGER IF EXISTS trigger_set_confirmation_number ON public.bookings;
CREATE TRIGGER trigger_set_confirmation_number
  BEFORE INSERT ON public.bookings
  FOR EACH ROW
  EXECUTE FUNCTION set_confirmation_number();
