module.exports = {
  extends: [
    require.resolve('./shared/base'),
    require.resolve('eslint-config-standard'),
    'plugin:standard/recommended',
    'plugin:node/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
};
