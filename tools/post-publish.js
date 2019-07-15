/* eslint-disable no-console */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const fs = require('fs');
const path = require('path');
const axios = require('axios');

const sleep = timeout => new Promise(resolve => setTimeout(resolve, timeout));
const packages = fs.readdirSync(path.join(__dirname, '../packages'));

packages.forEach(async (x, i) => {
  const packageFile = path.join(__dirname, '../packages', x, 'package.json');
  if (fs.existsSync(packageFile)) {
    await sleep(i * 200);
    const json = require(packageFile);
    try {
      const res = await axios.put(`https://npm.taobao.org/sync/${json.name}?sync_upstream=true`);
      console.log('trigger cnpm sync success', json.name, res.data);
    } catch (err) {
      console.error('trigger cnpm sync failed', json.name, err);
    }
  }
});
