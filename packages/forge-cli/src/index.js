#!/usr/bin/env node

// Add the root project directory to the app module search path:
require('app-module-path').addPath(__dirname);

const fs = require('fs');
const path = require('path');
const program = require('commander');

// eslint-disable-next-line import/no-unresolved
const { initCli } = require('core/cli');

const versionFile = path.join(__dirname, '../version');
const version = fs.readFileSync(versionFile, { encoding: 'utf-8' });

program.version(version);

initCli(program);

program.parse(process.argv);

if (program.args.length === 0) program.help();
