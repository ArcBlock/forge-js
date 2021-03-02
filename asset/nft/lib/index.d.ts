// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

declare class NFTIssuer {
  wallet: any;
  attributes: _Lib.T104;
  /**
   * Creates an instance of NFTIssuer.
   *
   * @param {object} attributes
   * @param {WalletObject} attributes.wallet - wallet
   * @param {string} attributes.name - issuer name
   * @param {string} attributes.url - issuer website
   * @param {string} attributes.logo -  issuer logo image url or logo base64
   */
  constructor(T102: _Lib.T103);
  toJSON(): _Lib.T105 & _Lib.T104;
}
declare class NFTRecipient {
  wallet: any;
  attributes: _Lib.T108;
  /**
   * Creates an instance of NFTRecipient.
   *
   * @param {object} attributes
   * @param {WalletObject} attributes.wallet - wallet
   * @param {string} attributes.name - recipient name
   * @param {string} attributes.location - recipient website
   */
  constructor(T106: _Lib.T107);
  toJSON(): _Lib.T105 & _Lib.T108;
}
/**
 * Used to create standard asset on forge powered blockchain
 * All assets are signed assets, eg, the asset data are self approvable
 *
 * @class NFTFactory
 */
declare class NFTFactory {
  chainId: string;
  chainHost: string;
  wallet: any;
  issuer: NFTIssuer;
  /**
   * Creates an instance of NFTFactory.
   * @param {object} params
   * @param {string} params.chainId - on which chain to create wallet
   * @param {string} params.chainHost - on which chain to create wallet
   * @param {WalletObject} params.wallet - issuer wallet
   * @param {object} params.issuer - issuer attributes, such as name, url and logo
   * @memberof NFTFactory
   */
  constructor(T109: _Lib.T110);
  /**
   * Create a ticket
   *
   * @param {object} params
   * @param {string} params.display - display of the ticket { type, content }
   * @param {object} params.data - asset payload
   * @param {string} params.data.name - ticket name
   * @param {string} params.data.description - ticket description
   * @param {string} params.data.location - event location
   * @param {number} params.data.startTime - event start time
   * @param {number} params.data.endTime - event end time
   * @param {object} params.attributes - asset attributes
   * @returns {Promise} - the `[asset, hash]` on resolved
   * @memberof NFTFactory
   */
  createTicket(T111: _Lib.T113): Promise<any>;
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
  createCoupon(T114: _Lib.T116): Promise<any>;
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
  createCertificate(T117: _Lib.T119): Promise<any>;
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
  createBadge(T120: _Lib.T122): Promise<any>;
  createSignedAsset(payload: any, attributes: any): Promise<any[]>;
  getVCBody(asset: any): any;
}
declare const _Lib: _Lib.T123;
declare namespace _Lib {
  export interface T100 {
    normal: number;
    consumed: number;
    invalid: number;
    expired: number;
  }
  export interface T101 {
    ticket: number;
    coupon: number;
    certificate: number;
    badge: number;
    license: number;
    giftcard: number;
    passport: number;
    idcard: number;
    receipt: number;
    other: number;
  }
  export interface T103 {
    wallet: any;
    name: string;
    url: string;
    logo: string;
  }
  export interface T104 {
    name: string;
    url: string;
    logo: string;
  }
  export interface T105 {
    did: any;
    pk: string;
  }
  export interface T107 {
    wallet: any;
    name: string;
    location: string;
  }
  export interface T108 {
    name: string;
    location: string;
  }
  export interface T110 {
    chainId: string;
    chainHost: string;
    wallet: any;
    issuer: any;
  }
  export interface T112 {
    name: string;
    description: string;
    location: string;
    startTime: number;
    endTime: number;
  }
  export interface T113 {
    display: string;
    data: _Lib.T112;
    attributes: any;
  }
  export interface T115 {
    name: string;
    description: string;
    ratio: number;
    amount: number;
    minAmount: number;
    startTime: number;
    endTime: number;
  }
  export interface T116 {
    display: string;
    data: _Lib.T115;
    attributes: any;
  }
  export interface T118 {
    name: string;
    description: string;
    reason: string;
    logoUrl: string;
    recipient: NFTRecipient;
    issueTime: number;
    expireTime: number;
  }
  export interface T119 {
    display: string;
    data: _Lib.T118;
    attributes: any;
  }
  export interface T121 {
    name: string;
    description: string;
    recipient: NFTRecipient;
  }
  export interface T122 {
    display: string;
    data: _Lib.T121;
    attributes: any;
  }
  export interface T123 {
    NFTStatus: Readonly<_Lib.T100>;
    NFTType: Readonly<_Lib.T101>;
    NFTIssuer: typeof NFTIssuer;
    NFTRecipient: typeof NFTRecipient;
    NFTFactory: typeof NFTFactory;
  }
}
export = _Lib;
