import { createClient } from '@supabase/supabase-js';

// Environment variables validation
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error('Missing Supabase environment variables');
}

// Create Supabase client with the service role key for backend operations
export const supabase = createClient(supabaseUrl, supabaseServiceKey);

