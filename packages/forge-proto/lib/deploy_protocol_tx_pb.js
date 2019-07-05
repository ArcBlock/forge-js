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
goog.exportSymbol('proto.forge_abi.CodeInfo', null, global);
goog.exportSymbol('proto.forge_abi.DeployProtocolTx', null, global);
goog.exportSymbol('proto.forge_abi.TypeUrls', null, global);

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
proto.forge_abi.CodeInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.CodeInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.CodeInfo.displayName = 'proto.forge_abi.CodeInfo';
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
proto.forge_abi.CodeInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.forge_abi.CodeInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.forge_abi.CodeInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.CodeInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    checksum: msg.getChecksum(),
    binary: msg.getBinary()
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
 * @return {!proto.forge_abi.CodeInfo}
 */
proto.forge_abi.CodeInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.CodeInfo;
  return proto.forge_abi.CodeInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.CodeInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.CodeInfo}
 */
proto.forge_abi.CodeInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setChecksum(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBinary(value);
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
proto.forge_abi.CodeInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.CodeInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.CodeInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.CodeInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChecksum_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getBinary_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional bytes checksum = 1;
 * @return {!(string|Uint8Array)}
 */
proto.forge_abi.CodeInfo.prototype.getChecksum = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes checksum = 1;
 * This is a type-conversion wrapper around `getChecksum()`
 * @return {string}
 */
proto.forge_abi.CodeInfo.prototype.getChecksum_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getChecksum()));
};


/**
 * optional bytes checksum = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getChecksum()`
 * @return {!Uint8Array}
 */
proto.forge_abi.CodeInfo.prototype.getChecksum_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getChecksum()));
};


/** @param {!(string|Uint8Array)} value */
proto.forge_abi.CodeInfo.prototype.setChecksum = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes binary = 2;
 * @return {!(string|Uint8Array)}
 */
proto.forge_abi.CodeInfo.prototype.getBinary = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes binary = 2;
 * This is a type-conversion wrapper around `getBinary()`
 * @return {string}
 */
proto.forge_abi.CodeInfo.prototype.getBinary_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBinary()));
};


/**
 * optional bytes binary = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBinary()`
 * @return {!Uint8Array}
 */
proto.forge_abi.CodeInfo.prototype.getBinary_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBinary()));
};


/** @param {!(string|Uint8Array)} value */
proto.forge_abi.CodeInfo.prototype.setBinary = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};



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
proto.forge_abi.TypeUrls = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.TypeUrls, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.TypeUrls.displayName = 'proto.forge_abi.TypeUrls';
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
proto.forge_abi.TypeUrls.prototype.toObject = function(opt_includeInstance) {
  return proto.forge_abi.TypeUrls.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.forge_abi.TypeUrls} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.TypeUrls.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, ""),
    module: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.forge_abi.TypeUrls}
 */
proto.forge_abi.TypeUrls.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.TypeUrls;
  return proto.forge_abi.TypeUrls.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.TypeUrls} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.TypeUrls}
 */
proto.forge_abi.TypeUrls.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setModule(value);
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
proto.forge_abi.TypeUrls.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.TypeUrls.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.TypeUrls} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.TypeUrls.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getModule();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.forge_abi.TypeUrls.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.forge_abi.TypeUrls.prototype.setUrl = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string module = 2;
 * @return {string}
 */
proto.forge_abi.TypeUrls.prototype.getModule = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.forge_abi.TypeUrls.prototype.setModule = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



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
proto.forge_abi.DeployProtocolTx = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.forge_abi.DeployProtocolTx.repeatedFields_, null);
};
goog.inherits(proto.forge_abi.DeployProtocolTx, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.DeployProtocolTx.displayName = 'proto.forge_abi.DeployProtocolTx';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.forge_abi.DeployProtocolTx.repeatedFields_ = [6,9,10,11];



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
proto.forge_abi.DeployProtocolTx.prototype.toObject = function(opt_includeInstance) {
  return proto.forge_abi.DeployProtocolTx.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.forge_abi.DeployProtocolTx} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.DeployProtocolTx.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    version: jspb.Message.getFieldWithDefault(msg, 3, 0),
    namespace: jspb.Message.getFieldWithDefault(msg, 4, ""),
    description: jspb.Message.getFieldWithDefault(msg, 5, ""),
    typeUrlsList: jspb.Message.toObjectList(msg.getTypeUrlsList(),
    proto.forge_abi.TypeUrls.toObject, includeInstance),
    proto: jspb.Message.getFieldWithDefault(msg, 7, ""),
    pipeline: jspb.Message.getFieldWithDefault(msg, 8, ""),
    sourcesList: jspb.Message.getRepeatedField(msg, 9),
    codeList: jspb.Message.toObjectList(msg.getCodeList(),
    proto.forge_abi.CodeInfo.toObject, includeInstance),
    tagsList: jspb.Message.getRepeatedField(msg, 11),
    data: (f = msg.getData()) && google_protobuf_any_pb.Any.toObject(includeInstance, f)
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
 * @return {!proto.forge_abi.DeployProtocolTx}
 */
proto.forge_abi.DeployProtocolTx.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.DeployProtocolTx;
  return proto.forge_abi.DeployProtocolTx.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.DeployProtocolTx} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.DeployProtocolTx}
 */
