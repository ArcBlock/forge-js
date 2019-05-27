require('./lib/patch');
const provider = require('./lib/provider');
const forge = require('@arcblock/forge-proto');
provider.addProvider(forge);

module.exports = require('./lib/message');
