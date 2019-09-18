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
goog.exportSymbol('proto.forge_abi.ApproveWithdrawTx', null, global);

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
proto.forge_abi.ApproveWithdrawTx = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.ApproveWithdrawTx, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.ApproveWithdrawTx.displayName = 'proto.forge_abi.ApproveWithdrawTx';
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
proto.forge_abi.ApproveWithdrawTx.prototype.toObject = function(opt_includeInstance) {
  return proto.forge_abi.ApproveWithdrawTx.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.forge_abi.ApproveWithdrawTx} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ApproveWithdrawTx.toObject = function(includeInstance, msg) {
  var f, obj = {
    withdrawTxHash: jspb.Message.getFieldWithDefault(msg, 1, ""),
    evidence: (f = msg.getEvidence()) && type_pb.Evidence.toObject(includeInstance, f)
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
 * @return {!proto.forge_abi.ApproveWithdrawTx}
 */
proto.forge_abi.ApproveWithdrawTx.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.ApproveWithdrawTx;
  return proto.forge_abi.ApproveWithdrawTx.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.ApproveWithdrawTx} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.ApproveWithdrawTx}
 */
proto.forge_abi.ApproveWithdrawTx.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWithdrawTxHash(value);
      break;
    case 2:
      var value = new type_pb.Evidence;
      reader.readMessage(value,type_pb.Evidence.deserializeBinaryFromReader);
      msg.setEvidence(value);
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
proto.forge_abi.ApproveWithdrawTx.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.ApproveWithdrawTx.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.ApproveWithdrawTx} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.ApproveWithdrawTx.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWithdrawTxHash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEvidence();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      type_pb.Evidence.serializeBinaryToWriter
    );
  }
};


/**
 * optional string withdraw_tx_hash = 1;
 * @return {string}
 */
proto.forge_abi.ApproveWithdrawTx.prototype.getWithdrawTxHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.forge_abi.ApproveWithdrawTx.prototype.setWithdrawTxHash = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Evidence evidence = 2;
 * @return {?proto.forge_abi.Evidence}
 */
proto.forge_abi.ApproveWithdrawTx.prototype.getEvidence = function() {
  return /** @type{?proto.forge_abi.Evidence} */ (
    jspb.Message.getWrapperField(this, type_pb.Evidence, 2));
};


/** @param {?proto.forge_abi.Evidence|undefined} value */
proto.forge_abi.ApproveWithdrawTx.prototype.setEvidence = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.forge_abi.ApproveWithdrawTx.prototype.clearEvidence = function() {
  this.setEvidence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.ApproveWithdrawTx.prototype.hasEvidence = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.forge_abi);

module.exports = proto.forge_abi;
