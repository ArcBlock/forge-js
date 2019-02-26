import React from 'react';
import numeral from 'numeral';
import { useAsync } from 'react-use';

import CircularProgress from '@material-ui/core/CircularProgress';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import AccountActivity from './account_activity';
import forge from '../../../libs/forge';
import { fromArcToReadable } from '../../../libs/util';

async function fetchTopAccounts() {
  const { accounts } = await forge.getTopAccounts();
  return accounts.map((x, i) => ({
    address: x.address,
    rank: i + 1,
    moniker: x.moniker,
    // TODO: add decimal here
    balance: fromArcToReadable(x.balance),
    assets: x.numAssets,
  }));
}

export default function TopAccountsSection() {
  const state = useAsync(fetchTopAccounts);

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
          <TableCell align="left">Moniker</TableCell>
          <TableCell align="center">Balance</TableCell>
          <TableCell align="center">Assets</TableCell>
          <TableCell align="left" style={{ width: '25%' }}>
            Activities
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {state.value.map((x, i) => (
          <TableRow key={x.address}>
            <TableCell align="left" component="th" scope="row">
              {x.rank}
            </TableCell>
            <TableCell align="left">{x.moniker}</TableCell>
            <TableCell align="center">{numeral(x.balance).format('0,0.0000')}</TableCell>
            <TableCell align="center">{numeral(x.assets).format('0,0')}</TableCell>
            <TableCell align="left">
              <AccountActivity address={x.address} delayMS={i * 500} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
