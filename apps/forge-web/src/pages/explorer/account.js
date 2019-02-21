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

class AccountDetail extends Page {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      account: null,
    };
  }

  componentDidMount() {
    this.loadStatus();
  }

  render() {
    const { loading, account } = this.state;
    const { address } = this.props.match.params;
    return (
      <Layout title="Account" cookies={this.cookies}>
        <Container>
          <Typography component="h3">Account detail for {address}: </Typography>
          {loading && <CircularProgress />}
          {account && (
            <pre>
              <code>{JSON.stringify(account, true, '  ')}</code>
            </pre>
          )}
        </Container>
      </Layout>
    );
  }

  async loadStatus() {
    const { address } = this.props.match.params;
    this.setState({ loading: true });
    const { state } = await forge.getAccountState({ address: address.toLowerCase() });
    this.setState({ loading: false, account: state });
  }
}

const Container = styled.div`
  padding: ${props => props.theme.spacing.unit * 3}px;
`;

export default withRoot(withI18n(withRouter(AccountDetail)));
