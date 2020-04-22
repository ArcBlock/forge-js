/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
const ForgeSDK = require('@arcblock/forge-sdk');
const { isValid } = require('@arcblock/forge-wallet');
const get = require('lodash/get');
const cloneDeep = require('lodash/cloneDeep');
const isDate = require('lodash/isDate');
const isNumber = require('lodash/isNumber');
const stringify = require('json-stable-stringify');
const { create } = require('@arcblock/vc');
const debug = require('debug')(require('../package.json').name);

const NFTIssuer = require('./issuer');
const NFTRecipient = require('./recipient');

/**
 * Used to create standard asset on forge powered blockchain
 * All assets are signed assets, eg, the asset data are self approvable
 *
 * @class NFTFactory
 */
class NFTFactory {
  /**
   * Creates an instance of NFTFactory.
   * @param {object} params
   * @param {string} params.chainId - on which chain to create wallet
   * @param {string} params.chainHost - on which chain to create wallet
   * @param {WalletObject} params.wallet - issuer wallet
   * @param {object} params.issuer - issuer attributes, such as name, url and logo
   * @memberof NFTFactory
   */
  constructor({ chainId, chainHost, wallet, issuer }) {
    if (!chainId) {
      throw new Error('NFTFactory requires valid chainId');
    }
    if (!chainHost) {
      throw new Error('NFTFactory requires valid chainId');
    }

    ForgeSDK.connect(chainHost, { chainId, name: chainId });

    if (isValid(wallet) === false) {
      throw new Error('NFTFactory requires valid wallet issuer');
    }

    this.chainId = chainId;
    this.chainHost = chainHost;
    this.wallet = wallet;
    this.issuer = new NFTIssuer(Object.assign({ wallet }, issuer));
  }

  /**
   * Create a ticket
   *
   * @param {object} params
   * @param {string} params.display - display of the ticket { type, content }
   * @param {object} params.data - asset payload
   * @param {string} params.data.name - ticket name
   * @param {string} params.data.description - ticket description
   * @param {string} params.data.location - event location
   * @param {NFTIssuer} params.data.host - event host
   * @param {number} params.data.startTime - event start time
   * @param {number} params.data.endTime - event end time
   * @param {object} params.attributes - asset attributes
   * @returns {Promise} - the `[asset, hash]` on resolved
   * @memberof NFTFactory
   */
  async createTicket({ display = '', data = {}, attributes = {} }) {
    const requiredFields = ['name', 'description', 'location', 'host'];
    const timeFields = ['startTime', 'endTime'];

    requiredFields.forEach(x => {
      if (!data[x]) {
        throw new Error(`Missing required field ${x} when creating ticket asset`);
      }
    });

    timeFields.forEach(x => {
      if (!isDate(new Date(data[x]))) {
        throw new Error(`Invalid date field ${x} when creating ticket asset`);
      }
    });

    if (!(data.recipient instanceof NFTRecipient)) {
      throw new Error(`Invalid recipient field when creating ${type} asset`);
    }

    if (!(data.host instanceof NFTIssuer)) {
      throw new Error('Invalid host field when creating ticket asset');
    }

    const { name, description, location, host, recipient, type, startTime, endTime, display: innerDisplay = '' } = data;

    const vc = create({
      type: [type, 'NFTTicket', 'VerifiableCredential'].filter(Boolean),
      issuer: {
        wallet: host.wallet,
        name: host.name,
      },
      subject: {
        id: recipient.wallet.toAddress(),
        name,
        description,
        location,
        display: this._createDisplay(display || innerDisplay),
      },
      issuanceDate: +new Date(startTime),
      expirationDate: +new Date(endTime),
    });
    debug('createTicket.vc', vc);
    return this.createSignedAsset(vc, attributes);
  }

  /**
   * Create a coupon asset
   *
   * @param {object} params
   * @param {string} params.display - display of the coupon { type, content }
   * @param {object} params.data - asset payload
   * @param {string} params.data.name - coupon name
   * @param {string} params.data.description - coupon description
   * @param {number} params.data.ratio - discount ratio
   * @param {number} params.data.amount - discount amount
   * @param {number} params.data.minAmount - min order amount that this coupon can be used
   * @param {number} params.data.startTime - event start time
   * @param {number} params.data.endTime - event end time
   * @param {object} params.attributes - asset attributes
   * @returns {Promise} - the `[asset, hash]` on resolved
   * @memberof NFTFactory
   */
  async createCoupon({ display = '', data = {}, attributes = {} }) {
    const requiredFields = ['name', 'description'];
    const numberFields = ['ratio', 'amount', 'minAmount'];
    const timeFields = ['startTime', 'expireTime'];

    requiredFields.forEach(x => {
      if (!data[x]) {
        throw new Error(`Missing required field ${x} when creating coupon asset`);
      }
    });

    numberFields.forEach(x => {
      if (!data[x] || !isNumber(data[x])) {
        throw new Error(`Invalid number field ${x} when creating coupon asset`);
      }
    });

    timeFields.forEach(x => {
      if (!isDate(new Date(data[x]))) {
        throw new Error(`Invalid date field ${x} when creating coupon asset`);
      }
    });

    const {
      name,
      description,
      ratio,
      amount,
      location,
      minAmount,
      startTime,
      expireTime,
      type,
      recipient,
      display: innerDisplay = '',
    } = data;

    const vc = create({
      type: [type, 'NFTCoupon', 'VerifiableCredential'].filter(Boolean),
      issuer: {
        wallet: this.issuer.wallet,
        name: this.issuer.name,
      },
      subject: {
        id: recipient.wallet.toAddress(),
        name,
        description,
        location,
        ratio,
        amount,
        minAmount,
        display: this._createDisplay(display || innerDisplay),
      },
      issuanceDate: +new Date(startTime),
      expirationDate: +new Date(expireTime),
    });
    debug('createTicket.coupon', vc);
    return this.createSignedAsset(vc, attributes);
  }

