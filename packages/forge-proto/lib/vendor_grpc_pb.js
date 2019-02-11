// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var vendor_pb = require('./vendor_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_abci_vendor_RequestBeginBlock(arg) {
  if (!(arg instanceof vendor_pb.RequestBeginBlock)) {
    throw new Error('Expected argument of type abci_vendor.RequestBeginBlock');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_abci_vendor_RequestBeginBlock(buffer_arg) {
  return vendor_pb.RequestBeginBlock.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_abci_vendor_RequestCheckTx(arg) {
  if (!(arg instanceof vendor_pb.RequestCheckTx)) {
    throw new Error('Expected argument of type abci_vendor.RequestCheckTx');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_abci_vendor_RequestCheckTx(buffer_arg) {
  return vendor_pb.RequestCheckTx.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_abci_vendor_RequestCommit(arg) {
  if (!(arg instanceof vendor_pb.RequestCommit)) {
    throw new Error('Expected argument of type abci_vendor.RequestCommit');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_abci_vendor_RequestCommit(buffer_arg) {
  return vendor_pb.RequestCommit.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_abci_vendor_RequestDeliverTx(arg) {
  if (!(arg instanceof vendor_pb.RequestDeliverTx)) {
    throw new Error('Expected argument of type abci_vendor.RequestDeliverTx');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_abci_vendor_RequestDeliverTx(buffer_arg) {
  return vendor_pb.RequestDeliverTx.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_abci_vendor_RequestEcho(arg) {
  if (!(arg instanceof vendor_pb.RequestEcho)) {
    throw new Error('Expected argument of type abci_vendor.RequestEcho');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_abci_vendor_RequestEcho(buffer_arg) {
  return vendor_pb.RequestEcho.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_abci_vendor_RequestEndBlock(arg) {
  if (!(arg instanceof vendor_pb.RequestEndBlock)) {
    throw new Error('Expected argument of type abci_vendor.RequestEndBlock');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_abci_vendor_RequestEndBlock(buffer_arg) {
  return vendor_pb.RequestEndBlock.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_abci_vendor_RequestFlush(arg) {
  if (!(arg instanceof vendor_pb.RequestFlush)) {
    throw new Error('Expected argument of type abci_vendor.RequestFlush');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_abci_vendor_RequestFlush(buffer_arg) {
  return vendor_pb.RequestFlush.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_abci_vendor_RequestInfo(arg) {
  if (!(arg instanceof vendor_pb.RequestInfo)) {
    throw new Error('Expected argument of type abci_vendor.RequestInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_abci_vendor_RequestInfo(buffer_arg) {
  return vendor_pb.RequestInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_abci_vendor_RequestInitChain(arg) {
  if (!(arg instanceof vendor_pb.RequestInitChain)) {
    throw new Error('Expected argument of type abci_vendor.RequestInitChain');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_abci_vendor_RequestInitChain(buffer_arg) {
  return vendor_pb.RequestInitChain.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_abci_vendor_RequestQuery(arg) {
  if (!(arg instanceof vendor_pb.RequestQuery)) {
    throw new Error('Expected argument of type abci_vendor.RequestQuery');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_abci_vendor_RequestQuery(buffer_arg) {
  return vendor_pb.RequestQuery.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_abci_vendor_RequestSetOption(arg) {
  if (!(arg instanceof vendor_pb.RequestSetOption)) {
    throw new Error('Expected argument of type abci_vendor.RequestSetOption');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_abci_vendor_RequestSetOption(buffer_arg) {
  return vendor_pb.RequestSetOption.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_abci_vendor_ResponseBeginBlock(arg) {
  if (!(arg instanceof vendor_pb.ResponseBeginBlock)) {
    throw new Error('Expected argument of type abci_vendor.ResponseBeginBlock');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_abci_vendor_ResponseBeginBlock(buffer_arg) {
  return vendor_pb.ResponseBeginBlock.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_abci_vendor_ResponseCheckTx(arg) {
  if (!(arg instanceof vendor_pb.ResponseCheckTx)) {
    throw new Error('Expected argument of type abci_vendor.ResponseCheckTx');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_abci_vendor_ResponseCheckTx(buffer_arg) {
  return vendor_pb.ResponseCheckTx.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_abci_vendor_ResponseCommit(arg) {
  if (!(arg instanceof vendor_pb.ResponseCommit)) {
    throw new Error('Expected argument of type abci_vendor.ResponseCommit');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_abci_vendor_ResponseCommit(buffer_arg) {
  return vendor_pb.ResponseCommit.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_abci_vendor_ResponseDeliverTx(arg) {
  if (!(arg instanceof vendor_pb.ResponseDeliverTx)) {
    throw new Error('Expected argument of type abci_vendor.ResponseDeliverTx');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_abci_vendor_ResponseDeliverTx(buffer_arg) {
  return vendor_pb.ResponseDeliverTx.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_abci_vendor_ResponseEcho(arg) {
  if (!(arg instanceof vendor_pb.ResponseEcho)) {
    throw new Error('Expected argument of type abci_vendor.ResponseEcho');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_abci_vendor_ResponseEcho(buffer_arg) {
  return vendor_pb.ResponseEcho.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_abci_vendor_ResponseEndBlock(arg) {
  if (!(arg instanceof vendor_pb.ResponseEndBlock)) {
    throw new Error('Expected argument of type abci_vendor.ResponseEndBlock');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_abci_vendor_ResponseEndBlock(buffer_arg) {
  return vendor_pb.ResponseEndBlock.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_abci_vendor_ResponseFlush(arg) {
  if (!(arg instanceof vendor_pb.ResponseFlush)) {
    throw new Error('Expected argument of type abci_vendor.ResponseFlush');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_abci_vendor_ResponseFlush(buffer_arg) {
  return vendor_pb.ResponseFlush.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_abci_vendor_ResponseInfo(arg) {
  if (!(arg instanceof vendor_pb.ResponseInfo)) {
    throw new Error('Expected argument of type abci_vendor.ResponseInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_abci_vendor_ResponseInfo(buffer_arg) {
  return vendor_pb.ResponseInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_abci_vendor_ResponseInitChain(arg) {
  if (!(arg instanceof vendor_pb.ResponseInitChain)) {
    throw new Error('Expected argument of type abci_vendor.ResponseInitChain');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_abci_vendor_ResponseInitChain(buffer_arg) {
  return vendor_pb.ResponseInitChain.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_abci_vendor_ResponseQuery(arg) {
  if (!(arg instanceof vendor_pb.ResponseQuery)) {
    throw new Error('Expected argument of type abci_vendor.ResponseQuery');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_abci_vendor_ResponseQuery(buffer_arg) {
  return vendor_pb.ResponseQuery.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_abci_vendor_ResponseSetOption(arg) {
  if (!(arg instanceof vendor_pb.ResponseSetOption)) {
    throw new Error('Expected argument of type abci_vendor.ResponseSetOption');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_abci_vendor_ResponseSetOption(buffer_arg) {
  return vendor_pb.ResponseSetOption.deserializeBinary(new Uint8Array(buffer_arg));
}

// ----------------------------------------
// Service Definition
//
var ABCIApplicationService = (exports.ABCIApplicationService = {
  echo: {
    path: '/abci_vendor.ABCIApplication/Echo',
    requestStream: false,
    responseStream: false,
    requestType: vendor_pb.RequestEcho,
    responseType: vendor_pb.ResponseEcho,
    requestSerialize: serialize_abci_vendor_RequestEcho,
    requestDeserialize: deserialize_abci_vendor_RequestEcho,
    responseSerialize: serialize_abci_vendor_ResponseEcho,
    responseDeserialize: deserialize_abci_vendor_ResponseEcho,
  },
  flush: {
    path: '/abci_vendor.ABCIApplication/Flush',
    requestStream: false,
    responseStream: false,
    requestType: vendor_pb.RequestFlush,
    responseType: vendor_pb.ResponseFlush,
    requestSerialize: serialize_abci_vendor_RequestFlush,
    requestDeserialize: deserialize_abci_vendor_RequestFlush,
    responseSerialize: serialize_abci_vendor_ResponseFlush,
    responseDeserialize: deserialize_abci_vendor_ResponseFlush,
  },
  info: {
    path: '/abci_vendor.ABCIApplication/Info',
    requestStream: false,
    responseStream: false,
    requestType: vendor_pb.RequestInfo,
    responseType: vendor_pb.ResponseInfo,
    requestSerialize: serialize_abci_vendor_RequestInfo,
    requestDeserialize: deserialize_abci_vendor_RequestInfo,
    responseSerialize: serialize_abci_vendor_ResponseInfo,
    responseDeserialize: deserialize_abci_vendor_ResponseInfo,
  },
  setOption: {
    path: '/abci_vendor.ABCIApplication/SetOption',
    requestStream: false,
    responseStream: false,
    requestType: vendor_pb.RequestSetOption,
    responseType: vendor_pb.ResponseSetOption,
    requestSerialize: serialize_abci_vendor_RequestSetOption,
    requestDeserialize: deserialize_abci_vendor_RequestSetOption,
    responseSerialize: serialize_abci_vendor_ResponseSetOption,
    responseDeserialize: deserialize_abci_vendor_ResponseSetOption,
  },
  deliverTx: {
    path: '/abci_vendor.ABCIApplication/DeliverTx',
    requestStream: false,
    responseStream: false,
    requestType: vendor_pb.RequestDeliverTx,
    responseType: vendor_pb.ResponseDeliverTx,
    requestSerialize: serialize_abci_vendor_RequestDeliverTx,
    requestDeserialize: deserialize_abci_vendor_RequestDeliverTx,
    responseSerialize: serialize_abci_vendor_ResponseDeliverTx,
    responseDeserialize: deserialize_abci_vendor_ResponseDeliverTx,
  },
  checkTx: {
    path: '/abci_vendor.ABCIApplication/CheckTx',
    requestStream: false,
    responseStream: false,
    requestType: vendor_pb.RequestCheckTx,
    responseType: vendor_pb.ResponseCheckTx,
    requestSerialize: serialize_abci_vendor_RequestCheckTx,
    requestDeserialize: deserialize_abci_vendor_RequestCheckTx,
    responseSerialize: serialize_abci_vendor_ResponseCheckTx,
    responseDeserialize: deserialize_abci_vendor_ResponseCheckTx,
  },
  query: {
    path: '/abci_vendor.ABCIApplication/Query',
    requestStream: false,
    responseStream: false,
    requestType: vendor_pb.RequestQuery,
    responseType: vendor_pb.ResponseQuery,
    requestSerialize: serialize_abci_vendor_RequestQuery,
    requestDeserialize: deserialize_abci_vendor_RequestQuery,
    responseSerialize: serialize_abci_vendor_ResponseQuery,
    responseDeserialize: deserialize_abci_vendor_ResponseQuery,
  },
  commit: {
    path: '/abci_vendor.ABCIApplication/Commit',
    requestStream: false,
    responseStream: false,
    requestType: vendor_pb.RequestCommit,
    responseType: vendor_pb.ResponseCommit,
    requestSerialize: serialize_abci_vendor_RequestCommit,
    requestDeserialize: deserialize_abci_vendor_RequestCommit,
    responseSerialize: serialize_abci_vendor_ResponseCommit,
    responseDeserialize: deserialize_abci_vendor_ResponseCommit,
  },
  initChain: {
    path: '/abci_vendor.ABCIApplication/InitChain',
    requestStream: false,
    responseStream: false,
    requestType: vendor_pb.RequestInitChain,
    responseType: vendor_pb.ResponseInitChain,
    requestSerialize: serialize_abci_vendor_RequestInitChain,
    requestDeserialize: deserialize_abci_vendor_RequestInitChain,
    responseSerialize: serialize_abci_vendor_ResponseInitChain,
    responseDeserialize: deserialize_abci_vendor_ResponseInitChain,
  },
  beginBlock: {
    path: '/abci_vendor.ABCIApplication/BeginBlock',
    requestStream: false,
    responseStream: false,
    requestType: vendor_pb.RequestBeginBlock,
    responseType: vendor_pb.ResponseBeginBlock,
    requestSerialize: serialize_abci_vendor_RequestBeginBlock,
    requestDeserialize: deserialize_abci_vendor_RequestBeginBlock,
    responseSerialize: serialize_abci_vendor_ResponseBeginBlock,
    responseDeserialize: deserialize_abci_vendor_ResponseBeginBlock,
  },
  endBlock: {
    path: '/abci_vendor.ABCIApplication/EndBlock',
    requestStream: false,
    responseStream: false,
    requestType: vendor_pb.RequestEndBlock,
    responseType: vendor_pb.ResponseEndBlock,
    requestSerialize: serialize_abci_vendor_RequestEndBlock,
    requestDeserialize: deserialize_abci_vendor_RequestEndBlock,
    responseSerialize: serialize_abci_vendor_ResponseEndBlock,
    responseDeserialize: deserialize_abci_vendor_ResponseEndBlock,
  },
});

exports.ABCIApplicationClient = grpc.makeGenericClientConstructor(ABCIApplicationService);
