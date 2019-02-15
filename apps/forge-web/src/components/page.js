import React from 'react';
import PropTypes from 'prop-types';
import Cookie from 'js-cookie';

export default class Page extends React.Component {
  static contextTypes = {
    language: PropTypes.object,
  };

  static propTypes = {
    intl: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.cookies = Cookie.get();
  }

  /**
   * Translate a message
   * @param {String} id  messageId
   * @param {Object} variables message template variables
   */
  t(id, variables = {}) {
    return this.props.intl.formatMessage({ id }, variables);
  }

  getInputHandler = (name, state = {}) => e => {
    this.setState(
      Object.assign(state, {
        [name]: e.target.checked || e.target.value,
      })
    );
  };

  renderMessages() {
    const { errorMessage, successMessage } = this.state;
    return [
      errorMessage ? (
        <p className="error" key="error-message">
          {errorMessage}
        </p>
      ) : (
        ''
      ),
      successMessage ? (
        <p className="success" key="success-message">
          {successMessage}
        </p>
      ) : (
        ''
      ),
    ].filter(Boolean);
  }

  formatError(err) {
    console.error(err);
    return Array.isArray(err.errors)
      ? err.errors.map(x => x.message).join(';')
      : err.message || err.toString();
  }
}
