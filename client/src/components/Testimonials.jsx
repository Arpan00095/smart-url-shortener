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
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-600 font-semibold">
            TESTIMONIALS
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Loved by Thousands
          </h2>

          <p className="mt-6 text-gray-500 text-lg">
            See what our users say about LinkNova.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{ duration: .3 }}
              className="bg-white rounded-3xl border border-gray-200 shadow-lg p-8"
            >

              <div className="flex gap-1 text-yellow-400 mb-6">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="text-gray-600 leading-8 italic">
                "{item.review}"
              </p>

              <div className="flex items-center gap-4 mt-8">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full"
                />

                <div>
                  <h4 className="font-bold">
                    {item.name}
                  </h4>

                  <p className="text-gray-500 text-sm">
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