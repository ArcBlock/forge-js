// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

/**
 * Format an message from RPC to UI friendly
 *
 * @public
 * @static
 * @param {string} type - input type
 * @param {object} data - input data
 * @returns {object} [almost same structure as input]
 */
declare function formatMessage(type: string, data: any): any;
/**
 * Create an protobuf encoded Typed message with specified data, ready to send to rpc server
 *
 * @public
 * @static
 * @param {string} type - message type defined in forge-proto
 * @param {object} params - message content
 * @returns {object} Message instance
 * @example
 * const { createMessage } = require('@arcblock/forge-message');
 * const message = createMessage ('CreateAssetTx', {
 *   moniker: 'asset',
 *   address: 'zaAKEJRKQWsdfjksdfjkASRD',
 * });
 *
 * message.getMoniker();  // 'asset'
 * message.getAddress();  // 'zaAKEJRKQWsdfjksdfjkASRD'
 * message.getReadonly(); // false
 * message.setReadonly(true);
 */
declare function createMessage(type: string, params: any): any;
/**
 * Generated a fake message for a type, the message can be RPC request/response
 *
 * @public
 * @static
 * @param {string} type - Message type string, should be defined in forge-abi or forge-core-protocol
 * @returns {object}
 * @example
 * const { fakeMessage} = require('@arcblock/forge-message');
 * const message = fakeMessage('CreateAssetTx');
 * // will output
 * {
 *   moniker: 'arcblock',
 *   data: { type: 'string', value: 'ABCD 1234' },
 *   readonly: true,
 *   transferrable: true,
 *   ttl: 2,
 *   parent: 'arcblock',
 *   address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
 * }
 */
declare function fakeMessage(type: string): any;
/**
 * Decode an google.protobuf.Any%{ typeUrl, value } => { type, value }
 *
 * @public
 * @static
 * @param {object} data encoded data object
 * @returns {object} Object%{type, value}
 */
declare function decodeAny(data: any): any;
/**
 * Encode { type, value } => google.protobuf.Any%{ typeUrl, value }
 * Does nothing on already encoded message
 *
 * @public
 * @static
 * @param {object} data
 * @returns {object} google.protobuf.Any
 */
declare function encodeAny(data: any): any;
/**
 * Convert an { seconds, nanos } | date-string to google.protobuf.Timestamp object
 *
 * @public
 * @static
 * @param {string|object} value
 * @returns {object} instanceof google.protobuf.Timestamp
 */
declare function encodeTimestamp(value: any): any;
/**
 * Decode google.protobuf.Timestamp message to ISO Date String
 *
 * FIXME: node strictly equal because we rounded the `nanos` field
 *
 * @public
 * @static
 * @param {object} data
 * @returns {strong} String timestamp
 */
declare function decodeTimestamp(data: any): any;
/**
 * Encode BigUint and BigSint types defined in forge-sdk, double encoding is avoided
 *
 * @public
 * @static
 * @param {buffer|string|number} value - value to encode
 * @param {string} type - type names defined in forge-proto
 * @returns {object} Message
 */
declare function encodeBigInt(value: any, type: string): any;
/**
 * Convert BigUint and BigSint to string representation of numbers
 *
 * @public
 * @static
 * @link https://stackoverflow.com/questions/23948278/how-to-convert-byte-array-into-a-signed-big-integer-in-javascript
 * @param {object} data - usually from encodeBigInt
 * @param {buffer} data.value
 * @param {boolean} data.minus
 * @returns {string} human readable number
 */
declare function decodeBigInt(data: _ArcblockForgeMessage.T100): string;
/**
 * Attach an $format method to rpc response
 *
 * @private
 * @param {object} data
 * @param {string} type
 */
declare function attachFormatFn(type: string, data: any, key?: string): void;
/**
 * Attach an example method to
 *
 * @private
 * @param {object} data
 * @param {string} type
 */
declare function attachExampleFn(type: string, host: any, key: any): void;
/**
 * Add type provider that can be used to format/create messages
 *
 * @param {object} provider - proto generated from {@see @arcblock/forge-proto}
 */
declare function addProvider(provider: any): void;
declare function getMessageType(type: any): any;
declare function toTypeUrl(type: any): any;
declare function fromTypeUrl(url: any): any;
declare const _ArcblockForgeMessage: _ArcblockForgeMessage.T101;
declare namespace _ArcblockForgeMessage {
  export interface T100 {
    value: any;
    minus: boolean;
  }
  export interface T101 {
    formatMessage: typeof formatMessage;
    createMessage: typeof createMessage;
    fakeMessage: typeof fakeMessage;
    decodeAny: typeof decodeAny;
    encodeAny: typeof encodeAny;
    encodeTimestamp: typeof encodeTimestamp;
    decodeTimestamp: typeof decodeTimestamp;
    encodeBigInt: typeof encodeBigInt;
    decodeBigInt: typeof decodeBigInt;
    attachFormatFn: typeof attachFormatFn;
    attachExampleFn: typeof attachExampleFn;
    addProvider: typeof addProvider;
    getMessageType: typeof getMessageType;
    toTypeUrl: typeof toTypeUrl;
    fromTypeUrl: typeof fromTypeUrl;
  }
}
export = _ArcblockForgeMessage;
