/**
 * 컴포넌트 리스트의 행 정렬을 담당하는 컴포넌트
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
        flexDirection: 'row',
        alignItems: 'center',
        ...style,
      }}
    />
  );
};

/**
 * 아이템 사이의 간격을 일정하게 맞춰주는 행 레이아웃 컴포넌트
 */
const JustifyAlign: FunctionComponent<IBaseLayoutProps> = props => {
  const { style } = props;

  return (
    <Base
      {...props}
      style={{
        justifyContent: 'space-between',
        ...style,
      }}
    />
  );
};

interface IRowItem {
  el: ReactNode;
  right?: CSSLength;
  flex?: CSSProperties['flex'];
  key?: string;
}

interface IDetailProps extends IBaseLayoutProps {
  items: IRowItem[];
}

/**
 * 간격을 설정할수 잇는 행 레이아웃 컴포넌트
 */
const Detail: FunctionComponent<IDetailProps> = props => {
  const { items, ...baseProps } = props;
  const lastIndex = items.length - 1;

  return (
    <Base {...baseProps}>
      {items.map(
        ({ el, right: itemRight, flex, key }, i) =>
          el && (
            <div
              style={{ marginRight: lastIndex === i ? undefined : itemRight, flex }}
              key={key || i}
            >
              {el}
            </div>
          )
      )}
    </Base>
  );
};

interface IRepeatProps extends IBaseLayoutProps {
  children: ReactNode[];
  interval?: CSSLength;
}

/**
 * 동일한 간격을 가진 행 레이아웃 컴포넌트
 */
const Repeat: FunctionComponent<IRepeatProps> = props => {
  const { children, interval, ...baseProps } = props;

  return (
    <Detail
      {...baseProps}
      items={children.map(child => ({
        el: child,
        right: interval,
      }))}
    />
  );
};

export const RowListLayout = { Detail, JustifyAlign, Repeat };
