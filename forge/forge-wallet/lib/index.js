/**
 * @fileOverview This module wraps common utility functions to help developers manipulate crypto wallets
 * @module @arcblock/forge-wallet
 * @requires @arcblock/mcrypto
 * @requires @arcblock/did
 * @example
 * yarn add @arcblock/forge-wallet
 */
const upperFirst = require('lodash.upperfirst');
const { types, getSigner, getHasher } = require('@arcblock/mcrypto');
const { toAddress, fromPublicKey: DIDFromPublicKey, toTypeInfo } = require('@arcblock/did');

const mapping = {
  pk: 'key',
  address: 'encoding',
};

const defaultWalletType = {
  pk: types.KeyType.ED25519,
  role: types.RoleType.ROLE_ACCOUNT,
  hash: types.HashType.SHA3,
};

/**
 * The structure of a forge wallet type
 *
 * @public
 * @static
 * @global
 * @typedef {Object} WalletTypeObject
 * @prop {number} role - Enum field to identify wallet role type
 * @prop {number} pk - Crypto algorithm to derive publicKey from the secretKey
 * @prop {number} hash - Hash algorithm used to hash data before sign them
 */

/**
 * Create an wallet type object that be used as param to create a new wallet
 *
 * @public
 * @static
 * @param {WalletTypeObject} [type=defaultWalletType]
 * @returns {object}
 * @example
 * const assert = require('assert');
 * const { WalletType } = require('@arcblock/forge-wallet');
 * const { types } = require('@arcblock/mcrypto');
 *
 * const type = WalletType({
 *   role: types.RoleType.ROLE_APPLICATION,
 *   pk: types.KeyType.ED25519,
 *   hash: types.HashType.SHA3,
 * });
 */
function WalletType(type = defaultWalletType) {
  const { role, pk, hash } = Object.assign({}, defaultWalletType, type);
  Object.keys(type).forEach(x => {
    const key = upperFirst(`${mapping[x] || x}Type`);
    if (Object.values(types[key]).includes(type[x]) === false) {
      throw new Error(`Unsupported ${x} type: ${type[x]}`);
    }
  });

  return { role, pk, hash, address: types.EncodingType.BASE58 };
}

WalletType.toJSON = type =>
  Object.keys(type).reduce((acc, x) => {
    const key = upperFirst(`${mapping[x] || x}Type`);
    const typeStr = Object.keys(types[key]);
    const typeValues = Object.values(types[key]);
    acc[x] = typeStr[typeValues.indexOf(type[x])];
    return acc;
  }, {});

WalletType.fromJSON = json =>
  Object.keys(json).reduce((acc, x) => {
    const key = upperFirst(`${mapping[x] || x}Type`);
    const typeStr = Object.keys(types[key]);
    const typeValues = Object.values(types[key]);
    acc[x] = typeValues[typeStr.indexOf(json[x])];
    return acc;
  }, {});

/**
 * @public
 * @static
 * @global
 * @name WalletObject
 * @typedef WalletObject
 * @prop {WalletTypeObject} type - Indicates the wallet type
 * @prop {secretKey} secretKey - Wallet secretKey
 * @prop {publicKey} publicKey - Wallet publicKey
 * @prop {function} sign - Sign `data`, data is hashed using the `HashType` defined in type before signing
 * @prop {function} verify - Verify `signature`, data is hashed using the `HashType` defined in type before verifying
 * @prop {function} toAddress - Get wallet address without `did:abt:` prefix
 * @prop {function} toJSON - Serialize wallet to json object, checkout {@link fromJSON} for deserialisation
 */

/**
 * Generate an wallet instance that can be used to sign a message or verify a signature
 *
 * @public
 * @static
 * @param {object} keyPair - the key pair
 * @param {string} keyPair.sk - the secretKey
 * @param {string} keyPair.pk - the wallet publicKey
 * @param {WalletTypeObject} [type=defaultWalletType] - wallet type
 * @returns {WalletObject} wallet object that can be used to sign/verify/getAddress
 */
function Wallet(keyPair, type = defaultWalletType) {
  const signer = getSigner(type.pk);
  const hasher = getHasher(type.hash);

  return {
    type,
    secretKey: keyPair.sk,
    publicKey: keyPair.pk,

    sign(data) {
      if (!keyPair.sk) {
        throw new Error('Cannot sign data without a secretKey');
      }
      const hash = hasher(data, 1);
      // console.log('sign.hash', hash.replace(/^0x/i, '').toUpperCase());
      return signer.sign(hash, keyPair.sk);
    },
    verify(data, signature, hashBeforeVerify = true) {
      if (!keyPair.pk) {
        throw new Error('Cannot verify data without a publicKey');
      }
      const hash = hashBeforeVerify ? hasher(data, 1) : data;
      // console.log('verify.hash', hash.replace(/^0x/i, '').toUpperCase());
      return signer.verify(hash, signature, keyPair.pk);
    },
    toAddress() {
      return keyPair.pk ? DIDFromPublicKey(keyPair.pk, type) : keyPair.address;
    },
    toJSON() {
      return {
        type: WalletType.toJSON(type),
        sk: keyPair.sk,
        pk: keyPair.pk,
        address: this.toAddress(),
      };
    },
  };
}

