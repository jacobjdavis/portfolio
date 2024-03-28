module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['simple-import-sort'],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Packages `react` related packages come first.
          ['^react', '^@?\\w'],
          // Store
          ['^(store)(/.*|$)'],
          // MUI
          ['^(@mui)(/.*|$)'],
          // Context
          ['^(context)(/.*|$)'],
          // Hooks
          ['^(hooks)(/.*|$)'],
          // Components
          ['^(routers|layout|views|components)(/.*|$)'],
          // Styles
          ['^(styles)(/.*|$)'],
          // Utils
          ['^(utils|helpers)(/.*|$)'],
          // Constants
          ['^(constants)(/.*|$)'],
          // Types
          ['^(types)(/.*|$)'],
        ],
      },
    ],
    // Floating promises in useEffects
    'no-void': 'off',
    // Too restrictive: https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'off',
    // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'off',
    // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    'react/destructuring-assignment': 'off',
    // No jsx extension: https://github.com/facebook/create-react-app/issues/87#issuecomment-234627904
    'react/jsx-filename-extension': 'off',
    // Use function hoisting to improve code readability
    'no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true },
    ],
    // Allow most functions to rely on type inference. If the function is exported, then `@typescript-eslint/explicit-module-boundary-types` will ensure it's typed.
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true, typedefs: true },
    ],
    // Common abbreviations are known and readable
    'unicorn/prevent-abbreviations': 'off',
    // Airbnb prefers forEach
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-null': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/prefer-node-protocol': 'off',
    'unicorn/explicit-length-check': 'off',
    'consistent-return': 'off',
    'no-param-reassign': ['error', { props: false }],
    'array-callback-return': 'off',
    'no-extra-boolean-cast': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    '@typescript-eslint/unbound-method': 'off',
    'react/require-default-props': ['error', { functions: 'defaultArguments' }],
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
  },
}
