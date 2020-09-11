module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'quotes': 'off',
    'comma-dangle': 'off',
    'no-multiple-empty-lines': 'off',
    'no-alert': 'off',
    'one-var': 'off',
    'no-mixed-operators': 'off',
    'max-len': 'off',
    'indent': 'off',
    'import/extensions': 'off',
    'no-bitwise': 'off',
    'vue/require-prop-type-constructor': 'off',
    'key-spacing': 'off',
    'operator-linebreak': 'off',
    'no-lonely-if': 'off',
    'function-paren-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    'prefer-destructuring': 'off',
    'no-shadow': 'off',
    'no-useless-escape': 'off',
    'prefer-arrow-callback': 'off',

  },
};
