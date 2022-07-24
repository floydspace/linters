const config = {
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'es5',
  arrowParens: 'always',
  printWidth: 120,
  semi: true,
  useTabs: false,
  bracketSpacing: true,
  overrides: [
    {
      files: ['package.json'],
      options: {
        parser: 'json-stringify',
        plugins: [require('path').resolve(__dirname, 'plugins', 'prettier-plugin-sort-package')],
      },
    },
  ],
};

module.exports = config;
