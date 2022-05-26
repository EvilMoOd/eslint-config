var path = require('path');
module.exports = {
  extends: [
    require.resolve('./shared/base'),
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/react',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: {
    ecmaVersion: 2021, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: path.resolve(process.cwd(), './tsconfig.json'),
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-useless-escape': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-empty-function': 'off',
    // "@typescript-eslint/camelcase": "never"
  },
  overrides: [
    {
      files: ['*.tsx', '*.ts'],
      rules: {
        'react/prop-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/camelcase': ['off'],
        '@typescript-eslint/no-empty-interface': [
          'error',
          {
            allowSingleExtends: true,
          },
        ],
        'prettier/prettier': [
          'error',
          {
            endOfLine: 'auto',
          },
        ],
        'no-console': 'off',
      },
    },
  ],
};
