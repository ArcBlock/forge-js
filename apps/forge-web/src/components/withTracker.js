import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import ABA from '@arcblock/analytics-js';
import { withRouter } from 'react-router-dom';

export default (WrappedComponent, options = {}) => {
  const trackPage = page => {
    if (process.env.NODE_ENV !== 'production') {
      return;
    }

    ReactGA.set({
      page,
      ...options,
    });

    ReactGA.pageview(page);
    ABA.pageview(page);
  };

  class TrackedComponent extends Component {
    static propTypes = {
      location: PropTypes.object.isRequired,
    };

    componentDidMount() {
      const page = this.props.location.pathname;
      trackPage(page);
    }

    componentWillReceiveProps(nextProps) {
      const currentPage = this.props.location.pathname;
      const nextPage = nextProps.location.pathname;

      if (currentPage !== nextPage) {
        trackPage(nextPage);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return withRouter(TrackedComponent);
};
