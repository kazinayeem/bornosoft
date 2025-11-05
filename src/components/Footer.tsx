import { Zap, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("✅ Thank you for subscribing!");
    setEmail("");
    setTimeout(() => setMessage(""), 4000);
  };

  return (
    <footer className="relative bg-gray-50 dark:bg-gray-950/90 backdrop-blur-md text-gray-800 dark:text-gray-200 border-t border-gray-200 dark:border-blue-500/10 transition-colors duration-300">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/10 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto py-16 px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-300/50 dark:border-gray-800/70 pb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-2xl font-extrabold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent tracking-tight">
              <Zap className="w-6 h-6 text-brand-primary" />
              <span>BornoSoft-NR</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              We transform your ideas into intelligent digital solutions. Expert
              in AI-powered web and cloud development.
            </p>
            <div className="flex items-center gap-2 text-sm font-medium text-brand-primary dark:text-brand-accent">
              ⭐ 20+ Happy Clients
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { to: "/about", label: "About Us" },
                { to: "/refund-policy", label: "Refund Policy" },
                { to: "/terms", label: "Terms & Conditions" },
                { to: "/privacy-policy", label: "Privacy Policy" },
                { to: "/our-methodlogy", label: "Methodology" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-gray-600 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-accent transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <span className="font-semibold text-brand-primary dark:text-brand-accent">
                  Email:
                </span>
                <br />
                info@bornosoft.com
              </li>
              <li>
                <span className="font-semibold text-brand-primary dark:text-brand-accent">
                  Location:
                </span>
                <br />
                Dhaka, Bangladesh
              </li>
              <li>
                <span className="font-semibold text-brand-primary dark:text-brand-accent">
                  Response:
                </span>
                <br />
                Within 24 hours
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Stay Ahead of the{" "}
              <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                Curve
              </span>
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-5">
              Subscribe for the latest updates on AI, web trends, and smart
              solutions.
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
                className="w-full px-4 py-2 text-sm font-bold rounded-lg text-white bg-gradient-to-r from-brand-primary to-brand-secondary hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                Subscribe
              </button>
            </form>

            {message && (
              <p className="mt-3 text-xs font-semibold text-green-500 dark:text-green-400">
                {message}
              </p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left text-sm text-gray-600 dark:text-gray-400">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-semibold text-brand-primary dark:text-brand-accent">
              BornoSoft-NR
            </span>
            . All rights reserved.
          </p>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">
            Crafted with 💙 using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
