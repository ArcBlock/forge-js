import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'lodash/get';

import { withRouter } from 'react-router-dom';
import IconFa from './iconfa';
import AsyncComponent from './async';

import forge from '../libs/forge';
import { getExplorerUrl } from '../libs/util';

const AsyncSelect = AsyncComponent(() => import('react-select/lib/Async'));

class SearchBox extends React.Component {
  state = {
    loading: false,
  };

  placeholder = 'Search by block height/tx hash/account address';

  render() {
    const { history, size, ...rest } = this.props;
    return (
      <Container {...rest} size={size}>
        <AsyncSelect
          cacheOptions
          isLoading={this.state.loading}
          className="react-select-container"
          classNamePrefix="react-select"
          noOptionsMessage={this.noOptionsMessage}
          placeholder="Search tx/account/block"
          loadOptions={this.doSearch}
          onChange={this.onSelectSearch}
        />
        <IconFa name="search" size={18} className="search-icon" />
      </Container>
    );
  }

  // prettier-ignore
  noOptionsMessage = ({ inputValue }) => (inputValue ? 'Oops, nothing match found' : this.placeholder);

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
        value: v => getExplorerUrl(`/txs/${v}`),
        path: 'getTx.info.hash',
      },
      block: {
        query: `{ getBlock(height: ${keyword}) { block { height } } }`,
        label: v => `Block: ${v}`,
        value: v => getExplorerUrl(`/blocks/${v}`),
        path: 'getBlock.block.height',
      },
      account: {
        query: `{ getAccountState(address: "${keyword}") { state { address } } }`,
        label: v => `Account: ${v}`,
        value: v => getExplorerUrl(`/accounts/${v}`),
        path: 'getAccountState.state.address',
      },
      asset: {
        query: `{ getAssetState(address: "${keyword}") { state { address } } }`,
        label: v => `Asset: ${v}`,
        value: v => getExplorerUrl(`/assets/${v}`),
        path: 'getAssetState.state.address',
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
      const res = await forge().doRawQuery(query);
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
}

SearchBox.propTypes = {
  history: PropTypes.object.isRequired,
  size: PropTypes.number,
};

SearchBox.defaultProps = {
  size: 480,
};

const Container = styled.div`
  width: ${props => props.size}px;
  margin-left: 20px;
  position: relative;

  .search-icon {
    position: absolute;
    right: 16px;
    top: 8px;
  }

  .react-select__control {
    border-radius: 20px;
    padding-left: 8px;
    background-color: ${props => props.theme.palette.background.default};
    .react-select__indicators {
      display: none;
    }
    .react-select__placeholder {
      color: ${props => props.theme.typography.color.gray};
    }
    .react-select__input,
    .react-select__single-value {
      color: ${props => props.theme.typography.color.main};
    }
  }

  .react-select__control--is-focused {
    border-color: ${props => props.theme.typography.color.main};
    box-shadow: 0 0 0 0 transparent;

    &:hover {
      border-color: ${props => props.theme.typography.color.main};
    }
  }

  .react-select__menu {
    background-color: ${props => props.theme.palette.background.default};
    color: ${props => props.theme.typography.color.main};
    text-align: left;

    .react-select__option,
    .react-select__option--is-disabled {
      text-align: left;
    }

    .react-select__option--is-focused,
    .react-select__control--is-selected {
      background-color: ${props => props.theme.palette.primary.main};
    }
  }
`;

export default withRouter(SearchBox);
