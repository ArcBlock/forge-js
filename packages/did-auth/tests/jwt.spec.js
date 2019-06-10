const multibase = require('multibase');
const base64 = require('base64-url');
const { bytesToHex } = require('@arcblock/forge-util');
const { sign, verify } = require('../lib/jwt');

const sk =
  '0xD67C071B6F51D2B61180B9B1AA9BE0DD0704619F0E30453AB4A592B036EDE644E4852B7091317E3622068E62A5127D1FB0D4AE2FC50213295E10652D2F0ABFC7';
const pk = '0xE4852B7091317E3622068E62A5127D1FB0D4AE2FC50213295E10652D2F0ABFC7';
const appId = 'zNKtCNqYWLYWYW3gWRA1vnRykfCBZYHZvzKr';

describe('#jwt', () => {
  it('should do stable sort on sign', () => {
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

  it('should sign and verify jwt token', () => {
    const token = sign(appId, sk, { key: 'value' });
    const [, bodyB64] = token.split('.');
    const body = JSON.parse(base64.decode(base64.unescape(bodyB64)));
    const result = verify(token, pk);
    expect(result).toEqual(true);
    expect(body.key).toEqual('value');
  });

  it('should be able to verify jwt token signed by elixir', () => {
    // eslint-disable-next-line no-shadow
    const pk = '0xE4852B7091317E3622068E62A5127D1FB0D4AE2FC50213295E10652D2F0ABFC7';
    const token =
      'eyJhbGciOiJFZDI1NTE5IiwidHlwIjoiSldUIn0.eyJrZXkiOiJ2YWx1ZSIsImlzcyI6ImRpZDphYnQ6ek5LdENOcVlXTFlXWVczZ1dSQTF2blJ5a2ZDQlpZSFp2ektyIn0.5cP-B1SCbPUZsq9NeFSRyRXBncvljUrowHd6EWCPrK-LP2j7pHQb1j9h2ZdaU2435HXL_EYChN7teilTa6xYDA';
    const result = verify(token, pk, 60, false);
    expect(result).toEqual(true);
  });

  it('should be able to verify jwt token signed by java', () => {
    // eslint-disable-next-line no-shadow
    const pk = bytesToHex(multibase.decode('z2wxiRgf3fm2hmBGPJRbhLhMhYLzU5UviMitDnpELJz9a'));
    const token =
      'eyJhbGciOiJFZDI1NTE5IiwidHlwIjoiSldUIn0.eyJleHAiOiIxNTU4MzQ1NDExIiwiaWF0IjoiMTU1ODM0NTM1MSIsImlzcyI6ImRpZDphYnQ6ejFiWVhqWWR0ZE52MlZoM0doSGlFYlg1ZkRmc2JiV1NjWlgiLCJuYmYiOiIxNTU4MzQ1MzUxIiwicmVxdWVzdGVkQ2xhaW1zIjpbeyJ0eXBlIjoicHJvZmlsZSIsImZ1bGxOYW1lIjoiYnVkZHkiLCJlbWFpbCI6IjE4NDYxMzIzM0BxcS5jb20ifV19.HxPj8bbKFYDSK_rdRe2BdK_7YJ_cP-MLiXOVqqUlF34hTlwLAjgHXZs5z6EiASFCDLz2Q622JbJbsiLKz558Cg';
    const result = verify(token, pk, 60, false);
    expect(result).toEqual(true);
  });
});
