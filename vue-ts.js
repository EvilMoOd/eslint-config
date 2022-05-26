const path = require('path')

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/base',
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended',
    require.resolve('./shared/base'),
    require.resolve('eslint-config-standard-with-typescript'),
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser'),
    project: path.resolve(process.cwd(), './tsconfig.json'),
    extraFileExtensions: ['.vue'],
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'vue/no-v-html': 'off',
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
};
