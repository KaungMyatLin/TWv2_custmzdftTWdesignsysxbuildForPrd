module.exports = {
  purge: {    // tailwind looks for value of nodeEnv set to prd, and vite build set nodeEnv to prd. 
// if it wasn't the case or if using some other tools, set any tool build env to prd by "NODE_ENV=production tool build".
    content: ["./src/**/*.jsx", "./index.htmls"],
    // enabled: true,
    options: {
      // pass directly to purgecss options.
      // https://purgecss.com/configuration.html#options
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0fa9e6",
          "light": "#3fbaeb",
          "dark": "#0c87b8",
        },
        // brand: "#0fa9e6",
        // "brand-light": "#3fbaeb",
        // "brand-dark": "#0c87b8"
      },
      fontFamily: {
        headline: "Poppins, sans-serif"
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
  // variantOrder: [],
  // plugins: []
};
