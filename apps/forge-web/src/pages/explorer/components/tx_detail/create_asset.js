import React from 'react';
import PropTypes from 'prop-types';

import TxDetail from './tx_detail';
import SummaryHeader from '../summary_header';
import IconFa from '../../../../components/iconfa';

export default function CreateAssetDetail({ tx }) {
  return (
    <TxDetail tx={tx}>
      <SummaryHeader
        type="Create Asset"
        title={tx.tx.itx.moniker}
        meta={[
          {
            key: <IconFa name="gem" size={12} className="meta-icon" />,
            value: tx.createAsset.asset,
          },
          {
            key: <IconFa name="file-invoice" size={12} className="meta-icon" />,
            value: tx.tx.itx.data.value,
          },
        ]}
      />
    </TxDetail>
  );
}

CreateAssetDetail.propTypes = {
  tx: PropTypes.object.isRequired,
};
