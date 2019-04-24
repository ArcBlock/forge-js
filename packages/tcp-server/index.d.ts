// Generate by [js2dts@0.3.2](https://github.com/whxaxes/js2dts#readme)

import { Buffer } from 'node/globals';
/**
 * Create new TCP Server to handle transactions from forge-core
 *
 * @param {*} config
 * @returns net.Server
 */
declare function create(config: any): Readonly<TcpServer.T100>;
declare function encode(data: any, type: any): Buffer;
/**
 * Decode socket data from forge-core
 * TODO: handle rest buffer that exceeds the length
 *
 * @param {*} buffer
 * @param {*} type
 * @returns
 */
declare function decode(buffer: any, type: any): any;
/**
 * Decode any fields in payload for direct use
 *
 * @param {Object} payload
 * @returns payload
 */
declare function decodePayload(payload: any): any;
declare const TcpServer: TcpServer.T102;
declare namespace TcpServer {
  export interface T100 {
    host: any;
    port: any;
    addHandler: any;
    removeHandler: any;
    start(done: any): void;
    close(done: any): void;
  }
  export interface T101 {
    create: typeof create;
  }
  export interface T102 {
    TcpServer: TcpServer.T101;
    encodeVarint: (v: any) => any;
    decodeVarint: (buffer: any) => any;
    encodeZigzag: (v: any) => any;
    decodeZigzag: (buffer: any) => any[];
    encodeSocketData: typeof encode;
    decodeSocketData: typeof decode;
    decodePayload: typeof decodePayload;
  }
}
export = TcpServer;
