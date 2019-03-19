import React from 'react';
import styled from 'styled-components';

import CircularProgress from '@material-ui/core/CircularProgress';

import Page from '../../../components/page';
import Layout from '../../../layouts/page';
import Wrapper from '../../../components/wrapper';
import withI18n from '../../../components/withI18n';
import withRoot from '../../../components/withRoot';
import Globe from '../../../components/globe';

import api from '../../../libs/forge';

class Network extends Page {
  constructor(props) {
    super(props);

    this.state = {
      markers: [],
    };
  }

  async componentDidMount() {
    try {
      const { netInfo } = await api.getNetInfo();
      console.log({ netInfo });
      this.setState({
        markers: netInfo.peers.map(x => ({
          id: x.id,
          latitude: x.geoInfo.latitude,
          longitude: x.geoInfo.longitude,
          title: x.moniker,
          description: `IP: ${x.ip}, Location: ${x.geoInfo.city},${x.geoInfo.country}`,
        })),
      });
    } catch (err) {
      this.setState({ error: 'Error loading data' });
    }
  }

  render() {
    if (!this.state.markers.length) {
      return <CircularProgress />;
    }

    return (
      <Layout title="Network" cookies={this.cookies}>
        <Container>
          <Globe markers={this.state.markers} />
        </Container>
      </Layout>
    );
  }
}

const Container = styled(Wrapper)`
  background-color: #222;
`;

export default withRoot(withI18n(Network));
