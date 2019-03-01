const padStart = require('lodash/padStart');
const { toBN, toHex, numberToHex, isHexStrict } = require('@arcblock/forge-util');
const mcrypto = require('@arcblock/mcrypto');
const multibase = require('multibase');
const hdkey = require('hdkey');

const enums = Object.freeze({
  KeyType: {
    ED25519: 0,
    SECP256K1: 1,
  },
  HashType: {
    KECCAK: 0,
    SHA3: 1,
    KECCAK_384: 6,
    SHA3_384: 7,
    KECCAK_512: 13,
    SHA3_512: 14,
  },
  RoleType: {
    ROLE_ACCOUNT: 0,
    ROLE_NODE: 1,
    ROLE_DEVICE: 2,
    ROLE_APPLICATION: 3,
    ROLE_SMART_CONTRACT: 4,
    ROLE_BOT: 5,
    ROLE_ASSET: 6,
    ROLE_STAKE: 7,
    ROLE_VALIDATOR: 8,
  },
});

const signer = Object.freeze({
  [enums.KeyType.ED25519]: mcrypto.signer.ed25519,
  [enums.KeyType.SECP256K1]: mcrypto.signer.secp256k1,
});

const hasher = Object.freeze({
  [enums.HashType.KECCAK]: mcrypto.hasher.keccak.sha256,
  [enums.HashType.KECCAK_384]: mcrypto.hasher.keccak.sha384,
  [enums.HashType.KECCAK_512]: mcrypto.hasher.keccak.sha512,
  [enums.HashType.SHA3]: mcrypto.hasher.sha3.sha256,
  [enums.HashType.SHA3_384]: mcrypto.hasher.sha3.sha384,
  [enums.HashType.SHA3_512]: mcrypto.hasher.sha3.sha512,
});

const toBinary = (decimal, length) => padStart(toBN(decimal).toString(2), length, '0');

// Implementation: https://github.com/ArcBlock/ABT-DID-Protocol#request-did-authentication
const fromAppDID = (appDID, seed, types = {}, index = 0) => {
  const hash = mcrypto.hasher.sha3.sha256(multibase.decode(appDID));
  const hashSlice = hash.slice(0, 16);
  const s1 = hashSlice.slice(0, 8);
  const s2 = hashSlice.slice(8, 16);

  // We have to ensure the number parsed from s1, s2 to be a valid index
  const b1 = toBinary(toBN(s1).toTwos(), 8, '0').split('');
  const b2 = toBinary(toBN(s2).toTwos(), 8, '0').split('');
  if (b1[0] === '1') {
    b1[0] = 0;
  }
  if (b2[0] === '1') {
    b2[0] = 0;
  }

  const n1 = parseInt(b1.join(''), 2);
  const n2 = parseInt(b2.join(''), 2);

  const seedHex = (isHexStrict(seed) ? seed : toHex(seed)).replace(/^0x/i, '');
  const master = hdkey.fromMasterSeed(Buffer.from(seedHex, 'hex'));
  const derivePath = `m/44'/260'/${n1}'/${n2}'/${index}`;
  const child = master.derive(derivePath);

  const { keyType = enums.KeyType.ED25519 } = types;
  let sk;
  if (keyType === enums.KeyType.ED25519) {
    // HACK: because tweetnacl requires a 64 byte sk
    sk = Buffer.concat([child.privateKey, child.chainCode]);
  } else {
    sk = child.privateKey;
  }

  return fromSecretKey(sk, types);
};

// Implementation: https://github.com/ArcBlock/ABT-DID-Protocol#create-did
const fromSecretKey = (sk, types) => {
  const { keyType = enums.KeyType.ED25519 } = types || {};
  const pk = signer[keyType].getPublicKey(sk);
  return fromPublicKey(pk, types);
};

const fromPublicKey = (pk, types) => {
  const {
    keyType = enums.KeyType.ED25519,
    hashType = enums.HashType.SHA3,
    roleType = enums.RoleType.ROLE_ACCOUNT,
  } = types || {};

  const prefix = `${toBinary(roleType, 6)}${toBinary(keyType, 5)}${toBinary(hashType, 5)}`;
  let prefixHex = numberToHex(parseInt(prefix, 2)).replace(/^0x/i, '');
  if (prefixHex.length % 2 !== 0) {
    prefixHex = `0${prefixHex}`;
  }

  const pkHash = hasher[hashType](pk);

  const checksum = hasher[hashType](`0x${prefixHex}${pkHash.slice(0, 40)}`).slice(0, 8);
  const didHash = `${prefixHex}${pkHash.slice(0, 40)}${checksum}`;

  const address = multibase.encode('base58btc', Buffer.from(didHash, 'hex'));
  return address.toString();
};

module.exports = {
  types: enums,
  fromAppDID,
  fromSecretKey,
  fromPublicKey,
};
