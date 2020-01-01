import React, { FC } from 'react';
import styled from 'styled-components';

import { black } from '~nclient/constants/colors';
import { downarrowFilterImg } from '~nclient/resources';

interface Props {
  onClick: () => void;
  style?: React.CSSProperties;
}

export const Label: FC<Props> = ({ children, onClick, style }) => (
  <Button onClick={onClick} style={style}>
    <LabelWrapper>{children}</LabelWrapper>
    <DownArrowIcon />
  </Button>
);

const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;

  background: transparent;
  border-width: 0;
`;

const DownArrowIcon = styled.img.attrs({ src: downarrowFilterImg })`
  display: block;
  width: 13px;
  padding: 0px 10px;
`;

const LabelWrapper = styled.span`
  font-size: 17px;
  height: 17px;
  line-height: 17px;

  font-weight: 600;
  font-family: 'Noto Sans KR', sans-serif;

  color: ${black};
`;
