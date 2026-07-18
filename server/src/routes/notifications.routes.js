const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/auth.middleware");

const {
  fetchNotifications,
  readNotification,
  readAllNotifications,
} = require("../controllers/notifications.controller");

router.get("/", verifyToken, fetchNotifications);

router.put("/:id/read", verifyToken, readNotification);

router.put("/read-all", verifyToken, readAllNotifications);

module.exports = router;