"use client";

import { Zap, Mail } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for actual subscription logic
    console.log("Newsletter Signup:", email);
    setMessage(
      "✅ Thank you for subscribing! You'll receive updates from BornoSoft soon."
    );
    setEmail("");
    setTimeout(() => setMessage(""), 5000);
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-950/90 backdrop-blur-md text-gray-800 dark:text-gray-200 mt-12 border-t border-gray-300 dark:border-blue-500/20 transition-colors duration-300">
      {/* Footer Content */}
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-gray-300 dark:border-gray-800 pb-8">
        {/* Logo/Description */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-2xl font-extrabold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent tracking-tight">
            <Zap className="w-6 h-6 text-brand-primary" />
            <span>BornoSoft</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Transform ideas into intelligent digital solutions. Expert AI-powered web development in Bangladesh.
          </p>
          <div className="flex items-center gap-2 text-sm">
            <span className="px-3 py-1 bg-brand-primary/10 text-brand-accent rounded-full font-semibold">
              ⭐ 50+ Happy Clients
            </span>
          </div>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
          <ul className="space-y-3">
            {[
              "#solutions",
              "#pricing",
              "#process",
              "#tech",
              "#team",
              "#contact",
            ].map((href, index) => (
              <li key={index}>
                <a
                  href={href}
                  className="text-gray-600 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-primary transition duration-150 text-sm"
                >
                  {
                    [
                      "Solutions",
                      "Pricing",
                      "Process",
                      "Stack",
                      "Our Team",
                      "Contact",
                    ][index]
                  }
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact</h3>
          <div className="space-y-3">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              <strong className="text-brand-primary dark:text-brand-accent">Email:</strong><br />
              info@bornosoft.com
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              <strong className="text-brand-primary dark:text-brand-accent">Location:</strong><br />
              Dhaka, Bangladesh
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              <strong className="text-brand-primary dark:text-brand-accent">Response:</strong><br />
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

          {/* Social Icons */}
          <div className="mt-6 pt-4 border-t border-gray-300 dark:border-gray-700/50">
            <p className="text-sm text-gray-900 dark:text-white mb-3 font-bold">Connect With Us</p>
            <div className="flex flex-wrap gap-3">
              {/* LinkedIn Icon */}
              <a
                href="#"
                className="text-gray-400 hover:text-[#0077b5] transition-all transform hover:scale-110 duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.568-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.767 7 2.404v6.831z" />
                </svg>
              </a>
              
              {/* Facebook Icon */}
              <a
                href="#"
                className="text-gray-400 hover:text-[#1877f2] transition-all transform hover:scale-110 duration-300"
                aria-label="Facebook"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              {/* Twitter/X Icon */}
              <a
                href="#"
                className="text-gray-400 hover:text-[#1da1f2] transition-all transform hover:scale-110 duration-300"
                aria-label="Twitter"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              
              {/* YouTube Icon */}
              <a
                href="#"
                className="text-gray-400 hover:text-[#ff0000] transition-all transform hover:scale-110 duration-300"
                aria-label="YouTube"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              
              {/* Instagram Icon */}
              <a
                href="#"
                className="text-gray-400 hover:text-[#e4405f] transition-all transform hover:scale-110 duration-300"
                aria-label="Instagram"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              
              {/* GitHub Icon */}
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-all transform hover:scale-110 duration-300"
                aria-label="GitHub"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              
              {/* WhatsApp Icon */}
              <a
                href="#"
                className="text-gray-400 hover:text-[#25d366] transition-all transform hover:scale-110 duration-300"
                aria-label="WhatsApp"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>
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
