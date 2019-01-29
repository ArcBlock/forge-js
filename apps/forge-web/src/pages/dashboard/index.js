import React from 'react';

import Page from '../../components/page';
import Layout from '../../layouts/dashboard';
import withI18n from '../../components/withI18n';
import withRoot from '../../components/withRoot';

class Dashboard extends Page {
  render() {
    return (
      <Layout title="Dashboard" cookies={this.cookies}>
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </Layout>
    );
  }
}

export default withRoot(withI18n(Dashboard));
