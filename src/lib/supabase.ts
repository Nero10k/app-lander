import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dmjbqdrqgnclrvixszeg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtamJxZHJxZ25jbHJ2aXhzemVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyNTMxNDEsImV4cCI6MjA2MjgyOTE0MX0.N57zajKeujEwJ19GFJOYAIfkKt4tBhg_Bcjyp9WWREM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 