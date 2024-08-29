module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'import'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    curly: 'error',
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        alphabetize: {
          order: 'asc',
        },
        'newlines-between': 'always',
      },
    ],
    'import/prefer-default-export': 'off',
    'jsx-a11y/alt-text': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-console': 'off',
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-underscore-dangle': 'off',
    'prefer-destructuring': ['error', { array: false }],
    'react/button-has-type': 'off',
    'react/function-component-definition': [
      'warn',
      { namedComponents: 'arrow-function' },
    ],
    'react/jsx-props-no-spreading': [
      'warn',
      {
        html: 'ignore',
        exceptions: [
          'Component',
          'Input',
          'InputCheckbox',
          'InputPassword',
          'Select',
          'TextArea',
        ],
      },
    ],
    'react/no-array-index-key': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    '@next/next/no-img-element': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        varsIgnorePattern: '^_',
        args: 'none',
        ignoreRestSiblings: true,
      },
    ],
  },
  globals: {
    chrome: 'readonly',
  },
  ignorePatterns: ['watch.js', 'dist/**', '*.cjs'],
};
