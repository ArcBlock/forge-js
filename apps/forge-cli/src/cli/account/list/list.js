const shell = require('shelljs');
const inquirer = require('inquirer');
const { createRpcClient, cache } = require('core/env');
const { symbols, hr } = require('core/ui');

inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));

async function getAccountState(argAddress, cached) {
  const client = createRpcClient();

  const streamChild = client.getAccountState({ address: argAddress });
  streamChild
    .on('data', function({ state }) {
      if (state) {
        const { moniker, address } = state;
        const symbol = cached && cached.address === address ? symbols.success : '';
        shell.echo(
          `${moniker.padEnd(20, ' ').padStart(23, ' ')}${address.padEnd(45, ' ')}${symbol.padEnd(
            10,
            ' '
          )}`
        );
      }
    })
    .on('error', err => {
      shell.echo(`${symbols.error} error: ${err}`);
    });
}

// Execute the cli silently.
function execute() {
  const client = createRpcClient();
  const cached = cache.read('wallet');
  let isHeaderPrinted = false;
  let counter = 0;

  const stream = client.listWallet({});
  stream
    .on('data', function(result) {
      if (isHeaderPrinted === false) {
        shell.echo(`${''.padEnd(80, '-')}`);
        shell.echo(
          `${'moniker'.padEnd(20, ' ').padStart(23, ' ')}${'address'.padEnd(
            45,
            ' '
          )}${'selected'.padEnd(10, ' ')}`
        );
        shell.echo(`${''.padEnd(80, '-')}`);
        isHeaderPrinted = true;
      }
      getAccountState(result.address, cached);
      counter += 1;
    })
    .on('error', err => {
      shell.echo(`${symbols.error} error: ${err}`);
    })
    .on('end', () => {
      setTimeout(() => {
        shell.echo(hr);
        shell.echo(`Got ${counter} accounts`);
      }, 1000);
    });
}

// Run the cli interactively
exports.run = execute;
exports.execute = execute;
