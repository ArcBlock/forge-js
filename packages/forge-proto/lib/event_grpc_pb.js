// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var event_pb = require('./event_pb.js');
var vendor_pb = require('./vendor_pb.js');
var code_pb = require('./code_pb.js');
var type_pb = require('./type_pb.js');

function serialize_forge_abi_RequestSubscribe(arg) {
  if (!(arg instanceof event_pb.RequestSubscribe)) {
    throw new Error('Expected argument of type forge_abi.RequestSubscribe');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestSubscribe(buffer_arg) {
  return event_pb.RequestSubscribe.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseSubscribe(arg) {
  if (!(arg instanceof event_pb.ResponseSubscribe)) {
    throw new Error('Expected argument of type forge_abi.ResponseSubscribe');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseSubscribe(buffer_arg) {
  return event_pb.ResponseSubscribe.deserializeBinary(new Uint8Array(buffer_arg));
}

var EventRpcService = (exports.EventRpcService = {
  subscribe: {
    path: '/forge_abi.EventRpc/subscribe',
    requestStream: false,
    responseStream: true,
    requestType: event_pb.RequestSubscribe,
    responseType: event_pb.ResponseSubscribe,
    requestSerialize: serialize_forge_abi_RequestSubscribe,
    requestDeserialize: deserialize_forge_abi_RequestSubscribe,
    responseSerialize: serialize_forge_abi_ResponseSubscribe,
    responseDeserialize: deserialize_forge_abi_ResponseSubscribe,
  },
});

exports.EventRpcClient = grpc.makeGenericClientConstructor(EventRpcService);
