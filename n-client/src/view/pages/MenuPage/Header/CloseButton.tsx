import React, { FC, useCallback } from 'react';
import styled from 'styled-components';

import { useHistory } from 'react-router';

import { ExitWhite } from '~nclient/view/atoms/styles/Icons';

interface Props {}

export const CloseButton: FC<Props> = () => {
  const history = useHistory();
  const clickHandler = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <Button onClick={clickHandler}>
      <ExitWhiteStyeld />
    </Button>
  );
};

const ExitWhiteStyeld = styled(ExitWhite)`
  display: block;
  width: 18px;
  margin: 6px;
`;

const Button = styled.button`
  padding: 0;
  border: 0;
  margin: 0;
  background-color: transparent;
`;
