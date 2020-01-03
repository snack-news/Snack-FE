import React, { FC } from 'react';
import styled from 'styled-components';

interface IProps {
  src: string;
}

export const CorpLogo: FC<IProps> = ({ src }) => (
  <Wrapper>
    <StyledImg src={src} />
  </Wrapper>
);

const Wrapper = styled.div`
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledImg = styled.img`
  max-width: 72px;
  max-height: 35px;
  min-height: 35px;
`;
