/* eslint-disable no-underscore-dangle */
const EventEmitter = require('wolfy87-eventemitter');
const { Socket } = require('phoenix');
const WebSocket = require('isomorphic-ws');

const debug = require('debug')(require('../package.json').name);

class EventClient {
  constructor(endpoint) {
    this.endpoint = endpoint;
    this.socket = null;
    this.subscriptions = {};
    this.channels = {};
  }

  subscribe(topic, token) {
    debug('doSubscription.token', token);
    if (this.subscriptions[token]) {
      return Promise.resolve(this.subscriptions[token]);
    }

    return new Promise((resolve, reject) => {
      this._ensureChanel(topic)
        .then(channel => {
          channel
            .push(`${topic}:subscribe`, { token })
            .receive('ok', res => {
              debug('subscription success', { token, res });

              this.subscriptions[token] = new EventEmitter();
              this.subscriptions[token].token = res.token;

              this.socket.onMessage(({ event, payload }) => {
                if (event === `${topic}:data` && payload && payload.token) {
                  debug(`socket.onMessage.${topic}`, { event, payload });
                  const subscription = this.subscriptions[payload.token];
                  if (subscription) {
                    subscription.emit('data', payload);
                  }
                }
              });

              resolve(this.subscriptions[token]);
            })
            .receive('error', err => {
              debug('subscription error', err);
              reject(err);
            });
        })
        .catch(err => {
          debug('subscription error', err);
          reject(err);
        });
    });
  }

  _ensureChanel(topic) {
    let channel = this.channels[topic];
    if (channel && channel.isJoined()) {
      return Promise.resolve(this.channel);
    }

    this._ensureSocket();

    channel = this.socket.channel(`${topic}:control`);

    return new Promise((resolve, reject) => {
      channel
        .join()
        .receive('ok', res => {
          debug('Channel join success', res);
          this.channels[topic] = channel;
          resolve(channel);
        })
        .receive('error', err => {
          debug('Channel join error', err);
          reject(err);
        });
    });
  }

  _ensureSocket() {
    if (this.socket && this.socket.isConnected()) {
      return;
    }

    this.socket = new Socket(this.endpoint, { logger: debug, transport: WebSocket });
    this.socket.connect();

    // auto reconnect on error
    this.socket.onError(err => {
      debug('socket.reconnect.onConnError', err);
      Object.keys(this.subscriptions).forEach(token => {
        this.subscriptions[token].emit('error', err);
      });
      setTimeout(() => {
        this.socket.connect();
      }, 1000);
    });
  }
}

module.exports = EventClient;
