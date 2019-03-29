import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';

import Wrapper from '../../../components/wrapper';
import Dashboard from './dashboard';
import Stack from './stack';

import { useSwitcher } from '../../../libs/hooks';

export default function Switcher({ networks }) {
  const { open, current, setOpen, setCurrent } = useSwitcher();
  const currentNetwork = current || networks[0];
  const createHandler = x => () => {
    console.log('switcher.select', x);
    setCurrent(x);
    setOpen(false);
  };

  if (!open) {
    return (
      <Div fixWidth={true}>
        <Dashboard title={currentNetwork} />
      </Div>
    );
  }

  return (
    <Div fixWidth={false}>
      <div className="networks">
        {networks.map(x => (
          <div key={x} className={`network ${current === x ? 'network--active' : ''}`}>
            <Button color="default" className="network__button" onClick={createHandler(x)}>
              {x}
            </Button>
          </div>
        ))}
      </div>
      <Stack networks={networks} current={currentNetwork} />
    </Div>
  );
}

Switcher.propTypes = {
  networks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const Div = styled(Wrapper)`
  margin-top: 32px;
  max-width: ${props => (props.fixWidth ? `${props.theme.pageWidth}px` : '100%')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .networks {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    color: ${props => props.theme.typography.color.main};

    .network {
      width: 15%;
      height: 60px;
      position: relative;

      &:before {
        background: ${props => props.theme.typography.color.main};
        position: absolute;
        left: 0;
        top: -3px;
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 50%;
      }

      &:after {
        border-top: 1px dotted ${props => props.theme.typography.color.main};
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 1px;
        content: '';
      }

      &:first-of-type {
        margin-left: 15%;
        &:after {
          width: 200%;
          left: -100%;
        }
      }

      .network__button {
        transition: color 200ms ease;
        position: absolute;
        left: -8px;
        top: 16px;
      }
    }

    .network--active {
      .network__button {
        color: #4e6af6;
      }
    }
  }
`;
