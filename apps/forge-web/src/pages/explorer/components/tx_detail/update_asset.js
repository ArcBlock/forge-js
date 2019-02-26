import React from 'react';

import TxDetail from './tx_detail';
import SummaryHeader from '../summary_header';
import IconFa from '../../../../components/iconfa';

export default class UpdateAssetDetail extends TxDetail {
  renderHeader() {
    const { tx } = this.props;
    return (
      <SummaryHeader
        type="Update Asset"
        title={tx.tx.itx.moniker}
        meta={[
          {
            key: <IconFa name="map-pin" size={12} className="meta-icon" />,
            value: tx.tx.itx.address,
          },
          {
            key: <IconFa name="gem" size={12} className="meta-icon" />,
            value: tx.tx.itx.data.value,
          },
        ]}
      />
    );
  }
}
