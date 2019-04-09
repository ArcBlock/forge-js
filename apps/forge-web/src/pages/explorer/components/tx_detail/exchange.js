import React from 'react';
import PropTypes from 'prop-types';

import TxDetail from './tx_detail';
import SummaryHeader from '../summary_header';
import IconFa from '../../../../components/iconfa';
import Payload from './payload';

export default function ExchangeDetail({ tx }) {
  return (
    <TxDetail tx={tx}>
      <SummaryHeader
        type="Exchange"
        title="Exchange Transaction"
        meta={[
          {
            key: <IconFa name="sign-in" size={14} color="#EF476F" className="meta-icon" />,
            value: <Payload itx={tx.tx.itx.receiver} />,
          },
          {
            key: <IconFa name="sign-out" size={14} color="#EF476F" className="meta-icon" />,
            value: <Payload itx={tx.tx.itx.sender} />,
          },
        ]}
      />
    </TxDetail>
  );
}

ExchangeDetail.propTypes = {
  tx: PropTypes.object.isRequired,
};
