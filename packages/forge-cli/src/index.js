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
    '-r, --release-dir',
    'Forge release directory path (unzipped), use your own copy forge release'
  )
  .option(
    '-t, --release-tarball',
    'Forge release tarball (unzipped), we take care of the rest'
  )
  .option(
    '-c, --config-path',
    'Forge config used when starting forge node and initializing gRPC clients'
  )
  .option(
    '-g, --socket-grpc',
    'Socket gRPC endpoint to connect, with this you can use forge-cli with a remote node'
  );

initCli(program);

program.parse(process.argv);

if (program.args.length === 0) program.help();
