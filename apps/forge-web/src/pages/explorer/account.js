import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';

import Page from '../../components/page';
import Layout from '../../layouts/page';
import SummaryHeader from './components/summary_header';
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
    return (
      <Layout title="Account" cookies={this.cookies}>
        <Container>
          {loading && <CircularProgress />}
          {account && (
            <React.Fragment>
              <SummaryHeader
                type={account.address}
                title={account.moniker}
                badge={account.balance}
                badgeTip="Balance"
                meta={[
                  { key: 'First Seen', value: account.context.genesisTime },
                  { key: 'Last Seen', value: account.context.renaissanceTime },
                ]}
              />
              <pre>
                <code>{JSON.stringify(account, true, '  ')}</code>
              </pre>
            </React.Fragment>
          )}
        </Container>
      </Layout>
    );
  }

  async loadStatus() {
    const { address } = this.props.match.params;
    this.setState({ loading: true });
    const { state } = await forge.getAccountState({ address });
    this.setState({ loading: false, account: state });
  }
}

const Container = styled.div`
  padding: ${props => props.theme.spacing.unit * 6}px ${props => props.theme.spacing.unit * 15}px;
`;

export default withRoot(withI18n(withRouter(AccountDetail)));
