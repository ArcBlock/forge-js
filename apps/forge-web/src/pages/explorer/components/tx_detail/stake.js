import React from 'react';

import TxDetail from './tx_detail';
import SummaryHeader from '../summary_header';
import IconFa from '../../../../components/iconfa';

export default class StakeTxDetail extends TxDetail {
  renderHeader() {
    const { tx } = this.props;
    return (
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
    );
  }
}
