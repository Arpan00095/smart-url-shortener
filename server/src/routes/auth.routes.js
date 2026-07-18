const express = require("express");
const router = express.Router();

const {
  signup,
  login,
  googleLogin,
  getProfile,
  updateProfile,
  changeUserPassword,
} = require("../controllers/auth.controller");

const verifyToken = require("../middleware/auth.middleware");

router.post("/signup", signup);
router.post("/login", login);
router.post("/google-login", googleLogin);

router.get("/profile", verifyToken, getProfile);


router.put("/profile", verifyToken, updateProfile);

router.put("/change-password", verifyToken, changeUserPassword);

module.exports = router;