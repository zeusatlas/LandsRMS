module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            fonts: "./src/fonts",
            components: "./src/components",
            screens: "./src/screens",
            utils: "./src/utils",
            styles: "./src/styles",
            helpers: "./src/helper",
            models: "./src/models",
            assets: "./assets"
          },
        },
      ],
      "react-native-reanimated/plugin",
      "react-native-paper/babel",
    ],
    env: {
      production: {
        plugins: [
          "react-native-paper/babel",
          "react-native-reanimated/plugin",
        ],
      },
    },
  };
};
