// 用高阶组件的方法实现整 APP 的页面统计，代码借鉴：https://github.com/react-ga/react-ga/issues/122
import React, { Component } from 'react';
import ReactGA from 'react-ga';
import ABA from '@arcblock/analytics-js';

export default (WrappedComponent, options = {}) => {
  const trackPage = page => {
    ReactGA.set({
      page,
      ...options,
    });

    ReactGA.pageview(page);
    ABA.pageview(page);
  };

  class TrackedComponent extends Component {
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

  return TrackedComponent;
};
