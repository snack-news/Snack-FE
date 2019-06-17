/**
 * 컴포넌트 리스트의 행 정렬을 담당하는 컴포넌트
 */

import React, { ReactNode, CSSProperties, ReactElement, SFC } from 'react';
import styled from 'styled-components';

interface NormalProps {
  children: (ReactElement | undefined)[];
}

const Normal = styled.div<NormalProps>`
  display: flex;
  align-items: center;
  flex: 1;
`;

const Between = styled(Normal)`
  justify-content: space-between;
`;

interface RowItem {
  el: ReactNode;
  right?: CSSProperties['marginRight'];
  flex?: CSSProperties['flex'];
  key?: string;
}

interface RowListLayoutProps {
  items: RowItem[];
  left?: CSSProperties['paddingLeft'];
  className?: string;
}

const Detail: SFC<RowListLayoutProps> = ({ items, left, className }) => {
  const lastIndex = items.length - 1;

  return (
    <Normal
      className={className}
      style={{ paddingLeft: left, paddingRight: items[items.length - 1].right }}
    >
      {items.map(({ el, right, flex, key }, i) => (
        <div style={{ marginRight: lastIndex === i ? undefined : right, flex }} key={key || i}>
          {el}
        </div>
      ))}
    </Normal>
  );
};

interface RepeatProps {
  children: ReactElement[];
  interval: CSSProperties['paddingLeft'];
  className?: string;
}

const Repeat: SFC<RepeatProps> = ({ children, interval, className }) => {
  const lastIndex = children.length - 1;

  return (
    <Normal className={className} style={{ paddingRight: interval }}>
      {children.map((child, i) => (
        <div
          style={{ marginRight: lastIndex === i ? undefined : interval }}
          key={child.key === null ? undefined : child.key}
        >
          {child}
        </div>
      ))}
    </Normal>
  );
};

export default { Normal, Detail, Between, Repeat };
