import type { Config } from "tailwindcss";

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
    },
  },
  plugins: [],
};
export default config;
