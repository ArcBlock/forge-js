import React from 'react';
import PropTypes from 'prop-types';

import Chip from '@material-ui/core/Chip';

import TxDetail from './tx_detail';
import SummaryHeader from '../summary_header';
import IconFa from '../../../../components/iconfa';

export default function DeclareDetail({ tx }) {
  const chips = Object.keys(tx.tx.itx.type || {}).map(x => (
    <Chip key={x} label={tx.tx.itx.type[x]} />
  ));
  return (
    <TxDetail tx={tx}>
      <SummaryHeader
        type="Declare Account"
        title={tx.tx.itx.moniker}
        meta={[
          {
            key: <IconFa name="key" size={12} className="meta-icon" />,
            value: <React.Fragment>{chips}</React.Fragment>,
          },
        ]}
      />
    </TxDetail>
  );
}

DeclareDetail.propTypes = {
  tx: PropTypes.object.isRequired,
};
