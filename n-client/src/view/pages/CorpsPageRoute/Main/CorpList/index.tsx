import React, { FC } from 'react';

import { Corp } from './Corp';

import { useCorps } from '~nclient/hooks/useCorps';

interface IProps {}

export const CorpList: FC<IProps> = () => {
  const corps = useCorps();

  return (
    <>
      {corps &&
        corps.map(({ id, image, name }) => (
          <Corp to={`newslist/corp/${id}`} image={image || undefined} key={id}>
            {name}
          </Corp>
        ))}
    </>
  );
};
