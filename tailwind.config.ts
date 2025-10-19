import { type Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors if needed
        primary: {
          light: "#6366F1",
          DEFAULT: "#4F46E5",
          dark: "#4338CA",
        },
        secondary: {
          light: "#F472B6",
          DEFAULT: "#EC4899",
          dark: "#DB2777",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

export default config;
