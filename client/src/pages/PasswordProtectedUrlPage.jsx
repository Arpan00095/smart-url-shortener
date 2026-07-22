import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import PasswordProtectedUrl from "../components/tools/PasswordProtectedUrl";

const PasswordProtectedUrlPage = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-20 transition-colors">
        <div className="max-w-5xl mx-auto px-6">

          <div className="mb-10 text-center">

            <h1 className="text-5xl font-bold text-slate-900 dark:text-white">
              Password Protected URL
            </h1>

            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Secure your links with password protection.
            </p>

          </div>

          <PasswordProtectedUrl />

        </div>
      </main>

      <Footer />
    </>
  );
};

export default PasswordProtectedUrlPage;