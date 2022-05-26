module.exports = {
  extends: [
    require.resolve('./shared/base'),
    require.resolve('eslint-config-standard'),
    'plugin:prettier/recommended',
    require.resolve('eslint-config-prettier/standard')
  ]
}
