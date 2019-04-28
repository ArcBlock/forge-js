import React from 'react';
import PropTypes from 'prop-types';
import upperFirst from 'lodash/upperFirst';
import { withTheme } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import IconFa from '../../../../components/iconfa';
import getLayerColor from './layer_color';

function SummaryStatus({ layers, theme }) {
  return (
    <List component="div">
      {Object.keys(layers).map(x => (
        <ListItem key={x}>
          <ListItemIcon>
            <IconFa name="check-circle" color={getLayerColor(layers[x].status, theme)} />
          </ListItemIcon>
          <ListItemText primary={upperFirst(layers[x].label)} style={{ padding: 0 }} />
        </ListItem>
      ))}
    </List>
  );
}

SummaryStatus.propTypes = {
  layers: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withTheme()(SummaryStatus);
