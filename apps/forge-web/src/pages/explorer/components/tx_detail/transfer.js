import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fromUnitToToken } from '@arcblock/forge-util';

import TxDetail from './tx_detail';
import SummaryHeader from '../summary_header';
import IconFa from '../../../../components/iconfa';
import { getExplorerUrl } from '../../../../libs/util';
import { useTokenInfo } from '../../../../libs/hooks';

export default function TransferDetail({ tx }) {
  const [token] = useTokenInfo();
  console.log(token);
  return (
    <TxDetail tx={tx}>
      <SummaryHeader
        type="Transfer"
        title={
          <span>
            <IconFa name="coins" size={20} className="meta-icon" />
            <span>
              {fromUnitToToken(tx.tx.itx.value, token.decimal)} {token.symbol}
            </span>
          </span>
        }
        meta={(tx.tx.itx.assets || []).map(x => ({
          key: <IconFa name="gem" size={12} className="meta-icon" />,
          value: <Link to={getExplorerUrl(`/assets/${x}`)}>{x}</Link>,
        }))}
      />
    </TxDetail>
  );
}

TransferDetail.propTypes = {
  tx: PropTypes.object.isRequired,
};
