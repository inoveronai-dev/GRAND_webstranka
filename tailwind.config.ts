import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        grand: {
          orange: "#f08122",
          "orange-hover": "#d96f1a",
          gray: "#998d87",
          "gray-light": "#f5f3f2",
          "gray-dark": "#5c534e",
          cream: "#f9f9f6",
          charcoal: "#111111",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
