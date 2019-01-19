#!/usr/bin/env node

// Add the root project directory to the app module search path:
require('app-module-path').addPath(__dirname);
const chalk = require('chalk');
const shell = require('shelljs');
const program = require('commander');

// eslint-disable-next-line import/no-unresolved
const { initCli } = require('core/cli');
const { version } = require('../package.json');

program
  .version(version)
  .option('-v, --verbose', 'Output runtime logs when execute the command, used for debug')
  .option(
    '-r, --release-dir',
    'Forge release directory path (unzipped), use your own copy forge release'
  )
  .option('-t, --release-tarball', 'Forge release tarball (unzipped), we take care of the rest')
  .option(
    '-c, --config-path',
    'Forge config used when starting forge node and initializing gRPC clients'
  )
  .option(
    '-g, --socket-grpc',
    'Socket gRPC endpoint to connect, with this you can use forge-cli with a remote node'
  )
  .option(
    '-s, --setup-script',
    'Path to a javascript file that loads application specific protobuf files into forge-sdk'
  );

initCli(program);

program.on('--help', () => {
  shell.echo(`
Examples:

  Be sure to initialize before running any other commands
  > ${chalk.cyan('forge init')}

  Connect to a remote forge node without starting one
  > ${chalk.cyan('forge chain:info --socket-grpc "tcp://10.0.0.1:9527"')}
  `);
});

program.parse(process.argv);

if (program.args.length === 0) {
  program.outputHelp();
}
