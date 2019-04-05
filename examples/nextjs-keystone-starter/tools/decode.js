require('dotenv').config();

const { fromJSON } = require('@arcblock/forge-wallet');
const { hexToBytes, fromTokenToUnit } = require('@arcblock/forge-util');
const GraphQLClient = require('@arcblock/forge-graphql-client/src/client');

const auth = require('../config/auth');

const client = new GraphQLClient(auth.appInfo.chainHost);
const wallet = fromJSON(auth.wallet);

(async () => {
  try {
    const res = await client.encodeTransferTx({
      wallet,
      data: {
        to: 'ForgeWebAppStarter',
        value: {
          value: fromTokenToUnit(100).toBuffer(),
          minus: false,
        },
      },
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
})();
