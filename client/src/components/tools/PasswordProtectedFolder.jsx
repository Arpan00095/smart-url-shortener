import { useState } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";
import LoginRequiredModal from "../common/LoginRequiredModal";

const PasswordProtectedFolder = () => {
  const [folderName, setFolderName] = useState("");
  const [password, setPassword] = useState("");
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [folderUrl, setFolderUrl] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleFiles = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const createFolder = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setShowLoginModal(true);
      return;
    }

    if (!folderName) {
      return toast.error("Please enter folder name");
    }

    if (!password) {
      return toast.error("Please enter password");
    }

    if (files.length === 0) {
      return toast.error("Please select files");
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("folder_name", folderName);
      formData.append("password", password);

      files.forEach((file) => {
        formData.append("files", file);
      });

      const res = await api.post("/folder", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      setFolderUrl(res.data.data.folder_url);

      toast.success("Protected Folder Created");

      setFolderName("");
      setPassword("");
      setFiles([]);

    } catch (err) {
      console.error(err);

      toast.error(
        err.response?.data?.message ||
        "Upload failed"
      );

    } finally {
      setLoading(false);
    }
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(folderUrl);
    toast.success("Copied");
  };

  return (
    <>
      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 p-6">

        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          📁 Password Protected Folder
        </h2>

        <input
          type="text"
          placeholder="Folder Name"
          value={folderName}
          onChange={(e) => setFolderName(e.target.value)}
          className="w-full border rounded-xl px-4 py-3 mb-4 dark:bg-slate-800 dark:text-white"
        />

        <input
          type="password"
          placeholder="Folder Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded-xl px-4 py-3 mb-4 dark:bg-slate-800 dark:text-white"
        />

        <input
          type="file"
          multiple
          onChange={handleFiles}
          className="w-full border rounded-xl px-4 py-3 mb-6 dark:bg-slate-800 dark:text-white"
        />

        {files.length > 0 && (
          <div className="mb-6 text-sm text-slate-600 dark:text-slate-300">
            {files.length} file(s) selected
          </div>
        )}

        <button
          onClick={createFolder}
          disabled={loading}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl"
        >
          {loading ? "Uploading..." : "Create Protected Folder"}
        </button>

        {folderUrl && (
          <div className="mt-6">
            <input
              readOnly
              value={folderUrl}
              className="w-full border rounded-xl px-4 py-3"
            />

            <button
              onClick={copyLink}
              className="mt-3 w-full bg-green-600 text-white py-3 rounded-xl"
            >
              Copy Folder Link
            </button>
          </div>
        )}

      </div>

      <LoginRequiredModal
        open={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </>
  );
};

export default PasswordProtectedFolder;