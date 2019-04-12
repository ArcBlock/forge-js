const fs = require('fs');
const toml = require('@iarna/toml');
const shell = require('shelljs');
const chalk = require('chalk');
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

  const client = new GraphQLClient(endpoint);
  try {
    const res = await client.getConfig();
    const { forgeConfigPath } = config.get('cli');
    if (res.config && toml.parse(res.config)) {
      const backupFile = `${forgeConfigPath}.${Date.now()}`;
      shell.exec(`cp ${forgeConfigPath} ${backupFile}`);
      shell.echo(`${symbols.success} Forge config was backup to ${chalk.cyan(backupFile)}`);
      fs.writeFileSync(forgeConfigPath, res.config);
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
