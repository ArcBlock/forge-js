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
var code_pb = require('./code_pb.js');
var type_pb = require('./type_pb.js');
goog.exportSymbol('proto.forge_abi.RequestSubscribe', null, global);
goog.exportSymbol('proto.forge_abi.ResponseSubscribe', null, global);
goog.exportSymbol('proto.forge_abi.TopicType', null, global);

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
  proto.forge_abi.RequestSubscribe.displayName = 'proto.forge_abi.RequestSubscribe';
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
  proto.forge_abi.RequestSubscribe.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.RequestSubscribe.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.forge_abi.RequestSubscribe} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.forge_abi.RequestSubscribe.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        type: jspb.Message.getFieldWithDefault(msg, 1, 0),
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
        var value = /** @type {!proto.forge_abi.TopicType} */ (reader.readEnum());
        msg.setType(value);
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
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

/**
 * optional TopicType type = 1;
 * @return {!proto.forge_abi.TopicType}
 */
proto.forge_abi.RequestSubscribe.prototype.getType = function() {
  return /** @type {!proto.forge_abi.TopicType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/** @param {!proto.forge_abi.TopicType} value */
proto.forge_abi.RequestSubscribe.prototype.setType = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * optional string filter = 2;
 * @return {string}
 */
proto.forge_abi.RequestSubscribe.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/** @param {string} value */
proto.forge_abi.RequestSubscribe.prototype.setFilter = function(value) {
  jspb.Message.setField(this, 2, value);
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
proto.forge_abi.ResponseSubscribe = function(opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    null,
    proto.forge_abi.ResponseSubscribe.oneofGroups_
  );
};
goog.inherits(proto.forge_abi.ResponseSubscribe, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.ResponseSubscribe.displayName = 'proto.forge_abi.ResponseSubscribe';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.forge_abi.ResponseSubscribe.oneofGroups_ = [
  [2, 3, 4, 5, 6, 7, 8, 16, 17, 19, 20, 21, 22, 23, 24, 129, 130, 131, 132, 133],
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
  REVOKE: 8,
  BEGIN_BLOCK: 16,
  END_BLOCK: 17,
  DECLARE: 19,
  UPDATE_ASSET: 20,
  CONSENSUS_UPGRADE: 21,
  DECLARE_FILE: 22,
  SYS_UPGRADE: 23,
  STAKE: 24,
  ACCOUNT_STATE: 129,
  ASSET_STATE: 130,
  CHANNEL_STATE: 131,
  FORGE_STATE: 132,
  STAKE_STATE: 133,
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
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.forge_abi.ResponseSubscribe.prototype.toObject = function(opt_includeInstance) {
    return proto.forge_abi.ResponseSubscribe.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
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
        accountMigrate:
          (f = msg.getAccountMigrate()) && type_pb.Transaction.toObject(includeInstance, f),
        confirm: (f = msg.getConfirm()) && type_pb.Transaction.toObject(includeInstance, f),
        createAsset: (f = msg.getCreateAsset()) && type_pb.Transaction.toObject(includeInstance, f),
        exchange: (f = msg.getExchange()) && type_pb.Transaction.toObject(includeInstance, f),
        revoke: (f = msg.getRevoke()) && type_pb.Transaction.toObject(includeInstance, f),
        beginBlock:
          (f = msg.getBeginBlock()) && vendor_pb.RequestBeginBlock.toObject(includeInstance, f),
        endBlock: (f = msg.getEndBlock()) && vendor_pb.RequestEndBlock.toObject(includeInstance, f),
        declare: (f = msg.getDeclare()) && type_pb.Transaction.toObject(includeInstance, f),
        updateAsset: (f = msg.getUpdateAsset()) && type_pb.Transaction.toObject(includeInstance, f),
        consensusUpgrade:
          (f = msg.getConsensusUpgrade()) && type_pb.Transaction.toObject(includeInstance, f),
        declareFile: (f = msg.getDeclareFile()) && type_pb.Transaction.toObject(includeInstance, f),
        sysUpgrade: (f = msg.getSysUpgrade()) && type_pb.Transaction.toObject(includeInstance, f),
        stake: (f = msg.getStake()) && type_pb.Transaction.toObject(includeInstance, f),
        accountState:
          (f = msg.getAccountState()) && type_pb.Transaction.toObject(includeInstance, f),
        assetState: (f = msg.getAssetState()) && type_pb.Transaction.toObject(includeInstance, f),
        channelState:
          (f = msg.getChannelState()) && type_pb.Transaction.toObject(includeInstance, f),
        forgeState: (f = msg.getForgeState()) && type_pb.Transaction.toObject(includeInstance, f),
        stakeState: (f = msg.getStakeState()) && type_pb.Transaction.toObject(includeInstance, f),
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
      case 8:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setRevoke(value);
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
      case 22:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setDeclareFile(value);
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
      case 129:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setAccountState(value);
        break;
      case 130:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setAssetState(value);
        break;
      case 131:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setChannelState(value);
        break;
      case 132:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setForgeState(value);
        break;
      case 133:
        var value = new type_pb.Transaction();
        reader.readMessage(value, type_pb.Transaction.deserializeBinaryFromReader);
        msg.setStakeState(value);
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
  f = message.getRevoke();
  if (f != null) {
    writer.writeMessage(8, f, type_pb.Transaction.serializeBinaryToWriter);
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
  f = message.getDeclareFile();
  if (f != null) {
    writer.writeMessage(22, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getSysUpgrade();
  if (f != null) {
    writer.writeMessage(23, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getStake();
  if (f != null) {
    writer.writeMessage(24, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getAccountState();
  if (f != null) {
    writer.writeMessage(129, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getAssetState();
  if (f != null) {
    writer.writeMessage(130, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getChannelState();
  if (f != null) {
    writer.writeMessage(131, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getForgeState();
  if (f != null) {
    writer.writeMessage(132, f, type_pb.Transaction.serializeBinaryToWriter);
  }
  f = message.getStakeState();
  if (f != null) {
    writer.writeMessage(133, f, type_pb.Transaction.serializeBinaryToWriter);
  }
};

/**
 * optional StatusCode code = 1;
 * @return {!proto.forge_abi.StatusCode}
 */
proto.forge_abi.ResponseSubscribe.prototype.getCode = function() {
  return /** @type {!proto.forge_abi.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/** @param {!proto.forge_abi.StatusCode} value */
proto.forge_abi.ResponseSubscribe.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * optional string topic = 2;
 * @return {string}
 */
proto.forge_abi.ResponseSubscribe.prototype.getTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/** @param {string} value */
proto.forge_abi.ResponseSubscribe.prototype.setTopic = function(value) {
  jspb.Message.setOneofField(this, 2, proto.forge_abi.ResponseSubscribe.oneofGroups_[0], value);
};

proto.forge_abi.ResponseSubscribe.prototype.clearTopic = function() {
  jspb.Message.setOneofField(this, 2, proto.forge_abi.ResponseSubscribe.oneofGroups_[0], undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasTopic = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * optional Transaction transfer = 3;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getTransfer = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(
    this,
    type_pb.Transaction,
    3
  ));
};

/** @param {?proto.forge_abi.Transaction|undefined} value */
proto.forge_abi.ResponseSubscribe.prototype.setTransfer = function(value) {
  jspb.Message.setOneofWrapperField(
    this,
    3,
    proto.forge_abi.ResponseSubscribe.oneofGroups_[0],
    value
  );
};

proto.forge_abi.ResponseSubscribe.prototype.clearTransfer = function() {
  this.setTransfer(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasTransfer = function() {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * optional Transaction account_migrate = 4;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getAccountMigrate = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(
    this,
    type_pb.Transaction,
    4
  ));
};

/** @param {?proto.forge_abi.Transaction|undefined} value */
proto.forge_abi.ResponseSubscribe.prototype.setAccountMigrate = function(value) {
  jspb.Message.setOneofWrapperField(
    this,
    4,
    proto.forge_abi.ResponseSubscribe.oneofGroups_[0],
    value
  );
};

proto.forge_abi.ResponseSubscribe.prototype.clearAccountMigrate = function() {
  this.setAccountMigrate(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasAccountMigrate = function() {
  return jspb.Message.getField(this, 4) != null;
};

/**
 * optional Transaction confirm = 5;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getConfirm = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(
    this,
    type_pb.Transaction,
    5
  ));
};

/** @param {?proto.forge_abi.Transaction|undefined} value */
proto.forge_abi.ResponseSubscribe.prototype.setConfirm = function(value) {
  jspb.Message.setOneofWrapperField(
    this,
    5,
    proto.forge_abi.ResponseSubscribe.oneofGroups_[0],
    value
  );
};

proto.forge_abi.ResponseSubscribe.prototype.clearConfirm = function() {
  this.setConfirm(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasConfirm = function() {
  return jspb.Message.getField(this, 5) != null;
};

/**
 * optional Transaction create_asset = 6;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getCreateAsset = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(
    this,
    type_pb.Transaction,
    6
  ));
};

/** @param {?proto.forge_abi.Transaction|undefined} value */
proto.forge_abi.ResponseSubscribe.prototype.setCreateAsset = function(value) {
  jspb.Message.setOneofWrapperField(
    this,
    6,
    proto.forge_abi.ResponseSubscribe.oneofGroups_[0],
    value
  );
};

proto.forge_abi.ResponseSubscribe.prototype.clearCreateAsset = function() {
  this.setCreateAsset(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasCreateAsset = function() {
  return jspb.Message.getField(this, 6) != null;
};

/**
 * optional Transaction exchange = 7;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getExchange = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(
    this,
    type_pb.Transaction,
    7
  ));
};

/** @param {?proto.forge_abi.Transaction|undefined} value */
proto.forge_abi.ResponseSubscribe.prototype.setExchange = function(value) {
  jspb.Message.setOneofWrapperField(
    this,
    7,
    proto.forge_abi.ResponseSubscribe.oneofGroups_[0],
    value
  );
};

proto.forge_abi.ResponseSubscribe.prototype.clearExchange = function() {
  this.setExchange(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasExchange = function() {
  return jspb.Message.getField(this, 7) != null;
};

/**
 * optional Transaction revoke = 8;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getRevoke = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(
    this,
    type_pb.Transaction,
    8
  ));
};

/** @param {?proto.forge_abi.Transaction|undefined} value */
proto.forge_abi.ResponseSubscribe.prototype.setRevoke = function(value) {
  jspb.Message.setOneofWrapperField(
    this,
    8,
    proto.forge_abi.ResponseSubscribe.oneofGroups_[0],
    value
  );
};

proto.forge_abi.ResponseSubscribe.prototype.clearRevoke = function() {
  this.setRevoke(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasRevoke = function() {
  return jspb.Message.getField(this, 8) != null;
};

/**
 * optional forge_vendor.RequestBeginBlock begin_block = 16;
 * @return {?proto.forge_vendor.RequestBeginBlock}
 */
proto.forge_abi.ResponseSubscribe.prototype.getBeginBlock = function() {
  return /** @type{?proto.forge_vendor.RequestBeginBlock} */ (jspb.Message.getWrapperField(
    this,
    vendor_pb.RequestBeginBlock,
    16
  ));
};

/** @param {?proto.forge_vendor.RequestBeginBlock|undefined} value */
proto.forge_abi.ResponseSubscribe.prototype.setBeginBlock = function(value) {
  jspb.Message.setOneofWrapperField(
    this,
    16,
    proto.forge_abi.ResponseSubscribe.oneofGroups_[0],
    value
  );
};

proto.forge_abi.ResponseSubscribe.prototype.clearBeginBlock = function() {
  this.setBeginBlock(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasBeginBlock = function() {
  return jspb.Message.getField(this, 16) != null;
};

/**
 * optional forge_vendor.RequestEndBlock end_block = 17;
 * @return {?proto.forge_vendor.RequestEndBlock}
 */
proto.forge_abi.ResponseSubscribe.prototype.getEndBlock = function() {
  return /** @type{?proto.forge_vendor.RequestEndBlock} */ (jspb.Message.getWrapperField(
    this,
    vendor_pb.RequestEndBlock,
    17
  ));
};

/** @param {?proto.forge_vendor.RequestEndBlock|undefined} value */
proto.forge_abi.ResponseSubscribe.prototype.setEndBlock = function(value) {
  jspb.Message.setOneofWrapperField(
    this,
    17,
    proto.forge_abi.ResponseSubscribe.oneofGroups_[0],
    value
  );
};

proto.forge_abi.ResponseSubscribe.prototype.clearEndBlock = function() {
  this.setEndBlock(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasEndBlock = function() {
  return jspb.Message.getField(this, 17) != null;
};

/**
 * optional Transaction declare = 19;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getDeclare = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(
    this,
    type_pb.Transaction,
    19
  ));
};

/** @param {?proto.forge_abi.Transaction|undefined} value */
proto.forge_abi.ResponseSubscribe.prototype.setDeclare = function(value) {
  jspb.Message.setOneofWrapperField(
    this,
    19,
    proto.forge_abi.ResponseSubscribe.oneofGroups_[0],
    value
  );
};

proto.forge_abi.ResponseSubscribe.prototype.clearDeclare = function() {
  this.setDeclare(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasDeclare = function() {
  return jspb.Message.getField(this, 19) != null;
};

/**
 * optional Transaction update_asset = 20;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getUpdateAsset = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(
    this,
    type_pb.Transaction,
    20
  ));
};

/** @param {?proto.forge_abi.Transaction|undefined} value */
proto.forge_abi.ResponseSubscribe.prototype.setUpdateAsset = function(value) {
  jspb.Message.setOneofWrapperField(
    this,
    20,
    proto.forge_abi.ResponseSubscribe.oneofGroups_[0],
    value
  );
};

proto.forge_abi.ResponseSubscribe.prototype.clearUpdateAsset = function() {
  this.setUpdateAsset(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasUpdateAsset = function() {
  return jspb.Message.getField(this, 20) != null;
};

/**
 * optional Transaction consensus_upgrade = 21;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getConsensusUpgrade = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(
    this,
    type_pb.Transaction,
    21
  ));
};

/** @param {?proto.forge_abi.Transaction|undefined} value */
proto.forge_abi.ResponseSubscribe.prototype.setConsensusUpgrade = function(value) {
  jspb.Message.setOneofWrapperField(
    this,
    21,
    proto.forge_abi.ResponseSubscribe.oneofGroups_[0],
    value
  );
};

proto.forge_abi.ResponseSubscribe.prototype.clearConsensusUpgrade = function() {
  this.setConsensusUpgrade(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasConsensusUpgrade = function() {
  return jspb.Message.getField(this, 21) != null;
};

/**
 * optional Transaction declare_file = 22;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getDeclareFile = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(
    this,
    type_pb.Transaction,
    22
  ));
};

/** @param {?proto.forge_abi.Transaction|undefined} value */
proto.forge_abi.ResponseSubscribe.prototype.setDeclareFile = function(value) {
  jspb.Message.setOneofWrapperField(
    this,
    22,
    proto.forge_abi.ResponseSubscribe.oneofGroups_[0],
    value
  );
};

proto.forge_abi.ResponseSubscribe.prototype.clearDeclareFile = function() {
  this.setDeclareFile(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasDeclareFile = function() {
  return jspb.Message.getField(this, 22) != null;
};

/**
 * optional Transaction sys_upgrade = 23;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getSysUpgrade = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(
    this,
    type_pb.Transaction,
    23
  ));
};

/** @param {?proto.forge_abi.Transaction|undefined} value */
proto.forge_abi.ResponseSubscribe.prototype.setSysUpgrade = function(value) {
  jspb.Message.setOneofWrapperField(
    this,
    23,
    proto.forge_abi.ResponseSubscribe.oneofGroups_[0],
    value
  );
};

proto.forge_abi.ResponseSubscribe.prototype.clearSysUpgrade = function() {
  this.setSysUpgrade(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasSysUpgrade = function() {
  return jspb.Message.getField(this, 23) != null;
};

/**
 * optional Transaction stake = 24;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getStake = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(
    this,
    type_pb.Transaction,
    24
  ));
};

/** @param {?proto.forge_abi.Transaction|undefined} value */
proto.forge_abi.ResponseSubscribe.prototype.setStake = function(value) {
  jspb.Message.setOneofWrapperField(
    this,
    24,
    proto.forge_abi.ResponseSubscribe.oneofGroups_[0],
    value
  );
};

proto.forge_abi.ResponseSubscribe.prototype.clearStake = function() {
  this.setStake(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasStake = function() {
  return jspb.Message.getField(this, 24) != null;
};

/**
 * optional Transaction account_state = 129;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getAccountState = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(
    this,
    type_pb.Transaction,
    129
  ));
};

/** @param {?proto.forge_abi.Transaction|undefined} value */
proto.forge_abi.ResponseSubscribe.prototype.setAccountState = function(value) {
  jspb.Message.setOneofWrapperField(
    this,
    129,
    proto.forge_abi.ResponseSubscribe.oneofGroups_[0],
    value
  );
};

proto.forge_abi.ResponseSubscribe.prototype.clearAccountState = function() {
  this.setAccountState(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasAccountState = function() {
  return jspb.Message.getField(this, 129) != null;
};

/**
 * optional Transaction asset_state = 130;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getAssetState = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(
    this,
    type_pb.Transaction,
    130
  ));
};

/** @param {?proto.forge_abi.Transaction|undefined} value */
proto.forge_abi.ResponseSubscribe.prototype.setAssetState = function(value) {
  jspb.Message.setOneofWrapperField(
    this,
    130,
    proto.forge_abi.ResponseSubscribe.oneofGroups_[0],
    value
  );
};

proto.forge_abi.ResponseSubscribe.prototype.clearAssetState = function() {
  this.setAssetState(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasAssetState = function() {
  return jspb.Message.getField(this, 130) != null;
};

/**
 * optional Transaction channel_state = 131;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getChannelState = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(
    this,
    type_pb.Transaction,
    131
  ));
};

/** @param {?proto.forge_abi.Transaction|undefined} value */
proto.forge_abi.ResponseSubscribe.prototype.setChannelState = function(value) {
  jspb.Message.setOneofWrapperField(
    this,
    131,
    proto.forge_abi.ResponseSubscribe.oneofGroups_[0],
    value
  );
};

proto.forge_abi.ResponseSubscribe.prototype.clearChannelState = function() {
  this.setChannelState(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasChannelState = function() {
  return jspb.Message.getField(this, 131) != null;
};

/**
 * optional Transaction forge_state = 132;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getForgeState = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(
    this,
    type_pb.Transaction,
    132
  ));
};

/** @param {?proto.forge_abi.Transaction|undefined} value */
proto.forge_abi.ResponseSubscribe.prototype.setForgeState = function(value) {
  jspb.Message.setOneofWrapperField(
    this,
    132,
    proto.forge_abi.ResponseSubscribe.oneofGroups_[0],
    value
  );
};

proto.forge_abi.ResponseSubscribe.prototype.clearForgeState = function() {
  this.setForgeState(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasForgeState = function() {
  return jspb.Message.getField(this, 132) != null;
};

/**
 * optional Transaction stake_state = 133;
 * @return {?proto.forge_abi.Transaction}
 */
proto.forge_abi.ResponseSubscribe.prototype.getStakeState = function() {
  return /** @type{?proto.forge_abi.Transaction} */ (jspb.Message.getWrapperField(
    this,
    type_pb.Transaction,
    133
  ));
};

/** @param {?proto.forge_abi.Transaction|undefined} value */
proto.forge_abi.ResponseSubscribe.prototype.setStakeState = function(value) {
  jspb.Message.setOneofWrapperField(
    this,
    133,
    proto.forge_abi.ResponseSubscribe.oneofGroups_[0],
    value
  );
};

proto.forge_abi.ResponseSubscribe.prototype.clearStakeState = function() {
  this.setStakeState(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.forge_abi.ResponseSubscribe.prototype.hasStakeState = function() {
  return jspb.Message.getField(this, 133) != null;
};

/**
 * @enum {number}
 */
proto.forge_abi.TopicType = {
  TRANSFER: 0,
  ACCOUNT_MIGRATE: 1,
  CONFIRM: 2,
  CREATE_ASSET: 3,
  EXCHANGE: 4,
  REVOKE: 5,
  BEGIN_BLOCK: 16,
  END_BLOCK: 17,
  DECLARE: 19,
  UPDATE_ASSET: 20,
  CONSENSUS_UPGRADE: 21,
  DECLARE_FILE: 22,
  SYS_UPGRADE: 23,
  STAKE: 24,
  ACCOUNT_STATE: 129,
  ASSET_STATE: 130,
  CHANNEL_STATE: 131,
  FORGE_STATE: 132,
  STAKE_STATE: 133,
};

goog.object.extend(exports, proto.forge_abi);

module.exports = proto.forge_abi;
