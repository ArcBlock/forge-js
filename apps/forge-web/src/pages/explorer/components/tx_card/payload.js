import React from 'react';
import PropTypes from 'prop-types';

import Tooltip from '@material-ui/core/Tooltip';

import IconFa from '../../../../components/iconfa';

const Payload = React.memo(({ itx }) => {
  const hasAssets = !!(Array.isArray(itx.assets) && itx.assets.length);
  const hasValue = !!itx.value;
  return (
    <span className="meta">
      {hasAssets && (
        <Tooltip title={itx.assets.join(',')}>
          <IconFa name="gem" size={14} className="meta-icon" />
        </Tooltip>
      )}
      {hasAssets && hasValue && <span className="meta-separator">+</span>}
      {hasValue && (
        <span>
          <IconFa name="coins" size={16} className="meta-icon" />
          <span>{itx.value} arc</span>
        </span>
      )}
    </span>
  );
});

Payload.propTypes = {
  itx: PropTypes.object.isRequired,
};

export default Payload;
