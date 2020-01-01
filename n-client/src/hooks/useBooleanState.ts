import { useState, useCallback } from 'react';

export const useBooleanState = (defaultValue: boolean) => {
  const [state, setState] = useState(defaultValue);

  const setFalse = useCallback(() => setState(false), []);
  const setTrue = useCallback(() => setState(true), []);
  const toggle = useCallback(() => setState(!state), [state]);

  return { state, setState, setFalse, setTrue, toggle };
};
