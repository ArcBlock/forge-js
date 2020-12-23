const { types } = require('@arcblock/mcrypto');
const { fromRandom, WalletType } = require('@arcblock/forge-wallet');

const { fromAppDid } = require('../');

const type = WalletType({ role: types.RoleType.ROLE_ACCOUNT });
const rootSk =
  '0x07abfceff5cdfb0cd164d2da98099c15b7223fc5a1b8c02c2cf1f74670c72aac27e1d28ed47cf4f2c4330a6e6e1dc0724721e80fa56177fdba926937a253fe7e';

// let wallet = fromAppDid('', rootSk, type);
// console.log(wallet.toJSON());
// wallet = fromAppDid('zNKdqQxDUVz2YkfArfqc1CzjbX2QSNnMk1iW', rootSk, type);
// console.log(wallet.toJSON());
// return;

// FIXME: this code works not jest failed: RangeError: Maximum call stack size exceeded
describe.skip('getUserWallet', () => {
  test('should gen valid user wallet from appDid', () => {
    const app = fromRandom(type);
    const root = fromRandom(type);

    const wallet = fromAppDid(app.toAddress(), root.secretKey);

    const message = 'abc';
    const sig = wallet.sign(message);

    expect(sig).toBeTruthy();
    expect(wallet.verify(message, sig)).toBeTruthy();
  });

  test('should gen same userDid with native wallet from non-empty appDid', () => {
    const wallet = fromAppDid('zNKdqQxDUVz2YkfArfqc1CzjbX2QSNnMk1iW', rootSk, type);
    expect(wallet.toAddress()).toEqual('z1m7dNPVzpgMwRSXDtKywWK6tp5mbK57bN5');
  });

  test('should gen same userDid with native wallet from empty appDid', () => {
    const wallet = fromAppDid('', rootSk, type);
    expect(wallet.toAddress()).toEqual('z1Zhi9h6do1EUNkM63CEXHonyHx47WQKtxB');
  });
});
