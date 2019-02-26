import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import copy from 'copy-to-clipboard';
import isEqual from 'lodash/isEqual';

import Button from '@material-ui/core/Button';
import CopyIcon from '@material-ui/icons/FileCopy';

export default class CopyToClipBoard extends React.Component {
  static propTypes = {
    param: PropTypes.string.isRequired,
    width: PropTypes.number,
    truncate: PropTypes.bool,
    button: PropTypes.bool,
    className: PropTypes.string,
  };

  static defaultProps = {
    width: 0,
    truncate: true,
    button: false,
    className: '',
  };

  constructor(props) {
    super(props);

    this.state = {
      copied: false,
    };

    this.timer = null;
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !isEqual(this.props, nextProps) || !isEqual(this.state, nextState);
  }

  render() {
    const { width, param, truncate, button, className } = this.props;
    return (
      <Span width={width} truncate={truncate} className={className}>
        <a className="copy-param" title={`Click to copy: ${param}`} onClick={this.onCopyParam}>
          {param}
        </a>
        {!this.state.copied && button && (
          <Button onClick={this.onCopyParam} size="small">
            <CopyIcon style={{ fontSize: '1em' }} />
          </Button>
        )}
        {this.state.copied && <span className="copy-tip">Copied!</span>}
      </Span>
    );
  }

  onCopyParam = e => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    copy(this.props.param);
    this.setState({ copied: true });
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      this.timer = null;
      this.setState({ copied: false });
    }, 3000);
  };
}

const Span = styled.span`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  ${props => (props.width > 0 ? `max-width: ${props.width}px` : '')};
  flex-wrap: wrap;

  .copy-param {
    flex-grow: 0;
    text-align: left;
    white-space: nowrap;
    cursor: pointer;
    ${props => (props.truncate ? 'width: 85%; overflow: hidden; text-overflow: ellipsis;' : '')};
  }

  .copy-param,
  .copy-param:hover,
  .copy-param:visited {
    color: rgba(55, 182, 182, 1);
  }

  .copy-tip {
    margin-left: 15px;
    font-size: 0.9em;
    color: red;
  }
`;
