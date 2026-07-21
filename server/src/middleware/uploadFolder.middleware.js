const multer = require("multer");

// Store files in memory
const storage = multer.memoryStorage();

const uploadFolder = multer({
  storage,
  limits: {
    fileSize: 100 * 1024 * 1024, // 100MB per file
  },
});

module.exports = uploadFolder;