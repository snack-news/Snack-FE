import { useState } from 'react';

import { useCorps } from './useCorps';

export const useCorp = (corpId: string) => {
  const [corp, setCorp] = useState<ICorp | undefined>(undefined);
  const corps = useCorps();

  if (corps) {
    setCorp(corps.find(({ id }) => id === corpId));
  }

  return corp;
};
