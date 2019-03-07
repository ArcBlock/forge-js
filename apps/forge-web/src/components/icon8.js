import React from 'react';
import PropTypes from 'prop-types';

const Icon8 = React.memo(({ name, size, alt, color, style, ...rest }) => (
  <img
    alt={alt || name}
    src={`https://img.icons8.com/dotty/${size * 3}/${color.replace(/^#/, '')}/${name}.png`}
    style={Object.assign({ width: `${size}px` }, style)}
    {...rest}
  />
));

Icon8.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  alt: PropTypes.string,
  style: PropTypes.object,
};

Icon8.defaultProps = {
  size: 36,
  color: '#000000',
  alt: '',
  style: {},
};

export default Icon8;
