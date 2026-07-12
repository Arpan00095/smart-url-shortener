const supabase = require("../config/supabase");

const createUser = async (userData) => {
  const { data, error } = await supabase
    .from("users")
    .insert([userData])
    .select();

  if (error) throw error;

  return data[0];
};

// 👇 NEW FUNCTION
const getUserByEmail = async (email) => {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (error) {
    return null;
  }

  return data;
};

module.exports = {
  createUser,
  getUserByEmail,
};