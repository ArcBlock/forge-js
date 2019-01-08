// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var rpc_pb = require('./rpc_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
var code_pb = require('./code_pb.js');
var type_pb = require('./type_pb.js');
var state_pb = require('./state_pb.js');

function serialize_forge_abi_RequestCreateTx(arg) {
  if (!(arg instanceof rpc_pb.RequestCreateTx)) {
    throw new Error('Expected argument of type forge_abi.RequestCreateTx');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_forge_abi_RequestCreateTx(buffer_arg) {
  return rpc_pb.RequestCreateTx.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestCreateWallet(arg) {
  if (!(arg instanceof rpc_pb.RequestCreateWallet)) {
    throw new Error('Expected argument of type forge_abi.RequestCreateWallet');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_forge_abi_RequestCreateWallet(buffer_arg) {
  return rpc_pb.RequestCreateWallet.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestGetAccountState(arg) {
  if (!(arg instanceof rpc_pb.RequestGetAccountState)) {
    throw new Error('Expected argument of type forge_abi.RequestGetAccountState');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_forge_abi_RequestGetAccountState(buffer_arg) {
  return rpc_pb.RequestGetAccountState.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestGetAssetState(arg) {
  if (!(arg instanceof rpc_pb.RequestGetAssetState)) {
    throw new Error('Expected argument of type forge_abi.RequestGetAssetState');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_forge_abi_RequestGetAssetState(buffer_arg) {
  return rpc_pb.RequestGetAssetState.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestGetBlock(arg) {
  if (!(arg instanceof rpc_pb.RequestGetBlock)) {
    throw new Error('Expected argument of type forge_abi.RequestGetBlock');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_forge_abi_RequestGetBlock(buffer_arg) {
  return rpc_pb.RequestGetBlock.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestGetChainInfo(arg) {
  if (!(arg instanceof rpc_pb.RequestGetChainInfo)) {
    throw new Error('Expected argument of type forge_abi.RequestGetChainInfo');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_forge_abi_RequestGetChainInfo(buffer_arg) {
  return rpc_pb.RequestGetChainInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestGetChannelState(arg) {
  if (!(arg instanceof rpc_pb.RequestGetChannelState)) {
    throw new Error('Expected argument of type forge_abi.RequestGetChannelState');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_forge_abi_RequestGetChannelState(buffer_arg) {
  return rpc_pb.RequestGetChannelState.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestGetForgeState(arg) {
  if (!(arg instanceof rpc_pb.RequestGetForgeState)) {
    throw new Error('Expected argument of type forge_abi.RequestGetForgeState');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_forge_abi_RequestGetForgeState(buffer_arg) {
  return rpc_pb.RequestGetForgeState.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestGetTx(arg) {
  if (!(arg instanceof rpc_pb.RequestGetTx)) {
    throw new Error('Expected argument of type forge_abi.RequestGetTx');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_forge_abi_RequestGetTx(buffer_arg) {
  return rpc_pb.RequestGetTx.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestListWallets(arg) {
  if (!(arg instanceof rpc_pb.RequestListWallets)) {
    throw new Error('Expected argument of type forge_abi.RequestListWallets');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_forge_abi_RequestListWallets(buffer_arg) {
  return rpc_pb.RequestListWallets.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestLoadFile(arg) {
  if (!(arg instanceof rpc_pb.RequestLoadFile)) {
    throw new Error('Expected argument of type forge_abi.RequestLoadFile');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_forge_abi_RequestLoadFile(buffer_arg) {
  return rpc_pb.RequestLoadFile.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestLoadWallet(arg) {
  if (!(arg instanceof rpc_pb.RequestLoadWallet)) {
    throw new Error('Expected argument of type forge_abi.RequestLoadWallet');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_forge_abi_RequestLoadWallet(buffer_arg) {
  return rpc_pb.RequestLoadWallet.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestRecoverWallet(arg) {
  if (!(arg instanceof rpc_pb.RequestRecoverWallet)) {
    throw new Error('Expected argument of type forge_abi.RequestRecoverWallet');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_forge_abi_RequestRecoverWallet(buffer_arg) {
  return rpc_pb.RequestRecoverWallet.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestRemoveWallet(arg) {
  if (!(arg instanceof rpc_pb.RequestRemoveWallet)) {
    throw new Error('Expected argument of type forge_abi.RequestRemoveWallet');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_forge_abi_RequestRemoveWallet(buffer_arg) {
  return rpc_pb.RequestRemoveWallet.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestSearch(arg) {
  if (!(arg instanceof rpc_pb.RequestSearch)) {
    throw new Error('Expected argument of type forge_abi.RequestSearch');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_forge_abi_RequestSearch(buffer_arg) {
  return rpc_pb.RequestSearch.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestSendTx(arg) {
  if (!(arg instanceof rpc_pb.RequestSendTx)) {
    throw new Error('Expected argument of type forge_abi.RequestSendTx');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_forge_abi_RequestSendTx(buffer_arg) {
  return rpc_pb.RequestSendTx.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestStoreFile(arg) {
  if (!(arg instanceof rpc_pb.RequestStoreFile)) {
    throw new Error('Expected argument of type forge_abi.RequestStoreFile');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_forge_abi_RequestStoreFile(buffer_arg) {
  return rpc_pb.RequestStoreFile.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseCreateTx(arg) {
  if (!(arg instanceof rpc_pb.ResponseCreateTx)) {
    throw new Error('Expected argument of type forge_abi.ResponseCreateTx');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseCreateTx(buffer_arg) {
  return rpc_pb.ResponseCreateTx.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseCreateWallet(arg) {
  if (!(arg instanceof rpc_pb.ResponseCreateWallet)) {
    throw new Error('Expected argument of type forge_abi.ResponseCreateWallet');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseCreateWallet(buffer_arg) {
  return rpc_pb.ResponseCreateWallet.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseGetAccountState(arg) {
  if (!(arg instanceof rpc_pb.ResponseGetAccountState)) {
    throw new Error('Expected argument of type forge_abi.ResponseGetAccountState');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseGetAccountState(buffer_arg) {
  return rpc_pb.ResponseGetAccountState.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseGetAssetState(arg) {
  if (!(arg instanceof rpc_pb.ResponseGetAssetState)) {
    throw new Error('Expected argument of type forge_abi.ResponseGetAssetState');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseGetAssetState(buffer_arg) {
  return rpc_pb.ResponseGetAssetState.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseGetBlock(arg) {
  if (!(arg instanceof rpc_pb.ResponseGetBlock)) {
    throw new Error('Expected argument of type forge_abi.ResponseGetBlock');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseGetBlock(buffer_arg) {
  return rpc_pb.ResponseGetBlock.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseGetChainInfo(arg) {
  if (!(arg instanceof rpc_pb.ResponseGetChainInfo)) {
    throw new Error('Expected argument of type forge_abi.ResponseGetChainInfo');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseGetChainInfo(buffer_arg) {
  return rpc_pb.ResponseGetChainInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseGetChannelState(arg) {
  if (!(arg instanceof rpc_pb.ResponseGetChannelState)) {
    throw new Error('Expected argument of type forge_abi.ResponseGetChannelState');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseGetChannelState(buffer_arg) {
  return rpc_pb.ResponseGetChannelState.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseGetForgeState(arg) {
  if (!(arg instanceof rpc_pb.ResponseGetForgeState)) {
    throw new Error('Expected argument of type forge_abi.ResponseGetForgeState');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseGetForgeState(buffer_arg) {
  return rpc_pb.ResponseGetForgeState.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseGetTx(arg) {
  if (!(arg instanceof rpc_pb.ResponseGetTx)) {
    throw new Error('Expected argument of type forge_abi.ResponseGetTx');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseGetTx(buffer_arg) {
  return rpc_pb.ResponseGetTx.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseListWallet(arg) {
  if (!(arg instanceof rpc_pb.ResponseListWallet)) {
    throw new Error('Expected argument of type forge_abi.ResponseListWallet');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseListWallet(buffer_arg) {
  return rpc_pb.ResponseListWallet.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseLoadFile(arg) {
  if (!(arg instanceof rpc_pb.ResponseLoadFile)) {
    throw new Error('Expected argument of type forge_abi.ResponseLoadFile');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseLoadFile(buffer_arg) {
  return rpc_pb.ResponseLoadFile.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseLoadWallet(arg) {
  if (!(arg instanceof rpc_pb.ResponseLoadWallet)) {
    throw new Error('Expected argument of type forge_abi.ResponseLoadWallet');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseLoadWallet(buffer_arg) {
  return rpc_pb.ResponseLoadWallet.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseRecoverWallet(arg) {
  if (!(arg instanceof rpc_pb.ResponseRecoverWallet)) {
    throw new Error('Expected argument of type forge_abi.ResponseRecoverWallet');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseRecoverWallet(buffer_arg) {
  return rpc_pb.ResponseRecoverWallet.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseRemoveWallet(arg) {
  if (!(arg instanceof rpc_pb.ResponseRemoveWallet)) {
    throw new Error('Expected argument of type forge_abi.ResponseRemoveWallet');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseRemoveWallet(buffer_arg) {
  return rpc_pb.ResponseRemoveWallet.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseSearch(arg) {
  if (!(arg instanceof rpc_pb.ResponseSearch)) {
    throw new Error('Expected argument of type forge_abi.ResponseSearch');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseSearch(buffer_arg) {
  return rpc_pb.ResponseSearch.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseSendTx(arg) {
  if (!(arg instanceof rpc_pb.ResponseSendTx)) {
    throw new Error('Expected argument of type forge_abi.ResponseSendTx');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseSendTx(buffer_arg) {
  return rpc_pb.ResponseSendTx.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseStoreFile(arg) {
  if (!(arg instanceof rpc_pb.ResponseStoreFile)) {
    throw new Error('Expected argument of type forge_abi.ResponseStoreFile');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseStoreFile(buffer_arg) {
  return rpc_pb.ResponseStoreFile.deserializeBinary(new Uint8Array(buffer_arg));
}


// forge RPC definition
//
var ChainRpcService = exports.ChainRpcService = {
  // tx related
  create_tx: {
    path: '/forge_abi.ChainRpc/create_tx',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestCreateTx,
    responseType: rpc_pb.ResponseCreateTx,
    requestSerialize: serialize_forge_abi_RequestCreateTx,
    requestDeserialize: deserialize_forge_abi_RequestCreateTx,
    responseSerialize: serialize_forge_abi_ResponseCreateTx,
    responseDeserialize: deserialize_forge_abi_ResponseCreateTx,
  },
  send_tx: {
    path: '/forge_abi.ChainRpc/send_tx',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestSendTx,
    responseType: rpc_pb.ResponseSendTx,
    requestSerialize: serialize_forge_abi_RequestSendTx,
    requestDeserialize: deserialize_forge_abi_RequestSendTx,
    responseSerialize: serialize_forge_abi_ResponseSendTx,
    responseDeserialize: deserialize_forge_abi_ResponseSendTx,
  },
  get_tx: {
    path: '/forge_abi.ChainRpc/get_tx',
    requestStream: true,
    responseStream: true,
    requestType: rpc_pb.RequestGetTx,
    responseType: rpc_pb.ResponseGetTx,
    requestSerialize: serialize_forge_abi_RequestGetTx,
    requestDeserialize: deserialize_forge_abi_RequestGetTx,
    responseSerialize: serialize_forge_abi_ResponseGetTx,
    responseDeserialize: deserialize_forge_abi_ResponseGetTx,
  },
  get_block: {
    path: '/forge_abi.ChainRpc/get_block',
    requestStream: true,
    responseStream: true,
    requestType: rpc_pb.RequestGetBlock,
    responseType: rpc_pb.ResponseGetBlock,
    requestSerialize: serialize_forge_abi_RequestGetBlock,
    requestDeserialize: deserialize_forge_abi_RequestGetBlock,
    responseSerialize: serialize_forge_abi_ResponseGetBlock,
    responseDeserialize: deserialize_forge_abi_ResponseGetBlock,
  },
  // utility
  get_chain_info: {
    path: '/forge_abi.ChainRpc/get_chain_info',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestGetChainInfo,
    responseType: rpc_pb.ResponseGetChainInfo,
    requestSerialize: serialize_forge_abi_RequestGetChainInfo,
    requestDeserialize: deserialize_forge_abi_RequestGetChainInfo,
    responseSerialize: serialize_forge_abi_ResponseGetChainInfo,
    responseDeserialize: deserialize_forge_abi_ResponseGetChainInfo,
  },
  search: {
    path: '/forge_abi.ChainRpc/search',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestSearch,
    responseType: rpc_pb.ResponseSearch,
    requestSerialize: serialize_forge_abi_RequestSearch,
    requestDeserialize: deserialize_forge_abi_RequestSearch,
    responseSerialize: serialize_forge_abi_ResponseSearch,
    responseDeserialize: deserialize_forge_abi_ResponseSearch,
  },
};

exports.ChainRpcClient = grpc.makeGenericClientConstructor(ChainRpcService);
var WalletRpcService = exports.WalletRpcService = {
  // wallet related
  create_wallet: {
    path: '/forge_abi.WalletRpc/create_wallet',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestCreateWallet,
    responseType: rpc_pb.ResponseCreateWallet,
    requestSerialize: serialize_forge_abi_RequestCreateWallet,
    requestDeserialize: deserialize_forge_abi_RequestCreateWallet,
    responseSerialize: serialize_forge_abi_ResponseCreateWallet,
    responseDeserialize: deserialize_forge_abi_ResponseCreateWallet,
  },
  load_wallet: {
    path: '/forge_abi.WalletRpc/load_wallet',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestLoadWallet,
    responseType: rpc_pb.ResponseLoadWallet,
    requestSerialize: serialize_forge_abi_RequestLoadWallet,
    requestDeserialize: deserialize_forge_abi_RequestLoadWallet,
    responseSerialize: serialize_forge_abi_ResponseLoadWallet,
    responseDeserialize: deserialize_forge_abi_ResponseLoadWallet,
  },
  recover_wallet: {
    path: '/forge_abi.WalletRpc/recover_wallet',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestRecoverWallet,
    responseType: rpc_pb.ResponseRecoverWallet,
    requestSerialize: serialize_forge_abi_RequestRecoverWallet,
    requestDeserialize: deserialize_forge_abi_RequestRecoverWallet,
    responseSerialize: serialize_forge_abi_ResponseRecoverWallet,
    responseDeserialize: deserialize_forge_abi_ResponseRecoverWallet,
  },
  list_wallets: {
    path: '/forge_abi.WalletRpc/list_wallets',
    requestStream: false,
    responseStream: true,
    requestType: rpc_pb.RequestListWallets,
    responseType: rpc_pb.ResponseListWallet,
    requestSerialize: serialize_forge_abi_RequestListWallets,
    requestDeserialize: deserialize_forge_abi_RequestListWallets,
    responseSerialize: serialize_forge_abi_ResponseListWallet,
    responseDeserialize: deserialize_forge_abi_ResponseListWallet,
  },
  remove_wallet: {
    path: '/forge_abi.WalletRpc/remove_wallet',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestRemoveWallet,
    responseType: rpc_pb.ResponseRemoveWallet,
    requestSerialize: serialize_forge_abi_RequestRemoveWallet,
    requestDeserialize: deserialize_forge_abi_RequestRemoveWallet,
    responseSerialize: serialize_forge_abi_ResponseRemoveWallet,
    responseDeserialize: deserialize_forge_abi_ResponseRemoveWallet,
  },
};

exports.WalletRpcClient = grpc.makeGenericClientConstructor(WalletRpcService);
var StateRpcService = exports.StateRpcService = {
  // state related
  get_account_state: {
    path: '/forge_abi.StateRpc/get_account_state',
    requestStream: true,
    responseStream: true,
    requestType: rpc_pb.RequestGetAccountState,
    responseType: rpc_pb.ResponseGetAccountState,
    requestSerialize: serialize_forge_abi_RequestGetAccountState,
    requestDeserialize: deserialize_forge_abi_RequestGetAccountState,
    responseSerialize: serialize_forge_abi_ResponseGetAccountState,
    responseDeserialize: deserialize_forge_abi_ResponseGetAccountState,
  },
  get_asset_state: {
    path: '/forge_abi.StateRpc/get_asset_state',
    requestStream: true,
    responseStream: true,
    requestType: rpc_pb.RequestGetAssetState,
    responseType: rpc_pb.ResponseGetAssetState,
    requestSerialize: serialize_forge_abi_RequestGetAssetState,
    requestDeserialize: deserialize_forge_abi_RequestGetAssetState,
    responseSerialize: serialize_forge_abi_ResponseGetAssetState,
    responseDeserialize: deserialize_forge_abi_ResponseGetAssetState,
  },
  get_channel_state: {
    path: '/forge_abi.StateRpc/get_channel_state',
    requestStream: true,
    responseStream: true,
    requestType: rpc_pb.RequestGetChannelState,
    responseType: rpc_pb.ResponseGetChannelState,
    requestSerialize: serialize_forge_abi_RequestGetChannelState,
    requestDeserialize: deserialize_forge_abi_RequestGetChannelState,
    responseSerialize: serialize_forge_abi_ResponseGetChannelState,
    responseDeserialize: deserialize_forge_abi_ResponseGetChannelState,
  },
  get_forge_state: {
    path: '/forge_abi.StateRpc/get_forge_state',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestGetForgeState,
    responseType: rpc_pb.ResponseGetForgeState,
    requestSerialize: serialize_forge_abi_RequestGetForgeState,
    requestDeserialize: deserialize_forge_abi_RequestGetForgeState,
    responseSerialize: serialize_forge_abi_ResponseGetForgeState,
    responseDeserialize: deserialize_forge_abi_ResponseGetForgeState,
  },
};

exports.StateRpcClient = grpc.makeGenericClientConstructor(StateRpcService);
var FileRpcService = exports.FileRpcService = {
  // filesystem related
  store_file: {
    path: '/forge_abi.FileRpc/store_file',
    requestStream: true,
    responseStream: false,
    requestType: rpc_pb.RequestStoreFile,
    responseType: rpc_pb.ResponseStoreFile,
    requestSerialize: serialize_forge_abi_RequestStoreFile,
    requestDeserialize: deserialize_forge_abi_RequestStoreFile,
    responseSerialize: serialize_forge_abi_ResponseStoreFile,
    responseDeserialize: deserialize_forge_abi_ResponseStoreFile,
  },
  load_file: {
    path: '/forge_abi.FileRpc/load_file',
    requestStream: false,
    responseStream: true,
    requestType: rpc_pb.RequestLoadFile,
    responseType: rpc_pb.ResponseLoadFile,
    requestSerialize: serialize_forge_abi_RequestLoadFile,
    requestDeserialize: deserialize_forge_abi_RequestLoadFile,
    responseSerialize: serialize_forge_abi_ResponseLoadFile,
    responseDeserialize: deserialize_forge_abi_ResponseLoadFile,
  },
};

exports.FileRpcClient = grpc.makeGenericClientConstructor(FileRpcService);
