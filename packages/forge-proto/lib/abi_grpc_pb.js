// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var abi_pb = require('./abi_pb.js');
var code_pb = require('./code_pb.js');
var type_pb = require('./type_pb.js');
var state_pb = require('./state_pb.js');

function serialize_forge_abi_Request(arg) {
  if (!(arg instanceof abi_pb.Request)) {
    throw new Error('Expected argument of type forge_abi.Request');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_forge_abi_Request(buffer_arg) {
  return abi_pb.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_Response(arg) {
  if (!(arg instanceof abi_pb.Response)) {
    throw new Error('Expected argument of type forge_abi.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_forge_abi_Response(buffer_arg) {
  return abi_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

// ABI for forge application
//
var ForgeAppRpcService = (exports.ForgeAppRpcService = {
  process_one: {
    path: '/forge_abi.ForgeAppRpc/process_one',
    requestStream: false,
    responseStream: false,
    requestType: abi_pb.Request,
    responseType: abi_pb.Response,
    requestSerialize: serialize_forge_abi_Request,
    requestDeserialize: deserialize_forge_abi_Request,
    responseSerialize: serialize_forge_abi_Response,
    responseDeserialize: deserialize_forge_abi_Response,
  },
  process: {
    path: '/forge_abi.ForgeAppRpc/process',
    requestStream: true,
    responseStream: true,
    requestType: abi_pb.Request,
    responseType: abi_pb.Response,
    requestSerialize: serialize_forge_abi_Request,
    requestDeserialize: deserialize_forge_abi_Request,
    responseSerialize: serialize_forge_abi_Response,
    responseDeserialize: deserialize_forge_abi_Response,
  },
});

exports.ForgeAppRpcClient = grpc.makeGenericClientConstructor(ForgeAppRpcService);
