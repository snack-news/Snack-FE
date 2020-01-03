import React, { FC } from 'react';
import styled from 'styled-components';

import { SLATE_GREY } from '~nclient/constants/colors';
import { copyImg } from '~nclient/resources';

interface IProps {
  onClick: () => void;
}

export const CopyLinkButton: FC<IProps> = ({ onClick, children }) => (
  <StyledButton onClick={onClick}>
    <CopyIcon />
    <CopyLabel>{children}</CopyLabel>
  </StyledButton>
);

const StyledButton = styled.button`
  padding: 15px;
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background: transparent;
  border-width: 0;
`;

const CopyIcon = styled.img.attrs({ src: copyImg })`
  width: 16px;
  margin: 2px 4px;
`;

const CopyLabel = styled.div`
  margin-left: 3px;
  font-size: 13px;

  color: ${SLATE_GREY};
`;
