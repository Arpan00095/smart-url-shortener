const express = require("express");
const router = express.Router();


const uploadFolder = require("../middleware/uploadFolder.middleware");
const verifyToken = require("../middleware/auth.middleware");

const {
  createProtectedFolder,
  getProtectedFolder,
} = require("../controllers/folder.controller");

// Create Protected Folder
router.post(
  "/",
  verifyToken,
  uploadFolder.array("files", 50),
  createProtectedFolder
);

// Get Folder By Short Code
router.get("/:shortCode", getProtectedFolder);

module.exports = router;