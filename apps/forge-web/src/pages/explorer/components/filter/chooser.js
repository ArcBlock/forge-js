import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useList } from 'react-use';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import CheckBoxIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckedIcon from '@material-ui/icons/CheckBox';

import IconFa from '../../../../components/iconfa';
import { fromTypeUrl } from '../../../../libs/util';

function FilterChooser({ supportedTxs, onClose, onApplyFilter, selectedTxs }) {
  const options = ['all'].concat(supportedTxs);
  const values =
    selectedTxs.length === supportedTxs.length ? ['all'].concat(selectedTxs) : selectedTxs;
  const [selected, { set, filter, push }] = useList(values);

  const onApply = () => {
    onApplyFilter(selected.filter(x => x !== 'all'));
    onClose();
  };

  const getHandler = type => e => {
    if (e.target.checked) {
      if (type === 'all') {
        set(options);
        return;
      }

      if (selected.includes(type)) {
        return;
      }

      push(type);
    } else if (type === 'all') {
      set([]);
    } else {
      filter(x => !['all', type].includes(x));
    }
  };

  return (
    <ChooserContainer className="filter-chooser">
      <div className="filter-header">
        <Typography component="p" className="header__title">
          Filter
        </Typography>
        <IconButton onClick={onClose} className="header__close">
          <IconFa name="times" size={16} />
        </IconButton>
      </div>
      <div className="filter-list">
        <Typography component="p" className="list__title">
          Transaction Type
        </Typography>
        <FormControl component="fieldset" className="list__options">
          <FormGroup>
            {options.map(x => (
              <FormControlLabel
                key={x}
                control={
                  <Checkbox
                    color="default"
                    icon={<CheckBoxIcon style={{ fontSize: '18px' }} />}
                    checkedIcon={<CheckedIcon style={{ fontSize: '18px' }} />}
                    checked={selected.includes(x)}
                    onChange={getHandler(x)}
                    value={x}
                  />
                }
                label={fromTypeUrl(x)}
              />
            ))}
          </FormGroup>
        </FormControl>
      </div>
      <div className="filter-footer">
        <Button
          variant="outlined"
          size="small"
          color="default"
          onClick={onApply}
          className="footer__button">
          Apply
        </Button>
      </div>
    </ChooserContainer>
  );
}

FilterChooser.propTypes = {
  supportedTxs: PropTypes.arrayOf(PropTypes.string).isRequired,
  onApplyFilter: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  selectedTxs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const ChooserContainer = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;

  .filter-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    .header__title {
      color: ${props => props.theme.colors.minor};
      font-weight: 900;
      text-transform: uppercase;
    }

    .header__close {
      color: ${props => props.theme.colors.minor};
    }
  }

  .filter-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    .list__title {
      color: ${props => props.theme.colors.minor};
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 20px;
    }
  }

  .filter-footer {
    margin-top: 20px;
    text-align: right;

    .footer__button {
      border: none;
      border-bottom: 1px solid ${props => props.theme.colors.minor};
    }
  }
`;

export default FilterChooser;
