const supabase = require("../config/supabase");

const uploadFile = async (file, folderCode) => {
  const fileName = `${folderCode}/${Date.now()}-${file.originalname}`;

  const { error } = await supabase.storage
    .from("folders") // Bucket Name
    .upload(fileName, file.buffer, {
      contentType: file.mimetype,
      upsert: false,
    });

  if (error) {
    throw new Error(error.message);
  }

  const { data } = supabase.storage
    .from("folders")
    .getPublicUrl(fileName);

  return {
    file_name: file.originalname,
    file_path: fileName,
    file_url: data.publicUrl,
    file_size: file.size,
    mime_type: file.mimetype,
  };
};

module.exports = {
  uploadFile,
};