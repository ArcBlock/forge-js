/* eslint-disable no-bitwise */
const hdkey = require('@wangshijun/hdkey');
const Mcrypto = require('@arcblock/mcrypto');
const { fromSecretKey } = require('@arcblock/forge-wallet');
const { isHexStrict, toHex, toBuffer, stripHexPrefix } = require('@arcblock/forge-util');

const { types } = Mcrypto;

/**
 * Gen user DID from app did and rootSk
 *
 * Spec: https://github.com/ArcBlock/ABT-DID-Protocol#request-did-authentication
 *
 * @public
 * @static
 * @param {string} appDid
 * @param {string} rootSk
 * @param {object} [type={}]
 * @param {number} [index=0]
 * @returns {object} ForgeWallet instance
 */
const fromAppDid = (appDid, rootSk, type = { role: types.RoleType.ROLE_ACCOUNT }, index = 0) => {
  if (!rootSk) {
    throw new Error('Cannot get user wallet with empty root sk');
  }

  const hash = Mcrypto.Hasher.SHA3.hash256(toBuffer(appDid));
  const hashSlice = stripHexPrefix(hash).slice(0, 16);
  const s1 = hashSlice.slice(0, 8);
  const s2 = hashSlice.slice(8, 16);

  const n1 = parseInt(Number(`0x${s1}`), 10) & 0x7fffffff;
  const n2 = parseInt(Number(`0x${s2}`), 10) & 0x7fffffff;

  const seedHex = stripHexPrefix(isHexStrict(rootSk) ? rootSk : toHex(rootSk));
  const master = hdkey.fromMasterSeed(Buffer.from(seedHex, 'hex'));
  const derivePath = `m/44'/260'/${n1}'/${n2}'/${index}`;
  const child = master.derive(derivePath);

  const { pk = types.KeyType.ED25519 } = type;
  let sk;
  if (pk === types.KeyType.ED25519) {
    const keyPair = Mcrypto.Signer.Ed25519.genKeyPair(child.privateKey);
    sk = keyPair.secretKey;
  } else {
    sk = child.privateKey;
  }

  return fromSecretKey(sk, type);
};

module.exports = { fromAppDid };
