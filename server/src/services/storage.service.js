const supabase = require("../config/supabase");

const BUCKET_NAME = "folders";

// ======================================================
// Upload File
// ======================================================

const uploadFile = async (file, folderCode) => {
  const filePath = `${folderCode}/${Date.now()}-${file.originalname}`;

  const { error } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(filePath, file.buffer, {
      contentType: file.mimetype,
      upsert: false,
    });

  if (error) {
    throw new Error(error.message);
  }

  return {
    file_name: file.originalname,
    file_path: filePath,
    file_url: filePath,
    file_size: file.size,
    mime_type: file.mimetype,
  };
};

// ======================================================
// Create Signed Download URL
// ======================================================

const createSignedUrl = async (filePath, fileName) => {
  const { data, error } = await supabase.storage
    .from(BUCKET_NAME)
    .createSignedUrl(filePath, 60, {
      download: fileName,
    });

  if (error) {
    throw new Error(error.message);
  }

  return data.signedUrl;
};

module.exports = {
  uploadFile,
  createSignedUrl,
};