const { runNativeStarterCommand } = require('core/env');

const main = runNativeStarterCommand('restart');

exports.run = main;
exports.execute = main;
