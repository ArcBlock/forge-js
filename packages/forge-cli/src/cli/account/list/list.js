const shell = require('shelljs');
const inquirer = require('inquirer');
const { client } = require('core/env');
const { symbols } = require('core/ui');
const { messages } = require('@arcblock/forge-proto');

inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));

async function getAccountState(argAddress, argRole) {
  const streamChild = await client.getAccountState({ address: argAddress });
  streamChild
    .on('data', function({ code, state }) {
      if (code === 0) {
        const { moniker, address, role } = state;
        if (!argRole || argRole === 'all') {
          shell.echo(
            `${moniker.padEnd(20, ' ').padStart(23, ' ')}${address.padEnd(
              50,
              ' '
            )}${messages.AccountRole[role].padEnd(10, ' ')}`
          );
        } else {
          if (argRole === messages.AccountRole[role].toLowerCase()) {
            shell.echo(
              `${moniker.padEnd(20, ' ').padStart(23, ' ')}${address.padEnd(
                50,
                ' '
              )}${messages.AccountRole[role].padEnd(10, ' ')}`
            );
          }
        }
      } else {
        shell.echo(`${symbols.error} error,code: ${code}`);
      }
    })
    .on('error', err => {
      shell.echo(`${symbols.error} error: ${err}`);
    });
}

// Execute the cli silently.
async function execute({ args: [role = 'all'] }) {
  shell.echo(`${symbols.success} get account success: `);
  shell.echo(`${''.padEnd(82, '-')}`);
  shell.echo(
    `${'moniker'.padEnd(20, ' ').padStart(23, ' ')}${'address'.padEnd(50, ' ')}${'role'.padEnd(
      10,
      ' '
    )}`
  );
  shell.echo(`${''.padEnd(82, '-')}`);
  try {
    const stream = await client.listWallets({});
    stream
      .on('data', function(result) {
        getAccountState(result.address, role);
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
