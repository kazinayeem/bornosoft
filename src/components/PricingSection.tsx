
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useState } from "react";

const pricingTiers = [
  {
    name: "Starter",
    priceBDT: "12,000",
    priceUSD: "100",
    duration: "One-Time",
    description: "Perfect for small projects, prototypes, or personal websites.",
    features: [
      "Single Page Application (SPA)",
      "Modern Responsive Design",
      "Email Support",
      "1-week turnaround",
      "Source Code Included",
      "Basic SEO Setup",
    ],
    buttonText: "Start Your Project →",
    gradient: "from-blue-500 to-cyan-500",
    isPopular: false,
  },
  {
    name: "Professional",
    priceBDT: "50,000",
    priceUSD: "420",
    duration: "One-Time",
    description:
      "Ideal for growing businesses with advanced features and AI support.",
    features: [
      "Multi-Page Application",
      "Custom Backend API",
      "AI Chatbot Integration",
      "Priority Support (24h response)",
      "4-week turnaround",
      "30 Days Free Support",
      "Performance Optimization",
    ],
    buttonText: "Get Started →",
    gradient: "from-purple-500 to-pink-500",
    isPopular: true,
  },
  {
    name: "Enterprise",
    priceBDT: "Custom",
    priceUSD: "Custom",
    duration: "Tailored",
    description:
      "Comprehensive solution for large-scale businesses and complex systems.",
    features: [
      "Scalable Microservices Architecture",
      "Advanced ML Model Deployment",
      "24/7 Dedicated Support Team",
      "Dedicated DevOps Engineer",
      "Custom Security Audit",
      "SLA Guaranteed",
      "Unlimited Revisions",
    ],
    buttonText: "Contact Sales →",
    gradient: "from-green-500 to-teal-500",
    isPopular: false,
  },
];

export const PricingSection = () => {
  const [currency, setCurrency] = useState<"BDT" | "USD">("USD");

  return (
    <section
      id="pricing"
      className="py-24 bg-gray-50/80 dark:bg-transparent transition-colors duration-300 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-base font-bold text-brand-primary dark:text-brand-accent tracking-wide uppercase mb-3">
            💰 Simple, Transparent Pricing
          </h2>
          <p className="mt-2 text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
            Plans That{" "}
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              Fit Your Budget
            </span>
          </p>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            From startups to enterprises — transparent pricing with no hidden fees. All prices are one-time project costs.
          </p>

          {/* Currency Switcher */}
          <div className="flex justify-center items-center gap-2 mb-8">
            <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
              Currency:
            </span>
            <div className="relative inline-flex bg-white/95 dark:bg-gray-800/70 backdrop-blur-md rounded-full p-1 border border-gray-200 dark:border-blue-500/20 shadow-lg">
              <button
                onClick={() => setCurrency("BDT")}
                className={`relative px-6 py-2 text-sm font-bold rounded-full transition-all duration-300 ${
                  currency === "BDT"
                    ? "bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-glow-blue"
                    : "text-gray-600 dark:text-gray-400 hover:text-brand-primary"
                }`}
              >
                🇧🇩 BDT
              </button>
              <button
                onClick={() => setCurrency("USD")}
                className={`relative px-6 py-2 text-sm font-bold rounded-full transition-all duration-300 ${
                  currency === "USD"
                    ? "bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-glow-blue"
                    : "text-gray-600 dark:text-gray-400 hover:text-brand-primary"
                }`}
              >
                🇺🇸 USD
              </button>
            </div>
          </div>
        </motion.div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className={`relative p-8 rounded-3xl transition duration-500 transform hover:scale-[1.02] ${
                tier.isPopular
                  ? "bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 ring-4 ring-brand-primary dark:ring-brand-accent shadow-2xl"
                  : "bg-white dark:bg-gray-800 shadow-xl border border-gray-100 dark:border-gray-700"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-lg">
                    Most Popular 🔥
                  </span>
                </div>
              )}

            <div className="mb-4">
              <span className={`inline-block px-4 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r ${tier.gradient} shadow-lg`}>
                ⏱️ {tier.duration}
              </span>
            </div>

            <h3 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
              {tier.name}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">{tier.description}</p>

            <div className="mb-8">
              <div className="flex items-baseline justify-center gap-2">
                {tier.priceBDT === "Custom" || tier.priceUSD === "Custom" ? (
                  <span className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white whitespace-nowrap">
                    Custom Quote
                  </span>
                ) : (
                  <>
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      {currency === "BDT" ? "৳" : "$"}
                    </span>
                    <span className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white">
                      {currency === "BDT" ? tier.priceBDT : tier.priceUSD}
                    </span>
                    <span className="text-lg font-semibold text-gray-500 dark:text-gray-400">
                      {currency === "BDT" ? "BDT" : "USD"}
                    </span>
                  </>
                )}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                {tier.duration}
              </p>
            </div>

            <a
              href="#contact"
              className={`block w-full text-center py-4 border border-transparent text-base font-bold rounded-xl text-white bg-gradient-to-r ${tier.gradient} hover:shadow-glow-blue transition-all duration-300 shadow-lg mb-8 transform hover:scale-105`}
            >
              {tier.buttonText}
            </a>

            <ul role="list" className="space-y-4">
              {tier.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle
                    className="flex-shrink-0 h-5 w-5 text-brand-accent mt-0.5"
                  />
                  <p className="ml-3 text-base text-gray-700 dark:text-gray-300 font-medium">
                    {feature}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  );
};
