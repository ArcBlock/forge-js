const fuzzy = require('fuzzy');
const chalk = require('chalk');
const shell = require('shelljs');
const inquirer = require('inquirer');
const { config, createRpcClient, cache } = require('core/env');
const { symbols, hr, pretty } = require('core/ui');
const { enums } = require('@arcblock/forge-proto');
inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));

function source(answers, input = '', type) {
  const origins = Object.keys(enums[type]);
  return new Promise(resolve => {
    const fuzzyResult = fuzzy.filter(input, origins);
    resolve(fuzzyResult.map(el => el.original));
  });
}

const questions = [
  {
    type: 'password',
    name: 'passphrase',
    message: 'Please input passphrase:',
    validate: input => {
      if (!input) return 'The passphrase should not empty';
      if (!/^.{6,15}$/.test(input)) return 'The passphrase length should between 6~25 char';
      return true;
    },
  },
  {
    type: 'text',
    name: 'moniker',
    message: 'Please input moniker:',
    validate: input => {
      if (!input) return 'The moniker should not empty';
      if (!/^[a-zA-Z0-9][a-zA-Z0-9_]{3,15}$/.test(input)) {
        return 'The moniker should only contain 0-9,a-z,A-Z, and length between 3~15';
      }
      return true;
    },
  },
  {
    type: 'autocomplete',
    name: 'role',
    default: enums.RoleType.ROLE_ACCOUNT,
    message: 'Please select a account role type?',
    source(answersSoFar, input) {
      return source(answersSoFar, input, 'RoleType');
    },
  },
  {
    type: 'autocomplete',
    name: 'pk',
    default: enums.KeyType.ED25519,
    message: 'Please select a key pair algorithm?',
    source(answersSoFar, input) {
      return source(answersSoFar, input, 'KeyType');
    },
  },
  {
    type: 'autocomplete',
    name: 'hash',
    default: enums.HashType.SHA3,
    message: 'Please select a hash algorithm?',
    source(answersSoFar, input) {
      return source(answersSoFar, input, 'HashType');
    },
  },
];

// Execute the cli silently.
async function execute(data) {
  try {
    const client = createRpcClient();
    const { passphrase, moniker, pk, hash, role } = data;
    const res = await client.createWallet({
      passphrase,
      moniker,
      type: {
        pk: enums.KeyType[pk],
        hash: enums.HashType[hash],
        address: enums.EncodingType.BASE58,
        role: enums.RoleType[role],
      },
    });
    shell.echo(hr);
    shell.echo(`${symbols.success} account create success!`);
    shell.echo(hr);
    shell.echo(pretty(res.$format().wallet));

    // Unlock current wallet and save to disk cache
    const { token } = await client.loadWallet({ address: res.wallet.address, passphrase });
    cache.write('wallet', {
      token,
      address: res.wallet.address,
      expireAt: Date.now() + config.get('forge.unlockTtl', 300) * 1e3,
    });
    shell.echo(hr);
    shell.echo(`${symbols.success} account unlocked!`);
    shell.echo(
      `${symbols.info} run ${chalk.cyan(
        `forge account ${res.wallet.address}`
      )} to inspect account state`
    );
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('error', err);
  }
}

// Run the cli interactively
function run() {
  inquirer.prompt(questions).then(answers => {
    execute(answers);
  });
}

exports.run = run;
exports.execute = execute;
