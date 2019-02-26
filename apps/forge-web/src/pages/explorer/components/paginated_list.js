/* eslint no-nested-ternary:"off" */
import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useAsync } from 'react-use';

import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

import Icon from '../../../components/iconfa';

function PaginatedList({ args, pageSize, dataKey, dataLoaderFn, dataRenderFn }) {
  const [cursor, setCursor] = useState(null);

  // eslint-disable-next-line
  const fetchList = async (args, size, cur = null) => {
    const params = { ...args, paging: { size: size || 10 } };
    if (cur) {
      params.paging.cursor = cur;
    }

    console.log('fetchList.dataLoaderFn.params', params);
    const res = await dataLoaderFn(params);
    console.log('fetchList.dataLoaderFn.result', res);

    return res;
  };

  const state = useAsync(async () => fetchList(args, pageSize, cursor), [args, pageSize, cursor]);

  if (state.error) {
    console.error(state.error);
  }

  if (state.loading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  if (state.error) {
    return (
      <Container>
        <p className="error">
          <Icon name="exclamation-circle" size={36} />
          {state.error.message}
        </p>
      </Container>
    );
  }

  return (
    <Container>
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
    </Container>
  );
}

PaginatedList.propTypes = {
  args: PropTypes.object.isRequired,
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
    margin: 0;

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
