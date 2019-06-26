import React from 'react';
import styled from 'styled-components';
import { BothMarginWrapper } from 'Layouts/index';

import {
  Header,
  HorizontalDivider,
  Footer,
  TextCard,
  TextField
} from 'Templates/index';

const Wrapper = styled.div``;

const PicksPage = () => (
  <Wrapper>
    <Header />
    <HorizontalDivider />
    <TextCard
      title="Snack에 소개하고 싶은 소식이나 링크를 알려주세요!"
    />
    <BothMarginWrapper depth={2}>
      <TextField />
    </BothMarginWrapper>
    <HorizontalDivider thick />
    <Footer />
  </Wrapper>
);

export default PicksPage;
