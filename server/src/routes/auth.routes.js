const express = require("express");
const router = express.Router();

const {
  signup,
  login,
} = require("../controllers/auth.controller");

const verifyToken = require("../middleware/auth.middleware");

router.post("/signup", signup);
router.post("/login", login);

router.get("/profile", verifyToken, (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Protected route accessed successfully",
    user: req.user,
  });
});

module.exports = router;