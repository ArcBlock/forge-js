const interface = require('interface');

module.exports = interface.create('genKeyPair', 'getPublicKey', 'sign', 'verify');
