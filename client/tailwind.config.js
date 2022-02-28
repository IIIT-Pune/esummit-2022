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
        eventsbg: "url('src/assets/events-bg.png')",
      },
      colors: {
        footer: "#2c2c2c",
      },
    },
  },
  // corePlugins: {
  // 	preflight: false,
  // },
  plugins: [],
};
