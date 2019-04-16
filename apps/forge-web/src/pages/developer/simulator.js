/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

import Page from '../../components/page';
import Layout from '../../layouts/page';
import withI18n from '../../components/withI18n';
import withRoot from '../../components/withRoot';

import forge from '../../libs/forge';

class Simulator extends Page {
  constructor(props) {
    super(props);

    this.state = {
      isRunning: false,
      isLoading: false,
    };
  }

  render() {
    const { isRunning, isLoading } = this.state;
    return (
      <Layout title="Simulator" cookies={this.cookies}>
        <Container>
          <Typography component="h3" variant="h4" className="page-title">
            Simulator helps generate traffic on this node.
          </Typography>
          <Button
            variant="contained"
            onClick={isRunning ? this.stopSimulator : this.startSimulator}
            disabled={isLoading}
            color="primary">
            {isLoading ? <CircularProgress /> : isRunning ? 'Stop Simulator' : 'Start Simulator'}
          </Button>
        </Container>
      </Layout>
    );
  }

  stopSimulator = async () => {
    this.setState({ isLoading: false });
    const res = await forge().stopSimulator();
    this.setState({ isLoading: false, isRunning: res.code !== 'OK' });
  };

  startSimulator = async () => {
    this.setState({ isLoading: false });
    const res = await forge().startSimulator();
    this.setState({ isLoading: false, isRunning: res.code === 'OK' });
  };
}

const Container = styled.div`
  padding: ${props => props.theme.spacing.unit * 3}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 32px;

  .page-title {
    margin-bottom: 32px;
  }
`;

export default withRoot(withI18n(Simulator));
