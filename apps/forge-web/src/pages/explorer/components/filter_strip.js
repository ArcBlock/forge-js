import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { withTheme } from '@material-ui/core/styles';
import { withRouter, Link } from 'react-router-dom';

import SearchBox from './search_box';
import IconFa from '../../../components/iconfa';

class FilterStrip extends React.Component {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  };

  links = [
    {
      name: 'txs',
      url: '/node/explorer/txs',
      icon: 'file-invoice',
    },
    {
      name: 'blocks',
      url: '/node/explorer/blocks',
      icon: 'boxes',
    },
  ];

  render() {
    const { theme } = this.props;
    return (
      <Container>
        <div className="links">
          {this.links.map(x => (
            <Link
              key={x.name}
              to={x.url}
              className={`link ${this.isActive(x.name) ? 'link--active' : ''}`}>
              <IconFa
                className="link__icon"
                name={x.icon}
                size={18}
                color={this.isActive(x.name) ? theme.colors.gray : theme.colors.minor}
              />
              <span className="link__text">{x.name}</span>
            </Link>
          ))}
        </div>
        <div className="search-filter">
          <SearchBox />
        </div>
      </Container>
    );
  }

  isActive(name) {
    const { pathname } = this.props.location;
    return pathname.indexOf(`/${name}`) > 0;
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;

  .links {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .link {
      display: flex;
      justify-content: left;
      align-items: center;
      margin-right: 32px;

      .link__icon {
        margin-right: 8px;
      }

      .link__text {
        text-transform: uppercase;
        font-size: 16px;
        color: #9b9b9b;
      }
    }

    .link--active {
      .link__text {
        color: #222222;
        font-weight: bold;
      }
    }
  }
`;

export default withRouter(withTheme()(FilterStrip));
