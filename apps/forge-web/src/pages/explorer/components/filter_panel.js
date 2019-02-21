import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import { withTheme } from '@material-ui/core/styles';

import IconFa from '../../../components/iconfa';

class FilterPanel extends React.Component {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    supportedTxs: PropTypes.arrayOf(PropTypes.string).isRequired,
    onApplyFilter: PropTypes.func.isRequired,
    selectedTxs: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  constructor(props) {
    super(props);

    const { supportedTxs, selectedTxs } = this.props;
    this.state = { open: false };
    supportedTxs.forEach(x => {
      this.state[x] = selectedTxs.includes(x);
    });
  }

  render() {
    const { theme, supportedTxs, onApplyFilter } = this.props;
    const { open } = this.state;

    return (
      <Container>
        <Button onClick={this.onToggle} className="filter-trigger">
          <IconFa name="filter" size={18} color={open ? theme.colors.gray : theme.colors.minor} />
        </Button>
        <Drawer
          anchor="right"
          open={open}
          onClose={this.onToggle}
          PaperProps={{
            style: {
              boxShadow: '-2px 16px 10px 0 rgba(0, 0, 0, 0.05)',
              backgroundColor: '#f7f8f8',
              width: '440px',
              marginTop: '100px',
            },
          }}
          ModalProps={{
            hideBackdrop: false,
            BackdropProps: {
              invisible: true,
            },
          }}>
          <FilterChooser className="filter-chooser">
            <Button onClick={this.onToggle} className="btn-close">
              <IconFa name="times" size={18} />
            </Button>
            <div className="filter-list">
              <Typography component="p" className="filter-title">
                Transaction Type
              </Typography>
              <FormControl component="fieldset">
                <FormGroup>
                  {supportedTxs.map(x => (
                    <FormControlLabel
                      key={x}
                      control={
                        <Checkbox checked={this.state[x]} onChange={this.getHandler(x)} value={x} />
                      }
                      label={x}
                    />
                  ))}
                </FormGroup>
              </FormControl>
            </div>
          </FilterChooser>
        </Drawer>
      </Container>
    );
  }

  getHandler = type => e => {
    this.setState({ [type]: e.target.checked });
  };

  onToggle = () => {
    console.log('onToggle', this.state);
    this.setState(state => ({
      open: !state.open,
    }));
  };
}

const Container = styled.div`
  .filter-trigger {
  }
`;

const FilterChooser = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;

  .btn-close {
    margin-bottom: 20px;
    color: ${props => props.theme.colors.minor};
  }

  .filter-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export default withTheme()(FilterPanel);
