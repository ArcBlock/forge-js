import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { withTheme } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import logo from './logo.png';

// eslint-disable-next-line
function Logo({ theme }) {
  return (
    <Link to="/">
      <Header>
        <div className="header-image">
          <img src={logo} alt="arcblock" />
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

Logo.propTypes = {
  theme: PropTypes.object.isRequired,
};

const Header = styled.div`
  display: flex;
  margin-top: 8px;

  .header-image {
    margin-right: ${props => props.theme.spacing.unit * 2}px;
    margin-top: ${props => props.theme.spacing.unit / 2}px;
    position: relative;
    color: ${props => (props.synced ? props.theme.colors.green : props.theme.colors.red)};

    img {
      width: 50px;
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

export default withTheme()(Logo);
