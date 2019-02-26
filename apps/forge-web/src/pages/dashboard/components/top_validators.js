import React from 'react';
import { useAsync } from 'react-use';

import CircularProgress from '@material-ui/core/CircularProgress';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import AccountActivity from './account_activity';
import forge from '../../../libs/forge';

async function fetchTopValidators() {
  const {
    validatorsInfo: { validators },
  } = await forge.getValidatorsInfo();
  return validators.sort((a, b) => b.votingPower - a.votingPower);
}

export default function TopAccountsSection() {
  const state = useAsync(fetchTopValidators);

  if (state.loading) {
    return <CircularProgress />;
  }

  if (state.error) {
    return <p className="error">{state.error.message}</p>;
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align="left">Rank</TableCell>
          <TableCell align="left">Address</TableCell>
          <TableCell align="center">Voting Power</TableCell>
          <TableCell align="center">Proposer Priority</TableCell>
          <TableCell align="left" style={{ width: '25%' }}>
            Activities
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {state.value.map((x, i) => (
          <TableRow key={x.address}>
            <TableCell align="left">{i + 1}</TableCell>
            <TableCell align="left">{x.address}</TableCell>
            <TableCell align="center">{x.votingPower}</TableCell>
            <TableCell align="center">{x.proposerPriority}</TableCell>
            <TableCell align="left">
              <AccountActivity address={x.address} delayMS={i * 500} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
