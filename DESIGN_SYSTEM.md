# 🎨 BornoSoft Design System Quick Reference

## Brand Colors

```css
/* Primary Colors */
--brand-primary: #0066FF      /* Electric Blue */
--brand-secondary: #6C5CE7    /* Modern Purple */
--brand-accent: #00D9A6       /* Teal Green */
--brand-warning: #FFAA00      /* Amber */
--brand-dark: #0A1628         /* Deep Navy */
--brand-light: #F7F9FC        /* Off-white */
```

## Gradients

Use these Tailwind classes:
- `bg-gradient-primary` - Blue to Purple
- `bg-gradient-success` - Teal to Green
- `bg-gradient-dark` - Navy to Dark Blue
- `bg-gradient-hero` - Light gradient overlay

## Typography Scale

```
H1: text-7xl font-black (72px)
H2: text-5xl font-black (48px)
H3: text-4xl font-bold (36px)
H4: text-2xl font-bold (24px)
Body: text-lg (18px)
Small: text-base (16px)
```

## Spacing

- Section padding: `py-24` (96px)
- Card padding: `p-8` (32px)
- Element gap: `gap-8` (32px)
- Border radius: `rounded-3xl` (24px)
- Button radius: `rounded-xl` (12px)

## Hover Effects

```tsx
// Scale up
className="hover:scale-105 transition-transform duration-300"

// Glow effect
className="hover:shadow-glow-blue transition-all duration-300"

// Both
className="hover:scale-105 hover:shadow-glow-blue transition-all duration-300"
```

## Common Button Styles

```tsx
// Primary CTA
<button className="px-10 py-4 rounded-xl text-white font-bold bg-gradient-primary hover:shadow-glow-blue shadow-2xl transition-all duration-300 transform hover:scale-105">
  Get Started →
</button>

// Secondary CTA
<button className="px-10 py-4 rounded-xl text-brand-primary dark:text-brand-accent bg-white dark:bg-gray-800 border-2 border-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300">
  Learn More
</button>
```

## Section Header Template

```tsx
<motion.div
  className="text-center mb-16"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <h2 className="text-base font-bold text-brand-primary dark:text-brand-accent tracking-wide uppercase mb-3">
    🎯 Section Label
  </h2>
  <p className="mt-2 text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
    Main Heading with{" "}
    <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
      Gradient Text
    </span>
  </p>
  <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
    Supporting description text
  </p>
</motion.div>
```

## Card Template

```tsx
<motion.div
  className="p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  whileHover={{ scale: 1.05, y: -5 }}
  viewport={{ once: true }}
>
  {/* Card content */}
</motion.div>
```

## Icon with Gradient Border

```tsx
<div className="relative w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 p-0.5">
  <div className="w-full h-full bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center">
    <Icon className="w-8 h-8 text-brand-primary" />
  </div>
</div>
```

## Trust Badge

```tsx
<span className="px-5 py-2 text-sm font-semibold text-brand-primary dark:text-brand-accent bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 border border-brand-primary/20 rounded-full shadow-lg">
  🚀 Trusted by 50+ Businesses
</span>
```

## Quick Color Reference

| Use Case | Light Mode | Dark Mode |
|----------|-----------|-----------|
| Primary CTA | `bg-gradient-primary text-white` | Same |
| Text Accent | `text-brand-primary` | `text-brand-accent` |
| Border | `border-gray-200` | `border-gray-700` |
| Background | `bg-white` | `bg-gray-800` |
| Hover BG | `hover:bg-gray-50` | `hover:bg-gray-700` |

## Emojis for Sections

- Solutions: 🎯
- Projects: 💼
- Testimonials: ⭐
- Pricing: 💰
- FAQ: ❓
- Stats: 📊
- Contact: 📞
- Success: ✅
- Rocket/Launch: 🚀

## Animation Presets

```tsx
// Fade in from bottom
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
viewport={{ once: true }}

// Stagger children
initial="hidden"
whileInView="show"
variants={{
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}}

// Hover scale
whileHover={{ scale: 1.05 }}
transition={{ duration: 0.3 }}
```

---

## 🎨 **How to Maintain Brand Consistency**

1. **Always use brand colors** - Never use generic Tailwind colors
2. **Use gradients for CTAs** - Makes them stand out
3. **Include emojis in headers** - Adds personality
4. **Keep animations subtle** - 0.3-0.6s duration
5. **Use consistent spacing** - py-24 for sections, p-8 for cards
6. **Add hover effects** - Every interactive element should respond
7. **Test dark mode** - Every new component

---

This design system ensures consistency across all current and future components!
