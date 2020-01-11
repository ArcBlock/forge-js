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

var type_pb = require('./type_pb.js');
goog.object.extend(proto, type_pb);
goog.exportSymbol('proto.forge_abi.UpdateConsensusParamsTx', null, global);

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
proto.forge_abi.UpdateConsensusParamsTx = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.UpdateConsensusParamsTx, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.UpdateConsensusParamsTx.displayName = 'proto.forge_abi.UpdateConsensusParamsTx';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.UpdateConsensusParamsTx.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.UpdateConsensusParamsTx.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.UpdateConsensusParamsTx} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.UpdateConsensusParamsTx.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        delegateConfig: (f = msg.getDelegateConfig()) && type_pb.DelegateConfig.toObject(includeInstance, f),
        declareConfig: (f = msg.getDeclareConfig()) && type_pb.DeclareConfig.toObject(includeInstance, f),
        tokenSwapConfig: (f = msg.getTokenSwapConfig()) && type_pb.TokenSwapConfig.toObject(includeInstance, f),
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
 * @return {!proto.forge_abi.UpdateConsensusParamsTx}
 */
proto.forge_abi.UpdateConsensusParamsTx.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.UpdateConsensusParamsTx();
  return proto.forge_abi.UpdateConsensusParamsTx.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.UpdateConsensusParamsTx} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.UpdateConsensusParamsTx}
 */
proto.forge_abi.UpdateConsensusParamsTx.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new type_pb.DelegateConfig();
        reader.readMessage(value, type_pb.DelegateConfig.deserializeBinaryFromReader);
        msg.setDelegateConfig(value);
        break;
      case 2:
        var value = new type_pb.DeclareConfig();
        reader.readMessage(value, type_pb.DeclareConfig.deserializeBinaryFromReader);
        msg.setDeclareConfig(value);
        break;
      case 3:
        var value = new type_pb.TokenSwapConfig();
        reader.readMessage(value, type_pb.TokenSwapConfig.deserializeBinaryFromReader);
        msg.setTokenSwapConfig(value);
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
proto.forge_abi.UpdateConsensusParamsTx.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.UpdateConsensusParamsTx.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.UpdateConsensusParamsTx} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.UpdateConsensusParamsTx.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDelegateConfig();
  if (f != null) {
    writer.writeMessage(1, f, type_pb.DelegateConfig.serializeBinaryToWriter);
  }
  f = message.getDeclareConfig();
  if (f != null) {
    writer.writeMessage(2, f, type_pb.DeclareConfig.serializeBinaryToWriter);
  }
  f = message.getTokenSwapConfig();
  if (f != null) {
    writer.writeMessage(3, f, type_pb.TokenSwapConfig.serializeBinaryToWriter);
  }
};

/**
 * optional DelegateConfig delegate_config = 1;
 * @return {?proto.forge_abi.DelegateConfig}
 */
proto.forge_abi.UpdateConsensusParamsTx.prototype.getDelegateConfig = function() {
  return /** @type{?proto.forge_abi.DelegateConfig} */ (jspb.Message.getWrapperField(this, type_pb.DelegateConfig, 1));
};

/** @param {?proto.forge_abi.DelegateConfig|undefined} value */
proto.forge_abi.UpdateConsensusParamsTx.prototype.setDelegateConfig = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};

proto.forge_abi.UpdateConsensusParamsTx.prototype.clearDelegateConfig = function() {
  this.setDelegateConfig(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.UpdateConsensusParamsTx.prototype.hasDelegateConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional DeclareConfig declare_config = 2;
 * @return {?proto.forge_abi.DeclareConfig}
 */
proto.forge_abi.UpdateConsensusParamsTx.prototype.getDeclareConfig = function() {
  return /** @type{?proto.forge_abi.DeclareConfig} */ (jspb.Message.getWrapperField(this, type_pb.DeclareConfig, 2));
};

/** @param {?proto.forge_abi.DeclareConfig|undefined} value */
proto.forge_abi.UpdateConsensusParamsTx.prototype.setDeclareConfig = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};

proto.forge_abi.UpdateConsensusParamsTx.prototype.clearDeclareConfig = function() {
  this.setDeclareConfig(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.UpdateConsensusParamsTx.prototype.hasDeclareConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * optional TokenSwapConfig token_swap_config = 3;
 * @return {?proto.forge_abi.TokenSwapConfig}
 */
proto.forge_abi.UpdateConsensusParamsTx.prototype.getTokenSwapConfig = function() {
  return /** @type{?proto.forge_abi.TokenSwapConfig} */ (jspb.Message.getWrapperField(
    this,
    type_pb.TokenSwapConfig,
    3
  ));
};

/** @param {?proto.forge_abi.TokenSwapConfig|undefined} value */
proto.forge_abi.UpdateConsensusParamsTx.prototype.setTokenSwapConfig = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};

proto.forge_abi.UpdateConsensusParamsTx.prototype.clearTokenSwapConfig = function() {
  this.setTokenSwapConfig(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.UpdateConsensusParamsTx.prototype.hasTokenSwapConfig = function() {
  return jspb.Message.getField(this, 3) != null;
};

goog.object.extend(exports, proto.forge_abi);

module.exports = proto.forge_abi;
