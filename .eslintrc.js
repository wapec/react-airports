module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  plugins: [
    'react',
    'jsx-a11y',
    'import',
    'prettier',
    '@typescript-eslint',
    'react-hooks',
  ],
  rules: {
    // Prettier
    'prettier/prettier': ['error'],

    // TypeScript
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/interface-name-prefix': [2, { prefixWithI: 'always' }],

    // React
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 0,
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.ts'] }],
    'react/display-name': 0,
    'react/no-array-index-key': 0,
    'react/prefer-stateless-function': [1],
    'react/no-string-refs': 2,
    'react/prop-types': 0,
    'react/jsx-no-bind': [
      2,
      {
        allowArrowFunctions: false,
      },
    ],

    // jsx-a11y
    'jsx-a11y/href-no-hash': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/mouse-events-have-key-events': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/no-autofocus': 0,
    'react/jsx-props-no-spreading': 0,
    'react/button-has-type': 0,

    // import
    'import/no-extraneous-dependencies': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/order': ['error'],

    // eslint
    'no-console': ["warn", { allow: ["warn", "error"] }],
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
      },
    },
    'import/extensions': ['.js', '.ts', '.jsx', '.tsx'],
  },
  ignorePatterns: ['src/react-app-env.d.ts', 'node_modules/'],
};
