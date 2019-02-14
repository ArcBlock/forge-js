const EventEmitter = require('wolfy87-eventemitter');
const { Socket } = require('phoenix');
const GraphqlClient = require('./client');

class BrowserGraphqlClient extends GraphqlClient {
  _getSocketImplementation() {
    return Socket;
  }

  _getSocketOptions() {
    // eslint-disable-next-line
    return { transport: WebSocket };
  }

  _getEventImplementation() {
    return EventEmitter;
  }
}

module.exports = BrowserGraphqlClient;
