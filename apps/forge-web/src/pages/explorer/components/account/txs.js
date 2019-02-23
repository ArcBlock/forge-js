/* eslint no-nested-ternary:"off" */
import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useAsync } from 'react-use';

import CircularProgress from '@material-ui/core/CircularProgress';

import Icon from '../../../../components/iconfa';
import TxCard from '../tx_card/index';

function TxList({ address, pageSize, dataLoaderFn }) {
  const [cursor, setCursor] = useState(null);

  const fetchTxs = async (addr, size, cur = null) => {
    const params = { address: addr, paging: { size: size || 10 } };
    if (cur) {
      params.paging.cursor = cur;
    }

    console.log('fetchTxs.dataLoaderFn', params);
    const res = await dataLoaderFn(params);
    if (res.page && res.page.cursor && res.page.next) {
      setCursor(res.page.cursor);
    }

    return res;
  };

  const state = useAsync(async () => fetchTxs(address, pageSize, cursor), [
    address,
    pageSize,
    cursor,
  ]);

  if (state.error) {
    console.error(state.error);
  }

  return (
    <Container>
      {state.loading ? (
        <CircularProgress />
      ) : state.error ? (
        <p className="error">
          <Icon name="exclamation-circle" size={36} />
          {state.error.message}
        </p>
      ) : (
        <React.Fragment>
          {state.value.map(x => (
            <TxCard key={x.hash} tx={x} />
          ))}
          {state.value.length === 0 && (
            <p className="warn">
              <Icon name="exclamation-triangle" size={36} />
              No data found!
            </p>
          )}
        </React.Fragment>
      )}
    </Container>
  );
}

TxList.propTypes = {
  address: PropTypes.string.isRequired,
  pageSize: PropTypes.number,
  dataLoaderFn: PropTypes.func.isRequired,
};

TxList.defaultProps = {
  pageSize: 10,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .error,
  .warn {
    display: flex;
    align-items: center;
    font-size: 36px;
    opacity: 0.5;

    i {
      margin-right: 16px;
    }
  }

  .error {
    color: ${props => props.theme.colors.red};
  }

  .warn {
    color: ${props => props.theme.colors.minor};
  }
`;

export default TxList;
