const base = require('./index');

module.exports = {
  ...base,
  proseWrap: 'preserve',
  semi: false,
  arrowParens: 'avoid',
  overrides: [
    {
      files: ['*.js'],
      options: { parser: 'babel' },
    },
    {
      files: ['*.ts'],
      options: { parser: 'typescript' },
    },
    {
      files: ['*.json', '.prettierrc', '.stylelintrc'],
      options: { parser: 'json' },
    },
    {
      files: ['*.less'],
      options: { parser: 'less' },
    },
    {
      files: ['*.scss'],
      options: { parser: 'scss' },
    },
    {
      files: ['*.html'],
      options: { parser: 'html' },
    },
    {
      files: ['*.svg'],
      options: { parser: 'xml' },
    },
    {
      // @prettier/plugin-xml
      files: ['*.xml'],
      options: { parser: 'xml' },
    },
    {
      files: ['*.yml', '*.yaml'],
      options: { parser: 'yaml', tabWidth: 2 },
    },
    {
      files: ['*.md'],
      options: { parser: 'markdown', tabWidth: 2 },
    },
    ...base.overrides,
  ],
};
