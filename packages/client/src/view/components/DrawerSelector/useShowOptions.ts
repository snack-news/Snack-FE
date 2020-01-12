import { useState, useCallback } from 'react';

export const useShowOptions = (initValue: boolean) => {
  const [isShowOptions, setIsShowOptions] = useState<boolean>(initValue);

  const showOptions = useCallback(() => setIsShowOptions(true), []);
  const hideOptions = useCallback(() => setIsShowOptions(false), []);

  return { isShowOptions, showOptions, hideOptions };
};
