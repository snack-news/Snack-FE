/**
 * 컴포넌트 리스트의 행 정렬을 담당하는 컴포넌트
 */

import React, { ReactNode, CSSProperties, ReactElement, SFC } from 'react';
import styled from 'styled-components';
import { BaseLayout } from './BaseLayout';

type CSSLength = CSSProperties['marginBottom'];

interface BaseProps {
  children: (ReactElement | string | null | undefined)[];
}

const Base = styled(BaseLayout)<BaseProps>`
  align-items: center;
`;

const Between = styled(Base)`
  justify-content: space-between;
`;

interface RowItem {
  el: ReactNode;
  right?: CSSLength;
  flex?: CSSProperties['flex'];
  key?: string;
}

interface DetailProps {
  items: RowItem[];
  className?: string;
  left?: CSSLength;
  right?: CSSLength;
}

const Detail: SFC<DetailProps> = ({ items, className, left, right }) => {
  const lastIndex = items.length - 1;

  return (
    <Base className={className} style={{ paddingLeft: left, paddingRight: right }}>
      {items.map(({ el, right: itemRight, flex, key }, i) => (
        <div style={{ marginRight: lastIndex === i ? undefined : itemRight, flex }} key={key || i}>
          {el}
        </div>
      ))}
    </Base>
  );
};

interface RepeatProps {
  children: (ReactElement | string | null | undefined)[];
  interval?: CSSLength;
  className?: string;
  left?: CSSLength;
  right?: CSSLength;
}

const Repeat: SFC<RepeatProps> = ({ children, interval, className, left, right }) => (
  <Detail
    {...{ className, left, right }}
    items={children.map(child => ({
      el: child,
      bottom: interval,
    }))}
  />
);

export const RowListLayout = { Detail, Between, Repeat };
