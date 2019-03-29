import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/core/styles';

import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Icon8 from './icon8';

import { useSwitcherState } from '../libs/hooks';

function NetworkSwitcher({ theme, ...rest }) {
  const [state, setState] = useSwitcherState();
  const toggle = () => setState(!state);

  return (
    <Tooltip {...rest} title={state ? 'Close Network Switcher' : 'Open Network Switcher'}>
      <IconButton onClick={toggle} style={{ cursor: 'pointer' }}>
        <Icon8 size={36} set="wired" name="process" color={theme.typography.color.main} />
      </IconButton>
    </Tooltip>
  );
}

NetworkSwitcher.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withTheme()(NetworkSwitcher);
