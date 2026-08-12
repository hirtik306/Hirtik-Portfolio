import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// SERVER-ONLY. Never import this file into a client component.
// Uses the service role key which bypasses Row Level Security —
// needed so the contact form / admin panel can write to the database.
export const supabaseAdmin =
  url && serviceKey ? createClient(url, serviceKey) : null;
