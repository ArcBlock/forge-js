// source: rpc.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var vendor_pb = require('./vendor_pb.js');
goog.object.extend(proto, vendor_pb);
var enum_pb = require('./enum_pb.js');
goog.object.extend(proto, enum_pb);
var type_pb = require('./type_pb.js');
goog.object.extend(proto, type_pb);
var state_pb = require('./state_pb.js');
goog.object.extend(proto, state_pb);
var trace_type_pb = require('./trace_type_pb.js');
goog.object.extend(proto, trace_type_pb);
goog.exportSymbol('proto.forge_abi.ByDay', null, global);
goog.exportSymbol('proto.forge_abi.ByHour', null, global);
goog.exportSymbol('proto.forge_abi.RequestDeclareNode', null, global);
goog.exportSymbol('proto.forge_abi.RequestGetAccountState', null, global);
goog.exportSymbol('proto.forge_abi.RequestGetAssetState', null, global);
goog.exportSymbol('proto.forge_abi.RequestGetBlock', null, global);
goog.exportSymbol('proto.forge_abi.RequestGetBlocks', null, global);
goog.exportSymbol('proto.forge_abi.RequestGetChainInfo', null, global);
goog.exportSymbol('proto.forge_abi.RequestGetConfig', null, global);
goog.exportSymbol('proto.forge_abi.RequestGetDelegateState', null, global);
goog.exportSymbol('proto.forge_abi.RequestGetForgeState', null, global);
goog.exportSymbol('proto.forge_abi.RequestGetForgeStats', null, global);
goog.exportSymbol('proto.forge_abi.RequestGetForgeStats.ValueCase', null, global);
goog.exportSymbol('proto.forge_abi.RequestGetHealthStatus', null, global);
goog.exportSymbol('proto.forge_abi.RequestGetNetInfo', null, global);
goog.exportSymbol('proto.forge_abi.RequestGetNodeInfo', null, global);
goog.exportSymbol('proto.forge_abi.RequestGetSwapState', null, global);
goog.exportSymbol('proto.forge_abi.RequestGetSwapStatistics', null, global);
goog.exportSymbol('proto.forge_abi.RequestGetTx', null, global);
goog.exportSymbol('proto.forge_abi.RequestGetUnconfirmedTxs', null, global);
goog.exportSymbol('proto.forge_abi.RequestGetValidatorsInfo', null, global);
goog.exportSymbol('proto.forge_abi.RequestListAccount', null, global);
goog.exportSymbol('proto.forge_abi.RequestListAssetTransactions', null, global);
goog.exportSymbol('proto.forge_abi.RequestListAssets', null, global);
goog.exportSymbol('proto.forge_abi.RequestListBlocks', null, global);
goog.exportSymbol('proto.forge_abi.RequestListStakes', null, global);
goog.exportSymbol('proto.forge_abi.RequestListSwap', null, global);
goog.exportSymbol('proto.forge_abi.RequestListTopAccounts', null, global);
goog.exportSymbol('proto.forge_abi.RequestListTransactions', null, global);
goog.exportSymbol('proto.forge_abi.RequestSearch', null, global);
goog.exportSymbol('proto.forge_abi.RequestSendTx', null, global);
goog.exportSymbol('proto.forge_abi.RequestSubscribe', null, global);
goog.exportSymbol('proto.forge_abi.RequestUnsubscribe', null, global);
goog.exportSymbol('proto.forge_abi.ResponseDeclareNode', null, global);
goog.exportSymbol('proto.forge_abi.ResponseGetAccountState', null, global);
goog.exportSymbol('proto.forge_abi.ResponseGetAssetState', null, global);
goog.exportSymbol('proto.forge_abi.ResponseGetBlock', null, global);
goog.exportSymbol('proto.forge_abi.ResponseGetBlocks', null, global);
goog.exportSymbol('proto.forge_abi.ResponseGetChainInfo', null, global);
goog.exportSymbol('proto.forge_abi.ResponseGetConfig', null, global);
goog.exportSymbol('proto.forge_abi.ResponseGetDelegateState', null, global);
goog.exportSymbol('proto.forge_abi.ResponseGetForgeState', null, global);
goog.exportSymbol('proto.forge_abi.ResponseGetForgeStats', null, global);
goog.exportSymbol('proto.forge_abi.ResponseGetHealthStatus', null, global);
goog.exportSymbol('proto.forge_abi.ResponseGetNetInfo', null, global);
goog.exportSymbol('proto.forge_abi.ResponseGetNodeInfo', null, global);
goog.exportSymbol('proto.forge_abi.ResponseGetSwapState', null, global);
goog.exportSymbol('proto.forge_abi.ResponseGetSwapStatistics', null, global);
goog.exportSymbol('proto.forge_abi.ResponseGetTx', null, global);
goog.exportSymbol('proto.forge_abi.ResponseGetUnconfirmedTxs', null, global);
goog.exportSymbol('proto.forge_abi.ResponseGetValidatorsInfo', null, global);
goog.exportSymbol('proto.forge_abi.ResponseListAccount', null, global);
goog.exportSymbol('proto.forge_abi.ResponseListAssetTransactions', null, global);
goog.exportSymbol('proto.forge_abi.ResponseListAssets', null, global);
goog.exportSymbol('proto.forge_abi.ResponseListBlocks', null, global);
goog.exportSymbol('proto.forge_abi.ResponseListStakes', null, global);
goog.exportSymbol('proto.forge_abi.ResponseListSwap', null, global);
goog.exportSymbol('proto.forge_abi.ResponseListTopAccounts', null, global);
goog.exportSymbol('proto.forge_abi.ResponseListTransactions', null, global);
goog.exportSymbol('proto.forge_abi.ResponseSearch', null, global);
goog.exportSymbol('proto.forge_abi.ResponseSendTx', null, global);
goog.exportSymbol('proto.forge_abi.ResponseSubscribe', null, global);
goog.exportSymbol('proto.forge_abi.ResponseSubscribe.ValueCase', null, global);
goog.exportSymbol('proto.forge_abi.ResponseUnsubscribe', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestSendTx = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestSendTx, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.RequestSendTx.displayName = 'proto.forge_abi.RequestSendTx';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseSendTx = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ResponseSendTx, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.ResponseSendTx.displayName = 'proto.forge_abi.ResponseSendTx';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestGetTx = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestGetTx, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.RequestGetTx.displayName = 'proto.forge_abi.RequestGetTx';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseGetTx = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ResponseGetTx, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.ResponseGetTx.displayName = 'proto.forge_abi.ResponseGetTx';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestGetBlock = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestGetBlock, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.RequestGetBlock.displayName = 'proto.forge_abi.RequestGetBlock';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseGetBlock = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ResponseGetBlock, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.ResponseGetBlock.displayName = 'proto.forge_abi.ResponseGetBlock';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestGetBlocks = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestGetBlocks, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.RequestGetBlocks.displayName = 'proto.forge_abi.RequestGetBlocks';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseGetBlocks = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.forge_abi.ResponseGetBlocks.repeatedFields_, null);
};
goog.inherits(proto.forge_abi.ResponseGetBlocks, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.ResponseGetBlocks.displayName = 'proto.forge_abi.ResponseGetBlocks';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestDeclareNode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestDeclareNode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.RequestDeclareNode.displayName = 'proto.forge_abi.RequestDeclareNode';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseDeclareNode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ResponseDeclareNode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.ResponseDeclareNode.displayName = 'proto.forge_abi.ResponseDeclareNode';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestGetAccountState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.forge_abi.RequestGetAccountState.repeatedFields_, null);
};
goog.inherits(proto.forge_abi.RequestGetAccountState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.RequestGetAccountState.displayName = 'proto.forge_abi.RequestGetAccountState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseGetAccountState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ResponseGetAccountState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.ResponseGetAccountState.displayName = 'proto.forge_abi.ResponseGetAccountState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestGetAssetState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.forge_abi.RequestGetAssetState.repeatedFields_, null);
};
goog.inherits(proto.forge_abi.RequestGetAssetState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.RequestGetAssetState.displayName = 'proto.forge_abi.RequestGetAssetState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseGetAssetState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ResponseGetAssetState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.ResponseGetAssetState.displayName = 'proto.forge_abi.ResponseGetAssetState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestGetForgeState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.forge_abi.RequestGetForgeState.repeatedFields_, null);
};
goog.inherits(proto.forge_abi.RequestGetForgeState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.RequestGetForgeState.displayName = 'proto.forge_abi.RequestGetForgeState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseGetForgeState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ResponseGetForgeState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.ResponseGetForgeState.displayName = 'proto.forge_abi.ResponseGetForgeState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestGetSwapState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.forge_abi.RequestGetSwapState.repeatedFields_, null);
};
goog.inherits(proto.forge_abi.RequestGetSwapState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.RequestGetSwapState.displayName = 'proto.forge_abi.RequestGetSwapState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseGetSwapState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ResponseGetSwapState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.ResponseGetSwapState.displayName = 'proto.forge_abi.ResponseGetSwapState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestGetDelegateState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.forge_abi.RequestGetDelegateState.repeatedFields_, null);
};
goog.inherits(proto.forge_abi.RequestGetDelegateState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.RequestGetDelegateState.displayName = 'proto.forge_abi.RequestGetDelegateState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseGetDelegateState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ResponseGetDelegateState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.ResponseGetDelegateState.displayName = 'proto.forge_abi.ResponseGetDelegateState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestGetChainInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestGetChainInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.RequestGetChainInfo.displayName = 'proto.forge_abi.RequestGetChainInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseGetChainInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ResponseGetChainInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.ResponseGetChainInfo.displayName = 'proto.forge_abi.ResponseGetChainInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestGetNodeInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestGetNodeInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.RequestGetNodeInfo.displayName = 'proto.forge_abi.RequestGetNodeInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseGetNodeInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ResponseGetNodeInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.ResponseGetNodeInfo.displayName = 'proto.forge_abi.ResponseGetNodeInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestSearch = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestSearch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.RequestSearch.displayName = 'proto.forge_abi.RequestSearch';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseSearch = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.forge_abi.ResponseSearch.repeatedFields_, null);
};
goog.inherits(proto.forge_abi.ResponseSearch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.ResponseSearch.displayName = 'proto.forge_abi.ResponseSearch';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestGetUnconfirmedTxs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestGetUnconfirmedTxs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.RequestGetUnconfirmedTxs.displayName = 'proto.forge_abi.RequestGetUnconfirmedTxs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseGetUnconfirmedTxs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ResponseGetUnconfirmedTxs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.ResponseGetUnconfirmedTxs.displayName = 'proto.forge_abi.ResponseGetUnconfirmedTxs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestGetNetInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestGetNetInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.RequestGetNetInfo.displayName = 'proto.forge_abi.RequestGetNetInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseGetNetInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ResponseGetNetInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.ResponseGetNetInfo.displayName = 'proto.forge_abi.ResponseGetNetInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestGetValidatorsInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestGetValidatorsInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.RequestGetValidatorsInfo.displayName = 'proto.forge_abi.RequestGetValidatorsInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseGetValidatorsInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ResponseGetValidatorsInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.ResponseGetValidatorsInfo.displayName = 'proto.forge_abi.ResponseGetValidatorsInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestSubscribe = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestSubscribe, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.RequestSubscribe.displayName = 'proto.forge_abi.RequestSubscribe';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseSubscribe = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.forge_abi.ResponseSubscribe.oneofGroups_);
};
goog.inherits(proto.forge_abi.ResponseSubscribe, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.ResponseSubscribe.displayName = 'proto.forge_abi.ResponseSubscribe';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestUnsubscribe = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestUnsubscribe, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.RequestUnsubscribe.displayName = 'proto.forge_abi.RequestUnsubscribe';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseUnsubscribe = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ResponseUnsubscribe, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.ResponseUnsubscribe.displayName = 'proto.forge_abi.ResponseUnsubscribe';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestGetConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestGetConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.RequestGetConfig.displayName = 'proto.forge_abi.RequestGetConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseGetConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ResponseGetConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.ResponseGetConfig.displayName = 'proto.forge_abi.ResponseGetConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ByDay = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ByDay, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.ByDay.displayName = 'proto.forge_abi.ByDay';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ByHour = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ByHour, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.ByHour.displayName = 'proto.forge_abi.ByHour';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestGetForgeStats = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.forge_abi.RequestGetForgeStats.oneofGroups_);
};
goog.inherits(proto.forge_abi.RequestGetForgeStats, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.RequestGetForgeStats.displayName = 'proto.forge_abi.RequestGetForgeStats';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseGetForgeStats = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ResponseGetForgeStats, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.ResponseGetForgeStats.displayName = 'proto.forge_abi.ResponseGetForgeStats';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestListTransactions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestListTransactions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.RequestListTransactions.displayName = 'proto.forge_abi.RequestListTransactions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseListTransactions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.forge_abi.ResponseListTransactions.repeatedFields_, null);
};
goog.inherits(proto.forge_abi.ResponseListTransactions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.ResponseListTransactions.displayName = 'proto.forge_abi.ResponseListTransactions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestListAssets = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestListAssets, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.RequestListAssets.displayName = 'proto.forge_abi.RequestListAssets';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseListAssets = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.forge_abi.ResponseListAssets.repeatedFields_, null);
};
goog.inherits(proto.forge_abi.ResponseListAssets, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.ResponseListAssets.displayName = 'proto.forge_abi.ResponseListAssets';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestListStakes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestListStakes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.RequestListStakes.displayName = 'proto.forge_abi.RequestListStakes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseListStakes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.forge_abi.ResponseListStakes.repeatedFields_, null);
};
goog.inherits(proto.forge_abi.ResponseListStakes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.ResponseListStakes.displayName = 'proto.forge_abi.ResponseListStakes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestListAccount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestListAccount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.RequestListAccount.displayName = 'proto.forge_abi.RequestListAccount';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseListAccount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ResponseListAccount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.ResponseListAccount.displayName = 'proto.forge_abi.ResponseListAccount';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestListTopAccounts = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestListTopAccounts, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.RequestListTopAccounts.displayName = 'proto.forge_abi.RequestListTopAccounts';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseListTopAccounts = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.forge_abi.ResponseListTopAccounts.repeatedFields_, null);
};
goog.inherits(proto.forge_abi.ResponseListTopAccounts, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.ResponseListTopAccounts.displayName = 'proto.forge_abi.ResponseListTopAccounts';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestListAssetTransactions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestListAssetTransactions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.RequestListAssetTransactions.displayName = 'proto.forge_abi.RequestListAssetTransactions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseListAssetTransactions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.forge_abi.ResponseListAssetTransactions.repeatedFields_, null);
};
goog.inherits(proto.forge_abi.ResponseListAssetTransactions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.ResponseListAssetTransactions.displayName = 'proto.forge_abi.ResponseListAssetTransactions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestListBlocks = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestListBlocks, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.RequestListBlocks.displayName = 'proto.forge_abi.RequestListBlocks';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseListBlocks = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.forge_abi.ResponseListBlocks.repeatedFields_, null);
};
goog.inherits(proto.forge_abi.ResponseListBlocks, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.ResponseListBlocks.displayName = 'proto.forge_abi.ResponseListBlocks';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestListSwap = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestListSwap, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.RequestListSwap.displayName = 'proto.forge_abi.RequestListSwap';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseListSwap = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.forge_abi.ResponseListSwap.repeatedFields_, null);
};
goog.inherits(proto.forge_abi.ResponseListSwap, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.ResponseListSwap.displayName = 'proto.forge_abi.ResponseListSwap';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestGetSwapStatistics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestGetSwapStatistics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.RequestGetSwapStatistics.displayName = 'proto.forge_abi.RequestGetSwapStatistics';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseGetSwapStatistics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ResponseGetSwapStatistics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.ResponseGetSwapStatistics.displayName = 'proto.forge_abi.ResponseGetSwapStatistics';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.RequestGetHealthStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.RequestGetHealthStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.RequestGetHealthStatus.displayName = 'proto.forge_abi.RequestGetHealthStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.ResponseGetHealthStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ResponseGetHealthStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.forge_abi.ResponseGetHealthStatus.displayName = 'proto.forge_abi.ResponseGetHealthStatus';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestSendTx.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestSendTx.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestSendTx} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestSendTx.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        tx: (f = msg.getTx()) && type_pb.Transaction.toObject(includeInstance, f),
        wallet: (f = msg.getWallet()) && type_pb.WalletInfo.toObject(includeInstance, f),
        token: jspb.Message.getFieldWithDefault(msg, 3, ''),
        commit: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestSendTx}
 */
proto.forge_abi.RequestSendTx.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestSendTx();
  return proto.forge_abi.RequestSendTx.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestSendTx} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestSendTx}
 */
proto.forge_abi.RequestSendTx.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setTx(value);
        break;
      case 2:
        var value = new type_pb.WalletInfo();
        reader.readMessage(value, type_pb.WalletInfo.deserializeBinaryFromReader);
        msg.setWallet(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setToken(value);
        break;
      case 4:
        var value = /** @type {boolean} */ (reader.readBool());
        msg.setCommit(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestSendTx.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestSendTx.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestSendTx} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestSendTx.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTx();
  if (f != null) {
    writer.writeMessage(1, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getWallet();
  if (f != null) {
    writer.writeMessage(2, f, type_pb.WalletInfo.serializeBinaryToWriter);
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getCommit();
  if (f) {
    writer.writeBool(4, f);
  }
};

/**
 * optional Transaction tx = 1;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.RequestSendTx.prototype.getTx = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(this, type_pb.Transaction, 1));
};

/**
 * @param {?proto.forge_abi.Transaction|undefined} value
 * @return {!proto.forge_abi.RequestSendTx} returns this
 */
proto.forge_abi.RequestSendTx.prototype.setTx = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.RequestSendTx} returns this
 */
proto.forge_abi.RequestSendTx.prototype.clearTx = function() {
  return this.setTx(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.RequestSendTx.prototype.hasTx = function() {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional WalletInfo wallet = 2;
 * @return {?proto.forge_abi.WalletInfo}
 */
proto.forge_abi.RequestSendTx.prototype.getWallet = function() {
  return /** @type{?proto.forge_abi.WalletInfo} */ (jspb.Message.getWrapperField(this, type_pb.WalletInfo, 2));
};

/**
 * @param {?proto.forge_abi.WalletInfo|undefined} value
 * @return {!proto.forge_abi.RequestSendTx} returns this
 */
proto.forge_abi.RequestSendTx.prototype.setWallet = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.RequestSendTx} returns this
 */
proto.forge_abi.RequestSendTx.prototype.clearWallet = function() {
  return this.setWallet(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.RequestSendTx.prototype.hasWallet = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * optional string token = 3;
 * @return {string}
 */
proto.forge_abi.RequestSendTx.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.forge_abi.RequestSendTx} returns this
 */
proto.forge_abi.RequestSendTx.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional bool commit = 4;
 * @return {boolean}
 */
proto.forge_abi.RequestSendTx.prototype.getCommit = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};

/**
 * @param {boolean} value
 * @return {!proto.forge_abi.RequestSendTx} returns this
 */
proto.forge_abi.RequestSendTx.prototype.setCommit = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseSendTx.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseSendTx.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseSendTx} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseSendTx.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        hash: jspb.Message.getFieldWithDefault(msg, 2, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseSendTx}
 */
proto.forge_abi.ResponseSendTx.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseSendTx();
  return proto.forge_abi.ResponseSendTx.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseSendTx} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseSendTx}
 */
proto.forge_abi.ResponseSendTx.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setHash(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseSendTx.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseSendTx.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseSendTx} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseSendTx.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getHash();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseSendTx.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {!proto.forge_abi.StatusCode} value
 * @return {!proto.forge_abi.ResponseSendTx} returns this
 */
proto.forge_abi.ResponseSendTx.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};

/**
 * optional string hash = 2;
 * @return {string}
 */
proto.forge_abi.ResponseSendTx.prototype.getHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.forge_abi.ResponseSendTx} returns this
 */
proto.forge_abi.ResponseSendTx.prototype.setHash = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestGetTx.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestGetTx.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestGetTx} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestGetTx.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        hash: jspb.Message.getFieldWithDefault(msg, 1, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestGetTx}
 */
proto.forge_abi.RequestGetTx.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestGetTx();
  return proto.forge_abi.RequestGetTx.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestGetTx} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestGetTx}
 */
proto.forge_abi.RequestGetTx.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setHash(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestGetTx.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestGetTx.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestGetTx} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestGetTx.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHash();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

/**
 * optional string hash = 1;
 * @return {string}
 */
proto.forge_abi.RequestGetTx.prototype.getHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.forge_abi.RequestGetTx} returns this
 */
proto.forge_abi.RequestGetTx.prototype.setHash = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseGetTx.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseGetTx.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseGetTx} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseGetTx.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        info: (f = msg.getInfo()) && type_pb.TransactionInfo.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseGetTx}
 */
