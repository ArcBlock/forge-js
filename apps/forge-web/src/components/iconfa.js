import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const variants = {
  light: 'fal',
  regular: 'far',
  solid: 'fas',
};

const Icon = ({ name, color, size, variant, rounded, style, className, ...rest }) => {
  const content = (
    <i
      className={`${variants[variant]} fa-${name} ${rounded ? '' : className}`}
      style={Object.assign({ color, fontSize: `${size}px` }, style || {})}
    />
  );

  if (rounded) {
    return (
      <Container size={size} color={color} className={className} {...rest}>
        {content}
      </Container>
    );
  }

  return content;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  rounded: PropTypes.bool,
  variant: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object,
};

Icon.defaultProps = {
  rounded: false,
  variant: 'light',
  color: '#222222',
  size: 30,
  style: {},
};

const Container = styled.span`
  width: ${props => props.size * 2}px;
  height: ${props => props.size * 2}px;
  border-radius: 50%;
  border: 1px solid ${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;

  .fa,
  .fas,
  .fal,
  .far {
    line-height: ${props => props.size}px;
  }
`;

export default Icon;
