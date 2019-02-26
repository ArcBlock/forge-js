const ed25519 = require('tweetnacl').sign;
const randomBytes = require('randombytes');
const { bytesToHex, hexToBytes } = require('../util');

const Signer = require('../protocols/signer');

// https://github.com/bitchan/eccrypto
class Ed25519Signer extends Signer {
  constructor() {
    super();
  }

  toBytes(key) {
    let bytes = key;
    // FIXME: strict hex string check
    if (typeof key === 'string') {
      bytes = hexToBytes(key);
    }

    return Uint8Array.from(bytes);
  }

  genKeyPair(encoding) {
    const keyPair = ed25519.keyPair.fromSecretKey(Uint8Array.from(randomBytes(64)));
    if (encoding === 'hex') {
      keyPair.publicKey = bytesToHex(keyPair.publicKey);
      keyPair.secretKey = bytesToHex(keyPair.secretKey);
    }

    return keyPair;
  }

  getPublicKey(secretKey, encoding) {
    const secretBytes = this.toBytes(secretKey);
    // console.log('getPublicKey', { secretKey, secretBytes });
    const publicKey = ed25519.keyPair.fromSecretKey(secretBytes).publicKey;
    return encoding === 'hex' ? bytesToHex(publicKey) : publicKey;
  }

  // FIXME: support any message type here (ascii, utf8, hex, bytes)
  sign(message, secretKey, encoding) {
    const secretBytes = this.toBytes(secretKey);
    const messageBytes = this.toBytes(message);
    const signature = ed25519.detached(messageBytes, secretBytes);
    return encoding === 'hex' ? bytesToHex(signature) : signature;
  }

  verify(message, signature, publicKey) {
    const publicBytes = this.toBytes(publicKey);
    const messageBytes = this.toBytes(message);
    const signatureBytes = this.toBytes(signature);
    return ed25519.detached.verify(messageBytes, signatureBytes, publicBytes);
  }
}

module.exports = new Ed25519Signer();
