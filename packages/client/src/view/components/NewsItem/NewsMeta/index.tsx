import React, { FC } from 'react';
import styled from 'styled-components';

import { LinkImg } from './LinkImg';
import { LinkDesc } from './LinkDesc';

import { useLinkMetaData } from '~src/hooks/useLinkMetaData';

interface IProps {
  link: string;
}

export const NewsMeta: FC<IProps> = ({ link }) => {
  const meta = useLinkMetaData(link);

  if (!meta) {
    return null;
  }

  return (
    <Wrapper href={link}>
      {meta.image && <LinkImg image={meta.image} />}
      <LinkDesc title={meta.title || undefined} link={link} />
    </Wrapper>
  );
};

const Wrapper = styled.a`
  margin: 0 0 20px 0;
  text-decoration: none;
`;
