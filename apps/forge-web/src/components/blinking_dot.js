import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function BlinkingDot({ theme, label, ...rest }) {
  return (
    <Dot {...rest}>
      <span className={`led__dot led__dot--${theme}`} />
      {!!label && <span className="led__label">{label}</span>}
    </Dot>
  );
}

BlinkingDot.propTypes = {
  theme: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.number,
  duration: PropTypes.string,
};

BlinkingDot.defaultProps = {
  theme: 'green',
  label: '',
  size: 16,
  duration: '1s',
};

const Dot = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;

  .led__label {
    font-size: 12px;
    text-align: center;
    margin: 1em;
  }

  .led__dot {
    width: ${props => props.size || 16}px;
    height: ${props => props.size || 16}px;
    border-radius: 50%;
  }

  .led__dot--green {
    background-color: ${props => props.theme.colors.green};
    animation: blinkGreen ${props => props.duration} infinite;
  }

  .led__dot--red {
    background-color: ${props => props.theme.colors.red};
    animation: blinkRed ${props => props.duration} infinite;
  }

  @keyframes blinkGreen {
    from {
      background-color: ${props => props.theme.colors.green};
    }
    50% {
      background-color: #2e7d32;
    }
    to {
      background-color: ${props => props.theme.colors.green};
    }
  }

  @keyframes blinkRed {
    from {
      background-color: ${props => props.theme.colors.red};
    }
    50% {
      background-color: #e65100;
    }
    to {
      background-color: ${props => props.theme.colors.red};
    }
  }
`;
