const path = require("path");

module.exports = {
  extends: [
    './shared/base',
    'eslint:recommended',
    'eslint-config-standard-with-typescript',
    'plugin:vue/base',
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: path.resolve(process.cwd(), './tsconfig.json'),
    extraFileExtensions: ['.vue'],
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'vue/no-v-html': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.vue'],
      rules: {
        // The core 'no-unused-vars' rules (in the eslint:recommeded ruleset)
        // does not work with type definitions
        'no-unused-vars': 'off',
      },
    },
  ],
  // 添加vue和@typescript-eslint插件，增强eslint的能力
  plugins: ['vue', '@typescript-eslint'],
  ignorePatterns: ['types/env.d.ts', 'node_modules/**', '**/dist/**'],
};
