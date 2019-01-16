const fuzzy = require('fuzzy');
const shell = require('shelljs');
const inquirer = require('inquirer');
const { client } = require('core/env');
const { symbols } = require('core/ui');
const { enums } = require('@arcblock/forge-proto');
const pretty = require('json-stringify-pretty-compact');
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
    name: 'passphrase', // For primtive type parameter
    message: 'Please input passphrase:',
    validate: input => {
      if (!input) return 'The passphrase should not empty';
      if (!/^.{6,15}$/.test(input)) return 'The passphrase format validation error';
      return true;
    },
  },
  {
    type: 'text',
    name: 'moniker', // For primtive type parameter
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
    message: 'Please select a pk type?',
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
    message: 'Please select a encoding type?',
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
    const newWallet = await client.createWallet({
      passphrase: passphrase,
      moniker: moniker,
      type: walletType,
    });
    shell.echo(`${symbols.success} wallet create success: ${pretty(newWallet)}`);
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
