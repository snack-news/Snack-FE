import React, { FC, useCallback } from 'react';
import styled from 'styled-components';

import { useHistory } from 'react-router';

import { exitWhiteImg } from '~nclient/resources';

interface Props {}

export const CloseButton: FC<Props> = () => {
  const history = useHistory();
  const clickHandler = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <Button onClick={clickHandler}>
      <ExitWhiteIcon />
    </Button>
  );
};

const ExitWhiteIcon = styled.img.attrs({ src: exitWhiteImg })`
  display: block;
  width: 18px;
  margin: 6px;
`;

// TODO 빈 스타일 버튼 코드로 분리
const Button = styled.button`
  padding: 0;
  border: 0;
  margin: 0;
  background-color: transparent;
`;
