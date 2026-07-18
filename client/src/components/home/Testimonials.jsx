import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "John Smith",
    role: "Digital Marketer",
    image: "https://i.pravatar.cc/100?img=12",
    review:
      "LinkNova made managing my marketing links incredibly easy. Analytics are fast and accurate.",
  },
  {
    name: "Sarah Johnson",
    role: "Content Creator",
    image: "https://i.pravatar.cc/100?img=25",
    review:
      "The dashboard is beautiful and the QR code feature saves me a lot of time.",
  },
  {
    name: "David Lee",
    role: "Startup Founder",
    image: "https://i.pravatar.cc/100?img=33",
    review:
      "The best URL shortener I've ever used. Fast, secure and super easy to use.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="text-blue-600 font-semibold tracking-widest uppercase">
            Testimonials
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
            Loved by Thousands
          </h2>

          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
            See what our users say about LinkNova.
          </p>

        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((item, index) => (

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
                bg-white
                dark:bg-slate-900
                border
                border-slate-200
                dark:border-slate-800
                shadow-lg
                hover:shadow-2xl
                p-8
                transition
              "
            >

              {/* Rating */}
              <div className="flex gap-1 text-yellow-400 mb-6">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* Review */}
              <p className="italic leading-8 text-slate-600 dark:text-slate-400">
                "{item.review}"
              </p>

              {/* User */}
              <div className="flex items-center gap-4 mt-8">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full border-2 border-blue-500"
                />

                <div>

                  <h4 className="font-bold text-slate-900 dark:text-white">
                    {item.name}
                  </h4>

                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {item.role}
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;