require('./lib/patch');
const forgeLite = require('@arcblock/forge-proto/lite');
const provider = require('./lib/provider');

provider.addProvider(forgeLite);

module.exports = require('./lib/message');
