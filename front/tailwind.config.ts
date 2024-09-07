import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");

const config: Config = {
  darkMode: "class",
  plugins: [flowbite],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        violet: "#682bd6",
        darkviolet: "#481f93",
        darkBackground: "#0e0e11", // fondo oscuro
        darkText: "#e2e8f0", // text claro para el modo oscuro
        lightBackground: "#f7fafc", // fondo claro
        lightText: "#0e0e11", // texto oscuro para el modo claro
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
};

export default config;
