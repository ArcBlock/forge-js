import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'lodash/get';

import AsyncSelect from 'react-select/lib/Async';
import { withRouter } from 'react-router-dom';

import forge from '../../../libs/forge';

class SearchBox extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  };

  state = {
    loading: false,
  };

  placeholder = 'Search by block height/tx hash/account address';

  render() {
    return (
      <Container>
        <AsyncSelect
          cacheOptions
          isLoading={this.state.loading}
          className="react-select-container"
          classNamePrefix="react-select"
          noOptionsMessage={this.noOptionsMessage}
          placeholder={this.placeholder}
          loadOptions={this.doSearch}
          onChange={this.onSelectSearch}
        />
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
}

const Container = styled.div`
  width: 480px;

  .react-select__control {
    border-radius: 20px;
    .react-select__indicators {
      display: none;
    }
  }
`;

export default withRouter(SearchBox);
