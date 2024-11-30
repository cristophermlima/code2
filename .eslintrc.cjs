const globals = require('globals');

module.exports = {
  root: true, 
  ignorePatterns: ['dist'], 
  env: {
    browser: true, 
    es2020: true, 
  },
  extends: [
    'eslint:recommended', 
    'plugin:react-hooks/recommended', 
    'plugin:@typescript-eslint/recommended', 
    'eslint-config-prettier'
  ],
  parser: '@typescript-eslint/parser', 
  plugins: [
    'react-hooks', 
    '@typescript-eslint', 
  ],
  rules: {
    'react-hooks/exhaustive-deps': 'warn', 
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], 
  },
  globals: globals.browser, 
};
