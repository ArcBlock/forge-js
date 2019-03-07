import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/core/styles';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import IconFa from '../../../../components/iconfa';

function InfoRow({ label, value, theme }) {
  return (
    <ListItem>
      <IconFa name="info-circle" color={theme.typography.color.gray} />
      <ListItemText inset primary={value} secondary={label} className="info-row" />
    </ListItem>
  );
}

InfoRow.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withTheme()(InfoRow);
