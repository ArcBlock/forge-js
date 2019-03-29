import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import { useThemeMode } from '../../libs/hooks';

export default function Logo() {
  const [mode] = useThemeMode();
  return (
    <Link to="/">
      <Header>
        <div className="header-image">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="40"
            viewBox="0 0 35 40"
            className="logo">
            <g fill="none" fillRule="evenodd">
              <path d="M-8-5h50v50H-8z" />
              <path
                fill={mode === 'dark' ? '#fff' : '#222'}
                d="M.211 9.875L0 10v20.023L17.32 40l17.11-9.884.211-.127V9.993L17.321 0 .21 9.875zm17.548.262V1.232l15.599 9.014-11.648 6.736-3.95-6.845zm-16.468.092L16.89 1.232l.008 8.905-3.95 6.845L1.29 10.229zM26.09 24.58l-3.95-6.845 11.656-6.753v18.03l-7.706-4.432zM.853 10.98l11.665 6.753-3.95 6.829L.852 29.01V10.98zm12.83 6.38l3.207-5.56.025 7.444-3.232-1.883zm4.076-5.52l3.2 5.52-3.2 1.884v-7.403zm.414 8.146l3.216-1.857 3.216 5.57-6.432-3.713zm-4.896-1.857l3.208 1.857-6.424 3.705 3.216-5.562zm-3.529 6.737l7.167-4.136V29l-7.167-4.134zm8.011-4.129l7.167 4.129-7.167 4.135v-8.264zm0 9.277l8.02-4.634 7.596 4.38L17.75 38.76l.008-8.744zm-16.476-.262l7.597-4.364 8.01 4.635v8.735L1.283 29.753z"
              />
            </g>
          </svg>
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
    margin-right: ${props => props.theme.spacing.unit * 4}px;
    margin-top: ${props => props.theme.spacing.unit}px;
    color: ${props => (props.synced ? props.theme.colors.green : props.theme.colors.red)};

    .logo {
      transform: scale(1.2);
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
