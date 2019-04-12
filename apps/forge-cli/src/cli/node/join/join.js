const fs = require('fs');
const path = require('path');
const toml = require('@iarna/toml');
const shell = require('shelljs');
const chalk = require('chalk');
const inquirer = require('inquirer');
const GraphQLClient = require('@arcblock/graphql-client');
const { config } = require('core/env');
const { symbols } = require('core/ui');

async function main({ args: [endpoint = ''] }) {
  if (!endpoint) {
    shell.echo(`${symbols.error} forge web graphql endpoint must be provided!`);
    shell.echo(
      `${symbols.info} if you want to join our nightly test net, use https://test.abtnetwork.io/api`
    );
  }

  // Confirm stopped
  const { starterBinPath, forgeConfigPath } = config.get('cli');
  const { stdout: pid } = shell.exec(`FORGE_CONFIG=${forgeConfigPath} ${starterBinPath} pid`, {
    silent: true,
  });

  const pidNumber = Number(pid);
  if (pidNumber) {
    shell.echo(`${symbols.error} forge is running!`);
    shell.echo(
      `${symbols.info} Please run ${chalk.cyan('forge stop')} first, then join another network!`
    );
    process.exit(0);
    return;
  }

  // Confirm
  const questions = [
    {
      type: 'confirm',
      name: 'confirm',
      default: false,
      message: chalk.red(
        'Join a new network means completely sync data from another peer, all local data will not be connected, are you sure?'
      ),
    },
  ];
  const { confirm } = await inquirer.prompt(questions);
  const myConfig = toml.parse(fs.readFileSync(forgeConfigPath).toString());
  if (confirm) {
    const oldDir = path.dirname(myConfig.forge.path);
    const bakDir = `${oldDir}_backup_${Date.now()}`;
    shell.echo(`${symbols.info} all state backup to ${bakDir}`);
    shell.exec(`mv ${oldDir} ${bakDir}`);
    shell.echo(`${symbols.info} rm -rf ~/.forge_cli/keys`);
    shell.exec('rm -rf ~/.forge_cli/keys');
  } else {
    shell.echo(`${symbols.info} User abort, nothing changed!`);
    process.exit();
    return;
  }

  const client = new GraphQLClient(endpoint);
  try {
    const res = await client.getConfig();
    if (res.config) {
      const remoteConfig = toml.parse(res.config);

      // Backup old file
      const backupFile = `${forgeConfigPath}.${Date.now()}`;
      shell.exec(`cp ${forgeConfigPath} ${backupFile}`);
      shell.echo(`${symbols.success} Forge config was backup to ${chalk.cyan(backupFile)}`);

      // Merge remote config into local config
      myConfig.forge.pub_sub_key = remoteConfig.forge.pub_sub_key;
      myConfig.forge.token = remoteConfig.forge.token;
      myConfig.forge.stake = remoteConfig.forge.stake;
      myConfig.tendermint.moniker = remoteConfig.tendermint.moniker;
      myConfig.tendermint.persistent_peers = remoteConfig.tendermint.persistent_peers;
      myConfig.tendermint.genesis = remoteConfig.tendermint.genesis;

      shell.echo(`${symbols.info} set network name: ${remoteConfig.tendermint.moniker}`);
      shell.echo(
        `${symbols.info} set persistent peers: ${remoteConfig.tendermint.persistent_peers}`
      );
      shell.echo(
        `${symbols.info} set genesis config: ${JSON.stringify(
          remoteConfig.tendermint.genesis,
          true,
          '  '
        )}`
      );

      // Write new config
      fs.writeFileSync(forgeConfigPath, toml.stringify(myConfig));

      shell.echo(
        `${symbols.success} Forge config was updated! Inspect by running ${chalk.cyan(
          `cat ${forgeConfigPath}`
        )}`
      );
      shell.echo(`${symbols.info} You must start/restart forge to use the latest config`);
    }
  } catch (err) {
    shell.echo(`${symbols.error} Cannot fetch forge config from endpoint ${endpoint}`);
  }
}

exports.run = main;
exports.execute = main;
