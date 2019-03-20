import React from 'react';
import styled from 'styled-components';

import CircularProgress from '@material-ui/core/CircularProgress';

import Page from '../../../components/page';
import AsyncComponent from '../../../components/async';
import Layout from '../../../layouts/page';
import Wrapper from '../../../components/wrapper';
import withI18n from '../../../components/withI18n';
import withRoot from '../../../components/withRoot';

import api from '../../../libs/forge';

const AsyncGlobe = AsyncComponent(() => import('../../../components/globe'));

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
      const { netInfo } = await api.getNetInfo();
      this.setState({
        markers: netInfo.peers.map(x => ({
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

  componentWillMount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  setActiveMarker() {
    const { markers } = this.state;
    const ids = markers.map(x => x.id);
    const index = Math.floor(Math.random() * ids.length);
    this.setState({ activeMarkerId: ids[index] });
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
          <AsyncGlobe width={900} height={900} markers={markers} activeMarkerId={activeMarkerId} />
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
  align-items: center;
  justify-content: center;
`;

export default withRoot(withI18n(Network));
