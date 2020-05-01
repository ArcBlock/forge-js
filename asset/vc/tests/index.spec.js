/* eslint-disable operator-linebreak */
const stringify = require('json-stable-stringify');
const { types } = require('@arcblock/mcrypto');
const { fromRandom } = require('@arcblock/forge-wallet');
const { toCompleteType, fromPublicKeyHash } = require('@arcblock/did');
const { toBase58 } = require('@arcblock/forge-util');

const { create, verify, verifyPresentation } = require('../lib/index');

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

  test('should verify presentation: one vc', () => {
    const presentation = {
      verifiableCredential: [
        '{"@context":"https://schema.arcblock.io/v0.1/context.jsonld","credentialSubject":{"emailDigest":"rDh76MCmM1tEPS8Qd1xGThFJfskGP2PSO8aNqv58IhQ","id":"z1QUxXyLNRWv18ubUdcuu7iPTQdWzRy294C","method":"SHA3"},"id":"z2iUJs3vdJnE1CkaYDPAm1EEWVbNPpcEm6QhL","issuanceDate":"2020-03-30T09:56:31.175Z","issuer":{"id":"zNKrLtPXN5ur9qMkwKWMYNzGi4D6XjWqTEjQ","name":"ArcBlock.KYC.Email","pk":"zDLTrgAHr33NyKx9eD9PFUqySHjGnXpHL7upNvCySx1s4"},"proof":{"created":"2020-03-30T09:56:31.180Z","jws":"EtT4SMpmPK5AhGBstJNnymJ9lwQVC2cI-1N5O3o3iGT8gVB0lfg9oGlCGpwsuK1Zn1lLiNEYBD7eKFjwcA0rCw","proofPurpose":"assertionMethod","type":"Ed25519Signature"},"type":"EmailVerificationCredential"}',
      ],
      type: 'Ed25519Signature',
      proof: {
        type: 'Ed25519Signature',
        proofPurpose: 'assertionMethod',
        pk: 'zJ5bH7Jy27jSDf3AE3ntoRwNBhPRX6RXaSwTUh272jwK5',
        jws: 'ua-2kBFcn8rwNcd1BkckETnjQTW8nA5EcJ8PcXWirqB51SV9RaHvUChyFFUz_DLL_T-xlwcaQPaW0_q9Hkx3BQ',
        created: '2020-03-31T11:48:02Z',
      },
      challenge: '257A2EC62ED802304F65624C73A53CAA',
      '@context': ['https://schema.arcblock.io/v0.1/context.jsonld'],
    };
    const result = verifyPresentation({
      presentation,
      trustedIssuers: ['zNKrLtPXN5ur9qMkwKWMYNzGi4D6XjWqTEjQ'],
      challenge: '257A2EC62ED802304F65624C73A53CAA',
    });
    expect(result).toBeTruthy();
  });

  test('should verify presentation: invalid challenge', () => {
    try {
      const presentation = {
        context: ['https://schema.arcblock.io/v0.1/context.jsonld'],
        challenge: '62A0189210C87F3B51D52113D56457D6',
        proof: {
          created: '2020-03-31T10:06:52Z',
          jws: 'gJ246ooTpGM6iDoIOVAlXZZx1TtnUC99Tro4usiNBssBJgdQ0UhlIGv4aHd7DXXeIa7xD4BQEnGODnRwP993Ag',
          pk: 'zJ5bH7Jy27jSDf3AE3ntoRwNBhPRX6RXaSwTUh272jwK5',
          proofPurpose: 'assertionMethod',
          type: 'Ed25519Signature',
        },
        type: 'Ed25519Signature',
        verifiableCredential: [
          {
            context: 'https://schema.arcblock.io/v0.1/context.jsonld',
            credentialSubject: {
              emailDigest: 'rDh76MCmM1tEPS8Qd1xGThFJfskGP2PSO8aNqv58IhQ',
              id: 'z1QUxXyLNRWv18ubUdcuu7iPTQdWzRy294C',
              method: 'SHA3',
            },
            id: 'z2iUJs3vdJnE1CkaYDPAm1EEWVbNPpcEm6QhL',
            issuanceDate: '2020-03-30T09:56:31.175Z',
            issuer: {
              id: 'zNKrLtPXN5ur9qMkwKWMYNzGi4D6XjWqTEjQ',
              name: 'ArcBlock.KYC.Email',
              pk: 'zDLTrgAHr33NyKx9eD9PFUqySHjGnXpHL7upNvCySx1s4',
            },
            proof: {
              created: '2020-03-30T09:56:31.180Z',
              jws: 'EtT4SMpmPK5AhGBstJNnymJ9lwQVC2cI-1N5O3o3iGT8gVB0lfg9oGlCGpwsuK1Zn1lLiNEYBD7eKFjwcA0rCw',
              proofPurpose: 'assertionMethod',
              type: 'Ed25519Signature',
            },
            type: 'EmailVerificationCredential',
          },
        ],
      };

      verifyPresentation({
        presentation,
        trustedIssuers: ['zNKrLtPXN5ur9qMkwKWMYNzGi4D6XjWqTEjQ'],
        challenge: '62A0189210C87F3B51D52113D56457D7',
      });
    } catch (err) {
      expect(err).toBeTruthy();
    }
  });

  test('should verify presentation: valid challenge', () => {
    try {
      const presentation = {
        context: ['https://schema.arcblock.io/v0.1/context.jsonld'],
        challenge: '62A0189210C87F3B51D52113D56457D6',
        proof: {
          created: '2020-03-31T10:06:52Z',
          jws: 'gJ246ooTpGM6iDoIOVAlXZZx1TtnUC99Tro4usiNBssBJgdQ0UhlIGv4aHd7DXXeIa7xD4BQEnGODnRwP993Ag',
          pk: 'zJ5bH7Jy27jSDf3AE3ntoRwNBhPRX6RXaSwTUh272jwK5',
          proofPurpose: 'assertionMethod',
          type: 'Ed25519Signature',
        },
        type: 'Ed25519Signature',
        verifiableCredential: [
          {
            context: 'https://schema.arcblock.io/v0.1/context.jsonld',
            credentialSubject: {
              emailDigest: 'rDh76MCmM1tEPS8Qd1xGThFJfskGP2PSO8aNqv58IhQ',
              id: 'z1QUxXyLNRWv18ubUdcuu7iPTQdWzRy294C',
              method: 'SHA3',
            },
            id: 'z2iUJs3vdJnE1CkaYDPAm1EEWVbNPpcEm6QhL',
            issuanceDate: '2020-03-30T09:56:31.175Z',
            issuer: {
              id: 'zNKrLtPXN5ur9qMkwKWMYNzGi4D6XjWqTEjQ',
              name: 'ArcBlock.KYC.Email',
              pk: 'zDLTrgAHr33NyKx9eD9PFUqySHjGnXpHL7upNvCySx1s4',
            },
            proof: {
              created: '2020-03-30T09:56:31.180Z',
              jws: 'EtT4SMpmPK5AhGBstJNnymJ9lwQVC2cI-1N5O3o3iGT8gVB0lfg9oGlCGpwsuK1Zn1lLiNEYBD7eKFjwcA0rCw',
              proofPurpose: 'assertionMethod',
              type: 'Ed25519Signature',
            },
            type: 'EmailVerificationCredential',
          },
        ],
      };

      verifyPresentation({
        presentation,
        trustedIssuers: ['zNKrLtPXN5ur9qMkwKWMYNzGi4D6XjWqTEjQ'],
        challenge: '62A0189210C87F3B51D52113D56457D6',
      });
    } catch (err) {
      expect(err).toBeTruthy();
    }
  });

  test('should verify presentation: array proof', () => {
    try {
      const presentation = {
        context: ['https://schema.arcblock.io/v0.1/context.jsonld'],
        challenge: '62A0189210C87F3B51D52113D56457D6',
        proof: [
          {
            created: '2020-03-31T10:06:52Z',
            jws: 'gJ246ooTpGM6iDoIOVAlXZZx1TtnUC99Tro4usiNBssBJgdQ0UhlIGv4aHd7DXXeIa7xD4BQEnGODnRwP993Ag',
            pk: 'zJ5bH7Jy27jSDf3AE3ntoRwNBhPRX6RXaSwTUh272jwK5',
            proofPurpose: 'assertionMethod',
            type: 'Ed25519Signature',
          },
        ],
        type: 'Ed25519Signature',
        verifiableCredential: [
          {
            context: 'https://schema.arcblock.io/v0.1/context.jsonld',
            credentialSubject: {
              emailDigest: 'rDh76MCmM1tEPS8Qd1xGThFJfskGP2PSO8aNqv58IhQ',
              id: 'z1QUxXyLNRWv18ubUdcuu7iPTQdWzRy294C',
              method: 'SHA3',
            },
            id: 'z2iUJs3vdJnE1CkaYDPAm1EEWVbNPpcEm6QhL',
            issuanceDate: '2020-03-30T09:56:31.175Z',
            issuer: {
              id: 'zNKrLtPXN5ur9qMkwKWMYNzGi4D6XjWqTEjQ',
              name: 'ArcBlock.KYC.Email',
              pk: 'zDLTrgAHr33NyKx9eD9PFUqySHjGnXpHL7upNvCySx1s4',
            },
            proof: {
              created: '2020-03-30T09:56:31.180Z',
              jws: 'EtT4SMpmPK5AhGBstJNnymJ9lwQVC2cI-1N5O3o3iGT8gVB0lfg9oGlCGpwsuK1Zn1lLiNEYBD7eKFjwcA0rCw',
              proofPurpose: 'assertionMethod',
              type: 'Ed25519Signature',
            },
            type: 'EmailVerificationCredential',
          },
        ],
      };

      verifyPresentation({
        presentation,
        trustedIssuers: ['zNKrLtPXN5ur9qMkwKWMYNzGi4D6XjWqTEjQ'],
        challenge: '62A0189210C87F3B51D52113D56457D6',
      });
    } catch (err) {
      expect(err).toBeTruthy();
    }
  });
});
