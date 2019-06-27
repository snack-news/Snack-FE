import React from 'react';
import styled from 'styled-components';
import { BothMarginWrapper, ColListLayout, Center } from 'Layouts/index';

import { Header, HorizontalDivider, Footer, TextCard, TextField } from 'Templates/index';
import Button from 'Templates/Button';

const Wrapper = styled.div``;

const PicksPage = () => (
  <Wrapper>
    <Header />
    <HorizontalDivider thick />
    <TextCard titleSize="14px" title="Snack에 소개하고 싶은 소식이나 링크를 알려주세요!" />
    <HorizontalDivider thick />
    <BothMarginWrapper depth={2}>
      <ColListLayout.Detail
        top="34px"
        bottom="112px"
        items={[
          {
            el: <TextField type="text" placeholder="링크소개" />,
            bottom: '20px',
          },
          {
            el: <TextField type="text" placeholder="소개에 대한 의견" />,
            bottom: '20px',
          },
          {
            el: <TextField type="text" placeholder="키워드 입력(쉼표로 분리)" />,
            bottom: '40px',
          },
          {
            el: (
              <Center>
                <Button type="submit">제출하기</Button>
              </Center>
            ),
          },
        ]}
      />
    </BothMarginWrapper>

    <Footer />
  </Wrapper>
);

export default PicksPage;
