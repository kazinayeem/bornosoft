import { Zap, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter Signup:", email);
    setMessage(
      "✅ Thank you for subscribing! You'll receive updates from BornoSoft soon."
    );
    setEmail("");
    setTimeout(() => setMessage(""), 5000);
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-950/90 backdrop-blur-md text-gray-800 dark:text-gray-200 mt-12 border-t border-gray-300 dark:border-blue-500/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-gray-300 dark:border-gray-800 pb-8">
          {/* Logo/Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-2xl font-extrabold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent tracking-tight">
              <Zap className="w-6 h-6 text-brand-primary" />
              <span>BornoSoft</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transform ideas into intelligent digital solutions. Expert
              AI-powered web development in Bangladesh.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="px-3 py-1 bg-brand-primary/10 text-brand-accent rounded-full font-semibold">
                ⭐ 50+ Happy Clients
              </span>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-primary transition duration-150"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/refund-policy"
                  className="text-gray-600 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-primary transition duration-150"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-600 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-primary transition duration-150"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-600 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-primary transition duration-150"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Contact
            </h3>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <p>
                <strong className="text-brand-primary dark:text-brand-accent">
                  Email:
                </strong>
                <br />
                info@bornosoft.com
              </p>
              <p>
                <strong className="text-brand-primary dark:text-brand-accent">
                  Location:
                </strong>
                <br />
                Dhaka, Bangladesh
              </p>
              <p>
                <strong className="text-brand-primary dark:text-brand-accent">
                  Response:
                </strong>
                <br />
                Within 24 hours
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Stay Ahead of the{" "}
              <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                Curve
              </span>
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
              Get exclusive insights on AI trends & web development.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-500" />
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800/50 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition duration-300 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-sm font-bold rounded-lg text-white bg-gradient-to-r from-brand-primary to-brand-secondary hover:shadow-glow-blue transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
            {message && (
              <p className="mt-2 text-xs font-semibold text-green-500 dark:text-green-400">
                {message}
              </p>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-300 dark:border-gray-800 pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} BornoSoft. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
