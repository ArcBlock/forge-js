const GraphqlClient = require('@arcblock/graphql-client');
const { types } = require('@arcblock/mcrypto');
const { fromRandom, WalletType } = require('@arcblock/forge-wallet');

const client = new GraphqlClient('http://localhost:8210/api'); // local

(async () => {
  const res = await client.getChainInfo();
  console.log(res);
})();
