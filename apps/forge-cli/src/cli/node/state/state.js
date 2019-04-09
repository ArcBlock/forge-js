const shell = require('shelljs');
const chalk = require('chalk');
const { createRpcClient, webUrl, isForgeWebStarted } = require('core/env');
const { symbols, pretty, hr } = require('core/ui');

function makeInfoReporter(method, title, key) {
  return async function reporter(client) {
    if (typeof client[method] !== 'function') {
      return;
    }
    try {
      const res = await client[method]();
      shell.echo(hr);
      shell.echo(`${symbols.success} ${chalk.cyan(title)}`);
      shell.echo(hr);
      shell.echo(pretty(res.$format()[key]));
      shell.echo('');
    } catch (err) {
      shell.echo(`${symbols.error} rpc request field: ${err.message}`);
    }
  };
}

const getChainInfo = makeInfoReporter('getChainInfo', 'Chain Info', 'info');
const getForgeInfo = makeInfoReporter('getForgeState', 'Forge State', 'state');
const getNetInfo = makeInfoReporter('getNetInfo', 'Net Info', 'netInfo');
const getValidatorsInfo = makeInfoReporter(
  'getValidatorsInfo',
  'Validators Info',
  'validatorsInfo'
);

function getWebInfo() {
  shell.echo(hr);
  shell.echo(`${symbols.success} ${chalk.cyan('Forge Web')}`);
  shell.echo(hr);
  if (isForgeWebStarted()) {
    shell.echo(`${symbols.info} forge web started at:     ${webUrl()}`);
    shell.echo(`${symbols.info} graphql endpoint at:      ${webUrl()}/api`);
    shell.echo(`${symbols.info} graphql playground at:    ${webUrl()}/api/playground`);
  } else {
    shell.echo(`${symbols.warning} forge web not started`);
    shell.echo(`${symbols.info} start forge web with ${chalk.cyan('forge web start')}`);
  }
  shell.echo('');
}

async function main({ args: [type = 'all'] }) {
  const client = createRpcClient();

  if (type === 'chain') {
    await getChainInfo(client);
  }
  if (type === 'net') {
    await getNetInfo(client);
  }
  if (type === 'forge' || type === 'core') {
    await getForgeInfo(client);
  }
  if (type === 'validator' || type === 'validators') {
    await getValidatorsInfo(client);
  }
  if (type === 'web') {
    await getWebInfo(client);
  }
  if (type === 'all') {
    await getChainInfo(client);
    await getForgeInfo(client);
    await getNetInfo(client);
    await getValidatorsInfo(client);
    await getWebInfo(client);
  }
}

exports.run = main;
exports.execute = main;
