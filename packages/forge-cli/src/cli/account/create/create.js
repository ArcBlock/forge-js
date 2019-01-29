const fuzzy = require('fuzzy');
const shell = require('shelljs');
const inquirer = require('inquirer');
const { config, createRpcClient, cache } = require('core/env');
const { symbols, hr, pretty } = require('core/ui');
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
      if (!/^[a-zA-Z0-9][a-zA-Z0-9_]{3,15}$/.test(input))
        return 'The moniker should only contain 0-9,a-z,A-Z, and length between 3~15';
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
    const client = createRpcClient();
    const { passphrase, moniker, pk, hash, encoding } = data;
    const res = await client.createWallet({
      passphrase,
      moniker,
      type: {
        pk: enums.KeyType[pk],
        hash: enums.HashType[hash],
        address: enums.EncodingType[encoding],
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
    shell.echo(hr);
    shell.exec(`forge account ${res.wallet.address}`);
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
