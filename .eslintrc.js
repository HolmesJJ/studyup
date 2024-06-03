module.exports = {
  root: true,
  extends: [
    'react-app',
    'react-app/jest',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'prettier',
    'import',
  ],
  rules: {
    'indent': ['error', 2],
    'semi': ['error', 'always'],
    'eol-last': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    'space-in-parens': ['error', 'never'],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
    '@typescript-eslint/type-annotation-spacing': ['error', { 'after': true }],
    'no-trailing-spaces': 'error',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'import', next: '*' },
      { blankLine: 'any', prev: 'import', next: 'import' },
    ],
    'import/order': ['error', {
      'groups': [['builtin', 'external'], 'internal'],
      'pathGroups': [
        {
          'pattern': '**/*.styles',
          'group': 'internal',
          'position': 'after',
        },
      ],
      'pathGroupsExcludedImportTypes': ['builtin'],
      'newlines-between': 'always',
      'alphabetize': {
        'order': 'asc',
        'caseInsensitive': true,
      },
    }],
    'space-before-blocks': ['error', 'always'],
    'keyword-spacing': ['error', { 'before': true, 'after': true }],
    'comma-dangle': ['error', 'always-multiline'],
    'space-infix-ops': 'error',
    'quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
  },
  overrides: [{
    files: ['*.ts', '*.tsx'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  }],
};
