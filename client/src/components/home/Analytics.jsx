import { motion } from "framer-motion";
import {
  FaMousePointer,
  FaLink,
  FaChartLine,
  FaGlobe,
} from "react-icons/fa";

const Analytics = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-5 md:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <span className="text-blue-600 font-semibold tracking-widest uppercase">
              Analytics
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-slate-900 dark:text-white">
              Understand Every
              <br />
              Click Instantly
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600 dark:text-slate-400">
              LinkNova provides powerful real-time analytics to help you
              understand your audience, monitor traffic and improve link
              performance.
            </p>

            <div className="space-y-8 mt-12">

              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <FaMousePointer className="text-blue-600 text-xl" />
                </div>

                <div>
                  <h3 className="font-bold text-xl text-slate-900 dark:text-white">
                    Real-Time Click Tracking
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400">
                    Monitor every click instantly with live analytics.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <FaGlobe className="text-purple-600 text-xl" />
                </div>

                <div>
                  <h3 className="font-bold text-xl text-slate-900 dark:text-white">
                    Visitor Locations
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400">
                    Discover exactly where your visitors come from.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <FaChartLine className="text-green-600 text-xl" />
                </div>

                <div>
                  <h3 className="font-bold text-xl text-slate-900 dark:text-white">
                    Performance Insights
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400">
                    Optimize your campaigns using detailed reports.
                  </p>
                </div>
              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <div className="rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-2xl p-8">

              <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">
                Analytics Overview
              </h3>

              <div className="space-y-7">

                <div>
                  <div className="flex justify-between text-slate-700 dark:text-slate-300 mb-2">
                    <span>Total Links</span>
                    <strong>1,250</strong>
                  </div>

                  <div className="w-full h-3 rounded-full bg-slate-200 dark:bg-slate-700">
                    <div className="h-3 w-[80%] rounded-full bg-blue-600"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-700 dark:text-slate-300 mb-2">
                    <span>Total Clicks</span>
                    <strong>14,580</strong>
                  </div>

                  <div className="w-full h-3 rounded-full bg-slate-200 dark:bg-slate-700">
                    <div className="h-3 w-[92%] rounded-full bg-purple-600"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-700 dark:text-slate-300 mb-2">
                    <span>QR Generated</span>
                    <strong>856</strong>
                  </div>

                  <div className="w-full h-3 rounded-full bg-slate-200 dark:bg-slate-700">
                    <div className="h-3 w-[65%] rounded-full bg-green-600"></div>
                  </div>
                </div>

              </div>

              <div className="grid grid-cols-2 gap-5 mt-10">

                <div className="rounded-2xl bg-blue-50 dark:bg-blue-900/20 p-5">

                  <FaLink className="text-blue-600 text-2xl mb-3" />

                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
                    98%
                  </h4>

                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Success Rate
                  </p>

                </div>

                <div className="rounded-2xl bg-green-50 dark:bg-green-900/20 p-5">

                  <FaChartLine className="text-green-600 text-2xl mb-3" />

                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
                    +42%
                  </h4>

                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Growth
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default Analytics;