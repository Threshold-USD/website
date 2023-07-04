module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true, // Add this line
  },
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect', // Automatically detect the version of React to use
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off', // You can safely turn this rule off if you are using Next.js
    'jsx-a11y/anchor-is-valid': 'off', // This rule doesn't play nicely with Next.js's <Link />
    'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Include this if you want to use your Prettier config in ESLint
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
};
