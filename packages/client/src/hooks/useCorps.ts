import { useEffect, useState } from 'react';

import { fetchCorps } from '~src/api/fetchCorps';

export const useCorps = () => {
  const [corps, setCorps] = useState<ICorp[]>();

  useEffect(() => {
    fetchCorps().then(newCorps => setCorps(newCorps));
  }, []);

  return corps;
};
