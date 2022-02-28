module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        vrbg: "url('src/assets/vrbg.png')",
      },
    },
  },
  // corePlugins: {
  // 	preflight: false,
  // },
  plugins: [],
};
