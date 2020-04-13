/* eslint-disable import/no-extraneous-dependencies */
/* eslint no-console:"off" */

/**
 * This script demonstrates how to declare an identity on the blockchain
 *
 * In real world, identities may belong to different entities: application, user, node, device
 *
 * Run script with: `DEBUG=@arcblock/graphql-client node examples/declare_forgeweb.js`
 */
const axios = require('axios');
const { JWT } = require('@arcblock/did-auth');
const { fromRandom } = require('@arcblock/forge-wallet');
const { toBase58 } = require('@arcblock/forge-util');

// const endpoint = process.env.FORGE_API_HOST || 'http://127.0.0.1:8210';
const endpoint = process.env.FORGE_API_HOST || 'https://xenon.abtnetwork.io';

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
    const { origin, digest } = requestedClaims[0];
    if (toBase58(user.hash(origin)) !== digest) {
      throw new Error('Origin and digest do not match');
    }
    requestedClaims[0].sig = toBase58(user.sign(origin));

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
