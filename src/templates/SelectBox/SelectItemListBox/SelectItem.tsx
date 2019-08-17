import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { RowListLayout } from 'Layouts/index';
import { IBaseLayoutProps } from 'Layouts/BaseLayout';

import { checkImg } from 'Resources/index';

interface ISelectItemProps {
  label: string;
  selected?: boolean;
  onClick?: IBaseLayoutProps['onClick'];
}

const SelectItem: FunctionComponent<ISelectItemProps> = ({ label, selected, onClick }) => {
  return (
    <RowListLayout.Align type="justify" onClick={onClick}>
      <SelectItemLabel>{label}</SelectItemLabel>
      {selected && <CheckmarkIcon />}
    </RowListLayout.Align>
  );
};

const SelectItemLabel = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #121111;
`;

const CheckmarkIcon = styled.img.attrs({ src: checkImg })`
  width: 14px;
`;

export default SelectItem;
