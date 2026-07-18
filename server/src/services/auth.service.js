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

const getUserById = async (id) => {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;
};

const updateUser = async (id, updateData) => {
  const { data, error } = await supabase
    .from("users")
    .update(updateData)
    .eq("id", id)
    .select();

  if (error) throw error;

  return data[0];
};

const updatePassword = async (id, password) => {
  const { data, error } = await supabase
    .from("users")
    .update({ password })
    .eq("id", id)
    .select();

  if (error) throw error;

  return data[0];
};

module.exports = {
  createUser,
  getUserByEmail,
  getUserById,
  updateUser,
  updatePassword
};