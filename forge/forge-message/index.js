require('./lib/patch');
const forge = require('@arcblock/forge-proto');
const provider = require('./lib/provider');

provider.addProvider(forge);

module.exports = require('./lib/message');
