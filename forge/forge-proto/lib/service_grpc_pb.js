// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var rpc_pb = require('./rpc_pb.js');

function serialize_forge_abi_RequestDeclareNode(arg) {
  if (!(arg instanceof rpc_pb.RequestDeclareNode)) {
    throw new Error('Expected argument of type forge_abi.RequestDeclareNode');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestDeclareNode(buffer_arg) {
  return rpc_pb.RequestDeclareNode.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestGetAccountState(arg) {
  if (!(arg instanceof rpc_pb.RequestGetAccountState)) {
    throw new Error('Expected argument of type forge_abi.RequestGetAccountState');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestGetAccountState(buffer_arg) {
  return rpc_pb.RequestGetAccountState.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestGetAssetState(arg) {
  if (!(arg instanceof rpc_pb.RequestGetAssetState)) {
    throw new Error('Expected argument of type forge_abi.RequestGetAssetState');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestGetAssetState(buffer_arg) {
  return rpc_pb.RequestGetAssetState.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestGetBlock(arg) {
  if (!(arg instanceof rpc_pb.RequestGetBlock)) {
    throw new Error('Expected argument of type forge_abi.RequestGetBlock');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestGetBlock(buffer_arg) {
  return rpc_pb.RequestGetBlock.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestGetBlocks(arg) {
  if (!(arg instanceof rpc_pb.RequestGetBlocks)) {
    throw new Error('Expected argument of type forge_abi.RequestGetBlocks');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestGetBlocks(buffer_arg) {
  return rpc_pb.RequestGetBlocks.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestGetChainInfo(arg) {
  if (!(arg instanceof rpc_pb.RequestGetChainInfo)) {
    throw new Error('Expected argument of type forge_abi.RequestGetChainInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestGetChainInfo(buffer_arg) {
  return rpc_pb.RequestGetChainInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestGetConfig(arg) {
  if (!(arg instanceof rpc_pb.RequestGetConfig)) {
    throw new Error('Expected argument of type forge_abi.RequestGetConfig');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestGetConfig(buffer_arg) {
  return rpc_pb.RequestGetConfig.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestGetDelegateState(arg) {
  if (!(arg instanceof rpc_pb.RequestGetDelegateState)) {
    throw new Error('Expected argument of type forge_abi.RequestGetDelegateState');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestGetDelegateState(buffer_arg) {
  return rpc_pb.RequestGetDelegateState.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestGetForgeState(arg) {
  if (!(arg instanceof rpc_pb.RequestGetForgeState)) {
    throw new Error('Expected argument of type forge_abi.RequestGetForgeState');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestGetForgeState(buffer_arg) {
  return rpc_pb.RequestGetForgeState.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestGetForgeStats(arg) {
  if (!(arg instanceof rpc_pb.RequestGetForgeStats)) {
    throw new Error('Expected argument of type forge_abi.RequestGetForgeStats');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestGetForgeStats(buffer_arg) {
  return rpc_pb.RequestGetForgeStats.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestGetHealthStatus(arg) {
  if (!(arg instanceof rpc_pb.RequestGetHealthStatus)) {
    throw new Error('Expected argument of type forge_abi.RequestGetHealthStatus');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestGetHealthStatus(buffer_arg) {
  return rpc_pb.RequestGetHealthStatus.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestGetNetInfo(arg) {
  if (!(arg instanceof rpc_pb.RequestGetNetInfo)) {
    throw new Error('Expected argument of type forge_abi.RequestGetNetInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestGetNetInfo(buffer_arg) {
  return rpc_pb.RequestGetNetInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestGetNodeInfo(arg) {
  if (!(arg instanceof rpc_pb.RequestGetNodeInfo)) {
    throw new Error('Expected argument of type forge_abi.RequestGetNodeInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestGetNodeInfo(buffer_arg) {
  return rpc_pb.RequestGetNodeInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestGetSwapState(arg) {
  if (!(arg instanceof rpc_pb.RequestGetSwapState)) {
    throw new Error('Expected argument of type forge_abi.RequestGetSwapState');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestGetSwapState(buffer_arg) {
  return rpc_pb.RequestGetSwapState.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestGetSwapStatistics(arg) {
  if (!(arg instanceof rpc_pb.RequestGetSwapStatistics)) {
    throw new Error('Expected argument of type forge_abi.RequestGetSwapStatistics');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestGetSwapStatistics(buffer_arg) {
  return rpc_pb.RequestGetSwapStatistics.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestGetTx(arg) {
  if (!(arg instanceof rpc_pb.RequestGetTx)) {
    throw new Error('Expected argument of type forge_abi.RequestGetTx');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestGetTx(buffer_arg) {
  return rpc_pb.RequestGetTx.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestGetUnconfirmedTxs(arg) {
  if (!(arg instanceof rpc_pb.RequestGetUnconfirmedTxs)) {
    throw new Error('Expected argument of type forge_abi.RequestGetUnconfirmedTxs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestGetUnconfirmedTxs(buffer_arg) {
  return rpc_pb.RequestGetUnconfirmedTxs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestGetValidatorsInfo(arg) {
  if (!(arg instanceof rpc_pb.RequestGetValidatorsInfo)) {
    throw new Error('Expected argument of type forge_abi.RequestGetValidatorsInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestGetValidatorsInfo(buffer_arg) {
  return rpc_pb.RequestGetValidatorsInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestListAccount(arg) {
  if (!(arg instanceof rpc_pb.RequestListAccount)) {
    throw new Error('Expected argument of type forge_abi.RequestListAccount');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestListAccount(buffer_arg) {
  return rpc_pb.RequestListAccount.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestListAssetTransactions(arg) {
  if (!(arg instanceof rpc_pb.RequestListAssetTransactions)) {
    throw new Error('Expected argument of type forge_abi.RequestListAssetTransactions');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestListAssetTransactions(buffer_arg) {
  return rpc_pb.RequestListAssetTransactions.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestListAssets(arg) {
  if (!(arg instanceof rpc_pb.RequestListAssets)) {
    throw new Error('Expected argument of type forge_abi.RequestListAssets');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestListAssets(buffer_arg) {
  return rpc_pb.RequestListAssets.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestListBlocks(arg) {
  if (!(arg instanceof rpc_pb.RequestListBlocks)) {
    throw new Error('Expected argument of type forge_abi.RequestListBlocks');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestListBlocks(buffer_arg) {
  return rpc_pb.RequestListBlocks.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestListStakes(arg) {
  if (!(arg instanceof rpc_pb.RequestListStakes)) {
    throw new Error('Expected argument of type forge_abi.RequestListStakes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestListStakes(buffer_arg) {
  return rpc_pb.RequestListStakes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestListSwap(arg) {
  if (!(arg instanceof rpc_pb.RequestListSwap)) {
    throw new Error('Expected argument of type forge_abi.RequestListSwap');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestListSwap(buffer_arg) {
  return rpc_pb.RequestListSwap.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestListTopAccounts(arg) {
  if (!(arg instanceof rpc_pb.RequestListTopAccounts)) {
    throw new Error('Expected argument of type forge_abi.RequestListTopAccounts');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestListTopAccounts(buffer_arg) {
  return rpc_pb.RequestListTopAccounts.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestListTransactions(arg) {
  if (!(arg instanceof rpc_pb.RequestListTransactions)) {
    throw new Error('Expected argument of type forge_abi.RequestListTransactions');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestListTransactions(buffer_arg) {
  return rpc_pb.RequestListTransactions.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestSearch(arg) {
  if (!(arg instanceof rpc_pb.RequestSearch)) {
    throw new Error('Expected argument of type forge_abi.RequestSearch');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestSearch(buffer_arg) {
  return rpc_pb.RequestSearch.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestSendTx(arg) {
  if (!(arg instanceof rpc_pb.RequestSendTx)) {
    throw new Error('Expected argument of type forge_abi.RequestSendTx');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestSendTx(buffer_arg) {
  return rpc_pb.RequestSendTx.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestSubscribe(arg) {
  if (!(arg instanceof rpc_pb.RequestSubscribe)) {
    throw new Error('Expected argument of type forge_abi.RequestSubscribe');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestSubscribe(buffer_arg) {
  return rpc_pb.RequestSubscribe.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_RequestUnsubscribe(arg) {
  if (!(arg instanceof rpc_pb.RequestUnsubscribe)) {
    throw new Error('Expected argument of type forge_abi.RequestUnsubscribe');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_RequestUnsubscribe(buffer_arg) {
  return rpc_pb.RequestUnsubscribe.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseDeclareNode(arg) {
  if (!(arg instanceof rpc_pb.ResponseDeclareNode)) {
    throw new Error('Expected argument of type forge_abi.ResponseDeclareNode');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseDeclareNode(buffer_arg) {
  return rpc_pb.ResponseDeclareNode.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseGetAccountState(arg) {
  if (!(arg instanceof rpc_pb.ResponseGetAccountState)) {
    throw new Error('Expected argument of type forge_abi.ResponseGetAccountState');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseGetAccountState(buffer_arg) {
  return rpc_pb.ResponseGetAccountState.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseGetAssetState(arg) {
  if (!(arg instanceof rpc_pb.ResponseGetAssetState)) {
    throw new Error('Expected argument of type forge_abi.ResponseGetAssetState');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseGetAssetState(buffer_arg) {
  return rpc_pb.ResponseGetAssetState.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseGetBlock(arg) {
  if (!(arg instanceof rpc_pb.ResponseGetBlock)) {
    throw new Error('Expected argument of type forge_abi.ResponseGetBlock');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseGetBlock(buffer_arg) {
  return rpc_pb.ResponseGetBlock.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseGetBlocks(arg) {
  if (!(arg instanceof rpc_pb.ResponseGetBlocks)) {
    throw new Error('Expected argument of type forge_abi.ResponseGetBlocks');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseGetBlocks(buffer_arg) {
  return rpc_pb.ResponseGetBlocks.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseGetChainInfo(arg) {
  if (!(arg instanceof rpc_pb.ResponseGetChainInfo)) {
    throw new Error('Expected argument of type forge_abi.ResponseGetChainInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseGetChainInfo(buffer_arg) {
  return rpc_pb.ResponseGetChainInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseGetConfig(arg) {
  if (!(arg instanceof rpc_pb.ResponseGetConfig)) {
    throw new Error('Expected argument of type forge_abi.ResponseGetConfig');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseGetConfig(buffer_arg) {
  return rpc_pb.ResponseGetConfig.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseGetDelegateState(arg) {
  if (!(arg instanceof rpc_pb.ResponseGetDelegateState)) {
    throw new Error('Expected argument of type forge_abi.ResponseGetDelegateState');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseGetDelegateState(buffer_arg) {
  return rpc_pb.ResponseGetDelegateState.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseGetForgeState(arg) {
  if (!(arg instanceof rpc_pb.ResponseGetForgeState)) {
    throw new Error('Expected argument of type forge_abi.ResponseGetForgeState');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseGetForgeState(buffer_arg) {
  return rpc_pb.ResponseGetForgeState.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseGetForgeStats(arg) {
  if (!(arg instanceof rpc_pb.ResponseGetForgeStats)) {
    throw new Error('Expected argument of type forge_abi.ResponseGetForgeStats');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseGetForgeStats(buffer_arg) {
  return rpc_pb.ResponseGetForgeStats.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseGetHealthStatus(arg) {
  if (!(arg instanceof rpc_pb.ResponseGetHealthStatus)) {
    throw new Error('Expected argument of type forge_abi.ResponseGetHealthStatus');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseGetHealthStatus(buffer_arg) {
  return rpc_pb.ResponseGetHealthStatus.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseGetNetInfo(arg) {
  if (!(arg instanceof rpc_pb.ResponseGetNetInfo)) {
    throw new Error('Expected argument of type forge_abi.ResponseGetNetInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseGetNetInfo(buffer_arg) {
  return rpc_pb.ResponseGetNetInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseGetNodeInfo(arg) {
  if (!(arg instanceof rpc_pb.ResponseGetNodeInfo)) {
    throw new Error('Expected argument of type forge_abi.ResponseGetNodeInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseGetNodeInfo(buffer_arg) {
  return rpc_pb.ResponseGetNodeInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseGetSwapState(arg) {
  if (!(arg instanceof rpc_pb.ResponseGetSwapState)) {
    throw new Error('Expected argument of type forge_abi.ResponseGetSwapState');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseGetSwapState(buffer_arg) {
  return rpc_pb.ResponseGetSwapState.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseGetSwapStatistics(arg) {
  if (!(arg instanceof rpc_pb.ResponseGetSwapStatistics)) {
    throw new Error('Expected argument of type forge_abi.ResponseGetSwapStatistics');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseGetSwapStatistics(buffer_arg) {
  return rpc_pb.ResponseGetSwapStatistics.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseGetTx(arg) {
  if (!(arg instanceof rpc_pb.ResponseGetTx)) {
    throw new Error('Expected argument of type forge_abi.ResponseGetTx');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseGetTx(buffer_arg) {
  return rpc_pb.ResponseGetTx.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseGetUnconfirmedTxs(arg) {
  if (!(arg instanceof rpc_pb.ResponseGetUnconfirmedTxs)) {
    throw new Error('Expected argument of type forge_abi.ResponseGetUnconfirmedTxs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseGetUnconfirmedTxs(buffer_arg) {
  return rpc_pb.ResponseGetUnconfirmedTxs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseGetValidatorsInfo(arg) {
  if (!(arg instanceof rpc_pb.ResponseGetValidatorsInfo)) {
    throw new Error('Expected argument of type forge_abi.ResponseGetValidatorsInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseGetValidatorsInfo(buffer_arg) {
  return rpc_pb.ResponseGetValidatorsInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseListAccount(arg) {
  if (!(arg instanceof rpc_pb.ResponseListAccount)) {
    throw new Error('Expected argument of type forge_abi.ResponseListAccount');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseListAccount(buffer_arg) {
  return rpc_pb.ResponseListAccount.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseListAssetTransactions(arg) {
  if (!(arg instanceof rpc_pb.ResponseListAssetTransactions)) {
    throw new Error('Expected argument of type forge_abi.ResponseListAssetTransactions');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseListAssetTransactions(buffer_arg) {
  return rpc_pb.ResponseListAssetTransactions.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseListAssets(arg) {
  if (!(arg instanceof rpc_pb.ResponseListAssets)) {
    throw new Error('Expected argument of type forge_abi.ResponseListAssets');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseListAssets(buffer_arg) {
  return rpc_pb.ResponseListAssets.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseListBlocks(arg) {
  if (!(arg instanceof rpc_pb.ResponseListBlocks)) {
    throw new Error('Expected argument of type forge_abi.ResponseListBlocks');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseListBlocks(buffer_arg) {
  return rpc_pb.ResponseListBlocks.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseListStakes(arg) {
  if (!(arg instanceof rpc_pb.ResponseListStakes)) {
    throw new Error('Expected argument of type forge_abi.ResponseListStakes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseListStakes(buffer_arg) {
  return rpc_pb.ResponseListStakes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseListSwap(arg) {
  if (!(arg instanceof rpc_pb.ResponseListSwap)) {
    throw new Error('Expected argument of type forge_abi.ResponseListSwap');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseListSwap(buffer_arg) {
  return rpc_pb.ResponseListSwap.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseListTopAccounts(arg) {
  if (!(arg instanceof rpc_pb.ResponseListTopAccounts)) {
    throw new Error('Expected argument of type forge_abi.ResponseListTopAccounts');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseListTopAccounts(buffer_arg) {
  return rpc_pb.ResponseListTopAccounts.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseListTransactions(arg) {
  if (!(arg instanceof rpc_pb.ResponseListTransactions)) {
    throw new Error('Expected argument of type forge_abi.ResponseListTransactions');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseListTransactions(buffer_arg) {
  return rpc_pb.ResponseListTransactions.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseSearch(arg) {
  if (!(arg instanceof rpc_pb.ResponseSearch)) {
    throw new Error('Expected argument of type forge_abi.ResponseSearch');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseSearch(buffer_arg) {
  return rpc_pb.ResponseSearch.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseSendTx(arg) {
  if (!(arg instanceof rpc_pb.ResponseSendTx)) {
    throw new Error('Expected argument of type forge_abi.ResponseSendTx');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseSendTx(buffer_arg) {
  return rpc_pb.ResponseSendTx.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseSubscribe(arg) {
  if (!(arg instanceof rpc_pb.ResponseSubscribe)) {
    throw new Error('Expected argument of type forge_abi.ResponseSubscribe');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseSubscribe(buffer_arg) {
  return rpc_pb.ResponseSubscribe.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_forge_abi_ResponseUnsubscribe(arg) {
  if (!(arg instanceof rpc_pb.ResponseUnsubscribe)) {
    throw new Error('Expected argument of type forge_abi.ResponseUnsubscribe');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_forge_abi_ResponseUnsubscribe(buffer_arg) {
  return rpc_pb.ResponseUnsubscribe.deserializeBinary(new Uint8Array(buffer_arg));
}

// forge RPC definition
//
// Notice: when you define a new RPC, please follow the naming convention. Your
// function name is snake case, and req / req are PASCAL case of the function
// name, prefixed with Request / Response. e.g. rpc get_abc(RequestGetAbc)
// returns (ResponseGetAbc). If you break this, RPC builder would complain.
//
var ChainRpcService = (exports.ChainRpcService = {
  // tx related
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
  get_blocks: {
    path: '/forge_abi.ChainRpc/get_blocks',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestGetBlocks,
    responseType: rpc_pb.ResponseGetBlocks,
    requestSerialize: serialize_forge_abi_RequestGetBlocks,
    requestDeserialize: deserialize_forge_abi_RequestGetBlocks,
    responseSerialize: serialize_forge_abi_ResponseGetBlocks,
    responseDeserialize: deserialize_forge_abi_ResponseGetBlocks,
  },
  get_unconfirmed_txs: {
    path: '/forge_abi.ChainRpc/get_unconfirmed_txs',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestGetUnconfirmedTxs,
    responseType: rpc_pb.ResponseGetUnconfirmedTxs,
    requestSerialize: serialize_forge_abi_RequestGetUnconfirmedTxs,
    requestDeserialize: deserialize_forge_abi_RequestGetUnconfirmedTxs,
    responseSerialize: serialize_forge_abi_ResponseGetUnconfirmedTxs,
    responseDeserialize: deserialize_forge_abi_ResponseGetUnconfirmedTxs,
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
  get_node_info: {
    path: '/forge_abi.ChainRpc/get_node_info',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestGetNodeInfo,
    responseType: rpc_pb.ResponseGetNodeInfo,
    requestSerialize: serialize_forge_abi_RequestGetNodeInfo,
    requestDeserialize: deserialize_forge_abi_RequestGetNodeInfo,
    responseSerialize: serialize_forge_abi_ResponseGetNodeInfo,
    responseDeserialize: deserialize_forge_abi_ResponseGetNodeInfo,
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
  get_net_info: {
    path: '/forge_abi.ChainRpc/get_net_info',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestGetNetInfo,
    responseType: rpc_pb.ResponseGetNetInfo,
    requestSerialize: serialize_forge_abi_RequestGetNetInfo,
    requestDeserialize: deserialize_forge_abi_RequestGetNetInfo,
    responseSerialize: serialize_forge_abi_ResponseGetNetInfo,
    responseDeserialize: deserialize_forge_abi_ResponseGetNetInfo,
  },
  get_validators_info: {
    path: '/forge_abi.ChainRpc/get_validators_info',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestGetValidatorsInfo,
    responseType: rpc_pb.ResponseGetValidatorsInfo,
    requestSerialize: serialize_forge_abi_RequestGetValidatorsInfo,
    requestDeserialize: deserialize_forge_abi_RequestGetValidatorsInfo,
    responseSerialize: serialize_forge_abi_ResponseGetValidatorsInfo,
    responseDeserialize: deserialize_forge_abi_ResponseGetValidatorsInfo,
  },
  get_config: {
    path: '/forge_abi.ChainRpc/get_config',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestGetConfig,
    responseType: rpc_pb.ResponseGetConfig,
    requestSerialize: serialize_forge_abi_RequestGetConfig,
    requestDeserialize: deserialize_forge_abi_RequestGetConfig,
    responseSerialize: serialize_forge_abi_ResponseGetConfig,
    responseDeserialize: deserialize_forge_abi_ResponseGetConfig,
  },
});

exports.ChainRpcClient = grpc.makeGenericClientConstructor(ChainRpcService);
var EventRpcService = (exports.EventRpcService = {
  subscribe: {
    path: '/forge_abi.EventRpc/subscribe',
    requestStream: false,
    responseStream: true,
    requestType: rpc_pb.RequestSubscribe,
    responseType: rpc_pb.ResponseSubscribe,
    requestSerialize: serialize_forge_abi_RequestSubscribe,
    requestDeserialize: deserialize_forge_abi_RequestSubscribe,
    responseSerialize: serialize_forge_abi_ResponseSubscribe,
    responseDeserialize: deserialize_forge_abi_ResponseSubscribe,
  },
  unsubscribe: {
    path: '/forge_abi.EventRpc/unsubscribe',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestUnsubscribe,
    responseType: rpc_pb.ResponseUnsubscribe,
    requestSerialize: serialize_forge_abi_RequestUnsubscribe,
    requestDeserialize: deserialize_forge_abi_RequestUnsubscribe,
    responseSerialize: serialize_forge_abi_ResponseUnsubscribe,
    responseDeserialize: deserialize_forge_abi_ResponseUnsubscribe,
  },
});

exports.EventRpcClient = grpc.makeGenericClientConstructor(EventRpcService);
var FileRpcService = (exports.FileRpcService = {});

exports.FileRpcClient = grpc.makeGenericClientConstructor(FileRpcService);
// filesystem related
// rpc store_file(stream RequestStoreFile) returns (ResponseStoreFile);
// rpc load_file(RequestLoadFile) returns (stream ResponseLoadFile);
// rpc pin_file(RequestPinFile) returns (ResponsePinFile);
var StateRpcService = (exports.StateRpcService = {
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
  // rpc get_protocol_state(stream RequestGetProtocolState) returns (stream
  // ResponseGetProtocolState);
  // rpc get_stake_state(stream RequestGetStakeState)
  // returns (stream ResponseGetStakeState);
  get_swap_state: {
    path: '/forge_abi.StateRpc/get_swap_state',
    requestStream: true,
    responseStream: true,
    requestType: rpc_pb.RequestGetSwapState,
    responseType: rpc_pb.ResponseGetSwapState,
    requestSerialize: serialize_forge_abi_RequestGetSwapState,
    requestDeserialize: deserialize_forge_abi_RequestGetSwapState,
    responseSerialize: serialize_forge_abi_ResponseGetSwapState,
    responseDeserialize: deserialize_forge_abi_ResponseGetSwapState,
  },
  get_delegate_state: {
    path: '/forge_abi.StateRpc/get_delegate_state',
    requestStream: true,
    responseStream: true,
    requestType: rpc_pb.RequestGetDelegateState,
    responseType: rpc_pb.ResponseGetDelegateState,
    requestSerialize: serialize_forge_abi_RequestGetDelegateState,
    requestDeserialize: deserialize_forge_abi_RequestGetDelegateState,
    responseSerialize: serialize_forge_abi_ResponseGetDelegateState,
    responseDeserialize: deserialize_forge_abi_ResponseGetDelegateState,
  },
});

exports.StateRpcClient = grpc.makeGenericClientConstructor(StateRpcService);
var WalletRpcService = (exports.WalletRpcService = {
  // wallet related
  declare_node: {
    path: '/forge_abi.WalletRpc/declare_node',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestDeclareNode,
    responseType: rpc_pb.ResponseDeclareNode,
    requestSerialize: serialize_forge_abi_RequestDeclareNode,
    requestDeserialize: deserialize_forge_abi_RequestDeclareNode,
    responseSerialize: serialize_forge_abi_ResponseDeclareNode,
    responseDeserialize: deserialize_forge_abi_ResponseDeclareNode,
  },
});

exports.WalletRpcClient = grpc.makeGenericClientConstructor(WalletRpcService);
var StatsRpcService = (exports.StatsRpcService = {
  get_forge_stats: {
    path: '/forge_abi.StatsRpc/get_forge_stats',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestGetForgeStats,
    responseType: rpc_pb.ResponseGetForgeStats,
    requestSerialize: serialize_forge_abi_RequestGetForgeStats,
    requestDeserialize: deserialize_forge_abi_RequestGetForgeStats,
    responseSerialize: serialize_forge_abi_ResponseGetForgeStats,
    responseDeserialize: deserialize_forge_abi_ResponseGetForgeStats,
  },
  list_transactions: {
    path: '/forge_abi.StatsRpc/list_transactions',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestListTransactions,
    responseType: rpc_pb.ResponseListTransactions,
    requestSerialize: serialize_forge_abi_RequestListTransactions,
    requestDeserialize: deserialize_forge_abi_RequestListTransactions,
    responseSerialize: serialize_forge_abi_ResponseListTransactions,
    responseDeserialize: deserialize_forge_abi_ResponseListTransactions,
  },
  list_assets: {
    path: '/forge_abi.StatsRpc/list_assets',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestListAssets,
    responseType: rpc_pb.ResponseListAssets,
    requestSerialize: serialize_forge_abi_RequestListAssets,
    requestDeserialize: deserialize_forge_abi_RequestListAssets,
    responseSerialize: serialize_forge_abi_ResponseListAssets,
    responseDeserialize: deserialize_forge_abi_ResponseListAssets,
  },
  list_stakes: {
    path: '/forge_abi.StatsRpc/list_stakes',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestListStakes,
    responseType: rpc_pb.ResponseListStakes,
    requestSerialize: serialize_forge_abi_RequestListStakes,
    requestDeserialize: deserialize_forge_abi_RequestListStakes,
    responseSerialize: serialize_forge_abi_ResponseListStakes,
    responseDeserialize: deserialize_forge_abi_ResponseListStakes,
  },
  list_account: {
    path: '/forge_abi.StatsRpc/list_account',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestListAccount,
    responseType: rpc_pb.ResponseListAccount,
    requestSerialize: serialize_forge_abi_RequestListAccount,
    requestDeserialize: deserialize_forge_abi_RequestListAccount,
    responseSerialize: serialize_forge_abi_ResponseListAccount,
    responseDeserialize: deserialize_forge_abi_ResponseListAccount,
  },
  list_top_accounts: {
    path: '/forge_abi.StatsRpc/list_top_accounts',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestListTopAccounts,
    responseType: rpc_pb.ResponseListTopAccounts,
    requestSerialize: serialize_forge_abi_RequestListTopAccounts,
    requestDeserialize: deserialize_forge_abi_RequestListTopAccounts,
    responseSerialize: serialize_forge_abi_ResponseListTopAccounts,
    responseDeserialize: deserialize_forge_abi_ResponseListTopAccounts,
  },
  list_asset_transactions: {
    path: '/forge_abi.StatsRpc/list_asset_transactions',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestListAssetTransactions,
    responseType: rpc_pb.ResponseListAssetTransactions,
    requestSerialize: serialize_forge_abi_RequestListAssetTransactions,
    requestDeserialize: deserialize_forge_abi_RequestListAssetTransactions,
    responseSerialize: serialize_forge_abi_ResponseListAssetTransactions,
    responseDeserialize: deserialize_forge_abi_ResponseListAssetTransactions,
  },
  list_blocks: {
    path: '/forge_abi.StatsRpc/list_blocks',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestListBlocks,
    responseType: rpc_pb.ResponseListBlocks,
    requestSerialize: serialize_forge_abi_RequestListBlocks,
    requestDeserialize: deserialize_forge_abi_RequestListBlocks,
    responseSerialize: serialize_forge_abi_ResponseListBlocks,
    responseDeserialize: deserialize_forge_abi_ResponseListBlocks,
  },
  get_health_status: {
    path: '/forge_abi.StatsRpc/get_health_status',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestGetHealthStatus,
    responseType: rpc_pb.ResponseGetHealthStatus,
    requestSerialize: serialize_forge_abi_RequestGetHealthStatus,
    requestDeserialize: deserialize_forge_abi_RequestGetHealthStatus,
    responseSerialize: serialize_forge_abi_ResponseGetHealthStatus,
    responseDeserialize: deserialize_forge_abi_ResponseGetHealthStatus,
  },
  list_swap: {
    path: '/forge_abi.StatsRpc/list_swap',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestListSwap,
    responseType: rpc_pb.ResponseListSwap,
    requestSerialize: serialize_forge_abi_RequestListSwap,
    requestDeserialize: deserialize_forge_abi_RequestListSwap,
    responseSerialize: serialize_forge_abi_ResponseListSwap,
    responseDeserialize: deserialize_forge_abi_ResponseListSwap,
  },
  get_swap_statistics: {
    path: '/forge_abi.StatsRpc/get_swap_statistics',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RequestGetSwapStatistics,
    responseType: rpc_pb.ResponseGetSwapStatistics,
    requestSerialize: serialize_forge_abi_RequestGetSwapStatistics,
    requestDeserialize: deserialize_forge_abi_RequestGetSwapStatistics,
    responseSerialize: serialize_forge_abi_ResponseGetSwapStatistics,
    responseDeserialize: deserialize_forge_abi_ResponseGetSwapStatistics,
  },
});

exports.StatsRpcClient = grpc.makeGenericClientConstructor(StatsRpcService);
