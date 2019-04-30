import React from 'react';
import PropTypes from 'prop-types';
import { fromUnitToToken } from '@arcblock/forge-util';

import TxDetail from './tx_detail';
import SummaryHeader from '../summary_header';
import IconFa from '../../../../components/iconfa';
import { useTokenInfo } from '../../../../libs/hooks';

export default function StakeDetail({ tx }) {
  const [token] = useTokenInfo();
  return (
    <TxDetail tx={tx}>
      <SummaryHeader
        type="Stake"
        title={tx.tx.itx.message || 'No message attached to this stake'}
        meta={[
          {
            key: <IconFa name="coins" size={12} className="meta-icon" />,
            value: `${fromUnitToToken(tx.tx.itx.value || '0', token.decimal)} ${token.symbol}`,
          },
        ]}
      />
    </TxDetail>
  );
}

StakeDetail.propTypes = {
  tx: PropTypes.object.isRequired,
};
