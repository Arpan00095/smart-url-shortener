import { useEffect, useState } from "react";
import {
  FaFolderOpen,
  FaLock,
  FaFileAlt,
  FaExternalLinkAlt,
  FaCopy,
} from "react-icons/fa";
import toast from "react-hot-toast";
import api from "../../services/api";

const ProtectedFolders = () => {
  const [folders, setFolders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFolders();
  }, []);

  const fetchFolders = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await api.get("/folder/my-folders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setFolders(res.data.data || []);
    } catch (err) {
      console.log(err);
      toast.error("Failed to load folders");
    } finally {
      setLoading(false);
    }
  };

  const copyLink = (shortCode) => {
    const link = `${window.location.origin}/folder/${shortCode}`;

    navigator.clipboard.writeText(link);

    toast.success("Folder link copied");
  };

  if (loading) {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-lg p-8">
        <h2 className="text-3xl font-bold dark:text-white">
          Protected Folders
        </h2>

        <p className="mt-6 text-slate-500">
          Loading folders...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-lg p-8">

      <div className="flex items-center gap-3 mb-8">
        <FaFolderOpen className="text-3xl text-blue-600" />

        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Protected Folders
          </h2>

          <p className="text-slate-500 dark:text-slate-400">
            Manage all your password protected folders.
          </p>
        </div>
      </div>

      {folders.length === 0 ? (
        <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl py-20 text-center">

          <FaFolderOpen className="mx-auto text-6xl text-slate-300 dark:text-slate-700 mb-5" />

          <h3 className="text-2xl font-semibold dark:text-white">
            No Protected Folders Yet
          </h3>

          <p className="mt-3 text-slate-500">
            Create your first protected folder.
          </p>

        </div>
      ) : (
        <div className="space-y-5">

          {folders.map((folder) => (
            <div
              key={folder.id}
              className="border dark:border-slate-700 rounded-2xl p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5"
            >
              <div>

                <h3 className="text-xl font-bold dark:text-white flex items-center gap-2">
                  <FaLock className="text-yellow-500" />
                  {folder.folder_name}
                </h3>

                <div className="mt-3 flex flex-wrap gap-5 text-sm text-slate-500">

                  <span className="flex items-center gap-2">
                    <FaFileAlt />
                    {folder.folder_files?.length || 0} Files
                  </span>

                  <span>
                    {new Date(folder.created_at).toLocaleDateString()}
                  </span>

                </div>

              </div>

              <div className="flex gap-3">

                <button
                  onClick={() => copyLink(folder.short_code)}
                  className="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-700 dark:text-white hover:opacity-90"
                >
                  <FaCopy />
                </button>

                <a
                  href={`/folder/${folder.short_code}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 rounded-xl bg-blue-600 text-white flex items-center gap-2 hover:bg-blue-700"
                >
                  <FaExternalLinkAlt />
                  Open
                </a>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
};

export default ProtectedFolders;