const express = require("express");
const router = express.Router();

const uploadFolder = require("../middleware/uploadFolder.middleware");
const verifyToken = require("../middleware/auth.middleware");

const {
  createProtectedFolder,
  getProtectedFolder,
  verifyProtectedFolder,
  downloadFolderFile,
} = require("../controllers/folder.controller");

// ==============================
// Create Protected Folder
// ==============================
router.post(
  "/",
  verifyToken,
  uploadFolder.array("files", 50),
  createProtectedFolder
);

// ==============================
// Verify Folder Password
// ==============================
router.post(
  "/verify",
  verifyProtectedFolder
);

// ==============================
// Download File
// ==============================
router.get(
  "/download/:fileId",
  downloadFolderFile
);

// ==============================
// Get Folder By Short Code
// ==============================
router.get(
  "/:shortCode",
  getProtectedFolder
);

module.exports = router;