proto.forge_abi.ResponseGetTx.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseGetTx();
  return proto.forge_abi.ResponseGetTx.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseGetTx} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseGetTx}
 */
proto.forge_abi.ResponseGetTx.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = new type_pb.TransactionInfo();
        reader.readMessage(value, type_pb.TransactionInfo.deserializeBinaryFromReader);
        msg.setInfo(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseGetTx.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseGetTx.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseGetTx} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseGetTx.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(2, f, type_pb.TransactionInfo.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseGetTx.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {!proto.forge_abi.StatusCode} value
 * @return {!proto.forge_abi.ResponseGetTx} returns this
 */
proto.forge_abi.ResponseGetTx.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};

/**
 * optional TransactionInfo info = 2;
 * @return {?proto.forge_abi.TransactionInfo}
 */
proto.forge_abi.ResponseGetTx.prototype.getInfo = function() {
  return /** @type{?proto.forge_abi.TransactionInfo} */ (jspb.Message.getWrapperField(
    this,
    type_pb.TransactionInfo,
    2
  ));
};

/**
 * @param {?proto.forge_abi.TransactionInfo|undefined} value
 * @return {!proto.forge_abi.ResponseGetTx} returns this
 */
proto.forge_abi.ResponseGetTx.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseGetTx} returns this
 */
proto.forge_abi.ResponseGetTx.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseGetTx.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestGetBlock.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestGetBlock.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestGetBlock} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestGetBlock.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        height: jspb.Message.getFieldWithDefault(msg, 1, 0),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestGetBlock}
 */
proto.forge_abi.RequestGetBlock.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestGetBlock();
  return proto.forge_abi.RequestGetBlock.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestGetBlock} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestGetBlock}
 */
proto.forge_abi.RequestGetBlock.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setHeight(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestGetBlock.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestGetBlock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestGetBlock} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestGetBlock.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint64(1, f);
  }
};

/**
 * optional uint64 height = 1;
 * @return {number}
 */
proto.forge_abi.RequestGetBlock.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.forge_abi.RequestGetBlock} returns this
 */
proto.forge_abi.RequestGetBlock.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseGetBlock.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseGetBlock.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseGetBlock} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseGetBlock.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        block: (f = msg.getBlock()) && type_pb.BlockInfo.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseGetBlock}
 */
proto.forge_abi.ResponseGetBlock.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseGetBlock();
  return proto.forge_abi.ResponseGetBlock.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseGetBlock} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseGetBlock}
 */
proto.forge_abi.ResponseGetBlock.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = new type_pb.BlockInfo();
        reader.readMessage(value, type_pb.BlockInfo.deserializeBinaryFromReader);
        msg.setBlock(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseGetBlock.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseGetBlock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseGetBlock} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseGetBlock.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getBlock();
  if (f != null) {
    writer.writeMessage(2, f, type_pb.BlockInfo.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseGetBlock.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {!proto.forge_abi.StatusCode} value
 * @return {!proto.forge_abi.ResponseGetBlock} returns this
 */
proto.forge_abi.ResponseGetBlock.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};

/**
 * optional BlockInfo block = 2;
 * @return {?proto.forge_abi.BlockInfo}
 */
proto.forge_abi.ResponseGetBlock.prototype.getBlock = function() {
  return /** @type{?proto.forge_abi.BlockInfo} */ (jspb.Message.getWrapperField(this, type_pb.BlockInfo, 2));
};

/**
 * @param {?proto.forge_abi.BlockInfo|undefined} value
 * @return {!proto.forge_abi.ResponseGetBlock} returns this
 */
proto.forge_abi.ResponseGetBlock.prototype.setBlock = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseGetBlock} returns this
 */
proto.forge_abi.ResponseGetBlock.prototype.clearBlock = function() {
  return this.setBlock(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseGetBlock.prototype.hasBlock = function() {
  return jspb.Message.getField(this, 2) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestGetBlocks.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestGetBlocks.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestGetBlocks} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestGetBlocks.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        paging: (f = msg.getPaging()) && trace_type_pb.PageInput.toObject(includeInstance, f),
        heightFilter: (f = msg.getHeightFilter()) && trace_type_pb.RangeFilter.toObject(includeInstance, f),
        emptyExcluded: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestGetBlocks}
 */
proto.forge_abi.RequestGetBlocks.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestGetBlocks();
  return proto.forge_abi.RequestGetBlocks.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestGetBlocks} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestGetBlocks}
 */
proto.forge_abi.RequestGetBlocks.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new trace_type_pb.PageInput();
        reader.readMessage(value, trace_type_pb.PageInput.deserializeBinaryFromReader);
        msg.setPaging(value);
        break;
      case 2:
        var value = new trace_type_pb.RangeFilter();
        reader.readMessage(value, trace_type_pb.RangeFilter.deserializeBinaryFromReader);
        msg.setHeightFilter(value);
        break;
      case 3:
        var value = /** @type {boolean} */ (reader.readBool());
        msg.setEmptyExcluded(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestGetBlocks.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestGetBlocks.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestGetBlocks} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestGetBlocks.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaging();
  if (f != null) {
    writer.writeMessage(1, f, trace_type_pb.PageInput.serializeBinaryToWriter);
  }
  f = message.getHeightFilter();
  if (f != null) {
    writer.writeMessage(2, f, trace_type_pb.RangeFilter.serializeBinaryToWriter);
  }
  f = message.getEmptyExcluded();
  if (f) {
    writer.writeBool(3, f);
  }
};

/**
 * optional PageInput paging = 1;
 * @return {?proto.forge_abi.PageInput}
 */
proto.forge_abi.RequestGetBlocks.prototype.getPaging = function() {
  return /** @type{?proto.forge_abi.PageInput} */ (jspb.Message.getWrapperField(this, trace_type_pb.PageInput, 1));
};

/**
 * @param {?proto.forge_abi.PageInput|undefined} value
 * @return {!proto.forge_abi.RequestGetBlocks} returns this
 */
proto.forge_abi.RequestGetBlocks.prototype.setPaging = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.RequestGetBlocks} returns this
 */
proto.forge_abi.RequestGetBlocks.prototype.clearPaging = function() {
  return this.setPaging(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.RequestGetBlocks.prototype.hasPaging = function() {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional RangeFilter height_filter = 2;
 * @return {?proto.forge_abi.RangeFilter}
 */
proto.forge_abi.RequestGetBlocks.prototype.getHeightFilter = function() {
  return /** @type{?proto.forge_abi.RangeFilter} */ (jspb.Message.getWrapperField(this, trace_type_pb.RangeFilter, 2));
};

/**
 * @param {?proto.forge_abi.RangeFilter|undefined} value
 * @return {!proto.forge_abi.RequestGetBlocks} returns this
 */
proto.forge_abi.RequestGetBlocks.prototype.setHeightFilter = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.RequestGetBlocks} returns this
 */
proto.forge_abi.RequestGetBlocks.prototype.clearHeightFilter = function() {
  return this.setHeightFilter(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.RequestGetBlocks.prototype.hasHeightFilter = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * optional bool empty_excluded = 3;
 * @return {boolean}
 */
proto.forge_abi.RequestGetBlocks.prototype.getEmptyExcluded = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};

/**
 * @param {boolean} value
 * @return {!proto.forge_abi.RequestGetBlocks} returns this
 */
proto.forge_abi.RequestGetBlocks.prototype.setEmptyExcluded = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.forge_abi.ResponseGetBlocks.repeatedFields_ = [3];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseGetBlocks.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseGetBlocks.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseGetBlocks} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseGetBlocks.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        page: (f = msg.getPage()) && trace_type_pb.PageInfo.toObject(includeInstance, f),
        blocksList: jspb.Message.toObjectList(msg.getBlocksList(), type_pb.BlockInfoSimple.toObject, includeInstance),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseGetBlocks}
 */
proto.forge_abi.ResponseGetBlocks.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseGetBlocks();
  return proto.forge_abi.ResponseGetBlocks.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseGetBlocks} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseGetBlocks}
 */
proto.forge_abi.ResponseGetBlocks.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = new trace_type_pb.PageInfo();
        reader.readMessage(value, trace_type_pb.PageInfo.deserializeBinaryFromReader);
        msg.setPage(value);
        break;
      case 3:
        var value = new type_pb.BlockInfoSimple();
        reader.readMessage(value, type_pb.BlockInfoSimple.deserializeBinaryFromReader);
        msg.addBlocks(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseGetBlocks.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseGetBlocks.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseGetBlocks} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseGetBlocks.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getPage();
  if (f != null) {
    writer.writeMessage(2, f, trace_type_pb.PageInfo.serializeBinaryToWriter);
  }
  f = message.getBlocksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(3, f, type_pb.BlockInfoSimple.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseGetBlocks.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {!proto.forge_abi.StatusCode} value
 * @return {!proto.forge_abi.ResponseGetBlocks} returns this
 */
proto.forge_abi.ResponseGetBlocks.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};

/**
 * optional PageInfo page = 2;
 * @return {?proto.forge_abi.PageInfo}
 */
proto.forge_abi.ResponseGetBlocks.prototype.getPage = function() {
  return /** @type{?proto.forge_abi.PageInfo} */ (jspb.Message.getWrapperField(this, trace_type_pb.PageInfo, 2));
};

/**
 * @param {?proto.forge_abi.PageInfo|undefined} value
 * @return {!proto.forge_abi.ResponseGetBlocks} returns this
 */
proto.forge_abi.ResponseGetBlocks.prototype.setPage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseGetBlocks} returns this
 */
proto.forge_abi.ResponseGetBlocks.prototype.clearPage = function() {
  return this.setPage(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseGetBlocks.prototype.hasPage = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * repeated BlockInfoSimple blocks = 3;
 * @return {!Array<!proto.forge_abi.BlockInfoSimple>}
 */
proto.forge_abi.ResponseGetBlocks.prototype.getBlocksList = function() {
  return /** @type{!Array<!proto.forge_abi.BlockInfoSimple>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    type_pb.BlockInfoSimple,
    3
  ));
};

/**
 * @param {!Array<!proto.forge_abi.BlockInfoSimple>} value
 * @return {!proto.forge_abi.ResponseGetBlocks} returns this
 */
proto.forge_abi.ResponseGetBlocks.prototype.setBlocksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};

/**
 * @param {!proto.forge_abi.BlockInfoSimple=} opt_value
 * @param {number=} opt_index
 * @return {!proto.forge_abi.BlockInfoSimple}
 */
proto.forge_abi.ResponseGetBlocks.prototype.addBlocks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.forge_abi.BlockInfoSimple, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.forge_abi.ResponseGetBlocks} returns this
 */
proto.forge_abi.ResponseGetBlocks.prototype.clearBlocksList = function() {
  return this.setBlocksList([]);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestDeclareNode.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestDeclareNode.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestDeclareNode} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestDeclareNode.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        validator: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
        issuer: jspb.Message.getFieldWithDefault(msg, 2, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestDeclareNode}
 */
proto.forge_abi.RequestDeclareNode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestDeclareNode();
  return proto.forge_abi.RequestDeclareNode.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestDeclareNode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestDeclareNode}
 */
proto.forge_abi.RequestDeclareNode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {boolean} */ (reader.readBool());
        msg.setValidator(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setIssuer(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestDeclareNode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestDeclareNode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestDeclareNode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestDeclareNode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValidator();
  if (f) {
    writer.writeBool(1, f);
  }
  f = message.getIssuer();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

/**
 * optional bool validator = 1;
 * @return {boolean}
 */
proto.forge_abi.RequestDeclareNode.prototype.getValidator = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};

/**
 * @param {boolean} value
 * @return {!proto.forge_abi.RequestDeclareNode} returns this
 */
proto.forge_abi.RequestDeclareNode.prototype.setValidator = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};

/**
 * optional string issuer = 2;
 * @return {string}
 */
proto.forge_abi.RequestDeclareNode.prototype.getIssuer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.forge_abi.RequestDeclareNode} returns this
 */
proto.forge_abi.RequestDeclareNode.prototype.setIssuer = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseDeclareNode.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseDeclareNode.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseDeclareNode} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseDeclareNode.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        wallet: (f = msg.getWallet()) && type_pb.WalletInfo.toObject(includeInstance, f),
        tx: (f = msg.getTx()) && type_pb.Transaction.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseDeclareNode}
 */
proto.forge_abi.ResponseDeclareNode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseDeclareNode();
  return proto.forge_abi.ResponseDeclareNode.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseDeclareNode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseDeclareNode}
 */
proto.forge_abi.ResponseDeclareNode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 3:
        var value = new type_pb.WalletInfo();
        reader.readMessage(value, type_pb.WalletInfo.deserializeBinaryFromReader);
        msg.setWallet(value);
        break;
      case 4:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setTx(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseDeclareNode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseDeclareNode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseDeclareNode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseDeclareNode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getWallet();
  if (f != null) {
    writer.writeMessage(3, f, type_pb.WalletInfo.serializeBinaryToWriter);
  }
  f = message.getTx();
  if (f != null) {
    writer.writeMessage(4, f, type_pb.Transaction.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseDeclareNode.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {!proto.forge_abi.StatusCode} value
 * @return {!proto.forge_abi.ResponseDeclareNode} returns this
 */
proto.forge_abi.ResponseDeclareNode.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};

/**
 * optional WalletInfo wallet = 3;
 * @return {?proto.forge_abi.WalletInfo}
 */
proto.forge_abi.ResponseDeclareNode.prototype.getWallet = function() {
  return /** @type{?proto.forge_abi.WalletInfo} */ (jspb.Message.getWrapperField(this, type_pb.WalletInfo, 3));
};

/**
 * @param {?proto.forge_abi.WalletInfo|undefined} value
 * @return {!proto.forge_abi.ResponseDeclareNode} returns this
 */
proto.forge_abi.ResponseDeclareNode.prototype.setWallet = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseDeclareNode} returns this
 */
proto.forge_abi.ResponseDeclareNode.prototype.clearWallet = function() {
  return this.setWallet(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseDeclareNode.prototype.hasWallet = function() {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * optional Transaction tx = 4;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseDeclareNode.prototype.getTx = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(this, type_pb.Transaction, 4));
};

/**
 * @param {?proto.forge_abi.Transaction|undefined} value
 * @return {!proto.forge_abi.ResponseDeclareNode} returns this
 */
proto.forge_abi.ResponseDeclareNode.prototype.setTx = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseDeclareNode} returns this
 */
proto.forge_abi.ResponseDeclareNode.prototype.clearTx = function() {
  return this.setTx(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseDeclareNode.prototype.hasTx = function() {
  return jspb.Message.getField(this, 4) != null;
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.forge_abi.RequestGetAccountState.repeatedFields_ = [2];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestGetAccountState.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestGetAccountState.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestGetAccountState} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestGetAccountState.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        address: jspb.Message.getFieldWithDefault(msg, 1, ''),
        keysList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
        height: jspb.Message.getFieldWithDefault(msg, 3, 0),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestGetAccountState}
 */
proto.forge_abi.RequestGetAccountState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestGetAccountState();
  return proto.forge_abi.RequestGetAccountState.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestGetAccountState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestGetAccountState}
 */
proto.forge_abi.RequestGetAccountState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setAddress(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.addKeys(value);
        break;
      case 3:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setHeight(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestGetAccountState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestGetAccountState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestGetAccountState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestGetAccountState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(2, f);
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint64(3, f);
  }
};

/**
 * optional string address = 1;
 * @return {string}
 */
proto.forge_abi.RequestGetAccountState.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.forge_abi.RequestGetAccountState} returns this
 */
proto.forge_abi.RequestGetAccountState.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * repeated string keys = 2;
 * @return {!Array<string>}
 */
proto.forge_abi.RequestGetAccountState.prototype.getKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.forge_abi.RequestGetAccountState} returns this
 */
proto.forge_abi.RequestGetAccountState.prototype.setKeysList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.forge_abi.RequestGetAccountState} returns this
 */
proto.forge_abi.RequestGetAccountState.prototype.addKeys = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.forge_abi.RequestGetAccountState} returns this
 */
proto.forge_abi.RequestGetAccountState.prototype.clearKeysList = function() {
  return this.setKeysList([]);
};

/**
 * optional uint64 height = 3;
 * @return {number}
 */
proto.forge_abi.RequestGetAccountState.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/**
 * @param {number} value
 * @return {!proto.forge_abi.RequestGetAccountState} returns this
 */
proto.forge_abi.RequestGetAccountState.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseGetAccountState.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseGetAccountState.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseGetAccountState} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseGetAccountState.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        state: (f = msg.getState()) && state_pb.AccountState.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseGetAccountState}
 */
proto.forge_abi.ResponseGetAccountState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseGetAccountState();
  return proto.forge_abi.ResponseGetAccountState.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseGetAccountState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseGetAccountState}
 */
proto.forge_abi.ResponseGetAccountState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = new state_pb.AccountState();
        reader.readMessage(value, state_pb.AccountState.deserializeBinaryFromReader);
        msg.setState(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseGetAccountState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseGetAccountState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseGetAccountState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseGetAccountState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getState();
  if (f != null) {
    writer.writeMessage(2, f, state_pb.AccountState.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseGetAccountState.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {!proto.forge_abi.StatusCode} value
 * @return {!proto.forge_abi.ResponseGetAccountState} returns this
 */
proto.forge_abi.ResponseGetAccountState.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};

/**
 * optional AccountState state = 2;
 * @return {?proto.forge_abi.AccountState}
 */
proto.forge_abi.ResponseGetAccountState.prototype.getState = function() {
  return /** @type{?proto.forge_abi.AccountState} */ (jspb.Message.getWrapperField(this, state_pb.AccountState, 2));
};

/**
 * @param {?proto.forge_abi.AccountState|undefined} value
 * @return {!proto.forge_abi.ResponseGetAccountState} returns this
 */
proto.forge_abi.ResponseGetAccountState.prototype.setState = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseGetAccountState} returns this
 */
proto.forge_abi.ResponseGetAccountState.prototype.clearState = function() {
  return this.setState(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseGetAccountState.prototype.hasState = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.forge_abi.RequestGetAssetState.repeatedFields_ = [2];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestGetAssetState.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestGetAssetState.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestGetAssetState} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestGetAssetState.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        address: jspb.Message.getFieldWithDefault(msg, 1, ''),
        keysList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
        height: jspb.Message.getFieldWithDefault(msg, 3, 0),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestGetAssetState}
 */
proto.forge_abi.RequestGetAssetState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestGetAssetState();
  return proto.forge_abi.RequestGetAssetState.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestGetAssetState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestGetAssetState}
 */
proto.forge_abi.RequestGetAssetState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setAddress(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.addKeys(value);
        break;
      case 3:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setHeight(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestGetAssetState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestGetAssetState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestGetAssetState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestGetAssetState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(2, f);
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint64(3, f);
  }
};

/**
 * optional string address = 1;
 * @return {string}
 */
proto.forge_abi.RequestGetAssetState.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.forge_abi.RequestGetAssetState} returns this
 */
proto.forge_abi.RequestGetAssetState.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * repeated string keys = 2;
 * @return {!Array<string>}
 */
proto.forge_abi.RequestGetAssetState.prototype.getKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.forge_abi.RequestGetAssetState} returns this
 */
proto.forge_abi.RequestGetAssetState.prototype.setKeysList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.forge_abi.RequestGetAssetState} returns this
 */
proto.forge_abi.RequestGetAssetState.prototype.addKeys = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.forge_abi.RequestGetAssetState} returns this
 */
proto.forge_abi.RequestGetAssetState.prototype.clearKeysList = function() {
  return this.setKeysList([]);
};

/**
 * optional uint64 height = 3;
 * @return {number}
 */
proto.forge_abi.RequestGetAssetState.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/**
 * @param {number} value
 * @return {!proto.forge_abi.RequestGetAssetState} returns this
 */
proto.forge_abi.RequestGetAssetState.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseGetAssetState.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseGetAssetState.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseGetAssetState} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseGetAssetState.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        state: (f = msg.getState()) && state_pb.AssetState.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseGetAssetState}
 */
proto.forge_abi.ResponseGetAssetState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseGetAssetState();
  return proto.forge_abi.ResponseGetAssetState.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseGetAssetState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseGetAssetState}
 */
