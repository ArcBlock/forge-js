/* eslint no-nested-ternary:"off" */
import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useAsync } from 'react-use';

import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

import Icon from '../../../components/iconfa';
import Alert from '../../../components/alert';

function PaginatedList({ args, pageSize, dataKey, dataLoaderFn, dataRenderFn }) {
  const [cursor, setCursor] = useState(null);

  // eslint-disable-next-line
  const fetchList = async (args, size, cur = null) => {
    const params = { ...args, paging: { size: size || 10 } };
    if (cur) {
      params.paging.cursor = cur;
    }

    const res = await dataLoaderFn(params);

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
        <Alert type="error">{state.error.message}</Alert>
      </Container>
    );
  }

  return (
    <Container>
      {Array.isArray(state.value[dataKey]) &&
        state.value[dataKey].length > 0 &&
        dataRenderFn(state.value[dataKey])}
      {state.value[dataKey].length === 0 && <Alert type="error">No data found!</Alert>}
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

  .pager {
    width: 100%;
    max-width: 800px;
    display: flex;
    justify-content: flex-end;
    i {
      margin-left: 16px;
    }
    span {
      color: ${props => props.theme.typography.color.gray};
    }
  }
`;

export default PaginatedList;
