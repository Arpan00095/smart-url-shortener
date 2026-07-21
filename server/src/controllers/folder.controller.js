const {
  createFolder,
  saveFolderFiles,
  getFolderByShortCode,
  getFolderFiles,
} = require("../services/folder.service");

// Random Folder Code
const generateShortCode = () => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let code = "";

  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return code;
};

// Create Folder
const createProtectedFolder = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Folder API Ready 🚀",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Folder
const getProtectedFolder = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Get Folder API Ready 🚀",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createProtectedFolder,
  getProtectedFolder,
};