import React from 'react';
import styled from 'styled-components';

import { checkImg } from '~nclient/resources';

interface Props {
  selected?: boolean;
  onClick?: () => void;
}

export const OptionItem: React.FC<Props> = ({ selected, onClick, children }) => (
  <Wrapper onClick={onClick}>
    <Label>{children}</Label>
    {selected && <SelectedIcon />}
  </Wrapper>
);

const Wrapper = styled.div`
  padding: 0 20px 0 20px;
  height: 47px;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Label = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: rgb(18, 17, 17);
`;

const SelectedIcon = styled.img.attrs({ src: checkImg })`
  width: 14px;
`;
