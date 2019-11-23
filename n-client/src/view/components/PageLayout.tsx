import React, { ReactElement, FC } from 'react';
import styled from 'styled-components';

interface Props {
  children: {
    header?: ReactElement;
    main?: ReactElement;
    footer?: ReactElement;
  };
}

export const PageLayout: FC<Props> = ({ children: { header, main, footer } }) => (
  <Wrapper>
    {header}
    <Main>{main}</Main>
    {footer}
  </Wrapper>
);

const MAX_WIDTH = 600;

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  max-width: ${MAX_WIDTH}px;
  margin: 0 auto;
`;

const Main = styled.div`
  flex: 1;
`;
