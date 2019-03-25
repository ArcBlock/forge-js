import React from 'react';
import styled from 'styled-components';
import useAsync from 'react-use/lib/useAsync';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';

import Layout from '../components/layout';
import Avatar from '../components/avatar';

import api from '../libs/api';

async function fetchUsers() {
  const res = await api.get('/users');
  return res.data;
}

export default function UsersPage() {
  const state = useAsync(fetchUsers);

  if (state.loading) {
    return (
      <Layout>
        <Main>
          <CircularProgress />
        </Main>
      </Layout>
    );
  }

  if (state.error) {
    return (
      <Layout>
        <Main>{state.error.message}</Main>
      </Layout>
    );
  }

  return (
    <Layout>
      <Main>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Avatar</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>DID</TableCell>
              <TableCell>First Seen</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.value.map(row => (
              <TableRow key={row._id}>
                <TableCell>
                  <Avatar did={row.did} />
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.did}</TableCell>
                <TableCell>{row.createdAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Main>
    </Layout>
  );
}

const Main = styled.main`
  margin: 80px 0;
  text-align: center;

  img {
    margin-top: 80px;
  }
`;
