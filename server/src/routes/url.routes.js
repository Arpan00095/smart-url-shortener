const express = require("express");
const router = express.Router();

const {
  shortenUrl,
  redirectUrl,
  myUrls,
  urlStats,
  deleteUrlById,
  updateUrlById,
} = require("../controllers/url.controller");

const verifyToken = require("../middleware/auth.middleware");

router.post("/shorten", verifyToken, shortenUrl);
router.get("/my-urls", verifyToken, myUrls);
router.get("/stats", verifyToken, urlStats);
router.put("/:id", verifyToken, updateUrlById);
router.delete("/:id", verifyToken, deleteUrlById);

// Public Route
router.get("/:shortCode", redirectUrl);

module.exports = router;