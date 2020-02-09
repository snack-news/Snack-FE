import React, { FC } from 'react';

import { Corp } from './Corp';

import { useCorps } from '~src/hooks/useCorps';
import { CORPS_NEWS_PATH } from '~src/constants/paths';

interface IProps {}

export const CorpList: FC<IProps> = () => {
  const corps = useCorps();

  return (
    <>
      {corps &&
        corps.map(({ id, image, name }) => (
          <Corp to={`${CORPS_NEWS_PATH}/${id}`} image={image || undefined} key={id}>
            {name}
          </Corp>
        ))}
    </>
  );
};
