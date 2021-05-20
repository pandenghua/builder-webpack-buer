module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb-base',
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'linebreak-style': ['off', 'windows'],
    'no-console': 'off',
    'func-names': 'off',
  },
};
