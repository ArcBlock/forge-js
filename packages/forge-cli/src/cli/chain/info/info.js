const shell = require('shelljs');
const { client } = require('core/env');

function getChainInfo() {
  client.getChainInfo().then(res => shell.echo(res.$format().info));
}

exports.run = getChainInfo;
exports.execute = getChainInfo;
