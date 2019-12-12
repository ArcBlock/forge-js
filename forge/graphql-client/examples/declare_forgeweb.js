/* eslint-disable import/no-extraneous-dependencies */
/* eslint no-console:"off" */

/**
 * This script demonstrates how to declare an identity on the blockchain
 *
 * In real world, identities may belong to different entities: application, user, node, device
 *
 * Run script with: `DEBUG=@arcblock/graphql-client node examples/declare.js`
 */
const axios = require('axios');
// const GraphqlClient = require('@arcblock/graphql-client');
const { JWT } = require('@arcblock/did-auth');
const { fromRandom } = require('@arcblock/forge-wallet');
const { toBase58 } = require('@arcblock/forge-util');

const endpoint = process.env.FORGE_API_HOST || 'http://127.0.0.1:8210'; // testnet
// const client = new GraphqlClient(`${endpoint}/api`);

axios.defaults.baseURL = endpoint;

(async () => {
  try {
    const user = fromRandom();
    console.log('user', user.toJSON());

    const { data } = await axios.get('/didauth/declare');
    let info = JWT.decode(data.authInfo);
    console.log('Step1', info);

    let token = JWT.sign(user.toAddress(), user.secretKey, { requestedClaims: [] });
    let payload = {
      userPk: toBase58(user.publicKey),
      userInfo: token,
    };

    let result = await axios.post(info.url, payload);
    info = JWT.decode(result.data.authInfo);
    console.log('Step2', info);

    const { requestedClaims } = info;
    requestedClaims[0].sig = toBase58(user.sign(requestedClaims[0].digest));

    token = JWT.sign(user.toAddress(), user.secretKey, { requestedClaims });
    payload = {
      userPk: toBase58(user.publicKey),
      userInfo: token,
    };

    result = await axios.post(info.url, payload);
    info = JWT.decode(result.data.authInfo);
    console.log('Step3', info);
  } catch (err) {
    console.error(err);
    console.log(JSON.stringify(err.errors));
  }
})();
