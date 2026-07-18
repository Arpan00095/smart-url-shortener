const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/auth.middleware");

const {
  getNotifications,
  updateNotifications,
} = require("../controllers/notification.controller");

// Get Notification Settings
router.get(
  "/",
  verifyToken,
  getNotifications
);

// Update Notification Settings
router.put(
  "/",
  verifyToken,
  updateNotifications
);

module.exports = router;