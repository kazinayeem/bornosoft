/**
 * ============================================
 * BORNOSOFT CUSTOM THEME CONFIGURATION
 * ============================================
 * 
 * This file contains the complete theme configuration
 * for the BornoSoft website. You can easily customize
 * colors, fonts, spacing, and animations here.
 * 
 * @author BornoSoft Team
 * @version 1.0.0
 */

export const themeConfig = {
  // ============================================
  // BRAND IDENTITY
  // ============================================
  brand: {
    name: "BornoSoft",
    tagline: "Transform Ideas Into Intelligent Digital Solutions",
    description: "AI-powered web development and digital solutions",
  },

  // ============================================
  // COLOR PALETTE
  // ============================================
  colors: {
    light: {
      // Primary brand colors
      primary: "#0066FF",        // Electric Blue - Main brand color
      secondary: "#6C5CE7",      // Modern Purple - Secondary brand color
      accent: "#00D9A6",         // Teal Green - Accent/success color
      warning: "#FFAA00",        // Amber - Warning/highlight color
      
      // Neutral colors
      background: "#FFFFFF",     // Pure white background
      foreground: "#0A1628",     // Deep navy text
      muted: "#F1F5F9",         // Light gray for muted elements
      border: "#E2E8F0",        // Border color
      
      // Semantic colors
      success: "#00D9A6",
      error: "#EF4444",
      info: "#0066FF",
    },
    
    dark: {
      // Primary brand colors (adjusted for dark mode)
      primary: "#3B82F6",        // Lighter blue for better contrast
      secondary: "#8B7AE7",      // Lighter purple for dark backgrounds
      accent: "#34EAB9",         // Brighter teal for visibility
      warning: "#FFC94D",        // Lighter amber
      
      // Neutral colors
      background: "#0A0F1E",     // Deep dark blue background
      foreground: "#F8FAFC",     // Off-white text
      muted: "#1E293B",         // Dark gray for muted elements
      border: "#1E293B",        // Border color
      
      // Semantic colors
      success: "#34EAB9",
      error: "#F87171",
      info: "#3B82F6",
    },
  },

  // ============================================
  // TYPOGRAPHY
  // ============================================
  typography: {
    fonts: {
      sans: "Inter, system-ui, -apple-system, sans-serif",
      mono: "JetBrains Mono, Menlo, Monaco, monospace",
      display: "Cal Sans, Inter, sans-serif",
    },
    
    sizes: {
      xs: "0.75rem",      // 12px
      sm: "0.875rem",     // 14px
      base: "1rem",       // 16px
      lg: "1.125rem",     // 18px
      xl: "1.25rem",      // 20px
      "2xl": "1.5rem",    // 24px
      "3xl": "1.875rem",  // 30px
      "4xl": "2.25rem",   // 36px
      "5xl": "3rem",      // 48px
      "6xl": "3.75rem",   // 60px
      "7xl": "4.5rem",    // 72px
    },
    
    weights: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
  },

  // ============================================
  // SPACING & LAYOUT
  // ============================================
  spacing: {
    section: {
      sm: "3rem",         // 48px
      md: "5rem",         // 80px
      lg: "6rem",         // 96px
      xl: "8rem",         // 128px
    },
    
    container: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },

  // ============================================
  // BORDER RADIUS
  // ============================================
  radius: {
    none: "0",
    sm: "0.5rem",       // 8px
    md: "0.75rem",      // 12px
    lg: "1rem",         // 16px
    xl: "1.5rem",       // 24px
    "2xl": "2rem",      // 32px
    "3xl": "3rem",      // 48px
    full: "9999px",
  },

  // ============================================
  // SHADOWS
  // ============================================
  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
    "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    
    // Glow effects
    glow: {
      blue: "0 0 40px rgba(0, 102, 255, 0.4)",
      purple: "0 0 40px rgba(108, 92, 231, 0.4)",
      teal: "0 0 40px rgba(0, 217, 166, 0.4)",
    },
  },

  // ============================================
  // ANIMATIONS
  // ============================================
  animations: {
    durations: {
      fast: "150ms",
      normal: "300ms",
      slow: "500ms",
      slower: "1000ms",
    },
    
    easings: {
      linear: "linear",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      easeOut: "cubic-bezier(0, 0, 0.2, 1)",
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    },
  },

  // ============================================
  // GRADIENTS
  // ============================================
  gradients: {
    primary: "linear-gradient(135deg, #0066FF 0%, #6C5CE7 100%)",
    success: "linear-gradient(135deg, #00D9A6 0%, #00B87C 100%)",
    dark: "linear-gradient(135deg, #0A1628 0%, #1A2642 100%)",
    hero: "linear-gradient(135deg, rgba(0, 102, 255, 0.1) 0%, rgba(108, 92, 231, 0.1) 100%)",
    
    // Multi-color gradients
    rainbow: "linear-gradient(90deg, #0066FF, #6C5CE7, #00D9A6, #FFAA00)",
    sunset: "linear-gradient(135deg, #FF6B6B, #FFA500, #FFD93D)",
  },

  // ============================================
  // BREAKPOINTS
  // ============================================
  breakpoints: {
    xs: "0px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },

  // ============================================
  // COMPONENT STYLES
  // ============================================
  components: {
    button: {
      primary: {
        bg: "bg-gradient-primary",
        text: "text-white",
        hover: "hover:shadow-glow-blue",
        padding: "px-8 py-4",
        rounded: "rounded-xl",
      },
      
      secondary: {
        bg: "bg-white dark:bg-gray-800",
        text: "text-brand-primary dark:text-brand-accent",
        border: "border-2 border-brand-primary",
        hover: "hover:bg-brand-primary hover:text-white",
        padding: "px-8 py-4",
        rounded: "rounded-xl",
      },
      
      ghost: {
        bg: "bg-transparent",
        text: "text-gray-600 dark:text-gray-300",
        hover: "hover:bg-gray-100 dark:hover:bg-gray-800",
        padding: "px-6 py-3",
        rounded: "rounded-lg",
      },
    },
    
    card: {
      default: {
        bg: "bg-white dark:bg-gray-800",
        border: "border border-gray-100 dark:border-gray-700",
        shadow: "shadow-xl",
        rounded: "rounded-3xl",
        padding: "p-8",
      },
      
      glass: {
        bg: "glass",
        shadow: "shadow-2xl",
        rounded: "rounded-3xl",
        padding: "p-8",
      },
    },
    
    input: {
      default: {
        bg: "bg-white dark:bg-gray-800",
        border: "border border-gray-300 dark:border-gray-600",
        focus: "focus:ring-2 focus:ring-brand-primary focus:border-transparent",
        rounded: "rounded-xl",
        padding: "px-4 py-3",
      },
    },
  },
};

// ============================================
// THEME UTILITIES
// ============================================

/**
 * Get color by path (e.g., "colors.light.primary")
 */
export function getThemeColor(path: string, mode: 'light' | 'dark' = 'light'): string {
  const keys = path.split('.');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let value: any = mode === 'dark' ? themeConfig.colors.dark : themeConfig;
  
  for (const key of keys) {
    value = value[key];
  }
  
  return value as string;
}

/**
 * Get CSS variable for a color
 */
export function getCSSVar(name: string) {
  return `var(--${name})`;
}

/**
 * Generate gradient CSS
 */
export function getGradient(type: keyof typeof themeConfig.gradients) {
  return themeConfig.gradients[type];
}

export default themeConfig;
