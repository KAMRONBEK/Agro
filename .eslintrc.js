const ON = 2;
const OFF = 0;

module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:prettier/recommended', 'plugin:@typescript-eslint/eslint-recommended'],
  rules: {
    'react/destructuring-assignment': [ON],
    'react/jsx-no-bind': [ON],
    'react-native/no-inline-styles': ON,
    'react-native/no-color-literals': ON,
    '@typescript-eslint/no-unused-vars': OFF,
    'comma-dangle': OFF,
    'no-trailing-spaces': OFF,
    'quotes': [2, 'single', 'avoid-escape']
  }
};