
-- Add foreign key constraints with proper syntax
DO $$
BEGIN
    -- Add customer foreign key if it doesn't exist
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.table_constraints 
        WHERE constraint_name = 'bookings_customer_id_fkey' 
        AND table_name = 'bookings'
    ) THEN
        ALTER TABLE public.bookings 
        ADD CONSTRAINT bookings_customer_id_fkey 
        FOREIGN KEY (customer_id) REFERENCES public.customers(id) ON DELETE CASCADE;
    END IF;

    -- Add service foreign key if it doesn't exist
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.table_constraints 
        WHERE constraint_name = 'bookings_service_id_fkey' 
        AND table_name = 'bookings'
    ) THEN
        ALTER TABLE public.bookings 
        ADD CONSTRAINT bookings_service_id_fkey 
        FOREIGN KEY (service_id) REFERENCES public.services(id) ON DELETE RESTRICT;
    END IF;
END $$;

-- Ensure the confirmation number trigger exists
DROP TRIGGER IF EXISTS trigger_set_confirmation_number ON public.bookings;
CREATE TRIGGER trigger_set_confirmation_number
  BEFORE INSERT ON public.bookings
  FOR EACH ROW
  EXECUTE FUNCTION set_confirmation_number();
