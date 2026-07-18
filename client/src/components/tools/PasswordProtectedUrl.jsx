import { useState } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";
import LoginRequiredModal from "../common/LoginRequiredModal";

const PasswordProtectedUrl = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [password, setPassword] = useState("");
  const [expiry, setExpiry] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [shortUrl, setShortUrl] = useState("");

  const createProtectedUrl = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setShowLoginModal(true);
      return;
    }

    if (!originalUrl) {
      return toast.error("Please enter URL");
    }

    if (!password) {
      return toast.error("Please enter password");
    }

    try {
      setLoading(true);

      const res = await api.post(
        "/url/shorten",
        {
          original_url: originalUrl,
          custom_code: null,
          password,
          expires_at: expiry || null,
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

      setShortUrl(`${import.meta.env.VITE_SERVER_URL}/${shortCode}`);

      toast.success("Protected URL Created");

      setOriginalUrl("");
      setPassword("");
      setExpiry("");

    } catch (err) {
      console.log(err);

      toast.error(
        err.response?.data?.message ||
        "Something went wrong"
      );

    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      toast.success("URL Copied");
    } catch {
      toast.error("Copy failed");
    }
  };

  return (
    <>
      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl dark:shadow-slate-900/40 border border-slate-200 dark:border-slate-700 p-6">

        <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">
          🔒 Password Protected URL
        </h2>

        <input
          type="url"
          autoComplete="off"
          placeholder="Paste Long URL..."
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          className="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-xl px-4 py-3 mb-4 outline-none focus:ring-2 focus:ring-red-500"
        />

        <div className="relative mb-4">

          <input
            type={showPassword ? "text" : "password"}
            autoComplete="new-password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-xl px-4 py-3 pr-16 outline-none focus:ring-2 focus:ring-purple-500"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-blue-600 dark:text-blue-400"
          >
            {showPassword ? "Hide" : "Show"}
          </button>

        </div>

        <input
          type="datetime-local"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          className="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white rounded-xl px-4 py-3 mb-6 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={createProtectedUrl}
          disabled={loading}
          className="w-full bg-gradient-to-r from-red-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
        >
          {loading ? "Creating..." : "Create Protected URL"}
        </button>

        {shortUrl && (
          <div className="mt-6 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5">

            <p className="font-semibold mb-2 text-slate-700 dark:text-slate-300">
              Protected URL
            </p>

            <div className="flex gap-2">

              <input
                readOnly
                value={shortUrl}
                className="flex-1 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white rounded-xl px-4 py-3"
              />

              <button
                onClick={copyToClipboard}
                className="px-5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition"
              >
                Copy
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

export default PasswordProtectedUrl;