import React from 'react';

import { Link } from 'react-router-dom';

import TxDetail from './tx_detail';
import SummaryHeader from '../summary_header';
import IconFa from '../../../../components/iconfa';

export default class ConsumeAssetDetail extends TxDetail {
  renderHeader() {
    const { tx } = this.props.tx;
    return (
      <SummaryHeader
        type="Consume Asset"
        title={
          <Link to={`/node/explorer/assets/${tx.signatures[0].data.value}`}>
            {`Asset ${tx.signatures[0].data.value}`}
          </Link>
        }
        meta={[
          {
            key: <IconFa name="user" size={12} className="meta-icon" />,
            value: (
              <Link to={`/node/explorer/accounts/${tx.itx.issuer}`}>
                {`Issuer: ${tx.itx.issuer}`}
              </Link>
            ),
          },
          {
            key: <IconFa name="user" size={12} className="meta-icon" />,
            value: (
              <Link to={`/node/explorer/accounts/${tx.signatures[0].signer}`}>
                {`Signer: ${tx.signatures[0].signer}`}
              </Link>
            ),
          },
        ]}
      />
    );
  }
}
