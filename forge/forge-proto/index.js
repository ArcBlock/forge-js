const proto = require('./proto-full');
const provider = require('./provider');
const json = require('./lib/spec.json');

module.exports = provider(proto, json);
