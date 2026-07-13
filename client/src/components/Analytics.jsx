import { motion } from "framer-motion";
import {
  FaMousePointer,
  FaLink,
  FaChartLine,
  FaGlobe,
} from "react-icons/fa";

const Analytics = () => {
  return (
    <section className="py-28 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <span className="text-blue-600 font-semibold">
              ANALYTICS
            </span>

            <h2 className="text-5xl font-bold mt-4 leading-tight">
              Understand Every
              <br />
              Click Instantly
            </h2>

            <p className="text-gray-500 mt-8 text-lg leading-8">

              LinkNova provides real-time analytics to help you
              understand your audience and improve performance.

            </p>

            <div className="space-y-6 mt-10">

              <div className="flex gap-4">
                <FaMousePointer className="text-blue-600 text-2xl mt-1"/>
                <div>
                  <h3 className="font-bold text-xl">
                    Real-Time Click Tracking
                  </h3>

                  <p className="text-gray-500">
                    Monitor every click instantly.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaGlobe className="text-purple-600 text-2xl mt-1"/>
                <div>
                  <h3 className="font-bold text-xl">
                    Visitor Locations
                  </h3>

                  <p className="text-gray-500">
                    Discover where your traffic comes from.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaChartLine className="text-green-600 text-2xl mt-1"/>
                <div>
                  <h3 className="font-bold text-xl">
                    Performance Insights
                  </h3>

                  <p className="text-gray-500">
                    Optimize links using analytics.
                  </p>
                </div>
              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <div className="bg-white rounded-3xl shadow-2xl p-8">

              <h3 className="text-2xl font-bold mb-8">
                Analytics Overview
              </h3>

              <div className="space-y-6">

                <div className="flex justify-between">
                  <span>Total Links</span>
                  <strong>1,250</strong>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-blue-600 h-3 rounded-full w-[80%]"></div>
                </div>

                <div className="flex justify-between">
                  <span>Total Clicks</span>
                  <strong>14,580</strong>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-purple-600 h-3 rounded-full w-[92%]"></div>
                </div>

                <div className="flex justify-between">
                  <span>QR Generated</span>
                  <strong>856</strong>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-green-600 h-3 rounded-full w-[65%]"></div>
                </div>

              </div>

              <div className="grid grid-cols-2 gap-4 mt-10">

                <div className="bg-blue-50 rounded-xl p-5">
                  <FaLink className="text-blue-600 text-2xl mb-3"/>
                  <h4 className="font-bold">98%</h4>
                  <p className="text-gray-500 text-sm">
                    Success Rate
                  </p>
                </div>

                <div className="bg-green-50 rounded-xl p-5">
                  <FaChartLine className="text-green-600 text-2xl mb-3"/>
                  <h4 className="font-bold">+42%</h4>
                  <p className="text-gray-500 text-sm">
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