const shell = require('shelljs');
const { createRpcClient } = require('core/env');

async function main() {
  const client = createRpcClient();
  const res = await client.listTransactions();
  console.log(res.transactionsList);
}

exports.run = main;
exports.execute = main;
