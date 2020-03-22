/* eslint-disable operator-linebreak */
const stringify = require('json-stable-stringify');
const { types } = require('@arcblock/mcrypto');
const { fromRandom } = require('@arcblock/forge-wallet');
const { toCompleteType, fromPublicKeyHash } = require('@arcblock/did');
const { toBase58 } = require('@arcblock/forge-util');

const { create, verify } = require('../lib/index');

describe('@arcblock/vc', () => {
  test('should have functions', () => {
    expect(typeof create).toEqual('function');
    expect(typeof verify).toEqual('function');
  });

  const issuer = fromRandom();
  const owner = fromRandom();
  let vc = null;

  const subject = {
    id: owner.toAddress(),
    key: 'value',
    method: 'SHA3',
  };

  test('should create verifiable credential', () => {
    try {
      vc = create({
        type: 'EmailVerificationCredential',
        issuer: {
          wallet: issuer,
          name: 'DID.KYC.Email',
        },
        subject,
      });

      const vcType = toCompleteType({ role: types.RoleType.ROLE_VC });
      const vcDid = fromPublicKeyHash(issuer.hash(stringify(subject)), vcType);
      expect(vc.id).toEqual(vcDid);

      expect(vc.type).toEqual('EmailVerificationCredential');
      expect(vc.credentialSubject).toEqual(subject);

      expect(vc.issuer.id).toEqual(issuer.toAddress());
      expect(vc.issuer.pk).toEqual(toBase58(issuer.publicKey));
      expect(vc.issuer.name).toEqual('DID.KYC.Email');

      expect(vc.proof).toBeTruthy();
      expect(vc.proof.type).toBeTruthy();
      expect(vc.proof.jws).toBeTruthy();
    } catch (err) {
      expect(err).toBeFalsy();
    }
  });

  test('should verify verifiable credential', () => {
    expect(verify({ vc, ownerDid: owner.toAddress(), trustedIssuers: issuer.toAddress() })).toEqual(true);
  });

  test('should verify verifiable credential: invalid issuer', () => {
    try {
      verify({ vc, ownerDid: owner.toAddress(), trustedIssuers: 'abcd' });
    } catch (err) {
      expect(err).toBeTruthy();
    }
  });

  test('should verify verifiable credential: invalid owner', () => {
    try {
      verify({ vc, ownerDid: 'abcd', trustedIssuers: issuer.toAddress() });
    } catch (err) {
      expect(err).toBeTruthy();
    }
  });

  test('should verify verifiable credential: invalid signature', () => {
    try {
      vc.proof.jws = 'abcd';
      verify({ vc, ownerDid: owner.toAddress(), trustedIssuers: issuer.toAddress() });
    } catch (err) {
      expect(err).toBeTruthy();
    }
  });
});
