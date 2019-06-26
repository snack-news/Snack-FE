import React, { ReactElement, SFC } from 'react';

import { ColListLayout, RowListLayout, BothMarginWrapper } from 'Layouts/index';

interface ICardSimpleLayoutProps {
  children: {
    header?: ReactElement;
    nav?: ReactElement;
    body?: ReactElement;
  };
}

export const CardSimpleLayout: SFC<ICardSimpleLayoutProps> = ({
  children: { header, nav, body },
}) => (
  <ColListLayout.Detail
    top="30px"
    bottom="30px"
    items={[
      {
        el: (
          <BothMarginWrapper>
            <RowListLayout.Between>
              {header}
              {nav}
            </RowListLayout.Between>
          </BothMarginWrapper>
        ),
        bottom: '20px',
      },
      {
        el: <BothMarginWrapper>{body}</BothMarginWrapper>,
      },
    ]}
  />
);
