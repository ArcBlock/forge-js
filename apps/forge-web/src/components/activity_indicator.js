import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Fade from '@material-ui/core/Fade';

import { colors } from '../libs/constant';

// inspired by: https://codepen.io/wangshijun/pen/oQvwdX?editors=1100
export default class ActivityIndicator extends React.Component {
  static propTypes = {
    interval: PropTypes.number,
    messages: PropTypes.arrayOf(PropTypes.string.isRequired),
  };

  static defaultProps = {
    interval: 3000,
    messages: ['Loading pricing plans...'],
  };

  state = {
    index: 0,
  };

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  startTimer() {
    const { messages } = this.props;
    this.timer = setTimeout(() => {
      this.setState(state => ({ index: (state.index + 1) % messages.length }));
      this.startTimer();
    }, this.props.interval);
  }

  stopTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  render() {
    const message = this.props.messages[this.state.index];
    return (
      <Container>
        <div className="pm-loader-container">
          <Fade key={message} in={true}>
            <div className="pm-loader-text">
              <p>{message}</p>
            </div>
          </Fade>
          <div className="pm-loader-atoms">
            <div className="pm-loader-center-atom" />
            <div className="pm-loader-orbit-1">
              <div className="pm-loader-atom-1" />
            </div>
            <div className="pm-loader-orbit-2">
              <div className="pm-loader-atom-2" />
            </div>
            <div className="pm-loader-orbit-3">
              <div className="pm-loader-atom-3" />
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

const Container = styled.div`
  && {
    padding: 20px;
    width: 100%;
    height: 100%;
    min-height: 360px;
    z-index: 100;
    transition: opacity 0.5s linear;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  @keyframes orbit {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  .pm-loader-text {
    color: ${colors.dark};
    font-size: 14px;
    text-align: center;
    position: relative;
    height: 70px;
    -webkit-user-select: none;
  }

  .pm-loader-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    flex: 1;
  }

  .pm-loader-atoms {
    width: 100px;
    height: 100px;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
  }

  .pm-loader-center-atom {
    top: 32px;
    left: 32px;
    width: 32px;
    height: 32px;
    position: absolute;
    border-radius: 50%;
    background-color: ${colors.yellow};
  }

  .pm-loader-orbit-1 {
    top: 20px;
    left: 20px;
    width: 56px;
    height: 56px;
    position: absolute;
    border-radius: 50%;
    border: 1px solid ${colors.red};
  }

  .pm-loader-orbit-2 {
    top: 8px;
    left: 8px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    position: absolute;
    border: 1px solid ${colors.green};
  }

  .pm-loader-orbit-3 {
    top: -4px;
    left: -4px;
    width: 104px;
    height: 104px;
    position: absolute;
    border-radius: 50%;
    border: 1px solid ${colors.blue};
  }

  .pm-loader-atom-1 {
    width: 7px;
    height: 7px;
    margin-top: 4px;
    margin-left: 4px;
    border-radius: 50%;
    background-color: ${colors.red};
    transform-origin: 24px 24px;
    animation: orbit 1s infinite;
    animation-timing-function: linear;
    -webkit-transform-origin: 24px 24px;
  }

  .pm-loader-atom-2 {
    width: 7px;
    height: 7px;
    margin-top: 8px;
    margin-left: 8px;
    border-radius: 50%;
    background-color: ${colors.green};
    transform-origin: 32px 32px;
    animation: orbit 2s infinite;
    animation-timing-function: linear;
    -webkit-transform-origin: 32px 32px;
  }

  .pm-loader-atom-3 {
    width: 7px;
    height: 7px;
    margin-top: 11px;
    margin-left: 11px;
    border-radius: 50%;
    background-color: ${colors.blue};
    transform-origin: 41px 41px;
    animation: orbit 3s infinite;
    animation-timing-function: linear;
    -webkit-transform-origin: 41px 41px;
  }
`;
