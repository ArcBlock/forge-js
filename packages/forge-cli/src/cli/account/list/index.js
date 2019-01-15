// eslint-disable-next-line import/no-unresolved
const { cli, action } = require('core/cli');
const { execute, run } = require('./list');

cli(
  'account:list',
  'list all accounts stored in this node (nickname, hash, pub_key, role)',
  input => action(execute, run, input)
);
