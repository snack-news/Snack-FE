/**
 * 컴포넌트 리스트를 열 정렬을 담당하는 레이아웃 컴포넌트
 */

import React, { ReactNode, CSSProperties, FunctionComponent } from 'react';

import { BaseLayout, IBaseLayoutProps } from './BaseLayout';

type CSSLength = CSSProperties['marginBottom'];

const Base: FunctionComponent<IBaseLayoutProps> = props => {
  const { style } = props;
  return (
    <BaseLayout
      {...props}
      style={{
        flexDirection: 'column',
        ...style,
      }}
    />
  );
};

interface IColItem {
  el: ReactNode;
  bottom?: CSSLength;
  key?: string;
}

interface IDetailProps extends IBaseLayoutProps {
  items: IColItem[];
}

/**
 * 아이템마다 간격을 설정할수 있는 레이아웃
 */
const Detail: FunctionComponent<IDetailProps> = props => {
  const { items, ...baseProps } = props;
  const lastIndex = items.length - 1;

  return (
    <Base {...baseProps}>
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

interface IRepeatProps extends IBaseLayoutProps {
  children: ReactNode[];
  interval?: CSSProperties['marginBottom'];
}

/**
 * 아이템마다 간격이 일정하면 사용하는 레이아웃 컴포넌트
 */
const Repeat: FunctionComponent<IRepeatProps> = props => {
  const { children, interval, ...baseProps } = props;
  const filteredChildren = children.filter(child => child);

  return (
    <Detail
      {...baseProps}
      items={filteredChildren.map(child => ({
        el: child,
        bottom: interval,
      }))}
    />
  );
};

export const ColListLayout = { Repeat, Detail };
