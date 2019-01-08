var messages = require('@arcblock/forge-proto/rpc_pb');
var services = require('@arcblock/forge-proto/rpc_grpc_pb');

var grpc = require('grpc');

console.log({ services: Object.keys(services) });
console.log({ StateRpcService: services.StateRpcService });

function main() {
  var client = new services.StateRpcClient('127.0.0.1:28210', grpc.credentials.createInsecure());
  var request = new messages.RequestGetForgeState();
  request.setKey('height');
  request.setAppHash('56E81F171BCC55A6FF8345E692C0F86E5B48E01B996CADC001622FB5E363B421');
  console.log({ client, request: request.toObject() });
  client.get_forge_state(request, function(err, response) {
    if (err) {
      return console.error(err);
    }
    console.log('state:', { response: response.toObject() });
  });
}

main();
