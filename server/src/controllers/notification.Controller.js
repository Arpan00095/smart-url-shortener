const {
  getNotificationSettings,
  updateNotificationSettings,
} = require("../services/notification.service");

// Get Notification Settings
const getNotifications = async (req, res) => {
  try {
    const settings = await getNotificationSettings(req.user.id);

    res.status(200).json({
      success: true,
      data: settings,
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
      error: err,
    });

  }
};

// Update Notification Settings
const updateNotifications = async (req, res) => {
  try {

    const {
      click_notifications,
      weekly_report,
      product_updates,
      security_alerts,
    } = req.body;

    const updated = await updateNotificationSettings(
      req.user.id,
      {
        click_notifications,
        weekly_report,
        product_updates,
        security_alerts,
      }
    );

    res.status(200).json({
      success: true,
      message: "Notification settings updated successfully",
      data: updated,
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      success: false,
      message: "Failed to update notification settings",
    });

  }
};

module.exports = {
  getNotifications,
  updateNotifications,
};