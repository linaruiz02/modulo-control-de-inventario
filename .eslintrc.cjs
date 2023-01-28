// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    'no-underscore-dangle': 'off',
    'react/no-multi-comp': ['error'],
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
  },
};
