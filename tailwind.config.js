module.exports = {
  // we don't purge css since we use micro-frontends
  safelist: [
    {
      pattern: /./,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    // TODO: keep same as your styleguide
    themes: ["light"],
  },
};
