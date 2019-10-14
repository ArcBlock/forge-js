/* eslint-disable no-shadow */
const { encode, decode, decodePayload } = require('../../lib/util/socket_data');

const encoded = 'lgcKyAMKkQEKKWZkNWY1NTZiOTA0MzI3MjM2NjUzNjNmZmI1MGRkZmJmNWM3ZmQ5MjY4EAIaRjBEAiBKFpCXqzA4hqXxpe4CeWKuWNUN5nqYqFagwpTeiNZotAIgD3qLWb5iQyxRXzTrP6SUctROTeIwaq0bKrOn7KpDV7wgAToYCgVLVi9rdhIPEgZyYW5kb20aBXZhbHVlErECCgoKCA3gtrOnZAAAEAIYASIpZmQ1ZjU1NmI5MDQzMjcyMzY2NTM2M2ZmYjUwZGRmYmY1YzdmZDkyNjgqQQRwfqJbwpk4OipEaGYBQeLbBGMY6QlTt1iIeLSrv+dxFQ4B+SgHODpE8ImRZ1eO6AzYTI9+A61a7j6fsSwUQNoPMgIIAToKd2FuZ3NoaWp1bkpAQjkwQkVDMjgzQTEwOUFBQjY2RjBCMjE0ODQ4ODVERkY0NzRDNUQ1N0VFRTlBQUY1OEEyNjYzOENDN0M4MURGRVJAQjkwQkVDMjgzQTEwOUFBQjY2RjBCMjE0ODQ4ODVERkY0NzRDNUQ1N0VFRTlBQUY1OEEyNjYzOENDN0M4MURGRVoMCIHb3OEFEJOv6bYBYgwIgdvc4QUQk6/ptgF4gAE=';

// FIXME: the verifyBuffer and updateBuffer are outdated due to forge-core proto buffer updates
describe('#encode', () => {
  test('should be a function', () => {
    expect(typeof decode).toEqual('function');
  });

  test.skip('should encode as expected', () => {
    const encoded = encode(
      {
        verifyTx: {
          status: 0,
        },
      },
      'Response'
    );
    expect(encoded instanceof Buffer).toBeTruthy();
    expect(Uint8Array.from(encoded).toString('base64')).toEqual(
      Uint8Array.from([4, 10, 0]).toString('base64')
    );
  });
});

describe('#decode', () => {
  test('should be a function', () => {
    expect(typeof decode).toEqual('function');
  });

  test.skip('should decode as expected', () => {
    const decoded = decode(Buffer.from(encoded, 'base64'), 'Request');
    expect(typeof decoded === 'object').toBeTruthy();
    expect(typeof decoded.verifyTx === 'object').toBeTruthy();
    expect(typeof decoded.verifyTx.tx === 'object').toBeTruthy();
    expect(typeof decoded.verifyTx.tx.itx === 'object').toBeTruthy();
    expect(typeof decoded.verifyTx.sender === 'object').toBeTruthy();
    expect(decoded.verifyTx.sender.moniker).toEqual('wangshijun');
    expect(typeof decoded.updateState === 'undefined').toBeTruthy();
  });
});

describe('#decodePayload', () => {
  test('should be a function', () => {
    expect(typeof decodePayload).toEqual('function');
  });

  test('should decode as expected', () => {
    const payload = {
      tx: {
        itx: { typeUrl: 'fg:t:transfer', value: 'CgQxMjM0EgA=' },
        from: '1234',
        nonce: 2,
        wallet: undefined,
        token: 'abcd',
      },
    };
    const { tx } = decodePayload(payload);
    expect(tx.itx.type).toEqual('TransferTx');
    expect(typeof tx.itx.value).toEqual('object');
    expect(tx.itx.value.to).toEqual('1234');
    // expect(tx.itx.value.value).toEqual('1234');
  });
});
