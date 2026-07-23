const express = require("express");
const router = express.Router();

const uploadFolder = require("../middleware/uploadFolder.middleware");
const verifyToken = require("../middleware/auth.middleware");
const verifyFolderToken = require("../middleware/verifyFolderToken.middleware");

const {
  createProtectedFolder,
  getProtectedFolder,
  verifyProtectedFolder,
  downloadFolderFile,
  downloadFolderAsZip,
  myFolders,
} = require("../controllers/folder.controller");

// ======================================
// Create Protected Folder
// ======================================
router.post(
  "/",
  verifyToken,
  uploadFolder.array("files", 50),
  createProtectedFolder
);

// ==============================
// My Protected Folders
// ==============================
router.get(
  "/my-folders",
  verifyToken,
  myFolders
);

// ======================================
// Verify Folder Password
// ======================================
router.post(
  "/verify",
  verifyProtectedFolder
);

// ======================================
// Download Single File (Protected)
// ======================================
router.get(
  "/download/:fileId",
  verifyFolderToken,
  downloadFolderFile
);

// ======================================
// Download Complete Folder ZIP (Protected)
// ======================================
router.get(
  "/download-all/:shortCode",
  verifyFolderToken,
  downloadFolderAsZip
);

// ======================================
// Get Folder Information
// ======================================
router.get(
  "/:shortCode",
  getProtectedFolder
);

module.exports = router;