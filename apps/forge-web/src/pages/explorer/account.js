import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';

import Page from '../../components/page';
import Layout from '../../layouts/page';
import SummaryHeader from './components/summary_header';
import AccountTabs from './components/account/tabs';

import withI18n from '../../components/withI18n';
import withRoot from '../../components/withRoot';

import forge from '../../libs/forge';
import { fromArcToReadable } from '../../libs/util';

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
    this.loadAccount();
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
                badge={fromArcToReadable(account.balance)}
                badgeTip="Balance"
                meta={[
                  { key: 'First Seen', value: account.context.genesisTime },
                  { key: 'Last Seen', value: account.context.renaissanceTime },
                ]}
              />
              <AccountTabs account={account} />
              <pre>
                <code>{JSON.stringify(account, true, '  ')}</code>
              </pre>
            </React.Fragment>
          )}
        </Container>
      </Layout>
    );
  }

  async loadAccount() {
    const { address } = this.props.match.params;
    this.setState({ loading: true });
    const { state } = await forge.getAccountState(
      { address },
      {
        ignoreFields: ['state.context.genesisTx.tx', 'state.context.renaissanceTx.tx'],
      }
    );
    this.setState({ loading: false, account: state });
  }
}

const Container = styled.div`
  padding: ${props => props.theme.spacing.unit * 6}px 8%;
  width: auto;
  max-width: 1280px;

  .tabs {
    margin-bottom: 60px;
  }
`;

export default withRoot(withI18n(withRouter(AccountDetail)));
