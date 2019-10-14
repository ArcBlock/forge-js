/* eslint-disable no-console */
const glob = require('glob');
const path = require('path');
const shell = require('shelljs');

const examples = glob.sync('../examples/*.js', { cwd: __dirname }).filter(x => x.endsWith('.js'));
examples.forEach(x => {
  if (x.includes('subscribe')) {
    return;
  }
  const example = path.resolve(__dirname, x);
  console.log('');
  console.log('-'.repeat(80));
  console.log('Running example', example);
  console.log('-'.repeat(80));
  shell.exec(`node ${example}`);
  console.log('');
  console.log('');
});
