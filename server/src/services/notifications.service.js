const supabase = require("../config/supabase");

// Create Notification
const createNotification = async ({
    user_id,
    title,
    message,
    type = "info",
}) => {
    const { data, error } = await supabase
        .from("notifications")
        .insert({
            user_id,
            title,
            message,
            type,
        })
        .select()
        .single();

    if (error) throw error;

    return data;
};

// Get Notifications
const getNotifications = async (userId) => {
    const { data, error } = await supabase
        .from("notifications")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", { ascending: false });

    if (error) throw error;

    return data;
};

// Mark One Read
const markAsRead = async (id, userId) => {
    const { data, error } = await supabase
        .from("notifications")
        .update({
            is_read: true,
        })
        .eq("id", id)
        .eq("user_id", userId)
        .select()
        .single();

    if (error) throw error;

    return data;
};

// Mark All Read
const markAllRead = async (userId) => {
    const { error } = await supabase
        .from("notifications")
        .update({
            is_read: true,
        })
        .eq("user_id", userId);

    if (error) throw error;

    return true;
};

const deleteOldNotifications = async () => {
    const cutoff = new Date(
        Date.now() - 36 * 60 * 60 * 1000
    ).toISOString();

    const { error } = await supabase
        .from("notifications")
        .delete()
        .lt("created_at", cutoff);

    if (error) throw error;
};

module.exports = {
    createNotification,
    getNotifications,
    markAsRead,
    markAllRead,
    deleteOldNotifications,
};