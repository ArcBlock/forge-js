// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
const path = require('path');

module.exports = {
  browser: false,
  clearMocks: true,
  coverageDirectory: 'coverage',
  setupFiles: [path.resolve('./tools/jest-setup.js')],
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec).js?(x)'],
};
