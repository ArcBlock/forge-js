import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Skeleton from '../skeleton';

const deltaY = 20;
const deltaZ = 20;

export default function Animation() {
  const networks = ['main', 'origin', 'nightly', 'sandbox', 'demo'];
  const zIndex = networks.length;

  const [currentIndex, setCurrentIndex] = useState(1);
  const [styles, setStyles] = useState(
    networks.map((_, i) => ({ y: -deltaY * (i + i), z: -deltaZ * (i + i) }))
  );

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  });

  const onWheel = e => {
    if (Math.abs(e.deltaY) < 10) {
      return;
    }
    if (e.deltaY >= 0) {
      if (currentIndex >= networks.length) {
        return;
      }

      const newStyles = styles.map((d, i) => ({
        y: d.y + deltaY,
        z: d.z + deltaZ,
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
        y: d.y - deltaY,
        z: d.z - deltaZ,
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
        <div className="cards" onWheel={onWheel}>
          {networks.map((x, i) => (
            <Skeleton
              key={x}
              title={`${x}#${i}`}
              className="card"
              style={{
                zIndex: zIndex - i,
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
    height: 2000px;
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
    height: 2000px;
  }
`;
