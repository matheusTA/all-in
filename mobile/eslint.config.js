// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = defineConfig([
  expoConfig,
  eslintPluginPrettierRecommended,
  {
    ignores: ['dist/*'],
    rules: {
      indent: ['error', 2],
      quotes: ['error', 'single'],
      'prettier/prettier': ['error', { tabWidth: 2, singleQuote: true }],
    },
  },
]);
