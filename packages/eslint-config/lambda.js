const typescript = require('./internal/typescript');

module.exports = {
  extends: ['./index'],

  overrides: [
    {
      files: ['*.ts'],
      rules: {
        '@typescript-eslint/naming-convention': [
          ...typescript.overrides[0].rules['@typescript-eslint/naming-convention'],
          // Allow DynamoDB attribute aliases
          { selector: 'objectLiteralProperty', format: null, filter: { regex: '^[#:.^].*$|^.*[$]$', match: true } },
          // Allow headers
          {
            selector: 'objectLiteralProperty',
            format: null,
            filter: { regex: '^content-type|Content-Type|Content-type$', match: true },
          },
          // Allow graphql variables. See: https://github.com/vkolgi/json-to-graphql-query#features
          {
            selector: 'objectLiteralProperty',
            format: null,
            filter: { regex: '^__(args|aliasFor|variables|directives|all_on|on|name|typeName)$', match: true },
          },
          // Fallback to camelCase or PascalCase for other properties
          { selector: 'objectLiteralProperty', format: ['camelCase', 'PascalCase'] },
        ],
      },
    },
  ],
};
