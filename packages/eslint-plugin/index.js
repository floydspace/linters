module.exports = {
  rules: {
    'object-shorthand-grouping': require('./rules/object-shorthand-grouping'),
  },
  configs: {
    recommended: {
      plugins: ['@floydspace'],
      rules: {
        '@floydspace/object-shorthand-grouping': 'error',
      },
    },
  },
};
