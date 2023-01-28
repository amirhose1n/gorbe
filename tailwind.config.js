const { DESKTOP_WIDTH } = require("./config");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          50: "#dbdbdb",
          100: "#1F3753",
          200: "#233a5a",
          300: "#FF6600",
          400:"#182d49",
          500:'#9ca9bb'
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
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
