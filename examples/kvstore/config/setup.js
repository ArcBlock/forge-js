const path = require('path');
const { addProtobuf } = require('@arcblock/forge-sdk');

// Append application specific proto for use
addProtobuf({
  baseDir: path.resolve(__dirname, '../protobufs/gen/'),
  packageName: 'kvstore_abi',
  typeUrls: {
    KvTx: 'KV/kv',
    AccountKvState: 'KV/kv_state',
  },
});
