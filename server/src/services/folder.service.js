const supabase = require("../config/supabase");

// Create Folder
const createFolder = async (folderData) => {
  const { data, error } = await supabase
    .from("folders")
    .insert(folderData)
    .select()
    .single();

  if (error) throw new Error(error.message);

  return data;
};

// Save Folder Files
const saveFolderFiles = async (files) => {
  const { data, error } = await supabase
    .from("folder_files")
    .insert(files)
    .select();

  if (error) throw new Error(error.message);

  return data;
};

// Get Folder By Short Code
const getFolderByShortCode = async (shortCode) => {
  const { data, error } = await supabase
    .from("folders")
    .select("*")
    .eq("short_code", shortCode)
    .single();

  if (error) return null;

  return data;
};

// Get Folder Files
const getFolderFiles = async (folderId) => {
  const { data, error } = await supabase
    .from("folder_files")
    .select("*")
    .eq("folder_id", folderId);

  if (error) throw new Error(error.message);

  return data;
};

module.exports = {
  createFolder,
  saveFolderFiles,
  getFolderByShortCode,
  getFolderFiles,
};