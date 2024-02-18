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
      colors:{
        'custm-yellow': {
          DEFAULT: '#FFC453',
        },
        'custm-green': {
          DEFAULT: '#34A862',
        },
        'custm-gray': {
          100: '#E0E0E0',
          DEFAULT: '#C2C2C2',
        },
        'custm-red': {
          DEFAULT: '#E61F10',
        },
      }
    },
  },
  plugins: [],
};
export default config;
