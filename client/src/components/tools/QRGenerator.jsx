import { useRef, useState } from "react";
import QRCode from "react-qr-code";
import { FaCopy, FaDownload } from "react-icons/fa";
import { toPng } from "html-to-image";
import toast from "react-hot-toast";
import api from "../../services/api";
import LoginRequiredModal from "../common/LoginRequiredModal";

const QRGenerator = () => {
  const [url, setUrl] = useState("");
  const [qrValue, setQrValue] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const qrRef = useRef(null);

  const saveQR = async (url, image) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setShowLoginModal(true);
        return;
      }

      await api.post(
        "/qr",
        {
          original_url: url,
          qr_image: image,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (err) {
      console.log(err);
      toast.error("Failed to save QR");
    }
  };

  const handleGenerate = async () => {
    if (!url.trim()) {
      toast.error("Please enter a URL");
      return;
    }

    try {
      new URL(url);
    } catch {
      toast.error("Please enter a valid URL");
      return;
    }

    setQrValue(url);

    setTimeout(async () => {
      if (!qrRef.current) return;

      const image = await toPng(qrRef.current);
      const token = localStorage.getItem("token");

      if (!token) {
        setShowLoginModal(true);
        return;
      }

      await saveQR(url, image);

      toast.success("QR Generated Successfully");
    }, 100);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(qrValue);
      toast.success("URL Copied Successfully");
    } catch {
      toast.error("Failed to Copy URL");
    }
  };

  const handleDownload = async () => {
    if (!qrRef.current) return;

    try {
      const dataUrl = await toPng(qrRef.current);

      const link = document.createElement("a");
      link.download = "LinkNova-QR.png";
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.log(err);
      toast.error("Download Failed");
    }
  };

  const handleClear = () => {
    setUrl("");
    setQrValue("");
  };

  return (
    <>
      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl dark:shadow-slate-900/40 border border-slate-200 dark:border-slate-700 p-8">

        {/* Heading */}
        <div className="mb-8">

          <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
            📱 QR Generator
          </h2>

          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Generate beautiful QR Codes instantly.
          </p>

        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <div>

            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com"
              className="w-full border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-xl px-5 py-4 mb-5 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-900 outline-none transition"
            />

            <button
              onClick={handleGenerate}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
            >
              Generate QR
            </button>

            <button
              onClick={handleClear}
              className="mt-4 w-full border border-red-500 text-red-500 dark:text-red-400 py-3 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 transition"
            >
              Clear
            </button>

          </div>

          {/* Right */}
          <div className="flex justify-center">

            {qrValue ? (
              <div className="flex flex-col items-center">

                <div
                  ref={qrRef}
                  className="bg-white p-5 rounded-2xl shadow-lg"
                >
                  <QRCode
                    value={qrValue}
                    size={220}
                  />
                </div>

                <div className="flex gap-4 mt-6">

                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition"
                  >
                    <FaCopy />
                    Copy
                  </button>

                  <button
                    onClick={handleDownload}
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl transition"
                  >
                    <FaDownload />
                    Download
                  </button>

                </div>

              </div>
            ) : (
              <div className="text-center text-slate-400 dark:text-slate-500">

                <div className="text-8xl mb-4">
                  📱
                </div>

                <p>Your QR Code will appear here</p>

              </div>
            )}

          </div>

        </div>

      </div>

      <LoginRequiredModal
        open={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </>
  );
};

export default QRGenerator;