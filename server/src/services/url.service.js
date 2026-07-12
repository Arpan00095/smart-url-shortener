const supabase = require("../config/supabase");

const createShortUrl = async (urlData) => {
  const { data, error } = await supabase
    .from("urls")
    .insert([urlData])
    .select();

  if (error) throw error;

  return data[0];
};

module.exports = {
  createShortUrl,
};