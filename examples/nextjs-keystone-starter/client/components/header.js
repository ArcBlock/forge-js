import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';

import Login from './login';
import UserAvatar from './avatar';
import useSession from '../hooks/session';

export default function Header() {
  const session = useSession();
  const [open, setOpen] = useState(false);
  const closeDialog = () => setOpen(false);
  const openDialog = () => setOpen(true);

  return (
    <Nav>
      <div className="items">
        <Typography variant="h6" color="inherit" noWrap className="brand">
          Forge WebAPP Starter
        </Typography>
        <Button>Users</Button>
      </div>
      {session.loading && (
        <Button>
          <CircularProgress size={20} color="secondary" />
        </Button>
      )}
      {session.value && !session.value.user && (
        <Button color="primary" variant="outlined" onClick={openDialog}>
          Login
        </Button>
      )}
      {session.value && session.value.user && (
        <div className="avatar">
          <UserAvatar did={session.value.user.did} />
        </div>
      )}
      {open && (
        <Dialog open maxWidth="sm" onClose={closeDialog}>
          <Login onClose={closeDialog} onSuccess={() => window.location.reload()} />
        </Dialog>
      )}
    </Nav>
  );
}

const Nav = styled(Toolbar)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  && {
    padding-left: 0;
    padding-right: 0;
  }

  .brand {
    margin-right: 60px;
  }

  .items {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;
