import React from 'react';

import TxDetail from './tx_detail';
import SummaryHeader from '../summary_header';

export default class DefaultDetail extends TxDetail {
  renderHeader() {
    const { tx } = this.props;

    // eslint-disable-next-line
    return <SummaryHeader type="Transaction" title={tx.tx.itx.__typename} meta={[]} />;
  }
}
