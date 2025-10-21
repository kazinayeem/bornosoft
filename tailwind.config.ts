import { type Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],

  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0066FF',      // Electric Blue
          secondary: '#6C5CE7',    // Modern Purple
          accent: '#00D9A6',       // Teal Green
          warning: '#FFAA00',      // Amber
          dark: '#0A1628',         // Deep Navy
          light: '#F7F9FC',        // Off-white
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0066FF 0%, #6C5CE7 100%)',
        'gradient-success': 'linear-gradient(135deg, #00D9A6 0%, #00B87C 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0A1628 0%, #1A2642 100%)',
        'gradient-hero': 'linear-gradient(135deg, #0066FF15 0%, #6C5CE715 100%)',
      },
      boxShadow: {
        'glow-blue': '0 0 40px rgba(0, 102, 255, 0.3)',
        'glow-purple': '0 0 40px rgba(108, 92, 231, 0.3)',
        'glow-teal': '0 0 40px rgba(0, 217, 166, 0.3)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 102, 255, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(108, 92, 231, 0.5)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
