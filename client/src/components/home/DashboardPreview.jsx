import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const DashboardPreview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl dark:shadow-slate-900/40 border border-slate-200 dark:border-slate-700 p-8">

        <div className="flex justify-between items-center">

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
            Dashboard Preview
          </h2>

          <FaArrowRight className="text-slate-600 dark:text-slate-300" />

        </div>

        <div className="space-y-5 mt-8">

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-xl p-5">

            <p className="text-slate-600 dark:text-slate-400">
              Total Links
            </p>

            <h3 className="text-3xl font-bold text-slate-800 dark:text-white">
              1,250
            </h3>

          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800 rounded-xl p-5">

            <p className="text-slate-600 dark:text-slate-400">
              Total Clicks
            </p>

            <h3 className="text-3xl font-bold text-slate-800 dark:text-white">
              14,580
            </h3>

          </div>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-xl p-5">

            <p className="text-slate-600 dark:text-slate-400">
              QR Generated
            </p>

            <h3 className="text-3xl font-bold text-slate-800 dark:text-white">
              856
            </h3>

          </div>

        </div>

      </div>
    </motion.div>
  );
};

export default DashboardPreview;