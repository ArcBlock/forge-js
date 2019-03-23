require('dotenv').config();

const Mcrypto = require('@arcblock/mcrypto');
const { fromSecretKey, WalletType } = require('@arcblock/forge-wallet');
const { jwtDecode, jwtSign, jwtVerify } = require('@arcblock/abt-did');
const { bytesToHex } = require('@arcblock/forge-util');
const base64 = require('base64-url');
const auth = require('../config/auth');

const type = WalletType({
  role: Mcrypto.types.RoleType.ROLE_APPLICATION,
  pk: Mcrypto.types.KeyType.ED25519,
  hash: Mcrypto.types.HashType.SHA3,
});

// const wallet = fromSecretKey(process.env.APP_SK, type);
// console.log(wallet.toJSON());

const data = {
  userInfo:
    'eyJhbGciOiJFZDI1NTE5IiwidHlwIjoiSldUIn0.eyJleHAiOiIxNTUzMjQ0NTI1IiwiaWF0IjoiMTU1MzI0NDQ2NSIsImlzcyI6ImRpZDphYnQ6ejFjM0p6bkc5clRDSGJGUTN1NWd0ekhiRTlzVUdMMjJyTnkiLCJuYmYiOiIxNTUzMjQ0NDY1IiwicmVxdWVzdGVkQ2xhaW1zIjpbeyJ0eXBlIjoicHJvZmlsZSIsImVtYWlsIjoicG90bUAxNjMuY29tIiwiZnVsbE5hbWUiOiJQYXBlciIsInBob25lIjoiMTUxMjMzNTgxOTgifV19.ZAHZTbGEgUN21NHjeecmuzaG6f-WijR6Cw22ZHK-54C-FsG8YV77zwyB5KkxsffxMjBHD9m73TdokmFxOl73Dg',
  userPk: '0x186749DC92F398C9AAF9AE0FA795A96C2549AD441069A4508A132C4F000C1FB3',
};

const payload = {
  exp: '1553244525',
  iat: '1553244465',
  iss: 'did:abt:z1c3JznG9rTCHbFQ3u5gtzHbE9sUGL22rNy',
  nbf: '1553244465',
  requestedClaims: [
    {
      type: 'profile',
      email: 'potm@163.com',
      fullName: 'Paper',
      phone: '15123358198',
    },
  ],
};
console.log({ payload });

const skB64 =
  'wkLOhdee5aM5+Fk+hEZ6b2m7wWNf4rHR139ZRJ4D4DsYZ0nckvOYyar5rg+nlalsJUmtRBBppFCKEyxPAAwfsw==';
const sk = bytesToHex(Buffer.from(base64.unescape(skB64), 'base64'));
const pk = Mcrypto.Signer.Ed25519.getPublicKey(sk);
console.log({ sk, pk });

// console.log(auth.getAuthInfo());
const { body } = jwtDecode(data.userInfo, false);
const sig = jwtSign(body.iss, sk, body);
console.log(sig);
console.log(jwtDecode(sig));
console.log(jwtVerify(data.userInfo, pk));
