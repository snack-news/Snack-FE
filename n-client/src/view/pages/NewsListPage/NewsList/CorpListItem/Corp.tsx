import React, { FC } from 'react';
import styled from 'styled-components';

import { slateGrey } from '~nclient/view/atoms/styles/colors';

interface Props {}

export const Corp: FC<Props> = () => {
  return (
    <Wrapper>
      <CorpLogoWrapper>
        <CorpLogo src="https://snak.news/logo/woowa.svg" />
      </CorpLogoWrapper>
      <Label>nesoy</Label>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  padding-top: 12px;
  padding-bottom: 8px;

  display: flex;
  flex-direction: column;
  text-decoration: none;

  min-width: 89px;
  min-height: 74px;
  border-radius: 5px;
  border-width: 0.5px;
  border-style: solid;
  border-color: rgb(214, 214, 219);
  border-image: initial;
  box-sizing: border-box;

  font-family: 'Noto Sans KR', sans-serif;
`;

const CorpLogoWrapper = styled.div`
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CorpLogo = styled.img`
  max-width: 72px;
  max-height: 35px;
  min-height: 35px;
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: ${slateGrey};
`;
