module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['import', '@typescript-eslint', 'simple-import-sort', 'eslint-plugin-import'],
  settings: {
    'import/parsers': { '@typescript-eslint/parser': ['.ts'] },
    'import/resolver': {
      'eslint-import-resolver-typescript': true,
      typescript: {
        // always try to resolve types under `<root>@types` directory
        // even it doesn't contain any source code, like `@types/etc`
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/exports-last': 'off',
    'import/no-default-export': 'off',
    'import/newline-after-import': ['error', { count: 1 }],
    'import/no-webpack-loader-syntax': 'off',
    'import/no-duplicates': 'error',
    'no-duplicate-imports': 'off',

    // overwrite rule from `@floydspace/eslint-config`
    '@typescript-eslint/consistent-type-imports': 'off',
  },
};
