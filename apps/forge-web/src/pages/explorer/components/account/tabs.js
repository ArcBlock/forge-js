import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import Button from '@material-ui/core/Button';

import Icon from '../../../../components/iconfa';
import TxList from './txs';
import AssetList from './assets';

import forge from '../../../../libs/forge';

const tabs = {
  txs: {
    title: 'txs',
    path: 'numTxs',
    icon: 'receipt',
    async fetcher({ address, paging }) {
      const { transactions } = await forge.listTransactions({
        paging,
        addressFilter: { sender: address },
      });
      return transactions;
    },
  },
  assets: {
    title: 'assets',
    path: 'numAssets',
    icon: 'gem',
    content: account => <AssetList address={account.address} />,
  },
  stakes: {
    title: 'stakes',
    path: 'stake.recentStakes.items',
    format: v => v.length,
    icon: 'hand-point-right',
    async fetcher({ address, paging }) {
      const { transactions } = await forge.listTransactions({
        paging,
        typeFilter: { types: ['stake'] },
        addressFilter: { sender: address },
      });
      return transactions;
    },
  },
  receivedStakes: {
    title: 'received stakes',
    path: 'stake.recentReceivedStakes.items',
    format: v => v.length,
    icon: 'hand-receiving',
    async fetcher({ address, paging }) {
      const { transactions } = await forge.listTransactions({
        paging,
        typeFilter: { types: ['stake'] },
        addressFilter: { receiver: address },
      });
      return transactions;
    },
  },
};

function AccountTabs({ account }) {
  const [selectedTab, set] = useState('txs');
  const renderTab = (name, { title, path, format, icon }) => {
    const v = get(account, path);
    if (v === undefined) {
      return null;
    }

    const value = typeof format === 'function' ? format(v) : v;

    return (
      <Button key={name} onClick={() => set(name)}>
        <Tab className="tab" active={selectedTab === name}>
          <div className="tab__icon">
            <Icon name={icon} size={16} />
          </div>
          <div className="tab__text">
            <span className="tab__number">{value}</span>
            <span className="tab__type">{title}</span>
          </div>
        </Tab>
      </Button>
    );
  };

  const { content, fetcher } = tabs[selectedTab];

  return (
    <Container className="tabs">
      <div className="header">{Object.keys(tabs).map(x => renderTab(x, tabs[x]))}</div>
      <div className="content">
        {typeof content === 'function' ? (
          content(account)
        ) : (
          <TxList key={selectedTab} address={account.address} dataLoaderFn={fetcher} />
        )}
      </div>
    </Container>
  );
}

AccountTabs.propTypes = {
  account: PropTypes.object.isRequired,
};

const Container = styled.div`
  .header {
    margin-bottom: 60px;
  }

  .content {
    width: 100%;
  }
`;

const Tab = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: 60px;
  color: ${props => (props.active ? props.theme.colors.gray : props.theme.colors.minor)};

  .tab__icon {
    margin-right: 8px;
    margin-top: 3px;
    opacity: ${props => (props.active ? 1 : 0.5)};
  }

  .tab__text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: inherit;

    .tab__number {
      font-size: 20px;
      font-weight: 900;
    }

    .tab__type {
      font-size: 14px;
      opacity: 0.5;
      letter-spacing: 1px;
      text-transform: lowercase;
    }
  }
`;

export default AccountTabs;
