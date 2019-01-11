const path = require('path');
const { ForgeApp } = require('../');
ForgeApp.addProtobuf({
  baseDir: path.resolve(__dirname, '../docs/gen/'),
  packageName: 'kvstore_abi',
  typeUrls: {
    KvTx: 'KV/kv',
    AccountKvState: 'KV/kv_state',
  },
});
