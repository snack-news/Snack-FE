/**
 * 컴포넌트 리스트를 열 정렬을 담당하는 레이아웃 컴포넌트
 */

import React, { ReactNode, CSSProperties, FunctionComponent } from 'react';
import styled from 'styled-components';

import { BaseLayout } from './BaseLayout';

type CSSLength = CSSProperties['marginBottom'];

const Base = styled(BaseLayout)`
  flex-direction: column;
`;

interface IColItem {
  el: ReactNode;
  bottom?: CSSLength;
  key?: string;
}

interface IDetailProps {
  items: IColItem[];
  className?: string;
  top?: CSSLength;
  bottom?: CSSLength;
}

/**
 * 아이템마다 간격을 설정할수 있는 레이아웃
 */
const Detail: FunctionComponent<IDetailProps> = ({ items, className, top, bottom }) => {
  const lastIndex = items.length - 1;

  return (
    <Base className={className} style={{ paddingTop: top, paddingBottom: bottom }}>
      {items.map(
        ({ el, bottom: itemBottom, key }, i) =>
          el && (
            <div style={{ marginBottom: lastIndex === i ? undefined : itemBottom }} key={key || i}>
              {el}
            </div>
          )
      )}
    </Base>
  );
};

interface IRepeatProps {
  children: ReactNode[];
  interval?: CSSProperties['marginBottom'];
  className?: string;
  top?: CSSLength;
  bottom?: CSSLength;
}

/**
 * 아이템마다 간격이 일정하면 사용하는 레이아웃 컴포넌트
 */
const Repeat: FunctionComponent<IRepeatProps> = ({
  children,
  interval,
  className,
  top,
  bottom,
}) => (
  <Detail
    {...{ className, top, bottom }}
    items={children.map(child => ({
      el: child,
      bottom: interval,
    }))}
  />
);

export const ColListLayout = { Repeat, Detail };
