const { fromBase58, fromBase64 } = require('@arcblock/forge-util');
const { fromRandom } = require('@arcblock/forge-wallet');
const { toDid } = require('@arcblock/did');
const { sign, verify } = require('../lib').JWT;

const sk =
  '0xD67C071B6F51D2B61180B9B1AA9BE0DD0704619F0E30453AB4A592B036EDE644E4852B7091317E3622068E62A5127D1FB0D4AE2FC50213295E10652D2F0ABFC7';
const pk = '0xE4852B7091317E3622068E62A5127D1FB0D4AE2FC50213295E10652D2F0ABFC7';
const appId = 'zNKtCNqYWLYWYW3gWRA1vnRykfCBZYHZvzKr';

describe('#jwt', () => {
  test('should do stable sort on sign', () => {
    const token1 = sign(appId, sk, {
      key: 'value',
      value: 'key',
      iat: 123,
      nbf: 123,
      exp: 123,
    });
    const token2 = sign(appId, sk, {
      value: 'key',
      key: 'value',
      iat: 123,
      nbf: 123,
      exp: 123,
    });
    expect(token1).toEqual(token2);
  });

  test('should sign and verify jwt token: forge', () => {
    const token = sign(appId, sk, { key: 'value' });
    const [, bodyB64] = token.split('.');
    const body = JSON.parse(fromBase64(bodyB64));
    const result = verify(token, pk);
    expect(result).toEqual(true);
    expect(body.key).toEqual('value');
  });

  test('should sign and verify jwt token: eth', () => {
    const wallet = fromRandom('eth');
    const did = wallet.toAddress();
    const token = sign(did, wallet.secretKey, { key: 'value' });
    const [, bodyB64] = token.split('.');
    const body = JSON.parse(fromBase64(bodyB64));
    const result = verify(token, wallet.publicKey);
    expect(result).toEqual(true);
    expect(body.key).toEqual('value');
  });

  test('should sign with/without did prefix', () => {
    const token = sign(appId, sk, { key: 'value' });
    const token2 = sign(toDid(appId), sk, { key: 'value' });
    expect(token).toEqual(token2);
  });

  test('should be able to verify jwt token signed by elixir', () => {
    // eslint-disable-next-line no-shadow
    const pk = '0xE4852B7091317E3622068E62A5127D1FB0D4AE2FC50213295E10652D2F0ABFC7';
    const token =
      'eyJhbGciOiJFZDI1NTE5IiwidHlwIjoiSldUIn0.eyJrZXkiOiJ2YWx1ZSIsImlzcyI6ImRpZDphYnQ6ek5LdENOcVlXTFlXWVczZ1dSQTF2blJ5a2ZDQlpZSFp2ektyIn0.5cP-B1SCbPUZsq9NeFSRyRXBncvljUrowHd6EWCPrK-LP2j7pHQb1j9h2ZdaU2435HXL_EYChN7teilTa6xYDA';
    const result = verify(token, pk, { tolerance: 60, enforceTimestamp: false });
    expect(result).toEqual(true);
  });

  test('should be able to verify jwt token signed by java', () => {
    // eslint-disable-next-line no-shadow
    const pk = fromBase58('z2wxiRgf3fm2hmBGPJRbhLhMhYLzU5UviMitDnpELJz9a');
    const token =
      'eyJhbGciOiJFZDI1NTE5IiwidHlwIjoiSldUIn0.eyJleHAiOiIxNTU4MzQ1NDExIiwiaWF0IjoiMTU1ODM0NTM1MSIsImlzcyI6ImRpZDphYnQ6ejFiWVhqWWR0ZE52MlZoM0doSGlFYlg1ZkRmc2JiV1NjWlgiLCJuYmYiOiIxNTU4MzQ1MzUxIiwicmVxdWVzdGVkQ2xhaW1zIjpbeyJ0eXBlIjoicHJvZmlsZSIsImZ1bGxOYW1lIjoiYnVkZHkiLCJlbWFpbCI6IjE4NDYxMzIzM0BxcS5jb20ifV19.HxPj8bbKFYDSK_rdRe2BdK_7YJ_cP-MLiXOVqqUlF34hTlwLAjgHXZs5z6EiASFCDLz2Q622JbJbsiLKz558Cg';
    const result = verify(token, pk, { tolerance: 60, enforceTimestamp: false });
    expect(result).toEqual(true);
  });
});
