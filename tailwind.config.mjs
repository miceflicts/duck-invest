/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // --- INÍCIO DA ALTERAÇÃO ---
      minHeight: {
        dvh: "100dvh",
      },
      // --- FIM DA ALTERAÇÃO ---
      screens: {
        "3xl": "1600px",
        1450: "1450px",
      },
      fontFamily: {
        manrope: ["var(--font-manrope)"],
        poppins: ["var(--font-poppins)"],
        inter: ["var(--font-inter)"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      spacing: {
        safe: "env(safe-area-inset-bottom)",
      },
      padding: {
        safe: "env(safe-area-inset-bottom)",
      },
      margin: {
        safe: "env(safe-area-inset-bottom)",
      },
      // --- ATUALIZAÇÃO: Cores configuradas para aceitar opacidade ---
      colors: {
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
          border: "hsl(var(--primary-border) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
          border: "hsl(var(--accent-border) / <alpha-value>)",
        },
        cta: "hsl(var(--cta))",
        "cta-foreground": "hsl(var(--cta-foreground))",
        accentSecondary: "hsl(var(--accent-secondary) / <alpha-value>)",
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        textPrimary: "hsl(var(--text-primary) / <alpha-value>)",
        textLight: "hsl(var(--text-light) / <alpha-value>)",
        textForeground: "hsl(var(--text-foreground) / <alpha-value>)",
        borderAccent: "hsl(var(--border-accent) / <alpha-value>)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "spin-faster": "spin 6s linear infinite",
        shine: "shine 5s linear infinite",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      transitionTimingFunction: {
        "minor-spring": "cubic-bezier(0.18,0.89,0.82,1.04)",
      },
      keyframes: {
        "reveal-up": {
          "0%": { opacity: "0", transform: "translateY(80%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "reveal-down": {
          "0%": { opacity: "0", transform: "translateY(-80%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "content-blur": {
          "0%": { filter: "blur(0.3rem)" },
          "100%": { filter: "blur(0)" },
        },
        shine: {
          "0%": { "background-position": "100%" },
          "100%": { "background-position": "-100%" },
        },
        "gradient-pan": {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
        float: {
          "0%": { transform: "translatey(0px)" },
          "50%": { transform: "translatey(-10px)" },
          "100%": { transform: "translatey(0px)" },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
