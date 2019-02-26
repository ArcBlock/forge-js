const signer = require('../../lib/signer/secp256k1');

const secretKey = '18E14A7B6A307F426A94F8114701E7C8E774E7F9A47E2C2035DB29A206321725';
const publicKey =
  '0450863AD64A87AE8A2FE83C1AF1A8403CB53F53E486D8511DAD8A04887E5B23522CD470243453A299FA9E77237716103ABC11A1DF38855ED6F2EE187E9C582BA6';
const message =
  '15D0014A9CF581EC068B67500683A2784A15E1F68057E5E37AAF3A0F58F3C43F083D6A5630130399D4E5003EA191FDE30849';
const signature =
  '3045022100942F2DB25D6A0F6B01B195EDBAD8BB8F58F4EE85C7D5E1934649781D815F7ECE0220158DD32CB48D2A3A97267F4416A53692C51C72CD350F945D7BEA60376FD658D5';

describe('#secp256k1', () => {
  test('should create key pair', () => {
    const pair = signer.genKeyPair();
    expect(pair.publicKey).toBeTruthy();
    expect(pair.secretKey).toBeTruthy();
  });

  test('should support getPublicKey', () => {
    const { publicKey: pk1, secretKey: sk1 } = signer.genKeyPair();
    const pk2 = signer.getPublicKey(sk1);
    expect(pk1).toEqual(pk2);
  });

  test('should gen public key same as elixir', () => {
    const publicKey2 = signer.getPublicKey(secretKey, 'hex');
    expect(publicKey2.toUpperCase()).toEqual(publicKey);
  });

  test('should sign message', () => {
    const signature2 = signer.sign(message, secretKey, 'hex');
    expect(signature2.toUpperCase()).toEqual(signature);
  });

  test('should verify message', () => {
    const result = signer.verify(message, signature, publicKey, 'hex');
    expect(result).toEqual(true);
  });
});
