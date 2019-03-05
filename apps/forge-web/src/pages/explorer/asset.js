import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import Page from '../../components/page';
import Layout from '../../layouts/page';
import Wrapper from '../../components/wrapper';
import SummaryHeader from './components/summary_header';

import withI18n from '../../components/withI18n';
import withRoot from '../../components/withRoot';
import TxList from './components/account/txs';
import Icon from '../../components/iconfa';

import forge from '../../libs/forge';

async function fetchTxs({ address, paging }) {
  return forge.listAssetTransactions({
    paging,
    address,
  });
}

class AssetDetail extends Page {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      asset: null,
    };
  }

  componentDidMount() {
    this.loadAsset();
  }

  render() {
    const { loading, asset } = this.state;
    return (
      <Layout title="Asset" cookies={this.cookies}>
        <Container>
          {loading && <CircularProgress />}
          {asset && (
            <React.Fragment>
              <SummaryHeader
                type={
                  <React.Fragment>
                    <Icon name="gem" size={14} />
                    {asset.address}
                  </React.Fragment>
                }
                title={asset.moniker}
                meta={[
                  { key: 'Created At', value: asset.context.genesisTime },
                  { key: 'Updated At', value: asset.context.renaissanceTime },
                  { key: 'Consumed At', value: asset.context.consumeTime || 'NAN' },
                  { key: 'Expire After', value: asset.ttl || 'NAN' },
                  {
                    key: 'Created By',
                    value: (
                      <Link to={`/node/explorer/accounts/${asset.issuer}`}>{asset.issuer}</Link>
                    ),
                  },
                  {
                    key: 'Owned By',
                    value: <Link to={`/node/explorer/accounts/${asset.owner}`}>{asset.owner}</Link>,
                  },
                  { key: 'Readonly?', value: asset.readonly ? 'Yes' : 'No' },
                  { key: 'Transferable?', value: asset.transferrable ? 'Yes' : 'No' },
                ]}
              />

              <Typography component="h3" variant="h6" style={{ marginBottom: '16px' }}>
                Related Transactions
              </Typography>
              <TxList address={asset.address} dataLoaderFn={fetchTxs} />
            </React.Fragment>
          )}
        </Container>
      </Layout>
    );
  }

  async loadAsset() {
    const { address } = this.props.match.params;
    this.setState({ loading: true });
    const { state: asset } = await forge.getAssetState(
      { address },
      {
        ignoreFields: ['state.context.genesisTx.tx', 'state.context.renaissanceTx.tx'],
      }
    );
    this.setState({ loading: false, asset });
  }
}

const Container = styled(Wrapper)`
  .tabs {
    margin-bottom: 60px;
  }
`;

export default withRoot(withI18n(withRouter(AssetDetail)));
