import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xxifsrkazbnrwftmxdip.supabase.co";

const supabaseAnonKey =
  "sb_publishable_HnaUYjDzvOmiARjVhlq9XA_2nYYEEQQ";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);