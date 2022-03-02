module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        vrbg: "url('https://i.ibb.co/dDhhJ5j/vrbg.png')",
        eventsbg: "url('https://i.ibb.co/tmhCm3B/events-bg.png')",
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
