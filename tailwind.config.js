/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.html",
    "./src/**/*.{vue, js, ts, jsx, tsx}",
    "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "integral-cf": ["Integral CF"],
      },
      backgroundPosition: {
        "poss-6": "6rem",
      },
    },
  },
  darkMode: "class",
  plugins: [require("flowbite/plugin")],
};
