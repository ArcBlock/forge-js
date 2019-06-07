/**
 * @fileOverview Utility functions to create/inspect did, and do did-based auth, an implementation of abt-did-protocol
 *
 * @module @arcblock/did
 * @requires @arcblock/mcrypto
 * @requires @arcblock/forge-util
 */
const upperFirst = require('lodash/upperFirst');
const stringify = require('json-stable-stringify');
const Mcrypto = require('@arcblock/mcrypto');
const multibase = require('multibase');
const base64 = require('base64-url');
const { toHex, numberToHex, stripHexPrefix } = require('@arcblock/forge-util');
const { DID_PREFIX, toBits, toBytes, toStrictHex } = require('./util');
// eslint-disable-next-line
const debug = require('debug')(require('../package.json').name);

const { types, getSigner, getHasher } = Mcrypto;

const mapping = {
  pk: 'key',
};

/**
 * Gen DID from private key and type config
 *
 * Spec: https://github.com/ArcBlock/ABT-DID-Protocol#create-did
 *
 * @public
 * @static
 * @param {string} sk - hex encoded secret key string
 * @param {object} type - wallet type, {@see @arcblock/forge-wallet#WalletType}
 * @returns {string} DID string
 */
const fromSecretKey = (sk, type) => {
  const { pk = types.KeyType.ED25519 } = type || {};
  const pub = getSigner(pk).getPublicKey(sk);
  return fromPublicKey(pub.indexOf('0x') === 0 ? pub : `0x${pub}`, type);
};

/**
 * Gen DID from public key and type config
 *
 * @public
 * @static
 * @param {string} pk - hex encoded public key
 * @param {object} type - wallet type, {@see @arcblock/forge-wallet#WalletType}
 * @returns {string} DID string
 */
const fromPublicKey = (pk, type) => {
  const { hash = types.HashType.SHA3 } = type || {};
  const hashFn = getHasher(hash);
  const pkHash = hashFn(pk);
  return fromPublicKeyHash(pkHash, type);
};

const fromPublicKeyHash = (buffer, type) => {
  const { hash = types.HashType.SHA3 } = type || {};
  const pkHash = stripHexPrefix(buffer).slice(0, 40); // 20 bytes
  const hashFn = getHasher(hash);
  const typeHex = fromTypeInfo(type);
  const checksum = stripHexPrefix(hashFn(`0x${typeHex}${pkHash}`, 1)).slice(0, 8); // 4 bytes
  const didHash = `${typeHex}${pkHash}${checksum}`;
  debug('fromPublicKeyHash', { pkHash, typeHex, checksum, didHash });

  const address = multibase.encode('base58btc', Buffer.from(didHash, 'hex'));
  return address.toString();
};

/**
 * Gen DID from an hex encoded hash and role type
 *
 * @public
 * @static
 * @param {string} hash - hex encoded hash
 * @param {enum} role - role type, {@see @arcblock/mcrypto#types}
 * @returns {string} DID string
 */
const fromHash = (hash, role) => {
  const roleKeys = Object.keys(types.RoleType);
  const roleValues = Object.values(types.RoleType);
  if (roleValues.indexOf(role) === -1) {
    throw new Error(`Unsupported role type ${role} when gen ddi from hash`);
  }

  const type = {
    role: types.RoleType[roleKeys[roleValues.indexOf(role)]],
    pk: types.KeyType.ED25519,
    hash: types.HashType.SHA3,
  };

  const sha2Roles = [
    types.RoleType.ROLE_NODE,
    types.RoleType.ROLE_VALIDATOR,
    types.RoleType.ROLE_TETHER,
  ];
  if (sha2Roles.includes(role)) {
    type.hash = types.HashType.SHA2;
  }

  debug('fromHash', { hash, role, type });
  return fromPublicKeyHash(hash, type);
};

/**
 * Check if an DID is generated from a publicKey
 *
 * @public
 * @static
 * @param {string} did - string of the did, usually base58btc format
 * @param {string} pk - hex encoded publicKey string
 * @returns {boolean}
 */
const isFromPublicKey = (did, pk) => {
  if (isValid(did) === false) {
    return false;
  }

  const type = toTypeInfo(did);
  const didNew = fromPublicKey(pk, type);
  const didClean = did.replace(DID_PREFIX, '');

  return didNew === didClean;
};

