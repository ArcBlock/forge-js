import React from 'react';
import PropTypes from 'prop-types';
import { useToggle } from 'react-use';
import { withTheme } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';

import IconFa from '../../../../components/iconfa';
import FilterChooser from './chooser';

function FilterPanel({ supportedTxs, onApplyFilter, selectedTxs, theme }) {
  const [open, toggle] = useToggle(false);
  const onToggle = () => toggle();

  return (
    <React.Fragment>
      <IconButton onClick={onToggle} className="filter-trigger">
        <IconFa name="filter" size={18} color={open ? theme.colors.gray : theme.colors.minor} />
      </IconButton>
      <Drawer
        anchor="right"
        open={open}
        onClose={onToggle}
        PaperProps={{
          style: {
            boxShadow: '-2px 16px 10px 0 rgba(0, 0, 0, 0.05)',
            backgroundColor: '#f7f8f8',
            width: '440px',
            marginTop: '100px',
            overflow: 'scroll',
          },
        }}
        ModalProps={{
          hideBackdrop: false,
          BackdropProps: {
            invisible: true,
          },
        }}>
        <FilterChooser
          onClose={onToggle}
          onApplyFilter={onApplyFilter}
          supportedTxs={supportedTxs}
          selectedTxs={selectedTxs}
        />
      </Drawer>
    </React.Fragment>
  );
}

FilterPanel.propTypes = {
  supportedTxs: PropTypes.arrayOf(PropTypes.string).isRequired,
  onApplyFilter: PropTypes.func.isRequired,
  selectedTxs: PropTypes.arrayOf(PropTypes.string).isRequired,
  theme: PropTypes.object.isRequired,
};

export default withTheme()(FilterPanel);
