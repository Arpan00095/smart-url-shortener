const express = require("express");
const router = express.Router();

const { shortenUrl } = require("../controllers/url.controller");
const verifyToken = require("../middleware/auth.middleware");

// Protected Route
router.post("/shorten", verifyToken, shortenUrl);

module.exports = router;