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

function ConsensusStatus({ layer, theme, data }) {
  return (
    <List component="div">
      <ListItem>
        <ListItemIcon>
          <IconFa name="check-circle" color={getLayerColor(layer.status, theme)} />
        </ListItemIcon>
        <ListItemText primary={upperFirst(layer.label)} style={{ padding: 0 }} />
      </ListItem>
      <List component="div" style={{ paddingLeft: '32px' }}>
        <InfoRow label="Synced" value={data.chain.synced ? 'Yes' : 'No'} />
        <InfoRow label="Consensus Engine" value={`Tendermint v${data.chain.consensusVersion}`} />
        <InfoRow label="Max Block Size" value={data.forge.consensus.maxBytes} />
        <InfoRow label="Max Validator Candidate" value={data.forge.consensus.maxCandidates} />
        <InfoRow label="Max Validator" value={data.forge.consensus.maxValidators} />
      </List>
    </List>
  );
}

ConsensusStatus.propTypes = {
  layer: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withTheme()(ConsensusStatus);
