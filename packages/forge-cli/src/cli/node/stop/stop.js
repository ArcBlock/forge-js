const { runNativeForgeCommand } = require('core/env');

const main = runNativeForgeCommand('stop');

exports.run = main;
exports.execute = main;
