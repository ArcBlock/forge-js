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
goog.exportSymbol('proto.forge_abi.UpdateAssetTx', null, global);

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
proto.forge_abi.UpdateAssetTx = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.UpdateAssetTx, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.UpdateAssetTx.displayName = 'proto.forge_abi.UpdateAssetTx';
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
  proto.forge_abi.UpdateAssetTx.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.UpdateAssetTx.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.UpdateAssetTx} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.UpdateAssetTx.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        address: jspb.Message.getFieldWithDefault(msg, 1, ''),
        moniker: jspb.Message.getFieldWithDefault(msg, 2, ''),
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
 * @return {!proto.forge_abi.UpdateAssetTx}
 */
proto.forge_abi.UpdateAssetTx.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.UpdateAssetTx();
  return proto.forge_abi.UpdateAssetTx.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.UpdateAssetTx} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.UpdateAssetTx}
 */
proto.forge_abi.UpdateAssetTx.deserializeBinaryFromReader = function(msg, reader) {
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
        msg.setMoniker(value);
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
proto.forge_abi.UpdateAssetTx.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.UpdateAssetTx.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.UpdateAssetTx} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.UpdateAssetTx.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getMoniker();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(15, f, google_protobuf_any_pb.Any.serializeBinaryToWriter);
  }
};

/**
 * optional string address = 1;
 * @return {string}
 */
proto.forge_abi.UpdateAssetTx.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/** @param {string} value */
proto.forge_abi.UpdateAssetTx.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string moniker = 2;
 * @return {string}
 */
proto.forge_abi.UpdateAssetTx.prototype.getMoniker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/** @param {string} value */
proto.forge_abi.UpdateAssetTx.prototype.setMoniker = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional google.protobuf.Any data = 15;
 * @return {?proto.google.protobuf.Any}
 */
proto.forge_abi.UpdateAssetTx.prototype.getData = function() {
  return /** @type{?proto.google.protobuf.Any} */ (jspb.Message.getWrapperField(
    this,
    google_protobuf_any_pb.Any,
    15
  ));
};

/** @param {?proto.google.protobuf.Any|undefined} value */
proto.forge_abi.UpdateAssetTx.prototype.setData = function(value) {
  jspb.Message.setWrapperField(this, 15, value);
};

proto.forge_abi.UpdateAssetTx.prototype.clearData = function() {
  this.setData(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.UpdateAssetTx.prototype.hasData = function() {
  return jspb.Message.getField(this, 15) != null;
};

goog.object.extend(exports, proto.forge_abi);

module.exports = proto.forge_abi;
