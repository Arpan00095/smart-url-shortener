import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import toast from "react-hot-toast";


const RedirectPage = () => {
  const { shortCode } = useParams();

  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState("");
  const [protectedLink, setProtectedLink] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    checkLink();
  }, []);

  const checkLink = async () => {
    try {
      await api.get(`/url/info/${shortCode}`);
    } catch (err) {
      console.log(err);

      if (err.response?.data?.protected) {
        setProtectedLink(true);
      }

      setMessage(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const verifyPassword = async () => {
  try {
    const res = await api.post("/url/verify-password", {
      shortCode,
      password,
    });

    window.location.href = res.data.original_url;

  } catch (err) {
    toast.error(
      err.response?.data?.message || "Wrong Password"
    );
  }
};

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Checking Link...
      </div>
    );
  }
if (protectedLink) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-[400px]">

        <h2 className="text-2xl font-bold mb-4">
          🔒 Password Protected
        </h2>

        <p className="text-gray-500 mb-5">
          Enter password to continue
        </p>

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded-xl px-4 py-3 mb-5"
        />

        <button
          onClick={verifyPassword}
          className="w-full bg-blue-600 text-white py-3 rounded-xl"
        >
          Unlock Link
        </button>

      </div>
    </div>
  );
}

  return (
    <div className="min-h-screen flex items-center justify-center">
      {message}
    </div>
  );
};

export default RedirectPage;