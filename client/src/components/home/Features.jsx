import { motion } from "framer-motion";
import {
  FaLink,
  FaChartLine,
  FaBolt,
  FaShieldAlt,
  FaQrcode,
  FaGlobe,
  FaLock,
} from "react-icons/fa";

const features = [
  {
    icon: <FaLink size={32} />,
    title: "Smart Links",
    desc: "Create beautiful short links in seconds.",
  },
  {
    icon: <FaChartLine size={32} />,
    title: "Analytics",
    desc: "Track every click with real-time insights.",
  },
  {
    icon: <FaBolt size={32} />,
    title: "Lightning Fast",
    desc: "Generate URLs instantly with blazing speed.",
  },
  {
    icon: <FaShieldAlt size={32} />,
    title: "Secure",
    desc: "Your links are protected and reliable.",
  },
  {
    icon: <FaQrcode size={32} />,
    title: "QR Codes",
    desc: "Generate QR codes for every short link.",
  },
  {
    icon: <FaGlobe size={32} />,
    title: "Global Access",
    desc: "Share links anywhere in the world.",
  },
  {
  icon: <FaLock size={32} />,
  title: "Password Protected URLs",
  desc: "Secure your important links with password protection.",
},
];

const Features = () => {
  return (
    <section
      id="features"
      className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="text-blue-600 font-semibold tracking-widest uppercase">
            Features
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
            Powerful Tools for Everyone
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
            Everything you need to create, manage, analyze and share
            your smart links from one beautiful platform.
          </p>

        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                rounded-3xl
                border
                border-slate-200
                dark:border-slate-800
                bg-white
                dark:bg-slate-900
                p-8
                shadow-lg
                hover:shadow-2xl
                transition
              "
            >

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white mb-6">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                {feature.title}
              </h3>

              <p className="leading-7 text-slate-600 dark:text-slate-400">
                {feature.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Features;