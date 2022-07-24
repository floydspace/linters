const pack = require('./package.json');

const name = pack.name.split('/').pop();

module.exports = {
  ...require('../../jest.config.base'),
  name,
  displayName: pack.name,
  rootDir: '.',
  testMatch: [`<rootDir>/test/**/*.test.js`],
  transform: {
    '\\.js$': ['babel-jest', { ...require('../../babel.config.base'), cwd: __dirname }],
  },
};
