import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "1.25rem",
          lg: "1.5rem",
        },
      },
      screens: {
        sm: "640px",
        md: "1024px",
        lg: "1280px",
      },
      colors: {
        jade: {
          400: "#D6F1E3",
          500: "#C3E9D7",
          700: "#8BCEB6",
          900: "#26997B",
          950: "#208368",
        },
      },
      boxShadow: {
        focus: "0 0 0 2px",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".flex-center": {
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
        },
      });
    }),
  ],
};
export default config;
