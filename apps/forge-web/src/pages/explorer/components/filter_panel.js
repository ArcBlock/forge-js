import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import { withTheme } from '@material-ui/core/styles';

import IconFa from '../../../components/iconfa';

class FilterPanel extends React.Component {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    // supportedTxs: PropTypes.arrayOf(PropTypes.string).isRequired,
    // onChange: PropTypes.func.isRequired,
    // selectedTxs: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  state = {
    open: false,
    anchorEl: null,
  };

  render() {
    const { theme } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const id = open ? 'no-transition-popper' : null;

    return (
      <Container>
        <div className="trigger">
          <Button aria-describedby={id} variant="contained" onClick={this.onOpen}>
            <IconFa
              name="filter"
              size={18}
              color={this.state.open ? theme.colors.minor : theme.colors.open}
            />
          </Button>
        </div>
        <Popper id={id} open={open} anchorEl={anchorEl}>
          <Paper>
            <Typography>The content of the Popper.</Typography>
          </Paper>
        </Popper>
      </Container>
    );
  }

  onOpen = e => {
    this.setState(state => ({
      anchorEl: state.anchorEl ? null : e.currentTarget,
      open: !state.open,
    }));
  };
}

const Container = styled.div`
  .trigger {
  }
`;

export default withTheme()(FilterPanel);
