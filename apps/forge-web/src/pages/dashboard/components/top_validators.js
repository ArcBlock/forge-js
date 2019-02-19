import React from 'react';
import numeral from 'numeral';

import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import AccountActivity from './account_activity';
import forge from '../../../libs/forge';

export default class TopValidatorsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: null,
    };
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    const { loading, data } = this.state;
    return (
      <React.Fragment>
        {loading && (
          <React.Fragment>
            <Typography component="h3">Loading data...</Typography>
            <CircularProgress />
          </React.Fragment>
        )}
        {!loading && data && this.renderTable(data)}
      </React.Fragment>
    );
  }

  renderTable(rows) {
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
          {rows.map((x, i) => (
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

  async loadData() {
    this.setState({ loading: true });
    await forge.getForgeStatistics();
    this.setState({
      loading: false,
      data: [
        {
          address: 'abc',
          rank: 1,
          moniker: 'Foundation',
          balance: '9990000',
          assets: 0,
        },
        {
          address: 'def',
          rank: 2,
          moniker: 'ssnode',
          balance: '1680000',
          assets: 16,
        },
        {
          address: 'efg',
          rank: 3,
          moniker: 'black_negget',
          balance: '1390000',
          assets: 324,
        },
      ],
    });
  }
}
