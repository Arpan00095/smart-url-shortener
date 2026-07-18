import {
  FaShieldAlt,
  FaLock,
  FaUserShield,
  FaKey,
} from "react-icons/fa";


const PrivacySecurity = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">


      {/* Hero */}

      <section className="max-w-7xl mx-auto px-6 py-20 text-center">

        <FaShieldAlt className="text-blue-600 text-5xl mx-auto mb-5" />


        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
          Privacy & <span className="text-blue-600">Security</span>
        </h1>


        <p className="mt-5 text-lg text-slate-600 dark:text-slate-400">
          Manage your account security and privacy preferences.
        </p>

      </section>




      {/* Security Cards */}

      <section className="max-w-5xl mx-auto px-6 pb-20">


        <div className="grid md:grid-cols-2 gap-6">


          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 p-6">

            <FaLock className="text-blue-600 text-3xl mb-4" />

            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Password Security
            </h2>


            <p className="mt-3 text-slate-600 dark:text-slate-400">
              Keep your account protected by using a strong password.
            </p>

          </div>




          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 p-6">

            <FaUserShield className="text-green-600 text-3xl mb-4" />

            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Account Protection
            </h2>


            <p className="mt-3 text-slate-600 dark:text-slate-400">
              Your personal information is securely managed by LinkNova.
            </p>

          </div>




          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 p-6">

            <FaKey className="text-purple-600 text-3xl mb-4" />

            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Login Security
            </h2>


            <p className="mt-3 text-slate-600 dark:text-slate-400">
              Protect your account credentials and login sessions.
            </p>

          </div>


        </div>



      </section>


    </div>
  );
};


export default PrivacySecurity;