proto.forge_abi.DeployProtocolTx.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVersion(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 6:
      var value = new proto.forge_abi.TypeUrls;
      reader.readMessage(value,proto.forge_abi.TypeUrls.deserializeBinaryFromReader);
      msg.addTypeUrls(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setProto(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setPipeline(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addSources(value);
      break;
    case 10:
      var value = new proto.forge_abi.CodeInfo;
      reader.readMessage(value,proto.forge_abi.CodeInfo.deserializeBinaryFromReader);
      msg.addCode(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 15:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
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
proto.forge_abi.DeployProtocolTx.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.DeployProtocolTx.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.DeployProtocolTx} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.DeployProtocolTx.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVersion();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTypeUrlsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.forge_abi.TypeUrls.serializeBinaryToWriter
    );
  }
  f = message.getProto();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getPipeline();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getSourcesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
  f = message.getCodeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.forge_abi.CodeInfo.serializeBinaryToWriter
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      11,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.forge_abi.DeployProtocolTx.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.forge_abi.DeployProtocolTx.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.forge_abi.DeployProtocolTx.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.forge_abi.DeployProtocolTx.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 version = 3;
 * @return {number}
 */
proto.forge_abi.DeployProtocolTx.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.forge_abi.DeployProtocolTx.prototype.setVersion = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string namespace = 4;
 * @return {string}
 */
proto.forge_abi.DeployProtocolTx.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.forge_abi.DeployProtocolTx.prototype.setNamespace = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.forge_abi.DeployProtocolTx.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.forge_abi.DeployProtocolTx.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated TypeUrls type_urls = 6;
 * @return {!Array<!proto.forge_abi.TypeUrls>}
 */
proto.forge_abi.DeployProtocolTx.prototype.getTypeUrlsList = function() {
  return /** @type{!Array<!proto.forge_abi.TypeUrls>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.forge_abi.TypeUrls, 6));
};


/** @param {!Array<!proto.forge_abi.TypeUrls>} value */
proto.forge_abi.DeployProtocolTx.prototype.setTypeUrlsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.forge_abi.TypeUrls=} opt_value
 * @param {number=} opt_index
 * @return {!proto.forge_abi.TypeUrls}
 */
proto.forge_abi.DeployProtocolTx.prototype.addTypeUrls = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.forge_abi.TypeUrls, opt_index);
};


proto.forge_abi.DeployProtocolTx.prototype.clearTypeUrlsList = function() {
  this.setTypeUrlsList([]);
};


/**
 * optional string proto = 7;
 * @return {string}
 */
proto.forge_abi.DeployProtocolTx.prototype.getProto = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.forge_abi.DeployProtocolTx.prototype.setProto = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string pipeline = 8;
 * @return {string}
 */
proto.forge_abi.DeployProtocolTx.prototype.getPipeline = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.forge_abi.DeployProtocolTx.prototype.setPipeline = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * repeated string sources = 9;
 * @return {!Array<string>}
 */
proto.forge_abi.DeployProtocolTx.prototype.getSourcesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/** @param {!Array<string>} value */
proto.forge_abi.DeployProtocolTx.prototype.setSourcesList = function(value) {
  jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.forge_abi.DeployProtocolTx.prototype.addSources = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


proto.forge_abi.DeployProtocolTx.prototype.clearSourcesList = function() {
  this.setSourcesList([]);
};


/**
 * repeated CodeInfo code = 10;
 * @return {!Array<!proto.forge_abi.CodeInfo>}
 */
proto.forge_abi.DeployProtocolTx.prototype.getCodeList = function() {
  return /** @type{!Array<!proto.forge_abi.CodeInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.forge_abi.CodeInfo, 10));
};


/** @param {!Array<!proto.forge_abi.CodeInfo>} value */
proto.forge_abi.DeployProtocolTx.prototype.setCodeList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.forge_abi.CodeInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.forge_abi.CodeInfo}
 */
proto.forge_abi.DeployProtocolTx.prototype.addCode = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.forge_abi.CodeInfo, opt_index);
};


proto.forge_abi.DeployProtocolTx.prototype.clearCodeList = function() {
  this.setCodeList([]);
};


/**
 * repeated string tags = 11;
 * @return {!Array<string>}
 */
proto.forge_abi.DeployProtocolTx.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/** @param {!Array<string>} value */
proto.forge_abi.DeployProtocolTx.prototype.setTagsList = function(value) {
  jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.forge_abi.DeployProtocolTx.prototype.addTags = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


proto.forge_abi.DeployProtocolTx.prototype.clearTagsList = function() {
  this.setTagsList([]);
};


/**
 * optional google.protobuf.Any data = 15;
 * @return {?proto.google.protobuf.Any}
 */
proto.forge_abi.DeployProtocolTx.prototype.getData = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 15));
};


/** @param {?proto.google.protobuf.Any|undefined} value */
proto.forge_abi.DeployProtocolTx.prototype.setData = function(value) {
  jspb.Message.setWrapperField(this, 15, value);
};


proto.forge_abi.DeployProtocolTx.prototype.clearData = function() {
  this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.DeployProtocolTx.prototype.hasData = function() {
  return jspb.Message.getField(this, 15) != null;
};


goog.object.extend(exports, proto.forge_abi);

module.exports = proto.forge_abi;
