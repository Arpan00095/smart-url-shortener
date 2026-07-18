const supabase = require("../config/supabase");

const createQR = async (qrData) => {
  const { data, error } = await supabase
    .from("qr_codes")
    .insert([qrData])
    .select();

  if (error) throw error;

  return data[0];
};

const getMyQRs = async (userId) => {
  const { data, error } = await supabase
    .from("qr_codes")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data;
};

const deleteQR = async (id) => {
  const { error } = await supabase
    .from("qr_codes")
    .delete()
    .eq("id", id);

  if (error) throw error;

  return true;
};

module.exports = {
  createQR,
  getMyQRs,
  deleteQR,
};