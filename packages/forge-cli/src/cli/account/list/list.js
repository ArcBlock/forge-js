const shell = require('shelljs');
const inquirer = require('inquirer');
const { createRpcClient, cache } = require('core/env');
const { symbols } = require('core/ui');

inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));

async function getAccountState(argAddress) {
  const client = createRpcClient();
  const cached = cache.read('wallet');

  const streamChild = await client.getAccountState({ address: argAddress });
  streamChild
    .on('data', function({ code, state }) {
      if (state && code === 0) {
        const { moniker, address } = state;
        const symbol = cached && cached.address === address ? symbols.success : '';
        shell.echo(
          `${moniker.padEnd(20, ' ').padStart(23, ' ')}${address.padEnd(45, ' ')}${symbol.padEnd(
            10,
            ' '
          )}`
        );
      } else {
        shell.echo(`${symbols.error} error, code: ${code}`);
      }
    })
    .on('error', err => {
      shell.echo(`${symbols.error} error: ${err}`);
    });
}

// Execute the cli silently.
async function execute() {
  const client = createRpcClient();
  shell.echo(`${''.padEnd(80, '-')}`);
  shell.echo(
    `${'moniker'.padEnd(20, ' ').padStart(23, ' ')}${'address'.padEnd(45, ' ')}${'selected'.padEnd(
      10,
      ' '
    )}`
  );
  shell.echo(`${''.padEnd(80, '-')}`);
  try {
    const stream = await client.listWallets({});
    stream
      .on('data', function(result) {
        getAccountState(result.address);
      })
      .on('error', err => {
        shell.echo(`${symbols.error} error: ${err}`);
      });
  } catch (err) {
    shell.echo(`${symbols.error} error: ${err}`);
  }
}

// Run the cli interactively
exports.run = execute;
exports.execute = execute;
