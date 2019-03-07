import React from 'react';

import Chip from '@material-ui/core/Chip';

import TxDetail from './tx_detail';
import SummaryHeader from '../summary_header';
import IconFa from '../../../../components/iconfa';

export default class MigrateAccountDetail extends TxDetail {
  renderHeader() {
    const { tx } = this.props.tx;
    const chips = Object.keys(tx.itx.type).map(x => <Chip key={x} label={tx.itx.type[x]} />);
    return (
      <SummaryHeader
        type="Migrate Account"
        title={tx.itx.pk}
        meta={[
          {
            key: <IconFa name="key" size={12} className="meta-icon" />,
            value: <React.Fragment>{chips}</React.Fragment>,
          },
          {
            key: <IconFa name="lock" size={12} className="meta-icon" />,
            value: tx.itx.pk,
          },
        ]}
      />
    );
  }
}
