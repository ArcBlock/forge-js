import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import LoginQRCode from './login';
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
          <svg width="80" height="80" data-jdenticon-value="icon value" />
        </div>
      )}
      {open && (
        <Dialog fullWidth open maxWidth="sm" onClose={closeDialog}>
          <DialogTitle>Login</DialogTitle>
          <DialogContent style={{ textAlign: 'center' }}>
            <DialogContentText style={{ marginBottom: '24px' }}>
              Use ABT Wallet to scan the following qrcode.
            </DialogContentText>
            <LoginQRCode />
          </DialogContent>
          <DialogActions>
            <Button onClick={closeDialog} color="primary">
              Close
            </Button>
          </DialogActions>
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
