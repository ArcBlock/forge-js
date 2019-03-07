import React from 'react';
import PropTypes from 'prop-types';
import upperFirst from 'lodash/upperFirst';
import { withTheme } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import IconFa from '../../../../components/iconfa';
import InfoRow from './info_row';
import { getLayerColor } from './util';

function NetworkStatus({ layer, theme }) {
  return (
    <List component="div">
      <ListItem>
        <ListItemIcon>
          <IconFa name="check-circle" color={getLayerColor(layer.status, theme)} />
        </ListItemIcon>
        <ListItemText primary={upperFirst(layer.label)} style={{ padding: 0 }} />
      </ListItem>
      <List component="div" style={{ paddingLeft: '32px' }}>
        <InfoRow label="Daemon Running" value="Yes" />
        <InfoRow label="Disk Usage" value="1.2 GB" />
      </List>
    </List>
  );
}

NetworkStatus.propTypes = {
  layer: PropTypes.object.isRequired,
  // data: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withTheme()(NetworkStatus);
