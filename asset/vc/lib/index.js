/**
 * @fileOverview Utility functions to create/verify vc
 *
 * @module @arcblock/vc
 * @requires @arcblock/did
 * @requires @arcblock/forge-util
 */
const stringify = require('json-stable-stringify');
const cloneDeep = require('lodash/cloneDeep');
const { types } = require('@arcblock/mcrypto');
const { fromPublicKey } = require('@arcblock/forge-wallet');
const { toTypeInfo, isValid, isFromPublicKey, fromPublicKeyHash } = require('@arcblock/did');
const { toBase58, toBase64, fromBase64, fromBase58 } = require('@arcblock/forge-util');

// eslint-disable-next-line
const debug = require('debug')(require('../package.json').name);

const proofTypes = {
  [types.KeyType.ED25519]: 'Ed25519Signature',
  [types.KeyType.SECP256K1]: 'Secp256k1Signature',
};

/**
 * Create a valid verifiable credential
 *
 * @param {object} params
 * @param {string} params.type - The type of credential
 * @param {object} params.subject - The content of credential
 * @param {object} params.issuer - The issuer name and wallet
 * @param {Date} params.issuanceDate
 * @param {Date} params.expirationDate
 * @returns {object}
 */
function create({ type, subject, issuer, issuanceDate, expirationDate }) {
  if (!type) {
    throw new Error('Can not create verifiable credential without empty type');
  }

  if (!subject) {
    throw new Error('Can not create verifiable credential from empty subject');
  }

  // Should have an owner
  if (!subject.id) {
    throw new Error('Can not create verifiable credential without holder');
  }

  if (!isValid(subject.id)) {
    throw new Error('Can not create verifiable credential invalid holder did');
  }

  const { wallet, name: issuerName } = issuer;
  const issuerDid = wallet.toAddress();
  const typeInfo = toTypeInfo(issuerDid);

  // The { pk, hash } type should be same as issuer, role type must be `ROLE_VC`
  const vcType = Object.assign({}, typeInfo, { role: types.RoleType.ROLE_VC });
  const vcDid = fromPublicKeyHash(wallet.hash(stringify(subject)), vcType);

  const vcObj = {
    '@context': 'https://schema.arcblock.io/v0.1/context.jsonld',
    id: vcDid,
    type,
    issuer: {
      id: issuerDid,
      pk: toBase58(wallet.publicKey),
      name: issuerName || issuerDid,
    },
    issuanceDate: issuanceDate || new Date().toISOString(),
    expirationDate,
    credentialSubject: subject,
  };

  if (!proofTypes[typeInfo.pk]) {
    throw new Error('Unsupported signer type when create verifiable credential');
  }

  const signature = wallet.sign(stringify(vcObj));
  const proof = {
    type: proofTypes[typeInfo.pk],
    created: new Date().toISOString(),
    proofPurpose: 'assertionMethod',
    jws: toBase64(signature),
  };

  // NOTE: we should be able to verify the vc before return
  const result = Object.assign({ proof }, vcObj);

  debug('create', result);

  if (verify({ vc: result, ownerDid: subject.id, trustedIssuers: [issuerDid] })) {
    return result;
  }

  return null;
}

/**
 * Verify that the verifiable credential is valid
 *  - It is signed by a whitelist of issuers
 *  - It is owned by the vc.subject.id
 *  - It has valid signature by the issuer
 *  - It is not expired
 *
 * @param {object} vc - the verifiable credential object
 * @param {string} ownerDid - vc holder/owner did
 * @param {Array} trustedIssuers - list of issuer did
 * @throws {Error}
 * @returns {boolean}
 */
function verify({ vc, ownerDid, trustedIssuers }) {
  // Integrity check
  if (!vc) {
    throw new Error('Empty verifiable credential object');
  }
  if (!vc.issuer || !vc.issuer.id || !vc.issuer.pk || !isValid(vc.issuer.id)) {
    throw new Error('Invalid verifiable credential issuer');
  }
  if (!vc.credentialSubject || !vc.credentialSubject.id || !isValid(vc.credentialSubject.id)) {
    throw new Error('Invalid verifiable credential subject');
  }
  if (!vc.proof || !vc.proof.jws) {
    throw new Error('Invalid verifiable credential proof');
  }

  // Verify dates
  if (vc.issuanceDate === undefined) {
    throw Error('Invalid verifiable credential issue date');
  }
  if (new Date(vc.issuanceDate).getTime() > Date.now()) {
    throw Error('Verifiable credential has not take effect');
  }
  if (vc.expirationDate !== undefined && new Date(vc.expirationDate).getTime() < Date.now()) {
    throw Error('Verifiable credential has expired');
  }

  // Verify issuer
  const issuers = Array.isArray(trustedIssuers) ? trustedIssuers : [trustedIssuers];
  const issuerDid = issuers.find(x => x === vc.issuer.id);
  if (!issuerDid) {
    throw new Error('Verifiable credential not issued by trusted issuers');
  }
  if (!isFromPublicKey(issuerDid, vc.issuer.pk)) {
    throw new Error('Verifiable credential not issuer pk not match with issuer did');
  }

  // Verify owner
  if (ownerDid !== vc.credentialSubject.id) {
    throw new Error('Verifiable credential not owned by specified owner did');
  }

  // Construct the issuer wallet
  const issuer = fromPublicKey(vc.issuer.pk, toTypeInfo(issuerDid));

  // NOTE: we are ignoring other fields of the proof
  const clone = cloneDeep(vc);
  const signature = clone.proof.jws;
  delete clone.proof;
  delete clone.signature;

  // Verify signature
  if (issuer.verify(stringify(clone), fromBase64(signature)) !== true) {
    throw Error('Verifiable credential signature not valid');
  }

  return true;
}

/**
 * Verify that the Presentation is valid
 *  - It is signed by VC's owner
 *  - It contain chanllege
 *  - It has valid signature by the issuer
 *  - It is not expired
 *
 * @param {object} presentation - the presentation object
 * @param {Array} trustedIssuers - list of issuer did
 * @param {String} challenge - Random byte you want
 * @throws {Error}
 * @returns {boolean}
 */
function verifyPresentation({ presentation, trustedIssuers, challenge }) {
  if (!presentation.challenge || challenge !== presentation.challenge) {
    throw Error('unsafe response');
  }
  const vcArray = Array.isArray(presentation.verifiableCredential)
    ? presentation.verifiableCredential
    : [presentation.verifiableCredential];
  const proofArray = Array.isArray(presentation.proof) ? presentation.proof : [presentation.proof];
  const clone = cloneDeep(presentation);
  delete clone.proof;
  vcArray.forEach(vcString => {
    const vc = JSON.parse(vcString);
    const proof = proofArray.find(tmpProof => isFromPublicKey(vc.credentialSubject.id, tmpProof.pk));
    if (!proof) throw Error('VC cannot be proof');
    const signature = proof.jws;
    const recipience = fromPublicKey(fromBase58(proof.pk), toTypeInfo(vc.credentialSubject.id));
    if (recipience.verify(stringify(clone), fromBase64(signature)) !== true) {
      throw Error('presentation signature not valid');
    }
    verify({ vc, ownerDid: vc.credentialSubject.id, trustedIssuers });
  });
  return true;
}

module.exports = {
  create,
  verify,
  verifyPresentation,
};
