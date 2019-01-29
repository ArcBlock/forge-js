/* eslint global-require:"off" */
const flatten = require('flat');

module.exports = flatten({
  title: 'Arcblock | Blockchain 3.0',
  back: '返回',
  auth: require('./auth/zh'),
});
