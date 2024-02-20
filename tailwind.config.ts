import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        DanaBold: "DanaBold",
        DanaMedium: "DanaMedium",
        DanaRegular: "DanaRegular",
      },
      colors: {
        "amber": {
          400: "#FFC453",
        },
        "green": {
          500: "#34A862",
        },
        "zinc": {
          200: "#E0E0E0",
          DEFAULT: "#C2C2C2",
          500: "#B4B4B4",
          700 :"#757575",
        },
        "red": {
          600: "#E61F10",
        },
        "overlay": {
          DEFAULT: "#0000007D",
        },
      },
      padding: {
        "14px": "14px",
      },
      boxShadow: {
        sm: "0px 3px 15px 3px #2222221A",
      },
      backdropBlur: {
        xs: '1px',
      }
    },
  },
  plugins: [],
};
export default config;
