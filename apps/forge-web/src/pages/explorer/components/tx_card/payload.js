import React from 'react';
import PropTypes from 'prop-types';
import { fromUnitToToken } from '@arcblock/forge-util';

import Tooltip from '@material-ui/core/Tooltip';

import IconFa from '../../../../components/iconfa';
import { useTokenInfo } from '../../../../libs/hooks';

const Payload = ({ itx }) => {
  const [token] = useTokenInfo();
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
          <span>
            {fromUnitToToken(itx.value || '0', token.decimal || 16)} {token.symbol || 'ABT'}
          </span>
        </span>
      )}
    </span>
  );
};

Payload.propTypes = {
  itx: PropTypes.object.isRequired,
};

export default Payload;
