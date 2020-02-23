// .eslintrc.js
module.exports = {
  extends: ['airbnb', 'eslint:recommended', 'plugin:prettier/recommended'],
  env: {
    browser: true,
    node: true
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }]
  }
};
