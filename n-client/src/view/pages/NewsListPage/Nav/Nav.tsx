import React from 'react';
import styled from 'styled-components';

import { SelectWeekRange } from './SelectWeekRange';
import { IndexPageAnchor } from './IndexPageAnchor';

interface Props {}

export const Nav: React.FC<Props> = () => {
  return (
    <NavStyled>
      <SelectWeekRange />
      <IndexPageAnchor />
    </NavStyled>
  );
};

const NavStyled = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`;
