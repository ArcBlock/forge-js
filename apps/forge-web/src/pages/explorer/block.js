import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import Page from '../../components/page';
import Layout from '../../layouts/page';
import withI18n from '../../components/withI18n';
import withRoot from '../../components/withRoot';

import forge from '../../libs/forge';

class BlockDetail extends Page {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      block: null,
    };
  }

  componentDidMount() {
    this.loadStatus();
  }

  render() {
    const { loading, block } = this.state;
    const { height } = this.props.match.params;
    return (
      <Layout title="Block" cookies={this.cookies}>
        <Container>
          <Typography component="h3">Block detail for #{height}: </Typography>
          {loading && <CircularProgress />}
          {block && (
            <pre>
              <code>{JSON.stringify(block, true, '  ')}</code>
            </pre>
          )}
        </Container>
      </Layout>
    );
  }

  async loadStatus() {
    const { height } = this.props.match.params;
    this.setState({ loading: true });
    const { block } = await forge.getBlock({ height });
    this.setState({ loading: false, block });
  }
}

const Container = styled.div`
  padding: ${props => props.theme.spacing.unit * 3}px;
`;

export default withRoot(withI18n(withRouter(BlockDetail)));
