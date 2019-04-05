import React from 'react';
import styled from 'styled-components';
import { withTheme } from '@material-ui/core/styles';

import CircularProgress from '@material-ui/core/CircularProgress';

import Page from '../../components/page';
import AsyncComponent from '../../components/async';
import Layout from '../../layouts/page';
import Wrapper from '../../components/wrapper';
import withI18n from '../../components/withI18n';
import withRoot from '../../components/withRoot';

import api from '../../libs/forge';

const AsyncGlobe = AsyncComponent(() => import('../../components/globe'));

class Network extends Page {
  constructor(props) {
    super(props);

    this.state = {
      markers: null,
      activeMarkerId: null,
    };

    this.timer = null;
    this.setActiveMarker = this.setActiveMarker.bind(this);
  }

  async componentDidMount() {
    try {
      const { netInfo } = await api().getNetInfo();
      this.setState({
        markers: (netInfo.peers || []).map(x => ({
          id: x.id,
          latitude: x.geoInfo.latitude,
          longitude: x.geoInfo.longitude,
          title: x.moniker,
          country: x.geoInfo.country,
          description: `Location: ${x.geoInfo.city},${x.geoInfo.country}`,
        })),
      });

      this.timer = setTimeout(this.setActiveMarker, 5000);
    } catch (err) {
      this.setState({ error: 'Error loading data' });
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  async setActiveMarker() {
    try {
      const { info } = await api().getChainInfo();
      const { block } = await api().getBlock(
        { height: info.blockHeight },
        { ignoreFields: ['block.txs'] }
      );
      this.setState({ activeMarkerId: block.proposer });
    } catch (err) {
      console.error(err);
    }

    this.timer = setTimeout(this.setActiveMarker, 5000);
  }

  render() {
    const { markers, activeMarkerId } = this.state;
    if (!markers) {
      return (
        <Container>
          <CircularProgress />
        </Container>
      );
    }

    return (
      <Layout title="Network" cookies={this.cookies}>
        <Container>
          <div className="greeting">
            <p>
              Your current node is connected to <strong>{markers.length}</strong> peer
              {markers.length > 1 ? 's' : ''}!
            </p>
          </div>
          <AsyncGlobe
            theme={this.props.theme.mode}
            width={600}
            height={600}
            markers={markers}
            activeMarkerId={activeMarkerId}
          />
        </Container>
      </Layout>
    );
  }
}

const Container = styled(Wrapper)`
  margin-top: 30px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .greeting {
    font-size: 30px;
    font-weight: 900;
    color: ${props => props.theme.typography.color.main};
  }
`;

export default withRoot(withI18n(withTheme()(Network)));
