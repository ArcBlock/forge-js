/* eslint-disable no-underscore-dangle */
/* eslint-disable object-curly-newline */
const camelCase = require('lodash/camelCase');
const snakeCase = require('lodash/snakeCase');
const padStart = require('lodash/padStart');
const errorCodes = require('@arcblock/forge-proto/lib/status_code.json');
const { toDelegateAddress, toSwapAddress, toAssetAddress } = require('@arcblock/did-util');
const { transactions, multiSignTxs } = require('@arcblock/forge-proto/lite');
const { createMessage, getMessageType } = require('@arcblock/forge-message/lite');
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
   * @param {number} number - number of blocks want to lock
   * @param {object} [options={}] - options to underlying methods
   * @returns {number}
   */
  client.toLocktime = async number => {
    const { info } = await client.getChainInfo();
    return +info.blockHeight + number;
  };

  /**
   * List all transaction send methods
   * Each method can send one kind of transactions supported by forge core, such as `DeclareTx`, `PokeTx`
   *
   * @method
   * @returns {Array<string>} method name list
   */
  client.getTxSendMethods = () => transactions.map(x => camelCase(`send_${x}`));

  /**
   * List all transaction encode methods, each method can be used to encode transaction to buffer and object
   *
   * @method
   * @returns {Array<string>} method name list
   */
  client.getTxEncodeMethods = () => transactions.map(x => camelCase(`encode_${x}`));

  /**
   * List all transaction sign methods, each method can be used to sign transaction to an object
   *
   * @method
   * @returns {Array<string>} method name list
   */
  client.getTxSignMethods = () => transactions.map(x => camelCase(`sign_${x}`));

  /**
   * List all transaction multi sign methods, each method can be used to do multi sign a transaction
   *
   * @method
   * @returns {Array<string>} method name list
   */
  client.getTxMultiSignMethods = () => multiSignTxs.map(x => camelCase(`multi_sign_${x}`));

  /**
   * Get protobuf message class by name, only supports forge-built-in types
   *
   * @method
   * @param {string} x
   * @returns {class|null} message type
   */
  client.getType = x => getMessageType(x).fn;

  /**
   * Decode transaction buffer/base64/base58 to an object
   *
   * @method
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
      const [{ state }, { info }] = await Promise.all([
        client.getForgeState(),
        client.getChainInfo(),
      ]);

      client.context = {
        token: state.token,
        poke: state.txConfig.poke,
        chainId: info.network,
      };
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
   * @public
   * @param {object} params
   * @param {string} params.moniker - user nickname
   * @param {string} [params.issuer=""] - who issued the account
   * @param {object} [params.data=undefined] - who issued the account
   * @param {WalletObject} params.wallet - wallet to sign the tx
   * @returns {Promise} the transaction hash once resolved
   */
  client.declare = ({ moniker, issuer = '', data, wallet }) =>
    client.sendDeclareTx({
      tx: {
        itx: { moniker, issuer, data },
      },
      wallet,
    });

  /**
   * Migrate current account to a new account
   *
   * @public
   * @param {object} params
   * @param {WalletObject} params.from - which account to migrate from
   * @param {WalletObject} params.to - which account to migrate to
   * @returns {Promise} the transaction hash once resolved
   */
  client.accountMigrate = ({ from, to }) =>
    client.sendAccountMigrateTx({
      tx: {
        itx: {
          address: to.toAddress(),
          pk: to.publicKey,
          type: to.type,
        },
      },
      wallet: from,
    });

  /**
   * Delegate some privileges to another account
   * So that that account can send transactions on behalf of the delegator
   *
   * @public
   * @param {object} params
   * @param {WalletObject} params.from - the delegator, who grants the privilege to others
   * @param {WalletObject} params.to - the delegatee, who is authorized to send transactions
   * @param {Array} params.privileges - the privilege settings
   * @returns {Promise} the `[transactionHash, delegateAddress]` once resolved
   */
  client.delegate = async ({ from, to, privileges }) => {
    // TODO: add whitelist for delegation privileges
    let ops = Array.isArray(privileges) ? privileges : [privileges];
    ops = ops.map(x => {
      if (x.typeUrl && Array.isArray(x.rules)) {
        return x;
      }

      return { typeUrl: x.typeUrl, rules: [] };
    });

    const address = toDelegateAddress(from.toAddress(), to.toAddress());
    const hash = await client.sendDelegateTx({
      tx: {
        itx: {
          address,
          to: to.toAddress(),
          ops,
        },
      },
      wallet: from,
    });

    return [hash, address];
  };

  /**
   * Revoke a previous delegation
   *
   * @public
   * @param {object} params
   * @param {WalletObject} params.from - the delegator, who grants the privilege to others
   * @param {WalletObject} params.to - the delegatee, who is authorized to send transactions
   * @param {Array} params.privileges - the privilege settings
   * @returns {Promise} the transaction hash once resolved
   */
  client.revokeDelegate = ({ from, to, privileges }) =>
    client.sendRevokeDelegateTx({
      tx: {
        itx: {
          address: toDelegateAddress(from.toAddress(), to.toAddress()),
          to: to.toAddress(),
          typeUrls: privileges.filter(Boolean).map(x => x.toString()),
        },
      },
      wallet: from,
    });

  /**
   * Create an new asset (non-fungible-token)
   *
   * @public
   * @param {object} params
   * @param {string} params.moniker - asset name
   * @param {string} params.parent - asset parent
   * @param {object} params.data - asset data payload
   * @param {number} params.ttl - ttl after first consumption
   * @param {boolean} params.readonly - whether the asset can be updated after creation
   * @param {boolean} params.transferrable - whether the asset can be transferred to another account
   * @param {string} params.delegator - who authorized this transaction
   * @param {WalletObject} params.wallet - the initial owner of the asset
   * @returns {Promise} the `[transactionHash, assetAddress]` once resolved
   */
  client.createAsset = async ({
    moniker,
    parent = '',
    ttl = 0,
    data,
    readonly = false,
    transferrable = true,
    delegator = '',
    wallet,
  }) => {
    const payload = { moniker, parent, ttl, readonly, transferrable, data };
    const address = toAssetAddress(payload);
    payload.address = address;
    const hash = await client.sendCreateAssetTx({
      tx: { itx: payload },
      delegator,
      wallet,
    });
    return [hash, address];
  };

  /**
   * Update an existing asset (non-fungible-token)
   *
   * @public
   * @param {object} params
   * @param {string} params.address - asset address
   * @param {string} params.moniker - asset name
   * @param {object} params.data - asset data payload
   * @param {string} params.delegator - who authorized this transaction
   * @param {WalletObject} params.wallet - the wallet to sign the transaction
   * @returns {Promise} the `transactionHash` once resolved
   */
  client.updateAsset = ({ address, moniker, data, delegator, wallet }) =>
    client.sendUpdateAssetTx({
      tx: {
        itx: {
          moniker,
          address,
          data,
        },
      },
      delegator,
      wallet,
    });

  /**
   * Prepare a transaction that consumes an asset (non-fungible-token)
   *
   * @public
   * @param {object} params
   * @param {string} params.issuer - issuer address
   * @param {string} params.address - parent address
   * @param {object} params.data - extra data payload
   * @param {string} params.delegator - who authorized this transaction
   * @param {WalletObject} params.wallet - the wallet to sign the transaction
   * @returns {Promise} the `transactionHash` once resolved
   */
  client.prepareConsumeAsset = ({ issuer = '', address = '', delegator = '', data, wallet }) =>
    client.signConsumeAssetTx({
      tx: {
        itx: {
          issuer,
          address,
          data,
        },
      },
      delegator,
      wallet,
    });

  /**
   * Prepare a transaction that consumes an asset (non-fungible-token)
   *
   * @public
   * @param {object} params
   * @param {object} params.tx - transaction to finalize, should be result from `prepareConsumeAsset`
   * @param {string} params.address - asset address to be consumed
   * @param {string} params.delegator - who authorized this transaction
   * @param {WalletObject} params.wallet - the wallet to sign the transaction
   * @returns {Promise} the `transactionHash` once resolved
   */
  client.finalizeConsumeAsset = ({ tx, address, delegator, wallet }) =>
    client.multiSignConsumeAssetTx({
      tx,
      wallet,
      delegator,
      data: {
        typeUrl: 'fg:x:address',
        value: address,
      },
    });

  /**
   * Send a transaction that consumes an asset (non-fungible-token)
   *
   * @public
   * @param {object} params
   * @param {object} params.tx - transaction to send, should be result from `finalizeConsumeAsset`
   * @param {WalletObject} params.wallet - the wallet to sign the transaction
   * @returns {Promise} the `transactionHash` once resolved
   */
  client.consumeAsset = ({ tx, wallet }) => client.sendConsumeAssetTx({ tx, wallet });

  /**
   * Create an asset factory that can be used to produce multiple assets in a transaction
   *
   * @public
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
   * @returns {Promise} the `[transactionHash, factoryAddress]` once resolved
   */
  client.createAssetFactory = async ({
    moniker,
    factory,
    readonly = false,
    transferrable = true,
    delegator = '',
    wallet,
  }) => {
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
          attributes: factory.attributes,
        },
      },
    };
    const factoryAddress = toAssetAddress(payload);
    payload.address = factoryAddress;

    const hash = await client.sendCreateAssetTx({
      tx: {
        itx: payload,
      },
      delegator,
      wallet,
    });
    return [hash, factoryAddress];
  };

  /**
   * Acquire an asset from factory
   *
   * @public
   * @param {object} params
   * @param {string} params.assetFactory - Asset factory address
   * @param {string} params.assetName - Asset type
   * @param {Array} params.assetVariables - list of asset variables that can be populated into asset factory template
   * @param {boolean} params.readonly - whether the asset can be updated after creation, should match factory settings
   * @param {boolean} params.transferrable - whether the asset can be transferred to another account, should match factory settings
   * @param {number} params.ttl - asset expire
   * @param {string} params.delegator - who authorized this transaction
   * @param {WalletObject} params.wallet - the initial owner of the asset
   * @returns {Promise} the `[transactionHash, [assetAddress]]` once resolved
   */
  client.acquireAsset = async ({
    assetFactory,
    assetName,
    assetVariables,
    readonly,
    transferrable,
    delegator = '',
    wallet,
  }) => {
    if (!assetFactory) {
      throw new Error('Must specify asset factory address');
    }
    if (!assetName) {
      throw new Error('Must specify asset name');
    }
    if (!Array.isArray(assetVariables)) {
      throw new Error('Must specify at least on asset template variable');
    }

    const assets = assetVariables.map(x => {
      const payload = {
        ttl: 0,
        readonly,
        transferrable,
        parent: assetFactory,
        data: {
          type: assetName,
          value: x,
        },
      };

      const address = toAssetAddress(payload);

      return { address, data: JSON.stringify(x) };
    });

    const hash = await client.sendAcquireAssetTx({
      tx: {
        itx: {
          to: assetFactory,
          specs: assets,
        },
      },
      delegator,
      wallet,
    });

    return [hash, assets.map(x => x.address)];
  };

  /**
   * Do an on-chain upgrade, should be used with forge-cli
   *
   * @public
   * @param {object} params
   * @param {number} params.height - at which height should the chain stop to perform the upgrade
   * @param {string} params.version - to which version should upgrade to
   * @param {string} params.delegator - who authorized this transaction
   * @param {WalletObject} params.wallet - the wallet to sign the transaction
   * @returns {Promise} the `transactionHash` once resolved
   */
  client.upgradeNode = ({ height, version, delegator, wallet }) =>
    client.sendUpgradeNodeTx({
      tx: { itx: { height, version, override: true } },
      delegator,
      wallet,
    });

  /**
   * Deploy a contract to a running chain node, requires moderator privilege
   *
   * @public
   * @param {object} params
   * @param {object} params.payload - the contract payload, usually from `forge contract:compile`
   * @param {string} params.delegator - who authorized this transaction
   * @param {WalletObject} params.wallet - the wallet to sign the transaction
   * @returns {Promise} the `transactionHash` once resolved
   */
  client.deployContract = ({ payload, delegator, wallet }) =>
    client.sendDeployProtocolTx({
      tx: { itx: payload },
      delegator,
      wallet,
    });

  /**
   * Activate an previously paused/disabled contract
   *
   * @public
   * @param {object} params
   * @param {string} params.address - the contract address to activate
   * @param {string} params.delegator - who authorized this transaction
   * @param {WalletObject} params.wallet - the wallet to sign the transaction
   * @returns {Promise} the `transactionHash` once resolved
   */
  client.activateContract = ({ address, delegator, wallet }) =>
    client.sendActivateProtocolTx({
      tx: { itx: { address } },
      delegator,
      wallet,
    });

  /**
   * Deactivate an previously running/enabled contract
   *
   * @public
   * @param {object} params
   * @param {string} params.address - the contract address to deactivate
   * @param {string} params.delegator - who authorized this transaction
   * @param {WalletObject} params.wallet - the wallet to sign the transaction
   * @returns {Promise} the `transactionHash` once resolved
   */
  client.deactivateContract = ({ address, delegator, wallet }) =>
    client.sendDeactivateProtocolTx({
      tx: { itx: { address } },
      delegator,
      wallet,
    });

  /**
   * Setup a swap that's used to accomplish cross-chain operations
   *
   * @public
   * @param {object} params
   * @param {number} params.token - how much token to offer
   * @param {Array} params.assets - how much assets to offer
   * @param {string} params.receiver - who can retrieve this swap
   * @param {string} params.hashlock - sha3 from hashkey
   * @param {string} params.delegator - who authorized this transaction
   * @param {number} [params.locktime=1000] - how much block height to lock the swap before it can be revoked
   * @param {WalletObject} params.wallet - the wallet to sign the transaction
   * @returns {Promise} the `[transactionHash, swapAddress]` once resolved
   */
  client.setupSwap = async ({
    token = 0,
    assets = [],
    receiver = '',
    hashlock = '',
    locktime = 1000,
    delegator = '',
    wallet,
  }) => {
    const hash = await client.sendSetupSwapTx({
      tx: {
        itx: {
          value: await client.fromTokenToUnit(token),
          assets,
          receiver,
          hashlock: toBuffer(hashlock),
          locktime: await client.toLocktime(locktime),
        },
      },
      delegator,
      wallet,
    });

    const address = toSwapAddress(`0x${hash}`);
    return [hash, address];
  };

  /**
   * Retrieve a swap during an atomic-swap process
   *
   * @public
   * @param {object} params
   * @param {string} params.address - the swap address to retrieve
   * @param {string} params.hashkey - the hashkey to unlock the swap
   * @param {string} params.delegator - who authorized this transaction
   * @param {WalletObject} params.wallet - the wallet to sign the transaction
   * @returns {Promise} the `transactionHash` once resolved
   */
  client.retrieveSwap = ({ address, hashkey, delegator, wallet }) =>
    client.sendRetrieveSwapTx({
      tx: { itx: { address, hashkey: toBuffer(hashkey) } },
      delegator,
      wallet,
    });

  /**
   * Revoke a swap during an atomic-swap process
   *
   * @public
   * @param {object} params
   * @param {string} params.address - the swap address to revoke
   * @param {string} params.delegator - who authorized this transaction
   * @param {WalletObject} params.wallet - the wallet to sign the transaction
   * @returns {Promise} the `transactionHash` once resolved
   */
  client.revokeSwap = ({ address, delegator, wallet }) =>
    client.sendRevokeSwapTx({
      tx: { itx: { address } },
      delegator,
      wallet,
    });

  /**
   * Transfer token or assets to another account
   *
   * @public
   * @param {object} params
   * @param {number} params.token - how much token can be transferred
   * @param {Array} params.assets - which assets should be transferred
   * @param {string} params.to - who receive the transfer
   * @param {string} params.memo - transaction note
   * @param {string} params.delegator - who authorized this transaction
   * @param {WalletObject} params.wallet - the wallet to sign the transaction
   * @returns {Promise} the `transactionHash` once resolved
   */
  client.transfer = async ({
    token = 0,
    assets = [],
    to = '',
    memo = '',
    delegator = '',
    wallet,
  }) =>
    client.sendTransferTx({
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
    });

  /**
   * Prepare an exchange transaction between multiple accounts
   *
   * @public
   * @param {object} params
   * @param {number} params.offerToken - how much token can be sent
   * @param {Array} params.offerAssets - which assets should be sent
   * @param {number} params.demandToken - how much token can be received
   * @param {Array} params.demandAssets - which assets should be received
   * @param {string} params.receiver - who receive the transfer
   * @param {string} params.memo - transaction note
   * @param {string} params.delegator - which assets should be transferred
   * @param {WalletObject} params.wallet - the wallet who is the offerer
   * @returns {Promise} the `transaction` object once resolved
   */
  client.prepareExchange = async ({
    offerToken = 0,
    offerAssets = [],
    demandToken = 0,
    demandAssets = [],
    receiver = '',
    memo = '',
    delegator = '',
    wallet,
  }) =>
    client.signExchangeTx({
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
    });

  /**
   * Finalize an exchange transaction between multiple accounts
   *
   * @public
   * @param {object} params
   * @param {object} params.tx - the transaction object from `prepareExchange`
   * @param {string} params.delegator - who authorized this transaction
   * @param {object} params.data - extra data in the multi sig
   * @param {WalletObject} params.wallet - the wallet who is the demander
   * @returns {Promise} the `transaction` object once resolved
   */
  client.finalizeExchange = ({ tx, delegator = '', data, wallet }) =>
    client.multiSignExchangeTx({
      tx,
      delegator,
      data,
      wallet,
    });

  /**
   * Send an exchange transaction
   *
   * @public
   * @param {object} params
   * @param {object} params.tx - the transaction object from `finalizeExchange`
   * @param {WalletObject} params.wallet - the wallet to sign the transaction
   * @returns {Promise} the `transactionHash` once resolved
   */
  client.exchange = ({ tx, wallet }) => client.sendExchangeTx({ tx, wallet });

  /**
   * Send an poke transaction to get some token for free
   *
   * @public
   * @param {object} params
   * @param {WalletObject} params.wallet - the wallet to sign the transaction, also who will get the token
   * @returns {Promise} the `transactionHash` once resolved
   */
  client.checkin = ({ wallet }) => {
    const date = new Date();
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();

    return client.sendPokeTx({
      tx: {
        nonce: 0,
        itx: {
          date: `${year}-${padStart(month, 2, '0')}-${padStart(day, 2, '0')}`,
          address: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
        },
      },
      wallet,
    });
  };
};

module.exports = { createExtensionMethods };
