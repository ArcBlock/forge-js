import React from 'react';
import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';

import Page from '../../components/page';
import Layout from '../../layouts/page';
import withI18n from '../../components/withI18n';
import withRoot from '../../components/withRoot';

import Summary from './components/summary';
import Transactions from './components/transactions';
import TopAccounts from './components/top_accounts';
import TopValidators from './components/top_validators';

class Dashboard extends Page {
  sections = {
    Summary,
    Transactions,
    'Top Accounts': TopAccounts,
    'Top Validators': TopValidators,
  };

  render() {
    return (
      <Layout title="Dashboard" cookies={this.cookies}>
        <Container>
          {Object.keys(this.sections).map(x => this.renderSection(x, this.sections[x]))}
        </Container>
      </Layout>
    );
  }

  renderSection(name, SectionComponent) {
    return (
      <div className="section" key={name}>
        <Typography component="h3" className="section__header">
          {this.t(name)}
        </Typography>
        <div className="section__content">
          <SectionComponent />
        </div>
      </div>
    );
  }
}

const Container = styled.div`
  padding: ${props => props.theme.spacing.unit * 6}px ${props => props.theme.spacing.unit * 15}px;
  max-width: 1280px;

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
  }

  .section__content {
  }
`;

export default withRoot(withI18n(Dashboard));
