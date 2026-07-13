import { motion } from "framer-motion";
import { FaArrowRight, FaLink } from "react-icons/fa";

const Hero = () => {
  return (
   <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-32 pb-24">
      {/* Background Blur */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-300 opacity-20 blur-3xl"></div>

      {/* Animated Orbs */}

<motion.div
  animate={{
    x: [0, 40, 0],
    y: [0, -30, 0],
  }}
  transition={{
    duration: 12,
    repeat: Infinity,
  }}
  className="absolute top-20 left-1/3 w-40 h-40 rounded-full bg-blue-400/20 blur-3xl"
/>

<motion.div
  animate={{
    x: [0, -40, 0],
    y: [0, 30, 0],
  }}
  transition={{
    duration: 10,
    repeat: Infinity,
  }}
  className="absolute bottom-10 right-1/4 w-52 h-52 rounded-full bg-purple-400/20 blur-3xl"
/>

<motion.div
  animate={{
    scale: [1, 1.2, 1],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
  }}
  className="absolute top-1/2 left-10 w-32 h-32 rounded-full bg-cyan-400/20 blur-3xl"
/>

      <div className="absolute top-40 right-0 h-96 w-96 rounded-full bg-purple-300 opacity-20 blur-3xl"></div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
          
<div className="flex flex-wrap items-center gap-3">

  <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
    🚀 Welcome to LinkNova
  </span>

  <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
    🟢 Live • 99.9% Uptime
  </span>

</div>

            <h1 className="mt-8 text-5xl lg:text-7xl font-extrabold leading-tight">

              Create Smart

              <br />

              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">

                Links Faster

              </span>

            </h1>

            <p className="mt-8 text-gray-600 text-xl leading-9">

              Shorten URLs, generate QR codes, track clicks and
              manage all your links from one beautiful dashboard.

            </p>

            {/* URL INPUT */}

            <div className="mt-10 flex flex-col sm:flex-row gap-4">

              <div className="flex items-center bg-white/80 backdrop-blur-md border border-gray-200 rounded-xl shadow-lg px-5 py-4 flex-1">

                <FaLink className="text-gray-400 mr-3" />

                <input
                  type="text"
                  placeholder="Paste your long URL..."
                  className="outline-none w-full"
                />

              </div>

              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 rounded-xl font-semibold hover:scale-110 hover:shadow-2xl transition-all duration-300">

                Shorten

              </button>

            </div>

            {/* STATS */}

            <div className="flex gap-10 mt-12 flex-wrap">

              <div>

                <h2 className="text-3xl font-bold">10M+</h2>

                <p className="text-gray-500">Links Created</p>

              </div>

              <div>

                <h2 className="text-3xl font-bold">50K+</h2>

                <p className="text-gray-500">Users</p>

              </div>

              <div>

                <h2 className="text-3xl font-bold">99.9%</h2>

                <p className="text-gray-500">Uptime</p>

              </div>

            </div>

          </motion.div>

 {/* RIGHT SIDE */}

<motion.div
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="relative"
>
  {/* Dashboard Preview */}
  <div className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-2xl p-8">

    <div className="flex items-start justify-between mb-8">

      <div>
        <h2 className="font-bold text-xl">
          Dashboard Preview
        </h2>

        <div className="flex gap-2 mt-2">
          <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
            Live
          </span>

          <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
            Analytics
          </span>
        </div>
      </div>

      <FaArrowRight className="text-xl text-gray-600" />

    </div>

    <div className="space-y-5">

      <div className="bg-blue-50 rounded-xl p-5 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
        <p className="text-gray-500">Total Links</p>
        <h3 className="text-3xl font-bold">1,250</h3>
      </div>

      <div className="bg-purple-50 rounded-xl p-5 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
        <p className="text-gray-500">Total Clicks</p>
        <h3 className="text-3xl font-bold">14,580</h3>
      </div>

      <div className="bg-green-50 rounded-xl p-5 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
        <p className="text-gray-500">QR Generated</p>
        <h3 className="text-3xl font-bold">856</h3>
      </div>

    </div>

  </div>

  {/* Bottom Cards */}

  <div className="grid grid-cols-2 gap-4 mt-6">

    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4, repeat: Infinity }}
      className="bg-white rounded-2xl shadow-lg p-5 border border-gray-100"
    >
      <p className="text-gray-500 text-sm">
        Today's Clicks
      </p>

      <h3 className="text-2xl font-bold text-blue-600 mt-2">
        +248
      </h3>
    </motion.div>

    <motion.div
      animate={{ y: [0, 6, 0] }}
      transition={{ duration: 5, repeat: Infinity }}
      className="bg-white rounded-2xl shadow-lg p-5 border border-gray-100"
    >
      <p className="text-gray-500 text-sm">
        QR Generated
      </p>

      <h3 className="text-2xl font-bold text-purple-600 mt-2">
        856
      </h3>
    </motion.div>

  </div>

</motion.div>

        </div>

      </div>

    </section>
  );
};

export default Hero;