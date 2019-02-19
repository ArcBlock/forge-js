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

class TransactionDetail extends Page {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      tx: null,
    };
  }

  componentDidMount() {
    this.loadStatus();
  }

  render() {
    const { loading, tx } = this.state;
    const { hash } = this.props.match.params;
    return (
      <Layout title="Transaction" cookies={this.cookies}>
        <Container>
          <Typography component="h3">Transaction detail for {hash}...</Typography>
          {loading && <CircularProgress />}
          {tx && (
            <pre>
              <code>{JSON.stringify(tx, true, '  ')}</code>
            </pre>
          )}
        </Container>
      </Layout>
    );
  }

  async loadStatus() {
    this.setState({ loading: true });
    const { hash } = this.props.match.params;
    const { info: tx } = await forge.getTx({ hash });
    this.setState({ loading: false, tx });
  }
}

const Container = styled.div`
  padding: ${props => props.theme.spacing.unit * 3}px;
`;

export default withRoot(withI18n(withRouter(TransactionDetail)));
