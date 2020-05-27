module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    extend: {
      height: {
        'screen-49': "49vh",
        'screen-50': "50vh",
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
  },
  plugins: [],
};
