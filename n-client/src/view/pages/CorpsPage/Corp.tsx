import React from 'react';
import styled from 'styled-components';

import { ArrowLink } from '~nclient/view/atoms/styles/Icons';

interface Props {}

export const Corp: React.FC<Props> = () => {
  return (
    <Wrapper>
      <CorpIconWrapper>
        <CorpIcon src="https://snak.news/logo/woowa.svg" />
      </CorpIconWrapper>
      <Label>nesoy</Label>
      <ArrowLinkIcon />
    </Wrapper>
  );
};

const Wrapper = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin: 12px 20px 12px 20px;
`;

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

const CorpIcon = styled.img`
  max-width: 24px;
  max-height: 24px;
`;

const Label = styled.span`
  flex: 1;

  font-size: 14px;
  font-weight: 500;
  color: rgb(18, 17, 17);
`;

const ArrowLinkIcon = styled(ArrowLink)`
  width: 8px;
`;
