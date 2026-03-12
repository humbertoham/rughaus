import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rug: {
          red: "#ba1200",
          dark: "#07020d",
          light: "#e8e9f3",
        },
      },
      fontFamily: {
        montreal: ["NeueMontreal", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;