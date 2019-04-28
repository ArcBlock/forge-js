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

import getLayerColor from './layer_color';

function ForgeStatus({ layer, theme, data }) {
  return (
    <List component="div">
      <ListItem>
        <ListItemIcon>
          <IconFa name="check-circle" color={getLayerColor(layer.status, theme)} />
        </ListItemIcon>
        <ListItemText primary={upperFirst(layer.label)} style={{ padding: 0 }} />
      </ListItem>
      <List component="div" style={{ paddingLeft: '32px' }}>
        <InfoRow label="Latest Block Height" value={data.chain.blockHeight} />
        <InfoRow label="Total Txs Count" value={data.chain.totalTxs} />
        <InfoRow label="Framework Version" value={data.forge.version} />
        <InfoRow label="App Hash" value={data.chain.appHash} />
      </List>
    </List>
  );
}

ForgeStatus.propTypes = {
  layer: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withTheme()(ForgeStatus);
