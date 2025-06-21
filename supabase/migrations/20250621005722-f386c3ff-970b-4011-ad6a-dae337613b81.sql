
-- First, let's check what RLS policies exist on the bookings table
-- and make sure we can see the data

-- Temporarily disable RLS to see if that's the issue
-- (We'll re-enable it after checking)
ALTER TABLE public.bookings DISABLE ROW LEVEL SECURITY;

-- Let's also check if there are any existing policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual 
FROM pg_policies 
WHERE tablename = 'bookings';

-- Add a policy that allows viewing all bookings for admin purposes
-- (This will help you see data in Supabase dashboard)
CREATE POLICY "Allow admin access to view all bookings" 
ON public.bookings 
FOR SELECT 
USING (true);

-- Re-enable RLS
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
