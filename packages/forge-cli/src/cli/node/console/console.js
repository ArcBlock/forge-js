const { runNativeForgeCommand } = require('core/env');

const main = runNativeForgeCommand('console');

exports.run = main;
exports.execute = main;
