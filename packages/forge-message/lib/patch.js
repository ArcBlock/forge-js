/* eslint-disable */
/**
 * This patch fixes an issue in `google-protobuf` package
 * After this patch is applied: The deserialize of `map` fields can accept empty values
 */
const assert = require('assert');
const jspb = require('google-protobuf');
const debug = require('debug')(`${require('../package.json').name}:Map`);

// FIXME: remove this patch when `google-protobuf` is enable to handle this
// @link https://github.com/protocolbuffers/protobuf/blob/46a48e49aa/js/map.js#L469
if (typeof jspb.Map.deserializeBinary === 'function' && !jspb.Map.deserializeBinary.__patched__) {
  jspb.Map.deserializeBinary = function (
    map,
    reader,
    keyReaderFn,
    valueReaderFn,
    opt_valueReaderCallback,
    opt_defaultKey = 0
  ) {
    let key = opt_defaultKey;
    let value;

    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      const field = reader.getFieldNumber();
      debug('deserializeBinary.field', field);

      if (field == 1) {
        // Key.
        key = keyReaderFn.call(reader);
        debug('deserializeBinary.key', key);
      } else if (field == 2) {
        debug('deserializeBinary.map', map);
        // Value.
        if (map.valueCtor_) {
          assert(opt_valueReaderCallback, 'opt_valueReaderCallback');
          value = new map.valueCtor_();
          valueReaderFn.call(reader, value, opt_valueReaderCallback);
        } else {
          value = /** @type {function(this:jspb.BinaryReader):?} */ (valueReaderFn).call(reader);
        }
        debug(
          'deserializeBinary.value',
          typeof value.toObject === 'function' ? value.toObject() : value
        );
      }
    }

    // HACK: these assertions are disabled
    // assert(key !== undefined, 'key is undefined');
    // assert(value !== undefined, 'value is undefined');
    if (typeof key !== 'undefined' && typeof value !== 'undefined') {
      map.set(key, value);
    }
  };

  jspb.Map.deserializeBinary.__patched__ = true;
}
