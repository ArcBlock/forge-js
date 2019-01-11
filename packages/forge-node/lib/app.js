const { addSource } = require('@arcblock/forge-proto');

module.exports = {
  createServer: require('./server/tcp').createServer,
  addProtobuf: addSource,
};
