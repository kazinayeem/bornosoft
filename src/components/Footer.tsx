"use client";

import { Zap } from "lucide-react";

export const Footer = () => (
  <footer className="bg-gray-900 dark:bg-gray-950 text-white dark:text-gray-200 mt-12 transition-colors duration-300">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 dark:border-gray-800 pb-8">
        {/* Logo/Description */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-2xl font-extrabold text-indigo-400 tracking-tight">
            <Zap className="w-6 h-6" />
            <span>Bornosoft</span>
          </div>
          <p className="text-gray-400 text-sm">
            Your single platform for web, AI, and digital transformation.
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
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
                  className="text-gray-400 hover:text-indigo-400 transition duration-150"
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
        {/* Contact Info (Mock) */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <p className="text-gray-400">Email: info@bornosoft.com</p>
          <p className="text-gray-400 mt-2">Phone: +1 (555) 123-4567</p>
        </div>
        {/* Social (Mock) */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
          <div className="flex space-x-4">
            {/* LinkedIn Icon */}
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-400 transition transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.568-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.767 7 2.404v6.831z" />
              </svg>
            </a>
            {/* Twitter Icon */}
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-400 transition transform hover:scale-110"
              aria-label="Twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.188-1.353-1.353-3.957-1.428-5.385-.296-.452.392-.813.882-1.049 1.41-.652-.164-1.295-.41-1.892-.746.402 1.357 1.34 2.493 2.624 3.298-.79-.026-1.543-.257-2.196-.605-.005.016-.005.033-.005.051 0 2.582 1.836 4.73 4.298 5.234-.447.12-1.341.171-1.701.064.67 2.112 2.627 3.64 4.978 3.684-1.92.5-3.882.805-6.052.805-.39 0-.773-.023-1.15-.067 2.228 1.433 4.796 2.27 7.502 2.27 9.006 0 13.916-7.493 13.916-13.917 0-.214-.006-.428-.014-.641.954-.695 1.789-1.564 2.453-2.553z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-gray-700 dark:border-gray-800 pt-8 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Bornosoft. All rights reserved.
      </div>
    </div>
  </footer>
);
