import React, { FC } from 'react';

import { Corp } from './Corp';

import { useCorps } from '~nclient/hooks/useCorps';

interface Props {}

export const CorpList: FC<Props> = () => {
  const corps = useCorps();

  return (
    <>
      {corps &&
        corps.map(({ id, image, name }) => (
          <Corp to={`/corp/${id}`} image={image || undefined} key={id}>
            {name}
          </Corp>
        ))}
    </>
  );
};
