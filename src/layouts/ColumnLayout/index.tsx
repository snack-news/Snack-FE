import React, { Fragment, ReactNode, CSSProperties } from 'react';
import styled from 'styled-components';

interface ColumnItem {
  el: ReactNode;
  paddingBottom: CSSProperties['paddingBottom'];
  key: string;
}

interface ColumnLayoutProps {
  items: ColumnItem[];
  paddingTop: CSSProperties['paddingTop'];
}

const ColumnLayout = styled.div.attrs<ColumnLayoutProps>(({ items }) => ({
  children: (
    <Fragment>
      {items.map(({ el, paddingBottom, key }) => (
        <div style={{ paddingBottom }} key={key}>
          {el}
        </div>
      ))}
    </Fragment>
  ),
}))<ColumnLayoutProps>`
  padding-top: ${({ paddingTop }) => paddingTop};
`;

export default ColumnLayout;
