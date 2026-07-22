import { motion } from "framer-motion";
import ToolCards from "./ToolCards";

const HeroLeft = ({ tools }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-wrap gap-3">

        <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full font-semibold">
          🚀 Welcome to LinkNova
        </span>

        <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-4 py-2 rounded-full font-semibold">
          🟢 Live • 99.9% Uptime
        </span>

      </div>

      <h1 className="mt-8 text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white">
        Create Smart
        <br />

        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Links Faster
        </span>
      </h1>

      <p className="mt-6 text-slate-600 dark:text-slate-300 text-lg">
        Shorten URLs, Generate QR Codes, Secure Links and Protected Folders
        from one beautiful dashboard.
      </p>

      <div className="mt-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-3xl shadow-xl p-6">

        <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
          Smart Tools
        </h2>

        <ToolCards tools={tools} />

      </div>

      <div className="flex gap-10 mt-12 flex-wrap">

        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            10M+
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            Links Created
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            50K+
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            Users
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            99.9%
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            Uptime
          </p>
        </div>

      </div>

    </motion.div>
  );
};

export default HeroLeft;