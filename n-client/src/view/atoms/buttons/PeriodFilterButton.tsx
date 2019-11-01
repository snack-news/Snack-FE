import React, { FC } from 'react';
import styled from 'styled-components';

import { Downarrow } from '../styles/Icons';

import { black } from '~nclient/view/atoms/styles/colors';
import { Medium } from '~nclient/view/atoms/styles/fonts';

export const PeriodFilterButton: FC = ({ children }) => {
  return (
    <Button>
      <Label>{children}</Label>
      <DownarrowIcon />
    </Button>
  );
};

const Button = styled.button`
  width: 117px;
  height: 45px;
  border-width: 0px;
`;

const DownarrowIcon = styled(Downarrow)`
  height: 7px;
  vertical-align: middle;
`;

const Label = styled.span`
  ${Medium}
  color: ${black};

  vertical-align: middle;
  margin-right: 10px;
`;
