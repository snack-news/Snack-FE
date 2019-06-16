/**
 * 컴포넌트 리스트의 행 정렬을 담당하는 컴포넌트
 */

import React, { ReactNode, CSSProperties, ReactElement } from 'react';
import styled from 'styled-components';

interface BetweenProps {
  children: ReactElement[];
}

const Between = styled.div<BetweenProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
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
}

const Detail = styled.div.attrs<RowListLayoutProps>(({ items }) => {
  const lastIndex = items.length - 1;

  return {
    children: (
      <Between>
        {items.map(({ el, right, flex, key }, i) => (
          <div style={{ marginRight: lastIndex === i ? undefined : right, flex }} key={key || i}>
            {el}
          </div>
        ))}
      </Between>
    ),
  };
})<RowListLayoutProps>`
  padding-left: ${({ left }) => left};
  padding-right: ${({ items }) => items[items.length - 1].right};
`;

export default { Detail, Between };
