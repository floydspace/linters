module.exports = {
  extends: [
    './internal/base',
    './internal/sort-class-members',
    './internal/import',
    './internal/promise',
    './internal/test-files',
    './internal/typescript',
    './internal/prettier',
    './internal/moment',
  ],

  env: {
    browser: true,
    node: true,
  },
};
