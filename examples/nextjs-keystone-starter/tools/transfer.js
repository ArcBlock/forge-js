require('dotenv').config();

const multibase = require('multibase');
const { fromAddress } = require('@arcblock/forge-wallet');
const { bytesToHex } = require('@arcblock/forge-util');

const auth = require('../config/auth');

// const wallet = fromJSON(auth.wallet);

(async () => {
  try {
    const claim = {
      data: 'z5kJQo6JBoCSJgVEd2FQuWz5Y53Hp6v1C2om3uKR2ChJ8',
      meta: {
        description: 'Please pay 100 TBA to unlock the secret document',
        typeUrl: 'fg:t:transaction',
      },
      origin:
        'z2QWScqb9XdxVaJLgmGy3TdpTLv6LPcQiymQ3peovrJJcSDaThtmknASLa2pCLJDztrxzPmQSTKaW8kAxoEXVcDp4NjXch6kkrgC7CEv5ahWwNc8Qu7dL7xLYgan85VHmXFKoSBHAzCYqh5HJmfuYrNaw9LpTduzhurSs',
      sig:
        'z5ZqHCysMXx7FqD6yh3E6KeAeVh5He5R9zs18jGZiGhqwTrKBKTuWp5bE72JW1B4KfdGc5aWrUmQJWPLCTAUNDNDA',
      type: 'signature',
    };
    console.log('pay.claim', claim);

    const transferTx = auth.client.decodeTx(multibase.decode(claim.origin));
    console.log('pay.tx', transferTx);

    const did = 'did:abt:z1SdyB3A4Vt9c8u24TabwMTzGyYZEFX9iNX';
    const wallet = fromAddress(did);
    console.log('pay.wallet', wallet.toJSON());

    const sig = bytesToHex(multibase.decode(claim.sig));
    console.log('pay.sig', sig);

    const res = await auth.client.sendTransferTx({
      data: transferTx,
      wallet,
      signature: sig,
    });

    console.log('pay.send', res);
  } catch (err) {
    console.log(err);
  }
})();
