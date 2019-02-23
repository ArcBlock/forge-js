/* eslint no-nested-ternary:"off" */
import React from 'react';
import PropTypes from 'prop-types';

import TxCard from '../tx_card/index';
import PaginatedList from './paginated_list';

function TxList({ address, pageSize, dataLoaderFn }) {
  const dataKey = 'transactions';
  const dataRenderFn = transactions => transactions.map(x => <TxCard key={x.hash} tx={x} />);
  const props = { address, pageSize, dataKey, dataLoaderFn, dataRenderFn };
  return <PaginatedList {...props} />;
}

TxList.propTypes = {
  address: PropTypes.string.isRequired,
  pageSize: PropTypes.number,
  dataLoaderFn: PropTypes.func.isRequired,
};

TxList.defaultProps = {
  pageSize: 10,
};

export default TxList;
