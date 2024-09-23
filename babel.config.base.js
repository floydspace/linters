module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
      '@babel/preset-typescript',
    ],
  ],
  plugins: [
    '@babel/plugin-transform-nullish-coalescing-operator',
    '@babel/plugin-transform-logical-assignment-operators',
  ],
};
