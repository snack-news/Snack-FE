import { useMemo } from 'react';

import { useCorps } from './useCorps';

export const useCorp = (corpId: number) => {
  const corps = useCorps();

  return useMemo(() => {
    if (corps) {
      return corps.find(({ id }) => id === corpId);
    }

    return undefined;
  }, [corpId, corps]);
};
