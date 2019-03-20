/* eslint no-nested-ternary:"off" */
import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PaginatedList from '../paginated_list';

import { getExplorerUrl } from '../../../../libs/util';

function renderAssets(assets) {
  return (
    <Table style={{ width: '100%', maxWidth: '800px' }}>
      <TableHead>
        <TableRow>
          <TableCell align="left">Address</TableCell>
          <TableCell align="left">Moniker</TableCell>
          <TableCell align="left">Created At</TableCell>
          <TableCell align="left">Updated At</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {assets.map(x => (
          <TableRow key={x.address}>
            <TableCell align="left">
              <Link to={getExplorerUrl(`/assets/${x.address}`)}>{x.address}</Link>
            </TableCell>
            <TableCell align="left">{x.moniker}</TableCell>
            <TableCell align="left" title={x.genesisTime}>
              {x.genesisTime ? dayjs(x.genesisTime).fromNow() : ''}
            </TableCell>
            <TableCell align="left" title={x.renaissanceTime}>
              {x.renaissanceTime ? dayjs(x.renaissanceTime).fromNow() : ''}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function AssetList({ address, pageSize, dataLoaderFn }) {
  const dataKey = 'assets';
  const props = { args: { address }, pageSize, dataKey, dataLoaderFn, dataRenderFn: renderAssets };
  return <PaginatedList {...props} />;
}

AssetList.propTypes = {
  address: PropTypes.string.isRequired,
  pageSize: PropTypes.number,
  dataLoaderFn: PropTypes.func.isRequired,
};

AssetList.defaultProps = {
  pageSize: 10,
};

export default AssetList;
