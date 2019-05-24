require('./lib/patch');
const provider = require('./lib/provider');
const forgeLite = require('@arcblock/forge-proto/lite');
provider.addProvider(forgeLite);

module.exports = require('./lib/message');
