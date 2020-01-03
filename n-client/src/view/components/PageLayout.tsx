import React, { ReactElement, FC } from 'react';
import styled from 'styled-components';

interface IProps {
  children: {
    header?: ReactElement;
    main?: ReactElement;
    footer?: ReactElement;
  };
}

export const PageLayout: FC<IProps> = ({ children: { header, main, footer } }) => (
  <Wrapper>
    {header}
    <Main>{main}</Main>
    {footer}
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Main = styled.div`
  flex: 1;
`;
