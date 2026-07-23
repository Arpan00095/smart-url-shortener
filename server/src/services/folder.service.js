const supabase = require("../config/supabase");

// ======================================================
// Create Folder
// ======================================================

const createFolder = async (folderData) => {
  const { data, error } = await supabase
    .from("folders")
    .insert(folderData)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

// ======================================================
// Save Folder File
// ======================================================

const saveFolderFiles = async (fileData) => {
  const { data, error } = await supabase
    .from("folder_files")
    .insert({
      folder_id: fileData.folder_id,
      file_name: fileData.file_name,
      file_path: fileData.file_path,
      file_url: fileData.file_url,
      file_size: fileData.file_size,
      mime_type: fileData.mime_type,
    })
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

// ======================================================
// Get Folder By Short Code
// ======================================================

const getFolderByShortCode = async (shortCode) => {
  const { data, error } = await supabase
    .from("folders")
    .select("*")
    .eq("short_code", shortCode)
    .single();

  if (error) {
    return null;
  }

  return data;
};

// ======================================================
// Get Folder Files
// ======================================================

const getFolderFiles = async (folderId) => {
  const { data, error } = await supabase
    .from("folder_files")
    .select("*")
    .eq("folder_id", folderId)
    .order("created_at", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

// ======================================================
// Get File By ID
// ======================================================

const getFolderFileById = async (fileId) => {
  const { data, error } = await supabase
    .from("folder_files")
    .select("*")
    .eq("id", fileId)
    .single();

  if (error) {
    return null;
  }

  return data;
};

const getFolderCount = async (userId) => {
  const { count, error } = await supabase
    .from("protected_folders")
    .select("*", {
      count: "exact",
      head: true,
    })
    .eq("user_id", userId);

  if (error) throw new Error(error.message);

  return count;
};

module.exports = {
  createFolder,
  saveFolderFiles,
  getFolderByShortCode,
  getFolderFiles,
  getFolderFileById,
  getFolderCount,
};