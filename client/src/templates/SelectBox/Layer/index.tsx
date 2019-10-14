/**
 * 뒤 배경을 회색 반투명 레이어로 덮는 컴포넌트.
 * body태그 스크롤도 막는다.
 */

import React, { useEffect, FunctionComponent } from 'react';

import styles from './styles.css';

interface ILayerProps {
  onClick: React.DOMAttributes<HTMLDivElement>['onClick'];
}

export const Layer: FunctionComponent<ILayerProps> = ({ onClick }) => {
  useEffect(() => {
    document.body.classList.add(styles.scrollHidden);
    return () => {
      document.body.classList.remove(styles.scrollHidden);
    };
  }, []);

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/interactive-supports-focus
    <div
      onClick={onClick}
      role="button"
      style={{
        position: 'fixed',
        top: 0,

        right: 0,
        left: 0,
        backgroundColor: 'rgba(18, 17, 17, 0.7)',
        height: '150%',
      }}
    />
  );
};
