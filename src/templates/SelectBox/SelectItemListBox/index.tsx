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
      <div style={{ position: 'fixed', bottom: 0, right: 0, left: 0, backgroundColor: '#fff' }}>
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
      </div>
    </>
  );
};

const SelectItemListBoxTitle = styled.div.attrs({ children: '조회할 주 선택' })`
  font-size: 17px;
  color: #121111;
`;

const CloseButton = styled.img.attrs({ src: exitImg })`
  width: 14px;
  height: 14px;
`;
