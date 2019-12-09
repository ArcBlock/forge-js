const WebSocket = require('ws');
const uuid = require('uuid');

// eslint-disable-next-line global-require
const debug = require('debug')(require('../package.json').name);

class EventServer {
  constructor(topics = []) {
    this.topics = topics;

    this.wss = new WebSocket.Server({ noServer: true });

    this.wss.on('connection', socket => {
      socket.id = uuid.v4();
      socket.tokens = [];

      debug('onConnection: ', socket.id);

      // eslint-disable-next-line consistent-return
      socket.on('message', message => {
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
      });

      socket.on('error', e => debug('onError', socket.id, e));
      socket.on('close', e => debug('onClose', socket.id, e));
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

  attach(server) {
    server.on('upgrade', (request, socket, head) => {
      this.wss.handleUpgrade(request, socket, head, sock => {
        this.wss.emit('connection', sock, request);
      });
    });
  }

  dispatch(topic, message) {
    debug('dispatch.call', topic, message);

    if (this.topics.includes(topic) === false) {
      return;
    }

    console.log(this.wss.clients);

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
}

module.exports = EventServer;
