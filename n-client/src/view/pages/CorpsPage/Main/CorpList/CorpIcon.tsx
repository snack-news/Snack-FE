import React, { FC } from 'react';
import styled from 'styled-components';

export const CorpIcon: FC<React.ImgHTMLAttributes<HTMLImageElement>> = props => (
  <CorpIconWrapper>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <CorpIconImg {...props} />
  </CorpIconWrapper>
);

const CorpIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: rgb(254, 254, 254);
  border: 1px solid rgb(236, 236, 236);
  border-radius: 1000px;

  margin-right: 10px;
`;

const CorpIconImg = styled.img`
  max-width: 24px;
  max-height: 24px;
`;
