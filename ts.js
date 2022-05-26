const path = require('path')

module.exports = {
  extends: [
    require.resolve('./shared/base'),
    require.resolve('eslint-config-standard-with-typescript'),
    'prettier/@typescript-eslint',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser'),
    project: path.resolve(process.cwd(), './tsconfig.json'),
  },
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        // The core 'no-unused-vars' rules (in the eslint:recommeded ruleset)
        // does not work with type definitions
        'no-unused-vars': 'off',
      },
    },
  ],
};
