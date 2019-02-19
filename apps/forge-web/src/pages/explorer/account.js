import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import Page from '../../components/page';
import Layout from '../../layouts/page';
import withI18n from '../../components/withI18n';
import withRoot from '../../components/withRoot';

import forge from '../../libs/forge';

class AccountDetail extends Page {
  static propTypes = {
    address: PropTypes.number.isRequired,
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
    return (
      <Layout title="Account" cookies={this.cookies}>
        <Container>
          <Typography component="h3">Account detail for {this.props.address}: </Typography>
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
    this.setState({ loading: true });
    const { state } = await forge.getAccountState({ address: this.props.address });
    this.setState({ loading: false, account: state });
  }
}

const Container = styled.div`
  padding: ${props => props.theme.spacing.unit * 3}px;
`;

export default withRoot(withI18n(AccountDetail));
