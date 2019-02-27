const signer = require('../../lib/signer/secp256k1');

const secretKey = '0x18E14A7B6A307F426A94F8114701E7C8E774E7F9A47E2C2035DB29A206321725';
const publicKey =
  '0x0450863AD64A87AE8A2FE83C1AF1A8403CB53F53E486D8511DAD8A04887E5B23522CD470243453A299FA9E77237716103ABC11A1DF38855ED6F2EE187E9C582BA6';
const messageHex =
  '0x15D0014A9CF581EC068B67500683A2784A15E1F68057E5E37AAF3A0F58F3C43F083D6A5630130399D4E5003EA191FDE30849';
const signatureHex =
  '3045022100942F2DB25D6A0F6B01B195EDBAD8BB8F58F4EE85C7D5E1934649781D815F7ECE0220158DD32CB48D2A3A97267F4416A53692C51C72CD350F945D7BEA60376FD658D5';
const messageUtf8 = 'abt to the moon! haha';
const signatureUtf8 =
  '3045022100C7164FB0B1C298569C3ED2153E81089301123CB94D897552687337A7E858890F02203F0BD4EE6B7C4251D14B8193DA950156A0D8BEDAC735D34B527AC39294954F4A';

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
    expect(publicKey2.toUpperCase()).toEqual(signer.strip0x(publicKey));
  });

  test('should sign hex message', () => {
    const signature2 = signer.sign(messageHex, secretKey, 'hex');
    expect(signature2.toUpperCase()).toEqual(signatureHex);
  });

  test('should verify hex message', () => {
    const result = signer.verify(messageHex, signatureHex, publicKey, 'hex');
    expect(result).toEqual(true);
  });

  test('should sign utf8 message', () => {
    const signature2 = signer.sign(messageUtf8, secretKey);
    expect(signature2.toUpperCase()).toEqual(signatureUtf8);
  });

  test('should verify utf8 message', () => {
    const result = signer.verify(messageUtf8, signatureUtf8, publicKey);
    expect(result).toEqual(true);
  });
});
