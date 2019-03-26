require('dotenv').config();

const { fromJSON } = require('@arcblock/forge-wallet');
const { hexToBytes } = require('@arcblock/forge-util');
const auth = require('../config/auth');

const wallet = fromJSON(auth.wallet);

(async () => {
  const res = await auth.client.sendDeclareTx({
    data: {
      moniker: 'forge_webapp_starter',
      pk: Buffer.from(hexToBytes(wallet.publicKey)),
      type: wallet.type,
    },
    wallet,
  });
  console.log(res);
})();