/**
 * Convert type info object to hex string
 *
 * @public
 * @static
 * @param {object} type - wallet type, {@see @arcblock/forge-wallet#WalletType}
 * @returns string
 */
const fromTypeInfo = type => {
  const {
    role = types.RoleType.ROLE_ACCOUNT,
    pk = types.KeyType.ED25519,
    hash = types.HashType.SHA3,
  } = type || {};

  const infoBits = `${toBits(role, 6)}${toBits(pk, 5)}${toBits(hash, 5)}`;
  const infoHex = stripHexPrefix(numberToHex(parseInt(infoBits, 2)));
  return toStrictHex(infoHex, 4);
};

/**
 * Get type info from did (base58 format)
 *
 * @public
 * @static
 * @param {string} did - address string
 * @param {boolean} [returnString=true]
 * @returns {object} wallet type {@see @arcblock/forge-wallet#WalletType}
 */
const toTypeInfo = (did, returnString = false) => {
  try {
    const bytes = toBytes(did);
    const typeBytes = bytes.slice(0, 2);
    const typeHex = toStrictHex(Buffer.from(typeBytes).toString('hex'));
    const typeBits = toBits(typeHex, 16);
    const roleBits = typeBits.slice(0, 6);
    const keyBits = typeBits.slice(6, 11);
    const hashBits = typeBits.slice(11, 16);
    const type = {
      role: parseInt(roleBits, 2),
      pk: parseInt(keyBits, 2),
      hash: parseInt(hashBits, 2),
    };

    // remove unsupported types
    Object.keys(type).forEach(x => {
      const enums = Object.values(types[`${upperFirst(mapping[x] || x)}Type`]);
      if (enums.includes(type[x]) === false) {
        delete type[x];
      }
    });

    const typeStr = Object.keys(type).reduce((acc, x) => {
      const enums = types[`${upperFirst(mapping[x] || x)}Type`];
      acc[x] = Object.keys(enums).find(d => enums[d] === type[x]);
      return acc;
    }, {});

    return returnString ? typeStr : type;
  } catch (err) {
    if (process.env.NODE_ENV !== 'test') {
      // eslint-disable-next-line
      console.warn('AbtDid.toTypeInfo.decodeError', err);
    }
    return {};
  }
};

/**
 * Check if a DID string is valid
 *
 * @public
 * @static
 * @param {string} did - address string
 * @returns {boolean}
 */
const isValid = did => {
  const { hash } = toTypeInfo(did);
  if (typeof hash === 'undefined') {
    return false;
  }

  const hashFn = getHasher(hash);
  const bytes = toBytes(did);
  const bytesHex = toStrictHex(Buffer.from(bytes.slice(0, 22)).toString('hex'));
  const didChecksum = toStrictHex(Buffer.from(bytes.slice(22, 26)).toString('hex'));
  const checksum = stripHexPrefix(hashFn(`0x${bytesHex}`)).slice(0, 8);

  return didChecksum === checksum;
};

/**
 * Generate and sign a jwt token
 *
 * @public
 * @static
 * @param {string} did - address string
 * @param {string} sk - hex encoded secret key
 * @param {object} [payload={}] - data to be included before signing
 * @returns {string} hex encoded signature
 */
const jwtSign = (did, sk, payload = {}) => {
  if (isValid(did) === false) {
    throw new Error('Cannot do jwtSign with invalid did');
  }

  const type = toTypeInfo(did);
  const headers = {
    [types.KeyType.SECP256K1]: {
      alg: 'ES256K',
      type: 'JWT',
    },
    [types.KeyType.ED25519]: {
      alg: 'Ed25519',
      type: 'JWT',
    },
  };

  // make header
  const header = headers[type.pk];
  const headerB64 = base64.escape(base64.encode(stringify(header)));

  // make body
  const now = Math.floor(Date.now() / 1000);
  let body = Object.assign(
    {
      iss: did.indexOf(DID_PREFIX) === 0 ? did : `${DID_PREFIX}${did}`,
      iat: now,
      nbf: now,
      exp: now + 5 * 60,
    },
    payload || {}
  );
  // remove empty keys
  body = Object.keys(body)
    .filter(x => {
      if (typeof body[x] === 'undefined' || body[x] == null || body[x] === '') {
        return false;
      }

      return true;
    })
    .reduce((acc, x) => {
      acc[x] = body[x];
      return acc;
    }, {});

  const bodyB64 = base64.escape(base64.encode(stringify(body)));

  // make signature
  const msgHex = toHex(`${headerB64}.${bodyB64}`);
  const sigHex = getSigner(type.pk).sign(msgHex, sk);
  const sigB64 = base64.escape(Buffer.from(stripHexPrefix(sigHex), 'hex').toString('base64'));

  return [headerB64, bodyB64, sigB64].join('.');
};

