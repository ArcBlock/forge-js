import React from 'react';

import TxDetail from './tx_detail';
import SummaryHeader from '../summary_header';
import IconFa from '../../../../components/iconfa';

export default class DeclareAccountDetail extends TxDetail {
  renderHeader() {
    const { tx } = this.props;
    return (
      <SummaryHeader
        type="Declare Account"
        title={tx.tx.itx.moniker}
        meta={[
          {
            key: <IconFa name="lock" size={12} className="meta-icon" />,
            value: `#${tx.tx.itx.type.role}, #${tx.tx.itx.type.pk}, #${tx.tx.itx.type.hash}, #${
              tx.tx.itx.type.address
            }`,
          },
        ]}
      />
    );
  }
}
