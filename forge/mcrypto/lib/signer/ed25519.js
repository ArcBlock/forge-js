/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
const ed25519 = require('tweetnacl').sign;
const randomBytes = require('randombytes');
const { toUint8Array } = require('@arcblock/forge-util');

const Signer = require('../protocols/signer');
const encode = require('../encode');

/**
 * Signer implementation for ed25519, based on `tweetnacl`
 *
 * @class Ed25519Signer
 */
class Ed25519Signer extends Signer {
  constructor() {
    super();
  }

  /**
   * @public
   * @typedef KeyPair
   * @prop {string} publicKey - publicKey in hex format
   * @prop {string} secretKey - secretKey in hex format
   * @memberof Ed25519Signer
   */

  /**
   * Generate random secret/public key pair
   *
   * @param {Buffer|Uint8Array} [userSeed=undefined]
   * @param {string} [encoding='hex']
   * @returns {KeyPair}
   * @memberof Ed25519Signer
   */
  genKeyPair(userSeed, encoding = 'hex') {
    const seed = userSeed ? toUint8Array(userSeed) : Uint8Array.from(randomBytes(32));
    if (seed.byteLength !== 32) {
      throw new Error('Invalid seed to generate key pair');
    }

    const keyPair = ed25519.keyPair.fromSeed(seed);

    keyPair.publicKey = encode(keyPair.publicKey, encoding);
    keyPair.secretKey = encode(keyPair.secretKey, encoding);

    return keyPair;
  }

  /**
   * Get publicKey from secretKey
   *
   * @param {hex|buffer|base58|Uint8Array} sk - can be either a hex encoded string or a buffer
   * @returns {string} hex encoded publicKey
   */
  getPublicKey(sk, encoding = 'hex') {
    const skBytes = toUint8Array(sk);
    const pk = ed25519.keyPair.fromSecretKey(skBytes).publicKey;
    return encode(pk, encoding);
  }

  /**
   * Sign a message and get the signature hex
   *
   * @param {hex|base58|buffer|Uint8Array} message
   * @param {hex|base58|buffer|Uint8Array} sk
   * @returns {string} hex encoded signature
   */
  sign(message, sk, encoding = 'hex') {
    const skBytes = toUint8Array(sk);
    const messageBytes = toUint8Array(message);
    const signature = ed25519.detached(messageBytes, skBytes);
    return encode(signature, encoding);
  }

  /**
   * Verify if a signature is valid
   *
   * @param {string|buffer} message
   * @param {string|buffer} signature
   * @param {string|buffer} pk
   * @returns {bool}
   */
  verify(message, signature, pk) {
    const pkBytes = toUint8Array(pk);
    const messageBytes = toUint8Array(message);
    const signatureBytes = toUint8Array(signature);
    return ed25519.detached.verify(messageBytes, signatureBytes, pkBytes);
  }
}

module.exports = new Ed25519Signer();
module.exports.Ed25519Signer = Ed25519Signer;
