/**
 * 컴포넌트 리스트를 열 정렬을 담당하는 레이아웃 컴포넌트
 */

import React, { ReactNode, CSSProperties, SFC, ReactElement } from 'react';
import styled from 'styled-components';

const Base = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

interface ColItem {
  el: ReactNode;
  bottom?: CSSProperties['marginBottom'];
  key?: string;
}

interface DetailProps {
  items: ColItem[];
  top?: CSSProperties['paddingTop'];
}

const Detail = styled(Base).attrs<DetailProps>(({ items }) => {
  const lastIndex = items.length - 1;

  return {
    children: items.map(({ el, bottom, key }, i) => (
      <div style={{ marginBottom: lastIndex === i ? undefined : bottom }} key={key || i}>
        {el}
      </div>
    )),
  };
})<DetailProps>`
  padding-top: ${({ top }) => top};
  padding-bottom: ${({ items }) => items[items.length - 1].bottom};
`;

interface RepeatProps {
  children: (ReactElement | string | null | undefined)[];
  interval?: CSSProperties['marginBottom'];
}

const Repeat: SFC<RepeatProps> = ({ children, interval }) => (
  <Detail
    items={children.map((child, i) => ({
      el: child,
      bottom: i === children.length - 1 ? undefined : interval,
    }))}
  />
);

export const ColListLayout = { Repeat, Detail };
