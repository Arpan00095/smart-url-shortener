import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Is LinkNova free to use?",
    answer:
      "Yes. You can shorten links, generate QR codes and access basic analytics for free.",
  },
  {
    question: "Can I create custom short URLs?",
    answer:
      "Yes. Pro and Enterprise users can create custom branded short links.",
  },
  {
    question: "Does LinkNova provide analytics?",
    answer:
      "Absolutely. You can monitor clicks, traffic sources, countries and much more.",
  },
  {
    question: "Can I delete my links anytime?",
    answer:
      "Yes. You have complete control over your links from your dashboard.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. We use secure authentication and encrypted communication to keep your data safe.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-28 bg-white">

      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-600 font-semibold">
            FAQ
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-500 mt-6 text-lg">
            Everything you need to know about LinkNova.
          </p>

        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="border rounded-2xl overflow-hidden shadow-sm"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full flex justify-between items-center px-6 py-5 bg-white hover:bg-gray-50 transition"
              >

                <span className="font-semibold text-left">
                  {faq.question}
                </span>

                <motion.div
                  animate={{
                    rotate: open === index ? 180 : 0,
                  }}
                >
                  <FaChevronDown />
                </motion.div>

              </button>

              <AnimatePresence>

                {open === index && (

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >

                    <div className="px-6 pb-6 text-gray-600 leading-8">

                      {faq.answer}

                    </div>

                  </motion.div>

                )}

              </AnimatePresence>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default FAQ;