  /**
   * Create a coupon asset
   *
   * @param {object} params
   * @param {string} params.display - display of the certificate { type, content }
   * @param {object} params.data - asset payload
   * @param {string} params.data.name - certificate name
   * @param {string} params.data.description - certificate description
   * @param {string} params.data.reason - certificate reason
   * @param {string} params.data.logoUrl - certificate logo
   * @param {NFTRecipient} params.data.recipient - certificate recipient
   * @param {number} params.data.issueTime - when was certificate issued
   * @param {number} params.data.expireTime - when will certificate expire
   * @param {object} params.attributes - asset attributes
   * @returns {Promise} - the `[asset, hash]` on resolved
   * @memberof NFTFactory
   */
  async createCertificate({ display = '', data = {}, attributes = {} }) {
    return this._createCert({ data, display, attributes });
  }

  /**
   * Create a badge
   *
   * @param {object} params
   * @param {string} params.display - display of the certificate { type, content }
   * @param {object} params.data - asset payload
   * @param {string} params.data.name - certificate name
   * @param {string} params.data.description - certificate description
   * @param {NFTRecipient} params.data.recipient - certificate recipient
   * @param {object} params.attributes - asset attributes
   * @returns {Promise} - the `[asset, hash]` on resolved
   * @memberof NFTFactory
   */
  async createBadge({ display = '', data = {}, attributes = {} }) {
    const { name, recipient, description, display: innerDisplay = '', type } = data;

    const vc = create({
      type: [type, 'NFTBadge', 'VerifiableCredential'].filter(Boolean),
      issuer: {
        wallet: this.wallet,
        name: this.issuer.name,
      },
      subject: {
        id: recipient.wallet.toAddress(),
        name,
        description,
        display: this._createDisplay(display || innerDisplay),
      },
    });
    return this.createSignedAsset(vc, attributes);
  }

  async createSignedAsset(payload, attributes) {
    const signature = ForgeSDK.Util.toBase58(this.wallet.sign(stringify(payload)));
    payload.signature = signature;
    const moniker = get(payload, 'data.name') || get(payload, 'credentialSubject.name') || 'signed_asset';
    const asset = Object.assign(
      {
        moniker,
        readonly: false,
        transferrable: true,
        data: {
          typeUrl: 'vc',
          value: payload,
        },
      },
      attributes
    );
    asset.address = ForgeSDK.Util.toAssetAddress(asset);

    const hash = await ForgeSDK.sendCreateAssetTx(
      {
        tx: { itx: asset },
        wallet: this.wallet,
      },
      { conn: this.chainId }
    );

    return [asset, hash];
  }

  _createDisplay(display) {
    if (display) {
      if (typeof display === 'string') {
        return { type: 'svg_gzipped', content: display };
      }
      return display;
    }

    return {};
  }

  async _createCert({ display = '', data = {}, attributes = {} }) {
    const requiredFields = ['name', 'description', 'reason', 'logoUrl'];
    const timeFields = ['issueTime', 'expireTime'];

    requiredFields.forEach(x => {
      if (!data[x]) {
        throw new Error(`Missing required field ${x} when creating certificate`);
      }
    });

    timeFields.forEach(x => {
      if (!isDate(new Date(data[x]))) {
        throw new Error(`Invalid date field ${x} when creating certificate`);
      }
    });

    if (!(data.recipient instanceof NFTRecipient)) {
      throw new Error('Invalid recipient field when creating certificate');
    }

    const {
      name,
      description,
      reason,
      logoUrl,
      recipient,
      issueTime,
      type,
      expireTime,
      display: innerDisplay = '',
    } = data;
    const vc = create({
      type: [type, 'NFTCertificate', 'VerifiableCredential'].filter(Boolean),
      issuer: {
        wallet: this.wallet,
        name: this.issuer.name,
      },
      subject: {
        id: recipient.wallet.toAddress(),
        name,
        description,
        reason,
        logoUrl,
        display: this._createDisplay(display || innerDisplay),
      },
      issuanceDate: +new Date(issueTime),
      expirationDate: +new Date(expireTime),
    });
    debug('createCert.vc', vc);
    return this.createSignedAsset(vc, attributes);
  }

  getVCBody(asset) {
    if (!asset.data) {
      return null;
    }
    if (!asset.data.typeUrl) {
      return null;
    }

    if (asset.data.typeUrl === 'vc') {
      const vc = cloneDeep(asset.data.value);
      delete vc.signature; // we need to strip the signature from outside
      return vc;
    }

    return null;
  }
}

module.exports = NFTFactory;
