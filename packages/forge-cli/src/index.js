#!/usr/bin/env node

// Add the root project directory to the app module search path:
require('app-module-path').addPath(__dirname);
const chalk = require('chalk');
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

if (program.args.length === 0) program.help(text => {
  return `${text}
Examples:

  Be sure to run initialize before any other commands
  > ${chalk.cyan('forge init')}

  Init with downloaded forge release tarball, will extract to ~/.forge-cli/release
  > ${chalk.cyan('forge init --release-tarball ~/Downloads/forge_darwin_amd64.tgz')}

  Start node with custom forge release folder
  > ${chalk.cyan('forge start --release-dir ~/Downloads/forge/')}
  > ${chalk.cyan('FORGE_RELEASE_DIR=~/Downloads/forge/ forge start')}

  Start node with custom forge config
  > ${chalk.cyan('forge start --config-path ~/Downloads/forge/forge_release.toml')}
  > ${chalk.cyan('FORGE_CONFIG=~/Downloads/forge/forge_release.toml forge start')}

  Connect to a remote forge node without starting one
  > ${chalk.cyan('forge chain:info --socket-grpc "tcp://10.0.0.1:9527"')}
  `;
});
