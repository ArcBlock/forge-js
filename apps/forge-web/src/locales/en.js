/* eslint global-require:"off" */
const flatten = require('flat');

module.exports = flatten({
  title: 'Arcblock | Blockchain 3.0',
  back: 'Back',
  auth: require('./auth/en'),
});
