import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const VerifyProtectedFolder = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pt-32 pb-24">

        <div className="max-w-xl mx-auto">

          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 p-10">

            <h1 className="text-4xl font-bold text-center text-slate-900 dark:text-white">
              🔒 Protected Folder
            </h1>

            <p className="mt-4 text-center text-slate-600 dark:text-slate-400">
              Enter the folder password to access files.
            </p>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
};

export default VerifyProtectedFolder;