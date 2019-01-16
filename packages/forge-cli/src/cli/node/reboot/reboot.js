const { runNativeForgeCommand } = require('core/env');

const main = runNativeForgeCommand('reboot');

exports.run = main;
exports.execute = main;
