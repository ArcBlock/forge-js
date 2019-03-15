import React from 'react';
import { Link } from 'react-router-dom';

import TxDetail from './tx_detail';
import SummaryHeader from '../summary_header';
import IconFa from '../../../../components/iconfa';
import { getExplorerUrl } from '../../../../libs/util';

export default class TransferDetail extends TxDetail {
  renderHeader() {
    const { tx } = this.props;
    return (
      <SummaryHeader
        type="Transfer"
        title={
          <span>
            <IconFa name="coins" size={20} className="meta-icon" />
            <span>{tx.tx.itx.value} arc</span>
          </span>
        }
        meta={(tx.tx.itx.assets || []).map(x => ({
          key: <IconFa name="gem" size={12} className="meta-icon" />,
          value: <Link to={getExplorerUrl(`/assets/${x}`)}>{x}</Link>,
        }))}
      />
    );
  }
}