proto.forge_abi.ResponseGetAssetState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = new state_pb.AssetState();
        reader.readMessage(value, state_pb.AssetState.deserializeBinaryFromReader);
        msg.setState(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseGetAssetState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseGetAssetState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseGetAssetState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseGetAssetState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getState();
  if (f != null) {
    writer.writeMessage(2, f, state_pb.AssetState.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseGetAssetState.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {!proto.forge_abi.StatusCode} value
 * @return {!proto.forge_abi.ResponseGetAssetState} returns this
 */
proto.forge_abi.ResponseGetAssetState.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};

/**
 * optional AssetState state = 2;
 * @return {?proto.forge_abi.AssetState}
 */
proto.forge_abi.ResponseGetAssetState.prototype.getState = function() {
  return /** @type{?proto.forge_abi.AssetState} */ (jspb.Message.getWrapperField(this, state_pb.AssetState, 2));
};

/**
 * @param {?proto.forge_abi.AssetState|undefined} value
 * @return {!proto.forge_abi.ResponseGetAssetState} returns this
 */
proto.forge_abi.ResponseGetAssetState.prototype.setState = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseGetAssetState} returns this
 */
proto.forge_abi.ResponseGetAssetState.prototype.clearState = function() {
  return this.setState(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseGetAssetState.prototype.hasState = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.forge_abi.RequestGetForgeState.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestGetForgeState.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestGetForgeState.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestGetForgeState} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestGetForgeState.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        keysList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
        height: jspb.Message.getFieldWithDefault(msg, 3, 0),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestGetForgeState}
 */
proto.forge_abi.RequestGetForgeState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestGetForgeState();
  return proto.forge_abi.RequestGetForgeState.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestGetForgeState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestGetForgeState}
 */
proto.forge_abi.RequestGetForgeState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.addKeys(value);
        break;
      case 3:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setHeight(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestGetForgeState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestGetForgeState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestGetForgeState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestGetForgeState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(1, f);
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint64(3, f);
  }
};

/**
 * repeated string keys = 1;
 * @return {!Array<string>}
 */
proto.forge_abi.RequestGetForgeState.prototype.getKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.forge_abi.RequestGetForgeState} returns this
 */
proto.forge_abi.RequestGetForgeState.prototype.setKeysList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.forge_abi.RequestGetForgeState} returns this
 */
proto.forge_abi.RequestGetForgeState.prototype.addKeys = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.forge_abi.RequestGetForgeState} returns this
 */
proto.forge_abi.RequestGetForgeState.prototype.clearKeysList = function() {
  return this.setKeysList([]);
};

/**
 * optional uint64 height = 3;
 * @return {number}
 */
proto.forge_abi.RequestGetForgeState.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/**
 * @param {number} value
 * @return {!proto.forge_abi.RequestGetForgeState} returns this
 */
proto.forge_abi.RequestGetForgeState.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseGetForgeState.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseGetForgeState.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseGetForgeState} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseGetForgeState.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        state: (f = msg.getState()) && state_pb.ForgeState.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseGetForgeState}
 */
proto.forge_abi.ResponseGetForgeState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseGetForgeState();
  return proto.forge_abi.ResponseGetForgeState.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseGetForgeState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseGetForgeState}
 */
proto.forge_abi.ResponseGetForgeState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = new state_pb.ForgeState();
        reader.readMessage(value, state_pb.ForgeState.deserializeBinaryFromReader);
        msg.setState(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseGetForgeState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseGetForgeState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseGetForgeState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseGetForgeState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getState();
  if (f != null) {
    writer.writeMessage(2, f, state_pb.ForgeState.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseGetForgeState.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {!proto.forge_abi.StatusCode} value
 * @return {!proto.forge_abi.ResponseGetForgeState} returns this
 */
proto.forge_abi.ResponseGetForgeState.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};

/**
 * optional ForgeState state = 2;
 * @return {?proto.forge_abi.ForgeState}
 */
proto.forge_abi.ResponseGetForgeState.prototype.getState = function() {
  return /** @type{?proto.forge_abi.ForgeState} */ (jspb.Message.getWrapperField(this, state_pb.ForgeState, 2));
};

/**
 * @param {?proto.forge_abi.ForgeState|undefined} value
 * @return {!proto.forge_abi.ResponseGetForgeState} returns this
 */
proto.forge_abi.ResponseGetForgeState.prototype.setState = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseGetForgeState} returns this
 */
proto.forge_abi.ResponseGetForgeState.prototype.clearState = function() {
  return this.setState(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseGetForgeState.prototype.hasState = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.forge_abi.RequestGetSwapState.repeatedFields_ = [2];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestGetSwapState.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestGetSwapState.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestGetSwapState} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestGetSwapState.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        address: jspb.Message.getFieldWithDefault(msg, 1, ''),
        keysList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
        height: jspb.Message.getFieldWithDefault(msg, 3, 0),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestGetSwapState}
 */
proto.forge_abi.RequestGetSwapState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestGetSwapState();
  return proto.forge_abi.RequestGetSwapState.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestGetSwapState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestGetSwapState}
 */
proto.forge_abi.RequestGetSwapState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setAddress(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.addKeys(value);
        break;
      case 3:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setHeight(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestGetSwapState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestGetSwapState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestGetSwapState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestGetSwapState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(2, f);
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint64(3, f);
  }
};

/**
 * optional string address = 1;
 * @return {string}
 */
proto.forge_abi.RequestGetSwapState.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.forge_abi.RequestGetSwapState} returns this
 */
proto.forge_abi.RequestGetSwapState.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * repeated string keys = 2;
 * @return {!Array<string>}
 */
proto.forge_abi.RequestGetSwapState.prototype.getKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.forge_abi.RequestGetSwapState} returns this
 */
proto.forge_abi.RequestGetSwapState.prototype.setKeysList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.forge_abi.RequestGetSwapState} returns this
 */
proto.forge_abi.RequestGetSwapState.prototype.addKeys = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.forge_abi.RequestGetSwapState} returns this
 */
proto.forge_abi.RequestGetSwapState.prototype.clearKeysList = function() {
  return this.setKeysList([]);
};

/**
 * optional uint64 height = 3;
 * @return {number}
 */
proto.forge_abi.RequestGetSwapState.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/**
 * @param {number} value
 * @return {!proto.forge_abi.RequestGetSwapState} returns this
 */
proto.forge_abi.RequestGetSwapState.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseGetSwapState.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseGetSwapState.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseGetSwapState} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseGetSwapState.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        state: (f = msg.getState()) && state_pb.SwapState.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseGetSwapState}
 */
proto.forge_abi.ResponseGetSwapState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseGetSwapState();
  return proto.forge_abi.ResponseGetSwapState.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseGetSwapState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseGetSwapState}
 */
proto.forge_abi.ResponseGetSwapState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = new state_pb.SwapState();
        reader.readMessage(value, state_pb.SwapState.deserializeBinaryFromReader);
        msg.setState(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseGetSwapState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseGetSwapState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseGetSwapState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseGetSwapState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getState();
  if (f != null) {
    writer.writeMessage(2, f, state_pb.SwapState.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseGetSwapState.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {!proto.forge_abi.StatusCode} value
 * @return {!proto.forge_abi.ResponseGetSwapState} returns this
 */
proto.forge_abi.ResponseGetSwapState.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};

/**
 * optional SwapState state = 2;
 * @return {?proto.forge_abi.SwapState}
 */
proto.forge_abi.ResponseGetSwapState.prototype.getState = function() {
  return /** @type{?proto.forge_abi.SwapState} */ (jspb.Message.getWrapperField(this, state_pb.SwapState, 2));
};

/**
 * @param {?proto.forge_abi.SwapState|undefined} value
 * @return {!proto.forge_abi.ResponseGetSwapState} returns this
 */
proto.forge_abi.ResponseGetSwapState.prototype.setState = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseGetSwapState} returns this
 */
proto.forge_abi.ResponseGetSwapState.prototype.clearState = function() {
  return this.setState(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseGetSwapState.prototype.hasState = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.forge_abi.RequestGetDelegateState.repeatedFields_ = [2];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestGetDelegateState.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestGetDelegateState.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestGetDelegateState} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestGetDelegateState.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        address: jspb.Message.getFieldWithDefault(msg, 1, ''),
        keysList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
        height: jspb.Message.getFieldWithDefault(msg, 3, 0),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestGetDelegateState}
 */
proto.forge_abi.RequestGetDelegateState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestGetDelegateState();
  return proto.forge_abi.RequestGetDelegateState.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestGetDelegateState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestGetDelegateState}
 */
proto.forge_abi.RequestGetDelegateState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setAddress(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.addKeys(value);
        break;
      case 3:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setHeight(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestGetDelegateState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestGetDelegateState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestGetDelegateState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestGetDelegateState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(2, f);
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint64(3, f);
  }
};

/**
 * optional string address = 1;
 * @return {string}
 */
proto.forge_abi.RequestGetDelegateState.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.forge_abi.RequestGetDelegateState} returns this
 */
proto.forge_abi.RequestGetDelegateState.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * repeated string keys = 2;
 * @return {!Array<string>}
 */
proto.forge_abi.RequestGetDelegateState.prototype.getKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.forge_abi.RequestGetDelegateState} returns this
 */
proto.forge_abi.RequestGetDelegateState.prototype.setKeysList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.forge_abi.RequestGetDelegateState} returns this
 */
proto.forge_abi.RequestGetDelegateState.prototype.addKeys = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.forge_abi.RequestGetDelegateState} returns this
 */
proto.forge_abi.RequestGetDelegateState.prototype.clearKeysList = function() {
  return this.setKeysList([]);
};

/**
 * optional uint64 height = 3;
 * @return {number}
 */
proto.forge_abi.RequestGetDelegateState.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/**
 * @param {number} value
 * @return {!proto.forge_abi.RequestGetDelegateState} returns this
 */
proto.forge_abi.RequestGetDelegateState.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseGetDelegateState.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseGetDelegateState.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseGetDelegateState} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseGetDelegateState.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        state: (f = msg.getState()) && state_pb.DelegateState.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseGetDelegateState}
 */
proto.forge_abi.ResponseGetDelegateState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseGetDelegateState();
  return proto.forge_abi.ResponseGetDelegateState.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseGetDelegateState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseGetDelegateState}
 */
proto.forge_abi.ResponseGetDelegateState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = new state_pb.DelegateState();
        reader.readMessage(value, state_pb.DelegateState.deserializeBinaryFromReader);
        msg.setState(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseGetDelegateState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseGetDelegateState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseGetDelegateState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseGetDelegateState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getState();
  if (f != null) {
    writer.writeMessage(2, f, state_pb.DelegateState.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseGetDelegateState.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {!proto.forge_abi.StatusCode} value
 * @return {!proto.forge_abi.ResponseGetDelegateState} returns this
 */
proto.forge_abi.ResponseGetDelegateState.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};

/**
 * optional DelegateState state = 2;
 * @return {?proto.forge_abi.DelegateState}
 */
proto.forge_abi.ResponseGetDelegateState.prototype.getState = function() {
  return /** @type{?proto.forge_abi.DelegateState} */ (jspb.Message.getWrapperField(this, state_pb.DelegateState, 2));
};

/**
 * @param {?proto.forge_abi.DelegateState|undefined} value
 * @return {!proto.forge_abi.ResponseGetDelegateState} returns this
 */
proto.forge_abi.ResponseGetDelegateState.prototype.setState = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseGetDelegateState} returns this
 */
proto.forge_abi.ResponseGetDelegateState.prototype.clearState = function() {
  return this.setState(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseGetDelegateState.prototype.hasState = function() {
  return jspb.Message.getField(this, 2) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestGetChainInfo.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestGetChainInfo.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestGetChainInfo} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestGetChainInfo.toObject = function(includeInstance, msg) {
    var f,
      obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestGetChainInfo}
 */
proto.forge_abi.RequestGetChainInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestGetChainInfo();
  return proto.forge_abi.RequestGetChainInfo.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestGetChainInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestGetChainInfo}
 */
proto.forge_abi.RequestGetChainInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestGetChainInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestGetChainInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestGetChainInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestGetChainInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseGetChainInfo.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseGetChainInfo.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseGetChainInfo} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseGetChainInfo.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        info: (f = msg.getInfo()) && type_pb.ChainInfo.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseGetChainInfo}
 */
proto.forge_abi.ResponseGetChainInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseGetChainInfo();
  return proto.forge_abi.ResponseGetChainInfo.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseGetChainInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseGetChainInfo}
 */
proto.forge_abi.ResponseGetChainInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = new type_pb.ChainInfo();
        reader.readMessage(value, type_pb.ChainInfo.deserializeBinaryFromReader);
        msg.setInfo(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseGetChainInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseGetChainInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseGetChainInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseGetChainInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(2, f, type_pb.ChainInfo.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseGetChainInfo.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {!proto.forge_abi.StatusCode} value
 * @return {!proto.forge_abi.ResponseGetChainInfo} returns this
 */
proto.forge_abi.ResponseGetChainInfo.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};

/**
 * optional ChainInfo info = 2;
 * @return {?proto.forge_abi.ChainInfo}
 */
proto.forge_abi.ResponseGetChainInfo.prototype.getInfo = function() {
  return /** @type{?proto.forge_abi.ChainInfo} */ (jspb.Message.getWrapperField(this, type_pb.ChainInfo, 2));
};

/**
 * @param {?proto.forge_abi.ChainInfo|undefined} value
 * @return {!proto.forge_abi.ResponseGetChainInfo} returns this
 */
proto.forge_abi.ResponseGetChainInfo.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseGetChainInfo} returns this
 */
proto.forge_abi.ResponseGetChainInfo.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseGetChainInfo.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestGetNodeInfo.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestGetNodeInfo.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestGetNodeInfo} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestGetNodeInfo.toObject = function(includeInstance, msg) {
    var f,
      obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestGetNodeInfo}
 */
proto.forge_abi.RequestGetNodeInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestGetNodeInfo();
  return proto.forge_abi.RequestGetNodeInfo.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestGetNodeInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestGetNodeInfo}
 */
proto.forge_abi.RequestGetNodeInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestGetNodeInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestGetNodeInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestGetNodeInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestGetNodeInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseGetNodeInfo.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseGetNodeInfo.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseGetNodeInfo} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseGetNodeInfo.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        info: (f = msg.getInfo()) && type_pb.NodeInfo.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseGetNodeInfo}
 */
proto.forge_abi.ResponseGetNodeInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseGetNodeInfo();
  return proto.forge_abi.ResponseGetNodeInfo.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseGetNodeInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseGetNodeInfo}
 */
proto.forge_abi.ResponseGetNodeInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = new type_pb.NodeInfo();
        reader.readMessage(value, type_pb.NodeInfo.deserializeBinaryFromReader);
        msg.setInfo(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseGetNodeInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseGetNodeInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseGetNodeInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseGetNodeInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(2, f, type_pb.NodeInfo.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseGetNodeInfo.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {!proto.forge_abi.StatusCode} value
 * @return {!proto.forge_abi.ResponseGetNodeInfo} returns this
 */
proto.forge_abi.ResponseGetNodeInfo.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};

/**
 * optional NodeInfo info = 2;
 * @return {?proto.forge_abi.NodeInfo}
 */
proto.forge_abi.ResponseGetNodeInfo.prototype.getInfo = function() {
  return /** @type{?proto.forge_abi.NodeInfo} */ (jspb.Message.getWrapperField(this, type_pb.NodeInfo, 2));
};

/**
 * @param {?proto.forge_abi.NodeInfo|undefined} value
 * @return {!proto.forge_abi.ResponseGetNodeInfo} returns this
 */
proto.forge_abi.ResponseGetNodeInfo.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseGetNodeInfo} returns this
 */
proto.forge_abi.ResponseGetNodeInfo.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseGetNodeInfo.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestSearch.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestSearch.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestSearch} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestSearch.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        key: jspb.Message.getFieldWithDefault(msg, 1, ''),
        value: jspb.Message.getFieldWithDefault(msg, 2, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestSearch}
 */
proto.forge_abi.RequestSearch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestSearch();
  return proto.forge_abi.RequestSearch.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestSearch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestSearch}
 */
proto.forge_abi.RequestSearch.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setKey(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setValue(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestSearch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestSearch.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestSearch} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestSearch.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

/**
 * optional string key = 1;
 * @return {string}
 */
proto.forge_abi.RequestSearch.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.forge_abi.RequestSearch} returns this
 */
proto.forge_abi.RequestSearch.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string value = 2;
 * @return {string}
 */
proto.forge_abi.RequestSearch.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.forge_abi.RequestSearch} returns this
 */
proto.forge_abi.RequestSearch.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.forge_abi.ResponseSearch.repeatedFields_ = [2];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseSearch.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseSearch.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseSearch} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseSearch.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        txsList: jspb.Message.toObjectList(msg.getTxsList(), type_pb.TransactionInfo.toObject, includeInstance),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseSearch}
 */
proto.forge_abi.ResponseSearch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseSearch();
  return proto.forge_abi.ResponseSearch.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseSearch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseSearch}
 */
proto.forge_abi.ResponseSearch.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = new type_pb.TransactionInfo();
        reader.readMessage(value, type_pb.TransactionInfo.deserializeBinaryFromReader);
        msg.addTxs(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseSearch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseSearch.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseSearch} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseSearch.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getTxsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(2, f, type_pb.TransactionInfo.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseSearch.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {!proto.forge_abi.StatusCode} value
 * @return {!proto.forge_abi.ResponseSearch} returns this
 */
proto.forge_abi.ResponseSearch.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};

/**
 * repeated TransactionInfo txs = 2;
 * @return {!Array<!proto.forge_abi.TransactionInfo>}
 */
proto.forge_abi.ResponseSearch.prototype.getTxsList = function() {
  return /** @type{!Array<!proto.forge_abi.TransactionInfo>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    type_pb.TransactionInfo,
    2
  ));
};

/**
 * @param {!Array<!proto.forge_abi.TransactionInfo>} value
 * @return {!proto.forge_abi.ResponseSearch} returns this
 */
proto.forge_abi.ResponseSearch.prototype.setTxsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.forge_abi.TransactionInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.forge_abi.TransactionInfo}
 */
proto.forge_abi.ResponseSearch.prototype.addTxs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.forge_abi.TransactionInfo, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.forge_abi.ResponseSearch} returns this
 */
proto.forge_abi.ResponseSearch.prototype.clearTxsList = function() {
  return this.setTxsList([]);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestGetUnconfirmedTxs.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestGetUnconfirmedTxs.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestGetUnconfirmedTxs} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestGetUnconfirmedTxs.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        paging: (f = msg.getPaging()) && trace_type_pb.PageInput.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestGetUnconfirmedTxs}
 */
proto.forge_abi.RequestGetUnconfirmedTxs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestGetUnconfirmedTxs();
  return proto.forge_abi.RequestGetUnconfirmedTxs.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestGetUnconfirmedTxs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestGetUnconfirmedTxs}
 */
proto.forge_abi.RequestGetUnconfirmedTxs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new trace_type_pb.PageInput();
        reader.readMessage(value, trace_type_pb.PageInput.deserializeBinaryFromReader);
        msg.setPaging(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestGetUnconfirmedTxs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestGetUnconfirmedTxs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestGetUnconfirmedTxs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestGetUnconfirmedTxs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaging();
  if (f != null) {
    writer.writeMessage(1, f, trace_type_pb.PageInput.serializeBinaryToWriter);
  }
};

/**
 * optional PageInput paging = 1;
 * @return {?proto.forge_abi.PageInput}
 */
proto.forge_abi.RequestGetUnconfirmedTxs.prototype.getPaging = function() {
  return /** @type{?proto.forge_abi.PageInput} */ (jspb.Message.getWrapperField(this, trace_type_pb.PageInput, 1));
};

/**
 * @param {?proto.forge_abi.PageInput|undefined} value
 * @return {!proto.forge_abi.RequestGetUnconfirmedTxs} returns this
 */
proto.forge_abi.RequestGetUnconfirmedTxs.prototype.setPaging = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.RequestGetUnconfirmedTxs} returns this
 */
proto.forge_abi.RequestGetUnconfirmedTxs.prototype.clearPaging = function() {
  return this.setPaging(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.RequestGetUnconfirmedTxs.prototype.hasPaging = function() {
  return jspb.Message.getField(this, 1) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseGetUnconfirmedTxs.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseGetUnconfirmedTxs.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseGetUnconfirmedTxs} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseGetUnconfirmedTxs.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        page: (f = msg.getPage()) && trace_type_pb.PageInfo.toObject(includeInstance, f),
        unconfirmedTxs: (f = msg.getUnconfirmedTxs()) && type_pb.UnconfirmedTxs.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseGetUnconfirmedTxs}
 */
proto.forge_abi.ResponseGetUnconfirmedTxs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseGetUnconfirmedTxs();
  return proto.forge_abi.ResponseGetUnconfirmedTxs.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseGetUnconfirmedTxs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseGetUnconfirmedTxs}
 */
