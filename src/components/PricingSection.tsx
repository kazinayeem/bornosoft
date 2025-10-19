"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const pricingTiers = [
  {
    name: "Starter",
    price: "12,000 BDT",
    duration: "One-Time",
    description: "Perfect for small projects, prototypes, or personal websites.",
    features: [
      "Single Page Application (SPA)",
      "Basic UI/UX Design",
      "Email Support",
      "1-week turnaround",
      "No AI Integration",
    ],
    buttonText: "Start Simple",
    color: "indigo",
    isPopular: false,
  },
  {
    name: "Professional",
    price: "50,000 BDT",
    duration: "One-Time",
    description:
      "Ideal for small to medium businesses with advanced features and AI support.",
    features: [
      "Multi-Page Application",
      "Custom Backend API",
      "Basic AI Chatbot Integration",
      "Priority Support (Slack)",
      "30-day turnaround",
    ],
    buttonText: "Go Pro",
    color: "rose",
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    duration: "Per Project",
    description:
      "Comprehensive solution for large-scale businesses and complex systems.",
    features: [
      "Scalable Microservices",
      "Advanced ML Model Deployment",
      "24/7 Dedicated Support",
      "Dedicated DevOps Team",
      "Custom Security Audit",
    ],
    buttonText: "Contact Sales",
    color: "amber",
    isPopular: false,
  },
];

export const PricingSection = () => (
  <section
    id="pricing"
    className="py-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-300 dark:border-gray-800"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-base font-semibold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase">
          Affordable Packages
        </h2>
        <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
          Transparent Pricing for Every Business
        </p>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
          Choose the right plan for your project — from startups to large enterprises.
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {pricingTiers.map((tier, index) => (
          <motion.div
            key={tier.name}
            className={`relative p-8 rounded-3xl transition duration-500 transform hover:scale-[1.02] ${
              tier.isPopular
                ? "bg-indigo-50 dark:bg-gray-800 ring-4 ring-rose-500 dark:ring-rose-400 shadow-2xl"
                : "bg-white dark:bg-gray-800 shadow-lg"
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {tier.isPopular && (
              <span className="absolute top-0 right-0 -mt-4 mr-6 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-rose-600 dark:bg-rose-500 rounded-full shadow-lg animate-bounce">
                Most Popular
              </span>
            )}

            <h3 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
              {tier.name}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">{tier.description}</p>

            <div className="flex items-baseline mb-8">
              <span className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
                {tier.price}
              </span>
              {tier.duration !== "Per Project" && (
                <span className="ml-2 text-lg font-medium text-gray-500 dark:text-gray-400">
                  / {tier.duration}
                </span>
              )}
            </div>

            <a
              href="#contact"
              className={`block w-full text-center py-3 border border-transparent text-lg font-semibold rounded-xl text-white transition duration-300 shadow-lg mb-8 transform hover:scale-[1.01] ${
                tier.isPopular
                  ? "bg-rose-600 hover:bg-rose-700 shadow-rose-500/50"
                  : "bg-indigo-600 hover:bg-indigo-700 shadow-indigo-500/50"
              }`}
            >
              {tier.buttonText}
            </a>

            <ul role="list" className="space-y-4">
              {tier.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle
                    className={`flex-shrink-0 h-6 w-6 ${
                      tier.isPopular ? "text-rose-500" : "text-indigo-500"
                    }`}
                  />
                  <p className="ml-3 text-base text-gray-600 dark:text-gray-300">
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
