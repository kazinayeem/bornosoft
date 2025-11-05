import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import {
  Mail,
  User,
  MessageSquare,
  Send,
  CheckCircle,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";

export const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("https://api.bornosoftnr.com/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setStatus(data.message);
    } catch {
      setStatus("Failed to send message ❌");
    } finally {
      setLoading(false);
      form.reset();
    }
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 bg-linear-to-br from-gray-50 via-blue-50 to-purple-50 
        dark:from-transparent dark:via-transparent dark:to-transparent 
        backdrop-blur-sm transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-14 sm:w-16 h-14 sm:h-16 
              rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mb-4 sm:mb-6"
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Send className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
          </motion.div>

          <h2 className="text-sm sm:text-base font-bold text-brand-primary dark:text-brand-accent tracking-wide uppercase mb-2 sm:mb-3">
            Get in Touch
          </h2>
          <p className="mt-2 text-3xl sm:text-5xl font-black text-gray-900 dark:text-white mb-3 sm:mb-4 leading-snug sm:leading-tight">
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              Great Together
            </span>
          </p>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2 sm:px-0">
            Ready to transform your business? Share your vision and we&apos;ll
            craft the perfect solution.
          </p>
        </motion.div>

        {/* Contact Cards + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Email */}
            <motion.div
              className="p-6 sm:p-8 bg-white/95 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl 
                border border-gray-200 dark:border-gray-700 
                hover:border-brand-primary dark:hover:border-brand-accent 
                transition-all duration-300 shadow-md"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1">
                    Email Us
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Drop us a line anytime
                  </p>
                  <a
                    href="mailto:info@bornosoft.com"
                    className="text-brand-primary dark:text-brand-accent font-semibold hover:underline break-all"
                  >
                    info@bornosoft.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              className="p-6 sm:p-8 bg-white/95 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl 
                border border-gray-200 dark:border-gray-700 
                hover:border-brand-primary dark:hover:border-brand-accent 
                transition-all duration-300 shadow-md"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1">
                    Call Us
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Available 24/7
                  </p>
                  <a
                    href="tel:+8801234567890"
                    className="text-brand-primary dark:text-brand-accent font-semibold hover:underline"
                  >
                    +880 1234-567890
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              className="p-6 sm:p-8 bg-white/95 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl 
                border border-gray-200 dark:border-gray-700 
                hover:border-brand-primary dark:hover:border-brand-accent 
                transition-all duration-300 shadow-md"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1">
                    Visit Us
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Come say hello
                  </p>
                  <p className="text-brand-primary dark:text-brand-accent font-semibold">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Response Time */}
            <motion.div
              className="p-6 sm:p-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-xl"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center gap-3 mb-2 sm:mb-3">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Quick Response
                </h3>
              </div>
              <p className="text-white/90 text-sm sm:text-base">
                We typically respond within{" "}
                <span className="font-black text-white">24 hours</span> or less!
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 bg-white/95 dark:bg-gray-800/70 backdrop-blur-md border border-gray-200 
                dark:border-blue-500/20 rounded-2xl shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-5 sm:space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    <User className="w-4 h-4 text-brand-primary dark:text-brand-accent" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="block w-full px-4 py-3 sm:py-4 bg-gray-50 dark:bg-gray-700/50 border border-gray-300 
                      dark:border-gray-600 dark:text-white rounded-xl shadow-sm focus:ring-2 focus:ring-brand-primary 
                      focus:border-brand-primary transition duration-300"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    <Mail className="w-4 h-4 text-brand-primary dark:text-brand-accent" />
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="block w-full px-4 py-3 sm:py-4 bg-gray-50 dark:bg-gray-700/50 border border-gray-300 
                      dark:border-gray-600 dark:text-white rounded-xl shadow-sm focus:ring-2 focus:ring-brand-primary 
                      focus:border-brand-primary transition duration-300"
                    placeholder="you@company.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    <MessageSquare className="w-4 h-4 text-brand-primary dark:text-brand-accent" />
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="block w-full px-4 py-3 sm:py-4 bg-gray-50 dark:bg-gray-700/50 border border-gray-300 
                      dark:border-gray-600 dark:text-white rounded-xl shadow-sm focus:ring-2 focus:ring-brand-primary 
                      focus:border-brand-primary transition duration-300 resize-none"
                    placeholder="Tell us about your project needs, timeline, and budget..."
                  ></textarea>
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3 sm:py-4 px-6 border border-transparent 
                    rounded-xl shadow-xl text-base sm:text-lg font-black text-white bg-gradient-to-r 
                    from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 
                    disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>

                {/* Status Message */}
                {status && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center gap-2 p-4 rounded-xl text-sm font-semibold ${
                      status.includes("❌") || status.includes("Failed")
                        ? "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400"
                        : "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400"
                    }`}
                  >
                    <CheckCircle className="w-5 h-5" />
                    <p>{status}</p>
                  </motion.div>
                )}
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
