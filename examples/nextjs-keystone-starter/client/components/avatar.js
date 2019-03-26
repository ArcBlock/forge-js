import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Avatar({ did, size }) {
  useEffect(() => {
    if (typeof window.jdenticon === 'function') {
      window.jdenticon();
    }
  });

  const fullDid = did.indexOf('did:abt:') === 0 ? did : `abt:did:${did}`;
  return <svg width={size} height={size} data-jdenticon-value={fullDid} />;
}

Avatar.propTypes = {
  did: PropTypes.string.isRequired,
  size: PropTypes.number,
};

Avatar.defaultProps = {
  size: 36,
};
