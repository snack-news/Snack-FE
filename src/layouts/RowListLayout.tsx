/**
 * 컴포넌트 리스트의 행 정렬을 담당하는 컴포넌트
 */

import React, { ReactNode, CSSProperties, ReactElement, SFC } from 'react';
import styled from 'styled-components';

interface BaseProps {
  children: (ReactElement | string | null | undefined)[];
}

const Base = styled.div<BaseProps>`
  display: flex;
  flex-grow: 1;

  align-items: center;
`;

const Between = styled(Base)`
  justify-content: space-between;
`;

interface RowItem {
  el: ReactNode;
  right?: CSSProperties['marginRight'];
  flex?: CSSProperties['flex'];
  key?: string;
}

interface DetailProps {
  items: RowItem[];
  left?: CSSProperties['paddingLeft'];
  className?: string;
}

const Detail: SFC<DetailProps> = ({ items, left, className }) => {
  const lastIndex = items.length - 1;

  return (
    <Base
      className={className}
      style={{ paddingLeft: left, paddingRight: items[items.length - 1].right }}
    >
      {items.map(({ el, right, flex, key }, i) => (
        <div style={{ marginRight: lastIndex === i ? undefined : right, flex }} key={key || i}>
          {el}
        </div>
      ))}
    </Base>
  );
};

interface RepeatProps {
  children: (ReactElement | string | null | undefined)[];
  interval?: CSSProperties['paddingLeft'];
  className?: string;
}

const Repeat: SFC<RepeatProps> = ({ children, interval, className }) => {
  const lastIndex = children.length - 1;

  return (
    <Base className={className} style={{ paddingRight: interval }}>
      {children.map((child, i) => {
        if (child === null || child === undefined || typeof child === 'string') {
          return child;
        }

        const key = child.key === null ? undefined : child.key;

        return (
          <div style={{ marginRight: lastIndex === i ? undefined : interval }} key={key}>
            {child}
          </div>
        );
      })}
    </Base>
  );
};

export const RowListLayout = { Detail, Between, Repeat };
