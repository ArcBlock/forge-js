// const sha2 = require('./lib/hasher/sha2');
// const sha3 = require('./lib/hasher/sha3');
// const keccakf1600 = require('./lib/hasher/keccakf1600');
const aes = require('./lib/crypter/aes');
// const secp256k1 = require('./lib/signer/secp256k1');
// const ed25519 = require('./lib/signer/ed25519');
const EC = require('elliptic').ec;
const EDDSA = require('elliptic').eddsa;
const randomBytes = require('randombytes');
const secp256k1 = new EC('secp256k1');
const ed25519 = new EDDSA('ed25519');

const message = 'abcd';
const secret = '1234';

// Hasher
(() => {
  // const outputLengths = [224, 256, 384, 512];
  // outputLengths.forEach(x => {
  //   console.log('sha2', x, sha2[`sha${x}`](message));
  // });
  // outputLengths.forEach(x => {
  //   console.log('sha3', x, sha3[`sha${x}`](message));
  // });
  // outputLengths.forEach(x => {
  //   console.log('keccakf1600', x, keccakf1600[`sha${x}`](message));
  // });
})();

console.log('-'.repeat(80));

// AES
(() => {
  const cipher = aes.encrypt(message, secret);
  const cipherHex = Buffer.from(cipher, 'base64')
    .toString('hex')
    .toUpperCase();
  const cipherIvHex = cipherHex.slice(0, 32);
  const cipherMsgHex = cipherHex.slice(32);
  console.log('aes.message', message);
  console.log('aes.encrypted', cipher);
  console.log('aes.encrypted.hex', cipherHex);
  console.log('aes.encrypted.hex.iv', cipherIvHex, cipherIvHex.length);
  console.log('aes.encrypted.hex.msg', cipherMsgHex, cipherMsgHex.length);
  console.log('aes.encrypted.b64.iv', Buffer.from(cipherIvHex, 'hex').toString('base64'));
  console.log('aes.encrypted.b64.msg', Buffer.from(cipherMsgHex, 'hex').toString('base64'));
  console.log('aes.decrypted', aes.decrypt(cipher, secret));
})();

console.log('-'.repeat(80));

// SECP256K1
(() => {
  // const keyPair = secp256k1.genKeyPair();
  // console.log(keyPair);
  // console.log(keyPair.getPublic(false, 'hex'));
  // const privateKey =
  //   '040BB47955B924810FC70919D438F4ABBB76C2F687DF7B16691A6C971E2A3584F6B31EDA1FFB2DE3F818569DB0CEEADC1DE049784A9B1ADA51665BAEAF08C09863';
  // const privateKey = '03F079F605C4019FBCE1D5BADC310895EB4EBE1A5650F7FD1F65890D97D5075AB9';
  // console.log(secp256k1.getPublicKey(privateKey.toLowerCase()));
  // console.log(privateKey.toLowerCase());
  // console.log(secp256k1.keyFromPrivate(privateKey.toLowerCase(), 'hex').getPublic(true, 'hex'));
})();

console.log('-'.repeat(80));

// ED25519
// https://github.com/indutny/elliptic/blob/master/lib/elliptic/eddsa/index.js
(() => {
  const debugKeyPair = keyPair => {
    console.log('PRI.V', keyPair.priv());
    console.log('PUB.V', keyPair.pub());
    // console.log('HAS.V', keyPair.hash());
    console.log('PRI.BYTES', keyPair.privBytes().toString());
    console.log('PUB.BYTES', keyPair.pubBytes().toString());
    console.log('PRI.HEX', Buffer.from(keyPair.privBytes()).toString('hex'));
    console.log('PUB.HEX', Buffer.from(keyPair.pubBytes()).toString('hex'));
  };

  const secretKey = randomBytes(64);
  const keyPair = ed25519.keyFromSecret(secretKey);
  // const keyPair = ed25519.keyFromSecret(secretKey.toString('hex'));
  console.log(secretKey.toString('hex').toUpperCase());
  console.log(keyPair.getPublic('hex').toUpperCase());
  debugKeyPair(keyPair);
  return;
  // const privateKey = '3CFC222CA96DFE0ED32011B5F5C4FE94C2BA00123931018722A613E9EC96E0E1722F492E240C5B0C71E4D20CA2FB4A4A4C349C2B5750CBD77608F7F069CCEF91';
  // const keyPair = ed25519.keyFromSecret(privateKey.toLowerCase());
  // console.log('PRI', privateKey);
  // console.log('PUB', keyPair.getPublic('hex'));
  // debugKeyPair(keyPair);

  // console.log('SIG', keyPair.sign('1234').toHex());

  // console.log(privateKey.toLowerCase());
  // console.log(secp256k1.keyFromPrivate(privateKey.toLowerCase(), 'hex').getPublic(true, 'hex'));
})();

// { pk, sk } = Mcrypto.keypair(%Mcrypto.Signer.Ed25519{})
// Mcrypto.sign!(%Mcrypto.Signer.Ed25519{}, "1234", sk) |> Base.encode16
// sk |> Base.encode16
