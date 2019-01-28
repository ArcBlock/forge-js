const EDDSA = require('elliptic').eddsa;
const randomBytes = require('randombytes');

const Signer = require('../protocols/signer');

const ed25519 = new EDDSA('ed25519');

// https://github.com/bitchan/eccrypto
class Ed25519Signer extends Signer {
  constructor() {
    super();
  }

  genKeyPair(size = 64) {
    return ed25519.keyFromSecret(randomBytes(size));
  }

  getPublicKey(privateKey) {
    return ed25519.keyFromSecret(privateKey).getPublic();
  }

  sign(data, privateKey) {
    return ed25519.keyFromSecret(privateKey).sign(data);
  }

  verify(hash, signature, publicKey) {
    return ed25519.keyFromPublic(publicKey).verify(hash, signature);
  }
}

module.exports = new Ed25519Signer();
