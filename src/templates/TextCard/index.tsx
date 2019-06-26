import React from 'react';
import styled from 'styled-components';

import { ColListLayout, BothMarginWrapper } from 'Layouts/index';

interface ITextCardProps {
  title: string;
  text?: string;
}

const TextCard: React.FunctionComponent<ITextCardProps> = (
  {
    title,
    text
  }
) => (
  <BothMarginWrapper>
    <ColListLayout.Repeat interval="8px" top="15px" bottom="15px">
      <Title>{title}</Title>
      {text && (
        <Text>{text}</Text>
      )}
    </ColListLayout.Repeat>
  </BothMarginWrapper>
);

const Title = styled.div`
  font-family: SFProDisplay;
  font-size: 17px;
  font-weight: 600;
  color: #121111;
`;

const Text = styled.div`
  font-family: SFProDisplay;
  font-size: 13px;
  color: #595966;
`;

export default TextCard;
