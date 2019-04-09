import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import TxDetail from './tx_detail';
import SummaryHeader from '../summary_header';
import IconFa from '../../../../components/iconfa';
import { getExplorerUrl } from '../../../../libs/util';

export default function ConsumeAssetDetail({ tx }) {
  return (
    <TxDetail tx={tx}>
      <SummaryHeader
        type="Consume Asset"
        title={
          <Link to={getExplorerUrl(`/assets/${tx.tx.signatures[0].data.value}`)}>
            {`Asset ${tx.tx.signatures[0].data.value}`}
          </Link>
        }
        meta={[
          {
            key: <IconFa name="user" size={12} className="meta-icon" />,
            value: (
              <Link to={getExplorerUrl(`/accounts/${tx.tx.itx.issuer}`)}>
                {`Issuer: ${tx.tx.itx.issuer}`}
              </Link>
            ),
          },
          {
            key: <IconFa name="user" size={12} className="meta-icon" />,
            value: (
              <Link to={getExplorerUrl(`/accounts/${tx.tx.signatures[0].signer}`)}>
                {`Signer: ${tx.tx.signatures[0].signer}`}
              </Link>
            ),
          },
        ]}
      />
    </TxDetail>
  );
}

ConsumeAssetDetail.propTypes = {
  tx: PropTypes.object.isRequired,
};
