import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom';

import Icon8 from '../../../components/icon8';

class SearchBox extends React.Component {
  static propTypes = {
    // match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    // history: PropTypes.object.isRequired,
  };

  // state = {
  //   keyword: '',
  // };

  links = [
    {
      name: 'txs',
      url: '/node/explorer/txs',
      icon: 'check',
    },
    {
      name: 'blocks',
      url: '/node/explorer/blocks',
      icon: 'cancel',
    },
  ];

  render() {
    return (
      <Container>
        <div className="links">
          {this.links.map(x => (
            <Link
              key={x.name}
              to={x.url}
              className={`link ${this.isActive(x.name) ? 'link--active' : ''}`}>
              <Icon8
                className="link__icon"
                name={x.icon}
                size={20}
                color={this.isActive(x.name) ? '#222222' : '#9b9b9b'}
              />
              <span className="link__text">{x.name}</span>
            </Link>
          ))}
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
  }

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
      font-size: 14px;
      color: #9b9b9b;
    }
  }

  .link--active {
    .link__text {
      color: #222222;
      font-weight: bold;
    }
  }
`;

export default withRouter(SearchBox);
