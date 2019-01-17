const fuzzy = require('fuzzy');
const shell = require('shelljs');
const util = require('util');
const inquirer = require('inquirer');
const { config, client, cache } = require('core/env');
const { symbols } = require('core/ui');
const { enums } = require('@arcblock/forge-proto');
inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));

function source(answers, input, type) {
  const origins = [];
  for (let item in enums[type]) {
    origins.push(item);
  }
  input = input || '';
  return new Promise(function(resolve) {
    var fuzzyResult = fuzzy.filter(input, origins);
    resolve(
      fuzzyResult.map(function(el) {
        return el.original;
      })
    );
  });
}

const questions = [
  {
    type: 'text',
    name: 'passphrase',
    message: 'Please input passphrase:',
    validate: input => {
      if (!input) return 'The passphrase should not empty';
      if (!/^.{6,15}$/.test(input)) return 'The passphrase format validation error';
      return true;
    },
  },
  {
    type: 'text',
    name: 'moniker',
    message: 'Please input moniker:',
    validate: input => {
      if (!input) return 'The moniker should not empty';
      if (!/^[a-zA-Z0-9][a-zA-Z0-9_]{3,15}$/.test(input))
        return 'The moniker format validation error';
      return true;
    },
  },
  {
    type: 'autocomplete',
    name: 'pk',
    message: 'Please select a public_key type?',
    source: function(answersSoFar, input) {
      return source(answersSoFar, input, 'KeyType');
    },
  },
  {
    type: 'autocomplete',
    name: 'hash',
    message: 'Please select a hash type?',
    source: function(answersSoFar, input) {
      return source(answersSoFar, input, 'HashType');
    },
  },
  {
    type: 'autocomplete',
    name: 'encoding',
    message: 'Please select a address encoding type?',
    source: function(answersSoFar, input) {
      return source(answersSoFar, input, 'EncodingType');
    },
  },
];

// Execute the cli silently.
async function execute(data) {
  try {
    const { passphrase, moniker, pk, hash, encoding } = data;
    const walletType = {
      pk: enums.KeyType[pk],
      hash: enums.HashType[hash],
      address: enums.EncodingType[encoding],
    };
    const res = await client.createWallet({ passphrase, moniker, type: walletType });
    shell.echo(`${symbols.success} wallet create success!`);
    shell.echo(util.inspect(res.$format().wallet, { depth: 5, colors: true, compact: false }));

    // Unlock current wallet and save to disk cache
    const { token } = await client.loadWallet({ address: res.wallet.address, passphrase });
    cache.write('wallet', {
      token,
      address: res.wallet.address,
      expireAt: Date.now() + config.forge.unlockTtl * 1e3,
    });
    shell.echo(`${symbols.success} wallet unlocked!`);
  } catch (err) {
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
