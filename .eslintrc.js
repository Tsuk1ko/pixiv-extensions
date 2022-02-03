module.exports = {
  env: {
    es2021: true,
    browser: true,
  },
  extends: ['standard', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  globals: {
    chrome: 'readonly',
  },
  rules: {},
};
