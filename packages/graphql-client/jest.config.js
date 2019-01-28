// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  browser: false,
  clearMocks: true,
  coverageDirectory: 'coverage',
  setupFiles: ['<rootDir>/tools/jest-before-each.js'],
  testEnvironment: 'node',
};
