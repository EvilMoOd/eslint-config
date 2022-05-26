module.exports = {
  extends: [
    'plugin:vue/recommended',
    require.resolve('./shared/base'),
    require.resolve('eslint-config-standard'),
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  rules: {
    'vue/no-v-html': 'off'
  }
}
