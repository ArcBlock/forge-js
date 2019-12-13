const stringify = require('json-stable-stringify');
const Mcrypto = require('@arcblock/mcrypto');
const { toHex, toBase64, fromBase64 } = require('@arcblock/forge-util');
const { toDid, toStrictHex, toTypeInfo, isValid, isFromPublicKey } = require('@arcblock/did');

// eslint-disable-next-line
const debug = require('debug')(require('../package.json').name);

const DID_AUTH_PROTOCOL_VERSION = '1.0';

const { types, getSigner } = Mcrypto;

/**
 * Generate and sign a jwt token
 *
 * @public
 * @static
 * @param {string} signer - address string
 * @param {string} sk - hex encoded secret key
 * @param {object} [payload={}] - data to be included before signing
 * @param {boolean} [doSign=true] - do we need to sign the payload or just return the content to be signed
 * @returns {string} hex encoded signature
 */
const sign = (signer, sk, payload = {}, doSign = true) => {
  if (isValid(signer) === false) {
    throw new Error('Cannot do sign with invalid signer');
  }

  const type = toTypeInfo(signer);
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
  const headerB64 = toBase64(stringify(header));

  // make body
  const now = Math.floor(Date.now() / 1000);
  let body = Object.assign(
    {
      iss: toDid(signer),
      iat: now,
      nbf: now,
      exp: now + 5 * 60,
      version: DID_AUTH_PROTOCOL_VERSION,
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

  const bodyB64 = toBase64(stringify(body));
  debug('sign.body', body);

  // istanbul ignore if
  if (!doSign) {
    return `${headerB64}.${bodyB64}`;
  }

  // make signature
  const msgHex = toHex(`${headerB64}.${bodyB64}`);
  const sigHex = getSigner(type.pk).sign(msgHex, sk);
  const sigB64 = toBase64(sigHex);

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
  const header = JSON.parse(fromBase64(headerB64));
  const body = JSON.parse(fromBase64(bodyB64));
  const sig = Buffer.from(fromBase64(sigB64)).toString('hex');
  if (payloadOnly) {
    return body;
  }
  return { header, body, signature: `0x${toStrictHex(sig)}` };
};

/**
 * Verify a jwt token signed with signerPk and signerDid
 *
 * @public
 * @static
 * @param {string} token - the jwt token
 * @param {string} signerPk - signer public key
 * @param {object} options - options to customize the verify
 * @param {number} [options.tolerance=5] - number of seconds to tolerant expire
 * @param {boolean} [options.enforceTimestamp=true] - whether should be verify timestamps?
 * @param {string} [options.signerKey='iss'] - which field should be used to pick the signer
 * @returns {boolean}
 */
const verify = (token, signerPk, { tolerance = 5, enforceTimestamp = true, signerKey = 'iss' } = {}) => {
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

    const signerDid = body[signerKey];
    if (!signerDid) {
      debug('verify.error.emptySignerDid');
      return false;
    }

    if (isFromPublicKey(signerDid, signerPk) === false) {
      debug('verify.error.signerDidAndPkNotMatch');
      return false;
    }

    if (enforceTimestamp) {
      const now = Math.ceil(Date.now() / 1000);
      const exp = Number(body.exp) || 0;
      const iat = Number(body.iat) || 0;
      const nbf = Number(body.nbf) || 0;
      debug('verify.enforceTimestamp', { now, exp, iat, nbf });
      if (exp && exp + tolerance < now) {
        debug('verify.error.expired');
        return false;
      }
      if (iat && iat > now && iat - now > tolerance) {
        debug('verify.error.issuedAt');
        return false;
      }
      if (nbf && nbf > now && nbf - now > tolerance) {
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
      return signers[alg].verify(msgHex, signature, signerPk);
    }

    debug('verify.error.crypto');
    return false;
  } catch (err) {
    debug('verify.error.exception');
    debug(err);
    return false;
  }
};

module.exports = {
  sign,
  verify,
  decode,
};
