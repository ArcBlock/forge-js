const ForgeSDK = require('./lite');

ForgeSDK.connect('http://127.0.0.1:8210/api', { name: 'http' });
ForgeSDK.connect('tcp://127.0.0.1:28210', { name: 'tcp' });

(async () => {
  console.log(ForgeSDK.Wallet.fromSecretKey(process.env.FORGE_MODERATOR_SK));
  const res = await ForgeSDK.getChainInfo(null, { conn: 'tcp' });
  console.log(res);
})();