proto.forge_abi.ResponseGetUnconfirmedTxs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = new trace_type_pb.PageInfo();
        reader.readMessage(value, trace_type_pb.PageInfo.deserializeBinaryFromReader);
        msg.setPage(value);
        break;
      case 3:
        var value = new type_pb.UnconfirmedTxs();
        reader.readMessage(value, type_pb.UnconfirmedTxs.deserializeBinaryFromReader);
        msg.setUnconfirmedTxs(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseGetUnconfirmedTxs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseGetUnconfirmedTxs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseGetUnconfirmedTxs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseGetUnconfirmedTxs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getPage();
  if (f != null) {
    writer.writeMessage(2, f, trace_type_pb.PageInfo.serializeBinaryToWriter);
  }
  f = message.getUnconfirmedTxs();
  if (f != null) {
    writer.writeMessage(3, f, type_pb.UnconfirmedTxs.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseGetUnconfirmedTxs.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {!proto.forge_abi.StatusCode} value
 * @return {!proto.forge_abi.ResponseGetUnconfirmedTxs} returns this
 */
proto.forge_abi.ResponseGetUnconfirmedTxs.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};

/**
 * optional PageInfo page = 2;
 * @return {?proto.forge_abi.PageInfo}
 */
proto.forge_abi.ResponseGetUnconfirmedTxs.prototype.getPage = function() {
  return /** @type{?proto.forge_abi.PageInfo} */ (jspb.Message.getWrapperField(this, trace_type_pb.PageInfo, 2));
};

/**
 * @param {?proto.forge_abi.PageInfo|undefined} value
 * @return {!proto.forge_abi.ResponseGetUnconfirmedTxs} returns this
 */
proto.forge_abi.ResponseGetUnconfirmedTxs.prototype.setPage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseGetUnconfirmedTxs} returns this
 */
proto.forge_abi.ResponseGetUnconfirmedTxs.prototype.clearPage = function() {
  return this.setPage(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseGetUnconfirmedTxs.prototype.hasPage = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * optional UnconfirmedTxs unconfirmed_txs = 3;
 * @return {?proto.forge_abi.UnconfirmedTxs}
 */
proto.forge_abi.ResponseGetUnconfirmedTxs.prototype.getUnconfirmedTxs = function() {
  return /** @type{?proto.forge_abi.UnconfirmedTxs} */ (jspb.Message.getWrapperField(this, type_pb.UnconfirmedTxs, 3));
};

/**
 * @param {?proto.forge_abi.UnconfirmedTxs|undefined} value
 * @return {!proto.forge_abi.ResponseGetUnconfirmedTxs} returns this
 */
proto.forge_abi.ResponseGetUnconfirmedTxs.prototype.setUnconfirmedTxs = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseGetUnconfirmedTxs} returns this
 */
proto.forge_abi.ResponseGetUnconfirmedTxs.prototype.clearUnconfirmedTxs = function() {
  return this.setUnconfirmedTxs(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseGetUnconfirmedTxs.prototype.hasUnconfirmedTxs = function() {
  return jspb.Message.getField(this, 3) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestGetNetInfo.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestGetNetInfo.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestGetNetInfo} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestGetNetInfo.toObject = function(includeInstance, msg) {
    var f,
      obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestGetNetInfo}
 */
proto.forge_abi.RequestGetNetInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestGetNetInfo();
  return proto.forge_abi.RequestGetNetInfo.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestGetNetInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestGetNetInfo}
 */
proto.forge_abi.RequestGetNetInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestGetNetInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestGetNetInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestGetNetInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestGetNetInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseGetNetInfo.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseGetNetInfo.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseGetNetInfo} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseGetNetInfo.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        netInfo: (f = msg.getNetInfo()) && type_pb.NetInfo.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseGetNetInfo}
 */
proto.forge_abi.ResponseGetNetInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseGetNetInfo();
  return proto.forge_abi.ResponseGetNetInfo.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseGetNetInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseGetNetInfo}
 */
proto.forge_abi.ResponseGetNetInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = new type_pb.NetInfo();
        reader.readMessage(value, type_pb.NetInfo.deserializeBinaryFromReader);
        msg.setNetInfo(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseGetNetInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseGetNetInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseGetNetInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseGetNetInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getNetInfo();
  if (f != null) {
    writer.writeMessage(2, f, type_pb.NetInfo.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseGetNetInfo.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {!proto.forge_abi.StatusCode} value
 * @return {!proto.forge_abi.ResponseGetNetInfo} returns this
 */
proto.forge_abi.ResponseGetNetInfo.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};

/**
 * optional NetInfo net_info = 2;
 * @return {?proto.forge_abi.NetInfo}
 */
proto.forge_abi.ResponseGetNetInfo.prototype.getNetInfo = function() {
  return /** @type{?proto.forge_abi.NetInfo} */ (jspb.Message.getWrapperField(this, type_pb.NetInfo, 2));
};

/**
 * @param {?proto.forge_abi.NetInfo|undefined} value
 * @return {!proto.forge_abi.ResponseGetNetInfo} returns this
 */
proto.forge_abi.ResponseGetNetInfo.prototype.setNetInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseGetNetInfo} returns this
 */
proto.forge_abi.ResponseGetNetInfo.prototype.clearNetInfo = function() {
  return this.setNetInfo(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseGetNetInfo.prototype.hasNetInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestGetValidatorsInfo.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestGetValidatorsInfo.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestGetValidatorsInfo} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestGetValidatorsInfo.toObject = function(includeInstance, msg) {
    var f,
      obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestGetValidatorsInfo}
 */
proto.forge_abi.RequestGetValidatorsInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestGetValidatorsInfo();
  return proto.forge_abi.RequestGetValidatorsInfo.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestGetValidatorsInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestGetValidatorsInfo}
 */
proto.forge_abi.RequestGetValidatorsInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestGetValidatorsInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestGetValidatorsInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestGetValidatorsInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestGetValidatorsInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseGetValidatorsInfo.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseGetValidatorsInfo.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseGetValidatorsInfo} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseGetValidatorsInfo.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        validatorsInfo: (f = msg.getValidatorsInfo()) && type_pb.ValidatorsInfo.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseGetValidatorsInfo}
 */
proto.forge_abi.ResponseGetValidatorsInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseGetValidatorsInfo();
  return proto.forge_abi.ResponseGetValidatorsInfo.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseGetValidatorsInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseGetValidatorsInfo}
 */
proto.forge_abi.ResponseGetValidatorsInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = new type_pb.ValidatorsInfo();
        reader.readMessage(value, type_pb.ValidatorsInfo.deserializeBinaryFromReader);
        msg.setValidatorsInfo(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseGetValidatorsInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseGetValidatorsInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseGetValidatorsInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseGetValidatorsInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getValidatorsInfo();
  if (f != null) {
    writer.writeMessage(2, f, type_pb.ValidatorsInfo.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseGetValidatorsInfo.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {!proto.forge_abi.StatusCode} value
 * @return {!proto.forge_abi.ResponseGetValidatorsInfo} returns this
 */
proto.forge_abi.ResponseGetValidatorsInfo.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};

/**
 * optional ValidatorsInfo validators_info = 2;
 * @return {?proto.forge_abi.ValidatorsInfo}
 */
proto.forge_abi.ResponseGetValidatorsInfo.prototype.getValidatorsInfo = function() {
  return /** @type{?proto.forge_abi.ValidatorsInfo} */ (jspb.Message.getWrapperField(this, type_pb.ValidatorsInfo, 2));
};

/**
 * @param {?proto.forge_abi.ValidatorsInfo|undefined} value
 * @return {!proto.forge_abi.ResponseGetValidatorsInfo} returns this
 */
proto.forge_abi.ResponseGetValidatorsInfo.prototype.setValidatorsInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseGetValidatorsInfo} returns this
 */
proto.forge_abi.ResponseGetValidatorsInfo.prototype.clearValidatorsInfo = function() {
  return this.setValidatorsInfo(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseGetValidatorsInfo.prototype.hasValidatorsInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestSubscribe.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestSubscribe.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestSubscribe} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestSubscribe.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        topic: jspb.Message.getFieldWithDefault(msg, 1, ''),
        filter: jspb.Message.getFieldWithDefault(msg, 2, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestSubscribe}
 */
proto.forge_abi.RequestSubscribe.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestSubscribe();
  return proto.forge_abi.RequestSubscribe.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestSubscribe} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestSubscribe}
 */
proto.forge_abi.RequestSubscribe.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setTopic(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setFilter(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestSubscribe.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestSubscribe.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestSubscribe} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestSubscribe.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTopic();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

/**
 * optional string topic = 1;
 * @return {string}
 */
proto.forge_abi.RequestSubscribe.prototype.getTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.forge_abi.RequestSubscribe} returns this
 */
proto.forge_abi.RequestSubscribe.prototype.setTopic = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string filter = 2;
 * @return {string}
 */
proto.forge_abi.RequestSubscribe.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.forge_abi.RequestSubscribe} returns this
 */
proto.forge_abi.RequestSubscribe.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.forge_abi.ResponseSubscribe.oneofGroups_ = [
  [
    2,
    3,
    4,
    5,
    6,
    7,
    16,
    17,
    19,
    20,
    21,
    23,
    24,
    25,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    38,
    39,
    40,
    41,
    42,
    129,
    130,
    131,
    134,
    135,
  ],
];

/**
 * @enum {number}
 */
proto.forge_abi.ResponseSubscribe.ValueCase = {
  VALUE_NOT_SET: 0,
  TOPIC: 2,
  TRANSFER: 3,
  ACCOUNT_MIGRATE: 4,
  CONFIRM: 5,
  CREATE_ASSET: 6,
  EXCHANGE: 7,
  BEGIN_BLOCK: 16,
  END_BLOCK: 17,
  DECLARE: 19,
  UPDATE_ASSET: 20,
  CONSENSUS_UPGRADE: 21,
  SYS_UPGRADE: 23,
  STAKE: 24,
  DELEGATE: 25,
  REVOKE_DELEGATE: 28,
  DEPOSIT_TOKEN: 29,
  WITHDRAW_TOKEN: 30,
  APPROVE_WITHDRAW: 31,
  REVOKE_WITHDRAW: 32,
  SETUP_SWAP: 33,
  REVOKE_SWAP: 34,
  RETRIEVE_SWAP: 35,
  POKE: 36,
  CONSUME_ASSET: 38,
  ACQUIRE_ASSET: 39,
  UPGRADE_NODE: 40,
  UPDATE_VALIDATOR: 41,
  UPDATE_CONSENSUS_PARAMS: 42,
  ACCOUNT_STATE: 129,
  ASSET_STATE: 130,
  FORGE_STATE: 131,
  DELEGATE_STATE: 134,
  SWAP_STATE: 135,
};

/**
 * @return {proto.forge_abi.ResponseSubscribe.ValueCase}
 */
proto.forge_abi.ResponseSubscribe.prototype.getValueCase = function() {
  return /** @type {proto.forge_abi.ResponseSubscribe.ValueCase} */ (jspb.Message.computeOneofCase(
    this,
    proto.forge_abi.ResponseSubscribe.oneofGroups_[0]
  ));
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseSubscribe.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseSubscribe.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseSubscribe} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseSubscribe.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        topic: jspb.Message.getFieldWithDefault(msg, 2, ''),
        transfer: (f = msg.getTransfer()) && type_pb.Transaction.toObject(includeInstance, f),
        accountMigrate: (f = msg.getAccountMigrate()) && type_pb.Transaction.toObject(includeInstance, f),
        confirm: (f = msg.getConfirm()) && type_pb.Transaction.toObject(includeInstance, f),
        createAsset: (f = msg.getCreateAsset()) && type_pb.Transaction.toObject(includeInstance, f),
        exchange: (f = msg.getExchange()) && type_pb.Transaction.toObject(includeInstance, f),
        beginBlock: (f = msg.getBeginBlock()) && vendor_pb.RequestBeginBlock.toObject(includeInstance, f),
        endBlock: (f = msg.getEndBlock()) && vendor_pb.RequestEndBlock.toObject(includeInstance, f),
        declare: (f = msg.getDeclare()) && type_pb.Transaction.toObject(includeInstance, f),
        updateAsset: (f = msg.getUpdateAsset()) && type_pb.Transaction.toObject(includeInstance, f),
        consensusUpgrade: (f = msg.getConsensusUpgrade()) && type_pb.Transaction.toObject(includeInstance, f),
        sysUpgrade: (f = msg.getSysUpgrade()) && type_pb.Transaction.toObject(includeInstance, f),
        stake: (f = msg.getStake()) && type_pb.Transaction.toObject(includeInstance, f),
        delegate: (f = msg.getDelegate()) && type_pb.Transaction.toObject(includeInstance, f),
        revokeDelegate: (f = msg.getRevokeDelegate()) && type_pb.Transaction.toObject(includeInstance, f),
        depositToken: (f = msg.getDepositToken()) && type_pb.Transaction.toObject(includeInstance, f),
        withdrawToken: (f = msg.getWithdrawToken()) && type_pb.Transaction.toObject(includeInstance, f),
        approveWithdraw: (f = msg.getApproveWithdraw()) && type_pb.Transaction.toObject(includeInstance, f),
        revokeWithdraw: (f = msg.getRevokeWithdraw()) && type_pb.Transaction.toObject(includeInstance, f),
        setupSwap: (f = msg.getSetupSwap()) && type_pb.Transaction.toObject(includeInstance, f),
        revokeSwap: (f = msg.getRevokeSwap()) && type_pb.Transaction.toObject(includeInstance, f),
        retrieveSwap: (f = msg.getRetrieveSwap()) && type_pb.Transaction.toObject(includeInstance, f),
        poke: (f = msg.getPoke()) && type_pb.Transaction.toObject(includeInstance, f),
        consumeAsset: (f = msg.getConsumeAsset()) && type_pb.Transaction.toObject(includeInstance, f),
        acquireAsset: (f = msg.getAcquireAsset()) && type_pb.Transaction.toObject(includeInstance, f),
        upgradeNode: (f = msg.getUpgradeNode()) && type_pb.Transaction.toObject(includeInstance, f),
        updateValidator: (f = msg.getUpdateValidator()) && type_pb.Transaction.toObject(includeInstance, f),
        updateConsensusParams: (f = msg.getUpdateConsensusParams()) && type_pb.Transaction.toObject(includeInstance, f),
        accountState: (f = msg.getAccountState()) && state_pb.AccountState.toObject(includeInstance, f),
        assetState: (f = msg.getAssetState()) && state_pb.AssetState.toObject(includeInstance, f),
        forgeState: (f = msg.getForgeState()) && state_pb.ForgeState.toObject(includeInstance, f),
        delegateState: (f = msg.getDelegateState()) && state_pb.DelegateState.toObject(includeInstance, f),
        swapState: (f = msg.getSwapState()) && state_pb.SwapState.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseSubscribe}
 */
proto.forge_abi.ResponseSubscribe.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseSubscribe();
  return proto.forge_abi.ResponseSubscribe.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseSubscribe} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseSubscribe}
 */
