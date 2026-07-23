const express = require("express");
const router = express.Router();

const uploadFolder = require("../middleware/uploadFolder.middleware");
const verifyToken = require("../middleware/auth.middleware");

const {
  createProtectedFolder,
  getProtectedFolder,
  verifyProtectedFolder,
  downloadFolderFile,
  downloadFolderAsZip,
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
// Download Single File
// ==============================
router.get(
  "/download/:fileId",
  downloadFolderFile
);

// ==============================
// Download Complete Folder (ZIP)
// ==============================
router.get(
  "/download-all/:shortCode",
  downloadFolderAsZip
);

// ==============================
// Get Folder By Short Code
// ==============================
router.get(
  "/:shortCode",
  getProtectedFolder
);

module.exports = router;