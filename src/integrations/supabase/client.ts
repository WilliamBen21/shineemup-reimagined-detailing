// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://mbhmtiykgqswehnktwdc.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1iaG10aXlrZ3Fzd2Vobmt0d2RjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5NDEwMTYsImV4cCI6MjA2NTUxNzAxNn0.JJfw0IXQvHiTNAT_faX-SkDBr3aJQplUNEjPSAURv-A";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);