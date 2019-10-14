const providers = [];
const enums = {};
const messages = {};

function getMessageType(type) {
  const provider = providers.find(x => x.getMessageType(type).fn);
  if (provider) {
    return provider.getMessageType(type);
  }

  return {};
}

function toTypeUrl(type) {
  const provider = providers.find(x => x.toTypeUrl(type) !== type);
  if (provider) {
    return provider.toTypeUrl(type);
  }

  return type;
}

function fromTypeUrl(url) {
  const provider = providers.find(x => x.fromTypeUrl(url) !== url);
  if (provider) {
    return provider.fromTypeUrl(url);
  }

  return url;
}

/**
 * Add type provider that can be used to format/create messages
 *
 * @param {object} provider - proto generated from {@see @arcblock/forge-proto}
 */
function addProvider(provider) {
  if (['getMessageType', 'toTypeUrl', 'fromTypeUrl'].some(x => typeof provider[x] !== 'function')) {
    throw new Error('addProvider requires a valid proto provider');
  }

  if (providers.includes(provider) === false) {
    providers.push(provider);

    if (provider.enums) {
      Object.assign(enums, provider.enums);
    }
    if (provider.messages) {
      Object.assign(messages, provider.messages);
    }
  }
}

function resetProviders() {
  while (providers.length) {
    providers.pop();
  }
}

module.exports = {
  addProvider,
  resetProviders,
  enums,
  messages,
  getMessageType,
  toTypeUrl,
  fromTypeUrl,
};
