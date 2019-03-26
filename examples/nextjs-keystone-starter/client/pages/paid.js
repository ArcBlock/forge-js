import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import useAsync from 'react-use/lib/useAsync';
import useToggle from 'react-use/lib/useToggle';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';

import Layout from '../components/layout';
import Auth from '../components/auth';
import Avatar from '../components/avatar';

import useSession from '../hooks/session';

async function fetchPayment() {
  const res = await axios.get('/api/payments');
  return res.data;
}

export default function PaymentPage() {
  const session = useSession();
  const payment = useAsync(fetchPayment);
  const [open, toggle] = useToggle(false);

  if (session.loading) {
    return (
      <Layout>
        <Main>
          <CircularProgress />
        </Main>
      </Layout>
    );
  }

  if (session.error) {
    return (
      <Layout>
        <Main>{session.error.message}</Main>
      </Layout>
    );
  }

  if (!session.value.user) {
    window.location.href = '/?openLogin=true';
    return null;
  }

  return (
    <Layout>
      <Main>
        {open && (
          <Dialog
            open
            maxWidth="sm"
            disableBackdropClick
            disableEscapeKeyDown
            onClose={() => toggle()}>
            <Auth
              action="payment"
              onClose={() => toggle()}
              onSuccess={window.location.reload}
              messages={{
                title: 'Payment Required',
                scan: 'Pay 100 TBA to view secret documented',
                confirm: 'Confirm payment on your ABT Wallet',
                success: 'You have successfully paid!',
              }}
            />
          </Dialog>
        )}
        <div className="avatar">
          <Avatar size={240} did={session.value.user.did} />
          <Button color="primary" variant="outlined" onClick={() => toggle()}>
            Do Payment
          </Button>
        </div>
        <div className="meta">
          <Typography component="h3" variant="h4">
            My Payment
          </Typography>
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
