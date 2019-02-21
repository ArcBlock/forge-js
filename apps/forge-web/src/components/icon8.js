import React from 'react';
import PropTypes from 'prop-types';

const Icon8 = React.memo(({ name, size, alt, color, ...rest }) => (
  <img
    alt={alt || name}
    src={`https://img.icons8.com/dotty/${size}/${color.replace(/^#/, '')}/${name}.png`}
    {...rest}
  />
));

Icon8.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  alt: PropTypes.string,
};

Icon8.defaultProps = {
  size: 36,
  color: '#000000',
  alt: '',
};

export default Icon8;
