const { createClient } = require("@supabase/supabase-js");

console.log(
  "Using Service Role:",
  process.env.SUPABASE_SERVICE_ROLE_KEY?.startsWith("sb_secret_")
);

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

module.exports = supabase;