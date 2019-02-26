/* eslint react/prefer-stateless-function:"off" */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import withI18n from '../../components/withI18n';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    title: PropTypes.string,
  };

  static defaultProps = {
    title: 'ArcBlock',
  };

  render() {
    const { children, title } = this.props;

    return (
      <React.Fragment>
        <Helmet title={title} />
        {children}
      </React.Fragment>
    );
  }
}

export default withI18n(Layout);
