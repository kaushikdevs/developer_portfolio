/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        primary: "#0f4ef0",
        shadow_color: "#d0d8ff",
      },
      fontFamily: {
        rubik_bold: ["Rubik-Bold"],
        rubik_black: ["Rubik-Black"],
        rubik_medium: ["Rubik-Medium"],
        rubik_regular: ["Rubik-Regular"],
        rubik_light: ["Rubik-Light"],
      },
    },
  },
  plugins: [],
});
