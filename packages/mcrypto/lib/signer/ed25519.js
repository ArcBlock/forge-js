const ed25519 = require('tweetnacl').sign;
const randomBytes = require('randombytes');
const { toHex, isHex, hexToBytes, bytesToHex } = require('@arcblock/forge-util');

const Signer = require('../protocols/signer');

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
    return (isHex(input) ? input : toHex(input)).replace(/^0x/i, '');
  }

  genKeyPair(encoding = 'hex') {
    const keyPair = ed25519.keyPair.fromSecretKey(Uint8Array.from(randomBytes(64)));
    if (encoding === 'hex') {
      keyPair.publicKey = bytesToHex(keyPair.publicKey);
      keyPair.secretKey = bytesToHex(keyPair.secretKey);
    }

    return keyPair;
  }

  getPublicKey(secretKey, encoding = 'hex') {
    const secretBytes = this.toUint8Array(secretKey);
    const publicKey = ed25519.keyPair.fromSecretKey(secretBytes).publicKey;
    return encoding === 'hex' ? bytesToHex(publicKey) : publicKey;
  }

  sign(message, secretKey, encoding = 'hex') {
    const secretBytes = this.toUint8Array(secretKey);
    const messageBytes = this.toUint8Array(message);
    const signature = ed25519.detached(messageBytes, secretBytes);
    return encoding === 'hex' ? bytesToHex(signature) : signature;
  }

  verify(message, signature, publicKey) {
    const publicBytes = this.toUint8Array(publicKey);
    const messageBytes = this.toUint8Array(message);
    const signatureBytes = this.toUint8Array(signature);
    return ed25519.detached.verify(messageBytes, signatureBytes, publicBytes);
  }
}

module.exports = new Ed25519Signer();
