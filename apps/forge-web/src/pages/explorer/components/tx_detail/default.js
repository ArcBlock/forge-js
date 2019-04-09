/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';

import TxDetail from './tx_detail';
import SummaryHeader from '../summary_header';

export default function DefaultDetail({ tx }) {
  return (
    <TxDetail tx={tx}>
      <SummaryHeader type="Transaction" title={tx.tx.itx.__typename} meta={[]} />
    </TxDetail>
  );
}

DefaultDetail.propTypes = {
  tx: PropTypes.object.isRequired,
};
