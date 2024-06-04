/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        title: "#06223F", // set text title color
      },
    },
  },
  plugins: [require("daisyui")],
};
