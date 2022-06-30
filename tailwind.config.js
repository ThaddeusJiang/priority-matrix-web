module.exports = {
  // we don't purge css since we use micro-frontends
  safelist: [
    {
      pattern: /./,
    },
  ],
  plugins: [require("daisyui")],
  daisyui: {
    // TODO: keep same as your styleguide
    themes: ["light"],
  },
};
