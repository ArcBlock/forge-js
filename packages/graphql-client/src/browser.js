const EventEmitter = require('wolfy87-eventemitter');
const GraphqlClient = require('./client');

function DummySocket() {}

class BrowserGraphqlClient extends GraphqlClient {
  _getSocketImplementation() {
    return DummySocket;
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
