import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#022C22",
        "green-dark": "#14532D",
        light: "#ECFDF5",
        "green-light": "#BBF7D0",
        "green-filter": "rgba(20,83,45,0.73)",
        "dark-filter": "rgba(2,44,34,0.8)",
      },
    },
  },
  plugins: [],
};
export default config;
