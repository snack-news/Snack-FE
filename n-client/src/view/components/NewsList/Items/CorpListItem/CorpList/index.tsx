import React, { FC } from 'react';
import styled from 'styled-components';

import { Corp } from './Corp';

import { useCorps } from '~nclient/hooks/useCorps';

interface IProps {}

export const CorpList: FC<IProps> = () => {
  const corps = useCorps();
  if (!corps) return null;

  return (
    <Wrapper>
      {corps.map(({ name, image, id }) => (
        <Corp name={name} image={image} key={id} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;

  padding-right: 20px;
  padding-left: 20px;
  overflow: auto;

  > * {
    margin-right: 10px;
  }
`;
