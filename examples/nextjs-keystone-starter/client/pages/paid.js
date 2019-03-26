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

async function fetchStatus() {
  const [{ data: payment }, { data: session }] = await Promise.all([
    axios.get('/api/payments'),
    axios.get('/api/session'),
  ]);
  return { payment, session };
}

export default function PaymentPage() {
  const state = useAsync(fetchStatus);
  const [open, toggle] = useToggle(false);

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

  if (!state.value.session.user) {
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
              onSuccess={() => window.location.reload()}
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
          <Avatar size={240} did={state.value.session.user.did} />
          <Button
            color="primary"
            disabled={state.value.payment}
            variant="outlined"
            onClick={() => toggle()}>
            {state.value.payment ? 'Already Paid' : 'Make Payment'}
          </Button>
        </div>
        <div className="meta">
          <Typography component="h3" variant="h4">
            Secret Document
          </Typography>
          <div className={`document ${state.value.payment ? 'document--unlocked' : ''}`}>
            <Typography component="div" variant="body1" className="document__body">
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the
              1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
              recently with desktop publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
              <br />
              <br />
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the
              1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
              recently with desktop publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
              <br />
              <br />
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the
              1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
              recently with desktop publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
              <br />
              <br />
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the
              1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
              recently with desktop publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
              <br />
              <br />
            </Typography>
          </div>
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

  .document {
    margin-top: 30px;
    position: relative;
    width: 800px;

    .document__body {
      filter: blur(4px);
      text-align: justify;
    }

    &:after {
      color: #ff0000;
      content: 'Pay 100 TBA to view this document';
      font-size: 30px;
      font-weight: bold;
      height: 100%;
      position: absolute;
      text-transform: uppercase;
      animation: blink 800ms ease;
      top: 35%;
      left: 15%;
      width: 100%;
    }

    @keyframes blink {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }

  .document--unlocked {
    .document__body {
      filter: none;
    }

    &:after {
      display: none;
    }
  }
`;
