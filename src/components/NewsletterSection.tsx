
import { Mail } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for actual subscription logic
    console.log("Newsletter Signup:", email);
    setMessage(
      "✅ Thank you for subscribing! You’ll receive updates from Bornosoft soon."
    );
    setEmail("");
    setTimeout(() => setMessage(""), 5000);
  };

  return (
    <section
      id="newsletter"
      className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4"
        >
          Stay Ahead of the Curve
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-500 dark:text-gray-400 mb-8"
        >
          Get exclusive insights on AI trends, web development strategies, and
          Bornosoft announcements.
        </motion.p>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row max-w-lg mx-auto space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <div className="relative flex-grow">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="email"
              required
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 border border-transparent text-base font-semibold rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 shadow-md"
          >
            Subscribe
          </motion.button>
        </motion.form>

        {/* Success Message */}
        {message && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mt-4 text-sm font-medium text-green-600 dark:text-green-400"
          >
            {message}
          </motion.p>
        )}
      </div>
    </section>
  );
};