proto.forge_abi.ResponseSubscribe.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setTopic(value);
        break;
      case 3:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setTransfer(value);
        break;
      case 4:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setAccountMigrate(value);
        break;
      case 5:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setConfirm(value);
        break;
      case 6:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setCreateAsset(value);
        break;
      case 7:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setExchange(value);
        break;
      case 16:
        var value = new vendor_pb.RequestBeginBlock();
        reader.readMessage(value, vendor_pb.RequestBeginBlock.deserializeBinaryFromReader);
        msg.setBeginBlock(value);
        break;
      case 17:
        var value = new vendor_pb.RequestEndBlock();
        reader.readMessage(value, vendor_pb.RequestEndBlock.deserializeBinaryFromReader);
        msg.setEndBlock(value);
        break;
      case 19:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setDeclare(value);
        break;
      case 20:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setUpdateAsset(value);
        break;
      case 21:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setConsensusUpgrade(value);
        break;
      case 23:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setSysUpgrade(value);
        break;
      case 24:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setStake(value);
        break;
      case 25:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setDelegate(value);
        break;
      case 28:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setRevokeDelegate(value);
        break;
      case 29:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setDepositToken(value);
        break;
      case 30:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setWithdrawToken(value);
        break;
      case 31:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setApproveWithdraw(value);
        break;
      case 32:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setRevokeWithdraw(value);
        break;
      case 33:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setSetupSwap(value);
        break;
      case 34:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setRevokeSwap(value);
        break;
      case 35:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setRetrieveSwap(value);
        break;
      case 36:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setPoke(value);
        break;
      case 38:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setConsumeAsset(value);
        break;
      case 39:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setAcquireAsset(value);
        break;
      case 40:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setUpgradeNode(value);
        break;
      case 41:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setUpdateValidator(value);
        break;
      case 42:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setUpdateConsensusParams(value);
        break;
      case 129:
        var value = new state_pb.AccountState();
        reader.readMessage(value, state_pb.AccountState.deserializeBinaryFromReader);
        msg.setAccountState(value);
        break;
      case 130:
        var value = new state_pb.AssetState();
        reader.readMessage(value, state_pb.AssetState.deserializeBinaryFromReader);
        msg.setAssetState(value);
        break;
      case 131:
        var value = new state_pb.ForgeState();
        reader.readMessage(value, state_pb.ForgeState.deserializeBinaryFromReader);
        msg.setForgeState(value);
        break;
      case 134:
        var value = new state_pb.DelegateState();
        reader.readMessage(value, state_pb.DelegateState.deserializeBinaryFromReader);
        msg.setDelegateState(value);
        break;
      case 135:
        var value = new state_pb.SwapState();
        reader.readMessage(value, state_pb.SwapState.deserializeBinaryFromReader);
        msg.setSwapState(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseSubscribe.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseSubscribe.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseSubscribe} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseSubscribe.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(2, f);
  }
  f = message.getTransfer();
  if (f != null) {
    writer.writeMessage(3, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getAccountMigrate();
  if (f != null) {
    writer.writeMessage(4, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getConfirm();
  if (f != null) {
    writer.writeMessage(5, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getCreateAsset();
  if (f != null) {
    writer.writeMessage(6, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getExchange();
  if (f != null) {
    writer.writeMessage(7, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getBeginBlock();
  if (f != null) {
    writer.writeMessage(16, f, vendor_pb.RequestBeginBlock.serializeBinaryToWriter);
  }
  f = message.getEndBlock();
  if (f != null) {
    writer.writeMessage(17, f, vendor_pb.RequestEndBlock.serializeBinaryToWriter);
  }
  f = message.getDeclare();
  if (f != null) {
    writer.writeMessage(19, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getUpdateAsset();
  if (f != null) {
    writer.writeMessage(20, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getConsensusUpgrade();
  if (f != null) {
    writer.writeMessage(21, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getSysUpgrade();
  if (f != null) {
    writer.writeMessage(23, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getStake();
  if (f != null) {
    writer.writeMessage(24, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getDelegate();
  if (f != null) {
    writer.writeMessage(25, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getRevokeDelegate();
  if (f != null) {
    writer.writeMessage(28, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getDepositToken();
  if (f != null) {
    writer.writeMessage(29, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getWithdrawToken();
  if (f != null) {
    writer.writeMessage(30, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getApproveWithdraw();
  if (f != null) {
    writer.writeMessage(31, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getRevokeWithdraw();
  if (f != null) {
    writer.writeMessage(32, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getSetupSwap();
  if (f != null) {
    writer.writeMessage(33, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getRevokeSwap();
  if (f != null) {
    writer.writeMessage(34, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getRetrieveSwap();
  if (f != null) {
    writer.writeMessage(35, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getPoke();
  if (f != null) {
    writer.writeMessage(36, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getConsumeAsset();
  if (f != null) {
    writer.writeMessage(38, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getAcquireAsset();
  if (f != null) {
    writer.writeMessage(39, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getUpgradeNode();
  if (f != null) {
    writer.writeMessage(40, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getUpdateValidator();
  if (f != null) {
    writer.writeMessage(41, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getUpdateConsensusParams();
  if (f != null) {
    writer.writeMessage(42, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getAccountState();
  if (f != null) {
    writer.writeMessage(129, f, state_pb.AccountState.serializeBinaryToWriter);
  }
  f = message.getAssetState();
  if (f != null) {
    writer.writeMessage(130, f, state_pb.AssetState.serializeBinaryToWriter);
  }
  f = message.getForgeState();
  if (f != null) {
    writer.writeMessage(131, f, state_pb.ForgeState.serializeBinaryToWriter);
  }
  f = message.getDelegateState();
  if (f != null) {
    writer.writeMessage(134, f, state_pb.DelegateState.serializeBinaryToWriter);
  }
  f = message.getSwapState();
  if (f != null) {
    writer.writeMessage(135, f, state_pb.SwapState.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseSubscribe.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {!proto.forge_abi.StatusCode} value
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};

/**
 * optional string topic = 2;
 * @return {string}
 */
proto.forge_abi.ResponseSubscribe.prototype.getTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.setTopic = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.forge_abi.ResponseSubscribe.oneofGroups_[0], value);
};

/**
 * Clears the field making it undefined.
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.clearTopic = function() {
  return jspb.Message.setOneofField(this, 2, proto.forge_abi.ResponseSubscribe.oneofGroups_[0], undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasTopic = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * optional Transaction transfer = 3;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getTransfer = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(this, type_pb.Transaction, 3));
};

/**
 * @param {?proto.forge_abi.Transaction|undefined} value
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.setTransfer = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.forge_abi.ResponseSubscribe.oneofGroups_[0], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.clearTransfer = function() {
  return this.setTransfer(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasTransfer = function() {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * optional Transaction account_migrate = 4;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getAccountMigrate = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(this, type_pb.Transaction, 4));
};

/**
 * @param {?proto.forge_abi.Transaction|undefined} value
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.setAccountMigrate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.forge_abi.ResponseSubscribe.oneofGroups_[0], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.clearAccountMigrate = function() {
  return this.setAccountMigrate(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasAccountMigrate = function() {
  return jspb.Message.getField(this, 4) != null;
};

/**
 * optional Transaction confirm = 5;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getConfirm = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(this, type_pb.Transaction, 5));
};

/**
 * @param {?proto.forge_abi.Transaction|undefined} value
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.setConfirm = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.forge_abi.ResponseSubscribe.oneofGroups_[0], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.clearConfirm = function() {
  return this.setConfirm(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasConfirm = function() {
  return jspb.Message.getField(this, 5) != null;
};

/**
 * optional Transaction create_asset = 6;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getCreateAsset = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(this, type_pb.Transaction, 6));
};

/**
 * @param {?proto.forge_abi.Transaction|undefined} value
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.setCreateAsset = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.forge_abi.ResponseSubscribe.oneofGroups_[0], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.clearCreateAsset = function() {
  return this.setCreateAsset(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasCreateAsset = function() {
  return jspb.Message.getField(this, 6) != null;
};

/**
 * optional Transaction exchange = 7;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getExchange = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(this, type_pb.Transaction, 7));
};

/**
 * @param {?proto.forge_abi.Transaction|undefined} value
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.setExchange = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.forge_abi.ResponseSubscribe.oneofGroups_[0], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.clearExchange = function() {
  return this.setExchange(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasExchange = function() {
  return jspb.Message.getField(this, 7) != null;
};

/**
 * optional abci_vendor.RequestBeginBlock begin_block = 16;
 * @return {?proto.abci_vendor.RequestBeginBlock}
 */
proto.forge_abi.ResponseSubscribe.prototype.getBeginBlock = function() {
  return /** @type{?proto.abci_vendor.RequestBeginBlock} */ (jspb.Message.getWrapperField(
    this,
    vendor_pb.RequestBeginBlock,
    16
  ));
};

/**
 * @param {?proto.abci_vendor.RequestBeginBlock|undefined} value
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.setBeginBlock = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.forge_abi.ResponseSubscribe.oneofGroups_[0], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.clearBeginBlock = function() {
  return this.setBeginBlock(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasBeginBlock = function() {
  return jspb.Message.getField(this, 16) != null;
};

/**
 * optional abci_vendor.RequestEndBlock end_block = 17;
 * @return {?proto.abci_vendor.RequestEndBlock}
 */
proto.forge_abi.ResponseSubscribe.prototype.getEndBlock = function() {
  return /** @type{?proto.abci_vendor.RequestEndBlock} */ (jspb.Message.getWrapperField(
    this,
    vendor_pb.RequestEndBlock,
    17
  ));
};

/**
 * @param {?proto.abci_vendor.RequestEndBlock|undefined} value
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.setEndBlock = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.forge_abi.ResponseSubscribe.oneofGroups_[0], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.clearEndBlock = function() {
  return this.setEndBlock(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasEndBlock = function() {
  return jspb.Message.getField(this, 17) != null;
};

/**
 * optional Transaction declare = 19;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getDeclare = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(this, type_pb.Transaction, 19));
};

/**
 * @param {?proto.forge_abi.Transaction|undefined} value
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.setDeclare = function(value) {
  return jspb.Message.setOneofWrapperField(this, 19, proto.forge_abi.ResponseSubscribe.oneofGroups_[0], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.clearDeclare = function() {
  return this.setDeclare(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasDeclare = function() {
  return jspb.Message.getField(this, 19) != null;
};

/**
 * optional Transaction update_asset = 20;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getUpdateAsset = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(this, type_pb.Transaction, 20));
};

/**
 * @param {?proto.forge_abi.Transaction|undefined} value
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.setUpdateAsset = function(value) {
  return jspb.Message.setOneofWrapperField(this, 20, proto.forge_abi.ResponseSubscribe.oneofGroups_[0], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.clearUpdateAsset = function() {
  return this.setUpdateAsset(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasUpdateAsset = function() {
  return jspb.Message.getField(this, 20) != null;
};

/**
 * optional Transaction consensus_upgrade = 21;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getConsensusUpgrade = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(this, type_pb.Transaction, 21));
};

/**
 * @param {?proto.forge_abi.Transaction|undefined} value
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.setConsensusUpgrade = function(value) {
  return jspb.Message.setOneofWrapperField(this, 21, proto.forge_abi.ResponseSubscribe.oneofGroups_[0], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.clearConsensusUpgrade = function() {
  return this.setConsensusUpgrade(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasConsensusUpgrade = function() {
  return jspb.Message.getField(this, 21) != null;
};

/**
 * optional Transaction sys_upgrade = 23;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getSysUpgrade = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(this, type_pb.Transaction, 23));
};

/**
 * @param {?proto.forge_abi.Transaction|undefined} value
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.setSysUpgrade = function(value) {
  return jspb.Message.setOneofWrapperField(this, 23, proto.forge_abi.ResponseSubscribe.oneofGroups_[0], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.clearSysUpgrade = function() {
  return this.setSysUpgrade(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasSysUpgrade = function() {
  return jspb.Message.getField(this, 23) != null;
};

/**
 * optional Transaction stake = 24;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getStake = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(this, type_pb.Transaction, 24));
};

/**
 * @param {?proto.forge_abi.Transaction|undefined} value
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.setStake = function(value) {
  return jspb.Message.setOneofWrapperField(this, 24, proto.forge_abi.ResponseSubscribe.oneofGroups_[0], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.clearStake = function() {
  return this.setStake(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasStake = function() {
  return jspb.Message.getField(this, 24) != null;
};

/**
 * optional Transaction delegate = 25;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getDelegate = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(this, type_pb.Transaction, 25));
};

/**
 * @param {?proto.forge_abi.Transaction|undefined} value
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.setDelegate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 25, proto.forge_abi.ResponseSubscribe.oneofGroups_[0], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.clearDelegate = function() {
  return this.setDelegate(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasDelegate = function() {
  return jspb.Message.getField(this, 25) != null;
};

/**
 * optional Transaction revoke_delegate = 28;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getRevokeDelegate = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(this, type_pb.Transaction, 28));
};

/**
 * @param {?proto.forge_abi.Transaction|undefined} value
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.setRevokeDelegate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 28, proto.forge_abi.ResponseSubscribe.oneofGroups_[0], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.clearRevokeDelegate = function() {
  return this.setRevokeDelegate(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasRevokeDelegate = function() {
  return jspb.Message.getField(this, 28) != null;
};

/**
 * optional Transaction deposit_token = 29;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getDepositToken = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(this, type_pb.Transaction, 29));
};

/**
 * @param {?proto.forge_abi.Transaction|undefined} value
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.setDepositToken = function(value) {
  return jspb.Message.setOneofWrapperField(this, 29, proto.forge_abi.ResponseSubscribe.oneofGroups_[0], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.clearDepositToken = function() {
  return this.setDepositToken(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasDepositToken = function() {
  return jspb.Message.getField(this, 29) != null;
};

/**
 * optional Transaction withdraw_token = 30;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getWithdrawToken = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(this, type_pb.Transaction, 30));
};

/**
 * @param {?proto.forge_abi.Transaction|undefined} value
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.setWithdrawToken = function(value) {
  return jspb.Message.setOneofWrapperField(this, 30, proto.forge_abi.ResponseSubscribe.oneofGroups_[0], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.clearWithdrawToken = function() {
  return this.setWithdrawToken(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasWithdrawToken = function() {
  return jspb.Message.getField(this, 30) != null;
};

/**
 * optional Transaction approve_withdraw = 31;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getApproveWithdraw = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(this, type_pb.Transaction, 31));
};

/**
 * @param {?proto.forge_abi.Transaction|undefined} value
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.setApproveWithdraw = function(value) {
  return jspb.Message.setOneofWrapperField(this, 31, proto.forge_abi.ResponseSubscribe.oneofGroups_[0], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.clearApproveWithdraw = function() {
  return this.setApproveWithdraw(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasApproveWithdraw = function() {
  return jspb.Message.getField(this, 31) != null;
};

/**
 * optional Transaction revoke_withdraw = 32;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getRevokeWithdraw = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(this, type_pb.Transaction, 32));
};

/**
 * @param {?proto.forge_abi.Transaction|undefined} value
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.setRevokeWithdraw = function(value) {
  return jspb.Message.setOneofWrapperField(this, 32, proto.forge_abi.ResponseSubscribe.oneofGroups_[0], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.clearRevokeWithdraw = function() {
  return this.setRevokeWithdraw(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasRevokeWithdraw = function() {
  return jspb.Message.getField(this, 32) != null;
};

/**
 * optional Transaction setup_swap = 33;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getSetupSwap = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(this, type_pb.Transaction, 33));
};

/**
 * @param {?proto.forge_abi.Transaction|undefined} value
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.setSetupSwap = function(value) {
  return jspb.Message.setOneofWrapperField(this, 33, proto.forge_abi.ResponseSubscribe.oneofGroups_[0], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.clearSetupSwap = function() {
  return this.setSetupSwap(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasSetupSwap = function() {
  return jspb.Message.getField(this, 33) != null;
};

/**
 * optional Transaction revoke_swap = 34;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getRevokeSwap = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(this, type_pb.Transaction, 34));
};

/**
 * @param {?proto.forge_abi.Transaction|undefined} value
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.setRevokeSwap = function(value) {
  return jspb.Message.setOneofWrapperField(this, 34, proto.forge_abi.ResponseSubscribe.oneofGroups_[0], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.clearRevokeSwap = function() {
  return this.setRevokeSwap(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasRevokeSwap = function() {
  return jspb.Message.getField(this, 34) != null;
};

/**
 * optional Transaction retrieve_swap = 35;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getRetrieveSwap = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(this, type_pb.Transaction, 35));
};

/**
 * @param {?proto.forge_abi.Transaction|undefined} value
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.setRetrieveSwap = function(value) {
  return jspb.Message.setOneofWrapperField(this, 35, proto.forge_abi.ResponseSubscribe.oneofGroups_[0], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.clearRetrieveSwap = function() {
  return this.setRetrieveSwap(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasRetrieveSwap = function() {
  return jspb.Message.getField(this, 35) != null;
};

/**
 * optional Transaction poke = 36;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getPoke = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(this, type_pb.Transaction, 36));
};

/**
 * @param {?proto.forge_abi.Transaction|undefined} value
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.setPoke = function(value) {
  return jspb.Message.setOneofWrapperField(this, 36, proto.forge_abi.ResponseSubscribe.oneofGroups_[0], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.clearPoke = function() {
  return this.setPoke(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasPoke = function() {
  return jspb.Message.getField(this, 36) != null;
};

/**
 * optional Transaction consume_asset = 38;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getConsumeAsset = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(this, type_pb.Transaction, 38));
};

/**
 * @param {?proto.forge_abi.Transaction|undefined} value
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.setConsumeAsset = function(value) {
  return jspb.Message.setOneofWrapperField(this, 38, proto.forge_abi.ResponseSubscribe.oneofGroups_[0], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.clearConsumeAsset = function() {
  return this.setConsumeAsset(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasConsumeAsset = function() {
  return jspb.Message.getField(this, 38) != null;
};

/**
 * optional Transaction acquire_asset = 39;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getAcquireAsset = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(this, type_pb.Transaction, 39));
};

/**
 * @param {?proto.forge_abi.Transaction|undefined} value
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.setAcquireAsset = function(value) {
  return jspb.Message.setOneofWrapperField(this, 39, proto.forge_abi.ResponseSubscribe.oneofGroups_[0], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.clearAcquireAsset = function() {
  return this.setAcquireAsset(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasAcquireAsset = function() {
  return jspb.Message.getField(this, 39) != null;
};

/**
 * optional Transaction upgrade_node = 40;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getUpgradeNode = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(this, type_pb.Transaction, 40));
};

/**
 * @param {?proto.forge_abi.Transaction|undefined} value
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.setUpgradeNode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 40, proto.forge_abi.ResponseSubscribe.oneofGroups_[0], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.clearUpgradeNode = function() {
  return this.setUpgradeNode(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasUpgradeNode = function() {
  return jspb.Message.getField(this, 40) != null;
};

/**
 * optional Transaction update_validator = 41;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getUpdateValidator = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(this, type_pb.Transaction, 41));
};

/**
 * @param {?proto.forge_abi.Transaction|undefined} value
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.setUpdateValidator = function(value) {
  return jspb.Message.setOneofWrapperField(this, 41, proto.forge_abi.ResponseSubscribe.oneofGroups_[0], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.clearUpdateValidator = function() {
  return this.setUpdateValidator(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasUpdateValidator = function() {
  return jspb.Message.getField(this, 41) != null;
};

/**
 * optional Transaction update_consensus_params = 42;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getUpdateConsensusParams = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(this, type_pb.Transaction, 42));
};

/**
 * @param {?proto.forge_abi.Transaction|undefined} value
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.setUpdateConsensusParams = function(value) {
  return jspb.Message.setOneofWrapperField(this, 42, proto.forge_abi.ResponseSubscribe.oneofGroups_[0], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.clearUpdateConsensusParams = function() {
  return this.setUpdateConsensusParams(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasUpdateConsensusParams = function() {
  return jspb.Message.getField(this, 42) != null;
};

/**
 * optional AccountState account_state = 129;
 * @return {?proto.forge_abi.AccountState}
 */
proto.forge_abi.ResponseSubscribe.prototype.getAccountState = function() {
  return /** @type{?proto.forge_abi.AccountState} */ (jspb.Message.getWrapperField(this, state_pb.AccountState, 129));
};

/**
 * @param {?proto.forge_abi.AccountState|undefined} value
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.setAccountState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 129, proto.forge_abi.ResponseSubscribe.oneofGroups_[0], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.clearAccountState = function() {
  return this.setAccountState(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasAccountState = function() {
  return jspb.Message.getField(this, 129) != null;
};

/**
 * optional AssetState asset_state = 130;
 * @return {?proto.forge_abi.AssetState}
 */
proto.forge_abi.ResponseSubscribe.prototype.getAssetState = function() {
  return /** @type{?proto.forge_abi.AssetState} */ (jspb.Message.getWrapperField(this, state_pb.AssetState, 130));
};

/**
 * @param {?proto.forge_abi.AssetState|undefined} value
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.setAssetState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 130, proto.forge_abi.ResponseSubscribe.oneofGroups_[0], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.clearAssetState = function() {
  return this.setAssetState(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasAssetState = function() {
  return jspb.Message.getField(this, 130) != null;
};

/**
 * optional ForgeState forge_state = 131;
 * @return {?proto.forge_abi.ForgeState}
 */
proto.forge_abi.ResponseSubscribe.prototype.getForgeState = function() {
  return /** @type{?proto.forge_abi.ForgeState} */ (jspb.Message.getWrapperField(this, state_pb.ForgeState, 131));
};

/**
 * @param {?proto.forge_abi.ForgeState|undefined} value
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.setForgeState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 131, proto.forge_abi.ResponseSubscribe.oneofGroups_[0], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.clearForgeState = function() {
  return this.setForgeState(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasForgeState = function() {
  return jspb.Message.getField(this, 131) != null;
};

/**
 * optional DelegateState delegate_state = 134;
 * @return {?proto.forge_abi.DelegateState}
 */
proto.forge_abi.ResponseSubscribe.prototype.getDelegateState = function() {
  return /** @type{?proto.forge_abi.DelegateState} */ (jspb.Message.getWrapperField(this, state_pb.DelegateState, 134));
};

/**
 * @param {?proto.forge_abi.DelegateState|undefined} value
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.setDelegateState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 134, proto.forge_abi.ResponseSubscribe.oneofGroups_[0], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.clearDelegateState = function() {
  return this.setDelegateState(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasDelegateState = function() {
  return jspb.Message.getField(this, 134) != null;
};

/**
 * optional SwapState swap_state = 135;
 * @return {?proto.forge_abi.SwapState}
 */
proto.forge_abi.ResponseSubscribe.prototype.getSwapState = function() {
  return /** @type{?proto.forge_abi.SwapState} */ (jspb.Message.getWrapperField(this, state_pb.SwapState, 135));
};

/**
 * @param {?proto.forge_abi.SwapState|undefined} value
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.setSwapState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 135, proto.forge_abi.ResponseSubscribe.oneofGroups_[0], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseSubscribe} returns this
 */
proto.forge_abi.ResponseSubscribe.prototype.clearSwapState = function() {
  return this.setSwapState(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasSwapState = function() {
  return jspb.Message.getField(this, 135) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestUnsubscribe.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestUnsubscribe.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestUnsubscribe} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestUnsubscribe.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        topic: jspb.Message.getFieldWithDefault(msg, 1, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestUnsubscribe}
 */
proto.forge_abi.RequestUnsubscribe.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestUnsubscribe();
  return proto.forge_abi.RequestUnsubscribe.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestUnsubscribe} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestUnsubscribe}
 */
proto.forge_abi.RequestUnsubscribe.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setTopic(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestUnsubscribe.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestUnsubscribe.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestUnsubscribe} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestUnsubscribe.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTopic();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

/**
 * optional string topic = 1;
 * @return {string}
 */
proto.forge_abi.RequestUnsubscribe.prototype.getTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.forge_abi.RequestUnsubscribe} returns this
 */
proto.forge_abi.RequestUnsubscribe.prototype.setTopic = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseUnsubscribe.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseUnsubscribe.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseUnsubscribe} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseUnsubscribe.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseUnsubscribe}
 */
proto.forge_abi.ResponseUnsubscribe.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseUnsubscribe();
  return proto.forge_abi.ResponseUnsubscribe.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseUnsubscribe} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseUnsubscribe}
 */
proto.forge_abi.ResponseUnsubscribe.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseUnsubscribe.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseUnsubscribe.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseUnsubscribe} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseUnsubscribe.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseUnsubscribe.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {!proto.forge_abi.StatusCode} value
 * @return {!proto.forge_abi.ResponseUnsubscribe} returns this
 */
proto.forge_abi.ResponseUnsubscribe.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestGetConfig.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestGetConfig.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestGetConfig} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestGetConfig.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        parsed: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestGetConfig}
 */
proto.forge_abi.RequestGetConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestGetConfig();
  return proto.forge_abi.RequestGetConfig.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestGetConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestGetConfig}
 */
proto.forge_abi.RequestGetConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {boolean} */ (reader.readBool());
        msg.setParsed(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestGetConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestGetConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestGetConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestGetConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParsed();
  if (f) {
    writer.writeBool(1, f);
  }
};

/**
 * optional bool parsed = 1;
 * @return {boolean}
 */
proto.forge_abi.RequestGetConfig.prototype.getParsed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};

/**
 * @param {boolean} value
 * @return {!proto.forge_abi.RequestGetConfig} returns this
 */
proto.forge_abi.RequestGetConfig.prototype.setParsed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseGetConfig.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseGetConfig.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseGetConfig} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseGetConfig.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        config: jspb.Message.getFieldWithDefault(msg, 2, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseGetConfig}
 */
proto.forge_abi.ResponseGetConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseGetConfig();
  return proto.forge_abi.ResponseGetConfig.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseGetConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseGetConfig}
 */
proto.forge_abi.ResponseGetConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setConfig(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseGetConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseGetConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseGetConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseGetConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getConfig();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseGetConfig.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {!proto.forge_abi.StatusCode} value
 * @return {!proto.forge_abi.ResponseGetConfig} returns this
 */
proto.forge_abi.ResponseGetConfig.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};

/**
 * optional string config = 2;
 * @return {string}
 */
proto.forge_abi.ResponseGetConfig.prototype.getConfig = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.forge_abi.ResponseGetConfig} returns this
 */
proto.forge_abi.ResponseGetConfig.prototype.setConfig = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ByDay.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ByDay.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ByDay} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ByDay.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        startDate: jspb.Message.getFieldWithDefault(msg, 1, ''),
        endDate: jspb.Message.getFieldWithDefault(msg, 2, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ByDay}
 */
proto.forge_abi.ByDay.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ByDay();
  return proto.forge_abi.ByDay.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ByDay} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ByDay}
 */
proto.forge_abi.ByDay.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setStartDate(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setEndDate(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ByDay.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ByDay.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ByDay} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ByDay.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartDate();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getEndDate();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

/**
 * optional string start_date = 1;
 * @return {string}
 */
proto.forge_abi.ByDay.prototype.getStartDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.forge_abi.ByDay} returns this
 */
proto.forge_abi.ByDay.prototype.setStartDate = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string end_date = 2;
 * @return {string}
 */
proto.forge_abi.ByDay.prototype.getEndDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.forge_abi.ByDay} returns this
 */
proto.forge_abi.ByDay.prototype.setEndDate = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ByHour.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ByHour.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ByHour} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ByHour.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        date: jspb.Message.getFieldWithDefault(msg, 1, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ByHour}
 */
proto.forge_abi.ByHour.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ByHour();
  return proto.forge_abi.ByHour.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ByHour} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ByHour}
 */
proto.forge_abi.ByHour.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setDate(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ByHour.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ByHour.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ByHour} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ByHour.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDate();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

/**
 * optional string date = 1;
 * @return {string}
 */
proto.forge_abi.ByHour.prototype.getDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.forge_abi.ByHour} returns this
 */
proto.forge_abi.ByHour.prototype.setDate = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.forge_abi.RequestGetForgeStats.oneofGroups_ = [[1, 2]];

/**
 * @enum {number}
 */
proto.forge_abi.RequestGetForgeStats.ValueCase = {
  VALUE_NOT_SET: 0,
  DAY_INFO: 1,
  DATE: 2,
};

/**
 * @return {proto.forge_abi.RequestGetForgeStats.ValueCase}
 */
proto.forge_abi.RequestGetForgeStats.prototype.getValueCase = function() {
  return /** @type {proto.forge_abi.RequestGetForgeStats.ValueCase} */ (jspb.Message.computeOneofCase(
    this,
    proto.forge_abi.RequestGetForgeStats.oneofGroups_[0]
  ));
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestGetForgeStats.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestGetForgeStats.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestGetForgeStats} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestGetForgeStats.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        dayInfo: (f = msg.getDayInfo()) && proto.forge_abi.ByDay.toObject(includeInstance, f),
        date: (f = msg.getDate()) && proto.forge_abi.ByHour.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestGetForgeStats}
 */
proto.forge_abi.RequestGetForgeStats.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestGetForgeStats();
  return proto.forge_abi.RequestGetForgeStats.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestGetForgeStats} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestGetForgeStats}
 */
proto.forge_abi.RequestGetForgeStats.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.forge_abi.ByDay();
        reader.readMessage(value, proto.forge_abi.ByDay.deserializeBinaryFromReader);
        msg.setDayInfo(value);
        break;
      case 2:
        var value = new proto.forge_abi.ByHour();
        reader.readMessage(value, proto.forge_abi.ByHour.deserializeBinaryFromReader);
        msg.setDate(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestGetForgeStats.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestGetForgeStats.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestGetForgeStats} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestGetForgeStats.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDayInfo();
  if (f != null) {
    writer.writeMessage(1, f, proto.forge_abi.ByDay.serializeBinaryToWriter);
  }
  f = message.getDate();
  if (f != null) {
    writer.writeMessage(2, f, proto.forge_abi.ByHour.serializeBinaryToWriter);
  }
};

/**
 * optional ByDay day_info = 1;
 * @return {?proto.forge_abi.ByDay}
 */
proto.forge_abi.RequestGetForgeStats.prototype.getDayInfo = function() {
  return /** @type{?proto.forge_abi.ByDay} */ (jspb.Message.getWrapperField(this, proto.forge_abi.ByDay, 1));
};

/**
 * @param {?proto.forge_abi.ByDay|undefined} value
 * @return {!proto.forge_abi.RequestGetForgeStats} returns this
 */
proto.forge_abi.RequestGetForgeStats.prototype.setDayInfo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.forge_abi.RequestGetForgeStats.oneofGroups_[0], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.RequestGetForgeStats} returns this
 */
proto.forge_abi.RequestGetForgeStats.prototype.clearDayInfo = function() {
  return this.setDayInfo(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.RequestGetForgeStats.prototype.hasDayInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional ByHour date = 2;
 * @return {?proto.forge_abi.ByHour}
 */
proto.forge_abi.RequestGetForgeStats.prototype.getDate = function() {
  return /** @type{?proto.forge_abi.ByHour} */ (jspb.Message.getWrapperField(this, proto.forge_abi.ByHour, 2));
};

/**
 * @param {?proto.forge_abi.ByHour|undefined} value
 * @return {!proto.forge_abi.RequestGetForgeStats} returns this
 */
proto.forge_abi.RequestGetForgeStats.prototype.setDate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.forge_abi.RequestGetForgeStats.oneofGroups_[0], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.RequestGetForgeStats} returns this
 */
proto.forge_abi.RequestGetForgeStats.prototype.clearDate = function() {
  return this.setDate(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.RequestGetForgeStats.prototype.hasDate = function() {
  return jspb.Message.getField(this, 2) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseGetForgeStats.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseGetForgeStats.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseGetForgeStats} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseGetForgeStats.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        forgeStats: (f = msg.getForgeStats()) && type_pb.ForgeStats.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseGetForgeStats}
 */
proto.forge_abi.ResponseGetForgeStats.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseGetForgeStats();
  return proto.forge_abi.ResponseGetForgeStats.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseGetForgeStats} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseGetForgeStats}
 */
proto.forge_abi.ResponseGetForgeStats.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = new type_pb.ForgeStats();
        reader.readMessage(value, type_pb.ForgeStats.deserializeBinaryFromReader);
        msg.setForgeStats(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseGetForgeStats.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseGetForgeStats.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseGetForgeStats} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseGetForgeStats.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getForgeStats();
  if (f != null) {
    writer.writeMessage(2, f, type_pb.ForgeStats.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseGetForgeStats.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {!proto.forge_abi.StatusCode} value
 * @return {!proto.forge_abi.ResponseGetForgeStats} returns this
 */
proto.forge_abi.ResponseGetForgeStats.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};

/**
 * optional ForgeStats forge_stats = 2;
 * @return {?proto.forge_abi.ForgeStats}
 */
proto.forge_abi.ResponseGetForgeStats.prototype.getForgeStats = function() {
  return /** @type{?proto.forge_abi.ForgeStats} */ (jspb.Message.getWrapperField(this, type_pb.ForgeStats, 2));
};

/**
 * @param {?proto.forge_abi.ForgeStats|undefined} value
 * @return {!proto.forge_abi.ResponseGetForgeStats} returns this
 */
proto.forge_abi.ResponseGetForgeStats.prototype.setForgeStats = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseGetForgeStats} returns this
 */
proto.forge_abi.ResponseGetForgeStats.prototype.clearForgeStats = function() {
  return this.setForgeStats(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseGetForgeStats.prototype.hasForgeStats = function() {
  return jspb.Message.getField(this, 2) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestListTransactions.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestListTransactions.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestListTransactions} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestListTransactions.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        paging: (f = msg.getPaging()) && trace_type_pb.PageInput.toObject(includeInstance, f),
        timeFilter: (f = msg.getTimeFilter()) && trace_type_pb.TimeFilter.toObject(includeInstance, f),
        addressFilter: (f = msg.getAddressFilter()) && trace_type_pb.AddressFilter.toObject(includeInstance, f),
        typeFilter: (f = msg.getTypeFilter()) && trace_type_pb.TypeFilter.toObject(includeInstance, f),
        validityFilter: (f = msg.getValidityFilter()) && trace_type_pb.ValidityFilter.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestListTransactions}
 */
proto.forge_abi.RequestListTransactions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestListTransactions();
  return proto.forge_abi.RequestListTransactions.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestListTransactions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestListTransactions}
 */
proto.forge_abi.RequestListTransactions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new trace_type_pb.PageInput();
        reader.readMessage(value, trace_type_pb.PageInput.deserializeBinaryFromReader);
        msg.setPaging(value);
        break;
      case 2:
        var value = new trace_type_pb.TimeFilter();
        reader.readMessage(value, trace_type_pb.TimeFilter.deserializeBinaryFromReader);
        msg.setTimeFilter(value);
        break;
      case 3:
        var value = new trace_type_pb.AddressFilter();
        reader.readMessage(value, trace_type_pb.AddressFilter.deserializeBinaryFromReader);
        msg.setAddressFilter(value);
        break;
      case 4:
        var value = new trace_type_pb.TypeFilter();
        reader.readMessage(value, trace_type_pb.TypeFilter.deserializeBinaryFromReader);
        msg.setTypeFilter(value);
        break;
      case 5:
        var value = new trace_type_pb.ValidityFilter();
        reader.readMessage(value, trace_type_pb.ValidityFilter.deserializeBinaryFromReader);
        msg.setValidityFilter(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestListTransactions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestListTransactions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestListTransactions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestListTransactions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaging();
  if (f != null) {
    writer.writeMessage(1, f, trace_type_pb.PageInput.serializeBinaryToWriter);
  }
  f = message.getTimeFilter();
  if (f != null) {
    writer.writeMessage(2, f, trace_type_pb.TimeFilter.serializeBinaryToWriter);
  }
  f = message.getAddressFilter();
  if (f != null) {
    writer.writeMessage(3, f, trace_type_pb.AddressFilter.serializeBinaryToWriter);
  }
  f = message.getTypeFilter();
  if (f != null) {
    writer.writeMessage(4, f, trace_type_pb.TypeFilter.serializeBinaryToWriter);
  }
  f = message.getValidityFilter();
  if (f != null) {
    writer.writeMessage(5, f, trace_type_pb.ValidityFilter.serializeBinaryToWriter);
  }
};

/**
 * optional PageInput paging = 1;
 * @return {?proto.forge_abi.PageInput}
 */
proto.forge_abi.RequestListTransactions.prototype.getPaging = function() {
  return /** @type{?proto.forge_abi.PageInput} */ (jspb.Message.getWrapperField(this, trace_type_pb.PageInput, 1));
};

/**
 * @param {?proto.forge_abi.PageInput|undefined} value
 * @return {!proto.forge_abi.RequestListTransactions} returns this
 */
proto.forge_abi.RequestListTransactions.prototype.setPaging = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.RequestListTransactions} returns this
 */
proto.forge_abi.RequestListTransactions.prototype.clearPaging = function() {
  return this.setPaging(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.RequestListTransactions.prototype.hasPaging = function() {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional TimeFilter time_filter = 2;
 * @return {?proto.forge_abi.TimeFilter}
 */
proto.forge_abi.RequestListTransactions.prototype.getTimeFilter = function() {
  return /** @type{?proto.forge_abi.TimeFilter} */ (jspb.Message.getWrapperField(this, trace_type_pb.TimeFilter, 2));
};

/**
 * @param {?proto.forge_abi.TimeFilter|undefined} value
 * @return {!proto.forge_abi.RequestListTransactions} returns this
 */
proto.forge_abi.RequestListTransactions.prototype.setTimeFilter = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.RequestListTransactions} returns this
 */
proto.forge_abi.RequestListTransactions.prototype.clearTimeFilter = function() {
  return this.setTimeFilter(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.RequestListTransactions.prototype.hasTimeFilter = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * optional AddressFilter address_filter = 3;
 * @return {?proto.forge_abi.AddressFilter}
 */
proto.forge_abi.RequestListTransactions.prototype.getAddressFilter = function() {
  return /** @type{?proto.forge_abi.AddressFilter} */ (jspb.Message.getWrapperField(
    this,
    trace_type_pb.AddressFilter,
    3
  ));
};

/**
 * @param {?proto.forge_abi.AddressFilter|undefined} value
 * @return {!proto.forge_abi.RequestListTransactions} returns this
 */
proto.forge_abi.RequestListTransactions.prototype.setAddressFilter = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.RequestListTransactions} returns this
 */
proto.forge_abi.RequestListTransactions.prototype.clearAddressFilter = function() {
  return this.setAddressFilter(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.RequestListTransactions.prototype.hasAddressFilter = function() {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * optional TypeFilter type_filter = 4;
 * @return {?proto.forge_abi.TypeFilter}
 */
proto.forge_abi.RequestListTransactions.prototype.getTypeFilter = function() {
  return /** @type{?proto.forge_abi.TypeFilter} */ (jspb.Message.getWrapperField(this, trace_type_pb.TypeFilter, 4));
};

/**
 * @param {?proto.forge_abi.TypeFilter|undefined} value
 * @return {!proto.forge_abi.RequestListTransactions} returns this
 */
proto.forge_abi.RequestListTransactions.prototype.setTypeFilter = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.RequestListTransactions} returns this
 */
proto.forge_abi.RequestListTransactions.prototype.clearTypeFilter = function() {
  return this.setTypeFilter(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.RequestListTransactions.prototype.hasTypeFilter = function() {
  return jspb.Message.getField(this, 4) != null;
};

/**
 * optional ValidityFilter validity_filter = 5;
 * @return {?proto.forge_abi.ValidityFilter}
 */
proto.forge_abi.RequestListTransactions.prototype.getValidityFilter = function() {
  return /** @type{?proto.forge_abi.ValidityFilter} */ (jspb.Message.getWrapperField(
    this,
    trace_type_pb.ValidityFilter,
    5
  ));
};

/**
 * @param {?proto.forge_abi.ValidityFilter|undefined} value
 * @return {!proto.forge_abi.RequestListTransactions} returns this
 */
proto.forge_abi.RequestListTransactions.prototype.setValidityFilter = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.RequestListTransactions} returns this
 */
proto.forge_abi.RequestListTransactions.prototype.clearValidityFilter = function() {
  return this.setValidityFilter(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.RequestListTransactions.prototype.hasValidityFilter = function() {
  return jspb.Message.getField(this, 5) != null;
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.forge_abi.ResponseListTransactions.repeatedFields_ = [3];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseListTransactions.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseListTransactions.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseListTransactions} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseListTransactions.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        page: (f = msg.getPage()) && trace_type_pb.PageInfo.toObject(includeInstance, f),
        transactionsList: jspb.Message.toObjectList(
          msg.getTransactionsList(),
          trace_type_pb.IndexedTransaction.toObject,
          includeInstance
        ),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseListTransactions}
 */
proto.forge_abi.ResponseListTransactions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseListTransactions();
  return proto.forge_abi.ResponseListTransactions.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseListTransactions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseListTransactions}
 */
proto.forge_abi.ResponseListTransactions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = new trace_type_pb.PageInfo();
        reader.readMessage(value, trace_type_pb.PageInfo.deserializeBinaryFromReader);
        msg.setPage(value);
        break;
      case 3:
        var value = new trace_type_pb.IndexedTransaction();
        reader.readMessage(value, trace_type_pb.IndexedTransaction.deserializeBinaryFromReader);
        msg.addTransactions(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseListTransactions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseListTransactions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseListTransactions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseListTransactions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getPage();
  if (f != null) {
    writer.writeMessage(2, f, trace_type_pb.PageInfo.serializeBinaryToWriter);
  }
  f = message.getTransactionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(3, f, trace_type_pb.IndexedTransaction.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseListTransactions.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {!proto.forge_abi.StatusCode} value
 * @return {!proto.forge_abi.ResponseListTransactions} returns this
 */
proto.forge_abi.ResponseListTransactions.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};

/**
 * optional PageInfo page = 2;
 * @return {?proto.forge_abi.PageInfo}
 */
proto.forge_abi.ResponseListTransactions.prototype.getPage = function() {
  return /** @type{?proto.forge_abi.PageInfo} */ (jspb.Message.getWrapperField(this, trace_type_pb.PageInfo, 2));
};

/**
 * @param {?proto.forge_abi.PageInfo|undefined} value
 * @return {!proto.forge_abi.ResponseListTransactions} returns this
 */
proto.forge_abi.ResponseListTransactions.prototype.setPage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseListTransactions} returns this
 */
proto.forge_abi.ResponseListTransactions.prototype.clearPage = function() {
  return this.setPage(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseListTransactions.prototype.hasPage = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * repeated IndexedTransaction transactions = 3;
 * @return {!Array<!proto.forge_abi.IndexedTransaction>}
 */
proto.forge_abi.ResponseListTransactions.prototype.getTransactionsList = function() {
  return /** @type{!Array<!proto.forge_abi.IndexedTransaction>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    trace_type_pb.IndexedTransaction,
    3
  ));
};

/**
 * @param {!Array<!proto.forge_abi.IndexedTransaction>} value
 * @return {!proto.forge_abi.ResponseListTransactions} returns this
 */
proto.forge_abi.ResponseListTransactions.prototype.setTransactionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};

/**
 * @param {!proto.forge_abi.IndexedTransaction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.forge_abi.IndexedTransaction}
 */
proto.forge_abi.ResponseListTransactions.prototype.addTransactions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.forge_abi.IndexedTransaction, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.forge_abi.ResponseListTransactions} returns this
 */
proto.forge_abi.ResponseListTransactions.prototype.clearTransactionsList = function() {
  return this.setTransactionsList([]);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestListAssets.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestListAssets.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestListAssets} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestListAssets.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        paging: (f = msg.getPaging()) && trace_type_pb.PageInput.toObject(includeInstance, f),
        ownerAddress: jspb.Message.getFieldWithDefault(msg, 2, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestListAssets}
 */
proto.forge_abi.RequestListAssets.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestListAssets();
  return proto.forge_abi.RequestListAssets.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestListAssets} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestListAssets}
 */
proto.forge_abi.RequestListAssets.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new trace_type_pb.PageInput();
        reader.readMessage(value, trace_type_pb.PageInput.deserializeBinaryFromReader);
        msg.setPaging(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setOwnerAddress(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestListAssets.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestListAssets.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestListAssets} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestListAssets.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaging();
  if (f != null) {
    writer.writeMessage(1, f, trace_type_pb.PageInput.serializeBinaryToWriter);
  }
  f = message.getOwnerAddress();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

/**
 * optional PageInput paging = 1;
 * @return {?proto.forge_abi.PageInput}
 */
proto.forge_abi.RequestListAssets.prototype.getPaging = function() {
  return /** @type{?proto.forge_abi.PageInput} */ (jspb.Message.getWrapperField(this, trace_type_pb.PageInput, 1));
};

/**
 * @param {?proto.forge_abi.PageInput|undefined} value
 * @return {!proto.forge_abi.RequestListAssets} returns this
 */
proto.forge_abi.RequestListAssets.prototype.setPaging = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.RequestListAssets} returns this
 */
proto.forge_abi.RequestListAssets.prototype.clearPaging = function() {
  return this.setPaging(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.RequestListAssets.prototype.hasPaging = function() {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional string owner_address = 2;
 * @return {string}
 */
proto.forge_abi.RequestListAssets.prototype.getOwnerAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.forge_abi.RequestListAssets} returns this
 */
proto.forge_abi.RequestListAssets.prototype.setOwnerAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.forge_abi.ResponseListAssets.repeatedFields_ = [3];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseListAssets.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseListAssets.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseListAssets} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseListAssets.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        page: (f = msg.getPage()) && trace_type_pb.PageInfo.toObject(includeInstance, f),
        assetsList: jspb.Message.toObjectList(
          msg.getAssetsList(),
          trace_type_pb.IndexedAssetState.toObject,
          includeInstance
        ),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseListAssets}
 */
proto.forge_abi.ResponseListAssets.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseListAssets();
  return proto.forge_abi.ResponseListAssets.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseListAssets} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseListAssets}
 */
proto.forge_abi.ResponseListAssets.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = new trace_type_pb.PageInfo();
        reader.readMessage(value, trace_type_pb.PageInfo.deserializeBinaryFromReader);
        msg.setPage(value);
        break;
      case 3:
        var value = new trace_type_pb.IndexedAssetState();
        reader.readMessage(value, trace_type_pb.IndexedAssetState.deserializeBinaryFromReader);
        msg.addAssets(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseListAssets.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseListAssets.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseListAssets} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseListAssets.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getPage();
  if (f != null) {
    writer.writeMessage(2, f, trace_type_pb.PageInfo.serializeBinaryToWriter);
  }
  f = message.getAssetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(3, f, trace_type_pb.IndexedAssetState.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseListAssets.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {!proto.forge_abi.StatusCode} value
 * @return {!proto.forge_abi.ResponseListAssets} returns this
 */
proto.forge_abi.ResponseListAssets.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};

/**
 * optional PageInfo page = 2;
 * @return {?proto.forge_abi.PageInfo}
 */
proto.forge_abi.ResponseListAssets.prototype.getPage = function() {
  return /** @type{?proto.forge_abi.PageInfo} */ (jspb.Message.getWrapperField(this, trace_type_pb.PageInfo, 2));
};

/**
 * @param {?proto.forge_abi.PageInfo|undefined} value
 * @return {!proto.forge_abi.ResponseListAssets} returns this
 */
proto.forge_abi.ResponseListAssets.prototype.setPage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseListAssets} returns this
 */
proto.forge_abi.ResponseListAssets.prototype.clearPage = function() {
  return this.setPage(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseListAssets.prototype.hasPage = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * repeated IndexedAssetState assets = 3;
 * @return {!Array<!proto.forge_abi.IndexedAssetState>}
 */
proto.forge_abi.ResponseListAssets.prototype.getAssetsList = function() {
  return /** @type{!Array<!proto.forge_abi.IndexedAssetState>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    trace_type_pb.IndexedAssetState,
    3
  ));
};

/**
 * @param {!Array<!proto.forge_abi.IndexedAssetState>} value
 * @return {!proto.forge_abi.ResponseListAssets} returns this
 */
proto.forge_abi.ResponseListAssets.prototype.setAssetsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};

/**
 * @param {!proto.forge_abi.IndexedAssetState=} opt_value
 * @param {number=} opt_index
 * @return {!proto.forge_abi.IndexedAssetState}
 */
proto.forge_abi.ResponseListAssets.prototype.addAssets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.forge_abi.IndexedAssetState, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.forge_abi.ResponseListAssets} returns this
 */
proto.forge_abi.ResponseListAssets.prototype.clearAssetsList = function() {
  return this.setAssetsList([]);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestListStakes.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestListStakes.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestListStakes} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestListStakes.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        paging: (f = msg.getPaging()) && trace_type_pb.PageInput.toObject(includeInstance, f),
        addressFilter: (f = msg.getAddressFilter()) && trace_type_pb.AddressFilter.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestListStakes}
 */
proto.forge_abi.RequestListStakes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestListStakes();
  return proto.forge_abi.RequestListStakes.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestListStakes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestListStakes}
 */
proto.forge_abi.RequestListStakes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new trace_type_pb.PageInput();
        reader.readMessage(value, trace_type_pb.PageInput.deserializeBinaryFromReader);
        msg.setPaging(value);
        break;
      case 2:
        var value = new trace_type_pb.AddressFilter();
        reader.readMessage(value, trace_type_pb.AddressFilter.deserializeBinaryFromReader);
        msg.setAddressFilter(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestListStakes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestListStakes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestListStakes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestListStakes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaging();
  if (f != null) {
    writer.writeMessage(1, f, trace_type_pb.PageInput.serializeBinaryToWriter);
  }
  f = message.getAddressFilter();
  if (f != null) {
    writer.writeMessage(2, f, trace_type_pb.AddressFilter.serializeBinaryToWriter);
  }
};

/**
 * optional PageInput paging = 1;
 * @return {?proto.forge_abi.PageInput}
 */
proto.forge_abi.RequestListStakes.prototype.getPaging = function() {
  return /** @type{?proto.forge_abi.PageInput} */ (jspb.Message.getWrapperField(this, trace_type_pb.PageInput, 1));
};

/**
 * @param {?proto.forge_abi.PageInput|undefined} value
 * @return {!proto.forge_abi.RequestListStakes} returns this
 */
proto.forge_abi.RequestListStakes.prototype.setPaging = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.RequestListStakes} returns this
 */
proto.forge_abi.RequestListStakes.prototype.clearPaging = function() {
  return this.setPaging(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.RequestListStakes.prototype.hasPaging = function() {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional AddressFilter address_filter = 2;
 * @return {?proto.forge_abi.AddressFilter}
 */
proto.forge_abi.RequestListStakes.prototype.getAddressFilter = function() {
  return /** @type{?proto.forge_abi.AddressFilter} */ (jspb.Message.getWrapperField(
    this,
    trace_type_pb.AddressFilter,
    2
  ));
};

/**
 * @param {?proto.forge_abi.AddressFilter|undefined} value
 * @return {!proto.forge_abi.RequestListStakes} returns this
 */
proto.forge_abi.RequestListStakes.prototype.setAddressFilter = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.RequestListStakes} returns this
 */
proto.forge_abi.RequestListStakes.prototype.clearAddressFilter = function() {
  return this.setAddressFilter(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.RequestListStakes.prototype.hasAddressFilter = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.forge_abi.ResponseListStakes.repeatedFields_ = [3];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseListStakes.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseListStakes.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseListStakes} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseListStakes.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        page: (f = msg.getPage()) && trace_type_pb.PageInfo.toObject(includeInstance, f),
        stakesList: jspb.Message.toObjectList(
          msg.getStakesList(),
          trace_type_pb.IndexedStakeState.toObject,
          includeInstance
        ),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseListStakes}
 */
proto.forge_abi.ResponseListStakes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseListStakes();
  return proto.forge_abi.ResponseListStakes.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseListStakes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseListStakes}
 */
proto.forge_abi.ResponseListStakes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = new trace_type_pb.PageInfo();
        reader.readMessage(value, trace_type_pb.PageInfo.deserializeBinaryFromReader);
        msg.setPage(value);
        break;
      case 3:
        var value = new trace_type_pb.IndexedStakeState();
        reader.readMessage(value, trace_type_pb.IndexedStakeState.deserializeBinaryFromReader);
        msg.addStakes(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseListStakes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseListStakes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseListStakes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseListStakes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getPage();
  if (f != null) {
    writer.writeMessage(2, f, trace_type_pb.PageInfo.serializeBinaryToWriter);
  }
  f = message.getStakesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(3, f, trace_type_pb.IndexedStakeState.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseListStakes.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {!proto.forge_abi.StatusCode} value
 * @return {!proto.forge_abi.ResponseListStakes} returns this
 */
proto.forge_abi.ResponseListStakes.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};

/**
 * optional PageInfo page = 2;
 * @return {?proto.forge_abi.PageInfo}
 */
proto.forge_abi.ResponseListStakes.prototype.getPage = function() {
  return /** @type{?proto.forge_abi.PageInfo} */ (jspb.Message.getWrapperField(this, trace_type_pb.PageInfo, 2));
};

/**
 * @param {?proto.forge_abi.PageInfo|undefined} value
 * @return {!proto.forge_abi.ResponseListStakes} returns this
 */
proto.forge_abi.ResponseListStakes.prototype.setPage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseListStakes} returns this
 */
proto.forge_abi.ResponseListStakes.prototype.clearPage = function() {
  return this.setPage(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseListStakes.prototype.hasPage = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * repeated IndexedStakeState stakes = 3;
 * @return {!Array<!proto.forge_abi.IndexedStakeState>}
 */
proto.forge_abi.ResponseListStakes.prototype.getStakesList = function() {
  return /** @type{!Array<!proto.forge_abi.IndexedStakeState>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    trace_type_pb.IndexedStakeState,
    3
  ));
};

/**
 * @param {!Array<!proto.forge_abi.IndexedStakeState>} value
 * @return {!proto.forge_abi.ResponseListStakes} returns this
 */
proto.forge_abi.ResponseListStakes.prototype.setStakesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};

/**
 * @param {!proto.forge_abi.IndexedStakeState=} opt_value
 * @param {number=} opt_index
 * @return {!proto.forge_abi.IndexedStakeState}
 */
proto.forge_abi.ResponseListStakes.prototype.addStakes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.forge_abi.IndexedStakeState, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.forge_abi.ResponseListStakes} returns this
 */
proto.forge_abi.ResponseListStakes.prototype.clearStakesList = function() {
  return this.setStakesList([]);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestListAccount.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestListAccount.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestListAccount} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestListAccount.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        ownerAddress: jspb.Message.getFieldWithDefault(msg, 1, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestListAccount}
 */
proto.forge_abi.RequestListAccount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestListAccount();
  return proto.forge_abi.RequestListAccount.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestListAccount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestListAccount}
 */
proto.forge_abi.RequestListAccount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setOwnerAddress(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestListAccount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestListAccount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestListAccount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestListAccount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwnerAddress();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

/**
 * optional string owner_address = 1;
 * @return {string}
 */
proto.forge_abi.RequestListAccount.prototype.getOwnerAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.forge_abi.RequestListAccount} returns this
 */
proto.forge_abi.RequestListAccount.prototype.setOwnerAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseListAccount.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseListAccount.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseListAccount} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseListAccount.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        account: (f = msg.getAccount()) && trace_type_pb.IndexedAccountState.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseListAccount}
 */
proto.forge_abi.ResponseListAccount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseListAccount();
  return proto.forge_abi.ResponseListAccount.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseListAccount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseListAccount}
 */
proto.forge_abi.ResponseListAccount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = new trace_type_pb.IndexedAccountState();
        reader.readMessage(value, trace_type_pb.IndexedAccountState.deserializeBinaryFromReader);
        msg.setAccount(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseListAccount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseListAccount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseListAccount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseListAccount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getAccount();
  if (f != null) {
    writer.writeMessage(2, f, trace_type_pb.IndexedAccountState.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseListAccount.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {!proto.forge_abi.StatusCode} value
 * @return {!proto.forge_abi.ResponseListAccount} returns this
 */
proto.forge_abi.ResponseListAccount.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};

/**
 * optional IndexedAccountState account = 2;
 * @return {?proto.forge_abi.IndexedAccountState}
 */
proto.forge_abi.ResponseListAccount.prototype.getAccount = function() {
  return /** @type{?proto.forge_abi.IndexedAccountState} */ (jspb.Message.getWrapperField(
    this,
    trace_type_pb.IndexedAccountState,
    2
  ));
};

/**
 * @param {?proto.forge_abi.IndexedAccountState|undefined} value
 * @return {!proto.forge_abi.ResponseListAccount} returns this
 */
proto.forge_abi.ResponseListAccount.prototype.setAccount = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseListAccount} returns this
 */
proto.forge_abi.ResponseListAccount.prototype.clearAccount = function() {
  return this.setAccount(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseListAccount.prototype.hasAccount = function() {
  return jspb.Message.getField(this, 2) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestListTopAccounts.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestListTopAccounts.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestListTopAccounts} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestListTopAccounts.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        paging: (f = msg.getPaging()) && trace_type_pb.PageInput.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestListTopAccounts}
 */
proto.forge_abi.RequestListTopAccounts.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestListTopAccounts();
  return proto.forge_abi.RequestListTopAccounts.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestListTopAccounts} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestListTopAccounts}
 */
proto.forge_abi.RequestListTopAccounts.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new trace_type_pb.PageInput();
        reader.readMessage(value, trace_type_pb.PageInput.deserializeBinaryFromReader);
        msg.setPaging(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestListTopAccounts.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestListTopAccounts.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestListTopAccounts} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestListTopAccounts.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaging();
  if (f != null) {
    writer.writeMessage(1, f, trace_type_pb.PageInput.serializeBinaryToWriter);
  }
};

/**
 * optional PageInput paging = 1;
 * @return {?proto.forge_abi.PageInput}
 */
proto.forge_abi.RequestListTopAccounts.prototype.getPaging = function() {
  return /** @type{?proto.forge_abi.PageInput} */ (jspb.Message.getWrapperField(this, trace_type_pb.PageInput, 1));
};

/**
 * @param {?proto.forge_abi.PageInput|undefined} value
 * @return {!proto.forge_abi.RequestListTopAccounts} returns this
 */
proto.forge_abi.RequestListTopAccounts.prototype.setPaging = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.RequestListTopAccounts} returns this
 */
proto.forge_abi.RequestListTopAccounts.prototype.clearPaging = function() {
  return this.setPaging(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.RequestListTopAccounts.prototype.hasPaging = function() {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.forge_abi.ResponseListTopAccounts.repeatedFields_ = [3];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseListTopAccounts.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseListTopAccounts.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseListTopAccounts} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseListTopAccounts.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        page: (f = msg.getPage()) && trace_type_pb.PageInfo.toObject(includeInstance, f),
        accountsList: jspb.Message.toObjectList(
          msg.getAccountsList(),
          trace_type_pb.IndexedAccountState.toObject,
          includeInstance
        ),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseListTopAccounts}
 */
proto.forge_abi.ResponseListTopAccounts.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseListTopAccounts();
  return proto.forge_abi.ResponseListTopAccounts.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseListTopAccounts} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseListTopAccounts}
 */
proto.forge_abi.ResponseListTopAccounts.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = new trace_type_pb.PageInfo();
        reader.readMessage(value, trace_type_pb.PageInfo.deserializeBinaryFromReader);
        msg.setPage(value);
        break;
      case 3:
        var value = new trace_type_pb.IndexedAccountState();
        reader.readMessage(value, trace_type_pb.IndexedAccountState.deserializeBinaryFromReader);
        msg.addAccounts(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseListTopAccounts.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseListTopAccounts.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseListTopAccounts} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseListTopAccounts.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getPage();
  if (f != null) {
    writer.writeMessage(2, f, trace_type_pb.PageInfo.serializeBinaryToWriter);
  }
  f = message.getAccountsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(3, f, trace_type_pb.IndexedAccountState.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseListTopAccounts.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {!proto.forge_abi.StatusCode} value
 * @return {!proto.forge_abi.ResponseListTopAccounts} returns this
 */
proto.forge_abi.ResponseListTopAccounts.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};

/**
 * optional PageInfo page = 2;
 * @return {?proto.forge_abi.PageInfo}
 */
proto.forge_abi.ResponseListTopAccounts.prototype.getPage = function() {
  return /** @type{?proto.forge_abi.PageInfo} */ (jspb.Message.getWrapperField(this, trace_type_pb.PageInfo, 2));
};

/**
 * @param {?proto.forge_abi.PageInfo|undefined} value
 * @return {!proto.forge_abi.ResponseListTopAccounts} returns this
 */
proto.forge_abi.ResponseListTopAccounts.prototype.setPage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseListTopAccounts} returns this
 */
proto.forge_abi.ResponseListTopAccounts.prototype.clearPage = function() {
  return this.setPage(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseListTopAccounts.prototype.hasPage = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * repeated IndexedAccountState accounts = 3;
 * @return {!Array<!proto.forge_abi.IndexedAccountState>}
 */
proto.forge_abi.ResponseListTopAccounts.prototype.getAccountsList = function() {
  return /** @type{!Array<!proto.forge_abi.IndexedAccountState>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    trace_type_pb.IndexedAccountState,
    3
  ));
};

/**
 * @param {!Array<!proto.forge_abi.IndexedAccountState>} value
 * @return {!proto.forge_abi.ResponseListTopAccounts} returns this
 */
proto.forge_abi.ResponseListTopAccounts.prototype.setAccountsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};

/**
 * @param {!proto.forge_abi.IndexedAccountState=} opt_value
 * @param {number=} opt_index
 * @return {!proto.forge_abi.IndexedAccountState}
 */
proto.forge_abi.ResponseListTopAccounts.prototype.addAccounts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.forge_abi.IndexedAccountState, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.forge_abi.ResponseListTopAccounts} returns this
 */
proto.forge_abi.ResponseListTopAccounts.prototype.clearAccountsList = function() {
  return this.setAccountsList([]);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestListAssetTransactions.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestListAssetTransactions.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestListAssetTransactions} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestListAssetTransactions.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        paging: (f = msg.getPaging()) && trace_type_pb.PageInput.toObject(includeInstance, f),
        address: jspb.Message.getFieldWithDefault(msg, 2, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestListAssetTransactions}
 */
proto.forge_abi.RequestListAssetTransactions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestListAssetTransactions();
  return proto.forge_abi.RequestListAssetTransactions.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestListAssetTransactions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestListAssetTransactions}
 */
proto.forge_abi.RequestListAssetTransactions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new trace_type_pb.PageInput();
        reader.readMessage(value, trace_type_pb.PageInput.deserializeBinaryFromReader);
        msg.setPaging(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setAddress(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestListAssetTransactions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestListAssetTransactions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestListAssetTransactions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestListAssetTransactions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaging();
  if (f != null) {
    writer.writeMessage(1, f, trace_type_pb.PageInput.serializeBinaryToWriter);
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

/**
 * optional PageInput paging = 1;
 * @return {?proto.forge_abi.PageInput}
 */
proto.forge_abi.RequestListAssetTransactions.prototype.getPaging = function() {
  return /** @type{?proto.forge_abi.PageInput} */ (jspb.Message.getWrapperField(this, trace_type_pb.PageInput, 1));
};

/**
 * @param {?proto.forge_abi.PageInput|undefined} value
 * @return {!proto.forge_abi.RequestListAssetTransactions} returns this
 */
proto.forge_abi.RequestListAssetTransactions.prototype.setPaging = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.RequestListAssetTransactions} returns this
 */
proto.forge_abi.RequestListAssetTransactions.prototype.clearPaging = function() {
  return this.setPaging(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.RequestListAssetTransactions.prototype.hasPaging = function() {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional string address = 2;
 * @return {string}
 */
proto.forge_abi.RequestListAssetTransactions.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.forge_abi.RequestListAssetTransactions} returns this
 */
proto.forge_abi.RequestListAssetTransactions.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.forge_abi.ResponseListAssetTransactions.repeatedFields_ = [3];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseListAssetTransactions.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseListAssetTransactions.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseListAssetTransactions} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseListAssetTransactions.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        page: (f = msg.getPage()) && trace_type_pb.PageInfo.toObject(includeInstance, f),
        transactionsList: jspb.Message.toObjectList(
          msg.getTransactionsList(),
          trace_type_pb.IndexedTransaction.toObject,
          includeInstance
        ),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseListAssetTransactions}
 */
proto.forge_abi.ResponseListAssetTransactions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseListAssetTransactions();
  return proto.forge_abi.ResponseListAssetTransactions.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseListAssetTransactions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseListAssetTransactions}
 */
proto.forge_abi.ResponseListAssetTransactions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = new trace_type_pb.PageInfo();
        reader.readMessage(value, trace_type_pb.PageInfo.deserializeBinaryFromReader);
        msg.setPage(value);
        break;
      case 3:
        var value = new trace_type_pb.IndexedTransaction();
        reader.readMessage(value, trace_type_pb.IndexedTransaction.deserializeBinaryFromReader);
        msg.addTransactions(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseListAssetTransactions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseListAssetTransactions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseListAssetTransactions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseListAssetTransactions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getPage();
  if (f != null) {
    writer.writeMessage(2, f, trace_type_pb.PageInfo.serializeBinaryToWriter);
  }
  f = message.getTransactionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(3, f, trace_type_pb.IndexedTransaction.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseListAssetTransactions.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {!proto.forge_abi.StatusCode} value
 * @return {!proto.forge_abi.ResponseListAssetTransactions} returns this
 */
proto.forge_abi.ResponseListAssetTransactions.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};

/**
 * optional PageInfo page = 2;
 * @return {?proto.forge_abi.PageInfo}
 */
proto.forge_abi.ResponseListAssetTransactions.prototype.getPage = function() {
  return /** @type{?proto.forge_abi.PageInfo} */ (jspb.Message.getWrapperField(this, trace_type_pb.PageInfo, 2));
};

/**
 * @param {?proto.forge_abi.PageInfo|undefined} value
 * @return {!proto.forge_abi.ResponseListAssetTransactions} returns this
 */
proto.forge_abi.ResponseListAssetTransactions.prototype.setPage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseListAssetTransactions} returns this
 */
proto.forge_abi.ResponseListAssetTransactions.prototype.clearPage = function() {
  return this.setPage(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseListAssetTransactions.prototype.hasPage = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * repeated IndexedTransaction transactions = 3;
 * @return {!Array<!proto.forge_abi.IndexedTransaction>}
 */
proto.forge_abi.ResponseListAssetTransactions.prototype.getTransactionsList = function() {
  return /** @type{!Array<!proto.forge_abi.IndexedTransaction>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    trace_type_pb.IndexedTransaction,
    3
  ));
};

/**
 * @param {!Array<!proto.forge_abi.IndexedTransaction>} value
 * @return {!proto.forge_abi.ResponseListAssetTransactions} returns this
 */
proto.forge_abi.ResponseListAssetTransactions.prototype.setTransactionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};

/**
 * @param {!proto.forge_abi.IndexedTransaction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.forge_abi.IndexedTransaction}
 */
proto.forge_abi.ResponseListAssetTransactions.prototype.addTransactions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.forge_abi.IndexedTransaction, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.forge_abi.ResponseListAssetTransactions} returns this
 */
proto.forge_abi.ResponseListAssetTransactions.prototype.clearTransactionsList = function() {
  return this.setTransactionsList([]);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestListBlocks.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestListBlocks.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestListBlocks} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestListBlocks.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        paging: (f = msg.getPaging()) && trace_type_pb.PageInput.toObject(includeInstance, f),
        proposer: jspb.Message.getFieldWithDefault(msg, 2, ''),
        timeFilter: (f = msg.getTimeFilter()) && trace_type_pb.TimeFilter.toObject(includeInstance, f),
        heightFilter: (f = msg.getHeightFilter()) && trace_type_pb.RangeFilter.toObject(includeInstance, f),
        numTxsFilter: (f = msg.getNumTxsFilter()) && trace_type_pb.RangeFilter.toObject(includeInstance, f),
        numInvalidTxsFilter:
          (f = msg.getNumInvalidTxsFilter()) && trace_type_pb.RangeFilter.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestListBlocks}
 */
proto.forge_abi.RequestListBlocks.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestListBlocks();
  return proto.forge_abi.RequestListBlocks.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestListBlocks} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestListBlocks}
 */
proto.forge_abi.RequestListBlocks.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new trace_type_pb.PageInput();
        reader.readMessage(value, trace_type_pb.PageInput.deserializeBinaryFromReader);
        msg.setPaging(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setProposer(value);
        break;
      case 3:
        var value = new trace_type_pb.TimeFilter();
        reader.readMessage(value, trace_type_pb.TimeFilter.deserializeBinaryFromReader);
        msg.setTimeFilter(value);
        break;
      case 4:
        var value = new trace_type_pb.RangeFilter();
        reader.readMessage(value, trace_type_pb.RangeFilter.deserializeBinaryFromReader);
        msg.setHeightFilter(value);
        break;
      case 5:
        var value = new trace_type_pb.RangeFilter();
        reader.readMessage(value, trace_type_pb.RangeFilter.deserializeBinaryFromReader);
        msg.setNumTxsFilter(value);
        break;
      case 6:
        var value = new trace_type_pb.RangeFilter();
        reader.readMessage(value, trace_type_pb.RangeFilter.deserializeBinaryFromReader);
        msg.setNumInvalidTxsFilter(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestListBlocks.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestListBlocks.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestListBlocks} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestListBlocks.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaging();
  if (f != null) {
    writer.writeMessage(1, f, trace_type_pb.PageInput.serializeBinaryToWriter);
  }
  f = message.getProposer();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getTimeFilter();
  if (f != null) {
    writer.writeMessage(3, f, trace_type_pb.TimeFilter.serializeBinaryToWriter);
  }
  f = message.getHeightFilter();
  if (f != null) {
    writer.writeMessage(4, f, trace_type_pb.RangeFilter.serializeBinaryToWriter);
  }
  f = message.getNumTxsFilter();
  if (f != null) {
    writer.writeMessage(5, f, trace_type_pb.RangeFilter.serializeBinaryToWriter);
  }
  f = message.getNumInvalidTxsFilter();
  if (f != null) {
    writer.writeMessage(6, f, trace_type_pb.RangeFilter.serializeBinaryToWriter);
  }
};

/**
 * optional PageInput paging = 1;
 * @return {?proto.forge_abi.PageInput}
 */
proto.forge_abi.RequestListBlocks.prototype.getPaging = function() {
  return /** @type{?proto.forge_abi.PageInput} */ (jspb.Message.getWrapperField(this, trace_type_pb.PageInput, 1));
};

/**
 * @param {?proto.forge_abi.PageInput|undefined} value
 * @return {!proto.forge_abi.RequestListBlocks} returns this
 */
proto.forge_abi.RequestListBlocks.prototype.setPaging = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.RequestListBlocks} returns this
 */
proto.forge_abi.RequestListBlocks.prototype.clearPaging = function() {
  return this.setPaging(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.RequestListBlocks.prototype.hasPaging = function() {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional string proposer = 2;
 * @return {string}
 */
proto.forge_abi.RequestListBlocks.prototype.getProposer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.forge_abi.RequestListBlocks} returns this
 */
proto.forge_abi.RequestListBlocks.prototype.setProposer = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional TimeFilter time_filter = 3;
 * @return {?proto.forge_abi.TimeFilter}
 */
proto.forge_abi.RequestListBlocks.prototype.getTimeFilter = function() {
  return /** @type{?proto.forge_abi.TimeFilter} */ (jspb.Message.getWrapperField(this, trace_type_pb.TimeFilter, 3));
};

/**
 * @param {?proto.forge_abi.TimeFilter|undefined} value
 * @return {!proto.forge_abi.RequestListBlocks} returns this
 */
proto.forge_abi.RequestListBlocks.prototype.setTimeFilter = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.RequestListBlocks} returns this
 */
proto.forge_abi.RequestListBlocks.prototype.clearTimeFilter = function() {
  return this.setTimeFilter(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.RequestListBlocks.prototype.hasTimeFilter = function() {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * optional RangeFilter height_filter = 4;
 * @return {?proto.forge_abi.RangeFilter}
 */
proto.forge_abi.RequestListBlocks.prototype.getHeightFilter = function() {
  return /** @type{?proto.forge_abi.RangeFilter} */ (jspb.Message.getWrapperField(this, trace_type_pb.RangeFilter, 4));
};

/**
 * @param {?proto.forge_abi.RangeFilter|undefined} value
 * @return {!proto.forge_abi.RequestListBlocks} returns this
 */
proto.forge_abi.RequestListBlocks.prototype.setHeightFilter = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.RequestListBlocks} returns this
 */
proto.forge_abi.RequestListBlocks.prototype.clearHeightFilter = function() {
  return this.setHeightFilter(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.RequestListBlocks.prototype.hasHeightFilter = function() {
  return jspb.Message.getField(this, 4) != null;
};

/**
 * optional RangeFilter num_txs_filter = 5;
 * @return {?proto.forge_abi.RangeFilter}
 */
proto.forge_abi.RequestListBlocks.prototype.getNumTxsFilter = function() {
  return /** @type{?proto.forge_abi.RangeFilter} */ (jspb.Message.getWrapperField(this, trace_type_pb.RangeFilter, 5));
};

/**
 * @param {?proto.forge_abi.RangeFilter|undefined} value
 * @return {!proto.forge_abi.RequestListBlocks} returns this
 */
proto.forge_abi.RequestListBlocks.prototype.setNumTxsFilter = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.RequestListBlocks} returns this
 */
proto.forge_abi.RequestListBlocks.prototype.clearNumTxsFilter = function() {
  return this.setNumTxsFilter(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.RequestListBlocks.prototype.hasNumTxsFilter = function() {
  return jspb.Message.getField(this, 5) != null;
};

/**
 * optional RangeFilter num_invalid_txs_filter = 6;
 * @return {?proto.forge_abi.RangeFilter}
 */
proto.forge_abi.RequestListBlocks.prototype.getNumInvalidTxsFilter = function() {
  return /** @type{?proto.forge_abi.RangeFilter} */ (jspb.Message.getWrapperField(this, trace_type_pb.RangeFilter, 6));
};

/**
 * @param {?proto.forge_abi.RangeFilter|undefined} value
 * @return {!proto.forge_abi.RequestListBlocks} returns this
 */
proto.forge_abi.RequestListBlocks.prototype.setNumInvalidTxsFilter = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.RequestListBlocks} returns this
 */
proto.forge_abi.RequestListBlocks.prototype.clearNumInvalidTxsFilter = function() {
  return this.setNumInvalidTxsFilter(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.RequestListBlocks.prototype.hasNumInvalidTxsFilter = function() {
  return jspb.Message.getField(this, 6) != null;
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.forge_abi.ResponseListBlocks.repeatedFields_ = [3];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseListBlocks.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseListBlocks.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseListBlocks} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseListBlocks.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        page: (f = msg.getPage()) && trace_type_pb.PageInfo.toObject(includeInstance, f),
        blocksList: jspb.Message.toObjectList(
          msg.getBlocksList(),
          trace_type_pb.IndexedBlock.toObject,
          includeInstance
        ),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseListBlocks}
 */
proto.forge_abi.ResponseListBlocks.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseListBlocks();
  return proto.forge_abi.ResponseListBlocks.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseListBlocks} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseListBlocks}
 */
proto.forge_abi.ResponseListBlocks.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = new trace_type_pb.PageInfo();
        reader.readMessage(value, trace_type_pb.PageInfo.deserializeBinaryFromReader);
        msg.setPage(value);
        break;
      case 3:
        var value = new trace_type_pb.IndexedBlock();
        reader.readMessage(value, trace_type_pb.IndexedBlock.deserializeBinaryFromReader);
        msg.addBlocks(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseListBlocks.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseListBlocks.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseListBlocks} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseListBlocks.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getPage();
  if (f != null) {
    writer.writeMessage(2, f, trace_type_pb.PageInfo.serializeBinaryToWriter);
  }
  f = message.getBlocksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(3, f, trace_type_pb.IndexedBlock.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseListBlocks.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {!proto.forge_abi.StatusCode} value
 * @return {!proto.forge_abi.ResponseListBlocks} returns this
 */
proto.forge_abi.ResponseListBlocks.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};

/**
 * optional PageInfo page = 2;
 * @return {?proto.forge_abi.PageInfo}
 */
proto.forge_abi.ResponseListBlocks.prototype.getPage = function() {
  return /** @type{?proto.forge_abi.PageInfo} */ (jspb.Message.getWrapperField(this, trace_type_pb.PageInfo, 2));
};

/**
 * @param {?proto.forge_abi.PageInfo|undefined} value
 * @return {!proto.forge_abi.ResponseListBlocks} returns this
 */
proto.forge_abi.ResponseListBlocks.prototype.setPage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseListBlocks} returns this
 */
proto.forge_abi.ResponseListBlocks.prototype.clearPage = function() {
  return this.setPage(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseListBlocks.prototype.hasPage = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * repeated IndexedBlock blocks = 3;
 * @return {!Array<!proto.forge_abi.IndexedBlock>}
 */
proto.forge_abi.ResponseListBlocks.prototype.getBlocksList = function() {
  return /** @type{!Array<!proto.forge_abi.IndexedBlock>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    trace_type_pb.IndexedBlock,
    3
  ));
};

/**
 * @param {!Array<!proto.forge_abi.IndexedBlock>} value
 * @return {!proto.forge_abi.ResponseListBlocks} returns this
 */
proto.forge_abi.ResponseListBlocks.prototype.setBlocksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};

/**
 * @param {!proto.forge_abi.IndexedBlock=} opt_value
 * @param {number=} opt_index
 * @return {!proto.forge_abi.IndexedBlock}
 */
proto.forge_abi.ResponseListBlocks.prototype.addBlocks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.forge_abi.IndexedBlock, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.forge_abi.ResponseListBlocks} returns this
 */
proto.forge_abi.ResponseListBlocks.prototype.clearBlocksList = function() {
  return this.setBlocksList([]);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestListSwap.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestListSwap.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestListSwap} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestListSwap.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        paging: (f = msg.getPaging()) && trace_type_pb.PageInput.toObject(includeInstance, f),
        sender: jspb.Message.getFieldWithDefault(msg, 2, ''),
        receiver: jspb.Message.getFieldWithDefault(msg, 3, ''),
        available: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestListSwap}
 */
proto.forge_abi.RequestListSwap.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestListSwap();
  return proto.forge_abi.RequestListSwap.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestListSwap} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestListSwap}
 */
proto.forge_abi.RequestListSwap.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new trace_type_pb.PageInput();
        reader.readMessage(value, trace_type_pb.PageInput.deserializeBinaryFromReader);
        msg.setPaging(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setSender(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setReceiver(value);
        break;
      case 4:
        var value = /** @type {boolean} */ (reader.readBool());
        msg.setAvailable(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestListSwap.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestListSwap.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestListSwap} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestListSwap.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaging();
  if (f != null) {
    writer.writeMessage(1, f, trace_type_pb.PageInput.serializeBinaryToWriter);
  }
  f = message.getSender();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getReceiver();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getAvailable();
  if (f) {
    writer.writeBool(4, f);
  }
};

/**
 * optional PageInput paging = 1;
 * @return {?proto.forge_abi.PageInput}
 */
proto.forge_abi.RequestListSwap.prototype.getPaging = function() {
  return /** @type{?proto.forge_abi.PageInput} */ (jspb.Message.getWrapperField(this, trace_type_pb.PageInput, 1));
};

/**
 * @param {?proto.forge_abi.PageInput|undefined} value
 * @return {!proto.forge_abi.RequestListSwap} returns this
 */
proto.forge_abi.RequestListSwap.prototype.setPaging = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.RequestListSwap} returns this
 */
proto.forge_abi.RequestListSwap.prototype.clearPaging = function() {
  return this.setPaging(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.RequestListSwap.prototype.hasPaging = function() {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional string sender = 2;
 * @return {string}
 */
proto.forge_abi.RequestListSwap.prototype.getSender = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.forge_abi.RequestListSwap} returns this
 */
proto.forge_abi.RequestListSwap.prototype.setSender = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string receiver = 3;
 * @return {string}
 */
proto.forge_abi.RequestListSwap.prototype.getReceiver = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.forge_abi.RequestListSwap} returns this
 */
proto.forge_abi.RequestListSwap.prototype.setReceiver = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional bool available = 4;
 * @return {boolean}
 */
proto.forge_abi.RequestListSwap.prototype.getAvailable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};

/**
 * @param {boolean} value
 * @return {!proto.forge_abi.RequestListSwap} returns this
 */
proto.forge_abi.RequestListSwap.prototype.setAvailable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.forge_abi.ResponseListSwap.repeatedFields_ = [3];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseListSwap.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseListSwap.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseListSwap} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseListSwap.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        page: (f = msg.getPage()) && trace_type_pb.PageInfo.toObject(includeInstance, f),
        swapList: jspb.Message.toObjectList(msg.getSwapList(), state_pb.SwapState.toObject, includeInstance),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseListSwap}
 */
proto.forge_abi.ResponseListSwap.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseListSwap();
  return proto.forge_abi.ResponseListSwap.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseListSwap} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseListSwap}
 */
proto.forge_abi.ResponseListSwap.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = new trace_type_pb.PageInfo();
        reader.readMessage(value, trace_type_pb.PageInfo.deserializeBinaryFromReader);
        msg.setPage(value);
        break;
      case 3:
        var value = new state_pb.SwapState();
        reader.readMessage(value, state_pb.SwapState.deserializeBinaryFromReader);
        msg.addSwap(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseListSwap.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseListSwap.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseListSwap} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseListSwap.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getPage();
  if (f != null) {
    writer.writeMessage(2, f, trace_type_pb.PageInfo.serializeBinaryToWriter);
  }
  f = message.getSwapList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(3, f, state_pb.SwapState.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseListSwap.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {!proto.forge_abi.StatusCode} value
 * @return {!proto.forge_abi.ResponseListSwap} returns this
 */
proto.forge_abi.ResponseListSwap.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};

/**
 * optional PageInfo page = 2;
 * @return {?proto.forge_abi.PageInfo}
 */
proto.forge_abi.ResponseListSwap.prototype.getPage = function() {
  return /** @type{?proto.forge_abi.PageInfo} */ (jspb.Message.getWrapperField(this, trace_type_pb.PageInfo, 2));
};

/**
 * @param {?proto.forge_abi.PageInfo|undefined} value
 * @return {!proto.forge_abi.ResponseListSwap} returns this
 */
proto.forge_abi.ResponseListSwap.prototype.setPage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseListSwap} returns this
 */
proto.forge_abi.ResponseListSwap.prototype.clearPage = function() {
  return this.setPage(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseListSwap.prototype.hasPage = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * repeated SwapState swap = 3;
 * @return {!Array<!proto.forge_abi.SwapState>}
 */
proto.forge_abi.ResponseListSwap.prototype.getSwapList = function() {
  return /** @type{!Array<!proto.forge_abi.SwapState>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    state_pb.SwapState,
    3
  ));
};

/**
 * @param {!Array<!proto.forge_abi.SwapState>} value
 * @return {!proto.forge_abi.ResponseListSwap} returns this
 */
proto.forge_abi.ResponseListSwap.prototype.setSwapList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};

/**
 * @param {!proto.forge_abi.SwapState=} opt_value
 * @param {number=} opt_index
 * @return {!proto.forge_abi.SwapState}
 */
proto.forge_abi.ResponseListSwap.prototype.addSwap = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.forge_abi.SwapState, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.forge_abi.ResponseListSwap} returns this
 */
proto.forge_abi.ResponseListSwap.prototype.clearSwapList = function() {
  return this.setSwapList([]);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestGetSwapStatistics.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestGetSwapStatistics.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestGetSwapStatistics} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestGetSwapStatistics.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        address: jspb.Message.getFieldWithDefault(msg, 1, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestGetSwapStatistics}
 */
proto.forge_abi.RequestGetSwapStatistics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestGetSwapStatistics();
  return proto.forge_abi.RequestGetSwapStatistics.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestGetSwapStatistics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestGetSwapStatistics}
 */
proto.forge_abi.RequestGetSwapStatistics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setAddress(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestGetSwapStatistics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestGetSwapStatistics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestGetSwapStatistics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestGetSwapStatistics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

/**
 * optional string address = 1;
 * @return {string}
 */
proto.forge_abi.RequestGetSwapStatistics.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.forge_abi.RequestGetSwapStatistics} returns this
 */
proto.forge_abi.RequestGetSwapStatistics.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseGetSwapStatistics.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseGetSwapStatistics.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseGetSwapStatistics} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseGetSwapStatistics.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        statistics: (f = msg.getStatistics()) && state_pb.SwapStatistics.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseGetSwapStatistics}
 */
proto.forge_abi.ResponseGetSwapStatistics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseGetSwapStatistics();
  return proto.forge_abi.ResponseGetSwapStatistics.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseGetSwapStatistics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseGetSwapStatistics}
 */
proto.forge_abi.ResponseGetSwapStatistics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = new state_pb.SwapStatistics();
        reader.readMessage(value, state_pb.SwapStatistics.deserializeBinaryFromReader);
        msg.setStatistics(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseGetSwapStatistics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseGetSwapStatistics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseGetSwapStatistics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseGetSwapStatistics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getStatistics();
  if (f != null) {
    writer.writeMessage(2, f, state_pb.SwapStatistics.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseGetSwapStatistics.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {!proto.forge_abi.StatusCode} value
 * @return {!proto.forge_abi.ResponseGetSwapStatistics} returns this
 */
proto.forge_abi.ResponseGetSwapStatistics.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};

/**
 * optional SwapStatistics statistics = 2;
 * @return {?proto.forge_abi.SwapStatistics}
 */
proto.forge_abi.ResponseGetSwapStatistics.prototype.getStatistics = function() {
  return /** @type{?proto.forge_abi.SwapStatistics} */ (jspb.Message.getWrapperField(this, state_pb.SwapStatistics, 2));
};

/**
 * @param {?proto.forge_abi.SwapStatistics|undefined} value
 * @return {!proto.forge_abi.ResponseGetSwapStatistics} returns this
 */
proto.forge_abi.ResponseGetSwapStatistics.prototype.setStatistics = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseGetSwapStatistics} returns this
 */
proto.forge_abi.ResponseGetSwapStatistics.prototype.clearStatistics = function() {
  return this.setStatistics(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseGetSwapStatistics.prototype.hasStatistics = function() {
  return jspb.Message.getField(this, 2) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.RequestGetHealthStatus.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestGetHealthStatus.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestGetHealthStatus} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestGetHealthStatus.toObject = function(includeInstance, msg) {
    var f,
      obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.RequestGetHealthStatus}
 */
proto.forge_abi.RequestGetHealthStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.RequestGetHealthStatus();
  return proto.forge_abi.RequestGetHealthStatus.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.RequestGetHealthStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.RequestGetHealthStatus}
 */
proto.forge_abi.RequestGetHealthStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.RequestGetHealthStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.RequestGetHealthStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.RequestGetHealthStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.RequestGetHealthStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseGetHealthStatus.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseGetHealthStatus.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.ResponseGetHealthStatus} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.ResponseGetHealthStatus.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        healthStatus: (f = msg.getHealthStatus()) && trace_type_pb.HealthStatus.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.ResponseGetHealthStatus}
 */
proto.forge_abi.ResponseGetHealthStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ResponseGetHealthStatus();
  return proto.forge_abi.ResponseGetHealthStatus.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ResponseGetHealthStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ResponseGetHealthStatus}
 */
proto.forge_abi.ResponseGetHealthStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.forge_abi.StatusCode} */ (reader.readEnum());
        msg.setCode(value);
        break;
      case 2:
        var value = new trace_type_pb.HealthStatus();
        reader.readMessage(value, trace_type_pb.HealthStatus.deserializeBinaryFromReader);
        msg.setHealthStatus(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.ResponseGetHealthStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ResponseGetHealthStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ResponseGetHealthStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ResponseGetHealthStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getHealthStatus();
  if (f != null) {
    writer.writeMessage(2, f, trace_type_pb.HealthStatus.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseGetHealthStatus.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {!proto.forge_abi.StatusCode} value
 * @return {!proto.forge_abi.ResponseGetHealthStatus} returns this
 */
proto.forge_abi.ResponseGetHealthStatus.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};

/**
 * optional HealthStatus health_status = 2;
 * @return {?proto.forge_abi.HealthStatus}
 */
proto.forge_abi.ResponseGetHealthStatus.prototype.getHealthStatus = function() {
  return /** @type{?proto.forge_abi.HealthStatus} */ (jspb.Message.getWrapperField(
    this,
    trace_type_pb.HealthStatus,
    2
  ));
};

/**
 * @param {?proto.forge_abi.HealthStatus|undefined} value
 * @return {!proto.forge_abi.ResponseGetHealthStatus} returns this
 */
proto.forge_abi.ResponseGetHealthStatus.prototype.setHealthStatus = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.forge_abi.ResponseGetHealthStatus} returns this
 */
proto.forge_abi.ResponseGetHealthStatus.prototype.clearHealthStatus = function() {
  return this.setHealthStatus(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ResponseGetHealthStatus.prototype.hasHealthStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};

goog.object.extend(exports, proto.forge_abi);
