import React from 'react';
import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';

import Page from '../../components/page';
import Layout from '../../layouts/page';
import Wrapper from '../../components/wrapper';
import withI18n from '../../components/withI18n';
import withRoot from '../../components/withRoot';

import Status from './components/status/index';
import Metrics from './components/metrics';
import Transactions from './components/transactions';
import TopAccounts from './components/top_accounts';
import TopValidators from './components/top_validators';

class Dashboard extends Page {
  sections = {
    metrics: Metrics,
    transactions: Transactions,
    topAccounts: TopAccounts,
    topValidators: TopValidators,
  };

  render() {
    return (
      <Layout title="Dashboard" cookies={this.cookies}>
        <Container>
          <Status />
          {Object.keys(this.sections).map(x => this.renderSection(x, this.sections[x]))}
        </Container>
      </Layout>
    );
  }

  renderSection(name, SectionComponent) {
    return (
      <div className="section" key={name}>
        <Typography component="h3" className="section__header">
          {this.t(`dashboard.${name}`)}
        </Typography>
        <div className="section__content">
          <SectionComponent />
        </div>
      </div>
    );
  }
}

const Container = styled(Wrapper)`
  .section {
    margin-bottom: 80px;
  }

  .section__header {
    margin-bottom: 30px;
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 1.33;
    letter-spacing: 2.6px;
    color: ${props => props.theme.typography.color.main};
  }

  .section__content {
  }
`;

export default withRoot(withI18n(Dashboard));
