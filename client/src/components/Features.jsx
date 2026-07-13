import { motion } from "framer-motion";
import {
  FaLink,
  FaChartLine,
  FaBolt,
  FaShieldAlt,
  FaQrcode,
  FaGlobe,
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
];

const Features = () => {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-600 font-semibold">
            FEATURES
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Powerful Tools for Everyone
          </h2>

          <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg">
            Everything you need to create, manage and analyze your links.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg hover:shadow-2xl"
            >

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center mb-6">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-500 leading-7">
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