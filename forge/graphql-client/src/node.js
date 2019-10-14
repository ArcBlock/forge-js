const EventEmitter = require('events');
const { Socket } = require('phoenix-channels');

const GraphqlClient = require('./client');

class NativeGraphqlClient extends GraphqlClient {
  _getSocketImplementation() {
    return Socket;
  }

  _getSocketOptions() {
    return {};
  }

  _getEventImplementation() {
    return EventEmitter;
  }
}

module.exports = NativeGraphqlClient;
