const path = require('path');

// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
module.exports = {
  browser: false,
  clearMocks: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  setupFiles: [path.resolve('./tools/jest-setup.js')],
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec).js?(x)'],
};
