import React from 'react';

import TxDetail from './tx_detail';
import SummaryHeader from '../summary_header';
import IconFa from '../../../../components/iconfa';
import Payload from './payload';

export default class ExchangeDetail extends TxDetail {
  renderHeader() {
    const { tx } = this.props;
    return (
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
    );
  }
}
