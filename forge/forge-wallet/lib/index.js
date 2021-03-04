/**
 * @fileOverview This module wraps common utility functions to help developers manipulate crypto wallets
 * @module @arcblock/forge-wallet
 * @requires @arcblock/mcrypto
 * @requires @arcblock/did
 * @example
 * yarn add @arcblock/forge-wallet
 */
const { getSigner, getHasher } = require('@arcblock/mcrypto');
const { toAddress, fromPublicKey: DIDFromPublicKey, toTypeInfo, DidType } = require('@arcblock/did');

/**
 * @public
 * @static
 * @global
 * @name WalletObject
 * @typedef WalletObject
 * @prop {DidType} type - Indicates the wallet type
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
 * @param {DidType} [type='default'] - wallet type
 * @returns {WalletObject} wallet object that can be used to sign/verify/getAddress
 */
function Wallet(keyPair, type = 'default') {
  const signer = getSigner(type.pk);
  const hasher = getHasher(type.hash);

  return {
    type,
    secretKey: keyPair.sk,
    publicKey: keyPair.pk,

    hash(data, round = 1) {
      return hasher(data, round);
    },
    sign(data, hashBeforeSign = true) {
      if (!keyPair.sk) {
        throw new Error('Cannot sign data without a secretKey');
      }

      if (hashBeforeSign) {
        const hash = hasher(data, 1);
        // console.log('sign.hash', hash.replace(/^0x/i, '').toUpperCase());
        return signer.sign(hash, keyPair.sk);
      }

      return signer.sign(data, keyPair.sk);
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
        type: DidType.toJSON(type),
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
 * @param {DidType} [type='default'] - wallet type
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
function fromSecretKey(sk, _type = 'default') {
  const type = DidType(_type);
  const keyPair = { sk, pk: getSigner(type.pk).getPublicKey(sk) };
  return Wallet(keyPair, type);
}

/**
 * Generate a wallet from publicKey
 *
 * @public
 * @static
 * @param {string} pk - the public key, `hex encoded string`
 * @param {DidType} [type='default'] - wallet type
 * @returns {WalletObject} wallet object that can be used to sign/verify/getAddress
 */
function fromPublicKey(pk, _type = 'default') {
  return Wallet({ pk }, DidType(_type));
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
  return Wallet({ address: toAddress(address) }, DidType(toTypeInfo(address)));
}

/**
 * Generate a wallet by generating a random secretKey
 *
 * @public
 * @static
 * @param {DidType} [type='default'] - wallet type
 * @returns {WalletObject} wallet object that can be used to sign/verify/getAddress
 * @example
 * const { fromRandom } = require('@arcblock/forge-wallet');
 * const wallet = fromRandom();
 * // Do something with wallet
 */
function fromRandom(_type = 'default') {
  const type = DidType(_type);
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
  const type = DidType.fromJSON(json.type);
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
  WalletType: DidType,
  DidType,
};
