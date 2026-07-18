const {
    getNotifications,
    markAsRead,
    markAllRead,
    deleteOldNotifications,
} = require("../services/notifications.service");

// Get all notifications
const fetchNotifications = async (req, res) => {
    try {

        await deleteOldNotifications();
        const notifications = await getNotifications(req.user.id);

        res.status(200).json({
            success: true,
            data: notifications,
        });

    } catch (err) {
        console.error(err);

        res.status(500).json({
            success: false,
            message: "Failed to load notifications",
        });
    }
};

// Mark single notification as read
const readNotification = async (req, res) => {
    try {
        const notification = await markAsRead(
            req.params.id,
            req.user.id
        );

        res.status(200).json({
            success: true,
            data: notification,
        });

    } catch (err) {
        console.error(err);

        res.status(500).json({
            success: false,
            message: "Failed to mark notification as read",
        });
    }
};

// Mark all notifications as read
const readAllNotifications = async (req, res) => {
    try {

        await markAllRead(req.user.id);

        res.status(200).json({
            success: true,
            message: "All notifications marked as read",
        });

    } catch (err) {
        console.error(err);

        res.status(500).json({
            success: false,
            message: "Failed to mark notifications",
        });
    }
};

module.exports = {
    fetchNotifications,
    readNotification,
    readAllNotifications,
};