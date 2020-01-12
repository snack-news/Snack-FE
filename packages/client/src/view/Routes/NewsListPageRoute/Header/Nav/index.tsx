import React, { FC } from 'react';
import styled from 'styled-components';

import { SelectWeekRange } from './SelectWeekRange';
// import { IndexPageAnchor } from './IndexPageAnchor';

interface IProps {
  startDateTime: string;
}

export const Nav: FC<IProps> = ({ startDateTime }) => (
  <NavStyled>
    <SelectWeekRange currentValue={startDateTime} />
    {/* <IndexPageAnchor /> */}
  </NavStyled>
);

const NavStyled = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
  height: 47px;
`;
