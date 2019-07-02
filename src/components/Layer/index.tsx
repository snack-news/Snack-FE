/**
 * 뒤 배경을 회색 반투명 레이어로 덮는 컴포넌트.
 * body태그 스크롤도 막는다.
 */

import React, { useEffect } from 'react';

import styles from './styles.css';

export const Layer = () => {
  useEffect(() => {
    document.body.classList.add(styles.scrollHidden);
    return () => {
      document.body.classList.remove(styles.scrollHidden);
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,

          right: 0,
          left: 0,
          backgroundColor: 'rgba(18, 17, 17, 0.7)',
          height: '150%',
        }}
      />
    </>
  );
};
