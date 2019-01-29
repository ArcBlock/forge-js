import React from 'react';

import Page from '../../components/page';
import withI18n from '../../components/withI18n';
import withRoot from '../../components/withRoot';

class Dashboard extends Page {
  render() {
    return (
      <div className="App">
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
      </div>
    );
  }
}

export default withRoot(withI18n(Dashboard));
