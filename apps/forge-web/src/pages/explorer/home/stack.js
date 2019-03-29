import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Skeleton from './skeleton';
import Dashboard from './dashboard';

import { useThemeMode, useSwitcher } from '../../../libs/hooks';

const deltaY = 60;
const deltaZ = 60;

export default function Stack({ networks: original, current }) {
  const networks = [].concat(original);
  const index = original.indexOf(current);
  if (index > -1) {
    networks.splice(index, 1);
    networks.unshift(current);
  }

  const total = networks.length;
  const range = total * deltaY - deltaY;
  const min = networks.map((_, i) => ({ y: -deltaY * (i + 1), z: -deltaZ * (i + 1) }));
  const max = min.map(d => ({ y: range + d.y, z: range + d.z }));

  const { setCurrent } = useSwitcher();
  const [currentIndex, setCurrentIndex] = useState(1);
  const [styles, setStyles] = useState(min);
  const [mode] = useThemeMode();

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  });

  // eslint-disable-next-line no-shadow
  const correctDelta = (key, value, index) => {
    if (value <= min[index][key]) {
      return min[index][key];
    }
    if (value >= max[index][key]) {
      return max[index][key];
    }

    return value;
  };

  const onWheel = e => {
    if (Math.abs(e.deltaY) < 5) {
      return;
    }
    if (e.deltaY < 0) {
      if (currentIndex >= networks.length) {
        return;
      }

      const newStyles = styles.map((d, i) => ({
        y: correctDelta('y', d.y + deltaY, i),
        z: correctDelta('z', d.z + deltaZ, i),
        opacity: i < currentIndex ? 0 : 1,
      }));
      setStyles(newStyles);
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      setCurrent(networks[newIndex - 1]);
    } else {
      if (currentIndex <= 1) {
        return;
      }

      const newStyles = styles.map((d, i) => ({
        y: correctDelta('y', d.y - deltaY, i),
        z: correctDelta('z', d.z - deltaZ, i),
        opacity: i > currentIndex ? 0 : 1,
      }));
      setStyles(newStyles);
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      setCurrent(networks[newIndex - 1]);
    }
  };

  return (
    <Container marginTop={deltaY}>
      <div className="view">
        <div className="cards">
          {networks.map((x, i) => {
            const style = {
              zIndex: total - i,
              transform: `translate3d(0px, ${styles[i].y}px, ${styles[i].z}px)`,
              opacity: styles[i].opacity === undefined ? 1 : styles[i].opacity,
            };

            if (x === current) {
              return (
                <Dashboard
                  key={x}
                  title={current}
                  shadow={true}
                  className="card"
                  onWheel={onWheel}
                  style={{ ...style, padding: '32px' }}
                />
              );
            }

            return (
              <Skeleton
                key={x}
                title={x}
                width={1440}
                theme={mode}
                shadow={true}
                className="card"
                onWheel={onWheel}
                style={style}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
}

Stack.propTypes = {
  networks: PropTypes.arrayOf(PropTypes.string).isRequired,
  current: PropTypes.string.isRequired,
};

const Container = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .view {
    -webkit-perspective: ${props => props.theme.pageWidth * 0.8}px;
    -webkit-perspective-origin-x: ${props => props.theme.pageWidth * 0.5}px;
    width: ${props => props.theme.pageWidth}px;
    margin: 0 auto;
    height: 1800px;
    position: relative;
  }

  .cards {
    position: relative;
    width: 100%;
    height: 100%;
    margin-top: ${props => props.marginTop}px;
  }

  .card {
    position: absolute;
    top: 0;
    width: 100%;
    height: 1800px;
    transition: all 300ms linear;
  }
`;
