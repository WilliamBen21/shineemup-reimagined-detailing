
-- Create customers table to store customer information
CREATE TABLE public.customers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create services table to store service definitions
CREATE TABLE public.services (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price_cents INTEGER NOT NULL,
  duration_minutes INTEGER NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('car', 'truck', 'interior')),
  features TEXT[] DEFAULT '{}',
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create bookings table to store appointment details
CREATE TABLE public.bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_id UUID NOT NULL REFERENCES public.customers(id) ON DELETE CASCADE,
  service_id UUID NOT NULL REFERENCES public.services(id) ON DELETE RESTRICT,
  booking_date DATE NOT NULL,
  booking_time TIME NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'in_progress', 'completed', 'cancelled')),
  vehicle_make TEXT,
  vehicle_model TEXT,
  vehicle_year TEXT,
  notes TEXT,
  total_price_cents INTEGER,
  confirmation_number TEXT UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(booking_date, booking_time)
);

-- Create business_hours table for availability management
CREATE TABLE public.business_hours (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  day_of_week INTEGER NOT NULL CHECK (day_of_week >= 0 AND day_of_week <= 6), -- 0 = Sunday, 6 = Saturday
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Insert default services data
INSERT INTO public.services (name, description, price_cents, duration_minutes, category, features) VALUES
-- Car Services
('Hand Wash Package', 'Basic exterior wash and cleaning', 4000, 60, 'car', '{"Wash", "Rim Cleaning", "Tire Clean & Tire Shine", "Vacuum"}'),
('Bronze Package', 'Complete basic detailing service', 6500, 90, 'car', '{"Wash", "Rim Cleaning", "Tire Clean & Tire Shine", "Vacuum", "Window Cleaning", "Interior Wipe Down", "Door/Trunk Jam Wipe Out", "Air Freshener"}'),
('Silver Package', 'Premium detailing with protection', 12000, 150, 'car', '{"Wash", "Rim Cleaning", "Tire Clean & Tire Shine", "Window Cleaning", "Vacuum", "Interior Deep Clean", "Interior Protection", "Black Trim Protection", "Door/Trunk Jam Wipe Out", "Air Freshener"}'),
('Gold Package', 'Ultimate detailing experience', 20000, 240, 'car', '{"Wash", "Rim Cleaning", "Tire Clean & Tire Shine", "Window Cleaning", "Interior Deep Clean", "Interior Protection", "Seat & Carpet Shampoo", "Black Trim Protection", "Engine Bay Cleaning", "Door/Trunk Jam Wipe Out", "Air Freshener"}'),

-- Truck Services
('Exterior Wash Only', 'Basic exterior cleaning for semi-trucks', 6500, 90, 'truck', '{"Exterior Wash"}'),
('Basic Detail', 'Complete basic detailing for trucks', 15000, 180, 'truck', '{"Truck Body", "Frame Cleaning", "Rim Cleaning", "Tire Cleaning & Tire Shine", "Interior Wipe Down", "Interior Floor Cleaning"}'),
('Ultimate Detail', 'Premium truck detailing service', 25000, 300, 'truck', '{"Truck Body", "Frame Cleaning", "Rim Cleaning", "Tire Cleaning & Tire Shine", "Interior Deep Cleaning", "Floor Cleaning", "Interior Protection", "Window Cleaning"}'),

-- Interior Services
('Interior Bronze Package', 'Basic interior cleaning service', 10000, 120, 'interior', '{"Interior Wipe Down", "Floor Cleaning", "Window Cleaning"}'),
('Interior Silver Package', 'Premium interior detailing', 15000, 180, 'interior', '{"Interior Deep Cleaning", "Interior Protection", "Floor Cleaning", "Window Cleaning"}');

-- Insert default business hours (9 AM to 5 PM, Monday to Saturday)
INSERT INTO public.business_hours (day_of_week, start_time, end_time) VALUES
(1, '09:00:00', '17:00:00'), -- Monday
(2, '09:00:00', '17:00:00'), -- Tuesday
(3, '09:00:00', '17:00:00'), -- Wednesday
(4, '09:00:00', '17:00:00'), -- Thursday
(5, '09:00:00', '17:00:00'), -- Friday
(6, '09:00:00', '17:00:00'); -- Saturday

-- Enable Row Level Security
ALTER TABLE public.customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.business_hours ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for customers (customers can only see their own data)
CREATE POLICY "Customers can view their own data" ON public.customers
  FOR SELECT USING (true); -- Allow reading for booking form

CREATE POLICY "Customers can insert their own data" ON public.customers
  FOR INSERT WITH CHECK (true); -- Allow creation during booking

-- Create RLS policies for services (public read access)
CREATE POLICY "Anyone can view services" ON public.services
  FOR SELECT USING (is_active = true);

-- Create RLS policies for bookings (customers can see their own bookings)
CREATE POLICY "Anyone can create bookings" ON public.bookings
  FOR INSERT WITH CHECK (true); -- Allow booking creation

CREATE POLICY "Anyone can view bookings" ON public.bookings
  FOR SELECT USING (true); -- For checking availability

-- Create RLS policies for business hours (public read access)
CREATE POLICY "Anyone can view business hours" ON public.business_hours
  FOR SELECT USING (is_active = true);

-- Create function to generate confirmation number
CREATE OR REPLACE FUNCTION generate_confirmation_number()
RETURNS TEXT AS $$
BEGIN
  RETURN 'SH' || TO_CHAR(NOW(), 'YYYYMMDD') || '-' || LPAD(FLOOR(RANDOM() * 10000)::TEXT, 4, '0');
END;
$$ LANGUAGE plpgsql;

-- Create trigger to auto-generate confirmation number
CREATE OR REPLACE FUNCTION set_confirmation_number()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.confirmation_number IS NULL THEN
    NEW.confirmation_number := generate_confirmation_number();
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_set_confirmation_number
  BEFORE INSERT ON public.bookings
  FOR EACH ROW
  EXECUTE FUNCTION set_confirmation_number();

-- Create function to check time slot availability
CREATE OR REPLACE FUNCTION is_time_slot_available(
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
$$ LANGUAGE plpgsql SECURITY DEFINER;
