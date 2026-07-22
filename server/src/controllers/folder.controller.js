const bcrypt = require("bcrypt");

const {
  createFolder,
  saveFolderFiles,
  getFolderByShortCode,
  getFolderFiles,
  getFolderFileById,
} = require("../services/folder.service");

const {
  uploadFile,
} = require("../services/storage.service");

// Generate Random Short Code
const generateShortCode = () => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let code = "";

  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return code;
};

// ======================================================
// Create Protected Folder
// ======================================================

const createProtectedFolder = async (req, res) => {
  try {
    const { folder_name, password } = req.body;

    if (!folder_name) {
      return res.status(400).json({
        success: false,
        message: "Folder name is required",
      });
    }

    if (!password) {
      return res.status(400).json({
        success: false,
        message: "Password is required",
      });
    }

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Please upload at least one file",
      });
    }

    const shortCode = generateShortCode();

    const hashedPassword = await bcrypt.hash(password, 10);

    const folder = await createFolder({
      user_id: req.user.id,
      folder_name,
      short_code: shortCode,
      password: hashedPassword,
    });

    for (const file of req.files) {
      const uploadedFile = await uploadFile(file, shortCode);

      await saveFolderFiles({
        folder_id: folder.id,
        file_name: uploadedFile.file_name,
        file_url: uploadedFile.file_url,
        file_size: uploadedFile.file_size,
        mime_type: uploadedFile.mime_type,
      });
    }

    return res.status(201).json({
      success: true,
      message: "Protected Folder Created Successfully",
      data: {
        ...folder,
        total_files: req.files.length,
        folder_url: `${req.protocol}://${req.get("host")}/folder/${shortCode}`,
      },
    });

  } catch (error) {
    console.error("Create Folder Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================================
// Get Folder By Short Code
// ======================================================

const getProtectedFolder = async (req, res) => {
  try {
    const { shortCode } = req.params;

    const folder = await getFolderByShortCode(shortCode);

    if (!folder) {
      return res.status(404).json({
        success: false,
        message: "Folder not found",
      });
    }

    delete folder.password;

    return res.status(200).json({
      success: true,
      folder,
    });

  } catch (error) {
    console.error("Get Folder Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================================
// Verify Folder Password
// ======================================================

const verifyProtectedFolder = async (req, res) => {
  try {
    const { shortCode, password } = req.body;

    if (!shortCode || !password) {
      return res.status(400).json({
        success: false,
        message: "Short code and password are required",
      });
    }

    const folder = await getFolderByShortCode(shortCode);

    if (!folder) {
      return res.status(404).json({
        success: false,
        message: "Folder not found",
      });
    }

    const matched = await bcrypt.compare(
      password,
      folder.password
    );

    if (!matched) {
      return res.status(401).json({
        success: false,
        message: "Invalid password",
      });
    }

    const files = await getFolderFiles(folder.id);

    delete folder.password;

    return res.status(200).json({
      success: true,
      folder,
      files,
    });

  } catch (error) {
    console.error("Verify Folder Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================================
// Download Folder File
// ======================================================

const downloadFolderFile = async (req, res) => {
  try {
    const { fileId } = req.params;

    const file = await getFolderFileById(fileId);

    if (!file) {
      return res.status(404).json({
        success: false,
        message: "File not found",
      });
    }

    return res.redirect(file.file_url);

  } catch (error) {
    console.error("Download Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createProtectedFolder,
  getProtectedFolder,
  verifyProtectedFolder,
  downloadFolderFile,
};