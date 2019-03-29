import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Skeleton from '../skeleton';

const deltaY = 36;
const deltaZ = 36;

export default function Animation() {
  const networks = ['Argon', 'Bromine', 'Titanium'];
  const total = networks.length;
  const range = total * deltaY - deltaY;
  const min = networks.map((_, i) => ({ y: -deltaY * (i + 1), z: -deltaZ * (i + 1) }));
  const max = min.map(d => ({ y: range + d.y, z: range + d.z }));
  console.log({ min, max });

  const [currentIndex, setCurrentIndex] = useState(1);
  const [styles, setStyles] = useState(min);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  });

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

      console.log('onWheel.down', { deltaY: e.deltaY, currentIndex, newStyles });
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 50);
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

      console.log('onWheel.up', { deltaY: e.deltaY, currentIndex, newStyles });
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1);
      }, 50);
    }
  };

  return (
    <Container cardCount={networks.length > 10 ? 10 : networks.length}>
      <div className="view">
        <div className="cards">
          {networks.map((x, i) => (
            <Skeleton
              key={x}
              title={`${x}#${i}`}
              width={1230}
              className="card"
              onWheel={onWheel}
              style={{
                zIndex: total - i,
                transform: `translate3d(0px, ${styles[i].y}px, ${styles[i].z}px)`,
                opacity: styles[i].opacity === undefined ? 1 : styles[i].opacity,
              }}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 100%;
  max-width: ${props => props.theme.pageWidth}px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .view {
    -webkit-perspective: 1200px;
    -webkit-perspective-origin-x: 650px;
    width: 1296px;
    margin: 0 auto;
    height: 1800px;
    position: relative;
  }

  .cards {
    position: relative;
    width: 100%;
    height: 100%;
    margin-top: 10%;
  }

  .card {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1800px;
    transition: all 300ms linear;
  }
`;
