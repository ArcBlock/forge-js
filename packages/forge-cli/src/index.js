#!/usr/bin/env node

// Add the root project directory to the app module search path:
require('app-module-path').addPath(__dirname);
const program = require('commander');

// eslint-disable-next-line import/no-unresolved
require('core/init');
const { initCli } = require('core/cli');
const { version } = require('../package.json');

program.version(version);

initCli(program);

program.parse(process.argv);

if (program.args.length === 0) program.help();
