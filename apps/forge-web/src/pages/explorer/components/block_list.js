/* eslint no-nested-ternary:"off" */
import React from 'react';
import PropTypes from 'prop-types';

import BlockCard from './block_card';
import PaginatedList from './paginated_list';

function BlockList({ pageSize, pageLink, dataLoaderFn }) {
  const dataKey = 'blocks';
  const dataRenderFn = blocks => blocks.map(x => <BlockCard key={x.height} block={x} />);
  const props = { args: {}, pageSize, pageLink, dataKey, dataLoaderFn, dataRenderFn };
  return <PaginatedList {...props} />;
}

BlockList.propTypes = {
  pageSize: PropTypes.number,
  pageLink: PropTypes.string,
  dataLoaderFn: PropTypes.func.isRequired,
};

BlockList.defaultProps = {
  pageSize: 20,
  pageLink: '',
};

export default BlockList;
