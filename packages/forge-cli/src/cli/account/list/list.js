const shell = require('shelljs');
const inquirer = require('inquirer');
const { client } = require('core/env');
const { symbols } = require('core/ui');

inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));

async function getAccountState(argAddress) {
  const streamChild = await client.getAccountState({ address: argAddress });
  streamChild
    .on('data', function({ code, state }) {
      if (state && code === 0) {
        const { moniker, address } = state;
        shell.echo(`${moniker.padEnd(20, ' ').padStart(23, ' ')}${address.padEnd(45, ' ')}`);
      } else {
        shell.echo(`${symbols.error} error,code: ${code}`);
      }
    })
    .on('error', err => {
      shell.echo(`${symbols.error} error: ${err}`);
    });
}

// Execute the cli silently.
async function execute() {
  shell.echo(`${''.padEnd(68, '-')}`);
  shell.echo(`${'moniker'.padEnd(20, ' ').padStart(23, ' ')}${'address'.padEnd(45, ' ')}`);
  shell.echo(`${''.padEnd(68, '-')}`);
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
