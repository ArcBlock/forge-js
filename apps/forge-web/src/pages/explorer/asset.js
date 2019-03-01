import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';

import Page from '../../components/page';
import Layout from '../../layouts/page';
import Wrapper from '../../components/wrapper';
import SummaryHeader from './components/summary_header';

import withI18n from '../../components/withI18n';
import withRoot from '../../components/withRoot';

import forge from '../../libs/forge';

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
                type={`Asset: ${asset.address}`}
                title={asset.moniker}
                meta={[
                  { key: 'Created At', value: asset.context.genesisTime },
                  { key: 'Updated At', value: asset.context.renaissanceTime },
                ]}
              />
              <pre>
                <code>{JSON.stringify(asset, true, '  ')}</code>
              </pre>
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
