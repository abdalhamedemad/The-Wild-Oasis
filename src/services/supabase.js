import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://sddrlswdexujrgxktiva.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkZHJsc3dkZXh1anJneGt0aXZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYzOTIzNjAsImV4cCI6MjA0MTk2ODM2MH0.s6r6boiPoMeWd10tXJkeo-tARDVNL0E7riRCLDn4xIc";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
