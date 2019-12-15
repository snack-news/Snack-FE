import React from 'react';
import styled from 'styled-components';

import { black } from '~nclient/view/atoms/styles/colors';
import { Medium } from '~nclient/view/atoms/styles/fonts';
import { DownarrowFilter } from '~nclient/view/atoms/styles/Icons';

interface Props {
  onClick: () => void;
}

export const Label: React.FC<Props> = ({ children, onClick }) => {
  return (
    <Button onClick={onClick}>
      <LabelWrapper>{children}</LabelWrapper>
      <DownarrowFilterStyled />
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;

  background: transparent;
  border-width: 0;
  padding: 8px 20px;
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
