/* eslint no-console:"off" */
const { enums } = require('@arcblock/forge-proto');
const { OK, INVALID_SENDER_STATE } = enums.StatusCode;

/**
 * Each app server must implement `verifyTx` handler
 *
 * @param {*} req
 * @param {*} res
 * @returns verify result
 */
module.exports = async function(req, res, next) {
  const { itx, sender } = req;
  const kvPair = itx.value;
  if (sender.data) {
    const { key } = kvPair;
    const { value: data } = sender.data;
    if (Array.isArray(data.store) && data.store.any(x => x.key === key)) {
      return (res.code = INVALID_SENDER_STATE);
    }
  }

  res.code = OK;
  next();
};
