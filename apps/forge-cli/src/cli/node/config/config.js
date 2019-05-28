const fs = require('fs');
const shell = require('shelljs');
const GraphQLClient = require('@arcblock/graphql-client');
const { symbols, hr } = require('core/ui');
const { config, webUrl } = require('core/env');

async function main({ opts: { peer } }) {
  if (peer) {
    const client = new GraphQLClient(`${webUrl()}/api`);
    // eslint-disable-next-line no-shadow
    const { config } = await client.getConfig();
    shell.echo(`${symbols.success} config for peer:`);
    shell.echo(hr);
    shell.echo(config);
  } else {
    const { forgeConfigPath } = config.get('cli');
    shell.echo(hr);
    shell.echo(`${symbols.info} config file path: ${forgeConfigPath}`);
    shell.echo(hr);
    shell.echo(fs.readFileSync(forgeConfigPath).toString());
  }
}

exports.run = main;
exports.execute = main;
