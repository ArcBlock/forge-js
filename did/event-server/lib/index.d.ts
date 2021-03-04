// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

declare class EventServer {
  channels: any[];
  wss: any;
  /**
   * Creates an instance of EventServer.
   *
   * @param {HttpServer} server - to which server to attach the websocket handlers
   * @param {Array} [channels=['auth']] - which channels to support
   * @memberof EventServer
   */
  constructor(server: any, channels?: any[]);
  addChannel(...channels: any[]): void;
  removeChannel(...channels: any[]): void;
  /**
   * Dispatch a message to all clients that are subscribed to the channel
   *
   * @param {string} channel - which channel to dispatch, must exist in the list of channels
   * @param {object} message - The message to send to clients, must contain a token prop
   * @memberof EventServer
   */
  dispatch(channel: string, message: any): void;
}
declare const _Lib: typeof EventServer;
export = _Lib;
