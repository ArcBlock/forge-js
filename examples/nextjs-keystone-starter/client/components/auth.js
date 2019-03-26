import React, { useState } from 'react';
import PropTypes from 'prop-types';
import qs from 'querystring';
import axios from 'axios';
import styled from 'styled-components';
import QRCode from 'qrcode.react';
import useAsync from 'react-use/lib/useAsync';

import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import Avatar from './avatar';

import useInterval from '../hooks/interval';

const fns = {};
function createTokenFn(action, prefix) {
  const key = `${prefix}/${action}/token`;
  if (!fns[key]) {
    fns[key] = async function createToken() {
      const res = await axios.get(key);
      return res.data;
    };
  }
  return fns[key];
}

// eslint-disable-next-line object-curly-newline
export default function Auth({ onClose, onSuccess, action, prefix, messages }) {
  const createToken = createTokenFn(action, prefix);
  const state = useAsync(createToken);
  const [status, setStatus] = useState('created');
  const [error, setError] = useState(null);
  const [did, setDid] = useState(null);
  const [refresh, setRefresh] = useState(null);

  // eslint-disable-next-line
  const token = refresh ? refresh.token : state.value ? state.value.token : {};

  const switchAccount = async () => {
    const data = await createToken();
    setRefresh(data);
  };

  if (status === 'succeed' && typeof onSuccess === 'function') {
    onSuccess();
  }

  // Check login status if we have a token
  useInterval(
    async () => {
      if (token) {
        const res = await axios.get(`${prefix}/${action}/status?${qs.stringify({ token })}`);
        const { status: _status, error: _error, did: _did } = res.data;
        if (status) {
          if (_did) {
            setDid(_did);
          }

          setStatus(_status);
        } else {
          setError(_error);
        }
      }
    },
    token && status !== 'succeed' ? 1000 : null
  );

  if (state.loading) {
    return (
      <Container>
        <div className="container">
          <CircularProgress />
        </div>
      </Container>
    );
  }

  if (state.error) {
    return (
      <Container>
        <div className="container">{state.error.message}</div>
      </Container>
    );
  }

  if (status === 'created') {
    return (
      <Container>
        <div className="close" onClick={onClose}>
          &times;
        </div>
        <div className="container">
          <h3 className="title">{messages.title}</h3>
          <div className="qrcode">
            <QRCode
              size={240}
              renderAs="svg"
              level="M"
              value={refresh ? refresh.url : state.value.url}
            />
          </div>
          <div className="tip tip--scan">{messages.scan}</div>
        </div>
        <div className="container" style={{ background: '#eee', padding: '24px 40px' }}>
          <div className="extra">
            <div className="tip tip--install">Dont have ABT Wallet? Get it here!</div>
            <div className="apps">
              <Button
                variant="outlined"
                className="app app--android"
                href="http://www.arcblock.io"
                color="primary"
                target="_blank">
                Android
              </Button>
              <Button
                variant="outlined"
                className="app app--ios"
                href="http://www.arcblock.io"
                color="secondary"
                target="_blank">
                iOS
              </Button>
            </div>
          </div>
        </div>
      </Container>
    );
  }

  if (status === 'scanned') {
    return (
      <Container>
        <div className="close" onClick={onClose}>
          &times;
        </div>
        <div className="container">
          <div className="avatar">
            <Avatar size={120} did={did} />
          </div>
          <div className="tip tip--shout">Scanned Successfully</div>
          <div className="tip tip--confirm">{messages.confirm}</div>
          <div className="action action--reset">
            <Button onClick={switchAccount}>Switch Account</Button>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="close" onClick={onClose}>
        &times;
      </div>
      <div className="container">
        {status === 'succeed' && <p>{messages.success}</p>}
        {!!error && <p>{error}</p>}
      </div>
    </Container>
  );
}

Auth.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
  action: PropTypes.string.isRequired,
  prefix: PropTypes.string,
  messages: PropTypes.shape({
    title: PropTypes.string.isRequired,
    scan: PropTypes.string.isRequired,
    confirm: PropTypes.string.isRequired,
    success: PropTypes.string.isRequired,
  }).isRequired,
};

Auth.defaultProps = {
  prefix: '/api/did',
};

const Container = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  position: relative;

  .close {
    position: absolute;
    top: 16px;
    right: 16px;
    color: #999999;
    font-size: 24px;
    line-height: 24px;
    cursor: pointer;
    user-select: none;
  }

  .container {
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #999999;
  }

  .title {
    margin: 0 0 24px;
    text-transform: uppercase;
  }

  .qrcode {
    margin-bottom: 32px;
  }

  .avatar {
    margin-top: 32px;
  }

  .tip--scan,
  .tip--confirm {
    font-size: 16px;
  }

  .tip--shout {
    color: green;
    font-size: 24px;
    margin: 24px 0 16px;
  }

  .tip--confirm {
    margin-bottom: 40px;
  }

  .tip--install {
    margin-bottom: 16px;
  }

  .extra {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .app:first-of-type {
      margin-right: 40px;
    }
  }
`;
