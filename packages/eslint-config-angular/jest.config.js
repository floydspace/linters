const pack = require('./package.json');

module.exports = {
  ...require('../../jest.config.base'),
  displayName: pack.name,
  rootDir: '.',
  testMatch: [`<rootDir>/test/**/*.test.js`],
  transform: {
    '\\.c?js$': ['babel-jest', { ...require('../../babel.config.base'), cwd: __dirname }],
  },
  transformIgnorePatterns: ['/node_modules/(?!(@typescript-eslint|ts-api-utils)/)'],
  resolver: '<rootDir>/../../jest-resolver.js',
  moduleNameMapper: {
    '^is-bun-module$': '<rootDir>/../../node_modules/is-bun-module',
  },
};
