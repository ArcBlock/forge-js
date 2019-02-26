const signer = require('../../lib/signer/ed25519');

const secretKey =
  'D67C071B6F51D2B61180B9B1AA9BE0DD0704619F0E30453AB4A592B036EDE644E4852B7091317E3622068E62A5127D1FB0D4AE2FC50213295E10652D2F0ABFC7';
const publicKey = 'E4852B7091317E3622068E62A5127D1FB0D4AE2FC50213295E10652D2F0ABFC7';
const message =
  '15D0014A9CF581EC068B67500683A2784A15E1F68057E5E37AAF3A0F58F3C43F083D6A5630130399D4E5003EA191FDE30849';
const signature =
  '321EE8262407BF091F16ED190A3074339EBDF956B3924A9CF29B86A366C9570C72C6A8D8363705182D5A99FAF152C617FD89D291C9D944F2A95DF57019303200';

describe('#sha2', () => {
  test('should create key pair', () => {
    const pair = signer.genKeyPair();
    expect(pair.publicKey).toBeTruthy();
    expect(pair.secretKey).toBeTruthy();
  });

  test('should support getPublicKey', () => {
    const { publicKey: publicKey1, secretKey } = signer.genKeyPair();
    const publicKey2 = signer.getPublicKey(secretKey);
    expect(publicKey1).toEqual(publicKey2);
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
    expect(result).toBeTruthy();
  });
});
