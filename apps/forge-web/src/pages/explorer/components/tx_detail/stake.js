import React from 'react';
import PropTypes from 'prop-types';

import TxDetail from './tx_detail';
import SummaryHeader from '../summary_header';
import IconFa from '../../../../components/iconfa';

export default function StakeDetail({ tx }) {
  return (
    <TxDetail tx={tx}>
      <SummaryHeader
        type="Stake"
        title={tx.tx.itx.message || 'No message attached to this stake'}
        meta={[
          {
            key: <IconFa name="coins" size={12} className="meta-icon" />,
            value: `${tx.tx.itx.value} arc`,
          },
        ]}
      />
    </TxDetail>
  );
}

StakeDetail.propTypes = {
  tx: PropTypes.object.isRequired,
};
