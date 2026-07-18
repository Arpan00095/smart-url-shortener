import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

const VerifyProtectedUrl = () => {
  const { shortCode } = useParams();

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [urlInfo, setUrlInfo] = useState(null);

  useEffect(() => {
    fetchUrlInfo();
  }, []);

  const fetchUrlInfo = async () => {
    try {
      const res = await api.get(`/url/info/${shortCode}`);
      setUrlInfo(res.data.data);
    } catch (err) {
      toast.error("Invalid Link");
    }
  };

  const verifyPassword = async () => {
    if (!password) {
      return toast.error("Enter Password");
    }

    try {
      setLoading(true);

      const res = await api.post("/url/verify-password", {
        shortCode,
        password,
      });

      window.location.href = res.data.original_url;
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Wrong Password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">

      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md">

        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
            <FaLock className="text-4xl text-blue-600" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center">
          Protected Link
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          This URL is password protected.
        </p>

        <div className="relative">

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-4 text-gray-500"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>

        </div>

        <button
          onClick={verifyPassword}
          disabled={loading}
          className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-bold"
        >
          {loading ? "Verifying..." : "Unlock URL"}
        </button>

      </div>

    </div>
  );
};

export default VerifyProtectedUrl;