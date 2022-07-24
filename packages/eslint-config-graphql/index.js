module.exports = {
  extends: [],

  plugins: [],

  rules: {},

  overrides: [
    {
      files: ['*.graphql'],
      extends: 'plugin:@graphql-eslint/schema-recommended',
      parser: '@graphql-eslint/eslint-plugin',
      parserOptions: { schema: './**/*.graphql' },
      plugins: ['@graphql-eslint', 'prettier'],
      rules: {
        'prettier/prettier': 'warn',
        '@graphql-eslint/strict-id-in-types': 'off',
        '@graphql-eslint/naming-convention': [
          'error',
          {
            types: 'PascalCase',
            Argument: 'camelCase',
            InputValueDefinition: { style: 'camelCase', ignorePattern: 'IBAN|ISIN|CUSIP|ISO' },
            DirectiveDefinition: 'camelCase',
            EnumValueDefinition: 'PascalCase',
            FieldDefinition: { style: 'camelCase', ignorePattern: 'IBAN|ISIN|CUSIP|ISO' },
            'FieldDefinition[parent.name.value=Query]': {
              forbiddenPrefixes: ['get', 'query'],
              forbiddenSuffixes: ['Query'],
            },
            'FieldDefinition[parent.name.value=Mutation]': {
              forbiddenPrefixes: ['add', 'create', 'edit', 'update', 'remove', 'delete', 'mutation'],
              forbiddenSuffixes: ['Mutation'],
            },
            'FieldDefinition[parent.name.value=Subscription]': {
              forbiddenPrefixes: ['subscription'],
              forbiddenSuffixes: ['Subscription'],
            },
          },
        ],
      },
    },
  ],
};
