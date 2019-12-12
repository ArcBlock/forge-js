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

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
goog.object.extend(proto, google_protobuf_any_pb);
var type_pb = require('./type_pb.js');
goog.object.extend(proto, type_pb);
goog.exportSymbol('proto.forge_abi.UpdateValidatorTx', null, global);

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
proto.forge_abi.UpdateValidatorTx = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.forge_abi.UpdateValidatorTx.repeatedFields_, null);
};
goog.inherits(proto.forge_abi.UpdateValidatorTx, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.UpdateValidatorTx.displayName = 'proto.forge_abi.UpdateValidatorTx';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.forge_abi.UpdateValidatorTx.repeatedFields_ = [1];

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
  proto.forge_abi.UpdateValidatorTx.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.UpdateValidatorTx.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.UpdateValidatorTx} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.UpdateValidatorTx.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        candidatesList: jspb.Message.toObjectList(msg.getCandidatesList(), type_pb.Validator.toObject, includeInstance),
        data: (f = msg.getData()) && google_protobuf_any_pb.Any.toObject(includeInstance, f),
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
 * @return {!proto.forge_abi.UpdateValidatorTx}
 */
proto.forge_abi.UpdateValidatorTx.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.UpdateValidatorTx();
  return proto.forge_abi.UpdateValidatorTx.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.UpdateValidatorTx} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.UpdateValidatorTx}
 */
proto.forge_abi.UpdateValidatorTx.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new type_pb.Validator();
        reader.readMessage(value, type_pb.Validator.deserializeBinaryFromReader);
        msg.addCandidates(value);
        break;
      case 15:
        var value = new google_protobuf_any_pb.Any();
        reader.readMessage(value, google_protobuf_any_pb.Any.deserializeBinaryFromReader);
        msg.setData(value);
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
proto.forge_abi.UpdateValidatorTx.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.UpdateValidatorTx.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.UpdateValidatorTx} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.UpdateValidatorTx.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCandidatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(1, f, type_pb.Validator.serializeBinaryToWriter);
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(15, f, google_protobuf_any_pb.Any.serializeBinaryToWriter);
  }
};

/**
 * repeated Validator candidates = 1;
 * @return {!Array<!proto.forge_abi.Validator>}
 */
proto.forge_abi.UpdateValidatorTx.prototype.getCandidatesList = function() {
  return /** @type{!Array<!proto.forge_abi.Validator>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    type_pb.Validator,
    1
  ));
};

/** @param {!Array<!proto.forge_abi.Validator>} value */
proto.forge_abi.UpdateValidatorTx.prototype.setCandidatesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.forge_abi.Validator=} opt_value
 * @param {number=} opt_index
 * @return {!proto.forge_abi.Validator}
 */
proto.forge_abi.UpdateValidatorTx.prototype.addCandidates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.forge_abi.Validator, opt_index);
};

proto.forge_abi.UpdateValidatorTx.prototype.clearCandidatesList = function() {
  this.setCandidatesList([]);
};

/**
 * optional google.protobuf.Any data = 15;
 * @return {?proto.google.protobuf.Any}
 */
proto.forge_abi.UpdateValidatorTx.prototype.getData = function() {
  return /** @type{?proto.google.protobuf.Any} */ (jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 15));
};

/** @param {?proto.google.protobuf.Any|undefined} value */
proto.forge_abi.UpdateValidatorTx.prototype.setData = function(value) {
  jspb.Message.setWrapperField(this, 15, value);
};

proto.forge_abi.UpdateValidatorTx.prototype.clearData = function() {
  this.setData(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.UpdateValidatorTx.prototype.hasData = function() {
  return jspb.Message.getField(this, 15) != null;
};

goog.object.extend(exports, proto.forge_abi);

module.exports = proto.forge_abi;
