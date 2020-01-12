import React, { FC } from 'react';
import styled from 'styled-components';

import { useLinkMetaData } from './useLinkMetaData';
import { LinkImg } from './LinkImg';

import { LinkDesc } from './LinkDesc';

interface IProps {
  link: string;
}

export const NewsMeta: FC<IProps> = ({ link }) => {
  const meta = useLinkMetaData(link);

  if (!meta) {
    return null;
  }

  return (
    <Wrapper>
      {meta.image && <LinkImg image={meta.image} />}
      <LinkDesc title={meta.title || undefined} link={link} />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 0 0 20px 0;
`;
