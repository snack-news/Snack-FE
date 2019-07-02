import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { RowListLayout } from 'Layouts/index';

import { checkmark } from 'Resources/index';

interface ISelectItemProps {
  label: string;
  selected?: boolean;
}

const SelectItem: FunctionComponent<ISelectItemProps> = ({ label, selected }) => {
  return (
    <RowListLayout.JustifyAlign>
      <SelectItemLabel>{label}</SelectItemLabel>
      {selected && <CheckmarkIcon />}
    </RowListLayout.JustifyAlign>
  );
};

const SelectItemLabel = styled.div`
  font-family: SFProText;
  font-size: 15px;
  font-weight: 500;
  color: #121111;
`;

const CheckmarkIcon = styled.img.attrs({ src: checkmark })`
  width: 18px;
`;

export default SelectItem;
