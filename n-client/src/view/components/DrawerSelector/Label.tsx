import React from 'react';
import styled from 'styled-components';

import { black } from '~nclient/view/atoms/styles/colors';
import { Medium } from '~nclient/view/atoms/styles/fonts';
import { DownarrowFilter } from '~nclient/view/atoms/styles/Icons';

interface Props {
  onClick: () => void;
  style?: React.CSSProperties;
}

export const Label: React.FC<Props> = ({ children, onClick, style }) => (
  <Button onClick={onClick} style={style}>
    <LabelWrapper>{children}</LabelWrapper>
    <DownarrowFilterStyled />
  </Button>
);

const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;

  background: transparent;
  border-width: 0;
`;

const DownarrowFilterStyled = styled(DownarrowFilter)`
  display: block;
  width: 13px;
  padding: 0px 10px;
`;

const LabelWrapper = styled.span`
  ${Medium}
  color: ${black};
`;
