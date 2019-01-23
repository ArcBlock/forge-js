/* eslint no-console:"off" */
const { enums } = require('@arcblock/forge-proto');
const { OK, INSUFFICIENT_DATA } = enums.StatusCode;

/**
 * Each app server must implement `verifyTx` handler
 *
 * @param {*} req
 * @param {*} res
 * @returns verify result
 */
module.exports = async function(req, res, next) {
  const { itx } = req;
  const kvPair = itx.value;
  console.log('TxHandler.verifyTx', kvPair);
  console.error('-------- CONSOLE.ERROR ---------'); // this demonstrates all stderr are written to log files

  if (!kvPair.key) {
    res.code = INSUFFICIENT_DATA;
    return;
  }
  if (!kvPair.value) {
    res.code = INSUFFICIENT_DATA;
    return;
  }

  res.code = OK;
  next();
};
