const stringify = require('json-stable-stringify');
const Mcrypto = require('@arcblock/mcrypto');
const base64 = require('base64-url');
const { toHex, stripHexPrefix } = require('@arcblock/forge-util');
const { toDid, toStrictHex, toTypeInfo, isValid, isFromPublicKey } = require('@arcblock/did');

// eslint-disable-next-line
const debug = require('debug')(require('../package.json').name);

const { types, getSigner } = Mcrypto;

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
const sign = (did, sk, payload = {}) => {
  if (isValid(did) === false) {
    throw new Error('Cannot do sign with invalid did');
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
      iss: toDid(did),
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
  debug('sign.body', body);

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
const decode = (token, payloadOnly = true) => {
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
const verify = (token, pk, tolerance = 5, verifyTimestamp = true) => {
  try {
    const [headerB64, bodyB64] = token.split('.');
    const { header, body, signature } = decode(token, false);
    if (!signature) {
      debug('verify.error.emptySig');
      return false;
    }
    if (!header.alg) {
      debug('verify.error.emptyAlg');
      return false;
    }

    const did = body.iss;
    if (!did) {
      debug('verify.error.emptyDid');
      return false;
    }

    if (isFromPublicKey(did, pk) === false) {
      debug('verify.error.did_pk_mismatch');
      return false;
    }

    if (verifyTimestamp) {
      const now = Math.ceil(Date.now() / 1000) + tolerance;
      const exp = Number(body.exp) || 0;
      const iat = Number(body.iat) || 0;
      const nbf = Number(body.nbf) || 0;
      debug('verify.verifyTimestamp', { now, exp, iat, nbf });
      if (exp && exp < now) {
        debug('verify.error.expired');
        return false;
      }
      if (iat && iat > now) {
        debug('verify.error.issuedAt');
        return false;
      }
      if (nbf && nbf > now) {
        debug('verify.error.notBefore');
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

    debug('verify.error.crypto');
    return false;
  } catch (err) {
    debug('verify.error.exception');

    if (process.env.NODE_ENV !== 'test') {
      // eslint-disable-next-line
      console.error('verify.error', err);
    }
    return false;
  }
};

module.exports = {
  sign,
  verify,
  decode,
};
