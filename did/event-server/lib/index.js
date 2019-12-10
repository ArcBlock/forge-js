/* eslint-disable no-underscore-dangle */
const WebSocket = require('ws');
const uuid = require('uuid');

// eslint-disable-next-line global-require
const debug = require('debug')(require('../package.json').name);

class EventServer {
  /**
   * Creates an instance of EventServer.
   *
   * @param {HttpServer} server - to which server to attach the websocket handlers
   * @param {Array} [channels=['auth']] - which channels to support
   * @memberof EventServer
   */
  constructor(server, channels = ['auth']) {
    this.channels = channels;

    this.wss = new WebSocket.Server({ noServer: true });
    this.wss.on('connection', socket => this._onConnection(socket));

    server.on('upgrade', (request, socket, head) => {
      this.wss.handleUpgrade(request, socket, head, sock => {
        this.wss.emit('connection', sock, request);
      });
    });
  }

  addChannel(...channels) {
    channels.forEach(channel => {
      if (this.channels.includes(channel) === false) {
        this.channels.push(channel);
      }
    });
  }

  removeChannel(...channels) {
    channels.forEach(channel => {
      this.channels = this.channels.filter(x => x !== channel);
    });
  }

  /**
   * Dispatch a message to all clients that are subscribed to the channel
   *
   * @param {string} channel - which channel to dispatch, must exist in the list of channels
   * @param {object|string} message - The message to send to clients
   * @memberof EventServer
   */
  dispatch(channel, message) {
    debug('dispatch.call', channel, message);

    if (this.channels.includes(channel) === false) {
      return;
    }

    this.wss.clients.forEach(socket => {
      if (socket.tokens.includes(message.token) === false) {
        return;
      }

      debug('dispatch.do', socket.id, channel, message);

      socket.send(
        JSON.stringify([
          socket.joinRef,
          socket.ref,
          `${channel}:control`,
          `${channel}:data`,
          message,
        ])
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

    debug('onConnection', socket.id);

    socket.on('message', message => this._onMessage(message, socket));
    socket.on('error', e => debug('onError', socket.id, e));
    socket.on('close', e => debug('onClose', socket.id, e));
  }

  // eslint-disable-next-line consistent-return
  _onMessage(message, socket) {
    debug('onMessage', message);

    try {
      const [joinRef, ref, topic, event, payload] = JSON.parse(message);
      if (!topic || !event) {
        throw new Error('Invalid message format, topic/event fields are required');
      }

      socket.joinRef = joinRef;
      socket.ref = ref;

      const reply = result => {
        const response = JSON.stringify([
          joinRef,
          ref,
          topic,
          `chan_reply_${ref}`,
          { status: 'ok', response: result },
        ]);

        debug('onReply', response);
        socket.send(response);
      };

      let [channel, command] = topic.split(':');
      if (topic === 'phoenix' && event === 'heartbeat') {
        return reply(socket.id);
      }

      if (this.channels.includes(channel) === false) {
        throw new Error(`Unsupported channel ${channel}`);
      }

      if (command === 'control') {
        if (event === 'phx_join') {
          return reply(socket.id);
        }

        if (event === 'phx_leave') {
          setTimeout(() => {
            socket.close();
          }, 10);
          return reply(socket.id);
        }
      }

      [channel, command] = event.split(':');
      if (payload && payload.token) {
        if (command === 'subscribe') {
          if (!socket.tokens.includes(payload.token)) {
            socket.tokens.push(payload.token);
          }
          return reply({ token: payload.token, sid: socket.id });
        }
        if (command === 'unsubscribe') {
          socket.tokens = socket.tokens.filter(x => x !== payload.token);
          return reply({ token: payload.token, sid: socket.id });
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
