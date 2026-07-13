import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const plans = [
  {
    name: "Free",
    price: "$0",
    popular: false,
    features: [
      "100 Links / Month",
      "Basic Analytics",
      "QR Codes",
      "Community Support",
    ],
  },
  {
    name: "Pro",
    price: "$9",
    popular: true,
    features: [
      "Unlimited Links",
      "Advanced Analytics",
      "Custom Short URLs",
      "Password Protected Links",
      "Priority Support",
    ],
  },
  {
    name: "Enterprise",
    price: "$29",
    popular: false,
    features: [
      "Unlimited Everything",
      "API Access",
      "Dedicated Dashboard",
      "Team Management",
      "24/7 Premium Support",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="py-28 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <span className="text-blue-600 font-semibold">
            PRICING
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Simple Pricing
          </h2>

          <p className="text-gray-500 mt-6 text-lg">
            Choose the perfect plan for your needs.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {plans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              transition={{ duration: .3 }}
              className={`relative rounded-3xl p-8 shadow-xl border
              ${
                plan.popular
                  ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white border-transparent"
                  : "bg-white border-gray-200"
              }`}
            >

              {plan.popular && (
                <span className="absolute top-5 right-5 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </span>
              )}

              <h3 className="text-3xl font-bold">
                {plan.name}
              </h3>

              <div className="mt-6">

                <span className="text-6xl font-extrabold">
                  {plan.price}
                </span>

                <span className="text-lg">
                  /month
                </span>

              </div>

              <div className="mt-10 space-y-5">

                {plan.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3"
                  >
                    <FaCheck />

                    <span>{feature}</span>

                  </div>
                ))}

              </div>

              <button
                className={`mt-10 w-full py-4 rounded-xl font-bold transition
                ${
                  plan.popular
                    ? "bg-white text-blue-700 hover:bg-gray-100"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105"
                }`}
              >
                Get Started
              </button>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Pricing;