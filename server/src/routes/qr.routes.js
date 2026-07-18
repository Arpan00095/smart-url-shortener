const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");
const qrController = require("../controllers/qr.controller");

router.post("/", authMiddleware, qrController.createQR);

router.get("/my-qrs", authMiddleware, qrController.getMyQRs);

router.delete("/:id", authMiddleware, qrController.deleteQR);

module.exports = router;