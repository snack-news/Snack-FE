import React, { FC } from 'react';
import styled from 'styled-components';

import { BLACK } from '~nclient/constants/colors';
import { checkImg } from '~nclient/resources';

interface IProps {
  selected?: boolean;
  onClick?: () => void;
}

export const Option: FC<IProps> = ({ selected, onClick, children }) => (
  <Wrapper onClick={onClick}>
    <Label>{children}</Label>
    {selected && <CheckIcon />}
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
  color: ${BLACK};
`;

const CheckIcon = styled.img.attrs({ src: checkImg })`
  width: 14px;
`;
