/**
 * @fileOverview signer implementation for ed25519, based on `tweetnacl`
 * @module @arcblock/mcrypto/signer/ed25519
 * @requires @arcblock/forge-util
 */
const ed25519 = require('tweetnacl').sign;
const randomBytes = require('randombytes');
const { toHex, isHexStrict, hexToBytes, bytesToHex } = require('@arcblock/forge-util');

const Signer = require('../protocols/signer');

/**
 * Ed25519 keyPair generating and sign/verify
 *
 * @class Ed25519Signer
 */
class Ed25519Signer extends Signer {
  constructor() {
    super();
  }

  toUint8Array(input) {
    let bytes = input;
    if (typeof input === 'string') {
      bytes = hexToBytes(this.toHex(input));
    }
    return Uint8Array.from(bytes);
  }

  toHex(input) {
    return (isHexStrict(input) ? input : toHex(input)).replace(/^0x/i, '');
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
   * @returns {KeyPair}
   */
  genKeyPair() {
    const seed = Uint8Array.from(randomBytes(32));
    const keyPair = ed25519.keyPair.fromSeed(seed);

    keyPair.publicKey = bytesToHex(keyPair.publicKey);
    keyPair.secretKey = bytesToHex(keyPair.secretKey);

    return keyPair;
  }

  /**
   * Get publicKey from secretKey
   *
   * @param {string|buffer} sk - can be either a hex encoded string or a buffer
   * @returns {string} hex encoded publicKey
   */
  getPublicKey(sk) {
    const skBytes = this.toUint8Array(sk);
    const pk = ed25519.keyPair.fromSecretKey(skBytes).publicKey;
    return bytesToHex(pk);
  }

  /**
   * Sign a message and get the signature hex
   *
   * @param {string|buffer} message
   * @param {string|buffer} sk
   * @returns {string} hex encoded signature
   */
  sign(message, sk) {
    const skBytes = this.toUint8Array(sk);
    const messageBytes = this.toUint8Array(message);
    // console.log('mcrypto.sign', { skBytes, sk, messageBytes, message });
    const signature = ed25519.detached(messageBytes, skBytes);
    return bytesToHex(signature);
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
    const pkBytes = this.toUint8Array(pk);
    const messageBytes = this.toUint8Array(message);
    const signatureBytes = this.toUint8Array(signature);
    return ed25519.detached.verify(messageBytes, signatureBytes, pkBytes);
  }
}

module.exports = new Ed25519Signer();
