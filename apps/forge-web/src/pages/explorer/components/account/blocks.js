/* eslint no-nested-ternary:"off" */
import React from 'react';
import PropTypes from 'prop-types';

import BlockCard from '../block_card';
import PaginatedList from './paginated_list';

function BlockList({ pageSize, dataLoaderFn }) {
  const dataKey = 'blocks';
  const dataRenderFn = blocks => blocks.map(x => <BlockCard key={x.height} block={x} />);
  const props = { address: '', pageSize, dataKey, dataLoaderFn, dataRenderFn };
  return <PaginatedList {...props} />;
}

BlockList.propTypes = {
  pageSize: PropTypes.number,
  dataLoaderFn: PropTypes.func.isRequired,
};

BlockList.defaultProps = {
  pageSize: 20,
};

export default BlockList;
