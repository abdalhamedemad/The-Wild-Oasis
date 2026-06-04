import { createClient } from "@supabase/supabase-js";
// export const supabaseUrl = "https://sddrlswdexujrgxktiva.supabase.co";
export const supabaseUrl = "https://aqsuymcvklmwluajwfda.supabase.co";
// const supabaseKey =
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkZHJsc3dkZXh1anJneGt0aXZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYzOTIzNjAsImV4cCI6MjA0MTk2ODM2MH0.s6r6boiPoMeWd10tXJkeo-tARDVNL0E7riRCLDn4xIc";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxc3V5bWN2a2xtd2x1YWp3ZmRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU3ODk2NTEsImV4cCI6MjA4MTM2NTY1MX0.GqqW9N7wOm_uqDpsELJgB5xCE2yp0MILgmzAjW3xZkY";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
