import React from 'react';
import PropTypes from 'prop-types';

import Chip from '@material-ui/core/Chip';

import TxDetail from './tx_detail';
import SummaryHeader from '../summary_header';
import IconFa from '../../../../components/iconfa';

export default function MigrateAccountDetail({ tx }) {
  const chips = Object.keys(tx.tx.itx.type).map(x => <Chip key={x} label={tx.tx.itx.type[x]} />);
  return (
    <TxDetail tx={tx}>
      <SummaryHeader
        type="Migrate Account"
        title={tx.accountMigrate.address}
        meta={[
          {
            key: <IconFa name="key" size={12} className="meta-icon" />,
            value: tx.tx.itx.pk,
          },
          {
            key: <IconFa name="key" size={12} className="meta-icon" />,
            value: <React.Fragment>{chips}</React.Fragment>,
          },
        ]}
      />
    </TxDetail>
  );
}

MigrateAccountDetail.propTypes = {
  tx: PropTypes.object.isRequired,
};
