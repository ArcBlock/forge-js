const fs = require('fs');

const { ensureRequiredDirs, createRpcClient } = require('./env');
ensureRequiredDirs();

if (process.env.FORGE_CONFIG && fs.existsSync(process.env.FORGE_CONFIG)) {
  createRpcClient();
}
