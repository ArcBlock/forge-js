const AssetType = Object.freeze({
  ticket: 0,
  coupon: 1,
  certificate: 2,
  badge: 3,
  license: 4,
  giftcard: 5,
  passport: 6,
  idcard: 7,
  receipt: 8,
  other: 127,
});


const AssetStatus = Object.freeze({
  normal: 0,
  consumed: 1,
  invalid: 2,
  expired: 3,
});

module.exports = { AssetType, AssetStatus };
