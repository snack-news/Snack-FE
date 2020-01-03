import React, { FC } from 'react';
import styled from 'styled-components';

import { exitWhiteImg } from '~nclient/resources';
import { useGoBack } from '~nclient/hooks/useGoBack';

interface IProps {}

export const CloseButton: FC<IProps> = () => {
  const goBack = useGoBack();

  return (
    <Button onClick={goBack}>
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
