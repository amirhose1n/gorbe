module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': ' 9px 9px 18px #bebebe , -9px -9px 18px #ffffff',
      }
    },
 screens: {
  '2xl': {'max': '1535px'},
  // => @media (max-width: 1535px) { ... }

  'xl': {'max': '1279px'},
  // => @media (max-width: 1279px) { ... }

  'lg': {'max': '1023px'},
  // => @media (max-width: 1023px) { ... }

  'md': {'max': '767px'},
  // => @media (max-width: 767px) { ... }

  'sm': {'max': '450px'},
  // => @media (max-width: 639px) { ... }
  
  'xsm':{'max':'400'},
  // => @media (max-width: 400px) { ... }
  
  '2xsm': {'max': '350px'},
  // => @media (max-width: 350px) { ... }
},
  },
  plugins: [],
}