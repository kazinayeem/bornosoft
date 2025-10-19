"use client";

import { motion } from "framer-motion";

export const ContactSection = () => (
  <section
    id="contact"
    className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300  dark:border-gray-800"
  >
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-base font-semibold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase">
          Get in Touch
        </h2>
        <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
          Let&apos;s Build Something Great
        </p>
      </motion.div>

      {/* Form Animation */}
      <motion.form
        className="space-y-6 p-8 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl bg-white dark:bg-gray-800 transition-colors duration-300"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            required
            className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Work Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
            placeholder="you@company.com"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Project Details
          </label>
          <textarea
            id="message"
            rows={4}
            required
            className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
            placeholder="Tell us about your needs for a web app or AI chatbot..."
          ></textarea>
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-lg text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300"
        >
          Send Inquiry
        </motion.button>
      </motion.form>
    </div>
  </section>
);
