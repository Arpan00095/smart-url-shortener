import { useState } from "react";
import LoginRequiredModal from "../common/LoginRequiredModal";
import api from "../../services/api";
import toast from "react-hot-toast";
import { FaCopy } from "react-icons/fa";

const UrlShortener = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [customCode, setCustomCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [shortUrl, setShortUrl] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      toast.success("Copied Successfully");
    } catch {
      toast.error("Copy Failed");
    }
  };

  const createShortUrl = async () => {
    if (!originalUrl.trim()) {
      return toast.error("Please enter a URL");
    }

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      if (!token) {
        setShowLoginModal(true);
        return;
      }

      const res = await api.post(
        "/url/shorten",
        {
          original_url: originalUrl,
          custom_code: customCode,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const shortCode =
        res.data?.data?.short_code ||
        res.data?.short_code;

      if (!shortCode) {
        toast.error("Short URL not received from server");
        return;
      }

      const finalUrl = `${import.meta.env.VITE_SERVER_URL}/${shortCode}`;
      setShortUrl(finalUrl);

      toast.success("Short URL Created Successfully");

      setOriginalUrl("");
      setCustomCode("");

    } catch (err) {
      console.log(err);

      toast.error(
        err.response?.data?.message || "Failed to create URL"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl dark:shadow-slate-900/40 border border-slate-200 dark:border-slate-700 p-6">

        <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">
          🔗 URL Shortener
        </h2>

        <input
          type="text"
          placeholder="Paste Long URL..."
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          className="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-xl px-4 py-3 mb-4 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Custom Code (Optional)"
          value={customCode}
          onChange={(e) => setCustomCode(e.target.value)}
          className="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-xl px-4 py-3 mb-6 outline-none focus:ring-2 focus:ring-purple-500"
        />

        <button
          onClick={createShortUrl}
          disabled={loading}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] transition"
        >
          {loading ? "Creating..." : "Create Short URL"}
        </button>

        {shortUrl && (
          <div className="mt-6 bg-slate-100 dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">

            <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
              Your Short URL
            </p>

            <div className="flex items-center gap-3">

              <input
                value={shortUrl}
                readOnly
                className="flex-1 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 bg-white dark:bg-slate-900 text-slate-800 dark:text-white"
              />

              <button
                onClick={copyUrl}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition"
              >
                <FaCopy />
              </button>

            </div>

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

export default UrlShortener;