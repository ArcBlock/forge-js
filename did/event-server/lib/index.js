/* eslint-disable no-underscore-dangle */
const WebSocket = require('ws');
const uuid = require('uuid');

// eslint-disable-next-line global-require
const debug = require('debug')(require('../package.json.js').name);

class EventServer {
  /**
   * Creates an instance of EventServer.
   *
   * @param {HttpServer} server - to which server to attach the websocket handlers
   * @param {Array} [topics=['auth']] - which topics to support
   * @memberof EventServer
   */
  constructor(server, topics = ['auth']) {
    this.topics = topics;

    this.wss = new WebSocket.Server({ noServer: true });
    this.wss.on('connection', socket => this._onConnection(socket));

    server.on('upgrade', (request, socket, head) => {
      this.wss.handleUpgrade(request, socket, head, sock => {
        this.wss.emit('connection', sock, request);
      });
    });
  }

  addTopic(...topics) {
    topics.forEach(topic => {
      if (this.topics.includes(topic) === false) {
        this.topics.push(topic);
      }
    });
  }

  removeTopic(...topics) {
    topics.forEach(topic => {
      this.topics = this.topics.filter(x => x !== topic);
    });
  }

  /**
   * Dispatch a message to all clients that are subscribed to the topic
   *
   * @param {string} topic - which topic to dispatch, must exist in the list of topics
   * @param {object|string} message - The message to send to clients
   * @memberof EventServer
   */
  dispatch(topic, message) {
    debug('dispatch.call', topic, message);

    if (this.topics.includes(topic) === false) {
      return;
    }

    this.wss.clients.forEach(socket => {
      if (socket.tokens.includes(message.token) === false) {
        return;
      }

      debug('dispatch.do', socket.id, topic, message);

      socket.send(
        JSON.stringify({
          topic: `${topic}:control`,
          event: `${topic}:data`,
          payload: { status: 'ok', response: message },
        })
      );
    });
  }

  /**
   * Handle new connection: assign id and initialize token list
   *
   * @param {Socket} socket
   * @memberof EventServer
   */
  _onConnection(socket) {
    socket.id = uuid.v4();
    socket.tokens = [];

    debug('onConnection: ', socket.id);

    socket.on('message', message => this._onMessage(message, socket));
    socket.on('error', e => debug('onError', socket.id, e));
    socket.on('close', e => debug('onClose', socket.id, e));
  }

  // eslint-disable-next-line consistent-return
  _onMessage(message, socket) {
    debug('onMessage: ', message);

    try {
      const data = JSON.parse(message);
      if (!data.topic || !data.event) {
        throw new Error('Invalid message format, topic/event fields are required');
      }

      const reply = response =>
        socket.send(
          JSON.stringify({
            topic: data.topic,
            event: `chan_reply_${data.ref}`,
            payload: { status: 'ok', response },
          })
        );

      let [topic, subTopic] = data.topic.split(':');
      if (topic === 'phoenix' && data.event === 'heartbeat') {
        return reply(socket.id);
      }

      if (this.topics.includes(topic) === false) {
        throw new Error(`Unsupported topic ${topic}`);
      }

      if (subTopic === 'control') {
        if (data.event === 'phx_join') {
          return reply(socket.id);
        }

        if (data.event === 'phx_leave') {
          setTimeout(() => {
            socket.close();
          }, 10);
          return reply(socket.id);
        }
      }

      [topic, subTopic] = data.event.split(':');
      if (data.payload && data.payload.token) {
        if (subTopic === 'subscribe') {
          if (!socket.tokens.includes(data.payload.token)) {
            socket.tokens.push(data.payload.token);
          }
          return reply({ token: data.payload.token, sid: socket.id });
        }
        if (subTopic === 'unsubscribe') {
          socket.tokens = socket.tokens.filter(x => x !== data.payload.token);
          return reply({ token: data.payload.token, sid: socket.id });
        }
      }

      throw new Error('Should not be here');
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Error processing message', socket.id, err);
      socket.close();
    }
  }
}

module.exports = EventServer;
