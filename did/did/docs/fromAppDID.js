const Mcrypto = require('@arcblock/mcrypto');
const hdkey = require('hdkey');
const { toHex, stripHexPrefix } = require('@arcblock/forge-util');
const { toBN, isHexStrict } = require('@arcblock/forge-util');
const { isValid, fromSecretKey } = require('../lib/index');
const { toBits, toBytes } = require('../lib/util');
const { types } = Mcrypto;

/**
 * Gen DID from appDID and seed
 *
 * Spec: https://github.com/ArcBlock/ABT-DID-Protocol#request-did-authentication
 *
 * @public
 * @static
 * @param {string} appDID
 * @param {string} seed
 * @param {object} [type={}]
 * @param {number} [index=0]
 * @returns {string} DID string
 */
const fromAppDID = (appDID, seed, type = {}, index = 0) => {
  if (!isValid(appDID)) {
    return null;
  }

  const hash = Mcrypto.Hasher.SHA3.hash256(toBytes(appDID));
  const hashSlice = stripHexPrefix(hash).slice(0, 16);
  const s1 = hashSlice.slice(0, 8);
  const s2 = hashSlice.slice(8, 16);

  // We have to ensure the number parsed from s1, s2 to be a valid index
  const b1 = toBits(toBN(s1).toTwos(), 8, '0').split('');
  const b2 = toBits(toBN(s2).toTwos(), 8, '0').split('');
  // set highest bit to zero, since s1 and s2 are 32 bits long
  b1[0] = 0;
  b2[0] = 0;

  const n1 = parseInt(b1.join(''), 2);
  const n2 = parseInt(b2.join(''), 2);

  const seedHex = stripHexPrefix(isHexStrict(seed) ? seed : toHex(seed));
  const master = hdkey.fromMasterSeed(Buffer.from(seedHex, 'hex'));
  const derivePath = `m/44'/260'/${n1}'/${n2}'/${index}`;
  const child = master.derive(derivePath);

  const { pk = types.KeyType.ED25519 } = type;
  let sk;
  if (pk === types.KeyType.ED25519) {
    // HACK: because tweetnacl requires a 64 byte sk
    sk = Buffer.concat([child.privateKey, child.chainCode]);
  } else {
    sk = child.privateKey;
  }

  return fromSecretKey(sk, type);
};

module.exports = { fromAppDID };
