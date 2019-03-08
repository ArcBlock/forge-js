const upperFirst = require('lodash/upperFirst');
const { types, getSigner, getHasher } = require('@arcblock/mcrypto');
const { fromPublicKey: DIDFromPublicKey } = require('@arcblock/abt-did');

function WalletType(type) {
  const { role, key, hash } = type;
  Object.keys(type).forEach(x => {
    const key = upperFirst(`${x}Type`);
    if (Object.values(types[key]).includes(type[x]) === false) {
      throw new Error(`Unsupported ${x} type: ${type[x]}`);
    }
  });

  return { role, key, hash };
}

WalletType.toJSON = type => {
  return Object.keys(type).reduce((acc, x) => {
    const key = upperFirst(`${x}Type`);
    const typeStr = Object.keys(types[key]);
    const typeValues = Object.values(types[key]);
    acc[x] = typeStr[typeValues.indexOf(type[x])];
    return acc;
  }, {});
};

WalletType.fromJSON = json => {
  return Object.keys(json).reduce((acc, x) => {
    const key = upperFirst(`${x}Type`);
    const typeStr = Object.keys(types[key]);
    const typeValues = Object.values(types[key]);
    acc[x] = typeValues[typeStr.indexOf(json[x])];
    return acc;
  }, {});
};

function Wallet(keyPair, type) {
  const signer = getSigner(type.key);
  const hasher = getHasher(type.hash);

  return {
    sign(data) {
      if (!keyPair.sk) {
        throw new Error('Cannot sign data without a secretKey');
      }
      const hash = hasher(data);
      return signer.sign(hash, keyPair.sk);
    },
    verify(data, signature) {
      const hash = hasher(data);
      return signer.verify(hash, signature, keyPair.pk);
    },
    toAddress() {
      return DIDFromPublicKey(keyPair.pk, type);
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

function fromSecretKey(sk, _type) {
  const type = WalletType(_type);
  const keyPair = { sk, pk: getSigner(type.key).getPublicKey(sk) };
  return Wallet(keyPair, type);
}

function fromPublicKey(pk, _type) {
  return Wallet({ pk }, WalletType(_type));
}

function fromRandom(_type) {
  const type = WalletType(_type);
  const signer = getSigner(type.key);
  const keyPair = signer.genKeyPair();
  return Wallet({ sk: keyPair.publicKey, pk: keyPair.secretKey }, type);
}

function fromJSON(json) {
  const type = WalletType.fromJSON(json.type);
  return Wallet(json, type);
}

module.exports = {
  fromSecretKey,
  fromPublicKey,
  fromRandom,
  fromJSON,
  Wallet,
  WalletType,
};
