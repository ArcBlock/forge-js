/* eslint no-nested-ternary:"off" */
import React from 'react';
import PropTypes from 'prop-types';

import TxCard from './tx_card';
import PaginatedList from './paginated_list';

function TxList({ args, pageSize, pageLink, dataLoaderFn }) {
  const dataKey = 'transactions';
  const dataRenderFn = blocks => blocks.map(x => <TxCard key={x.hash} tx={x} />);
  const props = { args, pageSize, pageLink, dataKey, dataLoaderFn, dataRenderFn };
  return <PaginatedList {...props} />;
}

TxList.propTypes = {
  args: PropTypes.object.isRequired,
  pageSize: PropTypes.number,
  pageLink: PropTypes.string,
  dataLoaderFn: PropTypes.func.isRequired,
};

TxList.defaultProps = {
  pageSize: 20,
  pageLink: '',
};

export default TxList;
