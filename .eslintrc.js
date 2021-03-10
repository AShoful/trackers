module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:prettier/react',
    'plugin:prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  rules: {
    'react/display-name': 0,
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
  },
  globals: {
    React: 'writable',
  },
};
