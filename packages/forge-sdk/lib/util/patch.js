/**
 * This patch fixes an issue in `google-protobuf` package
 * After this patch is applied: The deserialize of `map` fields can accept empty values
 */
const assert = require('assert');
const jspb = require('google-protobuf');
const debug = require('debug')(`${require('../../package.json').name}:patch`);

// FIXME: remove this patch when `google-protobuf` is enable to handle this
// @link
if (typeof jspb.Map.deserializeBinary === 'function' && !jspb.Map.deserializeBinary.__patched__) {
  jspb.Map.deserializeBinary = function(
    map,
    reader,
    keyReaderFn,
    valueReaderFn,
    opt_valueReaderCallback,
    opt_defaultKey = 0
  ) {
    var key = opt_defaultKey;
    var value = undefined;

    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      debug('deserializeBinary.field', field);

      if (field == 1) {
        // Key.
        key = keyReaderFn.call(reader);
      } else if (field == 2) {
        // Value.
        if (map.valueCtor_) {
          assert(opt_valueReaderCallback, 'opt_valueReaderCallback');
          value = new map.valueCtor_();
          valueReaderFn.call(reader, value, opt_valueReaderCallback);
        } else {
          value = /** @type {function(this:jspb.BinaryReader):?} */ (valueReaderFn).call(reader);
        }
      }
    }

    debug('deserializeBinary.map', typeof map.set);
    debug('deserializeBinary.key', key);
    debug('deserializeBinary.value', value.toObject());
    // HACK: these assertions are removed
    // assert(key !== undefined, 'key is undefined');
    // assert(value !== undefined, 'value is undefined');
    if (typeof key !== 'undefined') {
      map.set(key, value);
      debug('deserializeBinary.after', map.get(key).toObject());
    }
  };

  jspb.Map.deserializeBinary.__patched__ = true;
}
