import React from 'react';
import QRCode from 'qrcode.react';
import useAsync from 'react-use/lib/useAsync';

import CircularProgress from '@material-ui/core/CircularProgress';

import api from '../libs/api';

async function fetchLoginUri() {
  const res = await api.get('/login');
  return res.data;
}

export default function LoginQRCode() {
  const state = useAsync(fetchLoginUri);

  if (state.loading) {
    return <CircularProgress />;
  }

  if (state.error) {
    return state.error.message;
  }

  return <QRCode size={256} renderAs="svg" level="H" value={state.value} />;
}
