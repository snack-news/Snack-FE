import { useAxios } from './useAxios';

import { CORP_API_URL } from '~src/constants/API_URL';

export const useCorps = () => {
  const res = useAxios<{ data: ICorp[] }>({ url: CORP_API_URL, method: 'GET' });

  if (!res) {
    return undefined;
  }

  return res.data.data;
};
