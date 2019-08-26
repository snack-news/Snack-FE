/**
 * Layout 의 기본 레이아웃
 * 모든 레이아웃 컴포넌트에 적용된다.
 */
import React, { FunctionComponent, CSSProperties } from 'react';

type CSSLength = CSSProperties['marginBottom'];

export interface IBaseLayoutProps {
  className?: string;
  top?: CSSLength;
  bottom?: CSSLength;
  left?: CSSLength;
  right?: CSSLength;
  style?: CSSProperties;
  onClick?: React.DOMAttributes<HTMLDivElement>['onClick'];
}

export const BaseLayout: FunctionComponent<IBaseLayoutProps> = ({
  children,
  className,
  top,
  bottom,
  left,
  right,
  style,
  onClick,
}) => {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      style={{
        display: 'flex',
        flexGrow: 1,
        paddingTop: top,
        paddingBottom: bottom,
        paddingLeft: left,
        paddingRight: right,
        ...style,
      }}
      className={className}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
