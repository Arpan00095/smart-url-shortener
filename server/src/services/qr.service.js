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

const getQrCount = async (userId) => {
  const { count, error } = await supabase
    .from("qr_codes")
    .select("*", {
      count: "exact",
      head: true,
    })
    .eq("user_id", userId);

  if (error) throw new Error(error.message);

  return count;
};

module.exports = {
  createQR,
  getMyQRs,
  deleteQR,
  getQrCount,
};