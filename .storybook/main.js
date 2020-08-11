module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['vue-style-loader', 'style-loader', 'css-loader', {
        loader: 'sass-loader',
          options: {
            data: '@import "./scss/_index.scss";',
          }
      }],
    });

    return config;
  },
};