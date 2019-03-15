import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import { useThemeMode } from '../../libs/hooks';

import logoDark from './logo-dark.png';
import logoLight from './logo-light.png';

export default function Logo() {
  const [mode] = useThemeMode();
  return (
    <Link to="/">
      <Header>
        <div className="header-image">
          <img src={mode === 'dark' ? logoDark : logoLight} alt="arcblock" />
        </div>
        <div className="header-title">
          <Typography component="h2" noWrap className="header-title__primary">
            ABT Network
          </Typography>
          <Typography component="p" noWrap className="header-title__secondary">
            Universal Block Explorer
          </Typography>
        </div>
      </Header>
    </Link>
  );
}

const Header = styled.div`
  display: flex;
  margin-top: 8px;

  .header-image {
    margin-right: ${props => props.theme.spacing.unit * 2}px;
    margin-top: ${props => props.theme.spacing.unit / 2}px;
    color: ${props => (props.synced ? props.theme.colors.green : props.theme.colors.red)};

    img {
      width: 64px;
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
    font-weight: 900;
    letter-spacing: 3px;
    color: ${props => props.theme.typography.color.main};
    text-transform: uppercase;
  }

  .header-title__secondary {
    font-size: 14px;
    line-height: 1.71;
    letter-spacing: 2px;
    color: ${props => props.theme.typography.color.gray};
  }
`;
