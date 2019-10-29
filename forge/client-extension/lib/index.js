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
     * @param {object} input.delegatee - the wallet address that delegated permissions to the `input.wallet` address
     * @returns Promise
     */
    const txEncodeFn = async ({ tx, wallet, delegatee }) => {
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
        from: tx.delegator ? address : delegatee || address,
        nonce,
        pk,
        chainId,
        signature: tx.signature || Buffer.from([]),
        signatures,
        delegator: tx.delegator || (delegatee ? address : ''),
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
     * @param {object} input.delegatee - the wallet address that delegated permissions to the `input.wallet` address
     * @returns {Promise<string>}
     */
    const txSendFn = async ({ tx, wallet, signature, delegatee, commit = false }) => {
      let encoded;
      if (signature) {
        encoded = tx;
        encoded.signature = signature;
      } else if (tx.signature) {
        const res = await txEncodeFn({ tx, wallet, delegatee });
        encoded = res.object;
      } else {
        const res = await txEncodeFn({ tx, wallet, delegatee });
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
    const txSignFn = async ({ tx, wallet, delegatee, encoding = '' }) => {
      if (tx.signature) {
        delete tx.signature;
      }

      const { object, buffer } = await txEncodeFn({ tx, wallet, delegatee });
      object.signature = wallet.sign(buffer);

      return _formatEncodedTx(object, encoding);
    };
    const signMethod = camelCase(`sign_${x}`);
    txSignFn.__tx__ = signMethod;
    client[signMethod] = txSignFn;

    // TODO: verify existing signatures before adding new signatures
    // Generate transaction multi sign function
    if (multiSignTxs.includes(x)) {
      const txMultiSignFn = async ({ tx, wallet, delegatee, data, encoding = '' }) => {
        if (typeof wallet.toAddress !== 'function') {
          throw new Error('Multisig requires a valid wallet');
        }
        tx.signaturesList = tx.signatures || tx.signaturesList || [];
        tx.signaturesList.unshift({
          pk: wallet.publicKey,
          signer: wallet.toAddress(),
          delegator: delegatee || '',
          data,
        });

        const { object, buffer } = await txEncodeFn({ tx, wallet });
        object.signaturesList[0].signature = wallet.sign(bytesToHex(buffer));
        return _formatEncodedTx(object, encoding);
      };
      const multiSignMethod = camelCase(`multi_sign_${x}`);
      txMultiSignFn.__tx__ = multiSignMethod;
      client[multiSignMethod] = txMultiSignFn;
    }
  });

  // Account related
  client.declare = ({ moniker, wallet }) =>
    client.sendDeclareTx({
      tx: {
        itx: { moniker },
      },
      wallet,
    });

  client.migrate = ({ from, to }) =>
    client.sendDeclareTx({
      tx: {
        itx: {
          address: to.toAddress(),
          pk: to.publicKey,
          type: to.type,
        },
      },
      wallet: from,
    });

  client.delegate = ({ from, to, privileges }) => {
    let ops = Array.isArray(privileges) ? privileges : [privileges];
    ops = ops.map(x => {
      if (x.typeUrl && Array.isArray(x.rules)) {
        return x;
      }

      return { typeUrl: x.typeUrl, rules: [] };
    });

    return client.sendDelegateTx({
      tx: {
        itx: {
          address: toDelegateAddress(from.toAddress(), to.toAddress()),
          to: to.toAddress(),
          ops,
        },
      },
      wallet: from,
    });
  };

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

  // Asset related
  client.createAsset = async ({
    moniker,
    data,
    readonly = false,
    transferrable = true,
    wallet,
  }) => {
    const payload = { moniker, readonly, transferrable, data };
    const address = toAssetAddress(payload);
    payload.address = address;
    const hash = await client.sendCreateAssetTx({
      tx: { itx: payload },
      wallet,
    });
    return [hash, address];
  };
  client.updateAsset = ({ address, moniker, data, wallet }) =>
    client.sendUpdateAssetTx({
      tx: {
        itx: {
          moniker,
          address,
          data,
        },
      },
      wallet,
    });
  client.prepareConsumeAsset = ({ issuer = '', address = '', data, wallet }) =>
    client.signConsumeAssetTx({
      tx: {
        itx: {
          issuer,
          address,
          data,
        },
      },
      wallet,
    });
  client.finalizeConsumeAsset = ({ tx, address, wallet }) =>
    client.multiSignConsumeAssetTx({
      tx,
      wallet,
      data: {
        typeUrl: 'fg:x:address',
        value: address,
      },
    });
  client.consumeAsset = ({ tx, wallet }) => client.sendConsumeAssetTx({ tx, wallet });

  // Governance related
  client.upgradeNode = ({ height, version, wallet }) =>
    client.sendUpgradeNodeTx({
      tx: { itx: { height, version, override: true } },
      wallet,
    });
  client.deployProtocol = ({ payload, wallet }) =>
    client.sendDeployProtocolTx({
      tx: { itx: payload },
      wallet,
    });
  client.activateProtocol = ({ address, wallet }) =>
    client.sendActivateProtocolTx({
      tx: { itx: { address } },
      wallet,
    });
  client.deactivateProtocol = ({ address, wallet }) =>
    client.sendDeactivateProtocolTx({
      tx: { itx: { address } },
      wallet,
    });

  // Swap related
  client.setupSwap = async ({
    token = 0,
    assets = [],
    receiver = '',
    hashlock = '',
    locktime = 1000,
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
      wallet,
    });

    const address = toSwapAddress(`0x${hash}`);
    return [hash, address];
  };
  client.retrieveSwap = ({ address, hashkey, wallet }) =>
    client.sendRetrieveSwapTx({
      tx: { itx: { address, hashkey: toBuffer(hashkey) } },
      wallet,
    });
  client.revokeSwap = ({ address, wallet }) =>
    client.sendRevokeSwapTx({
      tx: { itx: { address } },
      wallet,
    });

  // Trade related
  client.transfer = async ({
    token = 0,
    assets = [],
    to = '',
    memo = '',
    delegatee = '',
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
      delegatee,
      wallet,
    });
  client.prepareExchange = async ({
    offerToken = 0,
    offerAssets = [],
    demandToken = 0,
    demandAssets = [],
    receiver = '',
    memo = '',
    delegatee = '',
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
      delegatee,
      wallet,
    });
  client.finalizeExchange = ({ tx, delegatee = '', wallet }) =>
    client.multiSignExchangeTx({
      tx,
      delegatee,
      wallet,
    });
  client.exchange = ({ tx, wallet }) => client.sendExchangeTx({ tx, wallet });

  // Misc
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
