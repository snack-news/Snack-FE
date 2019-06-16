/**
 * 컴포넌트 리스트를 열 정렬을 담당하는 레이아웃 컴포넌트
 */

import React, { ReactNode, CSSProperties, SFC, ReactElement } from 'react';
import styled from 'styled-components';

interface ColItem {
  el: ReactNode;
  bottom?: CSSProperties['marginBottom'];
  key?: string;
}

interface DetailProps {
  items: ColItem[];
  top?: CSSProperties['paddingTop'];
}

const Detail = styled.div.attrs<DetailProps>(({ items }) => {
  const lastIndex = items.length - 1;

  return {
    children: (
      <Nomal>
        {items.map(({ el, bottom, key }, i) => (
          <div style={{ marginBottom: lastIndex === i ? undefined : bottom }} key={key || i}>
            {el}
          </div>
        ))}
      </Nomal>
    ),
  };
})<DetailProps>`
  padding-top: ${({ top }) => top};
  padding-bottom: ${({ items }) => items[items.length - 1].bottom};
`;

interface NomalProps {
  children: ReactElement[];
}

const Nomal: SFC<NomalProps> = ({ children }) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    {children.map(child => {
      const key = child.key === null ? undefined : child.key;

      return (
        <div style={{ flex: '1' }} key={key}>
          {child}
        </div>
      );
    })}
  </div>
);

export default { Detail, Nomal };
