const express = require("express");
const router = express.Router();

const {
  shortenUrl,
  redirectUrl,
  verifyPassword,
  myUrls,
  urlStats,
  weeklyAnalytics,
  deleteUrlById,
  updateUrlById,
  getUrlInfo,
} = require("../controllers/url.controller");
const verifyToken = require("../middleware/auth.middleware");

router.post("/shorten", verifyToken, shortenUrl);

router.get("/my-urls", verifyToken, myUrls);

router.get("/stats", verifyToken, urlStats);

router.get("/analytics/weekly", verifyToken, weeklyAnalytics);

router.put("/:id", verifyToken, updateUrlById);

router.delete("/:id", verifyToken, deleteUrlById);

router.post("/verify-password", verifyPassword);

// URL information (Frontend use karega)
router.get("/info/:shortCode", getUrlInfo);

// Actual Redirect
router.get("/:shortCode", redirectUrl);

module.exports = router;