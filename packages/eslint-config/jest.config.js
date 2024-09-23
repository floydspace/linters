const pack = require('./package.json');

module.exports = {
  ...require('../../jest.config.base'),
  displayName: pack.name,
  rootDir: '.',
  testMatch: [`<rootDir>/test/**/*.test.js`],
  transform: {
    '\\.js$': ['babel-jest', { ...require('../../babel.config.base'), cwd: __dirname }],
  },
  transformIgnorePatterns: ['/node_modules/(?!(@typescript-eslint)/)'],
  resolver: '<rootDir>/../../jest-resolver.js',
};
