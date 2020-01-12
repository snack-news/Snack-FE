import { useState, useCallback } from 'react';

type Status = 'OBSERVING' | 'LOADING' | 'RENDERED';

export const useStatus = () => {
  const [status, setStatus] = useState<Status>('OBSERVING');

  const setLoading = useCallback(() => {
    setStatus('LOADING');
  }, []);

  const setRendered = useCallback(() => {
    setStatus('RENDERED');
  }, []);

  return {
    status,
    setLoading,
    setRendered,
  };
};
