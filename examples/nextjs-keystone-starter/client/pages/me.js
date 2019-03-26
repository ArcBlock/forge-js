import React from 'react';
import styled from 'styled-components';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import Layout from '../components/layout';
import Avatar from '../components/avatar';

import useSession from '../hooks/session';
import api from '../libs/api';

export default function ProfilePage() {
  const state = useSession();
  const onLogout = async () => {
    await api.post('/logout');
    window.location.href = '/';
  };

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

  if (!state.value.user) {
    window.location.href = '/?openLogin=true';
    return null;
  }

  return (
    <Layout>
      <Main>
        <div className="avatar">
          <Avatar size={240} did={state.value.user.did} />
          <Button color="secondary" variant="outlined" onClick={onLogout}>
            Logout
          </Button>
        </div>
        <div className="meta">
          <Typography component="h3" variant="h4">
            My Profile
          </Typography>
          <List>
            <ListItem className="meta-item">
              <ListItemText primary={state.value.user.did} secondary="DID" />
            </ListItem>
            <ListItem className="meta-item">
              <ListItemText primary={state.value.user.name || '-'} secondary="Name" />
            </ListItem>
            <ListItem className="meta-item">
              <ListItemText primary={state.value.user.email || '-'} secondary="Email" />
            </ListItem>
            <ListItem className="meta-item">
              <ListItemText primary={state.value.user.mobile || '-'} secondary="Phone" />
            </ListItem>
          </List>
        </div>
      </Main>
    </Layout>
  );
}

const Main = styled.main`
  margin: 80px 0;
  display: flex;

  .avatar {
    margin-right: 80px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-center;

    svg {
      margin-bottom: 40px;
    }
  }

  .meta {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .meta-item {
    padding-left: 0;
  }
`;
