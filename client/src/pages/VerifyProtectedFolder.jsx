import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../services/api";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const VerifyProtectedFolder = () => {
  const { shortCode } = useParams();

  const [folder, setFolder] = useState(null);
  const [files, setFiles] = useState([]);

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);

  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    loadFolder();
  }, []);

  const loadFolder = async () => {
    try {
      const res = await api.get(`/folder/${shortCode}`);
      setFolder(res.data.folder);
    } catch {
      toast.error("Folder not found");
    }
  };

  const verifyPassword = async () => {
    if (!password) {
      return toast.error("Please enter folder password");
    }

    try {
      setLoading(true);

      const res = await api.post("/folder/verify", {
        shortCode,
        password,
      });

      setFiles(res.data.files);
      setAccessToken(res.data.accessToken);
      setVerified(true);

      toast.success("Folder Unlocked");
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Invalid password"
      );
    } finally {
      setLoading(false);
    }
  };

  const downloadFile = async (fileId, fileName) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/folder/download/${fileId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Download failed");
      }

      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");

      a.href = url;
      a.download = fileName;

      document.body.appendChild(a);

      a.click();

      a.remove();

      window.URL.revokeObjectURL(url);

    } catch (error) {
      toast.error("Unable to download file");
    }
  };

  const downloadAll = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/folder/download-all/${shortCode}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error();
      }

      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");

      a.href = url;
      a.download = `${folder.folder_name}.zip`;

      document.body.appendChild(a);

      a.click();

      a.remove();

      window.URL.revokeObjectURL(url);

    } catch {
      toast.error("ZIP download failed");
    }
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-20">

        <div className="max-w-5xl mx-auto px-6">

          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 p-8">

            <h1 className="text-4xl font-bold dark:text-white">
              🔒 Protected Folder
            </h1>

            <p className="mt-3 text-slate-500 dark:text-slate-400">
              {folder?.folder_name}
            </p>

            {!verified && (
              <div className="mt-8">

                <div className="relative">

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Folder Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border rounded-xl px-4 py-3 pr-20 dark:bg-slate-800 dark:text-white"
                  />

                  <button
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-4 top-3 text-blue-600 font-medium"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>

                </div>

                <button
                  onClick={verifyPassword}
                  disabled={loading}
                  className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl"
                >
                  {loading ? "Checking..." : "Unlock Folder"}
                </button>

              </div>
            )}

            {verified && (

              <div className="mt-10">

                <div className="flex justify-between items-center mb-6">

                  <h2 className="text-2xl font-bold dark:text-white">
                    Files ({files.length})
                  </h2>

                  <button
                    onClick={downloadAll}
                    className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl"
                  >
                    📦 Download ZIP
                  </button>

                </div>

                <div className="space-y-4">

                  {files.map((file) => (

                    <div
                      key={file.id}
                      className="flex justify-between items-center border rounded-xl p-4 dark:border-slate-700"
                    >

                      <div>

                        <h3 className="font-semibold dark:text-white">
                          {file.file_name}
                        </h3>

                        <p className="text-sm text-slate-500">
                          {(file.file_size / 1024).toFixed(2)} KB
                        </p>

                      </div>

                      <button
                        onClick={() =>
                          downloadFile(file.id, file.file_name)
                        }
                        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl"
                      >
                        Download
                      </button>

                    </div>

                  ))}

                </div>

              </div>

            )}

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
};

export default VerifyProtectedFolder;