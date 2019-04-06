import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import { withTheme } from '@material-ui/core/styles';

import IconFa from '../../../components/iconfa';
import TxList from '../components/tx_list';
import BlockList from '../components/block_list';

import forge from '../../../libs/forge';

async function fetchTransactions({ typeFilter, paging }, retry = true) {
  try {
    const params = { paging };
    if (typeFilter) {
      params.typeFilter = typeFilter;
    }
    const res = await forge().listTransactions(params);
    return res;
  } catch (err) {
    if (retry) {
      return fetchTransactions({ typeFilter, paging }, false);
    }

    throw new Error('Too much traffic now, please try later');
  }
}

async function fetchBlocks({ paging }, retry = true) {
  try {
    const res = await forge().getBlocks(
      {
        emptyExcluded: true,
        paging,
      },
      {
        ignoreFields: ['blocks.txs'],
      }
    );
    return res;
  } catch (err) {
    if (retry) {
      return fetchBlocks({ paging }, false);
    }

    throw new Error('Too much traffic now, please try later');
  }
}

function LatestData({ theme }) {
  const [current, setCurrent] = useState('txs');
  const links = {
    txs: {
      name: 'txs',
      content: <TxList args={{}} pageSize={5} pageLink="/txs" dataLoaderFn={fetchTransactions} />,
      icon: 'file-invoice',
    },
    blocks: {
      name: 'blocks',
      content: <BlockList pageSize={5} pageLink="/blocks" dataLoaderFn={fetchBlocks} />,
      icon: 'boxes',
    },
  };

  return (
    <Container>
      <div className="links">
        {Object.keys(links).map(x => (
          <Button
            key={x}
            className={`link ${x === current ? 'link--active' : ''}`}
            onClick={() => setCurrent(x)}>
            <IconFa
              className="link__icon"
              name={links[x].icon}
              size={18}
              color={x === current ? theme.typography.color.main : theme.typography.color.gray}
            />
            <span className="link__text">{x}</span>
          </Button>
        ))}
      </div>
      <div className="datalist">{links[current].content}</div>
    </Container>
  );
}

LatestData.propTypes = {
  theme: PropTypes.object.isRequired,
};

LatestData.defaultProps = {};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media (min-width: ${props => props.theme.breakpoints.values.md}px) {
    min-height: 732px;
  }

  .links {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 32px;

    .link {
      display: flex;
      justify-content: left;
      align-items: center;
      margin-right: 32px;
      border-radius: 4px;

      .link__icon {
        margin-right: 8px;
      }

      .link__text {
        text-transform: uppercase;
        font-size: 16px;
        color: ${props => props.theme.typography.color.gray};
      }
    }

    .link--active {
      .link__text {
        color: ${props => props.theme.typography.color.main};
        font-weight: bold;
      }
    }
  }

  .datalist {
    width: 100%;
  }
`;

export default withTheme()(LatestData);
