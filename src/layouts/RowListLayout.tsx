/**
 * 컴포넌트 리스트의 행 정렬을 담당하는 컴포넌트
 */

import React, { ReactNode, CSSProperties, ReactElement, SFC } from 'react';
import styled from 'styled-components';
import { BaseLayout } from './BaseLayout';

type CSSLength = CSSProperties['marginBottom'];

interface IBaseProps {
  children: (ReactElement | string | null | undefined)[];
}

const Base = styled(BaseLayout)<IBaseProps>`
  align-items: center;
`;

const Between = styled(Base)`
  justify-content: space-between;
`;

interface IRowItem {
  el: ReactNode;
  right?: CSSLength;
  flex?: CSSProperties['flex'];
  key?: string;
}

interface IDetailProps {
  items: IRowItem[];
  className?: string;
  left?: CSSLength;
  right?: CSSLength;
}

const Detail: SFC<IDetailProps> = ({ items, className, left, right }) => {
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

interface IRepeatProps {
  children: (ReactElement | string | null | undefined)[];
  interval?: CSSLength;
  className?: string;
  left?: CSSLength;
  right?: CSSLength;
}

const Repeat: SFC<IRepeatProps> = ({ children, interval, className, left, right }) => (
  <Detail
    {...{ className, left, right }}
    items={children.map(child => ({
      el: child,
      right: interval,
    }))}
  />
);

export const RowListLayout = { Detail, Between, Repeat };
