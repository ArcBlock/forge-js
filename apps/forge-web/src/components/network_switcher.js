import React from 'react';
import styled from 'styled-components';

import ToolTip from '@material-ui/core/Tooltip';

import NetworkCard from './network_card/mini';
import AsyncComponent from './async';

import { networks } from '../libs/constant';
import { useSwitcher } from '../libs/hooks';

const CoverFlow = AsyncComponent(() => import('react-coverflow'));

export default function NetworkSwitcher({ ...rest }) {
  const { current, setCurrent } = useSwitcher();
  const names = Object.keys(networks);
  let activeIndex = names.indexOf(current);
  if (activeIndex === -1) {
    activeIndex = 0;
  }

  return (
    <ToolTip title="Click to switch network">
      <Switcher {...rest}>
        <CoverFlow
          width={200}
          height={64}
          displayQuantityOfSide={2}
          navigation={false}
          infiniteScroll={false}
          enableHeading={false}
          enableScroll={true}
          currentFigureScale={1.2}
          otherFigureScale={1}
          clickable={true}
          active={activeIndex}>
          {names.map(x => (
            <NetworkCard
              key={x}
              data={networks[x]}
              selected={x === current}
              onClick={() => setCurrent(x)}
            />
          ))}
        </CoverFlow>
      </Switcher>
    </ToolTip>
  );
}

const Switcher = styled.div`
  margin-top: 8px;

  & > div > div > div {
    z-index: 2;
    background: transparent;
    outline: none;

    figure {
      box-shadow: none;
    }
  }
`;
