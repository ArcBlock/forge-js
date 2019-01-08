/* eslint no-console:"off" */
const grpc = require('grpc');
const rpcTypes = require('@arcblock/forge-proto/lib/rpc_pb');
const rpcClients = require('@arcblock/forge-proto/lib/rpc_grpc_pb');
const txTypes = require('@arcblock/forge-proto/lib/tx_pb');
const eventTypes = require('@arcblock/forge-proto/lib/event_pb');
const eventClients = require('@arcblock/forge-proto/lib/event_grpc_pb');
const enumTypes = require('@arcblock/forge-proto/lib/type_pb');
const codeTypes = require('@arcblock/forge-proto/lib/code_pb');

const constants = Object.freeze({
  StatusCode: codeTypes.StatusCode,
  KeyType: enumTypes.KeyType,
  HashType: enumTypes.HashType,
  EncodingType: enumTypes.EncodingType,
  UpgradeAction: enumTypes.UpgradeAction,
  UpgradeType: enumTypes.UpgradeType,
});

console.log({ clients: Object.keys(rpcClients).concat(Object.keys(eventClients)), constants });

// Unary
function getChainInfo() {
  const client = new rpcClients.ChainRpcClient(
    '127.0.0.1:28210',
    grpc.credentials.createInsecure()
  );
  const request = new rpcTypes.RequestGetChainInfo();
  // console.log({ client, request: request.toObject() });
  client.get_chain_info(request, function(err, response) {
    if (err) {
      return console.error(err);
    }
    console.log('chainInfo:', { response: response.toObject() });
  });
}

// Streaming
function getBlockByHeight() {
  const client = new rpcClients.ChainRpcClient(
    '127.0.0.1:28210',
    grpc.credentials.createInsecure()
  );

  const stream = client.get_block();

  stream
    .on('data', function(response) {
      const { code, block } = response.toObject();
      if (code) {
        throw new Error('response error', code);
      }
      console.log('blockInfo:', block);
    })
    .on('status', status => {
      console.info('status', status);
    })
    .on('error', err => {
      console.error('error', err);
    });

  const request = new rpcTypes.RequestGetBlock();
  request.setHeight(2);
  stream.write(request);
  stream.end();
}

getChainInfo();
getBlockByHeight();
