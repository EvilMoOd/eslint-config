module.exports = {
  extends: [
    './shared/base',
    'eslint:recommended',
    'eslint-config-standard',
    'plugin:vue/base',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    sourceType: 'module',
  },
  rules: {
    'vue/no-v-html': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
  },
};
