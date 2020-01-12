import { useState, useCallback } from 'react';

type Status = 'OBSERVING' | 'LOADING' | 'RENDERED' | 'DONE';

export const useStatus = () => {
  const [status, setStatus] = useState<Status>('OBSERVING');

  const setLoading = useCallback(() => {
    setStatus('LOADING');
  }, []);

  const setRendered = useCallback(() => {
    setStatus('RENDERED');
  }, []);

  const setDone = useCallback(() => {
    setStatus('DONE');
  }, []);

  return {
    status,
    setLoading,
    setRendered,
    setDone,
  };
};
