const supabase = require("../config/supabase");

const createShortUrl = async (urlData) => {
  const { data, error } = await supabase
    .from("urls")
    .insert([urlData])
    .select();

  if (error) throw error;

  return data[0];
};

const getUrlByShortCode = async (shortCode) => {
  const { data, error } = await supabase
    .from("urls")
    .select("*")
    .eq("short_code", shortCode)
    .single();

  if (error) throw error;

  return data;
};

const incrementClicks = async (id, currentClicks) => {
  const { data, error } = await supabase
    .from("urls")
    .update({
      clicks: currentClicks + 1,
    })
    .eq("id", id)
    .select();

  if (error) throw error;

  return data[0];
};

const saveClickAnalytics = async (clickData) => {
  const { data, error } = await supabase
    .from("url_clicks")
    .insert([clickData])
    .select();

  if (error) throw error;

  return data[0];
};

const getMyUrls = async (userId) => {
  const { data, error } = await supabase
    .from("urls")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data;
};

const getUrlStats = async (userId) => {
  const { data, error } = await supabase
    .from("urls")
    .select("*")
    .eq("user_id", userId);

  if (error) throw error;

  return data;
};

const getUrlById = async (id) => {
  const { data, error } = await supabase
    .from("urls")
    .select("*")
    .eq("id", id);

  console.log("ID:", id);
  console.log("DATA:", data);
  console.log("ERROR:", error);

  if (error) throw error;

  return data[0];
};

const deleteUrl = async (id) => {
  const { error } = await supabase
    .from("urls")
    .delete()
    .eq("id", id);

  if (error) throw error;

  return true;
};

const updateUrl = async (id, originalUrl) => {
  const { data, error } = await supabase
    .from("urls")
    .update({
      original_url: originalUrl,
    })
    .eq("id", id)
    .select();

  if (error) throw error;

  return data[0];
};

const checkShortCodeExists = async (shortCode) => {
  const { data, error } = await supabase
    .from("urls")
    .select("id")
    .eq("short_code", shortCode);

  if (error) throw error;

  return data.length > 0;
};

const getUrlByOriginalUrl = async (originalUrl, userId) => {
  const { data, error } = await supabase
    .from("urls")
    .select("*")
    .eq("original_url", originalUrl)
    .eq("user_id", userId)
    .maybeSingle();

  if (error) throw error;

  return data;
};

const updateUrlPassword = async (id, password) => {
  const { data, error } = await supabase
    .from("urls")
    .update({
      password,
    })
    .eq("id", id)
    .select();

  if (error) throw error;

  return data[0];
};

const updateUrlSettings = async (id, settings) => {
  const { data, error } = await supabase
    .from("urls")
    .update(settings)
    .eq("id", id)
    .select();

  if (error) throw error;

  return data[0];
};

const getWeeklyAnalytics = async (userId) => {
  const { data, error } = await supabase
    .from("url_clicks")
    .select(`
      clicked_at,
      urls!inner(user_id)
    `)
    .eq("urls.user_id", userId);

  if (error) throw error;

  return data;
};

module.exports = {
  createShortUrl,
  getUrlByShortCode,
  checkShortCodeExists,
  incrementClicks,
  saveClickAnalytics,
  getMyUrls,
  getUrlStats,
  getUrlByOriginalUrl,
  getUrlById,
  deleteUrl,
  updateUrl,
  updateUrlPassword,
  saveClickAnalytics,
  updateUrlSettings,
  getWeeklyAnalytics,
};