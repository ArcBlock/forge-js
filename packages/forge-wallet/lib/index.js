/**
 * @fileOverview This module wraps common utility functions to help developers manipulate crypto wallets
 * @module @arcblock/forge-wallet
 * @requires @arcblock/mcrypto
 * @requires @arcblock/abt-did
 */
const upperFirst = require('lodash/upperFirst');
const { types, getSigner, getHasher } = require('@arcblock/mcrypto');
const { toAddress, fromPublicKey: DIDFromPublicKey, toTypeInfo } = require('@arcblock/abt-did');

const mapping = {
  pk: 'key',
  address: 'encoding',
};

/**
 * The structure of a forge wallet type
 *
 * @public
 * @typedef {Object} walletType
 * @prop {number} role - Enum field to identify wallet role type
 * @prop {number} pk - Crypto algorithm to derive publicKey from the secretKey
 * @prop {number} hash - Hash algorithm used to hash data before sign them
 */

/**
 * Create an wallet type object that be used as param to create a new wallet
 *
 * @public
 * @param {...walletType} type
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
function WalletType(type) {
  const { role, pk, hash } = type;
  Object.keys(type).forEach(x => {
    const key = upperFirst(`${mapping[x] || x}Type`);
    if (Object.values(types[key]).includes(type[x]) === false) {
      throw new Error(`Unsupported ${x} type: ${type[x]}`);
    }
  });

  return { role, pk, hash, address: types.EncodingType.BASE58 };
}

WalletType.toJSON = type => {
  return Object.keys(type).reduce((acc, x) => {
    const key = upperFirst(`${mapping[x] || x}Type`);
    const typeStr = Object.keys(types[key]);
    const typeValues = Object.values(types[key]);
    acc[x] = typeStr[typeValues.indexOf(type[x])];
    return acc;
  }, {});
};

WalletType.fromJSON = json => {
  return Object.keys(json).reduce((acc, x) => {
    const key = upperFirst(`${mapping[x] || x}Type`);
    const typeStr = Object.keys(types[key]);
    const typeValues = Object.values(types[key]);
    acc[x] = typeValues[typeStr.indexOf(json[x])];
    return acc;
  }, {});
};

/**
 * Generate an wallet instance that can be used to sign a message or verify a signature
 *
 * @public
 * @param {object} keyPair - the key pair
 * @param {string} keyPair.sk - the secretKey
 * @param {string} keyPair.pk - the wallet publicKey
 * @param {...walletType} type - wallet type
 * @returns {object} generated wallet instance
 */
function Wallet(keyPair, type) {
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
      const hash = hasher(data);
      // console.log('sign.hash', hash.replace(/^0x/i, '').toUpperCase());
      return signer.sign(hash, keyPair.sk);
    },
    verify(data, signature) {
      if (!keyPair.pk) {
        throw new Error('Cannot verify data without a publicKey');
      }
      const hash = hasher(data);
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
 * @param {string} sk - the secret key, `hex encoded string`
 * @param {...walletType} type - wallet type
 * @returns {object} wallet instance
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
function fromSecretKey(sk, _type) {
  const type = WalletType(_type);
  const keyPair = { sk, pk: getSigner(type.pk).getPublicKey(sk) };
  return Wallet(keyPair, type);
}

/**
 * Generate a wallet from publicKey
 *
 * @public
 * @param {string} pk - the public key, `hex encoded string`
 * @param {...walletType} type - wallet type
 * @returns {object} wallet instance
 */
function fromPublicKey(pk, _type) {
  return Wallet({ pk }, WalletType(_type));
}

/**
 * Generate a wallet from address (did)
 *
 * Since we do not know the publicKey and secretKey, this kind of wallet cannot be used for signing and verifying
 *
 * @public
 * @param {string} address - the wallet address
 * @returns wallet instance
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
 * @param {...walletType} type - wallet type
 * @returns {object} wallet instance
 * @example
 * const { fromRandom } = require('@arcblock/forge-wallet');
 * const wallet = fromRandom(type);
 * // Do something with wallet
 */
function fromRandom(_type) {
  const type = WalletType(_type);
  const signer = getSigner(type.pk);
  const keyPair = signer.genKeyPair();
  return Wallet({ sk: keyPair.secretKey, pk: keyPair.publicKey }, type);
}

/**
 * Generating a wallet from a serialized json presentation of another wallet
 *
 * @param {object} json
 * @returns wallet instance
 * const { fromJSON } = require('@arcblock/forge-wallet');
 * const wallet2 = fromJSON(wallet.toJSON());
 * // wallet2 is identical to wallet
 */
function fromJSON(json) {
  const type = WalletType.fromJSON(json.type);
  return Wallet(json, type);
}

module.exports = {
  fromSecretKey,
  fromPublicKey,
  fromRandom,
  fromAddress,
  fromDID: fromAddress,
  fromJSON,
  Wallet,
  WalletType,
};
