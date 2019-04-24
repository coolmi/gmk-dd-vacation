module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'semi' : 0,
    'indent' : 0,
    'handle-callback-err' : 0,
    'space-before-function-paren' : 0,
    'key-spacing':["error", { "beforeColon": false }],
    'camelcase': 0,
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
