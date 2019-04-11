import React from 'react';
import PropTypes from 'prop-types';

import TxDetail from './tx_detail';
import SummaryHeader from '../summary_header';
import IconFa from '../../../../components/iconfa';

export default function UpdateAssetDetail({ tx }) {
  return (
    <TxDetail tx={tx}>
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
    </TxDetail>
  );
}

UpdateAssetDetail.propTypes = {
  tx: PropTypes.object.isRequired,
};
