/* eslint-disable no-underscore-dangle */
const EventEmitter = require('wolfy87-eventemitter');
const { Socket } = require('phoenix');
const WebSocket = require('isomorphic-ws');

const debug = require('debug')(require('../package.json').name);

class EventClient {
  constructor(endpoint, options = {}) {
    this.endpoint = endpoint;
    this.socket = null;
    this.subscriptions = {};
    this.channels = {};
    this.options = Object.assign({ maxConnectionRetry: 4 }, options);
    this.connectionRetry = 0;
  }

  subscribe(topic, token) {
    const cacheKey = `${topic}-${token}`;
    if (this.subscriptions[cacheKey]) {
      debug('subscribe.cached', { topic, token });
      return Promise.resolve(this.subscriptions[cacheKey]);
    }

    debug('subscribe.do', { topic, token });
    return new Promise((resolve, reject) => {
      this._ensureChanel(topic)
        .then(channel => {
          channel
            .push(`${topic}:subscribe`, { token })
            .receive('ok', res => {
              debug('subscribe success', { token, res });

              this.subscriptions[cacheKey] = new EventEmitter();
              this.subscriptions[cacheKey].id = cacheKey;

              this.socket.onMessage(({ event, payload }) => {
                if (event === `${topic}:data` && payload && payload.token) {
                  debug(`socket.onMessage.${topic}`, { event, payload });
                  const subscription = this.subscriptions[cacheKey];
                  if (subscription) {
                    subscription.emit('data', payload);
                  }
                }
              });

              resolve(this.subscriptions[cacheKey]);
            })
            .receive('error', err => {
              debug('subscribe error: push', err);
              reject(err);
            });
        })
        .catch(err => {
          debug('subscribe error: channel', err);
          reject(err);
        });
    });
  }

  unsubscribe(topic, token) {
    const cacheKey = `${topic}-${token}`;
    if (!this.subscriptions[cacheKey]) {
      return Promise.resolve(true);
    }

    debug('unsubscribe.do', { topic, token });
    return new Promise((resolve, reject) => {
      this._ensureChanel(topic)
        .then(channel => {
          channel
            .push(`${topic}:unsubscribe`, { token })
            .receive('ok', () => {
              resolve(true);
            })
            .receive('error', err => {
              debug('unsubscribe error: push', err);
              reject(err);
            });
        })
        .catch(err => {
          debug('unsubscribe error: channel', err);
          reject(err);
        });
    });
  }

  _ensureChanel(topic) {
    let channel = this.channels[topic];
    if (channel && channel.isJoined()) {
      return Promise.resolve(channel);
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

      if (this.connectionRetry >= this.options.maxConnectionRetry) {
        debug('connection retry reached');
        return;
      }

      this.connectionRetry += 1;
      setTimeout(() => {
        this.socket.connect();
      }, 1000);
    });
  }
}

module.exports = EventClient;
