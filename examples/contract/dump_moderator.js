/* eslint-disable no-console */
const base64 = require('base64-url');
const { types } = require('@arcblock/mcrypto');
const { fromSecretKey, WalletType } = require('@arcblock/forge-wallet');
const { bytesToHex, hexToBytes, isHexStrict } = require('@arcblock/forge-util');

const type = WalletType({
  role: types.RoleType.ROLE_ACCOUNT,
  pk: types.KeyType.ED25519,
  hash: types.HashType.SHA3,
});

function ensureModeratorSecretKey() {
  const sk = process.env.FORGE_MODERATOR_SK;
  if (!sk) {
    process.exit(1);
  }

  if (isHexStrict(sk)) {
    return sk;
  }

  return bytesToHex(Buffer.from(base64.unescape(sk), 'base64'));
}

const sk = ensureModeratorSecretKey();
const moderator = fromSecretKey(sk, type);
const json = moderator.toJSON();

console.log(`moderator wallet ${JSON.stringify(json)}`);
console.log(`moderator pk base64: ${base64.escape(base64.encode(hexToBytes(json.pk)))}`);
