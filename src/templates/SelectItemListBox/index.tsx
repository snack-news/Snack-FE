import React from 'react';
import styled from 'styled-components';

import { ColListLayout, RowListLayout, BothMarginWrapper } from 'Layouts/index';

import { cancelGary } from 'Resources/index';
import { HorizontalDivider } from 'Templates/index';

import { Layer } from 'Components/index';
import SelectItemList from './SelectItemList';

export const SelectItemListBox = () => {
  return (
    <>
      <Layer />
      <div style={{ position: 'fixed', bottom: 0, right: 0, left: 0, backgroundColor: '#fff' }}>
        <ColListLayout.Detail
          top="20px"
          bottom="20px"
          items={[
            {
              el: (
                <BothMarginWrapper>
                  <SelectItemListBoxHeader />
                </BothMarginWrapper>
              ),
              bottom: '15px',
            },
            {
              el: <HorizontalDivider />,
            },
            {
              el: (
                <BothMarginWrapper>
                  <SelectItemList />
                </BothMarginWrapper>
              ),
            },
          ]}
        />
      </div>
    </>
  );
};

const SelectItemListBoxHeader = () => {
  return (
    <RowListLayout.Align type="justify">
      <SelectItemListBoxTitle />
      <CloseButton />
    </RowListLayout.Align>
  );
};

const SelectItemListBoxTitle = styled.div.attrs({ children: '조회할 주 선택' })`
  font-size: 17px;
  color: #121111;
`;

const CloseButton = styled.img.attrs({ src: cancelGary })`
  width: 30px;
`;
