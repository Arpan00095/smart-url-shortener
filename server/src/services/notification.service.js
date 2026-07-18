const supabase = require("../config/supabase");

// Get notification settings
const getNotificationSettings = async (userId) => {
  const { data, error } = await supabase
    .from("user_notifications")
    .select("*")
    .eq("user_id", userId)
    .single();

  if (error && error.code !== "PGRST116") {
    throw error;
  }

  // First time user
  if (!data) {
    const { data: created, error: createError } = await supabase
      .from("user_notifications")
      .insert({
        user_id: userId,
      })
      .select()
      .single();

    if (createError) {
      throw createError;
    }

    return created;
  }

  return data;
};

// Update notification settings
const updateNotificationSettings = async (
  userId,
  settings
) => {

  const { data, error } = await supabase
    .from("user_notifications")
    .update({
      ...settings,
      updated_at: new Date().toISOString(),
    })
    .eq("user_id", userId)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
};



module.exports = {
  getNotificationSettings,
  updateNotificationSettings,
};