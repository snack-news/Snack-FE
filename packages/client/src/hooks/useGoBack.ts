import { useCallback } from 'react';

import { useHistory } from 'react-router';

export const useGoBack = () => {
  const history = useHistory();
  const goBack = useCallback(() => {
    history.goBack();
  }, [history]);

  return goBack;
};
