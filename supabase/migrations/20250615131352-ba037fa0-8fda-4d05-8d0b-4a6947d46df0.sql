
-- Create a table to store lead magnet signups
CREATE TABLE public.lead_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  signup_type TEXT NOT NULL DEFAULT 'lead_magnet', -- 'lead_magnet' or 'newsletter'
  source TEXT, -- 'exit', 'scroll', 'time', or 'newsletter'
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add an index on email for faster lookups
CREATE INDEX idx_lead_signups_email ON public.lead_signups(email);

-- Add an index on created_at for time-based queries
CREATE INDEX idx_lead_signups_created_at ON public.lead_signups(created_at);

-- Enable Row Level Security (making it public since this is a lead capture form)
ALTER TABLE public.lead_signups ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert (for the lead capture)
CREATE POLICY "Anyone can insert lead signups" 
  ON public.lead_signups 
  FOR INSERT 
  WITH CHECK (true);

-- Create a policy that allows anyone to read (for potential admin features later)
CREATE POLICY "Anyone can view lead signups" 
  ON public.lead_signups 
  FOR SELECT 
  USING (true);
