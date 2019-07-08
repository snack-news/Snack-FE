import React from 'react';
import styled from 'styled-components';

import { ColListLayout, BothMarginWrapper } from 'Layouts/index';

interface ITextCardProps {
  title: string;
  text?: string;
  titleSize: string;
  textSize: string;
}

export const TextCard: React.FunctionComponent<ITextCardProps> & {
  defaultProps: Partial<ITextCardProps>;
} = ({ title, text, titleSize, textSize }) => (
  <BothMarginWrapper>
    <ColListLayout.Repeat interval="8px" top="15px" bottom="15px">
      <Title style={{ fontSize: titleSize }}>{title}</Title>
      {text && <Text style={{ fontSize: textSize }}>{text}</Text>}
    </ColListLayout.Repeat>
  </BothMarginWrapper>
);

TextCard.defaultProps = {
  titleSize: '17px',
  textSize: '13px',
};

const Title = styled.div`
  font-weight: 600;
  color: #121111;
`;

const Text = styled.div`
  color: #595966;
`;