/**
 * Decode info from jwt token
 *
 * @public
 * @static
 * @param {string} token - jwt string
 * @param {boolean} [payloadOnly=false]
 * @returns {object}
 */
const jwtDecode = (token, payloadOnly = true) => {
  const [headerB64, bodyB64, sigB64] = token.split('.');
  const header = JSON.parse(base64.decode(base64.unescape(headerB64)));
  const body = JSON.parse(base64.decode(base64.unescape(bodyB64)));
  const sig = Buffer.from(base64.unescape(sigB64), 'base64').toString('hex');
  if (payloadOnly) {
    return body;
  }
  return { header, body, signature: `0x${toStrictHex(sig)}` };
};

/**
 * Verify a jwt token signed with pk and certain issuer
 *
 * @public
 * @static
 * @param {string} token - the jwt token
 * @param {string} pk - hex encoded public key
 * @param {number} [tolerance=5] - number of seconds to tolerant expire
 * @param {boolean} [verifyTimestamp=true] - whether should be verify timestamps?
 * @returns {boolean}
 */
const jwtVerify = (token, pk, tolerance = 5, verifyTimestamp = true) => {
  try {
    const [headerB64, bodyB64] = token.split('.');
    const { header, body, signature } = jwtDecode(token, false);
    if (!signature) {
      debug('jwtVerify.error.emptySig');
      return false;
    }
    if (!header.alg) {
      debug('jwtVerify.error.emptyAlg');
      return false;
    }

    const did = body.iss;
    if (!did) {
      debug('jwtVerify.error.emptyDid');
      return false;
    }

    if (isFromPublicKey(did, pk) === false) {
      debug('jwtVerify.error.did_pk_mismatch');
      return false;
    }

    if (verifyTimestamp) {
      const now = Math.ceil(Date.now() / 1000) + tolerance;
      const exp = Number(body.exp) || 0;
      const iat = Number(body.iat) || 0;
      const nbf = Number(body.nbf) || 0;
      debug('jwtVerify.verifyTimestamp', { now, exp, iat, nbf });
      if (exp && exp < now) {
        debug('jwtVerify.error.expired');
        return false;
      }
      if (iat && iat > now) {
        debug('jwtVerify.error.issuedAt');
        return false;
      }
      if (nbf && nbf > now) {
        debug('jwtVerify.error.notBefore');
        return false;
      }
    }

    const signers = {
      secp256k1: getSigner(types.KeyType.SECP256K1),
      es256k: getSigner(types.KeyType.SECP256K1),
      ed25519: getSigner(types.KeyType.ED25519),
    };
    const alg = header.alg.toLowerCase();
    if (signers[alg]) {
      const msgHex = toHex(`${headerB64}.${bodyB64}`);
      return signers[alg].verify(msgHex, signature, pk);
    }

    debug('jwtVerify.error.crypto');
    return false;
  } catch (err) {
    debug('jwtVerify.error.exception');

    if (process.env.NODE_ENV !== 'test') {
      // eslint-disable-next-line
      console.error('jwtVerify.error', err);
    }
    return false;
  }
};

/**
 * Convert did to address: remove `did:abt:` prefix if exists
 *
 * @public
 * @static
 * @param {string} did - address string
 * @returns {string}
 */
function toAddress(did) {
  return did.replace(DID_PREFIX, '');
}

/**
 * Convert address to did: prepend `did:abt:` prefix
 *
 * @public
 * @static
 * @param {string} did - address string
 * @returns {string}
 */
function toDid(address) {
  return `${DID_PREFIX}${address}`;
}

module.exports = {
  types,
  toStrictHex,
  fromSecretKey,
  fromPublicKey,
  fromPublicKeyHash,
  fromHash,
  toTypeInfo,
  toAddress,
  toDid,
  fromTypeInfo,
  isFromPublicKey,
  isValid,
  jwtSign,
  jwtVerify,
  jwtDecode,
};
