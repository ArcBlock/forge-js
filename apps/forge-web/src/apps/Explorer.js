import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import { useAsync, useLocalStorage } from 'react-use';

import Layout from '../layouts/explorer';

import PageHome from '../pages/explorer/home';
import PageBlockList from '../pages/explorer/blocks';
import PageBlockDetail from '../pages/explorer/block';
import PageTxList from '../pages/explorer/txs';
import PageTxDetail from '../pages/explorer/tx';
import PageAccountDetail from '../pages/explorer/account';
import PageAssetDetail from '../pages/explorer/asset';
import ActivityIndicator from '../components/activity_indicator';

import { localeData } from '../libs/locale';
import { detectLocale, delay } from '../libs/util';
import forge from '../libs/forge';

addLocaleData(localeData);

const { locale, messages } = detectLocale();

async function fetchInfo() {
  try {
    const { state } = await forge.getForgeState();
    await delay(1600);
    return { token: state.token };
  } catch (err) {
    console.error(err.errors);
    throw new Error(
      Array.isArray(err.errors)
        ? err.errors.map(x => x.message).join(',')
        : err.message || err.toString()
    );
  }
}

const App = () => {
  const [, setToken] = useLocalStorage('token', {});
  const state = useAsync(fetchInfo);

  if (state.loading) {
    return (
      <Wrapper>
        <ActivityIndicator
          messages={['Fetch chain info...', 'Fetching network state...']}
          interval={800}
        />
      </Wrapper>
    );
  }

  if (state.error) {
    return (
      <Wrapper>
        <p className="error">{state.error.message}</p>
      </Wrapper>
    );
  }

  if (state.value.token) {
    // HACK: we must add a timeout here
    setTimeout(() => setToken(state.value.token), 0);
  }

  return (
    <IntlProvider locale={locale} messages={messages}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={PageHome} />
            <Route exact path="/blocks" component={PageBlockList} />
            <Route exact path="/txs" component={PageTxList} />
            <Route exact path="/blocks/:height" component={PageBlockDetail} />
            <Route exact path="/txs/:hash" component={PageTxDetail} />
            <Route exact path="/accounts/:address" component={PageAccountDetail} />
            <Route exact path="/assets/:address" component={PageAssetDetail} />
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
  background: #222222;
`;

export default App;
