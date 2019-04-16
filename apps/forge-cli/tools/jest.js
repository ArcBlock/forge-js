/* eslint no-console: "off" */
// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';
process.env.PUBLIC_URL = '';
process.env.DEBUG = '@arcblock/*,-@arcblock/forge-proto';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  console.trace(err);
  process.exit(1);
});

const jest = require('jest');
let argv = process.argv.slice(2);
argv.push('--forceExit');
argv.push('--runInBand');
argv.push('--verbose');

// Watch unless on CI or in coverage mode
if (!process.env.CI && argv.indexOf('--coverage') < 0) {
  argv.push('--watch');
}

jest.run(argv);
