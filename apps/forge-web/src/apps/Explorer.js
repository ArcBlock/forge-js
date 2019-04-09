import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';

import AsyncComponent from '../components/async';
import ActivityIndicator from '../components/activity_indicator';

import { localeData } from '../libs/locale';
import { detectLocale } from '../libs/util';
import { useStartupInfo, useThemeMode } from '../libs/hooks';

addLocaleData(localeData);

const { locale, messages } = detectLocale();

const Layout = AsyncComponent(() => import('../layouts/explorer'));
const PageHome = AsyncComponent(() => import('../pages/explorer/home'));
const PageBlockList = AsyncComponent(() => import('../pages/explorer/blocks'));
const PageBlockDetail = AsyncComponent(() => import('../pages/explorer/block'));
const PageTxList = AsyncComponent(() => import('../pages/explorer/txs'));
const PageTxDetail = AsyncComponent(() => import('../pages/explorer/tx'));
const PageAccountDetail = AsyncComponent(() => import('../pages/explorer/account'));
const PageAssetDetail = AsyncComponent(() => import('../pages/explorer/asset'));

const App = () => {
  const state = useStartupInfo();
  const [mode] = useThemeMode();

  if (state.loading) {
    return (
      <Wrapper mode={mode}>
        <ActivityIndicator
          messages={['Fetch chain info...', 'Fetching network state...']}
          interval={800}
        />
      </Wrapper>
    );
  }

  if (state.error) {
    return (
      <Wrapper mode={mode}>
        <p className="error">{state.error.message}</p>
      </Wrapper>
    );
  }

  return (
    <IntlProvider locale={locale} messages={messages}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={PageHome} />
            <Route exact path="/:network/blocks" component={PageBlockList} />
            <Route exact path="/:network/txs" component={PageTxList} />
            <Route exact path="/:network/blocks/:height" component={PageBlockDetail} />
            <Route exact path="/:network/txs/:hash" component={PageTxDetail} />
            <Route exact path="/:network/accounts/:address" component={PageAccountDetail} />
            <Route exact path="/:network/assets/:address" component={PageAssetDetail} />
            <Redirect from="/*" to="/" />
          </Switch>
        </Layout>
      </Router>
    </IntlProvider>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => (props.mode === 'light' ? '#f7f8f8' : '#222')};
`;

export default App;
