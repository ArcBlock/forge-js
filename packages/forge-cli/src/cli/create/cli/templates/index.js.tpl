// eslint-disable-next-line import/no-unresolved
const { cli, action } = require('core/cli');
const { execute, run } = require('./{{name}}');

cli(
  '{{ action }}:{{ name }}',
  '{{ description }}',
  input => action(execute, run, input),
);
