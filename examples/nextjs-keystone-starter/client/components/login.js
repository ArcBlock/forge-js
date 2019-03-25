import React, { useState } from 'react';
import qs from 'querystring';
import styled from 'styled-components';
import QRCode from 'qrcode.react';
import useAsync from 'react-use/lib/useAsync';

import CircularProgress from '@material-ui/core/CircularProgress';

import api from '../libs/api';
import useInterval from '../hooks/interval';

async function fetchLoginUri() {
  const res = await api.get('/login');
  return res.data;
}

export default function LoginQRCode() {
  const state = useAsync(fetchLoginUri);
  const token = state.value ? state.value.token : {};
  const [status, setStatus] = useState('created');

  // Check login status if we have a token
  useInterval(
    async () => {
      if (token) {
        const res = await api.get(`/login/status?${qs.stringify({ token })}`);
        console.log('checkLoginStatus', res);
      }
    },
    token ? 1000 : null
  );

  if (state.loading) {
    return <CircularProgress />;
  }

  if (state.error) {
    return state.error.message;
  }

  return (
    <Container>
      <QRCode size={256} renderAs="svg" level="H" value={state.value.url} />
      {status === 'scanned' && <p>Please confirm on the wallet app</p>}
      {status === 'failed' && <p>Error occurred during wallet auth</p>}
      {status === 'succeed' && <p>Authentication success, now reloading...</p>}
    </Container>
  );
}

const Container = styled.div``;