/**
 * Generate a wallet from secretKey
 *
 * @public
 * @static
 * @param {string} sk - the secret key, `hex encoded string`
 * @param {WalletTypeObject} [type=defaultWalletType] - wallet type
 * @returns {WalletObject} wallet object that can be used to sign/verify/getAddress
 * @example
 * const assert = require('assert');
 * const { fromSecretKey } = require('@arcblock/forge-wallet');
 *
 * const sk =
 *   '0xD67C071B6F51D2B61180B9B1AA9BE0DD0704619F0E30453AB4A592B036EDE644E4852B7091317E3622068E62A5127D1FB0D4AE2FC50213295E10652D2F0ABFC7';
 * const sig =
 *   '0x08a102851c38c072e42756c1cc70938b5499c8e9358dfe5f383823f56cdb282ffda60fcd581a02c6c673069e5afc0bf09abbe3639b61b84d64fd58ef9f083003';
 *
 * const wallet = fromSecretKey(sk, type);
 * const message = 'data to sign';
 * const signature = wallet.sign(message);
 * assert.equal(signature, sig, "signature should match");
 * assert.ok(wallet.verify(message, signature), "signature should be verified");
 */
function fromSecretKey(sk, _type = defaultWalletType) {
  const type = WalletType(_type);
  const keyPair = { sk, pk: getSigner(type.pk).getPublicKey(sk) };
  return Wallet(keyPair, type);
}

/**
 * Generate a wallet from publicKey
 *
 * @public
 * @static
 * @param {string} pk - the public key, `hex encoded string`
 * @param {WalletTypeObject} [type=defaultWalletType] - wallet type
 * @returns {WalletObject} wallet object that can be used to sign/verify/getAddress
 */
function fromPublicKey(pk, _type = defaultWalletType) {
  return Wallet({ pk }, WalletType(_type));
}

/**
 * Generate a wallet from address (did)
 *
 * Since we do not know the publicKey and secretKey, this kind of wallet cannot be used for signing and verifying
 *
 * @public
 * @static
 * @param {string} address - the wallet address
 * @returns {WalletObject} wallet object that can be used to sign/verify/getAddress
 * @example
 * const assert = require('assert');
 * const { fromAddress } = require('@arcblock/forge-wallet');
 *
 * const address = 'zNKtCNqYWLYWYW3gWRA1vnRykfCBZYHZvzKr';
 * const wallet = fromAddress(address);
 * console.log(wallet.toJSON());
 */
function fromAddress(address) {
  return Wallet({ address: toAddress(address) }, WalletType(toTypeInfo(address)));
}

/**
 * Generate a wallet by generating a random secretKey
 *
 * @public
 * @static
 * @param {WalletTypeObject} [type=defaultWalletType] - wallet type
 * @returns {WalletObject} wallet object that can be used to sign/verify/getAddress
 * @example
 * const { fromRandom } = require('@arcblock/forge-wallet');
 * const wallet = fromRandom();
 * // Do something with wallet
 */
function fromRandom(_type = defaultWalletType) {
  const type = WalletType(_type);
  const signer = getSigner(type.pk);
  const keyPair = signer.genKeyPair();
  return Wallet({ sk: keyPair.secretKey, pk: keyPair.publicKey }, type);
}

/**
 * Generating a wallet from a serialized json presentation of another wallet
 *
 * @public
 * @static
 * @param {object} json - json presentation of a wallet
 * @returns {WalletObject} wallet object that can be used to sign/verify/getAddress
 * @example
 * const { fromJSON, fromRandom } = require('@arcblock/forge-wallet');
 * const wallet = fromRandom();
 * const wallet2 = fromJSON(wallet.toJSON());
 * // wallet2 is identical to wallet
 */
function fromJSON(json) {
  const type = WalletType.fromJSON(json.type);
  return Wallet(json, type);
}

/**
 * Check if an object is valid wallet object
 *
 * @public
 * @static
 * @param {object} wallet
 * @param {boolean} canSign - should the wallet support sign
 */
function isValid(wallet, canSign = true) {
  if (!wallet || typeof wallet !== 'object') {
    return false;
  }

  if (typeof wallet.verify !== 'function') {
    return false;
  }

  if (typeof wallet.toAddress !== 'function') {
    return false;
  }

  if (typeof wallet.toJSON !== 'function') {
    return false;
  }

  if (!wallet.type || !wallet.publicKey) {
    return false;
  }

  if (canSign) {
    if (!wallet.secretKey) {
      return false;
    }
    if (typeof wallet.sign !== 'function') {
      return false;
    }
  }

  return true;
}

module.exports = {
  fromSecretKey,
  fromPublicKey,
  fromRandom,
  fromAddress,
  fromDID: fromAddress,
  fromJSON,
  isValid,
  Wallet,
  WalletType,
};
