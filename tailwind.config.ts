import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#000000",
          50: "#B8B8B8",
          100: "#ADADAD",
          200: "#999999",
          300: "#858585",
          400: "#707070",
          500: "#5C5C5C",
          600: "#474747",
          700: "#333333",
          800: "#1F1F1F",
          900: "#0A0A0A",
          950: "#000000",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
