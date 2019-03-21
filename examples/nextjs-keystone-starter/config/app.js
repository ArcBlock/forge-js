const qs = require('querystring');
const multibase = require('multibase');
// const Mcrypto = require('@arcblock/mcrypto');
const { hexToBytes } = require('@arcblock/forge-util');

const wallet = {
  type: {
    role: 'ROLE_APPLICATION',
    pk: 'ED25519',
    hash: 'SHA3',
    address: 'BASE58',
  },
  sk: process.env.APP_SK,
  pk: '0xdcadd4fe1d595da9a53910af1b45d26ff4d1f4ac91486244394a5bdf50456407',
  address: 'zNKgxkxo4EDpUFkEAAJr7krqH9sH4VTM8kU2',
};

const meta = {};

module.exports = {
  wallet,
  meta,

  getLoginUri() {
    const params = {
      appPk: multibase.encode('base58btc', hexToBytes(wallet.pk)),
      appDid: `abt:did:${wallet.address}`,
      action: 'requestAuth',
      url: 'http://localhost:3000/api/auth',
    };

    return `https://arcwallet.io/i?${qs.stringify(params)}`;
  },
};
