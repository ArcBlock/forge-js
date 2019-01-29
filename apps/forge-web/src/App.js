import React from 'react';
import { BrowserRouter, HashRouter, Route, Switch, withRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
// import Cookie from 'js-cookie';
// import browserLang from 'browser-lang';
import { addLocaleData } from 'react-intl';

import { localeData, translations } from './libs/locale';

import PageDashboard from './pages/dashboard';
import withTracker from './components/withTracker';
import withI18n from './components/withI18n';

addLocaleData(localeData);

// TODO: sidebar
export const App = () => (
  <div className="wrapper">
    <div className="main">
      <div className="content">
        <Switch>
          <Route exact path="/" component={PageDashboard} />
        </Switch>
      </div>
    </div>
  </div>
);

const WrappedApp = withI18n(withRouter(withTracker(App)));
const Router = process.env.NODE_ENV === 'production' ? BrowserRouter : HashRouter;
const locale = 'en';

export default () => (
  <Router>
    <IntlProvider locale={locale} messages={translations[locale]}>
      <WrappedApp />
    </IntlProvider>
  </Router>
);
