import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f3f3ff",
          100: "#e8e9ff",
          200: "#c9ccff",
          300: "#a5a9ff",
          400: "#7b7dff",
          500: "#4b4ae6",
          600: "#3c39cf",
          700: "#2f2ea9",
          800: "#252484",
          900: "#1b1a5e"
        },
        accent: {
          gold: "#D4AF37",
          darkBlue: "#1a1f36"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
        accent: ["var(--font-space)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(14,165,233,0.2), 0 30px 80px -40px rgba(14,165,233,0.6)"
      }
    }
  },
  plugins: []
};

export default config;
