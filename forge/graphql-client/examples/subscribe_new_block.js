/* eslint-disable import/no-extraneous-dependencies */
/* eslint no-console:"off" */

/**
 * This script demonstrates how to subscribe a transfer
 *
 * Run script with: `DEBUG=@arcblock/graphql-client node examples/subscribe_new_block.js`
 */
const GraphqlClient = require('../lib/node');

const endpoint = process.env.FORGE_API_HOST || 'http://127.0.0.1:8210';
// const endpoint = process.env.FORGE_API_HOST || 'https://xenon.abtnetwork.io';
// const endpoint = process.env.FORGE_API_HOST || 'https://playground.network.arcblockio.cn';

const client = new GraphqlClient(`${endpoint}/api`);

(async () => {
  try {
    const subscription = await client.doRawSubscription(`
      subscription {
        subscribe(topic: "end_block") {
          topic
          endBlock {
            height
          }
        }
      }
    `);

    subscription.on('data', d => console.log('onNewBlock', d));
    subscription.on('error', console.error);
  } catch (err) {
    console.error(err);
    console.log(JSON.stringify(err.errors));
  }
})();
