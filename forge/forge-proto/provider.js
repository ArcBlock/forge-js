/**
 * @fileOverview Contains all static generated javascript files from forge-abi and forge-core-protocols
 * @module @arcblock/forge-proto
 * @example
 * yarn add @arcblock/forge-proto
 *
 * const { enums, fromTypeUrl, toTypeUrl } = require('@arcblock/forge-proto'); // full version, larger bundle
 * const { enums, fromTypeUrl, toTypeUrl } = require('@arcblock/forge-proto/lite'); // lite version, smaller bundle
 */

const get = require('lodash/get');
const debug = require('debug')(require('./package.json').name);

/**
 * Generate type provider from types map and json spec
 *
 * @param {object} proto - collection of types
 * @param {object} json - collection of fields/types used in the types map
 * @param {object} urls - collection of typeUrls registered to forge-core
 * @returns {object}
 */
module.exports = function createProvider(proto, json, urls = {}) {
  debug('provider.create', { urls });
  const { types, services = {}, vendorTypes = {} } = proto;

  const txTypePattern = /Tx$/;
  const stateTypePattern = /State$/;
  const stakeTypePattern = /^StakeFor/i;
  const requestTypePattern = /^Request/i;
  const responseTypePattern = /^Response/i;
  const lowerUnder = x =>
    x
      .split(/(?=[A-Z])/)
      .join('_')
      .toLowerCase();

  // extract spec
  const compactSpec = object => {
    if (object.nested) {
      // eslint-disable-next-line no-param-reassign
      object = object.nested;
    }

    Object.keys(object).forEach(x => {
      if (object[x] && typeof object[x] === 'object') {
        object[x] = compactSpec(object[x]);
      }
    });

    return object;
  };

  // extract client constructors
  const clients = Object.keys(services)
    .filter(x => x.includes('Client'))
    .map(x => x.replace(/Client$/, ''))
    .reduce((obj, x) => {
      obj[x] = services[`${x}Client`];
      return obj;
    }, {});

  // extract rpc descriptors
  const packageName = 'forge_abi';
  const spec = compactSpec(json);

  const { [packageName]: abi } = spec;
  Object.assign(spec, spec[packageName]);

  // extract messages and enums
  const messages = {};
  const enums = Object.keys(abi)
    .filter(x => abi[x].values)
    .reduce((obj, x) => {
      messages[x] = {};
      obj[x] = Object.keys(abi[x].values).reduce((values, k) => {
        values[k.toUpperCase()] = abi[x].values[k];
        messages[x][abi[x].values[k]] = k.toUpperCase();
        return values;
      }, {});

      return obj;
    }, {});

  // extract rpcs
  const rpcs = Object.keys(abi)
    .filter(x => abi[x].methods)
    .reduce((obj, x) => {
      obj[x] = abi[x].methods;
      return obj;
    }, {});

  // extract typeUrls
  const typeUrls = Object.assign(createTypeUrls(abi), urls || {});

  // extract transactions and stakes
  enums.SupportedTxs = Object.keys(types).filter(
    x => txTypePattern.test(x) && !requestTypePattern.test(x) && !responseTypePattern.test(x)
  );
  enums.SupportedStakes = Object.keys(types).filter(x => stakeTypePattern.test(x));

  // eslint-disable-next-line no-shadow
  function createTypeUrls(abi) {
    return Object.keys(abi).reduce((obj, type) => {
      let typeUrl = type;
      if (!requestTypePattern.test(type) && !responseTypePattern.test(type)) {
        if (txTypePattern.test(type)) {
          typeUrl = `fg:t:${lowerUnder(type.replace(txTypePattern, ''))}`;
        }
        if (stateTypePattern.test(type)) {
          typeUrl = `fg:s:${lowerUnder(type.replace(stateTypePattern, ''))}`;
        }
        if (stakeTypePattern.test(type)) {
          typeUrl = `fg:x:${lowerUnder(`Stake${type.replace(stakeTypePattern, '')}`)}`;
        }
        if (['TransactionInfo', 'TxStatus'].includes(type)) {
          typeUrl = `fg:x:${lowerUnder(type)}`;
        }
        if (type === 'AssetFactoryState') {
          typeUrl = 'fg:s:asset_factory_state';
        }
        if (type === 'AssetFactory') {
          typeUrl = 'fg:x:asset_factory';
        }
        if (type === 'DummyCodec') {
          typeUrl = 'fg:x:address';
        }
      }

      obj[type] = typeUrl;
      return obj;
    }, {});
  }

  /**
   * Search for a type and its fields descriptor, then the result can be used to create a protobuf message
   *
   * @public
   * @static
   * @param {string} type - such as `Transaction`, or `TransferTx`
   * @returns {object}
   */
  function getMessageType(type) {
    const { fields, oneofs } = get(spec, type) || get(spec, `abci_vendor.${type}`) || {};
    return {
      fn: get(types, type) || get(vendorTypes, type) || get(vendorTypes, type.split('.').pop()),
      fields,
      oneofs,
    };
  }

  /**
   * Convert type name to typeUrl, return input when no match found
   *
   * ```javascript
   * toTypeUrl('StakeTx') // 'fg:t:stake'
   * ```
   *
   * @public
   * @static
   * @param {string} type
   * @returns {string}
   */
  function toTypeUrl(type) {
    return get(typeUrls, type) || type;
  }

  /**
   * Convert typeUrl string to type constructor name, return input when no match found
   *
   * ```javascript
   * fromTypeUrl('fg:t:stake') // StakeTx
   * ```
   *
   * @public
   * @static
   * @param {string} url
   * @returns {string}
   */
  function fromTypeUrl(url) {
    const found = Object.entries(typeUrls).find(([, value]) => value === url);
    if (found) {
      return found[0];
    }

    return url;
  }

  return {
    /**
     * All enum types and its values (number format), can be accessed from width: enums.KEY_TYPE.ED25519
     *
     * @member
     * @public
     * @static
     * @readonly
     */
    enums,

    /**
     * All enum types and its values (human readable string format), can be accessed from width: messages.KEY_TYPE.ED25519
     *
     * @member
     * @public
     * @static
     * @readonly
     */
    messages,

    transactions: enums.SupportedTxs.filter(
      x => ['DeployProtocolTx', 'ActivateProtocolTx', 'DeactivateProtocolTx'].includes(x) === false
    ),
    multiSignTxs: ['ExchangeTx', 'ConsumeAssetTx', 'DeclareTx', 'DeclareNodeTx'].filter(x => enums.SupportedTxs.includes(x)), // prettier-ignore

    stakes: enums.SupportedStakes,
    rpcs: Object.keys(clients).reduce((acc, x) => {
      acc[x] = clients[x];
      acc[x].methods = rpcs[x];
      return acc;
    }, {}),
    compactSpec,
    getMessageType,
    typeUrls,
    toTypeUrl,
    fromTypeUrl,
  };
};
