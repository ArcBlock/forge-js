const ForgeSDK = require('./index');

ForgeSDK.connect('http://127.0.0.1:8210/api', { name: 'local' });

(async () => {
  const res = await ForgeSDK.getChainInfo();
  console.log(res);
})();
