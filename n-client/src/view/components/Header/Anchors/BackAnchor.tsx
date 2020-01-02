import React, { FC, useCallback } from 'react';
import styled from 'styled-components';

import { useHistory } from 'react-router';

import { backBlueArrowImg } from '~nclient/resources';

export const BackAnchor: FC = () => {
  const history = useHistory();
  const clickHandler = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <Button onClick={clickHandler}>
      <BackBlueArrowIcon />
    </Button>
  );
};

// TODO 빈 스타일 버튼 코드로 분리
const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 0px 20px;
  height: 100%;

  border: 0;
  margin: 0;
  background-color: transparent;
`;

const BackBlueArrowIcon = styled.img.attrs({ src: backBlueArrowImg })`
  display: block;
  height: 22px;
`;
