import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Icon from './iconfa';
import { colors } from '../libs/constant';

const types = {
  error: {
    icon: 'exclamation-circle',
    color: colors.red,
  },
  warning: {
    icon: 'exclamation-triangle',
    color: colors.yellow,
  },
  success: {
    icon: 'check-circle',
    color: colors.green,
  },
  default: {
    icon: 'info-circle',
    color: colors.minor,
  },
};

const Alert = ({ type, children, style, ...rest }) => {
  const { icon, color } = types[type || 'default'];
  return (
    <Container {...rest} style={Object.assign({ color }, style)}>
      <Icon name={icon} size={36} />
      {children}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  margin: 0;

  i {
    margin-right: 16px;
  }
`;

Alert.propTypes = {
  type: PropTypes.oneOf(Object.keys(types)).isRequired,
  children: PropTypes.any.isRequired,
  style: PropTypes.object,
};

Alert.defaultProps = {
  style: {},
};

export default Alert;
