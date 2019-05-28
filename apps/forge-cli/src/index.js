#!/usr/bin/env node

// Add the root project directory to the app module search path:
require('app-module-path').addPath(__dirname);
const chalk = require('chalk');
const shell = require('shelljs');
const program = require('commander');

// eslint-disable-next-line import/no-unresolved
const { initCli } = require('core/cli');
const { symbols, hr } = require('core/ui');

program
  .option('-v, --verbose', 'Output runtime logs when execute the command, used for debug')
  .option(
    '-r, --release-dir',
    'Forge release directory path (unzipped), use your own copy forge release'
  )
  .option(
    '-c, --config-path',
    'Forge config used when starting forge node and initializing gRPC clients'
  )
  .option(
    '-g, --socket-grpc',
    'Socket gRPC endpoint to connect, with this you can use forge-cli with a remote node'
  );
// .option(
//   '-s, --setup-script',
//   'Path to a javascript file that loads application specific protobuf files into grpc-client'
// );

initCli(program);

program.on('--help', () => {
  shell.echo(`
Examples:

  Be sure to initialize before running any other commands
  > ${chalk.cyan('forge init')}

  Curious about how to use a subcommand?
  > ${chalk.cyan('forge help block')}
  `);
});

program.on('command:*', () => {
  shell.echo(hr);
  shell.echo(`${symbols.error} Unsupported command: ${chalk.cyan(program.args.join(' '))}`);
  shell.echo(hr);
  program.help();
  process.exit(1);
});

program.parse(process.argv);

if (program.args.length === 0) {
  program.help();
}
