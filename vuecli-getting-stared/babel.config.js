module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    "@vue/babel-plugin-jsx",
    [
      "import",
      {
        libraryName: "@fect-ui/vue",
        libraryDirectory: "lib",
        style: (name) => `${name}/style/index`,
      },
    ],
  ],
};
