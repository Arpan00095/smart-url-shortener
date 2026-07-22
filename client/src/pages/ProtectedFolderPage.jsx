import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import PasswordProtectedFolder from "../components/tools/PasswordProtectedFolder";

const ProtectedFolderPage = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-20 transition-colors">
        <div className="max-w-5xl mx-auto px-6">

          <div className="mb-10 text-center">

            <h1 className="text-5xl font-bold text-slate-900 dark:text-white">
              Protected Folder
            </h1>

            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Upload multiple files inside a password protected folder.
            </p>

          </div>

          <PasswordProtectedFolder />

        </div>
      </main>

      <Footer />
    </>
  );
};

export default ProtectedFolderPage;