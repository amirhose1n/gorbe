const { DESKTOP_WIDTH } = require("./config");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#1F3753",
          200: "#233a5a",
        },
        light: {},
      },
      fontFamily: {
        helvetica: "HelveticaW01-Roman",
      },
      maxWidth: {
        layout: "1200px",
      },
      screens: {
        desktop: `${DESKTOP_WIDTH}px`,
      },
    },
  },
  plugins: [],
};
