const chalk = require('chalk');
const shell = require('shelljs');
const semver = require('semver');
const { symbols } = require('core/ui');
const { config, debug } = require('core/env');
const { isForgeStopped, updateReleaseYaml } = require('cli/node/init/init');
const { listReleases } = require('cli/release/list/list');

async function main({ args: [userVersion] }) {
  try {
    const version =
      userVersion && semver.coerce(userVersion) ? semver.coerce(userVersion).version : '';
    if (version === config.get('cli.currentVersion')) {
      shell.echo(`${symbols.warning} Already using forge release v${version}`);
      return process.exit(1);
    }

    if (!isForgeStopped()) {
      shell.echo(`${symbols.warning} Please stop forge before activate another version`);
      return process.exit(1);
    }

    const { forge, simulator } = listReleases();
    if (!forge.includes(version)) {
      shell.echo(
        `${
          symbols.error
        } forge release v${version} not downloaded, please download it with ${chalk.cyan(
          `forge download ${version}`
        )}`
      );
      return process.exit(1);
    }

    updateReleaseYaml('forge', version);
    if (simulator.includes(version)) {
      updateReleaseYaml('starter', version);
    }

    shell.echo(`${symbols.success} forge v${version} activated successfully!`);
    shell.echo('');
    shell.echo(`Now you can restart forge with ${chalk.cyan('forge start')}`);
    shell.echo('');
  } catch (err) {
    debug.error(err);
    shell.echo(`${symbols.error} Forge release activate failed`);
  }
}

exports.run = main;
exports.execute = main;
