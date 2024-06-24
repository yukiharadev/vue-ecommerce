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
        'custom': '6rem -8rem',
        'custom-2': '3rem -25rem',
        'custom-3': '0rem -15rem',  
      },
    },
  },
  darkMode: "class",
  plugins: [require("flowbite/plugin")],
};
