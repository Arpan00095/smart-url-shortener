import { motion } from "framer-motion";
import {
  FaCheck,
  FaRocket,
  FaCrown,
  FaBuilding,
} from "react-icons/fa";

const plans = [
  {
    name: "Free",
    badge: "Available Now",
    icon: <FaRocket />,
    active: true,
    features: [
      "Unlimited URL Shortening",
      "Custom Alias",
      "QR Code Generator",
      "Password Protected URLs",
      "Click Analytics",
      "Dashboard Access",
    ],
    button: "Start Free",
  },
  {
    name: "Pro",
    badge: "Coming Soon",
    icon: <FaCrown />,
    active: false,
    features: [
      "Advanced Analytics",
      "Bulk URL Shortener",
      "Custom QR Colors",
      "CSV / PDF Export",
      "Favorites",
      "Priority Support",
    ],
    button: "Coming Soon",
  },
  {
    name: "Business",
    badge: "Coming Soon",
    icon: <FaBuilding />,
    active: false,
    features: [
      "Team Management",
      "Developer API",
      "White Label Branding",
      "Enterprise Security",
      "Dedicated Dashboard",
      "Premium Support",
    ],
    button: "Coming Soon",
  },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="py-28 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center mb-20">
          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            Plans
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-4">
            Pricing Coming Soon
          </h2>

          <p className="text-slate-600 dark:text-slate-400 mt-6 text-lg max-w-2xl mx-auto">
            LinkNova is currently free to use. Premium plans with advanced
            features will be available soon.
          </p>
        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{ duration: 0.25 }}
              className={`rounded-3xl border p-8 shadow-xl transition
                ${
                  plan.active
                    ? "border-blue-600 bg-white dark:bg-slate-900"
                    : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 opacity-90"
                }`}
            >
              <div className="text-4xl text-blue-600 mb-6">
                {plan.icon}
              </div>

              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-5
                ${
                  plan.active
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {plan.badge}
              </span>

              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                {plan.name}
              </h3>

              <div className="mt-8 space-y-4">
                {plan.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-slate-700 dark:text-slate-300"
                  >
                    <FaCheck className="text-green-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button
                disabled={!plan.active}
                className={`mt-10 w-full py-4 rounded-xl font-bold transition
                  ${
                    plan.active
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105"
                      : "bg-slate-200 dark:bg-slate-800 text-slate-500 cursor-not-allowed"
                  }`}
              >
                {plan.button}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}

        <div className="mt-16 text-center">
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            🚀 More premium features like API Access, Team Workspaces,
            White Label Branding and Advanced Analytics are currently under
            development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;