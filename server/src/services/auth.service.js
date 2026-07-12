const supabase = require("../config/supabase");

const createUser = async (userData) => {
  console.log("User Data:", userData);

  const { data, error } = await supabase
    .from("users")
    .insert([userData])
    .select();

  console.log("Supabase Data:", data);
  console.log("Supabase Error:", error);

  if (error) {
    throw error;
  }

  return data[0];
};

module.exports = {
  createUser,
};