import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAsync } from 'react-use';

import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import CheckIcon from '@material-ui/icons/CheckCircleOutlineSharp';
import SyncIcon from '@material-ui/icons/SyncSharp';

import Icons8 from '../../components/icon8';
import forge from '../../libs/forge';

async function fetchNodeInfo() {
  const res = await forge.getNodeInfo();
  return res.info;
}

export default function NodeInfo() {
  const state = useAsync(fetchNodeInfo);
  if (state.loading) {
    return <CircularProgress />;
  }

  if (state.error) {
    return <Typography component="span">{state.error.message}</Typography>;
  }

  const [appInfo] = state.value.forgeAppsVersion;
  const appName = appInfo ? appInfo.key : '';
  const appVersion = appInfo ? appInfo.value : '';

  return (
    <Header synced={state.value.synced}>
      <Link to="/">
        <div className="header-image">
          <Icons8 name="text-input-form" />
          {state.value.synced ? (
            <CheckIcon className="header-image__overlay" />
          ) : (
            <SyncIcon className="header-image__overlay" />
          )}
        </div>
      </Link>
      <div className="header-title">
        <Typography component="h2" noWrap className="header-title__primary">
          {state.value.network} ({state.value.ip}{' '}
          <span>
            {state.value.geoInfo.city},{state.value.geoInfo.country}
          </span>
          )
        </Typography>
        <Typography component="p" noWrap className="header-title__secondary">
          forge v{state.value.version} {appName} {appVersion}
        </Typography>
      </div>
    </Header>
  );
}

const Header = styled.div`
  display: flex;

  .header-image {
    margin-right: ${props => props.theme.spacing.unit * 4}px;
    margin-left: ${props => props.theme.spacing.unit}px;
    margin-top: 10px;
    position: relative;
    color: ${props => (props.synced ? props.theme.colors.green : props.theme.colors.red)};

    .header-image__overlay {
      position: absolute;
      bottom: 6px;
      right: -6px;
      z-index: 99;
      border-radius: 8px;
      background: ${props => props.theme.palette.background.default};
      font-size: 16px;
      color: inherit;
    }
  }

  .header-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .header-title__primary {
    font-size: 24px;
    font-weight: 800;
    letter-spacing: 2px;
    color: #222222;
    text-transform: uppercase;
  }

  .header-title__secondary {
    font-size: 14px;
    line-height: 1.71;
    letter-spacing: 1px;
    color: #9b9b9b;
  }
`;
