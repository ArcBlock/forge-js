const { createRpcClient } = require('core/env');

async function main() {
  const client = createRpcClient();
  const res = await client.listTransactions();
  // eslint-disable-next-line no-console
  console.log(res.transactionsList);
}

exports.run = main;
exports.execute = main;
