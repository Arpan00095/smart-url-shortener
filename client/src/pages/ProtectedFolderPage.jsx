import {
  FaFolderOpen,
  FaLock,
  FaCloudUploadAlt,
  FaDownload,
} from "react-icons/fa";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import PasswordProtectedFolder from "../components/tools/PasswordProtectedFolder";

const ProtectedFolderPage = () => {
  const features = [
    {
      icon: <FaCloudUploadAlt className="text-3xl text-blue-600" />,
      title: "Upload Files",
      description: "Upload multiple files securely in one protected folder.",
    },
    {
      icon: <FaLock className="text-3xl text-red-500" />,
      title: "Password Protection",
      description: "Only users with the correct password can access your files.",
    },
    {
      icon: <FaDownload className="text-3xl text-green-600" />,
      title: "Easy Download",
      description: "Share one secure link and let users download files safely.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pt-32 pb-24 transition-colors">

        <div className="max-w-7xl mx-auto px-6">

          {/* Hero */}

          <div className="text-center max-w-3xl mx-auto">

            <div className="inline-flex items-center gap-3 bg-blue-100 dark:bg-blue-900/30 px-5 py-2 rounded-full mb-6">

              <FaFolderOpen className="text-blue-600" />

              <span className="font-semibold text-blue-700 dark:text-blue-300">
                Secure File Sharing
              </span>

            </div>

            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white">

              Password Protected
              <br />

              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Folder
              </span>

            </h1>

            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-8">

              Upload multiple files into a secure folder protected with a password.
              Share a single link and keep your documents safe.

            </p>

          </div>

          {/* Features */}

          <div className="grid md:grid-cols-3 gap-6 mt-16 mb-16">

            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-6 text-center"
              >
                <div className="flex justify-center mb-5">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}

          </div>

          {/* Tool */}

          <div className="max-w-5xl mx-auto">

            <PasswordProtectedFolder />

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
};

export default ProtectedFolderPage;