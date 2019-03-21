import React from 'react';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

export default function Header() {
  return (
    <Nav>
      <div className="items">
        <Typography variant="h6" color="inherit" noWrap className="brand">
          Company name
        </Typography>
        <Button>Features</Button>
        <Button>Enterprise</Button>
        <Button>Support</Button>
      </div>
      <Button color="primary" variant="outlined">
        Login
      </Button>
    </Nav>
  );
}

const Nav = styled(Toolbar)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .brand {
    margin-right: 60px;
  }

  .items {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;
