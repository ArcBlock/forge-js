/* eslint-disable no-console */
const axios = require('axios');

const { getPackages, sleep } = require('./util');

getPackages({ publicOnly: true }).forEach(async (x, i) => {
  await sleep(i * 200);
  try {
    const res = await axios.put(`https://npm.taobao.org/sync/${x.name}?sync_upstream=true`);
    console.log('trigger cnpm sync success', x.name, res.data);
  } catch (err) {
    console.error('trigger cnpm sync failed', x.name, err);
  }
});
