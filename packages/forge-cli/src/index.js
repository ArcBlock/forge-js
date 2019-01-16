#!/usr/bin/env node

// Add the root project directory to the app module search path:
require('app-module-path').addPath(__dirname);
const program = require('commander');

// eslint-disable-next-line import/no-unresolved
const { initCli } = require('core/cli');
const { version } = require('../package.json');

program
  .version(version)
  .option(
    '-r, --forge-release-dir',
    'Forge release directory path (unzipped), use your own copy forge release'
  )
  .option('-c, --forge-config-path', 'Forge config used when starting forge node and rpc clients');

initCli(program);

program.parse(process.argv);

if (program.args.length === 0) program.help();
