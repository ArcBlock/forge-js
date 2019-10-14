const crypter = require('../../lib/crypter/aes');

const password = '123456';

describe('#aes', () => {
  test('should have encrypt and decrypt functions', () => {
    expect(typeof crypter.encrypt).toEqual('function');
    expect(typeof crypter.decrypt).toEqual('function');
  });

  test('should encrypt empty value', () => {
    const message = '';
    const cipher = crypter.encrypt(message, password);
    const decrypted = crypter.decrypt(cipher, password);
    expect(message).toEqual(decrypted);
  });

  test('should encrypt non-empty value', () => {
    const message = 'abcd';
    const cipher = crypter.encrypt(message, password);
    const decrypted = crypter.decrypt(cipher, password);
    expect(message).toEqual(decrypted);
  });

  test('should encrypt object value', () => {
    const message = { key: 'abcd' };
    const cipher = crypter.encrypt(message, password);
    const decrypted = crypter.decrypt(cipher, password);
    expect(message).toEqual(JSON.parse(decrypted));
  });
});
