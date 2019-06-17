import React, { ReactElement, SFC } from 'react';

import { ColListLayout, RowListLayout, BothMarginWrapper } from 'Layouts/index';

interface CardSimpleLayoutProps {
  children: {
    header?: ReactElement;
    nav?: ReactElement;
    body?: ReactElement;
  };
}

const CardSimpleLayout: SFC<CardSimpleLayoutProps> = ({ children: { header, nav, body } }) => (
  <ColListLayout.Detail
    top="20px"
    items={[
      {
        el: (
          <BothMarginWrapper>
            <RowListLayout.Between>{[header, nav]}</RowListLayout.Between>
          </BothMarginWrapper>
        ),
        bottom: '20px',
      },
      {
        el: <BothMarginWrapper>{body}</BothMarginWrapper>,
        bottom: '20px',
      },
    ]}
  />
);

export default CardSimpleLayout;
