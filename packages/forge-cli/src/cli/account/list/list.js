const shell = require('shelljs');
const inquirer = require('inquirer');
const { client } = require('core/env');
const { symbols } = require('core/ui');
const pretty = require('json-stringify-pretty-compact');

inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));

async function getAccountState(address) {
  const streamChild = await client.getAccountState({ address: address });
  streamChild
    .on('data', function({ code, state }) {
      if (code === 0) {
        const { moniker, address, role } = state;
        shell.echo(`${symbols.success} get account success: ${pretty({ moniker, address, role })}`);
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
