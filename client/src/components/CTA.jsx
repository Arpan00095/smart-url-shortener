import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="py-28">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="rounded-[40px] bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-16 text-center shadow-2xl"
        >

          <span className="bg-white/20 px-5 py-2 rounded-full text-sm font-semibold">
            🚀 START TODAY
          </span>

          <h2 className="text-5xl font-bold mt-8">
            Ready to Shorten
            <br />
            Your First Link?
          </h2>

          <p className="mt-8 text-lg text-blue-100 max-w-2xl mx-auto leading-8">
            Join thousands of creators, businesses and developers
            using LinkNova to shorten, track and manage links.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">

            <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all duration-300">

              Get Started Free

            </button>

            <button className="border border-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-700 transition-all duration-300 flex items-center justify-center gap-2">

              View Dashboard

              <FaArrowRight />

            </button>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default CTA;