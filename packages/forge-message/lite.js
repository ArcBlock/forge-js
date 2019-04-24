require('./lib/patch');
const proto = require('./lib/proto');
Object.assign(proto, require('@arcblock/forge-proto/lite'));

module.exports = require('./lib/message');
