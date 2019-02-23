/* eslint no-nested-ternary:"off" */
import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useAsync } from 'react-use';

import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

import Icon from '../../../../components/iconfa';

function PaginatedList({ address, pageSize, dataKey, dataLoaderFn, dataRenderFn }) {
  const [cursor, setCursor] = useState(null);

  const fetchList = async (addr, size, cur = null) => {
    const params = { address: addr, paging: { size: size || 10 } };
    if (cur) {
      params.paging.cursor = cur;
    }

    const res = await dataLoaderFn(params);
    console.log('fetchList.dataLoaderFn', params, res);

    return res;
  };

  const state = useAsync(async () => fetchList(address, pageSize, cursor), [
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
          {Array.isArray(state.value[dataKey]) &&
            state.value[dataKey].length > 0 &&
            dataRenderFn(state.value[dataKey])}
          {state.value[dataKey].length === 0 && (
            <p className="warn">
              <Icon name="exclamation-triangle" size={36} />
              No data found!
            </p>
          )}
          {state.value.page && state.value.page.cursor && state.value.page.next && (
            <p className="pager">
              <Button onClick={() => setCursor(state.value.page.cursor)}>
                Next Page <Icon name="arrow-right" />
              </Button>
            </p>
          )}
        </React.Fragment>
      )}
    </Container>
  );
}

PaginatedList.propTypes = {
  address: PropTypes.string.isRequired,
  dataKey: PropTypes.string.isRequired,
  pageSize: PropTypes.number,
  dataLoaderFn: PropTypes.func.isRequired,
  dataRenderFn: PropTypes.func.isRequired,
};

PaginatedList.defaultProps = {
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

  .pager {
    width: 100%;
    max-width: 800px;
    display: flex;
    justify-content: flex-end;
    color: ${props => props.theme.colors.gray};
    i {
      margin-left: 16px;
    }
  }
`;

export default PaginatedList;
