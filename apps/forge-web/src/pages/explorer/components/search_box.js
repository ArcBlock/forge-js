import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'lodash/get';

import AsyncSelect from 'react-select/lib/Async';
import { withTheme } from '@material-ui/core/styles';
import { withRouter, Link } from 'react-router-dom';

import IconFa from '../../../components/iconfa';
import forge from '../../../libs/forge';

class SearchBox extends React.Component {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  state = {
    loading: false,
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
                size={16}
                color={this.isActive(x.name) ? theme.colors.gray : theme.colors.minor}
              />
              <span className="link__text">{x.name}</span>
            </Link>
          ))}
        </div>
        <div className="search-filter">
          <div className="search-box">
            <AsyncSelect
              cacheOptions
              isLoading={this.state.loading}
              className="react-select-container"
              classNamePrefix="react-select"
              noOptionsMessage={() => 'Oops, nothing match found'}
              placeholder="Search by Address/Tx hash/Block"
              loadOptions={this.doSearch}
              onChange={this.onSelectSearch}
            />
          </div>
        </div>
      </Container>
    );
  }

  onSelectSearch = ({ value }, { action }) => {
    if (action === 'select-option' && value) {
      this.props.history.push(value);
    }
  };

  doSearch = async keyword => {
    const possibleTypes = {
      tx: {
        query: `{ getTx(hash: "${keyword}") { info { hash } } }`,
        label: v => `Transaction: ${v}`,
        value: v => `/node/explorer/txs/${v}`,
        path: 'getTx.info.hash',
      },
      block: {
        query: `{ getBlock(height: ${keyword}) { block { height } } }`,
        label: v => `Block: ${v}`,
        value: v => `/node/explorer/blocks/${v}`,
        path: 'getBlock.block.height',
      },
      account: {
        query: `{ getAccountState(address: "${keyword}") { state { address } } }`,
        label: v => `Account: ${v}`,
        value: v => `/node/explorer/accounts/${v}`,
        path: 'getAccountState.state.address',
      },
    };

    this.setState({ loading: true });
    const options = [];
    const keys = Object.keys(possibleTypes);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      // eslint-disable-next-line
      await this.loadSuggest(key, possibleTypes[key], options);
    }

    this.setState({ loading: false });
    return options;
  };

  loadSuggest = async (type, spec, options) => {
    try {
      const { query, label, value, path } = spec;
      const res = await forge.doRawQuery(query);
      const v = get(res, path);

      if (v) {
        options.push({ value: value(v), label: label(v) });
      }
    } catch (err) {
      if (process.env.NODE_ENV !== 'production') {
        console.error(type, err);
      }
    }
  };

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
  }

  .search-box {
    width: 480px;

    .react-select__control {
      border-radius: 20px;
      .react-select__indicators {
        display: none;
      }
    }
  }
`;

export default withRouter(withTheme()(SearchBox));
