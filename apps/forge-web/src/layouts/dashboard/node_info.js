import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/CheckCircleOutlineSharp';
import SyncIcon from '@material-ui/icons/SyncSharp';

import Icons8 from '../../components/icon8';
import { useNodeInfo, useThemeMode } from '../../libs/hooks';
import { colors } from '../../libs/constant';

export default function NodeInfo() {
  const [nodeInfo] = useNodeInfo();
  const [mode] = useThemeMode();
  const [appInfo] = nodeInfo.forgeAppsVersion;
  const appName = appInfo ? appInfo.key : '';
  const appVersion = appInfo ? appInfo.value : '';

  return (
    <Header synced={nodeInfo.synced}>
      <Link to="/">
        <div className="header-image">
          <Icons8 name="text-input-form" color={mode === 'light' ? colors.gray : colors.white} />
          {nodeInfo.synced ? (
            <CheckIcon className="header-image__overlay" />
          ) : (
            <SyncIcon className="header-image__overlay header-image__animated" />
          )}
        </div>
      </Link>
      <div className="header-title">
        <Typography component="h2" noWrap className="header-title__primary">
          {nodeInfo.network} ({nodeInfo.ip}{' '}
          <span>
            {nodeInfo.geoInfo.city},{nodeInfo.geoInfo.country}
          </span>
          )
        </Typography>
        <Typography component="p" noWrap className="header-title__secondary">
          forge v{nodeInfo.version} {appName} {appVersion}
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

    .header-image__animated {
      animation: spin 2s infinite linear;
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
    color: ${props => props.theme.typography.color.main};
    text-transform: uppercase;
  }

  .header-title__secondary {
    font-size: 14px;
    line-height: 1.71;
    letter-spacing: 1px;
    color: ${props => props.theme.typography.color.gray};
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
