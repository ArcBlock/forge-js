const util = require('./lib/util');

module.exports = Object.assign(
  {
    ForgeRpc: require('./lib/rpc'),
    AppServer: require('./lib/server'),
  },
  util
);
