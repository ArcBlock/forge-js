/* eslint-disable no-console */
const base64 = require('base64-url');
const { types } = require('@arcblock/mcrypto');
const { fromSecretKey, WalletType } = require('@arcblock/forge-wallet');
const { bytesToHex, isHexStrict } = require('@arcblock/forge-util');
const GraphqlClient = require('@arcblock/graphql-client');

const endpoint = process.env.FORGE_API_HOST || 'http://127.0.0.1:8210'; // testnet
const client = new GraphqlClient(`${endpoint}/api`);

const type = WalletType({
  role: types.RoleType.ROLE_ACCOUNT,
  pk: types.KeyType.ED25519,
  hash: types.HashType.SHA3,
});

function ensureModeratorSecretKey() {
  const sk = process.env.FORGE_MODERATOR_SK;
  if (!sk) {
    console.error('please set FORGE_MODERATOR_SK to continue');
    process.exit(1);
  }

  if (isHexStrict(sk)) {
    return sk;
  }

  // debug('detected base64 moderator sk', base64.unescape(sk));
  return bytesToHex(Buffer.from(base64.unescape(sk), 'base64'));
}

(async () => {
  const sk = ensureModeratorSecretKey();
  const moderator = fromSecretKey(sk, type);
  console.log(`moderator wallet ${JSON.stringify(moderator.toJSON())}`);
  console.log(`moderator address ${moderator.toAddress()}`);
  const hash = await client.sendDeclareTx({
    tx: {
      itx: { moniker: 'moderator' },
    },
    wallet: moderator,
  });
  console.log(`moderator declare hash ${hash}`);
})();
