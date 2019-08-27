import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { ColListLayout, RowListLayout, BothMarginWrapper } from 'Layouts/index';

import { exitImg } from 'Resources/index';
import { HorizontalDivider } from 'Templates/index';

import { Layer } from '../Layer';
import SelectItemList from './SelectItemList';

interface ISelectItemListBoxProps {
  year: string;
  month: string;
  week: string;
  onClickLayer?: () => void;
  onClickCloseButton?: () => void;
  onChange: () => void;
}

export const SelectItemListBox: FunctionComponent<ISelectItemListBoxProps> = ({
  year,
  month,
  week,
  onClickLayer,
  onClickCloseButton,
  onChange,
}) => {
  return (
    <>
      <Layer onClick={onClickLayer} />
      <SelectItemListBoxWrapper>
        <ColListLayout.Detail
          top="20px"
          bottom="20px"
          items={[
            {
              el: (
                <BothMarginWrapper>
                  <RowListLayout.Align type="justify">
                    <SelectItemListBoxTitle />
                    <CloseButton onClick={onClickCloseButton} />
                  </RowListLayout.Align>
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
                  <SelectItemList year={year} month={month} week={week} onChange={onChange} />
                </BothMarginWrapper>
              ),
            },
          ]}
        />
      </SelectItemListBoxWrapper>
    </>
  );
};

const SelectItemListBoxWrapper = styled.div`
  position: fixed;
  bottom: 0;
  background-color: #fff;
  max-width: 600px;
  width: 100%;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

const SelectItemListBoxTitle = styled.div.attrs({ children: '조회할 주 선택' })`
  font-size: 17px;
  color: #121111;
`;

const CloseButton = styled.img.attrs({ src: exitImg })`
  width: 14px;
  height: 14px;
`;
