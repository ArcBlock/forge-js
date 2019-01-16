const shell = require('shelljs');
const inquirer = require('inquirer');
const { client } = require('core/env');
const { symbols } = require('core/ui');
const { enums, messages } = require('@arcblock/forge-proto');

inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));

async function getAccountState(address) {
  const streamChild = await client.getAccountState({ address: address });
  streamChild
    .on('data', function({ code, state }) {
      if (code === 0) {
        const { moniker, address, role } = state;
        shell.echo(
          `${moniker.padEnd(20, ' ')}${address.padEnd(50, ' ')}${messages.AccountRole[role].padEnd(
            10,
            ' '
          )}`
        );
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
  shell.echo(`${symbols.success} get account success: `);
  shell.echo(`${'moniker'.padEnd(20, ' ')}${'address'.padEnd(50, ' ')}${'role'.padEnd(10, ' ')}`);
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
function run() {
  inquirer.prompt([]).then(() => {
    execute();
  });
}

exports.run = run;
exports.execute = execute;
