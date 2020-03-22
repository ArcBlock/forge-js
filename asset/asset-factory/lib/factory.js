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

const AssetIssuer = require('./issuer');
const AssetRecipient = require('./recipient');
const { AssetStatus, AssetType } = require('./enum');

/**
 * Used to create standard asset on forge powered blockchain
 * All assets are signed assets, eg, the asset data are self approvable
 *
 * @class AssetFactory
 */
class AssetFactory {
  /**
   * Creates an instance of AssetFactory.
   * @param {object} params
   * @param {string} params.chainId - on which chain to create wallet
   * @param {string} params.chainHost - on which chain to create wallet
   * @param {WalletObject} params.wallet - issuer wallet
   * @param {object} params.issuer - issuer attributes, such as name, url and logo
   * @memberof AssetFactory
   */
  constructor({ chainId, chainHost, wallet, issuer }) {
    if (!chainId) {
      throw new Error('AssetFactory requires valid chainId');
    }
    if (!chainHost) {
      throw new Error('AssetFactory requires valid chainId');
    }

    ForgeSDK.connect(chainHost, { chainId, name: chainId });

    if (isValid(wallet) === false) {
      throw new Error('AssetFactory requires valid wallet issuer');
    }

    this.chainId = chainId;
    this.chainHost = chainHost;
    this.wallet = wallet;
    this.issuer = new AssetIssuer(Object.assign({ wallet }, issuer));
  }

  /**
   * Create a ticket
   *
   * @param {object} params
   * @param {string} params.backgroundUrl - asset background
   * @param {object} params.data - asset payload
   * @param {string} params.data.name - ticket name
   * @param {string} params.data.description - ticket description
   * @param {string} params.data.location - event location
   * @param {AssetIssuer} params.data.host - event host
   * @param {number} params.data.startTime - event start time
   * @param {number} params.data.endTime - event end time
   * @param {object} params.attributes - asset attributes
   * @returns {Promise} - the `[asset, hash]` on resolved
   * @memberof AssetFactory
   */
  async createTicket({ backgroundUrl = '', data = {}, attributes = {} }) {
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

    if (!(data.host instanceof AssetIssuer)) {
      throw new Error('Invalid host field when creating ticket asset');
    }

    const { name, description, location, host, startTime, endTime } = data;
    const payload = {
      backgroundUrl,
      type: AssetType.ticket,
      status: AssetStatus.normal,
      issuer: this.issuer.toJSON(),
      data: {
        name,
        description,
        location,
        host: host.toJSON(),
        startTime: +new Date(startTime),
        endTime: +new Date(endTime),
      },
    };

    debug('createTicket.payload', payload);
    return this.createSignedAsset(payload, attributes);
  }

  /**
   * Create a coupon asset
   *
   * @param {object} params
   * @param {string} params.backgroundUrl - asset background
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
   * @memberof AssetFactory
   */
  async createCoupon({ backgroundUrl = '', data = {}, attributes = {} }) {
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

    const { name, description, ratio, amount, minAmount, startTime, expireTime } = data;
    const payload = {
      backgroundUrl,
      type: AssetType.coupon,
      status: AssetStatus.normal,
      issuer: this.issuer.toJSON(),
      data: {
        name,
        description,
        ratio,
        amount,
        minAmount,
        startTime,
        expireTime,
      },
    };
    debug('createCoupon.payload', payload);

    return this.createSignedAsset(payload, attributes);
  }

  /**
   * Create a coupon asset
   *
   * @param {object} params
   * @param {string} params.backgroundUrl - asset background
   * @param {object} params.data - asset payload
   * @param {string} params.data.name - certificate name
   * @param {string} params.data.description - certificate description
   * @param {string} params.data.reason - certificate reason
   * @param {string} params.data.logoUrl - certificate logo
   * @param {AssetRecipient} params.data.recipient - certificate recipient
   * @param {number} params.data.issueTime - when was certificate issued
   * @param {number} params.data.expireTime - when will certificate expire
   * @param {object} params.attributes - asset attributes
   * @returns {Promise} - the `[asset, hash]` on resolved
   * @memberof AssetFactory
   */
  async createCertificate({ backgroundUrl = '', data = {}, attributes = {} }) {
    return this._createCert({ backgroundUrl, data, attributes, type: 'certificate' });
  }

  async createBadge({ data = {}, attributes = {} }) {
    const { name, recipient, description, display, type } = data;

    const vc = create({
      type,
      issuer: {
        wallet: this.wallet,
        name: this.issuer.name,
      },
      subject: {
        id: recipient.wallet.toAddress(),
        name,
        description,
        display: this._createDisplay(display),
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
          typeUrl:
            payload.type === 'WalletPlaygroundAchievement' ||
            (Array.isArray(payload.type) && payload.type.includes('VerifiableCredential'))
              ? 'vc'
              : 'json',
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

  async _createCert({ backgroundUrl = '', data = {}, attributes = {}, type }) {
    const requiredFields = ['name', 'description', 'reason', 'logoUrl'];
    const timeFields = ['issueTime', 'expireTime'];

    requiredFields.forEach(x => {
      if (!data[x]) {
        throw new Error(`Missing required field ${x} when creating ${type} asset`);
      }
    });

    timeFields.forEach(x => {
      if (!isDate(new Date(data[x]))) {
        throw new Error(`Invalid date field ${x} when creating ${type} asset`);
      }
    });

    if (!(data.recipient instanceof AssetRecipient)) {
      throw new Error(`Invalid recipient field when creating ${type} asset`);
    }

    const { name, description, reason, logoUrl, recipient, issueTime, expireTime } = data;
    const payload = {
      backgroundUrl,
      type: AssetType[type],
      status: AssetStatus.normal,
      issuer: this.issuer.toJSON(),
      data: {
        name,
        description,
        reason,
        logoUrl,
        recipient: recipient.toJSON(),
        issueTime,
        expireTime,
      },
    };
    debug('createCertificate.payload', payload);

    return this.createSignedAsset(payload, attributes);
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

module.exports = AssetFactory;
