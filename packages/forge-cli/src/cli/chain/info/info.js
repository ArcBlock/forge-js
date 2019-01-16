const shell = require('shelljs');
const pretty = require('json-stringify-pretty-compact');
const { client } = require('core/env');

function getChainInfo() {
  client.getChainInfo().then(res => shell.echo(pretty(res.$format().info)));
}

exports.run = getChainInfo;
exports.execute = getChainInfo;
