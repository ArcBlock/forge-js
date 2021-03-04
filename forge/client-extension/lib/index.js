/* eslint-disable no-underscore-dangle */
/* eslint-disable object-curly-newline */
const get = require('lodash/get');
const camelCase = require('lodash/camelCase');
const snakeCase = require('lodash/snakeCase');
const padStart = require('lodash/padStart');
const errorCodes = require('@arcblock/forge-proto/lib/status_code.json');
const { isValid: isValidDID, toTypeInfo } = require('@arcblock/did');
const { toDelegateAddress, toSwapAddress, toAssetAddress } = require('@arcblock/did-util');
const { transactions, typeUrls, multiSignTxs } = require('@arcblock/forge-proto/lite');
const { createMessage, getMessageType, decodeAny } = require('@arcblock/forge-message/lite');
const {
  bytesToHex,
  toBase58,
  toBase64,
  toHex,
  toBuffer,
  fromTokenToUnit,
  fromUnitToToken,
} = require('@arcblock/forge-util');
const debug = require('debug')(require('../package.json').name);

/**
 * Generate extension methods on the fly
 *
 * @public
 * @param {object} client
 * @param {object} [{ encodeTxAsBase64 = false }={}]
 */
const createExtensionMethods = (client, { encodeTxAsBase64 = false } = {}) => {
  /**
   * Format big number presentation amount to token number
   *
   * @memberof GraphQLClient
   * @function
   * @name GraphQLClient#fromUnitToToken
   * @param {string} value
   * @returns {string}
   */
  client.fromUnitToToken = async value => {
    const { token } = await client._ensureContext();
    return fromUnitToToken(value, token.decimal);
  };

  /**
   * Encode amount to corresponding token big number presentation
   *
   * @memberof GraphQLClient
   * @function
   * @name GraphQLClient#fromTokenToUnit
   * @param {number} amount
   * @returns {BN}
   */
  client.fromTokenToUnit = async amount => {
    const { token } = await client._ensureContext();
    return fromTokenToUnit(amount, token.decimal);
  };

  /**
   * Converts a relative locktime to absolute locktime
   *
   * @memberof GraphQLClient
   * @function
   * @name GraphQLClient#toLocktime
   * @param {number} number - number of blocks want to lock
   * @param {object} [options={}] - options to underlying methods
   * @returns {number}
   */
  client.toLocktime = async number => {
    const result = await client.doRawQuery(`{
      getChainInfo {
        code
        info {
          blockHeight
        }
      }
    }`);

    return +get(result, 'getChainInfo.info.blockHeight', 0) + number;
  };

  /**
   * List all transaction send methods
   * Each method can send one kind of transactions supported by forge core, such as `DeclareTx`, `PokeTx`
   *
   * @memberof GraphQLClient
   * @function
   * @name GraphQLClient#getTxSendMethods
   * @returns {Array<string>} method name list
   */
  client.getTxSendMethods = () => transactions.map(x => camelCase(`send_${x}`));

  /**
   * List all transaction encode methods, each method can be used to encode transaction to buffer and object
   *
   * @memberof GraphQLClient
   * @function
   * @name GraphQLClient#getTxEncodeMethods
   * @returns {Array<string>} method name list
   */
  client.getTxEncodeMethods = () => transactions.map(x => camelCase(`encode_${x}`));

  /**
   * List all transaction sign methods, each method can be used to sign transaction to an object
   *
   * @memberof GraphQLClient
   * @function
   * @name GraphQLClient#getTxSignMethods
   * @returns {Array<string>} method name list
   */
  client.getTxSignMethods = () => transactions.map(x => camelCase(`sign_${x}`));

  /**
   * List all transaction multi sign methods, each method can be used to do multi sign a transaction
   *
   * @memberof GraphQLClient
   * @function
   * @name GraphQLClient#getTxMultiSignMethods
   * @returns {Array<string>} method name list
   */
  client.getTxMultiSignMethods = () => multiSignTxs.map(x => camelCase(`multi_sign_${x}`));

  /**
   * Get protobuf message class by name, only supports forge-built-in types
   *
   * @memberof GraphQLClient
   * @function
   * @name GraphQLClient#getType
   * @param {string} x
   * @returns {class|null} message type
   */
  client.getType = x => getMessageType(x).fn;

  /**
   * Decode transaction buffer/base64/base58 to an object
   *
   * @memberof GraphQLClient
   * @function
   * @name GraphQLClient#decodeTx
   * @param {buffer|hex|base48|base64} input
   * @returns {object} transaction object
   */
  client.decodeTx = input => {
    const Transaction = client.getType('Transaction');
    return Transaction.deserializeBinary(toBuffer(input)).toObject();
  };

  if (typeof client._createResponseError !== 'function') {
    client._createResponseError = (code, method) => {
      const type = snakeCase(method);
      const message = (errorCodes[code][type] || errorCodes[code].default || code).trim();
      const error = new Error(`${code}: ${message}`);
      error.code = code;
      error.type = type;
      return error;
    };
  }

  /**
   * Ensure a connection is bootstrapped with some meta info fetched from chain node
   *
   * @private
   * @param {string} [conn=undefined]
   * @returns {object}
   */
  client._ensureContext = async () => {
    if (!client.context) {
      if (encodeTxAsBase64) {
        const result = await client.doRawQuery(`{
          getChainInfo {
            code
            info {
              network
            }
          }
          getForgeState {
            code
            state {
              token {
                decimal
                symbol
              }
              txConfig {
                poke {
                  amount
                  dailyLimit
                  enabled
                }
              }
            }
          }
        }`);

        client.context = {
          chainId: get(result, 'getChainInfo.info.network'),
          token: get(result, 'getForgeState.state.token'),
          poke: get(result, 'getForgeState.state.txConfig.poke'),
        };
      } else {
        const [{ state }, { info }] = await Promise.all([client.getForgeState(), client.getChainInfo()]);
        client.context = {
          chainId: info.network,
          token: state.token,
          poke: state.txConfig.poke,
        };
      }
    }

    return client.context;
  };

  // Unify a client wallet | forge managed wallet
  const getWallet = wallet => {
    if (!wallet) {
      return {
        address: '',
        publicKey: '',
      };
    }

    if (typeof wallet.toAddress === 'function') {
      return {
        address: wallet.toAddress(),
        publicKey: wallet.publicKey,
      };
    }

    return {
      address: wallet.address,
      publicKey: wallet.pk || wallet.publicKey || '',
    };
  };

  // Generate transaction sign/send/encode functions on fly
  transactions.forEach(x => {
    /**
     * Encode a transaction
     *
     * @param {object} input
     * @param {object} input.tx - data of the transaction
     * @param {object} input.tx.itx - the actual transaction object
     * @param {object} [input.tx.from] - the sender address, can be derived from wallet
     * @param {object} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
     * @param {object} [input.tx.chainId] - the chainId
     * @param {object} [input.tx.signature] - the chainId
     * @param {object} [input.tx.signatures] - the chainId
     * @param {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
     * @param {object} input.delegator - the wallet address that delegated permissions to the `input.wallet` address
     * @returns Promise
     */
    const txEncodeFn = async ({ tx, wallet, delegator }) => {
      const w = getWallet(wallet);

      // Determine sender address
      const address = tx.from || w.address;
      const pk = tx.pk || w.publicKey;

      // Determine chainId & nonce, only attach new one when not exist
      const nonce = typeof tx.nonce === 'undefined' ? Date.now() : tx.nonce;
      let chainId = tx.chainId || (client.context ? client.context.chainId : '');
      if (!chainId) {
        const context = await client._ensureContext();
        // eslint-disable-next-line prefer-destructuring
        chainId = context.chainId;
      }

      // Determine signatures for multi sig
      let signatures = [];
      if (Array.isArray(tx.signatures)) {
        // eslint-disable-next-line prefer-destructuring
        signatures = tx.signatures;
      }
      if (Array.isArray(tx.signaturesList)) {
        signatures = tx.signaturesList;
      }

      // Determine itx
      let itx = null;
      if (tx.itx.typeUrl && tx.itx.value) {
        // eslint-disable-next-line prefer-destructuring
        itx = tx.itx;
      } else {
        itx = { type: x, value: tx.itx };
      }

      const txObj = createMessage('Transaction', {
        from: tx.delegator ? address : delegator || address,
        nonce,
        pk,
        chainId,
        signature: tx.signature || Buffer.from([]),
        signatures,
        delegator: tx.delegator || (delegator ? address : ''),
        itx,
      });
      const txToSignBytes = txObj.serializeBinary();

      debug(`encodeTx.${x}.txObj`, txObj.toObject());

      return { object: txObj.toObject(), buffer: Buffer.from(txToSignBytes) };
    };

    const encodeMethod = camelCase(`encode_${x}`);
    txEncodeFn.__tx__ = encodeMethod;
    client[encodeMethod] = txEncodeFn;

    /**
     * Send a transaction
     *
     * @param {object} input
     * @param {object} input.tx - data of the transaction
     * @param {object} input.tx.itx - the actual transaction object
     * @param {object} [input.tx.from] - the sender address, can be derived from wallet
     * @param {object} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
     * @param {object} [input.tx.chainId] - the chainId
     * @param {object} [input.tx.signature] - the signature
     * @param {object} [input.tx.signatures] - the signatures
     * @param {object} [input.commit=false] - whether we should wait for transaction commit
     * @param {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
     * @param {object} [input.signature] - the signature of the tx, if exist, we will not sign the transaction
     * @param {object} input.delegator - the wallet address that delegated permissions to the `input.wallet` address
     * @returns {Promise<string>}
     */
    const txSendFn = async ({ tx, wallet, signature, delegator, commit = false }) => {
      let encoded;
      if (signature) {
        encoded = tx;
        encoded.signature = signature;
      } else if (tx.signature) {
        const res = await txEncodeFn({ tx, wallet, delegator });
        encoded = res.object;
      } else {
        const res = await txEncodeFn({ tx, wallet, delegator });
        encoded = res.object;
        encoded.signature = wallet.sign(bytesToHex(res.buffer));
      }

      return new Promise(async (resolve, reject) => {
        try {
          if (encodeTxAsBase64) {
            const txObj = createMessage('Transaction', encoded);
            const txBytes = txObj.serializeBinary();
            const txStr = toBase64(txBytes);
            debug(`sendTx.${x}.txObj`, txObj.toObject());
            const { hash } = await client.sendTx({ tx: txStr, commit });
            resolve(hash);
          } else {
            const txObj = createMessage('Transaction', encoded).toObject();
            debug(`sendTx.${x}.txObj`, txObj);
            const { hash } = await client.sendTx({ tx: txObj, commit });
            resolve(hash);
          }
        } catch (err) {
          if (Array.isArray(err.errors)) {
            const code = err.errors[0].message;
            if (errorCodes[code]) {
              const error = client._createResponseError(code, x);
              error.errors = err.errors;
              reject(error);
              return;
            }
          }

          reject(err);
        }
      });
    };

    const sendMethod = camelCase(`send_${x}`);
    txSendFn.__tx__ = sendMethod;
    client[sendMethod] = txSendFn;

    const _formatEncodedTx = async (tx, encoding) => {
      if (encoding) {
        const { buffer: txBytes } = await txEncodeFn({ tx });
        if (encoding === 'base64') {
          return toBase64(txBytes);
        }
        if (encoding === 'base58') {
          return toBase58(txBytes);
        }
        if (encoding === 'base16' || encoding === 'hex') {
          return toHex(txBytes);
        }
        return txBytes;
      }

      return tx;
    };

    // Generate transaction signing function
    const txSignFn = async ({ tx, wallet, delegator, encoding = '' }) => {
      if (tx.signature) {
        delete tx.signature;
      }

      const { object, buffer } = await txEncodeFn({ tx, wallet, delegator });
      object.signature = wallet.sign(buffer);

      return _formatEncodedTx(object, encoding);
    };
    const signMethod = camelCase(`sign_${x}`);
    txSignFn.__tx__ = signMethod;
    client[signMethod] = txSignFn;

    // TODO: verify existing signatures before adding new signatures
    // Generate transaction multi sign function
    if (multiSignTxs.includes(x)) {
      const txMultiSignFn = async ({ tx, wallet, delegator, data, encoding = '' }) => {
        if (typeof wallet.toAddress !== 'function') {
          throw new Error('Multisig requires a valid wallet');
        }
        tx.signaturesList = tx.signatures || tx.signaturesList || [];
        if (delegator) {
          tx.signaturesList.unshift({
            pk: wallet.publicKey,
            signer: delegator,
            delegator: wallet.toAddress(),
            data,
          });
        } else {
          tx.signaturesList.unshift({
            pk: wallet.publicKey,
            signer: wallet.toAddress(),
            delegator: '',
            data,
          });
        }

        const { object, buffer } = await txEncodeFn({ tx, wallet });
        object.signaturesList[0].signature = wallet.sign(bytesToHex(buffer));
        return _formatEncodedTx(object, encoding);
      };
      const multiSignMethod = camelCase(`multi_sign_${x}`);
      txMultiSignFn.__tx__ = multiSignMethod;
      client[multiSignMethod] = txMultiSignFn;
    }
  });

  /**
   * Declare an DID and it's public key on chain
   *
   * @memberof GraphQLClient
   * @function
   * @name GraphQLClient#declare
   * @param {object} params
   * @param {string} params.moniker - user nickname
   * @param {string} [params.issuer=""] - who issued the account
   * @param {object} [params.data=undefined] - who issued the account
   * @param {WalletObject} params.wallet - wallet to sign the tx
   * @param {object} extra - other param to underlying client implementation
   * @returns {Promise} the transaction hash once resolved
   */
  client.declare = ({ moniker, issuer = '', data, wallet }, extra) => {
    let itxData = data;

    // If there is no data attached to the account, we can attach wallet type by default
    const typeData = wallet.type;
    if (!itxData && typeData) {
      itxData = { typeUrl: 'json', value: toTypeInfo(typeData, true) };
    }

    return client.sendDeclareTx(
      {
        tx: {
          itx: { moniker, issuer, data: itxData },
        },
        wallet,
      },
      extra
    );
  };

  /**
   * Prepare an declare transaction when the chain has enabled restricted declare
   *
   * @memberof GraphQLClient
   * @function
   * @name GraphQLClient#prepareDeclare
   * @param {object} params
   * @param {string} params.moniker - account moniker
   * @param {string} params.issuer - issuer address
   * @param {string} params.delegator - the delegator address
   * @param {WalletObject} params.wallet - the wallet that want to do the declare
   * @param {object} extra - other param to underlying client implementation
   * @returns {Promise} the `transaction` object once resolved
   */
  client.prepareDeclare = async ({ moniker, issuer, wallet, data, delegator = '' }, extra) =>
    client.signDeclareTx(
      {
        tx: {
          itx: {
            moniker,
            issuer,
            data,
          },
        },
        delegator,
        wallet,
      },
      extra
    );

  /**
   * Finalize an declare transaction using the issuer's account
   *
   * @memberof GraphQLClient
   * @function
   * @name GraphQLClient#finalizeExchange
   * @param {object} params
   * @param {object} params.tx - the transaction object from `prepareExchange`
   * @param {string} params.delegator - who authorized this transaction
   * @param {object} params.data - extra data in the multi sig
   * @param {WalletObject} params.wallet - issuer's wallet
   * @param {object} extra - other param to underlying client implementation
   * @returns {Promise} the `transaction` object once resolved
   */
  client.finalizeDeclare = ({ tx, delegator = '', data, wallet }, extra) =>
    client.multiSignDeclareTx(
      {
        tx,
        delegator,
        data,
        wallet,
      },
      extra
    );

  /**
   * Migrate current account to a new account
   *
   * @memberof GraphQLClient
   * @function
   * @name GraphQLClient#migrateAccount
   * @param {object} params
   * @param {WalletObject} params.from - which account to migrate from
   * @param {WalletObject} params.to - which account to migrate to
   * @param {object} extra - other param to underlying client implementation
   * @returns {Promise} the transaction hash once resolved
   */
  client.migrateAccount = ({ from, to }, extra) =>
    client.sendAccountMigrateTx(
      {
        tx: {
          itx: {
            address: to.toAddress(),
            pk: to.publicKey,
            type: to.type,
          },
        },
        wallet: from,
      },
      extra
    );

  /**
   * Delegate some privileges to another account
   * So that that account can send transactions on behalf of the delegator
   *
   * @memberof GraphQLClient
   * @function
   * @name GraphQLClient#delegate
   * @param {object} params
   * @param {WalletObject} params.from - the delegator, who grants the privilege to others
   * @param {WalletObject} params.to - the delegatee, who is authorized to send transactions
   * @param {Array} params.privileges - the privilege settings
   * @param {object} extra - other param to underlying client implementation
   * @returns {Promise} the `[transactionHash, delegateAddress]` once resolved
   */
  client.delegate = async ({ from, to, privileges }, extra) => {
    let ops = Array.isArray(privileges) ? privileges : [privileges];
    ops = ops.map(x => {
      if (x.typeUrl && Array.isArray(x.rules)) {
        return x;
      }

      return { typeUrl: x.typeUrl, rules: [] };
    });

    const txTypes = Object.values(typeUrls).filter(x => x.startsWith('fg:t:'));
    if (ops.some(x => txTypes.includes(x.typeUrl) === false)) {
      throw new Error('Invalid type url provided for delegation');
    }

    const address = toDelegateAddress(from.toAddress(), to.toAddress());
    const hash = await client.sendDelegateTx(
      {
        tx: {
          itx: {
            address,
            to: to.toAddress(),
            ops,
          },
        },
        wallet: from,
      },
      extra
    );

    return [hash, address];
  };

  /**
   * Revoke a previous delegation
   *
   * @memberof GraphQLClient
   * @function
   * @name GraphQLClient#revokeDelegate
   * @param {object} params
   * @param {WalletObject} params.from - the delegator, who grants the privilege to others
   * @param {WalletObject} params.to - the delegatee, who is authorized to send transactions
   * @param {Array} params.privileges - the privilege settings
   * @param {object} extra - other param to underlying client implementation
   * @returns {Promise} the transaction hash once resolved
   */
  client.revokeDelegate = ({ from, to, privileges }, extra) =>
    client.sendRevokeDelegateTx(
      {
        tx: {
          itx: {
            address: toDelegateAddress(from.toAddress(), to.toAddress()),
            to: to.toAddress(),
            typeUrls: privileges.filter(Boolean).map(x => x.toString()),
          },
        },
        wallet: from,
      },
      extra
    );

  /**
   * Create an new asset (non-fungible-token)
   *
   * @memberof GraphQLClient
   * @function
   * @name GraphQLClient#createAsset
   * @param {object} params
   * @param {string} params.moniker - asset name
   * @param {string} params.parent - asset parent
   * @param {object} params.data - asset data payload
   * @param {number} params.ttl - ttl after first consumption
   * @param {boolean} params.readonly - whether the asset can be updated after creation
   * @param {boolean} params.transferrable - whether the asset can be transferred to another account
   * @param {string} params.delegator - who authorized this transaction
   * @param {WalletObject} params.wallet - the initial owner of the asset
   * @param {object} extra - other param to underlying client implementation
   * @returns {Promise} the `[transactionHash, assetAddress]` once resolved
   */
  client.createAsset = async (
    { moniker, parent = '', ttl = 0, data, readonly = false, transferrable = true, delegator = '', wallet },
    extra
  ) => {
    const payload = { moniker, parent, ttl, readonly, transferrable, data };
    const address = toAssetAddress(payload);
    payload.address = address;
    const hash = await client.sendCreateAssetTx(
      {
        tx: { itx: payload },
        delegator,
        wallet,
      },
      extra
    );
    return [hash, address];
  };

  /**
   * Update an existing asset (non-fungible-token)
   *
   * @memberof GraphQLClient
   * @function
   * @name GraphQLClient#updateAsset
   * @param {object} params
   * @param {string} params.address - asset address
   * @param {string} params.moniker - asset name
   * @param {object} params.data - asset data payload
   * @param {string} params.delegator - who authorized this transaction
   * @param {WalletObject} params.wallet - the wallet to sign the transaction
   * @param {object} extra - other param to underlying client implementation
   * @returns {Promise} the `transactionHash` once resolved
   */
  client.updateAsset = ({ address, moniker, data, delegator, wallet }, extra) =>
    client.sendUpdateAssetTx(
      {
        tx: {
          itx: {
            moniker,
            address,
            data,
          },
        },
        delegator,
        wallet,
      },
      extra
    );

  /**
   * Prepare a transaction that consumes an asset (non-fungible-token)
   *
   * @memberof GraphQLClient
   * @function
   * @name GraphQLClient#prepareConsumeAsset
   * @param {object} params
   * @param {string} params.issuer - issuer address
   * @param {string} params.address - parent address
   * @param {object} params.data - extra data payload
   * @param {string} params.delegator - who authorized this transaction
   * @param {WalletObject} params.wallet - the wallet to sign the transaction
   * @param {object} extra - other param to underlying client implementation
   * @returns {Promise} the `transactionHash` once resolved
   */
  client.prepareConsumeAsset = ({ issuer = '', address = '', delegator = '', data, wallet }, extra) =>
    client.signConsumeAssetTx(
      {
        tx: {
          itx: {
            issuer,
            address,
            data,
          },
        },
        delegator,
        wallet,
      },
      extra
    );

  /**
   * Prepare a transaction that consumes an asset (non-fungible-token)
   *
   * @memberof GraphQLClient
   * @function
   * @name GraphQLClient#finalizeConsumeAsset
   * @param {object} params
   * @param {object} params.tx - transaction to finalize, should be result from `prepareConsumeAsset`
   * @param {string} params.address - asset address to be consumed
   * @param {string} params.delegator - who authorized this transaction
   * @param {WalletObject} params.wallet - the wallet to sign the transaction
   * @param {object} extra - other param to underlying client implementation
   * @returns {Promise} the `transactionHash` once resolved
   */
  client.finalizeConsumeAsset = ({ tx, address, delegator, wallet }, extra) => {
    if (isValidDID(address) === false) {
      throw new Error('Please provide valid asset address to consume');
    }

    return client.multiSignConsumeAssetTx(
      {
        tx,
        wallet,
        delegator,
        data: {
          typeUrl: 'fg:x:address',
          value: Uint8Array.from(Buffer.from(address)),
        },
      },
      extra
    );
  };

  /**
   * Send a transaction that consumes an asset (non-fungible-token)
   *
   * @memberof GraphQLClient
   * @function
   * @name GraphQLClient#consumeAsset
   * @param {object} params
   * @param {object} params.tx - transaction to send, should be result from `finalizeConsumeAsset`
   * @param {WalletObject} params.wallet - the wallet to sign the transaction
   * @param {object} extra - other param to underlying client implementation
   * @returns {Promise} the `transactionHash` once resolved
   */
  client.consumeAsset = ({ tx, wallet }, extra) => client.sendConsumeAssetTx({ tx, wallet }, extra);

  /**
   * Create an asset factory that can be used to produce multiple assets in a transaction
   *
   * @memberof GraphQLClient
   * @function
   * @name GraphQLClient#createAssetFactory
   * @param {object} params
   * @param {string} params.moniker - asset name
   * @param {object} params.factory - asset factory attributes
   * @param {string} params.factory.description - asset factory name
   * @param {number} params.factory.limit - how many assets can be generated from this factory
   * @param {price} params.factory.price - how much should charge user when acquire asset
   * @param {string} params.factory.template - mustache compatible
   * @param {Array} params.factory.templateVariables - list of allowed template variables
   * @param {string} params.factory.assetName - protobuf type known to forge that can be used to create this asset
   * @param {string} params.factory.attributes - attributes for assets that are generated from this factory
   * @param {boolean} params.readonly - whether the asset can be updated after creation
   * @param {boolean} params.transferrable - whether the asset can be transferred to another account
   * @param {string} params.delegator - who authorized this transaction
   * @param {WalletObject} params.wallet - the initial owner of the asset
   * @param {object} extra - other param to underlying client implementation
   * @returns {Promise} the `[transactionHash, factoryAddress]` once resolved
   */
  client.createAssetFactory = async (
    { moniker, factory, readonly = false, transferrable = true, delegator = '', wallet },
    extra
  ) => {
    const payload = {
      moniker,
      readonly,
      transferrable,
      data: {
        type: 'AssetFactory',
        value: {
          description: factory.description,
          limit: factory.limit,
          price: await client.fromTokenToUnit(factory.price),
          template: factory.template,
          allowedSpecArgs: factory.templateVariables,
          assetName: factory.assetName,
          attributes: Object.assign({ ttl: 0, transferrable: true }, factory.attributes || {}),
        },
      },
    };
    const factoryAddress = toAssetAddress(payload);
    payload.address = factoryAddress;

    const hash = await client.sendCreateAssetTx(
      {
        tx: {
          itx: payload,
        },
        delegator,
        wallet,
      },
      extra
    );
    return [hash, factoryAddress];
  };

  /**
   * Acquire an asset from factory
   *
   * @memberof GraphQLClient
   * @function
   * @name GraphQLClient#acquireAsset
   * @param {object} params
   * @param {string} params.assetFactory - Asset factory address
   * @param {Array} params.assetVariables - list of asset variables that can be populated into asset factory template
   * @param {boolean} params.readonly - whether the asset can be updated after creation, should match factory settings
   * @param {boolean} params.transferrable - whether the asset can be transferred to another account, should match factory settings
   * @param {number} params.ttl - asset expire
   * @param {string} params.delegator - who authorized this transaction
   * @param {WalletObject} params.wallet - the initial owner of the asset
   * @param {object} extra - other param to underlying client implementation
   * @returns {Promise} the `[transactionHash, [assetAddress]]` once resolved
   */
  client.acquireAsset = async ({ assetFactory, assetVariables, delegator = '', wallet }, extra) => {
    if (!assetFactory) {
      throw new Error('Must specify asset factory address');
    }
    if (!Array.isArray(assetVariables)) {
      throw new Error('Must specify at least on asset template variable');
    }

    const { state } = await client.getAssetState({ address: assetFactory }, extra);
    if (!state) {
      throw new Error('Asset factory address does not exist on chain');
    }

    const decoded = decodeAny(state.data);
    if (!decoded) {
      throw new Error('Asset factory state cannot be decoded');
    }

    const factory = decoded.value;
    debug('acquireAsset.factory', factory);

    const assets = assetVariables.map(x => {
      const payload = {
        readonly: true,
        transferrable: factory.attributes.transferrable,
        ttl: factory.attributes.ttl,
        parent: assetFactory,
        data: {
          type: factory.assetName,
          value: x,
        },
      };

      const address = toAssetAddress(payload);

      return { address, data: JSON.stringify(x) };
    });

    const hash = await client.sendAcquireAssetTx(
      {
        tx: {
          itx: {
            to: assetFactory,
            specs: assets,
          },
        },
        delegator,
        wallet,
      },
      extra
    );

    return [hash, assets.map(x => x.address)];
  };

  /**
   * Do an on-chain upgrade, should be used with forge-cli
   *
   * @memberof GraphQLClient
   * @function
   * @name GraphQLClient#upgradeNode
   * @param {object} params
   * @param {number} params.height - at which height should the chain stop to perform the upgrade
   * @param {string} params.version - to which version should upgrade to
   * @param {string} params.delegator - who authorized this transaction
   * @param {WalletObject} params.wallet - the wallet to sign the transaction
   * @param {object} extra - other param to underlying client implementation
   * @returns {Promise} the `transactionHash` once resolved
   */
  client.upgradeNode = ({ height, version, delegator, wallet }, extra) =>
    client.sendUpgradeNodeTx(
      {
        tx: { itx: { height, version, override: true } },
        delegator,
        wallet,
      },
      extra
    );

  /**
   * Setup a swap that's used to accomplish cross-chain operations
   *
   * @memberof GraphQLClient
   * @function
   * @name GraphQLClient#setupSwap
   * @param {object} params
   * @param {number} params.token - how much token to offer
   * @param {Array} params.assets - how much assets to offer
   * @param {string} params.receiver - who can retrieve this swap
   * @param {string} params.hashlock - sha3 from hashkey
   * @param {string} params.delegator - who authorized this transaction
   * @param {number} [params.locktime=1000] - how much block height to lock the swap before it can be revoked
   * @param {WalletObject} params.wallet - the wallet to sign the transaction
   * @param {object} extra - other param to underlying client implementation
   * @returns {Promise} the `[transactionHash, swapAddress]` once resolved
   */
  client.setupSwap = async (
    {
      token = 0,
      assets = [],
      receiver = '',
      hashlock = '',
      locktime = 1000,
      isLocktimeAbsolute = false,
      delegator = '',
      wallet,
    },
    extra
  ) => {
    let finalLocktime = await client.toLocktime(locktime);
    if (isLocktimeAbsolute) {
      finalLocktime = locktime;
    }
    const hash = await client.sendSetupSwapTx(
      {
        tx: {
          itx: {
            value: await client.fromTokenToUnit(token),
            assets,
            receiver,
            hashlock: toBuffer(hashlock),
            locktime: finalLocktime,
          },
        },
        delegator,
        wallet,
      },
      extra
    );

    const address = toSwapAddress(`0x${hash}`);
    return [hash, address];
  };

  /**
   * Retrieve a swap during an atomic-swap process
   *
   * @memberof GraphQLClient
   * @function
   * @name GraphQLClient#retrieveSwap
   * @param {object} params
   * @param {string} params.address - the swap address to retrieve
   * @param {string} params.hashkey - the hashkey to unlock the swap
   * @param {string} params.delegator - who authorized this transaction
   * @param {WalletObject} params.wallet - the wallet to sign the transaction
   * @param {object} extra - other param to underlying client implementation
   * @returns {Promise} the `transactionHash` once resolved
   */
  client.retrieveSwap = ({ address, hashkey, delegator, wallet }, extra) =>
    client.sendRetrieveSwapTx(
      {
        tx: { itx: { address, hashkey: toBuffer(hashkey) } },
        delegator,
        wallet,
      },
      extra
    );

  /**
   * Revoke a swap during an atomic-swap process
   *
   * @memberof GraphQLClient
   * @function
   * @name GraphQLClient#revokeSwap
   * @param {object} params
   * @param {string} params.address - the swap address to revoke
   * @param {string} params.delegator - who authorized this transaction
   * @param {WalletObject} params.wallet - the wallet to sign the transaction
   * @param {object} extra - other param to underlying client implementation
   * @returns {Promise} the `transactionHash` once resolved
   */
  client.revokeSwap = ({ address, delegator, wallet }, extra) =>
    client.sendRevokeSwapTx(
      {
        tx: { itx: { address } },
        delegator,
        wallet,
      },
      extra
    );

  /**
   * Transfer token or assets to another account
   *
   * @memberof GraphQLClient
   * @function
   * @name GraphQLClient#transfer
   * @param {object} params
   * @param {number} params.token - how much token can be transferred
   * @param {Array} params.assets - which assets should be transferred
   * @param {string} params.to - who receive the transfer
   * @param {string} params.memo - transaction note
   * @param {string} params.delegator - who authorized this transaction
   * @param {WalletObject} params.wallet - the wallet to sign the transaction
   * @param {object} extra - other param to underlying client implementation
   * @returns {Promise} the `transactionHash` once resolved
   */
  client.transfer = async ({ token = 0, assets = [], to = '', memo = '', delegator = '', wallet }, extra) =>
    client.sendTransferTx(
      {
        tx: {
          itx: {
            to,
            value: await client.fromTokenToUnit(token),
            assets,
            data: {
              typeUrl: 'json',
              value: memo || 'empty',
            },
          },
        },
        delegator,
        wallet,
      },
      extra
    );

  /**
   * Prepare an exchange transaction between multiple accounts
   *
   * @memberof GraphQLClient
   * @function
   * @name GraphQLClient#prepareExchange
   * @param {object} params
   * @param {number} params.offerToken - how much token can be sent
   * @param {Array} params.offerAssets - which assets should be sent
   * @param {number} params.demandToken - how much token can be received
   * @param {Array} params.demandAssets - which assets should be received
   * @param {string} params.receiver - who receive the transfer
   * @param {string} params.memo - transaction note
   * @param {string} params.delegator - which assets should be transferred
   * @param {WalletObject} params.wallet - the wallet who is the offerer
   * @param {object} extra - other param to underlying client implementation
   * @returns {Promise} the `transaction` object once resolved
   */
  client.prepareExchange = async (
    {
      offerToken = 0,
      offerAssets = [],
      demandToken = 0,
      demandAssets = [],
      receiver = '',
      memo = '',
      delegator = '',
      wallet,
    },
    extra
  ) =>
    client.signExchangeTx(
      {
        tx: {
          itx: {
            to: receiver,
            sender: {
              value: await client.fromTokenToUnit(offerToken),
              assets: Array.isArray(offerAssets) ? offerAssets : [],
            },
            receiver: {
              value: await client.fromTokenToUnit(demandToken),
              assets: Array.isArray(demandAssets) ? demandAssets : [],
            },
            data: {
              typeUrl: 'json',
              value: memo || 'empty',
            },
          },
        },
        delegator,
        wallet,
      },
      extra
    );

  /**
   * Finalize an exchange transaction between multiple accounts
   *
   * @memberof GraphQLClient
   * @function
   * @name GraphQLClient#finalizeExchange
   * @param {object} params
   * @param {object} params.tx - the transaction object from `prepareExchange`
   * @param {string} params.delegator - who authorized this transaction
   * @param {object} params.data - extra data in the multi sig
   * @param {WalletObject} params.wallet - the wallet who is the demander
   * @param {object} extra - other param to underlying client implementation
   * @returns {Promise} the `transaction` object once resolved
   */
  client.finalizeExchange = ({ tx, delegator = '', data, wallet }, extra) =>
    client.multiSignExchangeTx(
      {
        tx,
        delegator,
        data,
        wallet,
      },
      extra
    );

  /**
   * Send an exchange transaction
   *
   * @memberof GraphQLClient
   * @function
   * @name GraphQLClient#exchange
   * @param {object} params
   * @param {object} params.tx - the transaction object from `finalizeExchange`
   * @param {WalletObject} params.wallet - the wallet to sign the transaction
   * @param {object} extra - other param to underlying client implementation
   * @returns {Promise} the `transactionHash` once resolved
   */
  client.exchange = ({ tx, wallet }, extra) => client.sendExchangeTx({ tx, wallet }, extra);

  /**
   * Send a poke transaction to get some token for free
   *
   * @memberof GraphQLClient
   * @function
   * @name GraphQLClient#checkin
   * @param {object} params
   * @param {WalletObject} params.wallet - the wallet to sign the transaction, also who will get the token
   * @param {object} extra - other param to underlying client implementation
   * @returns {Promise} the `transactionHash` once resolved
   */
  client.checkin = ({ wallet }, extra) => {
    const date = new Date();
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();

    return client.sendPokeTx(
      {
        tx: {
          nonce: 0,
          itx: {
            date: `${year}-${padStart(month, 2, '0')}-${padStart(day, 2, '0')}`,
            address: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
          },
        },
        wallet,
      },
      extra
    );
  };

  /**
   * Send a refuel transaction to get some gas
   *
   * @memberof GraphQLClient
   * @function
   * @name GraphQLClient#refuel
   * @param {object} params
   * @param {WalletObject} params.wallet - the wallet to sign the transaction, also who will get the token
   * @param {object} params.data - extra data to put in itx
   * @param {object} extra - other param to underlying client implementation
   * @returns {Promise} the `transactionHash` once resolved
   */
  client.refuel = ({ wallet, data }, extra) => {
    const date = new Date();
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();

    return client.sendRefuelTx(
      {
        tx: {
          nonce: 0,
          itx: {
            date: `${year}-${padStart(month, 2, '0')}-${padStart(day, 2, '0')}`,
            data,
          },
        },
        wallet,
      },
      extra
    );
  };
};

module.exports = { createExtensionMethods };
