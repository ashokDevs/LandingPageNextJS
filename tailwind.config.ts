// tailwind.config.js
import type { Config } from "tailwindcss";

const config: Config = {
  daisyui: {
    themes: ["light", "dark", "cupcake", "forest", "winter"],
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "50%": "50%",
      "16": "4rem",
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-bg-patterns")],
};

export default config;
