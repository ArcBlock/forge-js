import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useAsync from 'react-use/lib/useAsync';
import { Link } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import AccountActivity from './account_activity';
import Pagination from '../../../components/pagination';

import forge from '../../../libs/forge';
import { getExplorerUrl } from '../../../libs/util';

async function fetchTopValidators() {
  const {
    validatorsInfo: { validators },
  } = await forge().getValidatorsInfo();
  return validators.sort((a, b) => b.votingPower - a.votingPower);
}

const pageSize = 10;

export default function TopValidators({ sparkline }) {
  const state = useAsync(fetchTopValidators);
  const [currentPage, setCurrentPage] = useState(1);

  if (state.loading) {
    return <CircularProgress />;
  }

  if (state.error) {
    return <p className="error">{state.error.message}</p>;
  }

  const renderPagination = () => {
    if (state.value.length > pageSize) {
      return (
        <Pagination
          onChange={setCurrentPage}
          pageSize={pageSize}
          current={currentPage}
          total={state.value.length}
          className="pagination"
        />
      );
    }

    return null;
  };

  const offset = (currentPage - 1) * pageSize;
  const validators = state.value.slice(offset, currentPage * pageSize);

  return (
    <React.Fragment>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">Rank</TableCell>
            <TableCell align="left">Address</TableCell>
            <TableCell align="center">Voting Power</TableCell>
            <TableCell align="center">Proposer Priority</TableCell>
            {sparkline && (
              <TableCell align="left" style={{ width: '25%' }}>
                Activities
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {validators.map((x, i) => (
            <TableRow key={x.address}>
              <TableCell align="left">{offset + i + 1}</TableCell>
              <TableCell align="left">
                <Link to={getExplorerUrl(`/accounts/${x.address}`)}>{x.address}</Link>
              </TableCell>
              <TableCell align="center">{x.votingPower}</TableCell>
              <TableCell align="center">{x.proposerPriority}</TableCell>
              {sparkline && (
                <TableCell align="left">
                  <AccountActivity data={[...Array(7).fill(0)]} delayMS={i * 500} />
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {renderPagination()}
    </React.Fragment>
  );
}

TopValidators.propTypes = {
  sparkline: PropTypes.bool,
};

TopValidators.defaultProps = {
  sparkline: true,
};
