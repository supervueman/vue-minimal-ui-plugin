const path = require('path');

module.exports = {
  stories: ['../../stories/**/*.stories.(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  webpackFinal: async (config) => {
    const rules = [{
      test: /\.s(c|a)ss$/,
      include: path.resolve(__dirname, '../'),
      use: ['style-loader', 'css-loader', 'sass-loader'],
    }];

    rules.forEach(el => {
      config.module.rules.push(el);
    });

    return config;
  }
};
