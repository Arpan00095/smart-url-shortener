import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../services/api";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const VerifyProtectedFolder = () => {
  const { shortCode } = useParams();

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [folder, setFolder] = useState(null);
  const [files, setFiles] = useState([]);

  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    loadFolder();
  }, []);

  const loadFolder = async () => {
    try {
      const res = await api.get(`/folder/${shortCode}`);
      setFolder(res.data.folder);
    } catch (err) {
      toast.error("Folder not found");
    }
  };

  const verifyPassword = async () => {
    if (!password) {
      return toast.error("Enter password");
    }

    try {
      setLoading(true);

      const res = await api.post("/folder/verify", {
        shortCode,
        password,
      });

      setFiles(res.data.files);
      setVerified(true);

      toast.success("Folder Unlocked");

    } catch (err) {
      toast.error(
        err.response?.data?.message || "Wrong password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-20">

        <div className="max-w-5xl mx-auto px-6">

          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl p-8">

            <h1 className="text-4xl font-bold mb-3 dark:text-white">
              🔒 Protected Folder
            </h1>

            <p className="text-slate-500 dark:text-slate-400 mb-8">
              {folder?.folder_name}
            </p>

            {!verified && (
              <>
                <div className="relative">

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Folder Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border rounded-xl px-4 py-3 dark:bg-slate-800 dark:text-white"
                  />

                  <button
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-4 top-3 text-sm"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>

                </div>

                <button
                  onClick={verifyPassword}
                  disabled={loading}
                  className="mt-5 w-full bg-blue-600 text-white py-3 rounded-xl"
                >
                  {loading ? "Checking..." : "Unlock Folder"}
                </button>
              </>
            )}

            {verified && (
              <div className="space-y-4">

                <h2 className="text-2xl font-bold dark:text-white">
                  Files
                </h2>

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

                    <a
                      href={`${import.meta.env.VITE_API_URL}/folder/download/${file.id}`}
                      className="bg-blue-600 text-white px-5 py-2 rounded-lg"
                    >
                      Download
                    </a>
                  </div>
                ))}

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