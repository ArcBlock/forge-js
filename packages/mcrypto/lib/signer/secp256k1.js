const EC = require('elliptic').ec;
const { isHexStrict } = require('@arcblock/forge-util');
const Signer = require('../protocols/signer');

const secp256k1 = new EC('secp256k1');

class Secp256k1Signer extends Signer {
  constructor() {
    super();
  }

  strip0x(input) {
    return isHexStrict(input) ? input.replace(/^0x/i, '') : input;
  }

  genKeyPair(compressed = false, encoding = 'hex') {
    const keyPair = secp256k1.genKeyPair();
    const sk = keyPair.getPrivate(encoding);
    const pk = keyPair.getPublic(compressed, encoding);
    if (encoding === 'hex') {
      return { secretKey: `0x${sk}`, publicKey: `0x${pk}` };
    }

    return { secretKey: sk, publicKey: pk };
  }

  getPublicKey(sk, compressed = false, encoding = 'hex') {
    const pk = secp256k1.keyFromPrivate(this.strip0x(sk), encoding).getPublic(compressed, encoding);
    return `0x${pk}`;
  }

  sign(message, sk, encoding = 'hex') {
    return secp256k1
      .keyFromPrivate(this.strip0x(sk), encoding)
      .sign(this.strip0x(message))
      .toDER(encoding);
  }

  verify(message, signature, pk, encoding = 'hex') {
    return secp256k1
      .keyFromPublic(this.strip0x(pk), encoding)
      .verify(this.strip0x(message), signature);
  }
}

module.exports = new Secp256k1Signer();
