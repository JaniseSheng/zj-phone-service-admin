// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    'no-unused-vars': 1,
    'no-multiple-empty-lines': 1,
    'padded-blocks': 0,
    'indent': 0,
    'no-new': 0,
    'comma-spacing': 0,
    'arrow-spacing': 0,
    'arrow-parens': 0,
    'semi': 0,
    'no-multi-str': 0,
    'no-undef': 0,
    'space-before-blocks': 0,
    'generator-star-spacing': 0,
    'space-before-function-paren': 0,
    'no-throw-literal':0,
    'no-unreachable':0,
    'camelcase': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
